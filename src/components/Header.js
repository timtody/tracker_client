import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="uk-navbar-container uk-navbar-transparent">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Trackr</Link>
          </li>
          <li className="uk-parent">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
