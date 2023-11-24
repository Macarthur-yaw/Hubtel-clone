import hubtelIcon from './assets/hubtellogo.png'
import axios from 'axios'
import {useState} from 'react'
const Login = () => {
    const[number,setNumber]=useState("")
    const[otp,setOtp]=useState("")
    const[display,setDisplay]=useState(false)
  async  function handleSubmit(e){
e.preventDefault()
console.log(number)
const contact={"contact":number}
console.log(contact);
try {
    const sendContact=await axios.post('http://localhost:5000/api/otp',contact)
     const result=sendContact.data;
     console.log(result)
} catch (error) {
    console.log(error)
}
   }
 async  function handleOtp(e){
e.preventDefault()
console.log(otp)
const formData={"contact":number,"otp":otp}
console.log(formData)

try {
    const verifyOtp=await axios.post('http://localhost:5000/api/otp',formData)
    const result=verifyOtp.data;
    console.log(result)
    if(result.data.message){
        console.log('welcome to the dashboard')
    }
} catch (error) {
    console.log(error)
}
   }
    return ( 
        <div className="w-full bg-[#f8f9fb] h-screen relative ">
   <span className='border-2 '>
     <img src={hubtelIcon} className='w-[10%] mx-auto mt-[20vh]'/>
   
     </span>
        <div className="bg-white border-[1px] border-white shadow-sm w-[28%] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 h-[35%]">
          
          
            <form onSubmit={handleSubmit} className={`${display ? 'hidden':' flex  p-4   flex-col gap-6 '}`}>
<span className="flex flex-col gap-6">
    <h1 className="text-sm">Enter your phone number</h1>
                <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="059 929 3572" className="p-2 w-[100%] rounded border-[1px] outline-none"/>
                </span>
                <button onClick={()=>setDisplay(true)} type="submit" className="font-bold rounded text-[#fff] bg-[#01c7b1] text-[1rem] cursor-pointer border-[#01c7b1] border-[1px] p-[3px]">Login</button>
            </form>
{
    display && (
        <form onSubmit={handleOtp} className="flex  p-4   flex-col gap-6 ">
        <span className="flex flex-col gap-6">
            <h1 className="text-sm">Enter the otp</h1>
                        <input type="text" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="059 929 3572" className="p-2 w-[100%] rounded border-[1px] outline-none"/>
                        </span>
                        <button type="submit" className="font-bold rounded text-[#fff] bg-[#01c7b1] text-[1rem] cursor-pointer border-[#01c7b1] border-[1px] p-[3px]">Submit</button>
                    </form>
    )
}
            
            </div>
        </div>
     );
}
 
export default Login;