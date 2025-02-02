import React from "react";
import SearchBar from "../../../components/SearchBar/SearchBar";
import SearchData from "../../../components/SearchData/SearchData";
import "./Analysis.css";
import Fart from "../../../components/Chart/Fart";

const Analysis = () => {
  return (
    <div className="analysis">
      <SearchBar />

      <div className="chartDiv">
        <Fart />
      </div>
      <SearchData />
    </div>
  );
};

export default Analysis;
