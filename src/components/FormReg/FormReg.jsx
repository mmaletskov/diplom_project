import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  getStorage,
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { auth } from "../../firebase";
import "./FormReg.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormReg() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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

  const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [preview, setPreview] = useState(null);

  const uploadFile = async () => {
    if (!imageUpload) return;

    const imageDb = getStorage();
    const imageRef = storageRef(imageDb, `images/avatar/${imageUpload.name}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  };

  const handleSignUp = async (image) => {
    const imageUrl = await uploadFile(image);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: `${name}`,
          photoURL: imageUrl,
        })
          .then(() => {
            // Успешно обновлено имя пользователя
            console.log("Имя пользователя успешно установлено");
            navigate("/auth");
          })
          .catch((error) => {
            // Ошибка обновления имени пользователя
            console.error("Ошибка при установке имени пользователя: ", error);
            toast.error("Ошибка при установке имени пользователя")
          });
      })
      .catch((error) => {
        // Ошибка регистрации пользователя
        console.error("Ошибка регистрации пользователя: ", error);
        toast.error("Ошибка регистрации пользователя",{
          position:"top-center"
        });
      });
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

  return (
    <div>
      <ToastContainer/>
      <section className="reg">
        <div className="container">
          <div className="reg__inner">
            <div className="reg__inner-image">
              {/* <img src="/public/Form/form-image.png" alt="" /> */}
              {preview && (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ maxWidth: "300px", maxHeight: "100%" }}
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
            <div className="reg__inner-form">
              <div className="form__inner-desc">
                <h3>Регистрация</h3>
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
                    label="ФИО"
                    variant="standard"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
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
                    label="Почта"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Пароль
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Повторите пароль
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={showPassword2 ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  onClick={handleSignUp}
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
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
