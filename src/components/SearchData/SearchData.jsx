import React, { useContext } from "react";
import "./SearchData.css";
import { StockContext } from "../../StockContext";

const SearchData = () => {
  const { soldStockDetails, searchItem, searchDetails } =
    useContext(StockContext);
  // console.log(searchDetails);

  return (
    <div className={`searchData ${searchDetails.length === 0 ? "hidden" : ""}`}>
      <div className="showArea showArea1">
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
          {searchDetails.length >= 0 ? (
            <ul>
              {searchDetails.map((stock, index) => (
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchData;
