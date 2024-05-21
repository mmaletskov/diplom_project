import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import Button from '../../components/Button/Button'
import "./ModalkaReviews.css";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import { auth } from "../../firebase";
import { getDatabase, get, set, ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { onAuthStateChanged } from "firebase/auth";


export default function ModalkaReviews() {
  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");
  const [displayName, setDisplayName] = useState();
  // const [imageUpload, setImageUpload] = useState(null);
  // const [preview, setPreview] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onloadend = () => {
  //       setImageUpload(file);
  //       setPreview(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  // const uploadFile = async () => {
  //   if (!imageUpload) return;

  //   const imageDb = getStorage();
  //   const imageRef = storageRef(imageDb, `images/reviews/${imageUpload.name}`);
  //   const snapshot = await uploadBytes(imageRef, imageUpload);
  //   const downloadURL = await getDownloadURL(snapshot.ref);

  //   return downloadURL;
  // };

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user){
        setDisplayName(user.displayName);
      }
      else{
        // alert("вы не зареганы");
      }
    })

    return unsub;
  }, [])

  

 const saveData = async () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "reviews"));
    // const imageUrl = await uploadFile(image);
    set(newDocRef, {
      text: inputValue1,
      author : displayName,
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

  return (
    <div>
      <button className="button-review" onClick={showModal}>
        Написать отзыв
      </button>
      <Modal
        className="modal-window-review"
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0, 0.6)",
          },
        }}
      >
        <div className="md-header">
          <h3 className="title">Оставить отзыв</h3>
          <button className="button-close" onClick={closeModal}>
            <img src="/public/ItemPage/cancel.svg" alt="" />
          </button>
        </div>
        <div className="md-body">
          <Box component="form" noValidate  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Напишите, что думаете о товаре"
              name="text"
              value={inputValue1}
              onChange={(e) => setInputValue1(e.target.value)}
              autoFocus
              multiline
              rows={8}
            />
            <TextField
              value={displayName}
              fullWidth
              onChange={(e)=>setInputValue2(e.target.value)}
            />
            {/* <TextField
              id="filled-multiline-static"
              // label="Нам важно Ваше мнение"
              multiline
              rows={6}
              input={inputValue1}
              fullWidth
            /> */}
            {/* {preview && (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ maxWidth: "100px", maxHeight: "100%" }}
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
              </Button> */}

            <Button
              type="submit"
              fullWidth
              onClick={saveData}
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform:"unset", backgroundColor:"black", "&:hover" : {backgroundColor: "white", color: "black"} }}
            >
            Добавить отзыв
            </Button>
           
          </Box>
        </div>
      </Modal>
    </div>
  );
}
