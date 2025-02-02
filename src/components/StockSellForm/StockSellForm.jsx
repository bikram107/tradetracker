import React, { useContext, useState } from "react";
import "./StockSellForm.css";
import { StockContext } from "../../StockContext";

const StockSellForm = () => {
  const [sellPrice, setSellPrice] = useState(0);
  const [sellQuantity, setSellQuantity] = useState(0);
  const { setSellButtonStatus, stockDetails, setStockDetails } =
    useContext(StockContext);

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

  function handleSellForm(event) {
    event.preventDefault();
    // console.log("selected Stocks", selectedStocks);
    if (selectedStocks.symbol && sellPrice && sellQuantity) {
      const sellQuantityNumber = Number(sellQuantity);
      const availableQuantity = Number(selectedStocks.quantity);
      if (isNaN(sellQuantityNumber) || sellQuantityNumber <= 0) {
        alert("Please enter a valid number");
      }
      if (sellQuantityNumber > availableQuantity) {
        alert("You cannot sell more than you have");
        return;
      } else {
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
          day: day,
          month: month,
          year: year,
          soldDate: `${day}/${month}/${year}`,
        };

        const sellBeforeReverse = Array.isArray(soldStockDetails)
          ? [...soldStockDetails, soldStock]
          : [soldStock];
        const updatedSoldStockDetails = sellBeforeReverse.reverse();
        localStorage.setItem(
          "soldStockDetails",
          JSON.stringify(updatedSoldStockDetails)
        );
        const updatedStockDetails = stockDetails.map((stock) => {
          if (stock.id == selectedStocks.id) {
            return {
              ...stock,
              quantity: stock.quantity - sellQuantityNumber,
            };
          }
          return stock;
        });
        const finalStockDetails = updatedStockDetails.filter(
          (stock) => stock.quantity > 0
        );
        setStockDetails(finalStockDetails);
        localStorage.setItem("stockDetails", JSON.stringify(finalStockDetails));
        setSoldStockDetails(updatedSoldStockDetails);
        setSellPrice(0);
        setSellQuantity(0);
        setSellButtonStatus(false);
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
