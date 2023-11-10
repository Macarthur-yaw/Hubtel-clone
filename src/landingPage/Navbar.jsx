import { Link } from 'react-router-dom'
import Hubtel from '../assets/hubtellogo.png'
import  {FaCaretDown,FaBars} from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'
function Navbar(){
    const[display,setDisplay]=useState(false)
   const[content,setContent]=useState(false)
   const[revenue,setRevenue]=useState(false)
   const[serve,setServe]=useState(false)
   function displayMenu(){
        setDisplay(!display)
        console.log('hello');

    }
    function displayContent(){
        setContent(prevState=>!prevState)
        setRevenue(false)
setServe(false)
    }

    function displayRevenue(){
        setRevenue(prevState=>!prevState)
        setContent(false)
        setServe(false)
    }

    function displayServe(){
        setServe(prevState=>!prevState)
        setContent(false)
        setRevenue(false)
    }
    return (
<div>
<div className='flex border-b-[1px] md:border-b-none border-b-gray-100 flex-row py-4 px-4 md:py-0 z-10 fixed w-[100%] bg-white  justify-between items-center'>
         
    <Link to='/'>  <div>
      <img src={Hubtel} width='100px' height='28px'  alt='a logo of the company'/>
 
      </div>
      </Link>
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
     <Link to='/Request'> <li className='hover:bg-[#ECFFFD] p-4'>
      Request money from anyone   
     </li></Link>
     <Link to='/Charge'> <li className='hover:bg-[#ECFFFD] p-4'>
    Charge Customers in store     
     </li></Link>
     <Link to='/inter'><li className='hover:bg-[#ECFFFD] p-4'>
   Integrate online checkout  
 </li></Link>
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
     <Link to='/Raise'> <li className='hover:bg-[#ECFFFD] p-4'>
       RaiseUp for schools   
     </li></Link>
     <Link to='/Hospitals'> <li className='hover:bg-[#ECFFFD] p-4'>
      Hubtel for Hospitals   
     </li></Link>
     <Link to='/Government'> <li className='hover:bg-[#ECFFFD] p-4'>
     Hubtel for Government
 </li></Link>
     </ul>
 
 
 
 </li>
 <Link to='/Sms'>
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
 </Link>
 
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
    <Link to='/Service'>    <li className='hover:bg-[#ECFFFD] p-4'>
        Service Providers 
     </li></Link>
     <Link to='/Shops'> <li className='hover:bg-[#ECFFFD] p-4'>
         Shops
     </li></Link>
     <Link to='/Riders'><li className='hover:bg-[#ECFFFD] p-4'>
     Riders
 </li></Link>
 <Link to='/Restaurant'><li className='hover:bg-[#ECFFFD] p-4'>
     Restaurants
 </li></Link>
 
     </ul>
 
 
 </li>
 
     </ul>     
 
 
 
 
             </div>
<div>
<motion.ul initial={{y:'-100%'}} animate={{y:display? 80:'-100%'}} transition={{duration:1}} className={`${display?'block       ':'hidden'} md:hidden border-2 border-white w-[100%] left-0 fixed bg-white flex flex-col text-black `}>
   <Link to='/'> <li
    
    className='text-[14.4px]  p-2
 
 cursor-pointer
    border-b-[1px]
    
     '>
         Make Orders
     </li>
     </Link>
<span className='flex flex-col'>
 <li className='text-[14.4px]
  p-2
flex flex-row
  items-center
 cursor-pointer
    border-b-[1px]
    gap-2
 ' onClick={displayContent}>
     Take Payment
     <FaCaretDown/>





 
 </li>
 {content && (
    <div>
       <ul className='   border-2 border-white pt-2  text-[13px]  bg-white shadow-sm'>
       <Link to='/Request'> <li className='hover:bg-[#ECFFFD] p-4'>
        Request money from anyone   
       </li></Link>
       <Link to='/Charge'> <li className='hover:bg-[#ECFFFD] p-4'>
      Charge Customers in store     
       </li></Link>
       <Link to='/inter'> <li className='hover:bg-[#ECFFFD] p-4'>
     Integrate online checkout  
   </li></Link>
       </ul>
       </div>
)
    } 


 </span>
 
 <span className='flex flex-col'>
 <li className='text-[14.4px]
 p-2
 flex flex-row
 items-center
 gap-2
 border-b-[1px] cursor-pointer
 ' onClick={displayRevenue}>
     Grow revenue
     <FaCaretDown/>
    
 
 
 </li>
 {revenue && (
      <ul className=' border-2 border-white  text-[13px] pt-2 bg-white shadow-sm'>
     <Link to='/Raise'> <li className='hover:bg-[#ECFFFD] p-4'>
        RaiseUp for schools   
      </li></Link>
      <Link to='/Hospitals'> <li className='hover:bg-[#ECFFFD] p-4'>
       Hubtel for Hospitals   
      </li></Link>

      <Link to='/Government'><li className='hover:bg-[#ECFFFD] p-4'>
     Hubtel for Government
  </li></Link>
      </ul>
  
  
 )}
 </span>
 <Link to='/Sms'><li className='text-[14.4px]
 p-2
 border-b-[1px]
 cursor-pointer
 '>
     Send SMS
 </li>
 </Link>
 <span> <li className='text-[14.4px]
 p-2
 border-b-[1px] gap-2 flex flex-row cursor-pointer items-center
 ' onClick={displayServe}>
     Serve with us
     <FaCaretDown/>
 
 
 </li>

{serve && (
    < ul className='border-2 border-white   text-[13px] pt-2 bg-white  shadow-sm'>
<Link to='/Service'>    <li className='hover:bg-[#ECFFFD] p-4'>
       Service Providers 
    </li></Link>
    <Link to='/Shops'>   <li className='hover:bg-[#ECFFFD] p-4 cursor-pointer'>
        Shops
    </li></Link>
    <Link to='/Riders'> <li className='hover:bg-[#ECFFFD] p-4 cursor-pointer'>
    Riders
</li></Link>
<Link to='/Restaurant'><li className='hover:bg-[#ECFFFD] p-4 cursor-pointer'>
    Restaurants
</li></Link>

    </ul>

)}
 </span>

        </motion.ul>

</div>
</div>
)
 }

 export default Navbar;
