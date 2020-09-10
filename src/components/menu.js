import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul className="sub-menu">
        <li>
          {/* <FcHome className="menu-icon" /> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <FcBullish className="menu-icon" /> */}
          <Link to="/income">Income</Link>
        </li>
        <li>
          {/* <FcDataSheet className="menu-icon" /> */}
          <Link to="/budget">Budget</Link>
        </li>
        <li>
          {/* <FcTodoList className="menu-icon" /> */}
          <Link to="/summary">Budget Summary</Link>
        </li>
        <li>
          {/* <FcBearish className="menu-icon" /> */}
          <Link to="/outgoings">Outgoings</Link>
        </li>
        <li>
          {/* <FcComboChart className="menu-icon" /> */}
          <Link to="/overview">Overview</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
