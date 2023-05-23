import React from "react";
import "./input.css";

const Input = () => {
  return (
    <div className="bg-danger">
      <div className="col-3">
        <input className="effect-24" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-bg"></span>
      </div>
    </div>
  );
};

export default Input;
