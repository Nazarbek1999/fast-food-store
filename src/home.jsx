import React from "react";
import { connect } from "react-redux";
import { action } from "./Utils/redux/redux";


const Home = (props) => {
  return (
    <div className="homePage">
      
      {
        props.users.map((item, i)=>(
          <div key={i} className="homeCard ">
          <img className="foto" src={item.img} alt="" />
          <h1 className=" m-lg-3 ">{item.name}</h1>
          <h2 className=" m-lg-3">{item.price}</h2>
          <h2>
            {item.foodCount}
          </h2>
          <button onClick={()=>props.buyFood(item)} className="btn btn-warning"><h2>buy</h2></button>
        </div>
        ))
      }
    
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(Home);
