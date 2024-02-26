import React from "react";
import { connect } from "react-redux";
import { action } from "./Utils/redux/redux";
import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Card from "./Card";
import icon from "./Utils/foto/icon.png";
import basket from "./Utils/foto/basket.png";
import Home from "./home";
import admin from "./Utils/foto/admin.png";
import Login from "./Login";



const App = (props) => {
  return (
    <div className="div1">
      <div className="navbar">
        <div>
          <Link to={"/"}>
            {" "}
            <img className="logo" src={icon} alt="" />
          </Link>
        </div>
        <div className="  d-flex ">
          <Link to={"/login"}>
            {" "}
            <button className="btn">
              <img className="admin" src={admin} alt="" />{" "}
            </button>
          </Link>
          <Link to={"/card"}>
            {" "}
            <button className="btn">
              {" "}
              <img className="korzinka" src={basket} alt="" />
              <p> {props.cart.length} </p>
            </button>
          </Link>{" "}
        </div>
     
      </div>
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(App);
