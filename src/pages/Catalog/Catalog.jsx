import React, { useEffect, useState } from "react";
import "./Catalog.css";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import {
  getDatabase,
  ref,
  get
} from "firebase/database";
import app from "../../firebase";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";

export default function Catalog() {
  const [tovars, setTovars] = useState([]);
  const [filteredTovars, setFilteredTovars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [categories, setCategories] = useState([]);


    async function fetchTovars(){
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
    useEffect(() => {
    fetchTovars();
  }, []);

  useEffect(() => {
    const filtered = tovars.filter(
      (tovar) =>
        tovar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tovar.descr.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTovars(filtered);
  }, [searchTerm, tovars]);

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

  return (
    <div id="page-wrap">
      <section className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <div className="nav__panel">
              <div className="nav__links">
              <button className='nav__link' onClick={() => handleCategoryFilter('all')}>Все</button>
                {categories.map(
                  (category,index ) => (
                    <button
                      className='nav__link'
                      key={index}
                      onClick={() => handleCategoryFilter(category)}
                    >
                      {category}
                      {/* {category.charAt(0).toUpperCase() + category.slice(1)}{" "} */}
                      {/* Приводим первую букву к верхнему регистру */}
                    </button>
                  )
                )}

                {/* <button className='nav__link' onClick={() => handleCategoryFilter('all')}>Все</button>
                    <button className='nav__link' onClick={() => handleCategoryFilter('Костюмы')}>Костюмы</button>
                    <button className='nav__link' onClick={() => handleCategoryFilter('Рубашки')}>Рубашки</button> */}
              </div>
              <input
                type="text"
                placeholder="Поиск товаров"
                className="nav__search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="sort__panel">
              сортировать по
              {/* <a href="" className="sort__panel-link">новизне</a>
                  <a href="" className="sort__panel-link">популярности</a> */}
              <button onClick={handleSort} className="sort__panel-link">{`${
                sortOrder === "asc" ? "По возрастанию" : "По убыванию"
              }`}</button>
            </div>

            <div className="catalog__list">
              {filteredTovars.length ? (
                filteredTovars.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/item/${item.tovarId}`}>
                        <CatalogItem key={index} {...item} />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <h2>
                  По запросу <b>{searchTerm}</b> ничего не найдено
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
