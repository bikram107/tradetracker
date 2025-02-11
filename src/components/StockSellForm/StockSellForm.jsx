import React, { useContext, useState } from "react";
import "./StockSellForm.css";
import { StockContext } from "../../StockContext";

const StockSellForm = () => {
  const [sellPrice, setSellPrice] = useState(0);
  const [sellQuantity, setSellQuantity] = useState(0);
  const {
    setSellButtonStatus,
    stockDetails,
    setStockDetails,
    soldBrokerCharge,
    setSoldBrokerCharge,
    setShowStockDetails,
  } = useContext(StockContext);

  const {
    selectedStocks,

    soldStockDetails,
    setSoldStockDetails,
  } = useContext(StockContext);

  function handleSellPrice(event) {
    setSellPrice(event.target.value);
  }
  function handleSellQuantity(event) {
    setSellQuantity(event.target.value);
  }
  function handleSoldBrokerCharge(event) {
    setSoldBrokerCharge(event.target.value);
  }

  function handleSellForm(event) {
    event.preventDefault();
    //check for stock details
    if (
      selectedStocks.symbol &&
      sellPrice &&
      sellQuantity &&
      soldBrokerCharge
    ) {
      const sellQuantityNumber = Number(sellQuantity);
      const availableQuantity = Number(selectedStocks.quantity);
      if (isNaN(sellQuantityNumber) || sellQuantityNumber <= 0) {
        alert("Please enter a valid number");
      }
      if (sellQuantityNumber > availableQuantity) {
        alert("You cannot sell more than you have");
        return;
      } else {
        //creating new entry as object for the soldStocks data
        const getDate = new Date();
        const day = getDate.getDate();
        const month = getDate.getMonth() + 1;
        const year = getDate.getFullYear();
        const soldStock = {
          symbol: selectedStocks.symbol,
          quantity: selectedStocks.quantity,
          buyPrice: selectedStocks.buyPrice,
          boughtDate: selectedStocks.date,
          soldPrice: sellPrice,
          soldQuantity: sellQuantity,
          brokerCharge: selectedStocks.brokerCharge,
          day: day,
          month: month,
          year: year,
          soldBrokerCharge: soldBrokerCharge,
          soldDate: `${day}/${month}/${year}`,
          pl:
            (sellPrice - selectedStocks.buyPrice) * sellQuantity -
            selectedStocks.brokerCharge -
            soldBrokerCharge,
        };

        //Updating the array with the new created object

        const updatedSoldStockDetails = Array.isArray(soldStockDetails)
          ? [...soldStockDetails, soldStock]
          : [soldStock];

        //Storing SoldStockDetails in Local Storage
        localStorage.setItem(
          "soldStockDetails",
          JSON.stringify(updatedSoldStockDetails)
        );

        //Reducing the bought quantity from sold quantity
        const updatedStockDetails = stockDetails.map((stock) => {
          if (stock.id == selectedStocks.id) {
            return {
              ...stock,
              quantity: stock.quantity - sellQuantityNumber,
            };
          }
          return stock;
        });

        //Filtering out the stocks having 0 quantity of stocks
        const finalStockDetails = updatedStockDetails.filter(
          (stock) => stock.quantity > 0
        );
        setStockDetails(finalStockDetails); //updating the stocks details with filtered stockDetails

        localStorage.setItem("stockDetails", JSON.stringify(finalStockDetails)); //Storing the filtered stockDetails to the local storage
        setSoldStockDetails(updatedSoldStockDetails);
        setSellPrice(0);
        setSellQuantity(0);
        setSellButtonStatus(false); //removing the sell form
      }
    } else {
      alert("Please fill the form properly");
    }
  }
  // console.log(soldStockDetails);

  function handleCancel() {
    setSellPrice(0);
    setSellQuantity(0);
    setSellButtonStatus(false);
  }

  return (
    <div className="stockSellForm">
      <div className="container2">
        <form action="">
          <div>
            <label htmlFor="symbol">Symbol</label>
            <input
              type="text"
              id="symbol"
              defaultValue={selectedStocks.symbol.toUpperCase() || ""}
              // required
              readOnly
            />
          </div>
          <div>
            <label htmlFor="sellPrice">Sold Price</label>
            <input
              type="number"
              id="sellPrice"
              value={sellPrice === 0 ? "" : sellPrice}
              placeholder="Enter sold Price"
              required
              onChange={handleSellPrice}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={sellQuantity === 0 ? "" : sellQuantity}
              placeholder="Enter sold Quantity"
              required
              onChange={handleSellQuantity}
            />
          </div>
          <div>
            <label htmlFor="soldBrokerCharge">Broker Charge</label>
            <input
              type="number"
              id="soldBrokerCharge"
              value={soldBrokerCharge === 0 ? "" : soldBrokerCharge} // Show empty string when it's 0
              placeholder="Enter Broker Charge" // Placeholder text when empty
              required
              onChange={handleSoldBrokerCharge}
            />
          </div>
          <div className="quantity1">
            Quantity Available <span>{selectedStocks.quantity || 0}</span>
          </div>
          <div className="button2">
            <button type="submit" className="sell" onClick={handleSellForm}>
              Sell
            </button>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockSellForm;
