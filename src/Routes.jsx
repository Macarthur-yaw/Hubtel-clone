import Homepage from './landingPage/Homepage'
import { Route, Routes } from 'react-router-dom'
import Charge from './RouterPages/TakePaymentPages/Charge'
// import inter from './RouterPages/TakePaymentPages/Inter'
import RequestPage from './RouterPages/TakePaymentPages/RequestPage'
import InterPage from './RouterPages/TakePaymentPages/InterPage'
// import Navbar from './landingPage/Navbar'
// import Footer from './landingPage/Footer'
import Raise from './RouterPages/GrowRevenuesPages/Raise'
import HubtelRev from './RouterPages/GrowRevenuesPages/HubtelRev'
import HubtelRev2 from './RouterPages/GrowRevenuesPages/HubtelRev2'
import Service from './RouterPages/ServePages/Service'
import Riders from './RouterPages/ServePages/Riders'
import Shops from './RouterPages/ServePages/Shops'
import Restaurant from './RouterPages/ServePages/Restaurant'
import SmsPage from './RouterPages/SmsPage'
import Login from './Login'
import OutletPage from './OutletPage'
// import Login from './Login'


// import { useState } from 'react'
// import './App.css'
function RoutePage() {

    return (
      <>
 
  <Routes>
  
    {/* <Route path='/login' element={<Login/>}/> */}
    <Route path='/' element={<OutletPage/>} >
        <Route index  element={<Homepage/>}/>
     <Route path='/Charge' element={<Charge/>}/>
     <Route path='/inter' element={<InterPage/>}/>
     <Route path='/Request' element={<RequestPage/>}/>
     <Route path='/Sms' element={<SmsPage/>}/>
  
  
      <Route path='/Raise' element={<Raise/>}/>
  
     <Route path='/Hospitals' element={<HubtelRev/>}/>
  <Route path='/Government' element={<HubtelRev2/>}/>
  
  <Route path='/Service' element={<Service/>}/>
  <Route path='/Riders' element={<Riders/>}/>
  <Route path='/Shops' element={<Shops/>}/>
  <Route path='/Restaurant' element={<Restaurant/>}/>
  </Route>
  <Route path='/login' element={<Login/>}/>
  </Routes>
  
      </>
    )
  }
  
  export default RoutePage
  