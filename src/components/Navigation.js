import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to={"/"}>Today</NavLink>
      <NavLink to={"/forecast"}>Next 5 Days</NavLink>
    </div>
  );
};

export default Navigation;
