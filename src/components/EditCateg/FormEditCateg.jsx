import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import "./FormEditCateg.css";

export default function FormEditCateg() {
  const navigate = useNavigate();
  const { firebaseId } = useParams();

  let [inputValue1, setInputValue1] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "category/" + firebaseId);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const targetObject = snapshot.val();
        setInputValue1(targetObject.categoryName);
      } else {
        alert("error");
      } 
    };
    fetchData();
  }, [firebaseId]);
  

  const overwriteDate = async () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "category/" + firebaseId);
    set(newDocRef, {
      categoryName: inputValue1,
    })
      .then(() => {
        alert("data save successfully");
        navigate("/admin");
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
      <section className="form__categ">
        <div className="container">
          <div className="form__categ-inner">
            {/* <div className="preview__side">
            
            </div>
           */}
            {/* <img src="/public/AddTovar/image.png" alt="" /> */}
            <div className="tovar__inner-form">
              <div className="form__inner-desc">
                <h3>Редактирование категорий</h3>
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
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                  />
                  {/* <TextField
                    id="standard-basic"
                    label="Фамилия"
                    variant="standard"
                    defaultValue={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  /> */}
                </Box>
                <Button
                  type="submit"
                  onClick={overwriteDate}
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
                  Добавить категорию
                </Button>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
