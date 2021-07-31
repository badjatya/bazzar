import React from "react";

// Importing Styles
import "./Homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h2 className="title">HATS</h2>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h2 className="title">JACKETS</h2>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h2 className="title">SHOES</h2>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h2 className="title">WOMENS</h2>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h2 className="title">MENS</h2>
            <p className="subtitle">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
