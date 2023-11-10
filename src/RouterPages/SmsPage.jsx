import reachCustomers from '../assets/reach-customers.png'
import requestPayment from '../assets/request-payments.png'
import mediaIcon from '../assets/media.png'
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

<div className='flex md:flex-row    gap-4 '>
<div className=''>
<img src={requestPayment} className='w-[35%] md:w-[100%]'/>
</div>
<span>
    <h1 className='text-[20px] font-semibold'>
        Request payments via SMS
    </h1>
    <h2 className='text-[18px] w-[50%]'>
        Organize your contacts in Microsoft Excel,upload with a message, add a payment request to send
    </h2>

    <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a>
</span>
</div>
                </div>
            

        </div>
     );
}
 
export default SmsPage;