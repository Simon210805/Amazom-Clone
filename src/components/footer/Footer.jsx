import React from "react";
import classes from "./Footer.module.css";
import amazon from "./img/download.png";
import flag from "./img/download (1).png"
import { GrLanguage } from "react-icons/gr";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { CgArrowsV } from "react-icons/cg";



function Footer() {
  return (
    <footer className={classes.footer_con}>
      <div className={classes.top}>
        <a href="/">back to top</a>
      </div>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <h5>Get to Know Us</h5>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About Amazon</a>
          <a href="#">Investor Relations</a>
          <a href="#">Amazon Devices</a>
          <a href="#">Amazon Science</a>
        </div>
        <div className={classes.footer}>
          <h5>Make Money with Us</h5>
          <a href="#">Sell products on Amazon</a>
          <a href="#">Sell on Amazon Business</a>
          <a href="#">Sell apps on Amazon</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Self-Publish with Us</a>
          <a href="#">Host an Amazon Hub</a>
          <a href="#">› See More Make Money with Us</a>
        </div>
        <div className={classes.footer}>
          <h5>Amazon Payment Products</h5>
          <a href="#">Amazon Business Card</a>
          <a href="#">Shop with Points</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">Amazon Currency Converter</a>
        </div>
        <div className={classes.footer}>
          <h5>Let Us Help You</h5>
          <a href="#">COVID-19 and Amazon</a>
          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Shipping Rates & Policies</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Manage Your Content and Devices</a>
          <a href="#">Amazon Assistant</a>
          <a href="#">Help</a>
        </div>
      </div>
      <hr />
      <div className={classes.lower_footer_container}>
        <div className={classes.img}>
          <a href="/">
            <img src={amazon} alt="" />
          </a>
        </div>
        <div className={classes.lower_footer}>
          <p
            style={{
              border: "1px solid rgb(203, 203, 215)",
              padding: "0 10px",
            }}
          >
            <GrLanguage /> English <CgArrowsV />
          </p>
        </div>
        <div className={classes.flag + " " + classes.lower_footer}>
          <p
            style={{
              border: "1px solid rgb(203, 203, 215)",
              padding: "0 10px",
            }}
            className={classes.flag1}
          >
            $ USD - U.S. Dollar
          </p>
        </div>
        <div className={classes.flag + " " + classes.lower_footer}>
          <p style={{ border: "1px solid rgb(203, 203, 215)", padding: "0 10px" }}>
            <img src={flag} alt="" />
            United States
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
