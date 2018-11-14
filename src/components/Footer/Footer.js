import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="footer text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Footer;
