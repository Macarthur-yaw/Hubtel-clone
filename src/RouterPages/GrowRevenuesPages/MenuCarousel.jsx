import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lineButton from '../../assets/untitled.png';
import classButton from '../../assets/untitled (2).png';
import studentButton from '../../assets/untitled (3).png';
import noticeButton from '../../assets/untitled (4).png';
import messageButton from '../../assets/untitled (5).png';
import feeButton from '../../assets/untitled (6).png';
import moreButton from '../../assets/untitled (7).png';
import { useState } from 'react';
import liveActivity from '../../assets/live-activity.png';
import classPic from '../../assets/classes.png';
import studentPic from '../../assets/students.png';
import messages from '../../assets/messages.png';
import schoolFees from '../../assets/school-fees.png';

const content1 = {
  title: "Live Activity",
  content: "Stay up-to-the-minute with real-time news feed on important activities of teachers and parents.",
  imgUrl: liveActivity,
};

const content2 = {
  title: "Classes",
  content: "A new way to manage everyday parent-teacher collaboration, from school fees, pickups to summary reports with photos. Connect teachers with parents to manage all non-academic activities with social media ease.",
  imgUrl: classPic,
};

const content3 = {
  title: "Students",
  content: "Enable parents to manage important choices for their children. Keep track of your student’s records and choices made by their parents. From everything about permissions, family member, allergies, hobbies, and other important milestones.",
  imgUrl: studentPic,
};

const content4 = {
  title: "Notices",
  content: "Never miss a beat within the school’s community. Keep parents and family members updated with the latest school news, announcements, and updates. Watch them interact with your posts by liking and commenting on notices.",
  imgUrl: liveActivity,
};

const content5 = {
  title: "Messages",
  content: "Stay connected with each parent. Makes it easy to connect with parents individually, no matter where they are. Send quick messages about a student’s day, ask questions, and manage feedback.",
  imgUrl: messages,
};

const content6 = {
  title: "School Fees",
  content: "Collect school fees and accept other bills via mobile money, card, and deposits at any bank branch. Set up and track payments made by parents in real-time with automated alerts and instant receipts.",
  imgUrl: schoolFees,
};

const content7 = {
  title: "...and Even More Accesses",
  content: "Manage more accesses and features with zero monthly costs or additional cost commitments. Simply pay a fixed transaction rate when a parent successfully pays a bill.",
  imgUrl: liveActivity,
};

const MenuCarousel = () => {
  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [content, setContent] = useState(null);

  function changeContent(objtContent) {
    setContent(objtContent);
  }

  return (
    <div className=''>
      <div id='buttons' className='border-2  border-white bg-white rounded-lg shadow-lg mx-auto p-4 md:flex md:flex-row md:gap-6 w-[100%] gap-4 md:px-16 px-2'>
        <Slider {...settings} style={{width:'120%'}}>
          <button
            onClick={() => changeContent(content1)}
            className='inline-flex items-center flex-col   md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={lineButton} className='w-[15px] h-[15px] mx-auto' alt='Live Activity' />
            Live Activity
          </button>

          <button
            onClick={() => changeContent(content2)}
            className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={classButton} className='w-[15px] h-[15px] mx-auto' alt='Classes' />
            Classes
          </button>

          <button
            onClick={() => changeContent(content3)}
            className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={studentButton} className='w-[15px] mx-auto h-[15px]' alt='Student' />
            Student
          </button>

          <button
            onClick={() => changeContent(content4)}
            className='flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={noticeButton} className='w-[15px] h-[15px] mx-auto' alt='Notice' />
            Notice
          </button>

          <button
            onClick={() => changeContent(content5)}
            className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={messageButton} className='w-[15px] h-[15px] mx-auto' alt='Messages' />
            Messages
          </button>

          <button
            onClick={() => changeContent(content6)}
            className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={feeButton} className='w-[15px] h-[15px] mx-auto' alt='School Fees' />
            School fees
          </button>

          <button
            onClick={() => changeContent(content7)}
            className='inline-flex items-center flex-col md:text-[18px] text-[13px] font-semibold text-[#3395ff] p-2'
          >
            <img src={moreButton} className='w-[15px] mx-auto h-[15px]' alt='And more access' />
            And more access
          </button>
        </Slider>
      </div>

      <div className=''>
        {content && (
          <div className='flex flex-row gap-2 items-center justify-evenly'>
            <img src={content.imgUrl}  className='md:w-[35%] w-[60%]' alt='Content' />
            <span className='md:w-[40%]'>
              <h1 className='font-bold md:text-[22px]'>{content.title}</h1>
              <h3 className='md:font-semibold md:text-[20px] text-[12px]'>{content.content}</h3>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCarousel;
