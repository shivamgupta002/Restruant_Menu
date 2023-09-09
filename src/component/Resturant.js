import React, { useState } from "react";
import Menu from "./MenuApi";
import "./Resturant.css";
import MenuCart from "./MenuCart";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);
const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updateList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCart menuData={menuData} />
    </>
  );
};

export default Resturant;
