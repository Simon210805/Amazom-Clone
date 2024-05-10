import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import classes from "./Header.module.css";

function LowerHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={classes.lowerHeaderDiv}>
      <div className={classes.lowerHeader}>
        <div className={classes.menuIcon + " " + classes.CiMenuBurger} onClick={toggleMenu}>
          <CiMenuBurger />
        </div>
        <div className={classes.dropdown1}>
        <ul
          className={menuOpen ? classes.dropdownOpen : classes.dropdownClosed}
        >
          <li>
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Register</li>
          <li>Gift Cards</li>
          <li>Sell</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LowerHeader;
