import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider';
import Navbar from "./Navbar";

function Header() {

const [{basket},dispatch] = useStateValue();

  return (
    <>
    <div className="header">
      <Link to="/" style={{ textDecoration:"none" }} >
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle">yourSHop</h2>
      </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" placeholder="search an item" />
        <SearchIcon className="header_searchIcon" fontSize="large" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello, Sign in</span>
          <span className="nav_itemLineTwo">Accounts & Lists</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Returns</span>
          <span className="nav_itemLineTwo"> & Orders</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
    


    {/* NavBar Menu Items; */}

<Navbar/>
    </>
  );
}

export default Header;
