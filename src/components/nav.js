import React from "react";
import { FcCalculator } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";

const Nav = () => {
  return (
    <>
      <nav>
        <FcCalculator className="logo" />
        <h1 className="nav-title">Julie's Personal Budget App</h1>
        <ul className="nav-menu">
          <li>
            <h4>Please Log in</h4>
          </li>
          <li>
            <a className="nav-link" href="/login/">
              <FiLogIn className="nav-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
