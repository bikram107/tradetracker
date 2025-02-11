import React from "react";
import "./Home.css";
import GreenBull from "../../assets/greenBull.jpeg";
import ShowBox from "../../components/ShowBox/ShowBox.jsx";

const Home = () => {
  return (
    <div className="Home ">
      <div className="hero">
        <h1>Worried About Managing Your Trades. Leave Your Worries to Us.</h1>
        <img src={GreenBull} alt="" />
      </div>
      <ShowBox />
    </div>
  );
};

export default Home;
