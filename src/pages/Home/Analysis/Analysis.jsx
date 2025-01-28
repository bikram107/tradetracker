import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SearchData from "../../../components/SearchData/SearchData";
import "./Analysis.css";
import Chart from "../../../components/Chart/Chart";

const Analysis = () => {
  return (
    <div>
      <SearchBar />
      <div className="chartDiv">
        <Chart />
      </div>
      <div className="searchData">
        <SearchData />
      </div>
    </div>
  );
};

export default Analysis;
