import React from "react";
import "./VendorDashboard.css";
import { Link } from "react-router";
import { FaTshirt, FaPlus, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const VendorDashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">frostyFashion</h2>
        <nav className="nav-links">
          <Link to='/admin-onion-dashboard/product'> 
            <FaTshirt /> <span>My Products</span>
          </Link>
          <Link to="/admin-onion-dashboard/add-product'">
            <FaPlus /> <span>Add Product</span>
          </Link>
            <Link to="/admin-onion-dashboard/analytics">
              <FaChartBar /> <span>Analytics</span>
            </Link>
          
          <a href="/logout">
            <FaSignOutAlt /> <span>Logout</span>
          </a>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Welcome to your Vendor Dashboard</h1>
        <p>
          Use the sidebar to manage your products and view your sales stats.
        </p>

        <div className="dashboard-grid">
          <div className="grid-item">Total Products: 120</div>
          <div className="grid-item">Sales This Month: $2,340</div>
          <div className="grid-item">Pending Orders: 5</div>
          <div className="grid-item">Product Reviews: 48</div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
