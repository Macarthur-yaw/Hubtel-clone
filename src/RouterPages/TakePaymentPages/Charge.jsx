import backgroundPicture from '../../assets/bg-chargecustomers.webp'
import {FaApple,FaAndroid} from 'react-icons/fa'
import posPicture from '../../assets/pos-app.webp'
import posDevice from '../../assets/pos-device.webp'
import posDevice2 from '../../assets/pos-device-white.webp'
import posReceipt from '../../assets/pos-reciept.webp'
import majorPayments from '../../assets/major-payments (1).webp'

const Charge = () => {
    return ( 
        <div>

        <div className='md:grid md:grid-cols-2 pt-20 md:place-items-center  flex flex-col justify-center gap-6'>
             
             <div className='md:w-[58%]  mx-auto  flex flex-col items-center gap-4'>

                <h1 className='text-[20px] py-6 font-bold-200 font-semibold text-center '>
                Take card & mobile money payments at your pay point
                </h1>

                <h3 className='text-[167x] text-center '>
                Join thousands of smart businesses – from savvy start-ups to expanding enterprises – using a Hubtel card machine.

                </h3>

                <button className='text-[#01c7b1] bg-[#01c7b1] border-[#01c7b1] border-2 text-white p-2 rounded-md '>
                    GET STARTED
                </button>
             </div>

             <div>
<img src={backgroundPicture} alt='a man and a woman' className='md:max-w-[75%]  mx-auto p-4'/>
             </div>

             </div>
        
        <div className='md:grid md:grid-cols-2 p-4 flex flex-col gap-2 flex-col-reverse pt-[13%] md:place-items-center md:items-center md:justify-evenly py-20'>
<div className='flex flex-col'>
            <div  className='flex flex-col'>
            <h1 className='font-semibold text-[25px]'>
                Sell like a big business
            </h1>
            <h3 className='md:w-[70%] pb-2 border-b-[1px] border-b-[#878b90]'>
            Capture sales, generate invoices, track payments from your smartphone.

Activate your Hubtel Sales app to sell your store items and take payments from all customers.
            </h3>
            </div>
            <div id='icons'>
<p>Get the app</p>

<div id='subIcons' className='flex flex-row'>
<FaAndroid className='text-[35px]'/>
<FaApple className='text-[35px]'/>

</div>       </div>

</div>       

<div>
<img src={posPicture} className='md:w-[80%]'/>
            </div>

        </div>

        <div className='bg-[#f8f9fb] pt-20 flex flex-col gap-6'>
            <h1 className='text-center text-[25px] font-bold'>
                Pick the one that suits your needs
            </h1>

<div className='md:flex  flex flex-col gap-4 md:flex-row md:justify-evenly p-6'>

<div id='cardOne' className='border-2 bg-white border-white shadow-sm p-2 rounded-lg md:w-[30%] w-[70%] mx-auto'>

<img src={posDevice} />
<h1 className='font-bold text-center text-[20px]'>
Miura Card Reader
</h1>

<h3 className='text-center'>
Pairs over Bluetooth with your Android or iOS smartphone to suit all kinds of scenarios.
</h3>

<h5 className='text-center text-[#878b90] text-[12px]'>
Perfect for businesses on the go.
</h5>
</div>

<div id='cardOne' className='border-2 bg-white border-white shadow-sm p-2 rounded-lg md:w-[30%] w-[70%] mx-auto'>

<img src={posDevice2}/>
<h1 className='font-bold text-center text-[20px]'>
Miura Card Reader
</h1>

<h3 className='text-center'>
Pairs over Bluetooth with your Android or iOS smartphone to suit all kinds of scenarios.
</h3>

<h5 className='text-center text-[#878b90] text-[12px]'>
Perfect for businesses on the go.
</h5>
</div>



</div>
        </div>

<div>

<div className='md:flex md:flex-row flex flex-col gap-2 flex-col-reverse pt-20 p-4'>
    <div>
    <h1 className='font-bold md:text-[20px]'> 
    Get paid instantly; no settlement wait
    </h1>

    <h3 className='md:w-[60%] '>
    Hubtel is the only payments provider that doesn’t hold your money after a payment is completed.

Your mobile money or bank account is credited the minute a payment to you is completed.
    </h3>
    </div>


<div className=''>
    <img src={posReceipt}/>
</div>
</div>
    </div>

<div className='flex flex-col gap-6'>
    <h1 className='font-bold text-[30px] text-center'>Accept all other payments</h1>

<div className='mx-auto w-[70%]'>
<img src={majorPayments} className=' '/>

</div>
</div>

         </div>
     );
}
 
export default Charge;