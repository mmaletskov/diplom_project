import React from "react";
import "./FormAuth.css";

export default function FormAuth() {
  return (
    <div>
      <div className="form__inner-desc">
        <h3>Авторизация</h3>
        <form className="form" action="">
          <input className="form__input" type="text" placeholder="Почта" />
          <input className="form__input" type="text" placeholder="Пароль" />
          <input className="form__button" type="submit" value="Войти" />
        </form>
      </div>
    </div>
  );
}
