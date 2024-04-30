import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export default function Button({title}) {
  return (
    <div>
      <Link to="/catalog" className="button">{title}</Link>
    </div>
  )
}
