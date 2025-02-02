import React, { useState, useContext } from "react";
import { StockContext } from "../../StockContext.jsx";
import "./ShowBox.css";
import StockAddForm from "../StockAddForm/StockAddForm";
import StockSellForm from "../StockSellForm/StockSellForm.jsx";

const ShowBox = () => {
  const { stockDetails } = useContext(StockContext);
  const { buttonStatus, setButtonStatus } = useContext(StockContext);
  const { selectedStocks, setSelectedStocks } = useContext(StockContext);
  const {
    sellButtonStatus,
    setSellButtonStatus,
    category,
    setCategory,
    soldStockDetails,
  } = useContext(StockContext);

  function handleSell(stock) {
    setSelectedStocks(stock);
    setSellButtonStatus(true);
    setButtonStatus(false);
  }
  // console.log("stock Details", stockDetails);
  console.log(" sold stock Details", soldStockDetails);
  function handleAddEntry() {
    if (buttonStatus == false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
    setSellButtonStatus(false);
  }

  function handleCategory(event) {
    setCategory(event.target.value);
    setButtonStatus(false);
    setSellButtonStatus(false);
  }
  return (
    <div
      className={`showBox ${category === "onGoing" ? "width70" : "width80"}`}
    >
      <div className="category">
        <div className="categories">
          <div>
            <input
              id="onGoing"
              name="option"
              type="radio"
              value={"onGoing"}
              onChange={handleCategory}
              checked={category === "onGoing"}
            />
            <label htmlFor="onGoing">On Going</label>
          </div>
          <div>
            <input
              id="completed"
              name="option"
              type="radio"
              value={"completed"}
              onChange={handleCategory}
              checked={category === "completed"}
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>
        <button className="addEntry" onClick={handleAddEntry}>
          {buttonStatus ? "Cancel" : "Add Entry"}
        </button>
      </div>

      {buttonStatus ? (
        <div className="stockAdd">
          <StockAddForm />
        </div>
      ) : null}
      {sellButtonStatus ? (
        <div className="stockSellForm">
          <StockSellForm />
        </div>
      ) : null}
      {category === "onGoing" && (
        <div className="showArea">
          <div className="titles">
            <ul>
              <li className="symbol">Symbol</li>
              <li className="buyDate ">Buy Date</li>
              <li className="buyPrice">Buy Price</li>
              <li className="quantity">Quantity</li>
              <li className="total">Total</li>
              <li></li>
            </ul>
            <hr />
          </div>
          <div className="dataTitles ">
            <ul>
              {stockDetails.map((stock, index) => (
                <li key={index} className="details">
                  <div className="symbol">{stock.symbol.toUpperCase()}</div>
                  <div className="buyDate ">{stock.date}</div>
                  <div className="buyPrice">{stock.buyPrice}</div>
                  <div className="quantity">{stock.quantity}</div>
                  <div className="total">
                    {(stock.quantity * stock.buyPrice) % 1 === 0
                      ? stock.quantity * stock.buyPrice
                      : (stock.quantity * stock.buyPrice).toFixed(2)}
                  </div>
                  <div className="sellButton">
                    <button onClick={() => handleSell(stock)}>Sell</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {category === "completed" && (
        <div className="showArea">
          <div className="titles">
            <ul>
              <li className="symbol">Symbol</li>
              <li className="buyDate ">Buy Date</li>
              <li className="buyDate ">Sold Date</li>
              <li className="buyPrice">Buy Price</li>
              <li className="buyPrice">Sell Price</li>
              <li className="quantity">Quantity</li>
              <li className="total">Total</li>
              <li className="PL">P/L</li>
            </ul>
            <hr />
          </div>
          <div className="dataTitles ">
            <ul>
              {soldStockDetails.map((stock, index) => (
                <li key={index} className="details">
                  <div className="symbol">{stock.symbol.toUpperCase()}</div>
                  <div className="buyDate ">{stock.boughtDate}</div>
                  <div className="buyDate ">{stock.soldDate}</div>
                  <div className="buyPrice">{stock.buyPrice}</div>
                  <div className="buyPrice">{stock.soldPrice}</div>
                  <div className="quantity">{stock.soldQuantity}</div>
                  <div className="total">
                    {(stock.soldQuantity * stock.soldPrice) % 1 === 0
                      ? stock.soldQuantity * stock.soldPrice
                      : (stock.soldQuantity * stock.soldPrice).toFixed(2)}
                  </div>
                  <div
                    className={`PL ${
                      stock.soldQuantity * (stock.soldPrice - stock.buyPrice) >
                      0
                        ? "green"
                        : stock.soldQuantity *
                            (stock.soldPrice - stock.buyPrice) <
                          0
                        ? "red"
                        : null
                    }`}
                  >
                    {(stock.soldQuantity * (stock.soldPrice - stock.buyPrice)) %
                      1 ===
                    0
                      ? stock.soldQuantity * (stock.soldPrice - stock.buyPrice)
                      : stock.soldQuantity *
                        (stock.soldPrice - stock.buyPrice).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBox;
