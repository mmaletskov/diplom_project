import React from 'react'
import './ItemButton.css'
import { Link } from 'react-router-dom'

export default function ItemButton({title}) {
  return (
    <Link to="" className="item__btn">{title}</Link>
  )
}
