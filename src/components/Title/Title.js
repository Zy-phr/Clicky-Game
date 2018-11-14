import React from "react";
import "./Title.css";

const Title = props => (
  <div className="title text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);
export default Title;
