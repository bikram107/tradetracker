import React from "react";
import "./NavBar.css";
import tradeLogo from "../../assets/tradeLogo.jpeg";
import { Navigate, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="container">
        <div className="logo">
          <img src={tradeLogo} alt="" />
        </div>
        <div className="navs">
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"./analysis"}>Analysis</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/help"}>Help</Link>
          </ul>
        </div>
        {/* <div className="signIn">Log Out</div> */}
      </div>
    </div>
  );
};

export default NavBar;
