import React from "react";
import { connect } from "react-redux";
import { action } from "./Utils/redux/redux";
import Rodal from "rodal";

const Card = (props) => {
  return (
    <div className="cartFood d-flex">
      <button onClick={()=>props.openCart()} className=" btn btn-warning w-25  h-25">buy all food</button>
      {props.cart.map((item, i) => (
        <div key={i} className="adminFood  m-lg-1">
          <img className="foto" src={item.img} alt="" />
          <h1 className=" m-lg-3 ">{item.name}</h1>
          <h1 className=" m-lg-3">{item.price}</h1>
          <h2>{item.foodCount}</h2>
          <div className=" d-flex ">
            {" "}
            <button
              onClick={() => props.plus(i)}
              className="btn btn-warning  m-lg-2"
            >
              +
            </button>
            <h1>{item.count}</h1>
            <button
              onClick={() => props.minus(i)}
              className="btn btn-warning  m-lg-2"
            >
              -
            </button>
          </div>
        </div>
      ))}

      <Rodal onClose={()=>props.openCart()} visible={props.isOpen}>
        <input onChange={(e)=>props.adressCart(e.target.value)} placeholder="adress....." className=" form-control mb-3" type="text" name="" id="" />
        <input onChange={(e)=>props.phoneCart(e.target.value)} placeholder="phone....." className=" form-control mb-3" type="text" name="" id="" />
          <button onClick={()=>props.goUsers()} className=" btn btn-dark">buy food</button>
      </Rodal>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(Card);
