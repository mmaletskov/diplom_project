// import React from "react";
// import "./FormAuth.css";

// export default function FormAuth() {
//   return (
//     <div>
//       <section className="auth">
//         <div className="container">
//           <div className="auth__inner">
//             <img src="/public/Form/form-image.png" alt="" />
//             <div className="auth__inner-form">
//               <div className="form__inner-desc">
//                 <h3>Авторизация</h3>
//                 <form className="form" action="">
//                   <input
//                     className="form__input"
//                     type="text"
//                     placeholder="Почта"
//                   />
//                   <input
//                     className="form__input"
//                     type="text"
//                     placeholder="Пароль"
//                   />
//                   <input className="form__button" type="submit" value="Войти" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FormAuth.css";
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
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FormAuth() {
  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          await signInWithEmailAndPassword(auth, email, password)
          // alert("Login successfully")
          nav("/profile")
      }catch(err){
          // console.log(err)
          toast.error("Ошибка: " + err, {
            position: "top-center"
          })
      }
  }
  return (
    <div>
      <ToastContainer/>
      <section className="auth">
        <div className="container">
          <div className="auth__inner">
            <div className="auth__inner-text">
            <h3>У Вас еще нет аккаунта ?</h3>
            <p>Пройдите регистрацию <Link to="/reg" className="reg__link">здесь</Link> </p>
            </div>
            <div className="reg__inner-form">
              <div className="form__inner-desc">
                <h3>Войти в аккаунт</h3>
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

                 
                </Box>
                <Button
                  type="submit"
                  onClick={handleSubmit}
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
                  Войти
                </Button> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

