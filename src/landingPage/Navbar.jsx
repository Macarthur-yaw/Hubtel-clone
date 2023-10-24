import { Link } from 'react-router-dom'
import Hubtel from '../assets/hubtellogo.png'
import  {FaCaretDown} from 'react-icons/fa'

function Navbar(){
    return (
     <div className='flex flex-row px-4 z-10 fixed w-[100%] bg-white  justify-between items-center'>
         
      <div>
      <img src={Hubtel} width='100px' height='28px'  alt='a logo of the company'/>
 
      </div>
         
 
 <ul className='flex flex-row gap-4 items-center'>
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
         RaiseUp for schools
     </li>
     <li className='hover:bg-[#ECFFFD] p-4'>
         Hubtel for Hospitals
     </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
     Hubtel for Government
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
         Service Providers
     </li>
     <li className='hover:bg-[#ECFFFD] p-4'>
         Shops
     </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
     Riders
 </li>
 <li className='hover:bg-[#ECFFFD] p-4'>
     Restaurants
 </li>
 
     </ul>
 
 
 </li>
 
     </ul>     
 
 
 
 
             </div>
    )
 }

 export default Navbar;
