import React from "react";
import logo from "../assets/six.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  no-gutters">
      <a className="navbar-brand logo-margin" href="./index.html">
        <img
          src={logo}
          width="60"
          height="60"
          alt="logo"
          className="navbar-logo"
        ></img>
      </a>
      <a className="navbar-brand" href="./index.html">
        <p className="navbar-text text-light">Hand Cricket</p>
      </a>
    </nav>
  );
}

export default Navbar;
