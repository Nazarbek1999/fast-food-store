import React, { useState } from "react";
import { connect } from "react-redux";
import { action } from "./Utils/redux/redux";
import Rodal from "rodal";
const Admin = (props) => {
  const [img, setImg] = useState("");

  function imgValue(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result);
    };
  }
  return (
    <div>
      <div className="">
        <div className="adminDiv d-flex ">
          <button
            onClick={() => props.openModal()}
            className="btn btn-dark h-25 "
          >
            add foods
          </button>
          <button
            onClick={() => props.tarixniKor()}
            className="btn btn-info  h-25"
          >
            history buys
          </button>
          {props.todo.map((item, i) => (
            <div key={i} className="adminFood  m-lg-1">
              <img className="foto" src={item.img} alt="" />
              <h1 className=" m-lg-3 ">{item.name}</h1>
              <h1 className=" m-lg-3">{item.price}</h1>
            </div>
          ))}
        </div>

        <Rodal visible={props.isOpen} onClose={() => props.openModal()}>
          <input
            value={props.adminValue.img}
            onChange={(e) => imgValue(e)}
            type="file"
            className=" form-control mb-2"
          />
          <input
            value={props.adminValue.name}
            onChange={(e) => props.foodName(e.target.value)}
            type="text"
            placeholder="food Name ..."
            className=" form-control mb-2"
          />
          <input
            value={props.adminValue.price}
            onChange={(e) => props.foodPrice(e.target.value)}
            type="text"
            placeholder="food Price ..."
            className=" form-control mb-2"
          />
          <input
            onChange={(e) => props.foodCount(e.target.value)}
            className="form-control mb-2"
            placeholder="count ..."
            type="text"
            name=""
            id=""
          />
          <button onClick={() => props.saveFood(img)} className="btn btn-dark">
            {" "}
            add food{" "}
          </button>
        </Rodal>
        <Rodal visible={props.isTarix} onClose={() => props.tarixniKor()}>
          <table className="table table-active my-3">
            <thead>
              <tr>
                <th>User adress</th>
                <th>User phone</th>
                <th>call</th>
              </tr>
            </thead>
            <tbody>
              {props.tarix.map((item, i) => (
                <tr key={i}>
                  <td> {item.cartAdress}</td>
                  <td>{item.cartPhone}</td>
                  <td>
                    <button className="btn btn-success">call</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Rodal>
      </div>
    </div>
  );
};

export default connect((state) => ({ ...state }), action)(Admin);
