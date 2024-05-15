import React, { useState } from 'react'
import Modal from 'react-modal'
import Button from '../../components/Button/Button'
import './ModalkaReviews.css'
import { useNavigate } from 'react-router-dom'
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";


export default function ModalkaReviews() {
    const navigate = useNavigate();

    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
    let [inputValue3, setInputValue3] = useState("");
    let [imageUpload, setImageUpload] = useState("");


    const uploadFile = async() => {
      if(!imageUpload) return;

      const imageDb = getStorage();
      const imageRef = storageRef(
        imageDb
      )
    }
    

    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    

  return (
    <div>
      <button className="button-review" onClick={showModal}>Написать отзыв</button>
      <Modal className="modal-window" 
      isOpen={modalIsOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0, 0.6)'
        },
      }
    }
      >
        
        <div className="md-header">
            <h3 className="title">Таблица размеров</h3>
            <button className="button-close" onClick={closeModal}><img src="/public/ItemPage/cancel.svg" alt="" /></button>
        </div>
        <div className="md-body">
            
        </div>
      </Modal>
    </div>
  )
}
