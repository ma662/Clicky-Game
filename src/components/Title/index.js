import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <h6 className="sub">By Myles Alcala</h6>
    </div>
  );
}

export default Title;
