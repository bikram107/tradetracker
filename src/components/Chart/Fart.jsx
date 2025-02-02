import React, { useContext, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import { StockContext } from "../../StockContext";
import "./Chart.css";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const Fart = () => {
  const { soldStockDetails, showOutput, setShowOutput } =
    useContext(StockContext);
  const chartRef = useRef(null); // Ref for the chart canvas

  // Calculate the overall profit/loss
  useEffect(() => {
    function overallPL() {
      let totalPL = 0;
      if (soldStockDetails) {
        for (let i = 0; i < soldStockDetails.length; i++) {
          const stock = soldStockDetails[i];
          const pl = (stock.soldPrice - stock.buyPrice) * stock.soldQuantity;
          totalPL += pl;
        }
        setShowOutput(totalPL.toFixed(2)); // Set the overall profit/loss
      }
    }
    overallPL();
  }, [soldStockDetails, setShowOutput]);

  // Set up the chart once when `soldStockDetails` changes
  useEffect(() => {
    let totalProfit = 0;
    let totalLoss = 0;

    // Iterate through each sold stock and calculate profit/loss
    soldStockDetails.forEach((stock) => {
      const profitOrLoss =
        (stock.soldPrice - stock.buyPrice) * stock.soldQuantity; // Corrected formula

      // Accumulate total profit or loss
      if (profitOrLoss > 0) {
        totalProfit += profitOrLoss;
      } else {
        totalLoss += Math.abs(profitOrLoss); // Ensure loss is always a positive number
      }
    });

    const data = {
      labels: ["Profit", "Loss"],
      datasets: [
        {
          data: [totalProfit, totalLoss],
          backgroundColor: ["#4caf50", "#f44336"],
        },
      ],
    };

    // Ensure the chart is only created once and properly cleaned up
    if (chartRef.current) {
      // Destroy the previous chart instance before creating a new one
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }

      // Create a new chart instance
      const myChart = new ChartJS(chartRef.current, {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });

      // Assign the chart instance to the ref's current value
      chartRef.current.chartInstance = myChart;
    }

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      if (chartRef.current?.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [soldStockDetails]); // Only rerun when soldStockDetails changes

  return (
    <div className="overall">
      <div className="chart">
        <p>Your Overall Profit/Loss till Today is</p>
        <span
          className={`${
            showOutput > 0 ? "green" : showOutput < 0 ? "red" : null
          }`}
        >
          {showOutput}
        </span>
      </div>
      <div className="realChart">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Fart;
