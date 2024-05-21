import React, { useState } from "react";
import app from "../../firebase";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./FormAddCateg.css";

export default function FormAddCateg() {
  const navigate = useNavigate();
  let [inputValue1, setInputValue1] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "category"));
    set(newDocRef, {
      categoryName: inputValue1,
    })
      .then(() => {
        navigate("/admin")
      })
      .catch((error) => {
        toast.error("Ошибка");
      });
  };

  return (
    <div>
      <ToastContainer/>
       <section className="form__categ">
        <div className="container">
          <div className="form__categ-inner">
            {/* <div className="preview__side">
            
            </div>
           */}
            {/* <img src="/public/AddTovar/image.png" alt="" /> */}
            <div className="tovar__inner-form">
              <div className="form__inner-desc">
                <h3>Добавление категорий</h3>
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
