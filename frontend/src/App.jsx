import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Placeorder from './pages/Placeorder/Placeorder'
import LogInPopUp from './components/LogInPopUp/LogInPopUp'
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin && <LogInPopUp setShowLogin={setShowLogin} />}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart'element={<Cart/>}/>
         <Route path='/order'element={<Placeorder/>}/>
        
      </Routes>
      
      
    </div>
   
    <Footer/>
     </>
  )
}

export default App
