import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiCommand } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <FiCommand />
        </div>
        <div className="name">Pagerland</div>
      </div>
      <div className="right">
        <div className="menues">
          <Link to={"/"}>Home</Link>
          <Link to={"/demos"}>Demos</Link>
          <Link to={"/features"}>Features</Link>
          <Link to={"/reviews"}>Reviews</Link>
          <Link to={"/support"}>Support</Link>
        </div>
        <div className="btn">
          <button>Purchase</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
