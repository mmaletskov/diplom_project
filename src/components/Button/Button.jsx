import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <div>
      <Link to="/catalog" className="button">В каталог</Link>
    </div>
  )
}
