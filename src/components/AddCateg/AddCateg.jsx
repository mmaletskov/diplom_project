import React, {useState} from 'react'
import app from "../../firebase";
import { getDatabase, ref, set, push } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import './AddCateg.css'

export default function AddCateg() {

  let[inputValue1, setInputValue1] = useState("");

  const saveData = async() => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db,"category"));
    set(newDocRef, {
      categoryName : inputValue1,
    })

    .then(()=>{
      alert("success")
    })
    .catch((error) => {
      alert("error", error.message);
    })
  }
 
  return (
    <div>
      <input 
      type="text"
      value={inputValue1}
      onChange={(e)=> setInputValue1(e.target.value)}
      />

    <button onClick={saveData}>Save</button>
    </div>
  )
}
