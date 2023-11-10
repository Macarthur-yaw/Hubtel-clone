import riderPic from '../../assets/riders.webp'
import {FaWhatsapp} from 'react-icons/fa'
import num1 from '../../assets/Group_39451.png'
import num2 from '../../assets/Group_39451 (1).png'
import num3 from '../../assets/Group_39451 (2).png'
import num4 from '../../assets/Group_39451 (3).png'
import deliveryGuy from '../../assets/delivery-guy.png'
import checkMark from '../../assets/feather-check-circle (1).png'
import phoneOrder from '../../assets/mockuuups-iphone-3.webp'
import bgMobileDelivery from '../../assets/bg-mobile-deliver-app.svg'
import mockupOne from '../../assets/mockuuups-iphone-1.webp'
import mockupTwo from '../../assets/mockuuups-iphone-2.webp'
import roundOne from '../../assets/round1.png'
import roundThree from '../../assets/round3.png'
import roundTwo from '../../assets/round2.png'
import withYou from '../../assets/with-you.webp'

const Riders = () => {

    return (  
        <div className='py-20'>
            <div className='flex md:flex-row flex-col items-center bg-gray-100 py-10 justify-center gap-10'>
                <span className='flex flex-col gap-2 p-2 items-center'>
                    <h1 className='md:text-[25px] text-[20px]  font-semibold'>
                    Earn money delivering smiles to
                    <br/>
                     customers within your community
                    </h1>

                    <h2 className='text-[18px] text-center '>
                    Riders on Hubtel are professionally equipped, adequately 
                    <br/>
                    trained and paid weekly.
                    </h2>

                    <button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold md:w-[30%] w-[40%] text-[13px]  rounded-md inline-flex gap-2 items-center justify-center'><FaWhatsapp/> JOIN US</button>
                </span>
                <img src={riderPic} className='md:w-[35%] w-[80%]'/>

                
            </div>

            <div className='py-20'>
                <h1 className='text-center font-bold md:text-[25px]'>
                    How we work
                </h1>
<br/>
                <div className='flex md:flex-row flex-col  items-center gap-6  justify-center'>
                    <div className='md:grid md:grid-rows-2 md:grid-flow-col flex flex-col gap-4'>
<RiderCard Imageurl={num1} title='Chat with us from your own smartphone to see if you qualify'/>
<RiderCard Imageurl={num2} title='Get trained and equipped at no extra cost'/>
<RiderCard Imageurl={num3} title='Choose a suitable station, work plan & schedule'/>
<RiderCard Imageurl={num4} title='Start delivering and start earning.'/>
</div>
              
              <img src={deliveryGuy} className='rounded-md md:w-[30%] w-[85%]'/>

                </div>
            </div>

            <div className='py-20 flex md:flex-row flex-col items-center justify-between'>
<h1 className='font-semibold md:text-[28px] p-2 '>
Make money on your own schedule with a 
<br/>
scooter, motorbike or bicycle.
</h1>

<div className='p-2 flex flex-col'>
    <div className='flex md:flex-row flex-col gap-2'>
    <SectionCard  title='Work when you want to'/>
    <SectionCard  title='Get paid weekly'/>
    </div>
    <br/>
    <SectionCard  title='Hit your  weekly delivery target to earn bonuses'/>
</div>
            </div>

            <div className=' py-10  border-2 bg-gray-100 border-gray-100 '>
           <div className='flex flex-col gap-10 py-24 px-8'>
                <span className='text-center'>
                    <h1 className='font-semibold md:text-[28px]'>
                        How the delivery app works.
                    </h1>
                    <h3 className='md:text-[22px]'>
                    We call it Hubtel Careforce
                    </h3>
                </span>
                <div className='flex md:flex-row flex-col md:w-[100%] justify-center'>
                <img src={mockupOne} className='md:w-[500px] md:h-[700px]'/>
<img src={mockupTwo} className='md:w-[500px] md:h-[700px]'/>
<img src={phoneOrder} className='md:w-[500px] md:h-[700px]'/>
</div>
</div>

<div className='flex md:flex-row flex-col p-2 justify-center gap-2'>
    <div className='md:w-[40%]  p-2'>
        <img src={roundOne}/>
        <h1 className='font-semibold text-[23px]'>Accept and go</h1>
        <h2>
        Once you start work, we will send you orders from near you to accept.

        </h2>
    </div>

    <div className='md:w-[40%]  p-2'>
        <img src={roundTwo}/>
        <h1 className='font-semibold text-[23px]'>Inspect and collect orders</h1>

        <h2>Ride to retailers and restaurants to inspect,
            
             pay and pick up orders for delivery to customers. </h2>

    </div>

    <div className='md:w-[40%]  p-2'>
        <img src={roundThree}/>
        <h1 className='font-semibold text-[23px]'>Make a customer smile by delivering on time!</h1>

        <h2>
        Follow Google Maps directions to a customer’s door, meet the customer, take your delivery confirmation code and earn your commission.
        </h2>
    </div>


</div>
            </div>

            <div className='py-20'>
                <h1 className='text-center font-bold text-[25px]'>What you need to start delivering</h1>
           
           <div className='flex md:flex-row flex-col gap-2 p-6 '>
           <div className='flex flex-col gap-2'>
            <DeliverCard  title='Motorbike, Scooter, or Bicycle'/>
            <DeliverCard  title='A valid driver’s licence and insurance (Bicycle excluded)'/>
            <DeliverCard  title='Government issued ID with no criminal background'/>
            <DeliverCard  title='Safety equipment (e.g. helmet, shoulder, elbow, knee guard, and boots)'/>
           </div>

           <div className='flex flex-col gap-2 '>
            <DeliverCard title='Age 18+'/>
            <DeliverCard title='Smartphone (with Android 6+ or iOS 13.6)'/>
            <DeliverCard title='Proof of your right to work if not a citizen of the operating country'/>
           </div>

           </div>
            </div>

            <div className='flex md:flex-row flex-col items-center bg-gray-100 py-20'>

<span className='flex flex-col gap-2 p-2 '>
    <h1 className='md:text-[25px] font-semibold'>
    We’re with you all the way
    </h1>

    <h2 className='md:text-[20px]'>
    When you’re on the road, we’re with you – for help, advice and support, message or call us in the app.

Your safety is our priority. In case of accidents or unforeseen incidents, we dispatch help to you to assist.

It’s totally free and applies from the moment you go online.
    </h2>

    <button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold items-center text-[13px]  rounded-md inline-flex  gap-2 md:w-[70%]'><FaWhatsapp/> JOIN THE FASTEST GROWING DELIVERY NETWORK</button>
</span>
<div>
<img src={withYou} />
</div>       </div>
        </div>
    );
}

const DeliverCard=(props)=>{
    return (
        <div className='border-[1px] p-2 inline-flex gap-2 items-center w-[80%] rounded-md'>
            <img src={checkMark} className='w-[40px] h-[40px]'/>
            <h1 className='md:text-[22px]'>
                {props.title}
            </h1>
        </div>
    )
}

function RiderCard(props){
    return (
        <div className='border-[1px] rounded-md md:w-[300px] p-2 flex flex-col gap-2'>
            <img src={props.Imageurl} className='w-[40px]'/>
            <h1 className='md:text-[20px]'>
                {props.title}
            </h1>
        </div>
    )
}
function SectionCard(props){
    return (
        <div className='flex flex-row items-center gap-2 border-[1px] p-2 rounded-md'>
            <img src={checkMark} className='w-[30px] h-[30px]'/>
            <h1 className='text-[20px]'>
                {props.title}
            </h1>
        </div>
    )	
}

 
export default Riders;