import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo-pokeapi.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
            <img src={logo} alt="logo-pokeapi" />
          </a>
        </div>
        <div className="social-container">
          <ul>
            <li>
              <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
                Isntagram
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
