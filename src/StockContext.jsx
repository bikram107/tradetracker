import React, { createContext, useState, useEffect } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  // All the states
  const [stockDetails, setStockDetails] = useState([]);
  const [showStockDetails, setShowStockDetails] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [selectedStocks, setSelectedStocks] = useState({});
  const [soldStockDetails, setSoldStockDetails] = useState([]);
  const [showSoldStockDetails, setShowSoldStockDetails] = useState([]);
  const [sellButtonStatus, setSellButtonStatus] = useState(false);
  const [category, setCategory] = useState("onGoing");
  const [searchItem, setSearchItem] = useState("");
  const [searchDetails, setSearchDetails] = useState([]);
  const [showOutput, setShowOutput] = useState([]);
  const [brokerCharge, setBrokerCharge] = useState(0);
  const [soldBrokerCharge, setSoldBrokerCharge] = useState(0);

  //Other Functions
  useEffect(() => {
    const storedStockDetails = localStorage.getItem("stockDetails");
    const storedSoldStockDetails = localStorage.getItem("soldStockDetails");
    if (storedStockDetails) {
      const parsedStocks = JSON.parse(storedStockDetails);
      setStockDetails(parsedStocks);
    }
    if (storedSoldStockDetails) {
      const parsedSoldStocks = JSON.parse(storedSoldStockDetails);

      setSoldStockDetails(parsedSoldStocks);
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
        brokerCharge,
        setBrokerCharge,
        soldBrokerCharge,
        setSoldBrokerCharge,
        showSoldStockDetails,
        setShowSoldStockDetails,
        showStockDetails,
        setShowStockDetails,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
