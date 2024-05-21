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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import "react-toastify/dist/ReactToastify.css";

import "./FormAddTovar.css";

export default function FormAddTovar() {
  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  let [inputValue3, setInputValue3] = useState("");
  let [inputValue4, setInputValue4] = useState("");
  let [inputValue5, setInputValue5] = useState("");
  let [inputValue6, setInputValue6] = useState("");
  let [inputValue7, setInputValue7] = useState("");
  let [imageUpload, setImageUpload] = useState(null);
  const [preview, setPreview] = useState(null);
  const [age, setAge] = useState("");

  const saveData = async (image) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "tovars"));
    const imageUrl = await uploadFile(image);
    set(newDocRef, {
      title: inputValue1,
      descr: inputValue2,
      price: inputValue3,
      size: inputValue4,
      country: inputValue5,
      category: inputValue6,
      count: inputValue7,
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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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

  const uploadFile = async () => {
    if (!imageUpload) return;

    const imageDb = getStorage();
    const imageRef = storageRef(
      imageDb,
      `images/catalogItems/${imageUpload.name}`
    );
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUpload(file);
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <section className="form__tovar">
        <div className="container">
          <div className="form__tovar-inner">
            <div className="preview__side">
            {preview && (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </>
                )}
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  onClick={uploadFile}
                  onChange={handleImageChange}
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    width: "80%",
                    textTransform: "unset",
                    backgroundColor: "#4e5b83",

                    "&:hover": {
                      backgroundColor: "white",
                      color: "#4e5b83",
                    },
                  }}
                >
                  Загрузить изображение
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setImageUpload(e.target.files[0])}
                  />
                </Button>
            </div>
          
            {/* <img src="/public/AddTovar/image.png" alt="" /> */}
            <div className="tovar__inner-form">
              <div className="form__inner-desc">
                <h3>Добавление товара</h3>
                
                

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "300px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="Введите название"
                    variant="standard"
                    defaultValue={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                  />
                  {/* <TextField
                    id="standard-basic"
                    label="Фамилия"
                    variant="standard"
                    defaultValue={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  /> */}
                  <TextField
                    id="standard-basic"
                    label="Описание"
                    variant="standard"
                    multiline
                    rows={6}
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Цена"
                    variant="standard"
                    value={inputValue3}
                    onChange={(e) => setInputValue3(e.target.value)}
                  />
                   <TextField
                    id="standard-basic"
                    label="Введите количество товара"
                    variant="standard"
                    defaultValue={inputValue7}
                    onChange={(e) => setInputValue7(e.target.value)}
                  />
                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                       Выберите размер
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="сategory"
                      value={inputValue4}
                      onChange={(e) => setInputValue4(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>Выберите значение</em>
                      </MenuItem>
                      <MenuItem value={"44-46"}>44-46</MenuItem>
                      <MenuItem value={"48-50"}>48-50</MenuItem>
                      <MenuItem value={"52-54"}>52-54</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    id="standard-basic"
                    label="Страна изготовитель"
                    variant="standard"
                    value={inputValue5}
                    onChange={(e) => setInputValue5(e.target.value)}
                  />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Выберите категорию
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={inputValue6}
                      onChange={(e) => setInputValue6(e.target.value)}
                      label="сategory"
                    >
                      <MenuItem value="">
                        <em>Выберите значение</em>
                      </MenuItem>
                      {category.map((item) => {
                        return <MenuItem value={item.categoryName}>{item.categoryName}</MenuItem>
                      })}
                      {/* <MenuItem value={10}>{item.categoryName}</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  onClick={saveData}
                  fullWidth
                  variant="contained"
                  sx={{
                    fontFamily: "Montserrat Alternates",
                    textTransform: "unset",
                    padding: "15px 30px",
                    fontSize: "18px",
                    fontWeight: "400",
                    backgroundColor: "black",
                    "&:hover": { backgroundColor: "white", color: "black" },
                  }}
                >
                  Добавить товар
                </Button>
                {/* <input
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
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
