import serveCustomers from '../../assets/serve-customers.webp'
import salesIcon from '../../assets//sales.png'
import customersIcon from  '../../assets/customers.png'
import truckIcon from '../../assets/Order.png'
import { useState } from 'react'
import orderDetails from '../../assets/Order-details.webp'
import livePic from '../../assets/live-activity (1).webp'
import roundOne from '../../assets/round1.png'
import roundTwo from '../../assets/round2.png'
import roundThree from '../../assets/round3.png'
import liveActivity from '../../assets/live-activity.webp'
const Restaurant = () => {
    const[image,setImage]=useState(null)
    function pictureDisplay(imageUrl){
        setImage(imageUrl)
    }
    return (
        <div className='py-20 '>
            <div className='flex bg-gray-100 py-10 flex-row items-center justify-center'>
                <span className='w-[40%] flex flex-col gap-2'>
                    <h1 className='text-[25px] font-semibold'>
                    Serve your meals to hungry
                    <br/>
                     customers nearby
                    </h1>

                    <h2 className='text-[20px]'>
                    Reach more customers with your food servings. Restaurants on Hubtel see a sales boost of up to 42% within the first 90 days.
                    </h2>

                    <button className='text-[13px] font-semibold border-[#01c7b1] border-2 bg-[#01c7b1] p-2 text-white rounded-md w-[40%]'>
                        ADD MY RESTAURANT
                    </button>
                </span>

                <img src={serveCustomers}   className='w-[35%]'/>
            </div>

            <div className='py-20 '>
                <h1 className='font-bold text-[25px] px-6'>Modernise and grow your restaurant.</h1>
              <div className=' p-4 flex flex-row justify-center'>
              <div className='flex flex-col p-2 gap-2'>
                <button
                onClick={()=>pictureDisplay(orderDetails)}
                className='flex flex-col gap-[4px] w-[100%] p-2 rounded-md border-[1px] focus:border-[#3159f5] focus:bg-[#f2f5ff]'>
<img src={salesIcon}/>
<h1 className='font-semibold text-[20px]'>Increase sales(orders)</h1>
<h3 className='text-left'>Grow your kitchen orders to keep it busy throughout the day.</h3>
                </button>

                <button onClick={()=>pictureDisplay(livePic)}
                 className='flex border-[1px] gap-[4px] rounded-md p-2    flex-col w-[100%] focus:border-[#3159f5] focus:bg-[#f2f5ff]'>
<img src={customersIcon}/>
<h1 className='font-semibold text-[20px]'>Reach more Customers</h1>
<h3 className='text-left'>Hubtel's marketing will help you attract new local customers and keep them coming back for more.

</h3>
                </button>

<button onClick={()=>pictureDisplay(orderDetails)}
 className='flex flex-col w-[100%] border-[1px] gap-[4px] rounded-md p-2 focus:border-[#3159f5] focus:bg-[#f2f5ff]'>
<img src={truckIcon}/>
<h1 className='font-semibold text-[20px] text-left'>Use our riders to deliver at no extra cost</h1>
<h3 className='text-left'>
    Hubtel's riders are trained,motivated, and equipped to deliver your meals professionally to customers on time.

</h3>
</button></div>
<div className='border-[1px] w-[160%] border-[#3159f5] bg-[#f2f5ff]  rounded-md'>
{image && <img src={image} className=''/>}
</div>
</div>    </div>

<div className='flex flex-col gap-10 py-20 bg-[#f2fff5]'>

<div>
<h1 className='text-[25px] font-semibold text-center'>Manage your online orders with Hubtel</h1>
<h2 className='text-center text-[20px]'>Fire up your kitchen for Hubtel orders in a few easy steps</h2>
</div>

<div className='flex flex-row gap-4'>
<SectionCard imageUrl={roundOne} title='Come onboard' content='Tell us about your restaurant'/>
<SectionCard imageUrl={roundTwo} title='Set up your restaurant on Hubtel' content='Upload a menu, schedule your photoshoot and if you need one we’ll ship your tablet.'/>
<SectionCard imageUrl={roundThree} title='Start serving meals' content=' Sell,promote, track and manage your orders from the Hubtel Quick Commerce Portal on your smartphone,tablet or computer.'/>
</div>

</div>

<div>
<div className='flex flex-row justify-center gap-4 py-20'>

<div className='border-2 border-gray-100 bg-gray-100 w-[40%] max-h-[780px] shadow-2xl rounded-md py-28'>
<img src={liveActivity}/>

</div>

<div className='border-2 border-white  bg-white shadow-2xl rounded-sm p-4 max-h-[780px] w-[35%]'>
<h1 className='font-semibold text-[23px] p-4 text-center'>
Let's get you set up and ready for orders
</h1>
<form className='flex flex-col gap-[1px] mx-auto '>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Name'>Business Name:</label>

<input className='border-[1px]  outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='Name' placeholder='Eg.Rethink Restaurant'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'><label className='text-gray-600 text-[16px] font-semibold' htmlFor='Location'>Location</label>
<input className='border-[1px] outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='Location' placeholder='Eg. Kokomlemle'/>
</span>

<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='City'>City</label>

<input className='border-[1px] outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='City' placeholder='Eg. Accra'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Email'>Email</label>

<input type='text' className='border-2 outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' name='Email' placeholder='Eg. example@gmail.com'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Phone'>Phone</label>

<input type='text' className='border-2 outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' name='Phone' placeholder='Eg. 0545938774'/>
</span>
<br/>


<br/>
<button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold w-[100%] text-[13px]  rounded-md'>ADD MY SHOP</button>
</form>
</div>

</div>
</div>
        </div>
      );
}
function SectionCard(props){
    return(
        <div className='flex flex-col gap-2 w-[35%]  items-center'>
            <img src={props.imageUrl} className='w-[50px] '/>
            <h1 className='text-[25px] font-semibold'>{props.title}</h1>
            <h2 className='text-[18px] text-center'>{props.content}</h2>
        </div>
    )
}
 
export default Restaurant;