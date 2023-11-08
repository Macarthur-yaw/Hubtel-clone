import riderPic from '../../assets/riders.webp'
const Riders = () => {
    return (  
        <div>
            <div>
                <span>
                    <h1>
                    Earn money delivering smiles to customers within your community
                    </h1>

                    <h2>
                    Riders on Hubtel are professionally equipped, adequately trained and paid weekly.
                    </h2>

                    <button className='bg-[#01c7b1] text-white border-2 border-[#01c7b1] p-2 font-bold w-[100%] text-[13px]  rounded-md'>JOIN US</button>
                </span>
                <img src={riderPic}/>

                
            </div>
        </div>
    );
}
 
export default Riders;