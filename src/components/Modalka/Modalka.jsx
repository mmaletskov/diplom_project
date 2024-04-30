import React, { useState } from 'react'
import Modal from 'react-modal'
import './Modalka.css'


export default function Modalka() {

    const [modalIsOpen,setModalIsOpen] = useState(false)

    function showModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    

  return (
    <div>
      <button className="button-open" onClick={showModal}>Таблица размеров</button>
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
            <img src="/public/ItemPage/tablesize.png" alt="" />
        </div>
      </Modal>
    </div>
  )
}
