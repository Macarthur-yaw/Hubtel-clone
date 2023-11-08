import serviceProvider from '../../assets/service-provider.webp'
import bgColor from '../../assets/bg-service-provider.svg'
import bgSp from '../../assets/bg-sp.webp'
import number1 from '../../assets/number1.png'
import number2 from '../../assets/number2.png'
import number3 from '../../assets/number3.png'

const Service = () => {
    return ( 
        <div className='py-20'>

            <div className='p-2 gap-12 w-[80%]  absolute left-1/2 transform -translate-x-1/2 top-1/4 flex flex-row  '>
     <span className='flex flex-col gap-2'>
        <h1 className='font-semibold text-[30px]'>
        Extend the reach of your utility 
        <br/>
        service
        </h1>
        <h3 className='text-[20px]'>
        Enable customers to pay for your services on any device
        <br/>
         with ease
        </h3>

        <button className='border-2 w-[30%] text-[13px] bg-[#01c7b1] border-[#01c7b1] h-[35px] text-white  rounded'>
            START NOW
        </button>
     </span>
     <img src={serviceProvider} className='w-[400px]' />
     </div>

     
     <div>
        <img src={bgColor}/>
     </div>
     
     <div>
<h1 className=' text-[25px]  mt-10 font-semibold text-center '>
    Trusted by top service providers
</h1>

<img src={bgSp} className='p-4'/>
     </div>

     <div className='bg-[#faf6ed] py-10'> 
        <h1 className='font-semibold text-center text-[30px] mb-10'>
            Distribute your service to transacting customers 
        </h1>

        <div className='grid grid-cols-3 gap-4 p-4'>
        <ServiceCard Title='Utility Top Ups' Content='PayTV, Internet, Closed-Community Grid Electricity/Water'/>
        <ServiceCard Title='Bill Payments' Content='Estate/Facility Management Fees, Hospitality Fees,'/>
        <ServiceCard Title='Paid Event Voting' Content='Reality TV Voting,Event Live Voting'/>
        <ServiceCard Title='Betting' Content='Account Top Up and Live Betting'/>
        <ServiceCard Title='Insurance' Content='Policy Renewal, New Policy Purchase, Automated Policy Payments, Claims Processing & Payment'/>
        <ServiceCard Title='Voucher Sales' Content='Result Checker Vouchers,Gift Vouchers,Service Tokens/Tickets'/>
        </div>
     </div>


<div className='mt-20 flex flex-row items-center justify-center gap-10'>
    <div className='w-[35%] flex flex-col  gap-4 h-[500px] bg-gray-100 shadow-2xl border-gray-100 items-center'>
        <h1 className='font-semibold text-[22px] pt-10 px-4'>
            Connect your service to Hubtel.
        </h1>

        <ul className='list-none flex flex-col gap-4 p-2'>
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
    
    <div className='border-2 border-white  bg-white shadow-2xl rounded-sm p-4 h-[500px] w-[35%]'>

        <form className='flex flex-col gap-[1px]'>
            <span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Name'>Business Name</label>

<input className='border-[1px]  outline-none border-gray-300 w-[90%] p-[10px] rounded-sm' type='text' name='Name' placeholder='Eg.Rethink Restaurant'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'><label className='text-gray-600 text-[16px] font-semibold' htmlFor='Service'>Type of Service</label>
<input className='border-[1px] outline-none border-gray-300 w-[90%] p-[10px] rounded-sm' type='text' name='Service' placeholder='Eg. Type of service'/>
</span>

<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Mobile'>Mobile Number</label>

<input className='border-[1px] outline-none border-gray-300 w-[90%] p-[10px] rounded-sm' type='text' name='Mobile' placeholder='Eg. 024XXXXXXX'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Description'>Service Description</label>
      
      <textarea className='border-2 outline-none border-gray-300 w-[90%] p-[10px] rounded-sm' name='Description' placeholder='Eg. Service Description'/>
      </span>
    <br/>
    <button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold text-[13px] w-[30%] rounded-md'>CONNECT NOW</button>
        </form>
    </div>

    </div>     
        </div>
     );
}
 
function ServiceCard(props){
return (
    <div className='border-2 rounded-md bg-white border-white p-2'>
       <h1 className='font-semibold text-[22px]'> {props.Title}</h1>

      <h1 className='text-[20px]'>  {props.Content}</h1>
    </div>
)
}
export default Service;
