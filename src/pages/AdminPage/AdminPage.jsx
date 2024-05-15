import React, { useEffect } from "react";
import { useState } from "react";
import "./AdminPage.css";
import AdminButton from "../../components/AdminButton/AdminButton";
import {
  getDatabase,
  ref,
  get,
  push,
  set,
  remove,
  query,
  orderByChild,
  equalTo,
  onValue,
} from "firebase/database";
import app from "../../firebase";
import { Link } from "react-router-dom";

export default function AdminPage() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const [tovars, setTovars] = useState([]);
  const [filteredTovars, setFilteredTovars] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categories, setCategories] = useState([]);
  // const [categ, setCateg] = useState([]);
  const [inputValue1, setInputValue1] = useState("");

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
      setFilteredTovars(temporaryArray);

      // Получение категорий
      const uniqueCategories = [
        ...new Set(temporaryArray.map((tovar) => tovar.category)),
      ];
      setCategories(uniqueCategories);
    } else {
      alert("error");
    }
  }

  const deleteTovar = async (tovarIdParam) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "tovars/" + tovarIdParam);
    await remove(dbRef);
    window.location.reload();
  };

  useEffect(() => {
    fetchTovars();
  }, []);

  // async function fetchCategories() {
  //   const db = getDatabase(app);
  //   const categoriesRef = ref(db, 'category');
  //   onValue(categoriesRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       const categoryList = Object.values(data);
  //       setCategories(categoryList);
  //     } else {
  //       console.log('No categories available');
  //     }
  //   });
  // }

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  const handleCategoryFilter = (category) => {
    if (category === "all") {
      setFilteredTovars(tovars);
    } else {
      const filtered = tovars.filter((tovar) => tovar.category === category);
      setFilteredTovars(filtered);
    }
  };
  const handleSort = () => {
    const sortedTovars = [...filteredTovars];
    sortedTovars.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setFilteredTovars(sortedTovars);
  };

  const saveData = async () => {
    const dbCat = getDatabase(app);
    const newDocRef = push(ref(dbCat, "category"));
    set(newDocRef, {
      categoryName: inputValue1,
    })
      .then(() => {
        alert("success");
      })
      .catch((error) => {
        alert("error", error.message);
      });
  };

  const deleteCateg = async (categIdParam) => {
    const dbCat = getDatabase(app);
    const dbCatRef = ref(dbCat, "category/" + categIdParam);
    await remove(dbCatRef);
    window.location.reload();
  };
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
                <li className="admin__link" onClick={() => updateToggle(5)}>
                  Категории
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
                  <div className="nav__links">
                    <button
                      className="nav__link"
                      onClick={() => handleCategoryFilter("all")}
                    >
                      Все
                    </button>
                    {categories.map((category, index) => (
                      <button
                        className="nav__link"
                        key={index}
                        onClick={() => handleCategoryFilter(category)}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                        {/* Приводим первую букву к верхнему регистру */}
                      </button>
                    ))}

                    {/* <button className='nav__link' onClick={() => handleCategoryFilter('all')}>Все</button>
                    <button className='nav__link' onClick={() => handleCategoryFilter('Костюмы')}>Костюмы</button>
                    <button className='nav__link' onClick={() => handleCategoryFilter('Рубашки')}>Рубашки</button> */}
                  </div>

                  <div className="sort__panel">
                    сортировать по
                    {/* <a href="" className="sort__panel-link">новизне</a>
                  <a href="" className="sort__panel-link">популярности</a> */}
                    <button
                      onClick={handleSort}
                      className="sort__panel-link"
                    >{`${
                      sortOrder === "asc" ? "По возрастанию" : "По убыванию"
                    }`}</button>
                  </div>
                  <div className="user__list">
                    {filteredTovars.map((item, index) => {
                      return (
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
                            <AdminButton
                              title="Удалить"
                              onClick={() => deleteTovar(item.tovarId)}
                            />
                            <Link to={`/edit/${item.tovarId}`}>
                              <AdminButton title="Редакировать" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className={toggle === 5 ? "show-content" : "content"}>
                <div className="content__wrapper">
                  <div className="content__wrapper-title">
                    <h2>Категории</h2>
                    <div>
                      <input
                        type="text"
                        value={inputValue1}
                        onChange={(e) => setInputValue1(e.target.value)}
                      />
                      <button onClick={saveData}>Save</button>
                    </div>
                  </div>
                  <div className="category__items">
                    
                  
                    {/* {categories.map((category, index) => (
                      <div className="category__item">
                        <li>{category}</li>
                        <div className="category__item-btns">
                          <AdminButton
                            title="Удалить"
                            onClick={() => deleteCateg(category.categId)}
                          />
                          <Link to={`/edit/${category.tovarId}`}>
                            <AdminButton title="Редакировать" />
                          </Link>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
