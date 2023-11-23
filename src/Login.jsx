import hubtelIcon from './assets/hubtellogo.png'
const Login = () => {
    return ( 
        <div className="w-full bg-[#f8f9fb] h-screen relative ">
   <span className='border-2 '>
     <img src={hubtelIcon} className='w-[10%] mx-auto mt-[20vh]'/>
   
     </span>
        <div className="bg-white border-[1px] border-white shadow-sm w-[28%] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 h-[35%]">
          
          
            <form className="flex  p-4   flex-col gap-6 ">
<span className="flex flex-col gap-6">
    <h1 className="text-sm">Enter your phone number</h1>
                <input type="text" placeholder="059 929 3572" className="p-2 w-[100%] rounded border-[1px] outline-none"/>
                </span>
                <button type="submit" className="font-bold text-[#fff] bg-[#01c7b1] text-[1rem] cursor-pointer border-[#01c7b1] border-[1px] p-[3px]">Login</button>
            </form>
            </div>
        </div>
     );
}
 
export default Login;