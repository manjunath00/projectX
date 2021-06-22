import React from "react";
import "./styles/header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="header__block">
        <div>
          <Link to="/">
            <div className="header__heading--primary">ProjectX</div>
            <div className="header__heading--secondary">Your Idea Store</div>
          </Link>
        </div>

        <button className='button button__primary'>
          <Link to="/new">New Project</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
