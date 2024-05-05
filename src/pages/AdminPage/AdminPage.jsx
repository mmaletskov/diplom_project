import React, { useEffect } from "react";
import { useState } from "react";
import "./AdminPage.css";
import AdminButton from "../../components/AdminButton/AdminButton";
import { getDatabase, ref, get, remove } from "firebase/database";
import app from "../../firebase";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const [tovars, setTovars] = useState([]);

  async function fetchTovars() {
    const db = getDatabase(app);
    const dbRef = ref(db, "tovars");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const myData = snapshot.val();
      const temporaryArray = Object.keys(myData).map((myFireId) => {
        return {
          ...myData[myFireId],
          tovarId: myFireId,
        };
      });

      setTovars(temporaryArray);
    } else {
      // alert("error");
    }
  }

  const deleteTovar = async(tovarIdParam) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "tovars/"+tovarIdParam);
    await remove(dbRef);
    window.location.reload();
  }

  useEffect(() => {
    fetchTovars();
  }, []);

  return (
    <div>
      <section className="admin">
        <div className="container">
          <div className="sidebar">
            <aside>
              <div className="admin__info">
                <img src="/public/Admin/avatar.png" alt="avatar" />
                <div className="admin__info-desc">
                  <div className="desc-name">Иванов Иван</div>
                  <div className="desc-email">ivanov@mail.ru</div>
                </div>
              </div>
              <hr />
              <ul className="admin__links">
                <li className="admin__link" onClick={() => updateToggle(1)}>
                  Список пользователей
                </li>
                <li className="admin__link" onClick={() => updateToggle(2)}>
                  Заказы
                </li>
                <li className="admin__link" onClick={() => updateToggle(3)}>
                  Общая статистика
                </li>
                <li className="admin__link" onClick={() => updateToggle(4)}>
                  Товары
                </li>
              </ul>
              <button className="exit">Выйти из системы</button>
            </aside>
            <div>
              <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="content__wrapper">
                  <h2>Список пользователей</h2>

                  <div className="user__list">
                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>ivanov@mail.ru</p>
                        <p>Уровень : 1</p>
                      </div>
                      <AdminButton title="Удалить" />
                    </div>

                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>ivanov@mail.ru</p>
                        <p>Уровень : 1</p>
                      </div>
                      <AdminButton title="Удалить" />
                    </div>

                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>ivanov@mail.ru</p>
                        <p>Уровень : 1</p>
                      </div>
                      <AdminButton title="Удалить" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="content__wrapper">
                  <h2>Заказы</h2>

                  <div className="user__list">
                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>костюм</p>
                        <p>1х24 999 ₽</p>
                        <p>размер: М</p>
                      </div>
                      <div className="list__item-buttons">
                        <AdminButton title="Принять" />
                        <AdminButton title="Отклонить" />
                      </div>
                    </div>

                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>костюм</p>
                        <p>1х24 999 ₽</p>
                        <p>размер: М</p>
                      </div>
                      <div className="list__item-buttons">
                        <AdminButton title="Принять" />
                        <AdminButton title="Отклонить" />
                      </div>
                    </div>

                    <div className="user__list-item">
                      <div className="list__item-desc">
                        <p>Иванов Иван</p>
                        <p>костюм</p>
                        <p>1х24 999 ₽</p>
                        <p>размер: М</p>
                      </div>
                      <div className="list__item-buttons">
                        <AdminButton title="Принять" />
                        <AdminButton title="Отклонить" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={toggle === 3 ? "show-content" : "content"}>3</div>
              <div className={toggle === 4 ? "show-content" : "content"}>
                <div className="content__wrapper">
                  <h2>Товары</h2>

                  {tovars.map((item, index) => {
                    return (
                      <div className="user__list">
                        <div className="user__list-item" key={index}>
                          <div className="list__item-desc">
                            <p>Иванов Иван</p>
                            <p>{item.title}</p>
                            <p>{item.price} ₽</p>
                            <p>Кол-во: {item.count}</p>
                            <p>размер: М</p>
                          </div>
                          <div className="list__item-buttons">
                            {/* <button onClick={()=>deleteTovar(item.tovarId)}>Удалить товар</button> */}
                            <AdminButton title="Удалить" onClick={ () => deleteTovar(item.tovarId)} />
                            <Link to={`/edit/${item.tovarId}`}>
                            <AdminButton title="Редакировать" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
