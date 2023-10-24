import { useState } from 'react'
import './App.css'
import Homepage from './landingPage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Charge from './RouterPages/TakePaymentPages/Charge'
// import inter from './RouterPages/TakePaymentPages/Inter'
import RequestPage from './RouterPages/TakePaymentPages/RequestPage'
import InterPage from './RouterPages/TakePaymentPages/InterPage'
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'

function App() {

  return (
    <>
{/* <Homepage/>    */}

<Navbar/>   

<Routes>
  <Route path='/' element={<Homepage/>} index/>
  <Route path='/Charge' element={<Charge/>}/>
  <Route path='/inter' element={<InterPage/>}/>
  <Route path='/Request' element={<RequestPage/>}/>


</Routes>
<Footer/>
    </>
  )
}

export default App
