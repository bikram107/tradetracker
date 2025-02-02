import React, { createContext, useState, useEffect } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  // All the states
  const [stockDetails, setStockDetails] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [selectedStocks, setSelectedStocks] = useState({});
  const [soldStockDetails, setSoldStockDetails] = useState([]);
  const [sellButtonStatus, setSellButtonStatus] = useState(false);
  const [category, setCategory] = useState("onGoing");
  const [searchItem, setSearchItem] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);
  const [showOutput, setShowOutput] = useState([]);

  //Other Functions
  useEffect(() => {
    const storedStockDetails = localStorage.getItem("stockDetails");
    const storedSoldStockDetails = localStorage.getItem("soldStockDetails");
    if (storedStockDetails) {
      setStockDetails(JSON.parse(storedStockDetails));
    }
    if (storedSoldStockDetails) {
      setSoldStockDetails(JSON.parse(storedSoldStockDetails));
    }
  }, []);

  return (
    <StockContext.Provider
      value={{
        stockDetails,
        setStockDetails,
        buttonStatus,
        setButtonStatus,
        selectedStocks,
        setSelectedStocks,
        soldStockDetails,
        setSoldStockDetails,
        sellButtonStatus,
        setSellButtonStatus,
        category,
        setCategory,
        searchItem,
        setSearchItem,
        searchDetails,
        setSearchDetails,
        showOutput,
        setShowOutput,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
