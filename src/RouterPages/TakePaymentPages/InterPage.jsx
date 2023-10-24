import devPortal from '../../assets/dev-portal.webp'
import moveMoney from '../../assets/move-monoey.png'
import moveMoney1 from '../../assets/move-monoey (1).png'
import majorPayment from '../../assets/major-payments-v.webp'
import checkIcon from '../../assets/feather-check-circle.png'
import insightPic from '../../assets/insights.png'
import payLoard from '../../assets/payload.png'
const pageContent=[
    { 
        id:1,
        title:"Connect to the most reliable payment gateway in Ghana",
        content:"Offer your buyers the most popular payment methods — GHQR, MTN Mobile Money, Vodafone Cash, AirtelTigo, Visa, Mastercard — in a single integration."
    }
    ,{
        id:2,
        title:"Minimise payment friction with direct gateway integration",
        content:"Take payments directly on your website by integrating Hubtel’s Direct Merchant APIs to your sales process.(Available on request. Subject to additional connectivity requirements and service terms)."
    },{
        id:3,
        title:"Generate new sales by attracting younger customers",
        content:"Tap into the millennial and gen-Z market. 83% of users on Hubtel are below the age of 40, with a high return rate and stronger loyalty for brands that process services and payments online."
    }
]
const InterPage = () => {
    return ( 
        <div className='pt-20 '>

          <div className='p-10'>  
            <div className='text-center flex flex-col gap-4 items-center'>
                <h1 className='text-[25px] font-bold '>
                Integrate Hubtel’s checkout to get paid hourly to instantly.
                </h1>

                <h3 className='text-[20px] font-semibold'>
                Don’t wait 2 to 3 days to receive payments from your online checkout
                </h3>

                <button className='text-[#01c7b1] bg-[#01c7b1] border-[#01c7b1] border-2 text-white p-2 rounded-md w-[10%]'>GET STARTED </button>
            </div>

            <div>
                <img src={devPortal} className='w-[60%] mx-auto'/>
            </div>
            </div>

            <div className='grid grid-cols-2 place-item-center p-4 items-center '>

                <div>
                <h1 className='font-bold text-[25px] w-[75%]'>
                Move your money to any bank account or mobile
                
                 money wallet
                </h1>

                <h3 className='w-[60%] text-[20px]'>
                Hubtel is the only online payment gateway with direct access to Ghana’s interbank payment switch.

Meaning your money is safe, and can be transferred instantly to any bank account or mobile money wallet.
                </h3>
                </div>
<div>
<img src={moveMoney} alt='a box'/>


    
</div>
            </div>

            <div className='bg-[#eff8fc] p-4'>
<div className='flex flex-col  gap-2'>
    <h1 className='text-[20px] font-semibold '>
    Let buyers pay how they want
    </h1>

    <h3 className='text-[18px] font-semibold w-[70%]'>
    Offer your buyers the most popular payment methods — GHQR, MTN Mobile Money, Vodafone Cash, AirtelTigo, Visa, Mastercard — in a single integration.

    </h3>
</div>

<div className='flex flex-row'>

    <div className='flex flex-col gap-4 '>
{pageContent.map((content)=>(
    <div key={content.id} >

        <div className='flex flex-row gap-2'>

           <img src={checkIcon}/> 
      <h1 className='text-[20px] font-semibold'>
      {content.title}
        </h1> 
</div>
        <h3 className='w-[85%]'>
        {content.content}
        
        </h3>
        </div>
))}
</div>

<img src={majorPayment} width='13%'/>
     </div>       </div>
 
 <div className='flex flex-row items-center justify-center'>

<img src={insightPic} width='40%'/>
    <div>
        <h1 className='text-[20px] font-semibold'>
        Dive deeper into your payment and customer insights
        </h1>

        <h3 className='text-[18px] font-normal'>Understand what’s happening with your sales by combining performance data on:</h3>

        <ul className='list-disc px-6'>
            <li>
            Payments
            </li>
<li>Active customers</li>
<li>New customers</li>
<li>Dormant customers</li>
<li>Busiest day/times</li>
<li>Preferred payment methods
            </li>
        </ul>
    </div>
 </div>

 <div className='pb-20 bg-[#eff8fc] pt-6 flex flex-col items-center gap-4'>
    <img src={payLoard} alt='a payload' className='mx-auto rounded-md  w-[60%] h-[100%]'/>
 <button className='border-2 p-2 rounded-md w-[30%]'>
    START INTEGRATING
 </button>
 
 </div>
 
        </div>
     );
}
 
export default InterPage;