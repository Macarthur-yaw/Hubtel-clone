import govHero from '../../assets/gov-hero.png'
import graphicImage from '../../assets/graphic-image.png'
import ladyImage from '../../assets/lady-image.png'
import graphImage from '../../assets/graph-image.png'
import peopleImage from '../../assets/people-image.png'
import phoneImage from '../../assets/phone-image.png'
import leakagesImages from '../../assets/leakages-image.png'
import growrevenues from '../../assets/revenues-image.png'
import institutionPic from '../../assets/institution-image.png'
import livesPic from '../../assets/change-image.png'
import schoolsPatners from '../../assets/schools-partners.png'

const HubtelRev2 = () => {
    return (  
        <div className="pt-32">
{/* Welcome to The Hutel Government program. */}

<div className="flex flex-col items-center gap-2 p-2"><h1 className="font-semibold md:text-[30px] text-[25px] text-center">
   Stop Leakages. Grow Revenues.
   <br/>
   Transform Institutions. Change lives.
</h1>

<h3 className="md:text-[20px] text-[16px] text-center">
Hubtel for Government is the most agile platform with custom-built features to 
<br/>
help public institutions modernize how citizens connect and pay for services.

</h3>

<button className="border-2 border-[#01c7b1] bg-[#01c7b1] font-bold text-[13px] text-white p-2 rounded-md text-center md:w-[18%] w-[30%]">
    LET'S WORK TOGETHER
</button>

<img src={govHero} className='md:w-[80%]'/>

</div>


<div className='bg-[#FEF1F2] pt-20 text-center'>
    <h1 className='font-semibold mb-4 text-[25px]'>
        A Truly Informative Platform
    </h1>

<div className='md:flex md:flex-col md:gap-10'>
    <div className='flex justify-center '>
  <div className='md:flex md:flex-row  flex flex-col gap-4 p-4 md:gap-6'>
    <CardImage Imageurl={graphicImage} title='Eliminate cash transactions and prevent revenue leakage' />
    <CardImage Imageurl={ladyImage} title='Make it easier for citizens to pay for services' />
    <CardImage Imageurl={graphImage} title='Increase revenue by reaching a wider audience' />
  </div>
</div>
<div className='flex justify-center'>
  <div className='md:flex md:flex-row flex flex-col gap-4 mb-10 p-4'>
    <CardImage Imageurl={peopleImage} title='Streamline processes, improve customer service, and make better decisions' />
    <CardImage Imageurl={phoneImage} title='Change lives by making it easier for citizens to access essential services' />
  </div>
</div>
</div>
</div>

<div className='pt-28 flex flex-col gap-10 '>
    <div className='flex md:flex-row flex-col flex-col-reverse w-[80%] mx-auto items-center justify-center gap-4 '>
     
    <span className='md:w-[50%] text-left'>    <h1 className='font-semibold md:text-[30px] text-[20px]'>
            Stop Leakages
        </h1>
        <h3 className='md:text-[18px] text-[16px]'>
        Hubtel for Government's robust and scalable payment platform can help you eliminate cash transactions and prevent revenue leakage. By connecting your revenue collection systems directly to the national banking systems, you can be sure that every pesewa is accounted for and settled directly to your bank accounts

        </h3></span>
        <div className=''>
<img src={leakagesImages} className='md:max-w-[520px]  rounded-lg'/>
</div>  </div>

    <div className='flex md:flex-row flex-col w-[80%] mx-auto items-center justify-center gap-4'>
       
<img src={growrevenues} className='md:max-w-[520px] rounded-lg'/>
<span className='md:w-[50%]'>
<h1 className='font-semibold md:text-[30px] text-[20px]'>
            Grow Revenues 
        </h1>
        <h3 className='md:text-[18px] text-[16px]'>
        Increase your revenue by making it easier for citizens and customers to pay for services. Work with us to custom-build your user experience into an easy-to-use service accessible to everyone, so you can reach a wider audience and collect more payments.

        </h3>
        </span>
    </div>

    <div className='flex md:flex-row w-[80%] mx-auto flex-col flex-col-reverse items-center justify-center gap-4'>
       
    <span className='md:w-[50%]'>  
       <h1 className='font-semibold md:text-[30px] text-[20px]'>
       Transform Your Institution
               </h1>
               <h3 className='md:text-[18px] text-[16px]'>
               Streamline your processes, improve customer service, and make better decisions by turning your organization into a more efficient and modern business complete with new user experiences that your citizens and customers will love.

               </h3>
               </span>
               <img src={institutionPic} className='md:max-w-[520px] rounded-md'/>
           </div>

           <div className='flex md:flex-row w-[80%] mx-auto flex-col gap-4 items-center justify-center'>
       
           <img src={livesPic} className='md:max-w-[520px] rounded-md'/>
  <span className='md:w-[50%]'>
       <h1 className='md:text-[30px] text-[20px] font-semibold'>
Change Lives               </h1>
               <h3 className='md:text-[18px]'>
               Make it easier for citizens, residents, and customers to access essential public services anytime, anywhere. This can help you reduce poverty, improve lifestyles, enhance citizen happiness, and promote economic growth.  
               </h3>
               </span>      
           </div>


   
</div>

<div className='mt-10  py-[5px] bg-[#E9F3FF] flex md:flex-row flex-col flex-col-reverse justify-center items-center p-4 py-20'>
                    <span className='flex flex-col gap-2 items-center mb-10 '>
                        <h1 className='font-semibold md:text-[22px] text-[18px]'>
                        Make it super easy for citizens to access and pay for government services
                        </h1>
                        <h3 className=' font-normal md:text-[18px] text-[15px]'>
                        Take away the hard work of queuing at specific banks and reconciling payments. Receive payments via mobile money, cash deposit at <a href='' className='underline'>any bank branch across Ghana.</a>

                        </h3>
                   <button className='bg-[#01c7b1] md:w-[20%] w-[60%] text-sm border-[#01c7b1] text-[13px] font-bold p-2 text-white rounded-md'>GET STARTED NOW</button>
                    </span>

                    <img src={schoolsPatners} className='md:max-w-[500px]'/>
                </div>

        </div>
    );
}
function CardImage(props){
    return (
        <div className=' md:max-w-[50%] flex flex-col gap-4 items-center'>
<img src={props.Imageurl} className='md:max-w-[330px]'/>
<h1 className='font-semibold text-lg md:w-[62%]'>{props.title}</h1>
        </div>
    )
}

export default HubtelRev2
