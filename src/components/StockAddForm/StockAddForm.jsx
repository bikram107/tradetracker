import { StockContext } from "../../StockContext.jsx";
import "./StockAddForm.css";
import React, { useContext, useState } from "react";

const StockAddForm = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockPrice, setStockPrice] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const { buttonStatus, setButtonStatus } = useContext(StockContext);
  const { stockDetails, setStockDetails } = useContext(StockContext);

  function handleSymbol(event) {
    setStockSymbol(event.target.value);
  }
  function handlePrice(event) {
    setStockPrice(event.target.value);
  }
  function handleQuantity(event) {
    setStockQuantity(event.target.value);
  }
  function handleAdd(event) {
    event.preventDefault();

    if (stockPrice && stockSymbol && stockQuantity) {
      const getDate = new Date();
      const currentDate = `${getDate.getDate()}/${
        getDate.getMonth() + 1
      }/${getDate.getFullYear()}`;
      const ranNUm = Math.floor(Math.random() * 100) + 1;
      const newData = {
        symbol: stockSymbol.toUpperCase(),
        buyPrice: stockPrice,
        quantity: stockQuantity,
        date: currentDate,
        id: `${stockSymbol}-${ranNUm}`,
      };
      setButtonStatus(false);
      const buyBeforeReverse = [...stockDetails, newData];
      const updatedStockDetails = buyBeforeReverse.reverse();
      localStorage.setItem("stockDetails", JSON.stringify(updatedStockDetails));
      setStockDetails(updatedStockDetails);
      setStockPrice(0);
      setStockSymbol("");
      setStockQuantity(0);
    } else {
      alert("Please fill all the fields");
    }
  }
  function handleCancelButton() {
    setButtonStatus(false);
  }
  return (
    <div className="stockAddForm">
      <div className="container1">
        <form action="">
          <div>
            <label htmlFor="symbol">Symbol</label>
            <input
              type="text"
              id="symbol"
              value={stockSymbol}
              placeholder="Enter symbol"
              required
              onChange={handleSymbol}
            />
          </div>
          <div>
            <label htmlFor="price">Bought Price</label>
            <input
              type="number"
              id="price"
              value={stockPrice === 0 ? "" : stockPrice} // Show empty string when it's 0
              placeholder="Enter price" // Placeholder text when empty
              required
              onChange={handlePrice}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={stockQuantity === 0 ? "" : stockQuantity} // Show empty string when it's 0
              placeholder="Enter quantity" // Placeholder text when empty
              required
              onChange={handleQuantity}
            />
          </div>
          <div className="button">
            <button className="submit" onClick={handleAdd}>
              Add
            </button>
            <button className="cancel" onClick={handleCancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockAddForm;
