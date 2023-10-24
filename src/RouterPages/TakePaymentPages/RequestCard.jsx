import firstImage from '../../assets/share-image.png'
import secondIMage from '../../assets/stay-informed.png'
import thirdImage from '../../assets/manage-pickups.png'
import fourthImage from '../../assets/pay-school-fees.png'
import fifthImage from '../../assets/manage-permissions.png'
import sixthImage from '../../assets/bring-family-together.png'
const requestContent=[
    { id:1,
        title:"Share Photos & Comments",
        content:"Functional social media features keep you well-updated on your child’s most important activities. Engage with school administrators, teachers, and other parents on important topics.",
        imgUrl:firstImage
    },
    {
        id:2,
        title:"Stay Informed",
        content:"Receive instant notifications about emergencies, field trips, parent-teacher conferences, and other school activities.",
   imgUrl:secondIMage
    },
    {
        id:3,
        title:"Manage PickUps",
        content:"Takes the stress out of coordinating pick-ups of your child from school. Add and remove family members and other domestic caregivers as you wish.",
    imgUrl:thirdImage
    },
    {
        id:4,
        title:"Pay School Fees",
        content:"The days of filling out forms at banks or queuing to pay cash are over. Pay any time with your mobile money, Visa or Mastercard, or at any bank branch across Ghana.",
        imgUrl:fourthImage
    },{
        id:5,
        title:"Manage Permissions",
        content:"Approve permission requests from your child's school with a few taps on your smartphone for activities like field trips, health requests, and others.",
        imgUrl:fifthImage
    },{
        id:6,
        title:"Bring Family Together",
        content:"Mobilise a close circle of family members to raise up your child. Manage support from grandparents, friends, sponsors, and other caretakers around your child.",
        imgUrl:sixthImage
    }

]

const getData=requestContent.map((content)=>{
    return (
        <div key={content.id} className=' w-[80%]'>
<div className='mx-auto'>


<img src={content.imgUrl} className='max-w-[100%] rounded-md'/>
</div>
<div className='text-center'>
<h5 className='font-bold '>{content.title}
</h5>

<h6 className=''>{content.content}</h6>
</div>
        </div>
    )
})
const RequestCard = () => {
    return ( 
        <div className='flex flex-col gap-10 bg-[#FFFAEE] p-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4  pt-14  place-items-center'>
            {getData}
          
        </div>
          <div className='  text-center'>
          <button className='font-bold bg-[#01c7b1] border-[[#01c7b1] text-white text-[13px] p-4 rounded-lg '>GET YOUR CHILD TO SIGN UP</button>
          </div>
          </div>
     );
}
 
export default RequestCard;