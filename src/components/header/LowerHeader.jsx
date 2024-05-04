import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import classes from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lowerHeader}>
      <ul>
        <li>
          <div className={classes.menuIcon}>
            <CiMenuBurger />
          </div>
          <p>All</p>
        </li>
        <li>today's deals</li>
        <li>costumer service</li>
        <li>register</li>
        <li>gift cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader