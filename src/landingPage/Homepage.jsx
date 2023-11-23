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
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import qrIcon from '../assets/qr-icon.png'
import hubtelPhone from '../assets/MicrosoftTeams-image.png'
import Footer from './Footer'
import basketTwo from '../assets/Basket-compressed.png'
import { Link, useNavigate } from 'react-router-dom'

// import Navbar from './Navbar'



function Body(){
    const[imag,setImag]=useState(null)
    const navigate =useNavigate()
    function changeImage(imgName){
setImag(imgName)

    }

    useEffect(()=>{
changeImage(side1)
    },[])
    return(
      <div>
      <div className='pt-[28%] md:pt-0 flex flex-col gap-2 items-center md:flex md:flex-col md:absolute md:gap-2 md:items-center   md:top-[15%] md:left-1/2 md:transform md:-translate-x-1/2'>
            <h1 className='md:text-[32px] text-[20px] font-bold text-center'>
                Find and pay
                <br/>
                  for everyday essentials
            </h1> 

<h3 className='text-semibold text-[12px] '>
    from local retailers,food vendors and service providers
</h3>

<div>
    <div className='flex flex-row   md:h-[53.58px] p-2  md:w-[439px] w-[120%]  border-[1px] border-white bg-[#f2f2f2] rounded-md'>

    <img src={locationArrow} alt='a location arrow' width='17px'/>
    <input type='text'
    className='border-2 border-[#f2f2f2] bg-[#f2f2f2] p-4 w-[100%] text-[12px] 
    outline-none
    '
    placeholder='Set your location to continue'/>
    </div>

<div className='text-center hidden md:block'>
    or <Link to='/login' className='text-[16px] text-[#01C7B1]'>Login</Link>
    </div>

    
</div>
</div>


<div className='md:hidden fixed z-10 w-[100%] bg-white  left-0 border-2 border-white bottom-0 p-2'>
       <button onClick={()=>navigate('/login')} className='bg-[#01c7b1] w-[100%] p-2 border-[#01c7b1] text-white font-semibold rounded-md'> LOGIN</button>
    </div>
<div id='backgroundImage' className='hidden md:block'>
<img src={backgroundImage}/>
</div>

<div className='hidden md:block md:absolute md:left-1/2 md:transform -translate-x-1/2 md:top-[55%] z-8'>
    <img src={basket} className='w-[90%]'/>

</div>

<div className='md:hidden'>
    <img src={basketTwo} className=''/>

</div>



<div className='hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[65%] md:animate-bounce'>
    <img src={sure} className='w-[35%]'/>
</div>

<div className='hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 '>
    <img src={ribbon} className='w-[29%]'/>
</div>


<div className='md:pt-[250px] md:py-20 '>
<div className='md:flex md:flex-row flex flex-col items-center justify-center md:justify-between md:items-center  bg-[#dbf7e0]'>
<div className='w-[100%] h-[450px] '>
    {imag && <img src={imag} height='550px' width='' />}
</div>

<div className='flex flex-col gap-8 p-2'>
    <motion.div 
    initial={{scale:1}}
    whileHover={{scale:1.01}}
    
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
  whileHover={{scale:1.01}}
onMouseEnter={()=>changeImage(side2)} >

 <Card
    
        title="Quick delivery in minutes"
        content="Most orders deliver within 45 minutes.Track delivery every step of the way"
 img={truckdelivery}
    />
</motion.div>
    <motion.div 
      initial={{scale:1}}
      whileHover={{scale:1.01}}
    
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

  
<div className='flex flex-col md:flex md:flex-row md:items-center  justify-center  gap-10  pt-10 py-10'>
    <div className=''>
    <h1 className='md:text-[24px] text-[20px] font-bold w-[100%] text-left p-2'>
        Experience the Hubtel app 
        
        like never before
<br/>
        <a href='' className='text-[#01c7b1] font-semibold'>Read more</a>
    </h1>
    <img src={qrIcon} alt='a qr icon' className='hidden md:block'/>
   
    </div>
    <div className='p-2'>
    <img src={hubtelPhone} alt='a hubtel'  height='190%' className=' md:w-auto' />
    </div>
    </div>
</div>

        </div>
    )
}

const Homepage = () => {
    return (  
        <div>
   
{/* <Navbar></Navbar> */}

{/* <Navbar/> */}
<Body/>
  
        </div>
    );
}
 
export default Homepage;