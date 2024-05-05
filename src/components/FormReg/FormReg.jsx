import React from "react";
import "./FormReg.css";

export default function FormReg() {
  return (
    <div>
      <section className="reg">
        <div className="container">
          <div className="reg__inner">
            <img src="/public/Form/form-image.png" alt="" />
            <div className="reg__inner-form">
              <div className="form__inner-desc">
                <h3>Регистрация</h3>
                <form className="form" action="">
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Имя"
                  />
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Фамилия"
                  />
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Почта"
                  />
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Пароль"
                  />
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Повторите пароль"
                  />
                  <input
                    className="form__button"
                    type="submit"
                    value="Регистрация"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
