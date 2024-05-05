import React from 'react'
import './AdminButton.css'

export default function AdminButton({title,onClick}) {
  return (
    <div>
      <button onClick={onClick} className="active__button">{title}</button>
    </div>
  )
}
