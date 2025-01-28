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
        symbol: stockSymbol,
        buyPrice: stockPrice,
        quantity: stockQuantity,
        date: currentDate,
        id: `${stockSymbol}-${ranNUm}`,
      };
      setButtonStatus(false);
      const updatedStockDetails = [...stockDetails, newData];
      localStorage.setItem("stockDetails", JSON.stringify(updatedStockDetails));
      setStockDetails(updatedStockDetails);
      setStockPrice(0);
      setStockSymbol("");
      setStockQuantity(0);
    } else {
      alert("Please fill all the fields");
    }
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
              required
              onChange={handleSymbol}
            />
          </div>
          <div>
            <label htmlFor="price">Bought Price</label>
            <input
              type="number"
              id="price"
              value={stockPrice}
              required
              onChange={handlePrice}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={stockQuantity}
              required
              onChange={handleQuantity}
            />
          </div>
          <div className="button">
            <button className="submit" onClick={handleAdd}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockAddForm;
