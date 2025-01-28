import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { StockContext } from "../../StockContext";

import "./Chart.css";

const Chart = () => {
  const { soldStockDetails, showOutput, setShowOutput } =
    useContext(StockContext);
  function overallPL() {
    let totalPL = 0;
    for (let i = 0; i < soldStockDetails.length; i++) {
      const stock = soldStockDetails[i];
      const pl = (stock.buyPrice - stock.soldPrice) * stock.soldQuantity;

      totalPL = totalPL + pl;
    }
    setShowOutput(totalPL.toFixed(2));
  }
  overallPL();
  return (
    <div className="overall">
      <div className={`chart `}>
        <p>Your Overall Profit/Loss till Today is</p>
        <span
          className={`${
            showOutput > 0 ? "green" : showOutput < 0 ? "red" : null
          }`}
        >
          {showOutput}
        </span>
      </div>
    </div>
  );
};

export default Chart;
