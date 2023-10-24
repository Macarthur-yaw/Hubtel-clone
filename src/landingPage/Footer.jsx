import googlePlay from '../assets/app-store.9d88a9c.png'
import googlePlay1 from '../assets/google-play.png'
import huaweiPlay from '../assets/huawei-download.092f352.png'
import hubtelPledge from '../assets/hubtel-pledge.svg'
import  {FaInstagram,FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'

function Footer(){
    return (
        <div className=''>
        <div className='flex flex-row bg-[#fff4cc] justify-around pt-10  p-6 border-b-[1px] border-b-[#f7961c]'>

<div id='firstFooter'>
    <img src={hubtelPledge}/>

<h3 className='text-[9CABB8] text-[13px]'>
    For our communities;
    <br/>
    for the good of all 
</h3>
</div>

<div id='secondFooter'>
<h1 className='font-bold'>
    Company
</h1>
<ul>
    <li>
        Leadership & Team
    </li>
<li>
    Join the team
</li>
<li>
    Our Stories
</li>
</ul>
</div>

<div id='thirdFooter'>
    <h1 className='font-bold'>
        Other Services 
    </h1>

    <ul>
       <li>Premium Subscription</li>
       <li>Connect to APIs</li> 
    </ul>
</div>

<div id='fourthFooter' className='flex flex-col'>
<h1 className='font-bold'>Install the app</h1>

<div className='flex flex-row gap-2'>
<img src={googlePlay} height='45px' width='147px' className='cursor-pointer'/>
<img src={googlePlay1} height='45px' width='130px' className='cursor-pointer'/>
<img src={huaweiPlay} height='45px' width='148px' className='cursor-pointer'/>

</div>
</div>
        </div>

        <div className='flex flex-row items-center bg-[#fff4cc] justify-between p-6 px-16 '>

<div className='flex flex-row gap-2'>
         &copy; 2005-2023 <h2 className='text-[#01C7B1] font-bold'>
                Hubtel
            </h2>
            </div>

<div className='flex flex-row items-center  gap-2'>
            <h3 className='text-[#01C7B1] font-bold'>Our offices</h3> |
       <span className='inline-flex gap-2'>
         <FaInstagram className='text-[25px]'/>
         <FaTwitter className='text-[25px]'/>
         <FaLinkedin className='text-[25px]'/>
            <FaFacebook className='text-[25px]'/>
            </span>
       
            </div>          
            
            
            </div>
        </div>    )
}

export default Footer;
