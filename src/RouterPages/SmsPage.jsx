import reachCustomers from '../assets/reach-customers.png'
import requestPayment from '../assets/request-payments.png'
import mediaIcon from '../assets/media.png'
import sendMoney from '../assets/send-money.png'
import personaliseSms from '../assets/personalise-sms.png'
import connectApis from '../assets/connect-apis.png'
import friendsOne from '../assets/friends (1).png'
import friendsTwo from '../assets/schools (1).png'
import friendsThree from '../assets/churches (1).png'
import friendsFour from '../assets/estates (1).png'
import friendsFive from '../assets/businesses (1).png'
import friendsSix from '../assets/associations (1).png'
import { useState } from 'react'
import iconOne from '../assets/icon_online_messaging.png'
import iconTwo from '../assets/icon_direct_connectivity.png'
import iconThree from '../assets/icon_unmatched_support.png'
import iconFour from '../assets/icon_superior_pricing.png'
import airtelTigo from '../assets/AirtelTigo.png'
import fortyTwo from '../assets/fortytwo.png'
import hubtelpic from '../assets/hub.png'
import mtnPic from '../assets/mtn.png'
import vodafonePic from '../assets/voda.png'

const SmsPage = () => {
    const [content, setContent] = useState(null);  
    function changeContent(contentPage){
setContent(contentPage)
    }
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
    &nbsp;
   <a href='' className='underline text-[#01c7b1]'> Hubtel Developer Portal.</a>
    </h2>

    {/* <a href='' className='text-[#01c7b1] inline-flex gap-2 text-sm items-center'><img src={mediaIcon}/> See how SMS and money works </a> */}
</span>
</div>
<div className=' text-center'>
<button className='font-semibold bg-[#01c7b1] text-white p-2 rounded-md '>START YOUR BULK SMS NOW</button>
</div>

      <div>
        
        
        
        </div>         

<div className='flex flex-col gap-2 mt-10 py-10 p-2 '>

    <h1 className='font-semibold'>
        Your Ultimate Solution for Collecting Payment
    </h1>

<span className='flex flex-col w-[30%]  gap-2'>
    <button className='focus:border-l-[2px] text-left px-2  border-l-[#01c7b1] p-[1px] ' onClick={()=>changeContent(friendsOne)}>Friends</button>

    <button className='focus:border-l-[2px] text-left px-2 border-l-[#01c7b1] p-[1px] ' onClick={()=>changeContent(friendsTwo)} >Schools</button>

    <button className='focus:border-l-[2px] text-left px-2 border-l-[#01c7b1] p-[1px] ' onClick={()=>changeContent(friendsThree)} >Churches</button>
  
    <button className='focus:border-l-[2px] text-left px-2 p-[1px] border-l-[#01c7b1] ' onClick={()=>changeContent(friendsFour)}>Estates</button>

    <button className='focus:border-l-[2px] text-left px-2 p-[1px] border-l-[#01c7b1]' onClick={()=>changeContent(friendsFive)}>Businesses</button>

    <button className='focus:border-l-[2px] text-left px-2 p-[1px] border-l-[#01c7b1]' onClick={()=>changeContent(friendsSix)}>Association</button>
</span>

{content && (
    <div className='py-10 '>
        <img src={content} alt='a' className='w-[80%] h-[80%] mx-auto'/>
        </div>
)}
    </div>

<div className='p-2 flex-col gap-4 flex'>
<h1 className='font-semibold text-[20px] text-center'>
    Why you should choose Hubtel
</h1>

<CardPage imgurl={iconOne} title='Online messaging since 2005' content="Ghana's first online SMS messaging gateway built and deployed for commercial use"/>
<CardPage imgurl={iconTwo} title='Delivery connectivity to all networks' content="Connect directly with all networks. No roaming links or grey-routes. Unmatched support experience."/>
<CardPage imgurl={iconThree} title='Instant payments for all transactions' content="As soon as your customers pay,we credit your account instantly."/>
<CardPage imgurl={iconFour} title='Superior pricing no hidden charges' content="Get the best pricing mix of bundles and pay-as-you-go plans for campaigns of all sizes."/>

</div>


<div className='py-20 bg-[#f8f9fb] mt-10'>
    <span className='text-center'>
        <h1>SMS Pricing</h1>
        <h2>Scalable. Flexible. Offers more</h2>
    </span>

    <div className='p-4 '>
    <div className="">
                            <div className="container py-4">
                                <div id="scroll" className=" overflow-x-scroll">
                                    <table id="main-content" className="md-[1rem] text-[#212529] border-[1px] border-[#dee2e6]">
                                        <thead>
                                            <tr>
                                                <th  className="">Available Gateways</th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={airtelTigo} width="35" className='mx-auto' />
                                                    </div>
                                                    <div >AirtelTigo (Ghana only)</div>
                                                </th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={hubtelpic} width="35" className='mx-auto' />
                                                    </div>
                                                    <div >Hubtel SMS (Ghana)</div>
                                                </th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={fortyTwo} width="35" className='mx-auto'/>
                                                    </div>
                                                    <div >42 Telecom (International)</div>
                                                </th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={hubtelpic} width="35" className='mx-auto'/>
                                                    </div>
                                                    <div >Hubtel SMS (Ghana &amp; International)</div>
                                                </th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={mtnPic} width="35" className='mx-auto'/>
                                                    </div>
                                                    <div >MTN (Ghana only)</div>
                                                </th>
                                                <th  className="text-center px-5">
                                                    <div>
                                                        <img src={vodafonePic} width="35" className='mx-auto'/>
                                                    </div>
                                                    <div >Vodafone (Ghana only)</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-center text-[15px] '>
                                            <tr className='bg-gray-200 '>
                                                <td className="border-right p-2">Pricing (GHS)</td>
                                                <td className="text-center p-2">0.0151</td>
                                                <td className="text-center p-2">0.0309</td>
                                                <td className="text-center p-2">0.2505</td>
                                                <td className="text-center p-2">0.2505</td>
                                                <td className="text-center p-2">0.0201</td>
                                                <td className="text-center p-2">0.0303</td>
                                            </tr>
                                            <tr className=''>
                                                <td className="p-2">
                                                    Delivery Quality Index
                                                </td>
                                                <td className='p-2'>56 %</td>
                                                <td className='p-2'>340 %</td>
                                                <td className='p-2'>0 %</td>
                                                <td className='p-2'>0 %</td>
                                                <td className='p-2'>50 %</td>
                                                <td className='p-2'>0 %</td>
                                            </tr>
                                            <tr className='bg-gray-200'>
                                                <td className="p-2 ">
                                                    Maximum Throughput Speed
                                                </td>
                                                <td>150 sms/sec</td>
                                                <td>5000 sms/sec</td>
                                                <td>200 sms/sec</td>
                                                <td>200 sms/sec</td>
                                                <td>100 sms/sec</td>
                                                <td>200 sms/sec</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">
                                                    Businesses Currently In Queue
                                                </td>
                                                <td>2</td>
                                                <td>11</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                            <tr className='bg-gray-200'>
                                                <td className="p-2">
                                                    Real Throughput speed
                                                </td>
                                                <td>150 sms/sec</td>
                                                <td>5000 sms/sec</td>
                                                <td>200 sms/sec</td>
                                                <td>200 sms/sec</td>
                                                <td>100 sms/sec</td>
                                                <td>200 sms/sec</td>
                                            </tr>
                                            <tr >
                                                <td className="p-2">
                                                    Total Messages Sent
                                                </td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr className='bg-gray-200'>
                                                <td className="p-2">
                                                    Total Messages Delivered
                                                </td>
                                                <td>92</td>
                                                <td>54,227</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>3,781</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">
                                                    Total Messages Undelivered
                                                </td>
                                                <td>4</td>
                                                <td>15,345</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>456</td>
                                                <td>0</td>
                                            </tr>
                                            <tr className='bg-gray-200'>
                                                <td className="p-2">
                                                    Total Messages Rejected
                                                </td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

    </div>
</div>

        </div>
     );
}
function CardPage({title,content,imgurl}){
return (
    <div className='w-[95%] flex flex-col gap-2 mx-auto border-2 p-2 shadow-lg bg-white border-white'>
        <img src={imgurl} className='w-[50px] h-[50px]'/>

        <h1 className='font-semibold'>{title}</h1>
        <h2>{content}</h2>
    </div>
)
} 

export default SmsPage;