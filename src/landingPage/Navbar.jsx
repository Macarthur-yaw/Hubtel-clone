import { Link } from 'react-router-dom'
import Hubtel from '../assets/hubtellogo.png'
import  {FaCaretDown,FaBars} from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'
function Navbar(){
    const[display,setDisplay]=useState(false)
    function displayMenu(){
        setDisplay(!display)
        console.log('hello');

    }
    return (
<div>
<div className='flex border-b-[1px] md:border-b-none border-b-gray-100 flex-row py-4 px-4 md:py-0 z-10 fixed w-[100%] bg-white  justify-between items-center'>
         
      <div>
      <img src={Hubtel} width='100px' height='28px'  alt='a logo of the company'/>
 
      </div>
         
         <span onClick={displayMenu} className='p-4 hover:bg-gray-100 hover:border-gray-100 cursor-pointer rounded-full'>
 <FaBars className='block md:hidden text-xl '/>
 </span>

 

 <ul className='hidden md:block md:flex md:flex-row md:gap-4 md:items-center'>
     <li className='text-[14.4px]  p-6
 border-2 
 border-white
 hover:border-[#ECFFFD]
     hover:bg-[#ECFFFD]
     cursor-pointer
    hover:border-b-[2px]
    hover:border-b-[#01c7b1]
     '>
         Make Orders
     </li>
 <li className='text-[14.4px]
 p-6
 border-2 
 border-white
 group
 hover:border-[#ECFFFD]
 hover:bg-[#ECFFFD]
 cursor-pointer
 hover:border-b-[2px]
 hover:border-b-[#01c7b1]
 inline-flex items-center
 gap-[3px] 
 '>
     Take Payment
     <FaCaretDown/>
     <ul className='hidden group-hover:block absolute border-2 border-white pt-2 top-[99%] text-[15px]  bg-white left-[52%] shadow-sm'>
     <li className='hover:bg-[#ECFFFD] p-4'>
      <Link to='/Request'>Request money from anyone</Link>   
     </li>
     <li className='hover:bg-[#ECFFFD] p-4'>
    <Link to='/Charge'>Charge Customers in store</Link>     
     </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
   <Link to='/inter'>Integrate online checkout</Link>  
 </li>
     </ul>
 </li>
 
 <li className='text-[14.4px]
 p-6
 border-2 
 border-white
 
 hover:border-[#ECFFFD]
 hover:bg-[#ECFFFD]
 cursor-pointer
 hover:border-b-[2px]
 hover:border-b-[#01c7b1]
 inline-flex items-center
 gap-[3px]
 group
 '>
     Grow revenue
     <FaCaretDown/>
     <ul className='hidden group-hover:block absolute border-2 border-white  top-[99%] text-[15px] pt-2 bg-white left-[64.8%] shadow-sm'>
     <li className='hover:bg-[#ECFFFD] p-4'>
       <Link to='/Raise'>RaiseUp for schools </Link>  
     </li>
     <li className='hover:bg-[#ECFFFD] p-4'>
      <Link to='/Hospitals'>Hubtel for Hospitals</Link>   
     </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
  <Link to='/Government'>   Hubtel for Government</Link>
 </li>
     </ul>
 
 
 
 </li>
 
 <li className='text-[14.4px]
 p-6
 border-2 
 border-white
 
 hover:border-[#ECFFFD]
 hover:bg-[#ECFFFD]
 cursor-pointer
 hover:border-b-[2px]
 hover:border-b-[#01c7b1]
 '>
     Send SMS
 </li>
 
 <li className='text-[14.4px]
 p-6
 border-2 
 border-white
 
 hover:border-[#ECFFFD]
 hover:bg-[#ECFFFD]
 cursor-pointer
 hover:border-b-[2px]
 hover:border-b-[#01c7b1]
 inline-flex items-center
 gap-[3px]
 group
 '>
     Serve with us
     <FaCaretDown/>
 
    < ul className='hidden group-hover:block absolute border-2 border-white  top-[99%] text-[15px] pt-2 bg-white left-[87.4%] shadow-sm'>
     <li className='hover:bg-[#ECFFFD] p-4'>
 <Link to='/Service'>       Service Providers</Link> 
     </li>
     <li className='hover:bg-[#ECFFFD] p-4'>
      <Link to='/Shops'>   Shops</Link>
     </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
   <Link to='/Riders'>  Riders</Link>
 </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
 <Link to='/Restaurant'>    Restaurants</Link>
 </li>
 
     </ul>
 
 
 </li>
 
     </ul>     
 
 
 
 
             </div>
<div>
<motion.ul initial={{y:'-100%'}} animate={{y:display? 80:'-100%'}} transition={{duration:1}} className={`${display?'block       ':'hidden'} border-2 border-white w-[100%] left-0 absolute bg-white flex flex-col text-black `}>
    <li className='text-[14.4px]  p-2
 
 cursor-pointer
    border-b-[1px]
    
     '>
         Make Orders
     </li>
 <li className='text-[14.4px]
  p-2
flex flex-row
  items-center
 cursor-pointer
    border-b-[1px]
    gap-2
 '>
     Take Payment
     <FaCaretDown/>
 
 </li>
 
 
 <li className='text-[14.4px]
 p-2
 flex flex-row
 items-center
 gap-2
 border-b-[1px]
 '>
     Grow revenue
     <FaCaretDown/>
    
 
 
 </li>
 
 <li className='text-[14.4px]
 p-2
 border-b-[1px]
 '>
     Send SMS
 </li>
 
 <li className='text-[14.4px]
 p-2
 border-b-[1px] gap-2 flex flex-row items-center
 '>
     Serve with us
     <FaCaretDown/>
 
 
 </li>


        </motion.ul>

</div>
</div>
)
 }

 export default Navbar;
