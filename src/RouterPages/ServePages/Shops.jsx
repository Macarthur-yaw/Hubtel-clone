import shopsHero from '../../assets/shops-hero.png'
import increaseSales from '../../assets/increase-sales.webp'
import connectCustomers from '../../assets/connect-customers.png'
import ordersAround from '../../assets/orders-around-you.webp'
import promotype from '../../assets/promo-type.png'
import roundOne from '../../assets/round1.png'
import roundTwo from '../../assets/round2.png'
import roundThree from '../../assets/round3.png'
import liveActivity from '../../assets/live-activity.webp'
const Shops = () => {
    return ( 
        <div className='py-20'>
            <div>
<img src={shopsHero} alt='shops-hero' className='md:h-[400px] w-full  '/>

<div className=' absolute top-20 left-1/2  transform -translate-x-1/2 w-full md:h-[400px] min-h-[14%] bg-black  bg-opacity-50 text-center  '>
<div className=' absolute hidden top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2'>
<h1 className='font-semibold text-[13px] text-white md:text-[25px]'>Open your shop to the entire city.</h1>

<h3 className=' text-[12px] font-semibold text-white md:text-[20px] text-opacity-90'>
 Sell your items to shoppers from anywhere in your city.
</h3>
<br/>
<button className='border-2 bg-[#01c7b1] border-[#01c7b1]  text-white font-bold text-[13px] p-2 rounded-md'>START NOW</button>

</div>
</div>
            </div>

            <div className='flex md:flex-row flex-col flex-col-reverse items-center justify-between p-4'>
                <span className='flex flex-col gap-2'>
                    <h1 className='md:text-[30px] font-semibold'>
                    Increase your sales by up to 38%
                    </h1>
                    <h3 className='md:text-[20px]'>
                    Bid to supply your goods to paid-up customers from your community.
                    </h3>

                    <button className='border-2 bg-[#01c7b1] w-[40%] md:w-[20%] border-[#01c7b1]  text-white font-bold text-[13px] p-2 rounded-md'>
                        ADD MY SHOP
                    </button>
                </span>
<img src={increaseSales}/>
            </div>

            <div className='py-10 bg-[#F0FFFA] flex md:flex-row flex-col items-center justify-center gap-10'>
        
            <img src={connectCustomers} className='p-4'/>
        
        <span className='p-2'>
                <h1 className='md:text-[25px] text-[22px] font-semibold '>
                Connect Customers in a way.
                </h1>

                <h2 className='md:text-[20px] text-[18px]'>
Gain insights on customer needs and purchase patterns.
                </h2>
                </span>
            </div>

            <div className='flex md:flex-row flex-col flex-col-reverse justify-between py-20 px-4'>
                <span className='flex flex-col gap-4'>
                    <h1 className='text-[25px] font-semibold'>
                    Find new customers. Grow your sales
                    </h1>
<span className='flex flex-col gap-2'>
                    <h3 className='text-[20px]  font-semibold'>
                    11.8m+
      
                    </h3>
                    <h4 className='text-[18px] text-black text-opacity-60 font-semibold'>
                    transacting users
                    </h4>
                    </span>

                    <span className='flex flex-col gap-2'>
                    <h3 className='text-[20px] font-semibold  '>
                    280,000+
                    </h3>
                    <h4 className='text-[18px] font-semibold text-black text-opacity-60'>
                    deliveries completed
                    </h4>
                    </span>

                    <span className='flex flex-col gap-2'>
                    <h3 className='text-[20px] font-semibold'>
                    48 minutes
                    </h3>
                    <h4 className='text-[18px] font-semibold text-black text-opacity-60'>
                 average delivery time
                    </h4>
                    </span>


                </span>
<div className='p-2'>
                <img src={ordersAround} className='md:w-[35%]'/>
                </div>
            </div>

            <div className=' flex md:flex-row flex-col items-center gap-20 bg-[#F0FFFA] py-14 justify-center'>
<img src={promotype}/>

<span className='flex flex-col gap-2'>
    <h1 className='md:text-[24px] font-semibold '>
Promote your stock by offering deals 
<br/>
to customers nearby
    </h1>

    <h3 className='md:text-[18px]'>
        Set up promotional campaigns on your items
        <br/>
         to attract new sales and move stock faster.
    </h3>
</span>
            </div>

            <div>
                <h1 className='font-semibold text-[28px] text-center py-20'>
                    Join the fastest growing quick-commerce platform
                </h1>
<div className='flex md:flex-row flex-col justify-center gap-4 '>
<ShopCard title='Come onboard' content='Tell us about your stock' imageUrl={roundOne}/>
<ShopCard title='Set up your shop on Hubtel' content='Discuss and agree fulfilment processes with your assigned Community Manager.' imageUrl={roundTwo}/>
<ShopCard title='Start accepting orders' content='Sell,promote,track and manage your orders from the Hubtel Shop Protal on your smartphone,tablet or computer' imageUrl={roundThree}/>
</div>
            </div>
            <div className='flex md:flex-row flex-col justify-center gap-4 py-20'>

                <div className='border-2 border-gray-100 bg-gray-100 md:w-[40%] w-[85%] md:max-h-[780px] mx-auto shadow-2xl rounded-md py-28'>
                <img src={liveActivity}/>
  
                </div>

                <div className='border-2 border-white  bg-white shadow-2xl rounded-sm p-4 md:max-h-[780px] mx-auto md:w-[35%] w-[85%]'>
<h1 className='font-semibold text-[23px] p-4 text-center'>
    Let's get you set up and ready for orders
</h1>
<form className='flex flex-col gap-[1px] mx-auto '>
    <span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Owner'>Owner's Name:</label>

<input className='border-[1px]  outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='Owner' placeholder='Eg.Rethink Restaurant'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'><label className='text-gray-600 text-[16px] font-semibold' htmlFor='Mobile'>Mobile Number:</label>
<input className='border-[1px] outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='Mobile' placeholder='Eg. Type of service'/>
</span>

<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Location'>Location</label>

<input className='border-[1px] outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' type='text' name='Location' placeholder='Eg. Kokomlemle'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Branches'>Other Branches</label>

<input type='text' className='border-2 outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' name='Branches' placeholder='Eg. Service Description'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='stock'>What kinds of items do you stock</label>

<input type='text' className='border-2 outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' name='stock' placeholder='Eg. Electronics,Groceries'/>
</span>
<br/>
<span className='flex flex-col gap-[4px]'>
<label className='text-[16px] font-semibold text-gray-600' htmlFor='Commission'>How much commision are you willing to offer us</label>

<input type='text' className='border-2 outline-none border-gray-300 w-[100%] p-[10px] rounded-sm' name='Commission' placeholder='Eg. 2% 5%'/>
</span>

<br/>
<button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold w-[100%] text-[13px]  rounded-md'>ADD MY SHOP</button>
</form>
</div>

          </div>
        </div>
     );
}

function ShopCard(props){
    return (
        <div className='flex flex-col p-2 gap-2 md:w-[30%]  items-center'>
            <img src={props.imageUrl} className='w-[70px]'/>
            <h1 className='text-[20px] font-semibold'>
                {props.title}
            </h1>
            <h2 className='text-[18px] text-center'>
                {props.content}
            </h2>
        </div>
    )
}

export default Shops;