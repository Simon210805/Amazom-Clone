import React, { useContext } from "react";
import { useState } from "react";
import logo from "../../img/download (2).png";
import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../dataProvider/DataProvider";
function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
    <section className={classes.header}>
      <div className={classes.navDivs}>
        <div className={classes.logo}>
          <div className={classes.img + " " + classes.hover}>
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className={classes.location + " " + classes.hover}>
            <p>Deliver to</p>
            <div className={classes.location1}>
              <div>
                <CiLocationOn />
              </div>
              <span>Norway</span>
            </div>
          </div>
        </div>
        <div className={classes.select}>
          <select name="" id="" className={classes.select1}>
            <option value="">All</option>
          </select>
          <input type="text" />
          <button className={classes.icon}>
            <BsSearch className={classes.search} />
          </button>
        </div>
        <div className={classes.flagAndSelect + " " + classes.hover}>
          <Link to="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/510px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="us flag img"
            />
          </Link>
          <select name="" id="">
            <option value="">EN</option>
          </select>
        </div>

        <div className={classes.menu}>
          <Link to="#" className={classes.hover}>
            <div>
              <a href="#" className={classes.menuItem}>
                Sign In
              </a>
            </div>
            <div className={classes.menuItem}>
              <select className={classes.menuItem}>
                <option>Account & Lists</option>
              </select>
            </div>
          </Link>
          <Link to="/orders" className={classes.return + " " + classes.hover}>
            <div>
              <p className={classes.menuItem}>Returns</p>
            </div>
            <div>
              <p className={classes.menuItem}>&Orders</p>
            </div>
          </Link>
          <Link to="/cart" className={classes.cart + " " + classes.hover}>
            <span>{totalItems}</span>
            <RiShoppingCartLine />
          </Link>
        </div>
      </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
