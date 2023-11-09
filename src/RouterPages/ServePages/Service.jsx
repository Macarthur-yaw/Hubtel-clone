import serviceProvider from '../../assets/service-provider.webp'
import bgColor from '../../assets/bg-service-provider.svg'
import bgSp from '../../assets/bg-sp.webp'
import number1 from '../../assets/number1.png'
import number2 from '../../assets/number2.png'
import number3 from '../../assets/number3.png'

const Service = () => {
    return ( 
        <div className='py-20'>

            <div className='p-2 gap-12 md:w-[80%] w-[80%] mx-auto items-center md:absolute md:left-1/2 md:transform  md:-translate-x-1/2 md:top-1/4 flex md:flex-row flex-col  '>
     <span className='flex flex-col gap-2 '>
        <h1 className='font-semibold md:text-[30px] text-[22px] text-center'>
        Extend the reach of your utility 
        <br/>
        service
        </h1>
        <h3 className='md:text-[20px] text-center'>
        Enable customers to pay for your services on any device
        <br/>
         with ease
        </h3>

        <button className='border-2 md:w-[30%] text-[13px] bg-[#01c7b1] border-[#01c7b1] h-[35px] text-white  rounded'>
            START NOW
        </button>
     </span>
     <img src={serviceProvider} className='md:w-[400px] w-[80%]' />
     </div>

     
     <div className='hidden '>
        <img src={bgColor} className=''/>
     </div>
     
     <div className='p-4'>
<h1 className=' text-[25px]  mt-10 font-semibold text-center '>
    Trusted by top service providers
</h1>

<img src={bgSp} className='p-4'/>
     </div>

     <div className='bg-[#faf6ed] py-10'> 
        <h1 className='font-semibold text-center md:text-[30px] text-[22px] mb-10'>
            Distribute your service to transacting customers 
        </h1>

        <div className='md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-4 md:p-4 p-14'>
        <ServiceCard Title='Utility Top Ups' Content='PayTV, Internet, Closed-Community Grid Electricity/Water'/>
        <ServiceCard Title='Bill Payments' Content='Estate/Facility Management Fees, Hospitality Fees,'/>
        <ServiceCard Title='Paid Event Voting' Content='Reality TV Voting,Event Live Voting'/>
        <ServiceCard Title='Betting' Content='Account Top Up and Live Betting'/>
        <ServiceCard Title='Insurance' Content='Policy Renewal, New Policy Purchase, Automated Policy Payments, Claims Processing & Payment'/>
        <ServiceCard Title='Voucher Sales' Content='Result Checker Vouchers,Gift Vouchers,Service Tokens/Tickets'/>
        </div>
     </div>


<div className='mt-20 flex md:flex-row flex-col  items-center justify-center gap-10'>
    <div className='md:w-[35%] w-[70%] flex flex-col  gap-4 md:h-[500px] bg-gray-100 shadow-2xl border-gray-100 items-center'>
        <h1 className='font-semibold text-[22px] pt-10 px-4'>
            Connect your service to Hubtel.
        </h1>

        <ul className='list-none flex flex-col gap-4 p-2 mb-10'>
            <li className='border-2 font-semibold bg-white border-white inline-flex gap-2 items-center w-[100%] text-[20px] p-4 rounded-sm'>
<img src={number1}/>
                Complete the form to start set up. 
            </li>

            <li className='border-2 bg-white border font-semibold border-white w-[100%] inline-flex gap-2 p-4 text-[20px] items-center rounded-sm '>
              <img src={number2}/>

                Integrate the APIs
            </li>

            <li className='border-2 bg-white font-semibold border-white w-[100%] inline-flex gap-2 items-center p-4 text-[20px] rounded-sm'>
                <img src={number3}/>

                Start Selling 
            </li>
        </ul>
    </div>
    
    <div className='border-2 border-white  bg-white shadow-2xl rounded-sm p-4 md:h-[500px] md:w-[35%] w-[70%]'>

        <form className='flex flex-col gap-[1px] '>
            <span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Name'>Business Name</label>

<input className='border-[1px]  outline-none border-gray-300 md:w-[90%] p-[10px] rounded-sm' type='text' name='Name' placeholder='Eg.Rethink Restaurant'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'><label className='text-gray-600 text-[16px] font-semibold' htmlFor='Service'>Type of Service</label>
<input className='border-[1px] outline-none border-gray-300 md:w-[90%] p-[10px] rounded-sm' type='text' name='Service' placeholder='Eg. Type of service'/>
</span>

<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Mobile'>Mobile Number</label>

<input className='border-[1px] outline-none border-gray-300 md:w-[90%] p-[10px] rounded-sm' type='text' name='Mobile' placeholder='Eg. 024XXXXXXX'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Description'>Service Description</label>
      
      <textarea className='border-2 outline-none border-gray-300 md:w-[90%] p-[10px] rounded-sm' name='Description' placeholder='Eg. Service Description'/>
      </span>
    <br/>
    <button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold text-[13px] md:w-[30%] w-[40%] rounded-md'>CONNECT NOW</button>
        </form>
    </div>

    </div>     
        </div>
     );
}
 
function ServiceCard(props){
return (
    <div className='border-2 rounded-md bg-white border-white p-2'>
       <h1 className='font-semibold md:text-[22px] text-[20px]'> {props.Title}</h1>

      <h1 className='md:text-[20px] text-[16px]'>  {props.Content}</h1>
    </div>
)
}
export default Service;
