import React from "react";
import "./Navbar.css";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav>
        <h1>Paradise Land</h1>
        <ul>
          {menuList.map((currElem) => {
            return (
              <li>
                <button onClick={() => filterItem(currElem)}>{currElem}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
