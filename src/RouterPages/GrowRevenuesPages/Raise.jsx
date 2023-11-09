import schoolsApp from '../../assets/schools-app.png';
import RequestCard from '../TakePaymentPages/RequestCard';
import lineButton from '../../assets/untitled.png'
import classButton from '../../assets/untitled (2).png'
import studentButton from '../../assets/untitled (3).png'
import noticeButton from '../../assets/untitled (4).png'
import messageButton from '../../assets/untitled (5).png'
import feeButton from '../../assets/untitled (6).png'
import moreButton from '../../assets/untitled (7).png'
import { useState } from 'react';
import liveActivity from '../../assets/live-activity.png'
import classPic from '../../assets/classes.png'
import studentPic from '../../assets/students.png'
import messages from '../../assets/messages.png'
import schoolFees from '../../assets/school-fees.png'
import schoolsPatners from '../../assets/schools-partners.png'
import Slider from 'react-slick';
import MenuCarousel from './MenuCarousel';


const  content1={
title:"Live Activity",
content:"Stay up-to-the-minute with real-time news feed on important activities of teachers and parents.",
imgUrl:liveActivity

    }
    const content2={
        title:"Classes",
        content:"A new way to manage everyday parent-teacher collaboration, from school fees, pickups to summary reports with photos. Connect teachers with parents to manage all non-academic activities with social media ease.",
        imgUrl:classPic

    }
    const content3={
        title:"Students",
        content:"Enable parents to manage important choices for their children. Keep track of your student’s records and choices made by their parents. From everything about permissions, family member, allergies, hobbies, and other important milestones.",
        imgUrl:studentPic

    }

    const content4={
        title:"Notices",
        content:"Never miss a beat within the school’s community. Keep parents and family members updated with the latest school news, announcements, and updates. Watch them interact with your posts by liking and commenting on notices.",
        imgUrl:liveActivity

    }
    const content5={
        title:"Messages",
        content:"Stay connected with each parent. Makes it easy to connect with parents individually, no matter where they are. Send quick messages about a student’s day, ask questions, and manage feedback.",
        imgUrl:messages
    }
    const content6={
        title:"School Fees",
        content:"Collect school fees and accept other bills via mobile money, card, and deposits at any bank branch. Set up and track payments made by parents in real-time with automated alerts and instant receipts.",
        imgUrl:schoolFees

    }
    const content7={
        title:"...and Even More Accesses",
        content:"Manage more accesses and features with zero monthly costs or additional cost commitments. Simply pay a fixed transaction rate when a parent successfully pays a bill.",
        imgUrl:liveActivity
    }

const Raise = () => {
    
    const[content,setContent]=useState(null)
    function changeContent(objtContent){
setContent(objtContent)

    }

    return (
    <div>
      <div className='pt-[100px] flex flex-col items-center md:flex md:flex-row bg-[#FFEA99] md:items-center  md:justify-around '>
        <div className='flex flex-col items-center'>
          <h1 className="font-semibold md:text-[40px] text-[20px] ">
            Inspiring parents to help
            <br/>
             schools run smoothly
          </h1>

          <h3 className="text-[16px] text-center">
            RaiseUp makes it simple for busy parents to get
            <br></br>
             more control and visibility over non-academic activities.
          </h3>

          <button className="border-2 border-[#01c7b1] p-2 text-white bg-[#01c7b1] hover:bg-[#266] hover:border-[#266] text-[13px] font-bold rounded-md">
            INSTALL RAISEUP
          </button>
        </div>
        <div className=' md:w-[53%] '>
          <img src={schoolsApp} className='md:w-[100%]'/>
        </div>
      </div>

      <div>
        <RequestCard/>

      </div>

      <div className='pt-10 flex flex-col gap-6'>
        <div id='text' className='flex flex-col items-center text-center gap-2'>
<h1 className='text-bold md:text-[28px] text-[20px]'>What can RaiseUp do for your school?</h1>

<h3 className='font-semibold text-[16px] md:text-[20px]'>
    Here are some key features to make collaboration esier for a child's parents,
    <br/>
    family,school administrators, and teachers.
</h3>
        </div>
      <div className='md:hidden'>
        <MenuCarousel/>
        </div>
<div id='buttons' className='hidden md:block border-2 border-white bg-white rounded-lg shadow-lg mx-auto p-4 md:flex md:flex-row md:gap-12 md:w-[85%] gap-4 md:px-16'>
<button
onClick={()=>changeContent(content1)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={lineButton} className='w-[20px] h-[20px]'/>
    line Activity 
</button>

<button 
onClick={()=>changeContent(content2)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={classButton} className='w-[20px] h-[20px]'/>
    Classes 
</button>

<button
onClick={()=>changeContent(content3)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={studentButton} className='w-[20px] h-[20px]'/>
    Student
</button>

<button 
onClick={()=>changeContent(content4)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={noticeButton} className='w-[20px] h-[20px]'/>
    Notice
</button>

<button
onClick={()=>changeContent(content5)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={messageButton} className='w-[20px] h-[20px]'/>
    Messages
</button>

<button
onClick={()=>changeContent(content6)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={feeButton} className='w-[20px] h-[20px]'/>
    School fees
</button>

<button
onClick={()=>changeContent(content7)}
className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff]'>
    <img src={moreButton} className='w-[20px] h-[20px]'/>
    And more access
</button>

</div>
<div className='hidden md:block'>
    {content && <div className='flex flex-row items-center justify-evenly'>
       
        <img src={content.imgUrl} width='35%' className=''/>
       <span className='w-[40%]'> 
       <h1 className='font-bold text-[22px]'> {content.title}</h1>
       <h3 className='font-semibold text-[20px]'>{content.content}</h3>
       </span>  </div>}
</div>

<div className='mx-auto'>
<button className='text-white border-2 border-[#01c7b1] bg-[#01c7b1] text-[13px] font-bold w-fit p-2 rounded-lg'>
    SIGN UP YOUR SCHOOL NOW
</button>
</div>

      </div>

<div className='mt-10 bg-[#E9F3FF]'>
<div id='subRequest' className='md:flex md:flex-row md:w-[80%] flex-col-reverse md:mx-auto pt-10 flex flex-col items-center bg-[#E9F3FF]'>

<div id='leftSection' className='md:w-[40%] p-2 flex flex-col items-center gap-2'>
<h1 className='md:text-[20px] text-[13px] text-center  font-semibold'>
    Make it super easy for parents to pay school fees & bills.
</h1>
<h3 className='text-center'>
Take away the hard work of queuing at specific banks and reconciling payments. Receive payments via mobile money, card or deposit at any bank branch across Ghana.

</h3>
<button className='text-white border-2 border-[#01c7b1] bg-[#01c7b1] text-[13px] font-bold w-fit p-2 rounded-lg'>GET STARTED NOW</button>

</div>

<div id='rightSection'>
<img src={schoolsPatners} className=''/>
</div>
</div>
</div> 
 </div>
  );
}

export default Raise;
