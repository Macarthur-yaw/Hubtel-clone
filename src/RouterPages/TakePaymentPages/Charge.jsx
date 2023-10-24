import backgroundPicture from '../../assets/bg-chargecustomers.webp'
const Charge = () => {
    return ( 
        <div className='flex flex-row pt-20  border-2'>
             
             <div className='w-[58%]'>

                <h1>
                Take card & mobile money payments at your pay point
                </h1>

                <h3>
                Join thousands of smart businesses – from savvy start-ups to expanding enterprises – using a Hubtel card machine.

                </h3>

                <button className='text-[#01c7b1] bg-[#01c7b1] border-[#01c7b1] border-2 text-white p-2 rounded-md'>
                    GET STARTED
                </button>
             </div>

             <div>
<img src={backgroundPicture} alt='a man and a woman' width='50%'/>
             </div>

        </div>
     );
}
 
export default Charge;