import React from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <Link to="/" >Главная</Link>
      <Link to="/catalog" >Каталог</Link>
      <Link to="/profile" >Профиль</Link>

      <img src="/public/Header/logo.svg" alt="" />
    </Menu>
  );
};
