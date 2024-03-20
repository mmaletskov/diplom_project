import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import Catalog from './components/Catalog/Catalog'

export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = { <Banner/> } />
        <Route path="/catalog" element = { <Catalog/> } />
      </Routes>
      <Footer/>
    </>
  )
}


