import googlePlay from '../assets/app-store.9d88a9c.png'
import googlePlay1 from '../assets/google-play.png'
import huaweiPlay from '../assets/huawei-download.092f352.png'
import hubtelPledge from '../assets/hubtel-pledge.svg'
import  {FaInstagram,FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'
import playStore from '../assets/playstore.537fc7a (1).svg'
import appleStore from '../assets/appstore.e980235 (1).svg'
import huaweiStore from '../assets/appgallery.d78cdee (1).svg'

function Footer(){
    return (
        <div className=''>
        <div className='flex flex-row bg-[#fff4cc] justify-around pt-10  p-6 border-b-[1px] border-b-[#f7961c]'>
<div className='flex flex-col gap-6 md:flex md:flex-row md:gap-12'>
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
<ul className='list-none text-[12px] md:text-auto'>
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
</div>

<div className='flex flex-col flex flex-col-reverse  mb-auto gap-12 md:flex md:flex-row md:gap-12'>
<div id='thirdFooter'>
    <h1 className='font-bold'>
        Other Services 
    </h1>

    <ul className='list-none text-[12px]'>
       <li>Premium Subscription</li>
       <li>Connect to APIs</li> 
    </ul>
</div>

<div id='fourthFooter' className='flex flex-col gap-2 '>
<h1 className='font-bold'>Install the app</h1>

<div className='md:flex md:flex-row md:gap-2 hidden md:block'>
<img src={googlePlay} height='45px' width='147px' className='cursor-pointer'/>
<img src={googlePlay1} height='45px' width='130px' className='cursor-pointer'/>
<img src={huaweiPlay} height='45px' width='148px' className='cursor-pointer'/>

</div>

<div className='flex flex-row'>
<img src={playStore} className='w-[30px]'/>
<img src={appleStore} className='w-[30px]'/>
<img src={huaweiStore} className='w-[30px]'/>


</div>
</div>
        </div>
        </div>

        <div className='md:flex md:flex-row flex flex-col items-center flex-col-reverse p-2 gap-2 md:items-center bg-[#fff4cc] md:justify-between md:p-6 md:px-16 '>

<div className='flex flex-row gap-2 text-[13px] md:text-auto'>
         &copy; 2005-2023 <h2 className='text-[#01C7B1] font-semibold'>
                Hubtel
            </h2>
            </div>

<div className='flex flex-row items-center  gap-2'>
            <h3 className='text-[#01C7B1] font-bold text-[12px] md:text-auto'>Our offices</h3> |
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
