/** @format */

import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div id={styles.left}>
          <h1 id={styles.name}>Snack & Steer</h1>
        </div>
        <div id={styles.right}>
          <Link to="/dashboard">
            <span role="img" aria-label="dashboard">📊</span> Dashboard
          </Link>
          <Link to="/foodpage">
            <span role="img" aria-label="food">🍔</span> Food
          </Link>
          <Link to="/emergency-support">
            <span role="img" aria-label="contact">📞</span> Contact
          </Link>
          <Link to="/user">
            <span role="img" aria-label="user">👤</span> User Profile
          </Link>
          <Link to="/login">
            <span role="img" aria-label="logout">🚪</span> Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
