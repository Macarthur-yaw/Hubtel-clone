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
      <div className='pt-[100px] flex flex-row bg-[#FFEA99] items-center  justify-around '>
        <div className=''>
          <h1 className="font-semibold text-[40px]  ">
            Inspiring parents to help
            <br/>
             schools run smoothly
          </h1>

          <h3 className="text-[16px] ">
            RaiseUp makes it simple for busy parents to get
            <br></br>
             more control and visibility over non-academic activities.
          </h3>

          <button className="border-2 border-[#01c7b1] p-2 text-white bg-[#01c7b1] hover:bg-[#266] hover:border-[#266] text-[13px] font-bold rounded-md">
            INSTALL RAISEUP
          </button>
        </div>
        <div className=' w-[53%]'>
          <img src={schoolsApp} className='w-[100%]'/>
        </div>
      </div>

      <div>
        <RequestCard/>

      </div>

      <div className='pt-10 flex flex-col gap-6'>
        <div id='text' className='flex flex-col items-center text-center gap-2'>
<h1 className='text-bold text-[28px]'>What can RaiseUp do for your school?</h1>

<h3 className='font-semibold text-[20px]'>
    Here are some key features to make collaboration esier for a child's parents,
    <br/>
    family,school administrators, and teachers.
</h3>
        </div>

<div id='buttons' className='border-2 border-white bg-white rounded-lg shadow-lg mx-auto p-4 w-fit flex flex-row gap-12 w-[85%] px-16'>

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

<button
onClick={()=>changeContent(content7)}
className='inline-flex items-center flex-col text-[18px] font-semibold text-[#3395ff]'>
    <img src={moreButton}/>
    And more access
</button>

</div>
<div>
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
<div id='subRequest' className='flex flex-row w-[80%] mx-auto pt-10 bg-[#E9F3FF]'>

<div id='leftSection' className='w-[40%] p-2 flex flex-col gap-2'>
<h1 className='text-[20px] font-bold'>
    Make it super easy for parents to pay school fees & bills.
</h1>
<h3>
Take away the hard work of queuing at specific banks and reconciling payments. Receive payments via mobile money, card or deposit at any bank branch across Ghana.

</h3>
<button className='text-white border-2 border-[#01c7b1] bg-[#01c7b1] text-[13px] font-bold w-fit p-2 rounded-lg'>GET STARTED NOW</button>

</div>

<div id='rightSection'>
<img src={schoolsPatners} className=''/>
</div>
</div>
</div>  </div>
  );
}

export default Raise;
