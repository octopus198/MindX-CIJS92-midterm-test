import React from "react";

const Header = () => {
  return (
    <div className="navbar">
      <p className="page-title">Anonime</p>
      <div className="navbar-menu">
        <p className="navbar-menu-option">Home</p>
        <p className="navbar-menu-option">List anime</p>
      </div>
      <input type="text" className="search-bar" placeholder="Search anime or movie"/>
    </div>
  );
};

export default Header;
