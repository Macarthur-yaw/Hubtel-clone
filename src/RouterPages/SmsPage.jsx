import reachCustomers from '../assets/reach-customers.png'
import requestPayment from '../assets/request-payments.png'
import mediaIcon from '../assets/media.png'
import sendMoney from '../assets/send-money.png'
import personaliseSms from '../assets/personalise-sms.png'
import connectApis from '../assets/connect-apis.png'
const SmsPage = () => {
    return ( 
        <div className='py-28'>
            <div className='flex md:flex-row flex-col gap-2 items-center justify-center '>
                <span className=' flex flex-col items-center gap-2'>
                    <h1 className='font-semibold md:text-[22px] text-[18px]'>
                      Reach customers fast with SMS  
                    </h1>

                    <h2 className='w-[70%] text-center'>
                        It's the surest,most reliable way to send messages to unlimited contacts.
                    </h2>
<button className='text-[13px] p-2 rounded-md bg-[#01c7b1] border-[#01c7b1] text-white '>START MESSAGING</button>
                </span>

                <img src={reachCustomers} className='w-[60%] md:w-[70%]'/>
            </div>

            <div className='flex md:flex-row flex-col gap-2 items-center justify-center  '>
<h1 className='font-semibold text-[22px] mb-10'>
    Add a special touch to your bulk SMS
</h1>

<div className='flex sm:flex-row  flex-col   '>
<div className=''>
<img src={requestPayment} className=' sm:w-[100%]'/>
</div>
<span className='flex flex-col items-start p-2 gap-2'>
    <h1 className='sm:text-[20px] font-semibold'>
        Request payments via SMS
    </h1>
    <h2 className='sm:text-[18px] sm:w-[50%] '>
        Organize your contacts in Microsoft Excel,upload with a message, add a payment request to send
    </h2>

    <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a>
</span>
</div>




                </div>
            
                <div className='flex sm:flex-row  flex-col py-10  '>
<div className=''>
<img src={sendMoney} className=' sm:w-[100%]'/>
</div>
<span className='flex flex-col items-start p-2 gap-2'>
    <h1 className='sm:text-[20px] font-semibold'>
        Send Money to unlimited contacts
    </h1>
    <h2 className='sm:text-[18px] sm:w-[50%] '>
    Add money to your SMS so your contacts can withdraw instantly to mobile money or bank account.
    </h2>

    {/* <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a> */}
</span>
</div>

<div className='flex sm:flex-row  flex-col py-10  '>
<div className=''>
<img src={personaliseSms} className=' sm:w-[100%]'/>
</div>
<span className='flex flex-col items-start p-2 gap-2'>
    <h1 className='sm:text-[20px] font-semibold'>
        Send Money to unlimited contacts
    </h1>
    <h2 className='sm:text-[18px] sm:w-[50%] '>
    Add money to your SMS so your contacts can withdraw instantly to mobile money or bank account.
    </h2>

    {/* <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a> */}
</span>
</div>


<div className='flex sm:flex-row  flex-col py-10  '>
<div className=''>
<img src={connectApis} className=' sm:w-[100%]'/>
</div>
<span className='flex flex-col items-start p-2 gap-2'>
    <h1 className='sm:text-[20px] font-semibold'>
        Connect diretly via APIs
    </h1>
    <h2 className='sm:text-[18px] sm:w-[50%] '>
    Integrate your systems with Hubtel’s APIs. Simply create your Programmable Integration Key and share with your developer/engineer to do the rest via the 
    
   <a href='' className='underline text-[#01c7b1]'> Hubtel Developer Portal.</a>
    </h2>

    {/* <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a> */}
</span>
</div>
<div className=' text-center'>
<button className='font-semibold bg-[#01c7b1] text-white p-2 rounded-md '>START YOUR BULK SMS NOW</button>
</div>
               



        </div>
     );
}
 
export default SmsPage;