import React from "react";
import "./VendorAnalytics.css";
import { FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";

const VendorAnalytics = () => {
  return (
    <div className="analytics-container">
      <h2>Analytics Overview</h2>
      <div className="cards">
        <div className="card">
          <FaShoppingCart className="icon" />
          <div>
            <h3>1,230</h3>
            <p>Total Orders</p>
          </div>
        </div>
        <div className="card">
          <FaDollarSign className="icon" />
          <div>
            <h3>$18,500</h3>
            <p>Total Revenue</p>
          </div>
        </div>
        <div className="card">
          <FaChartLine className="icon" />
          <div>
            <h3>12%</h3>
            <p>Growth Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;
