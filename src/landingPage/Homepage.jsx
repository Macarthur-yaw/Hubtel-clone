import locationArrow from '../assets/location-arrow2.svg'
import backgroundImage from '../assets/background.png'
import basket from '../assets/new-jumbotron-new.9984384.png'
import sure from '../assets/hero-sure.png'
import ribbon from '../assets/ribbon.png'
import Card from './Card'
import searchButton from '../assets/Search.png'
import truckdelivery from '../assets/Truck (1).png'
import payIcon from '../assets/Wallet (2).png'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side3 from '../assets/side3.png'
import { useState } from 'react'
import {motion} from 'framer-motion'
import qrIcon from '../assets/qr-icon.png'
import hubtelPhone from '../assets/MicrosoftTeams-image.png'
import Footer from './Footer'


// import Navbar from './Navbar'



function Body(){
    const[imag,setImag]=useState(null)
    function changeImage(imgName){
setImag(imgName)
    }
    return(
      <div>
      <div className='flex flex-col absolute gap-2 items-center   top-[15%] left-1/2 transform -translate-x-1/2'>
            <h1 className='text-[32px] font-bold text-center'>
                Find and pay
                <br/>
                  for everyday essentials
            </h1>

<h3 className='text-semibold'>
    from local retailers,food vendors and service providers
</h3>

<div>
    <div className='flex flex-row   h-[53.58px] p-2  md:w-[439px] bg-white'>

    <img src={locationArrow} alt='a location arrow' width='17px'/>
    <input type='text'
    className='border-none p-4 w-[100%] text-[10px]
    outline-none
    '
    placeholder='Set your location to continue'/>
    </div>

<div className='text-center'>
    or <a href='' className='text-[16px] text-[#01C7B1]'>Login</a>
    </div>
</div>
</div>


<div id='backgroundImage'>
<img src={backgroundImage}/>
</div>

<div className='absolute left-1/2 transform -translate-x-1/2 top-[55%] z-8'>
    <img src={basket} className='w-[90%]'/>

</div>

<div className='absolute left-1/2 transform -translate-x-1/2 top-[65%] animate-bounce'>
    <img src={sure} className='w-[35%]'/>
</div>

<div className='absolute left-1/2 transform -translate-x-1/2 '>
    <img src={ribbon} className='w-[29%]'/>
</div>


<div className='pt-[250px] '>
<div className='flex flex-row  justify-between items-center  bg-[#dbf7e0]'>
<div>
    {imag && <img src={imag} height='550px' />}
</div>

<div className='flex flex-col gap-4 p-2'>
    <motion.div 
    initial={{scale:1}}
    whileHover={{scale:1.03}}
    
    onMouseEnter={()=>changeImage(side1)}>
    <Card
    
    title="Find whatever you want"
    content="Find A to Z stuff services,bills and everyday essentials from nearby"
img={searchButton}


    /></motion.div>
{/* <button onMouseEnter={()=>changeImage(side1)} className='border-2'>wecome</button> */}
{/* <button onMouseEnter={()=>changeImage(side2)} className='border-2'>wecome</button> */}

<motion.div
  initial={{scale:1}}
  whileHover={{scale:1.03}}
onMouseEnter={()=>changeImage(side2)} >

 <Card
    
        title="Quick delivery in minutes"
        content="Most orders deliver within 45 minutes.Track delivery every step of the way"
 img={truckdelivery}
    />
</motion.div>
    <motion.div 
      initial={{scale:1}}
      whileHover={{scale:1.03}}
    
    onMouseEnter={()=>changeImage(side3)}
     >
       <Card 
      title="Choose,pay and receive"
      content="Find,pay with card or mobile wallet and receive your service/product in minutes"
      img={payIcon}
/></motion.div>

</div>
</div>
</div>

<div>

  
<div className='flex flex-row items-center  w-fit mx-auto gap-10 justify-between pt-10 '>
    <div>
    <h1 className='text-[24px] font-bold'>
        Experience the Hubtel app 
        <br/>
        like never before
<br/>
        <a href='' className='text-[#01c7b1] font-semibold'>Read more</a>
    </h1>
    <img src={qrIcon} alt='a qr icon'/>
   
    </div>
    <div className=''>
    <img src={hubtelPhone} alt='a hubtel'  height='190%' />
    </div>
    </div>
</div>

        </div>
    )
}

const Homepage = () => {
    return (  
        <div>
   

<Body/>
  
        </div>
    );
}
 
export default Homepage;