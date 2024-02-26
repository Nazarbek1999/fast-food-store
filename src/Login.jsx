import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginAdmin, setLoginAdmin] = useState({
    login: "nazarbek",
    parol: 123456,
  });
  const [obj, setObj] = useState({
    login1: "",
    parol2: "",
  });
  const navigate = useNavigate();

  function saveAdmin() {
    if (loginAdmin.login === obj.login1 || loginAdmin.parol === obj.parol2) {
      navigate("/admin");
    }else{
      alert("login yoki parol xato")
    }
  }
  console.log(obj);
  return (
    <div>
      <div className="card w-50 mx-auto mt-4">
        <input
          onChange={(e) => setObj({ ...obj, login1: e.target.value })}
          placeholder="login    ............."
          className=" form-control mb-3"
          type="text"
        />
        <input
          onChange={(e) => setObj({ ...obj, parol2: e.target.value })}
          placeholder="password  ................"
          className=" form-control mb-3"
          type="password"
        />

        <button
          onClick={() => saveAdmin()}
          className="btn btn-dark w-25 mx-auto"
        >
          check
        </button>
      </div>
    </div>
  );
};

export default Login;
