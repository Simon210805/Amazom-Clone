import React from "react";
import classes from "./Footer.module.css";
import amazon from "./img/download.png";
import flag from "./img/download (1).png"
import { GrLanguage } from "react-icons/gr";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { CgArrowsV } from "react-icons/cg";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer className={classes.footer_con}>
      <div className={classes.top}>
        <Link to="/">back to top</Link>
      </div>
      <div className={classes.footer_container}>
        <div className={classes.footer}>
          <h5>Get to Know Us</h5>
          <Link to="#">Careers</Link>
          <Link to="#">Blog</Link>
          <Link to="#">About Amazon</Link>
          <Link to="#">Investor Relations</Link>
          <Link to="#">Amazon Devices</Link>
          <Link to="#">Amazon Science</Link>
        </div>
        <div className={classes.footer}>
          <h5>Make Money with Us</h5>
          <Link to="#">Sell products on Amazon</Link>
          <Link to="#">Sell on Amazon Business</Link>
          <Link to="#">Sell apps on Amazon</Link>
          <Link to="#">Become an Affiliate</Link>
          <Link to="#">Advertise Your Products</Link>
          <Link to="#">Self-Publish with Us</Link>
          <Link to="#">Host an Amazon Hub</Link>
          <Link to="#">› See More Make Money with Us</Link>
        </div>
        <div className={classes.footer}>
          <h5>Amazon Payment Products</h5>
          <Link to="#">Amazon Business Card</Link>
          <Link to="#">Shop with Points</Link>
          <Link to="#">Reload Your Balance</Link>
          <Link to="#">Amazon Currency Converter</Link>
        </div>
        <div className={classes.footer}>
          <h5>Let Us Help You</h5>
          <Link to="#">COVID-19 and Amazon</Link>
          <Link to="#">Your Account</Link>
          <Link to="#">Your Orders</Link>
          <Link to="#">Shipping Rates & Policies</Link>
          <Link to="#">Returns & Replacements</Link>
          <Link to="#">Manage Your Content and Devices</Link>
          <Link to="#">Amazon Assistant</Link>
          <Link to="#">Help</Link>
        </div>
      </div>
      <hr />
      <div className={classes.lower_footer_container}>
        <div className={classes.img}>
          <Link  to="/">
            <img src={amazon} alt="" />
          </Link>
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
          <p
            style={{
              border: "1px solid rgb(203, 203, 215)",
              padding: "0 10px",
            }}
          >
            <img src={flag} alt="" />
            United States
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
