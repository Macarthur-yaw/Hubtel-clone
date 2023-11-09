import hospitalBg from '../../assets/hospitals-hero.png'
import patientImage from '../../assets/patient-image.png'
import nurseImage from '../../assets/nurse-image.png'
import doctorImage from '../../assets/doctor-image.png'
import schoolsApp from '../../assets/schools-app.png';
import RequestCard from '../TakePaymentPages/RequestCard';
import lineButton from '../../assets/icon.png'
import classButton from '../../assets/icon1.png'
import studentButton from '../../assets/icon2.png'
import noticeButton from '../../assets/icon3.png'
import messageButton from '../../assets/icon4.png'
import feeButton from '../../assets/icon5.png'
import moreButton from '../../assets/untitled (7).png'
import { useEffect, useState } from 'react';
import liveActivity from '../../assets/live-activity.png'
import classPic from '../../assets/classes.png'
import studentPic from '../../assets/students.png'
import messages from '../../assets/messages.png'
import schoolFees from '../../assets/school-fees.png'
import schoolsPatners from '../../assets/schools-partners.png'
import businessImage from '../../assets/business-image.png'
import { motion,AnimatePresence } from 'framer-motion';
const contentPage=[
    { id:1,
        title:"For Patients",
        content:"A modern transparent way to access and pay for all the care items delivered to you",
   imgUrl:patientImage
    }
    ,{
        id:2,
        title:"For Caregivers",
        content:"Connect with social-media ease to all patients on a single dashboard",
        imgUrl:nurseImage

    },
    {
        id:3,
        title:"For Administrators",
        content:"Step beyond your practice to manage your healthcare operation as a modern business",
        imgUrl:doctorImage
    }

]

const  content1={
    content:"Online Bill Payment Patients can pay their bills online with their mobile money, bank card or as cash at any bank branch across Ghana.",
    imgUrl:liveActivity
    
        }
        const content2={
         
            content:"Real-Time Inventory Tracking Keep track of your inventory levels and ensure that you always have the supplies you need.",
            imgUrl:classPic
    
        }
        const content3={
            
            content:"Automated Billing Generate bills automatically based on patient records and charges.",
            imgUrl:studentPic
    
        }
    
        const content4={
            
            content:"Patient Reminders Send reminders to patients about their upcoming appointments and due payments.",
            imgUrl:liveActivity
    
        }
        const content5={
            
            content:"Caregiver Portal Give caregivers access to patient information and billing records.",
            imgUrl:messages
        }
        const content6={
            content:"Administrator Dashboard Get a single view of the billing and payment data of all patients as they move through the processes within your operation.",
            imgUrl:schoolFees
    
        }
        
const professions=[
    {id:1,
    content:'retires'
    },
    {id:1,
    content:'farmers'
    },
    {
        id:3,
        content:'lawyers'
    },
    {
        id:4,
        content:'engineers'
    },
    {id:5,
    content:'teachers'
    },
    {
        id:6,
        content:'business people'
    },
    {
        id:7,
        content:'artisans'
    },
    {
        id:8,
        content:'engineers'
    },
    {id:9,
    content:'entreprenuers'
    }
    ,{
        id:10,
        content:'mothers'
    },
    {
        id:11,
        content:'fathers'
    }
    ,{
        id:12,
        content:'children'
    }
]
const HubtelRev = () => {
    const[content,setContent]=useState(null)
    function changeContent(objtContent){
setContent(objtContent)

    }
const[slideIndex,setSlideIndex]=useState(0)
useEffect(() => {
    const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3500);

    return () => clearInterval(interval);
}, [slideIndex]);


    return (
        <div className='pt-20'>
            
            <div className='bg-[#CCFFEF] p-4 flex flex-col gap-6 items-center justify-center'>
            <div className='text-center flex flex-col gap-2 items-center'>
                <h1 className='text-[30px]  font-bold'>
                    You take well of our unwell 

                    <AnimatePresence>
  {professions.map((source, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 ,y:20}}
      animate={{ opacity: 10 ,y:0}}
      exit={{ opacity: 0,y:-20 }}
      transition={{ duration: 30 }}
      className={`${index === slideIndex ? 'block' : 'hidden'}`}
    >
      <p className='text-[#F7961C] font-semibold'>{source.content}</p>
    </motion.div>
  ))}
</AnimatePresence>
                </h1>
                <h1 className='md:block hidden'>
                    You take care of our unwell<br/>

                </h1>
                <h3 className='text-[20px] font-semibold'>
                    Let Hubtel manage your billing and payments to grow business.
                </h3>
                <button className='text-[white] w-[40%]  border-2 border-[#01c7b1] bg-[#01c7b1] font-bold p-2 shadow-md rounded-md'>Contact us to Unboard</button>
            </div>
            <div>
                <img src={hospitalBg}  className='mx-auto md:w-[80%]'/>
            </div>
            </div>

            <div className='flex flex-col gap-10 pt-20'>
                <div className='text-center'>
                    <h1 className='md:text-[22px] text-[18px] font-semibold'>
                        Say Hello to a new kind of Healthcare collaboration
                    </h1>

                    <h3 className='text-[16px] font-normal'>
                    Hubtel for Hospitals is Ghana’s first and most comprehensive healthcare inventory billing and payments platform for the entire service chain.
                    </h3>


                </div>
            
            <div className='md:flex md:flex-row'>
                {contentPage.map((content)=>(
                    <div key={content.id} className='md:w-[40%]  flex flex-col items-center justify-center'>

<img src={content.imgUrl} className='w-[60%]'/>

<div className='md:w-[70%] w-[50%] text-center'>
                       <h1 className='font-bold '>{content.title}</h1> 
                      <h5 className=''>  {content.content}</h5>
</div>                        </div>
                ))}
            </div>
            </div>

            <div className='flex flex-col gap-2 pt-20'>
                <h1 className='text-center font-bold text-[20px]'>
                What Hubtel for Hospital can do for your healthcare operation?
                </h1>

                <div id='buttons' className='hidden md:block border-2 border-white bg-white rounded-lg shadow-lg mx-auto p-4 w-fit flex flex-row gap-12 w-[85%] px-16'>

<button
onClick={()=>changeContent(content1)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={lineButton}/>
    line Activity 
</button>

<button 
onClick={()=>changeContent(content2)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={classButton}/>
    Classes 
</button>

<button
onClick={()=>changeContent(content3)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={studentButton}/>
    Student
</button>

<button 
onClick={()=>changeContent(content4)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={noticeButton}/>
    Notice
</button>

<button
onClick={()=>changeContent(content5)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={messageButton}/>
    Messages
</button>

<button
onClick={()=>changeContent(content6)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={feeButton}/>
    School fees
</button>

</div>
<div className='pt-10'>
    {content && <div className='flex flex-row items-center justify-evenly'>
       
        <img src={content.imgUrl} width='35%' className=''/>
       <span className='w-[40%]'> 
       <h1 className='font-bold text-[22px]'> {content.title}</h1>
       <h3 className='font-semibold text-[20px]'>{content.content}</h3>
       </span>  </div>}
</div>
            </div>

            <div>
                <h1 className='text-[30px] font-semibold  text-center py-10'>
                    Take your business to new levels
                </h1>

<div className='md:flex md:flex-row md:gap-20 flex flex-col gap-4 items-center md:justify-center mb-20 p-2'>
                <ul className=' flex flex-col gap-4  w-[80%] md:w-auto list-none'>
                    <li className='border-2  rounded-sm p-4 md:text-[22px] font-semibold bg-gray-100 border-gray-100'>
                    Streamline your business to new levels
                    </li>
                    <li className='border-2 p-4 rounded-sm bg-gray-100 md:text-[22px] font-semibold  border-gray-100'>
                    Improve your cash flow
                    </li>

                    <li className='border-2 p-4 rounded-sm bg-gray-100 md:text-[22px] font-semibold border-gray-100'>
                    Provide a better experience for your patients
                    </li>

                    <li className='border-2 p-4 bg-gray-100 rounded-sm border-gray-100 md:text-[22px] font-semibold '>
                    Plug revenue leakages
                    </li>

                    <li className='border-2 p-4 bg-gray-100 rounded-sm border-gray-100 md:text-[22px] font-semibold'>
                    Improve patient satisfaction
                    </li>

                    <li className='border-2 p-4 bg-gray-100 rounded-sm border-gray-100 md:text-[22px] font-semibold'>
                    Grow your care business
                    </li>
                </ul>

                <img src={businessImage} className='md:max-w-[500px] w-[80%]'/>
                </div>

                <div className='py-[5px] bg-[#E9F3FF] flex md:flex-row flex-col flex-col-reverse justify-center items-center p-4 py-20 gap-4'>
                    <span className='flex flex-col md:gap-2 gap-4 items-center'>
                        <h1 className='font-semibold text-[18px] md:text-[22px]'>
                        Make it super easy for patients and sponsors to pay bills
                        </h1>
                        <h3 className=' font-normal md:text-[18px] text-[15px] text-center'>
                        Take away the hard work of queuing at specific banks and reconciling payments. Receive payments via mobile money, cash deposit at <a href='' className='underline'>any bank branch across Ghana.</a>

                        </h3>
                   <button className='bg-[#01c7b1] md:w-[20%] mb-10 text-sm border-[#01c7b1] text-[13px] font-bold p-2 text-white rounded-md'>GET STARTED NOW</button>
                    </span>

                    <img src={schoolsPatners} className='max-w-[500px]'/>
                </div>
            </div>
        </div>
      );
}
export default HubtelRev;