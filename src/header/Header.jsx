import React from "react";
import { useState } from "react";
import logo from "../img/download (2).png";
import "./Header.css";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

//   const handleItemClick = (item) => {
//     console.log(`Selected item: ${item}`);
//     // You can perform any action based on the selected item here
//     // For example, update state, call functions, etc.
//     setIsOpen(false); // Close the dropdown after selecting an item
//     };
    const handleItemClick = (item) => {
      console.log("Clicked:", item);
      // You can add further logic here to handle item clicks
    };
  return (
    <div className="header">
      <div className="navDivs">
        <div className="logo">
          <div className="img hover">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div className="location hover">
            <p>Deliver to</p>
            <div className="location1">
              <div>
                <CiLocationOn />
              </div>
              <span>Norway</span>
            </div>
          </div>
        </div>
        <div className="select">
          <select name="" id="" className="select1">
            <option value="">All</option>
          </select>
          <input type="text" />
          <button className="icon">
            <BsSearch className="search" />
          </button>
        </div>
        <div className="flagAndSelect hover">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/510px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="us flag img"
            />
          </a>
          <select name="" id="">
            <option value="">EN</option>
          </select>
        </div>
        {/* <div className="sign">
          <div>
            <p>sign in</p>
            <select name="" id="" className="select2">
              <option value="" className="option">Account & Lists</option>
            </select>
          </div>
          <div>
            <p>returns</p>
            <a href="#" className="select2">
              <p>&</p> <p>Orders</p>
            </a>
          </div>
                  <div className="cart">
                      <span>0</span>
            <RiShoppingCartLine />
          </div>
        </div> */}

        <div className="menu">
          <div className="hover">
            <div>
              <a href="#" className="menu-item">
                Sign In
              </a>
            </div>
            <div className="menu-item">
              <select className="menu-item">
                <option>Account & Lists</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
          <div className="return hover">
            <div>
              <p className="menu-item">Returns</p>
            </div>
            <div>
              <p className="menu-item">&Orders</p>
            </div>
          </div>
          <div className="cart hover">
            <span>0</span>
            <RiShoppingCartLine />
          </div>
        </div>
      </div>
      {/* <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleMenu}>
          <div>
            <CiMenuBurger />
          </div>
          <p>all</p>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => handleItemClick("Item 1")}>Item 1</li>
            <li onClick={() => handleItemClick("Item 2")}>Item 2</li>
            <li onClick={() => handleItemClick("Item 3")}>Item 3</li>
          </ul>
        )}
      </div> */}

      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleMenu}>
          <div>
            <CiMenuBurger />
          </div>
          <p>all</p>
        </button>
        <ul className={isOpen ? "dropdown-menu show" : "dropdown-menu"}>
          <li onClick={() => handleItemClick("Item 1")}>Item 1</li>
          <li onClick={() => handleItemClick("Item 2")}>Item 2</li>
          <li onClick={() => handleItemClick("Item 3")}>Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
