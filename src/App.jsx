import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Start from './pages/Start/Start'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router-dom'
import Catalog from './pages/Catalog/Catalog'
import ItemPage from './pages/ItemPage/ItemPage'
import Reg from './pages/Reg/Reg'
import Auth from './pages/Auth/Auth'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import AdminPage from './pages/AdminPage/AdminPage'
import AddTovar from './pages/AddTovar/AddTovar'
import AddCateg from './components/AddCateg/AddCateg'
import EditTovar from './pages/EditTovar/EditTovar'


export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element = { <Start/> } />
        <Route path="/catalog" element = { <Catalog/> } />
        <Route path="/item/:firebaseId" element = { <ItemPage/> } />
        <Route path="/reg" element = { <Reg/> } />
        <Route path="/auth" element = { <Auth/> } />
        <Route path="/cart" element = { <Cart/> } />
        <Route path="/profile" element = { <Profile/> } />
        <Route path="/admin" element = { <AdminPage/> } />
        <Route path="/add" element = { <AddTovar/> } />
        <Route path="/edit/:firebaseId" element = { <EditTovar/> } />
        <Route path="/addCateg" element = { <AddCateg/> } />
      </Routes>
      <Footer/>
    </>
  )
}


