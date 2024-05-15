import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, get, set, ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

import "./FormAddTovar.css";

export default function FormAddTovar() {
  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue6, setInputValue6] = useState("");
  let [imageUpload, setImageUpload] = useState(null);

  const uploadFile = async () => {
    if (!imageUpload) return;

    const imageDb = getStorage();
    const imageRef = storageRef(
      imageDb,
      `images/catalogImages/${imageUpload.name}`
    );
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  };

  const saveData = async (image) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "tovars"));
    const imageUrl = await uploadFile(image);
    set(newDocRef, {
      title: inputValue1,
      descr: inputValue2,
      price: inputValue3,
      count: inputValue4,
      country: inputValue5,
      category: inputValue6,
      image: imageUrl,
    })
      .then(() => {
        alert("data save successfully");
        navigate("/catalog");
      })
      .catch((error) => {
        alert("error", error.message);
      });
  };

  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "category/");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setCategory(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <section className="form__tovar">
        <div className="container">
          <div className="form__tovar-inner">
            <img src="/public/AddTovar/image.png" alt="" />
            <div className="tovar__inner-form">
              <div className="form__inner-desc">
                <h3>Добавление товара</h3>
                <input
                  className="form__input"
                  type="text"
                  value={inputValue1}
                  onChange={(e) => setInputValue1(e.target.value)}
                  placeholder="Название"
                />
                <input
                  className="form__input"
                  type="text"
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                  placeholder="Описание"
                />
                <input
                  className="form__input"
                  type="text"
                  value={inputValue3}
                  onChange={(e) => setInputValue3(e.target.value)}
                  placeholder="Цена"
                />
                <input
                  className="form__input"
                  type="text"
                  value={inputValue4}
                  onChange={(e) => setInputValue4(e.target.value)}
                  placeholder="Количество"
                />
                <input
                  className="form__input"
                  type="text"
                  value={inputValue5}
                  onChange={(e) => setInputValue5(e.target.value)}
                  placeholder="Страна"
                />

                <select
                  name=""
                  id=""
                  onChange={(e) => setInputValue6(e.target.value)}
                  value={inputValue6}
                >
                  {category.map((item) => {
                    return <option>{item.categoryName}</option>;
                  })}
                </select>

                <input
                  type="file"
                  onChange={(e) => setImageUpload(e.target.files[0])}
                />
                <button onClick={uploadFile}>Upload</button>

                <button className="form__button" onClick={saveData}>
                  Добавить товар
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
