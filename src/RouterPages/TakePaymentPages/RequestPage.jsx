import takePayment from '../../assets/take-payments-2.png'
import bgUnlimited from '../../assets/bg-unlimited-contacts.webp'
import bgInvoice from '../../assets/bg-create-invoices.webp'
import bgInvoice2 from '../../assets/bg-full-invoice.webp' 
import bgSettlement from '../../assets/bg-settlement.webp'
const Request = () => {
    return (  
        <div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col items-center justify-center bg-[#f8f9fb] pt-20 md:place-items-center '>
            <div className='p-4 px-10 flex flex-col items-center gap-4'>
                <h1 className='md:text-[30px] text-[18px] font-bold '>
                    Take payments from anyone,anytime
                </h1>

                <h3 className='md:text-[20px] text-[15px] font-semibold text-center'>
                Send SMS to notify your your contacts, and collect payments from as many people as possible.
                </h3>

                <button className='border-[#01c7b1] md:w-[50%] w-[30%] bg-[#01c7b1] font-bold p-2 rounded-md text-white text-[13px]'>
                    START NOW
                </button>
            </div>

            <div className='p-4'>
                <img src={takePayment} className='md:w-[75%] '/>
            </div>
        </div>
<div className='md:flex md:flex-row flex flex-col flex-col-reverse md:items-center pt-[14%]'>
    <div className='md:w-[50%] flex flex-col gap-2 p-4 px-10'>
        <h1 className='md:text-[30px] text-[23px] font-bold'>Alert unlimited contacts to pay any day.
        </h1>
        <h3 className='font-semibold md:text-[20px] text-[18px]'>
        Request payments for school fees, church tithes, estate fees, association dues from as many contacts.

You can also distribute money to any large group in a few steps.
        </h3>
        <a href=' ' className='text-[#01c7b1]'>See How Sms And Money work</a>
    </div>

    <img src={bgUnlimited} className='md:w-[40%]'/>
</div>

<div className='md:grid bg-[#f8f9fb] flex flex-col gap-2 p-4 md:grid-cols-2 md:items-center md:place-items-center'>

    <div>
        <img src={bgInvoice} />
    </div>
    <div className='md:w-[70%] flex flex-col gap-2'>
        <h1 className='md:text-[30px] text-[20px]  font-bold'>
            Create invoices to take payments via card or mobile money

        </h1>

        <h3 className='md:text-[20px] text-[16px] font-semibold'>Generate beautiful invoices with your logo and details for your customers to pay online any time</h3>
    </div>

</div>

<div className='md:grid md:grid-cols-2 flex flex-col flex-col-reverse gap-2 md:items-center md:place-items-center pt-20 pb-20'>

    <div className='md:w-[70%]'>
        <h1 className='md:text-[30px] text-[20px] font-bold'>
        Supercharge your invoices with automated debits

        </h1>

        <h3 className='md:text-[20px] text-[16px] font-semibold'>
        Set-up your invoices to automatically charge customers on specific days over scheduled periods that you choose.

        </h3>
    </div>
    <div>
        <img src={bgInvoice2} />
    </div>
   
</div>

<div className='md:flex bg-[#f8f9fb] p-6 md:flex-row md:items-center md:justify-center gap-6'>
<div className='md:w-[60%]'>
    <img src={bgSettlement} />
</div>

<div>
    <h1 className='md:text-[30px] text-[20px] font-bold'>
        Get paid instantly; no settlement wait 
    </h1>
    <h3 className='md:text-[20px] text-[16px] font-semibold'>
        Your mobile money or bank account is credited the minute a payment to you is completed.

    </h3>
</div>
</div>
<div className='md:hidden fixed z-10 w-[100%] bg-white  left-0 border-2 border-white bottom-0 p-2'>
       <button className='bg-[#01c7b1] w-[100%] p-2 border-[#01c7b1] text-white font-semibold rounded-md'> LOGIN // SIGN UP</button>
    </div>
        </div>
    );
}
 
export default Request;
