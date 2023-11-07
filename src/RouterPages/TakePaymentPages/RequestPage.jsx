import takePayment from '../../assets/take-payments-2.png'
import bgUnlimited from '../../assets/bg-unlimited-contacts.webp'
import bgInvoice from '../../assets/bg-create-invoices.webp'
import bgInvoice2 from '../../assets/bg-full-invoice.webp' 
import bgSettlement from '../../assets/bg-settlement.webp'
const Request = () => {
    return (  
        <div>
        
        <div className='grid grid-cols-2 bg-[#f8f9fb] pt-20 place-items-center '>
            <div className='p-4 px-10 flex flex-col gap-4'>
                <h1 className='text-[30px] font-bold '>
                    Take payments from anyone,anytime
                </h1>

                <h3 className='text-[20px] font-semibold'>
                Send SMS to notify your your contacts, and collect payments from as many people as possible.
                </h3>

                <button className='border-[#01c7b1] w-[30%] bg-[#01c7b1] font-bold p-2 rounded-md text-white text-[13px]'>
                    START NOW
                </button>
            </div>

            <div>
                <img src={takePayment} width='75%'/>
            </div>
        </div>
<div className='flex flex-row items-center pt-[14%]'>
    <div className='w-[50%] flex flex-col gap-2 p-4 px-10'>
        <h1 className='text-[30px] font-bold'>Alert unlimited contacts to pay any day.
        </h1>
        <h3 className='font-semibold text-[20px]'>
        Request payments for school fees, church tithes, estate fees, association dues from as many contacts.

You can also distribute money to any large group in a few steps.
        </h3>
        <a href=' ' className='text-[#01c7b1]'>See How Sms And Money work</a>
    </div>

    <img src={bgUnlimited} width='40%'/>
</div>

<div className='grid bg-[#f8f9fb] p-4 grid-cols-2 items-center place-items-center'>

    <div>
        <img src={bgInvoice} />
    </div>
    <div className='w-[70%]'>
        <h1 className='text-[30px] font-bold'>
            Create invoices to take payments via card or mobile money

        </h1>

        <h3 className='text-[20px] font-semibold'>Generate beautiful invoices with your logo and details for your customers to pay online any time</h3>
    </div>

</div>

<div className='grid grid-cols-2 items-center place-items-center pt-20 pb-20'>

    <div className='w-[70%]'>
        <h1 className='text-[30px] font-bold'>
        Supercharge your invoices with automated debits

        </h1>

        <h3 className='text-[20px] font-semibold'>
        Set-up your invoices to automatically charge customers on specific days over scheduled periods that you choose.

        </h3>
    </div>
    <div>
        <img src={bgInvoice2} />
    </div>
   
</div>

<div className='flex bg-[#f8f9fb] p-6 flex-row items-center justify-center gap-6'>
<div className='w-[60%]'>
    <img src={bgSettlement} />
</div>

<div>
    <h1 className='text-[30px] font-bold'>
        Get paid instantly; no settlement wait 
    </h1>
    <h3 className='text-[20px] font-semibold'>
        Your mobile money or bank account is credited the minute a payment to you is completed.

    </h3>
</div>
</div>
        </div>
    );
}
 
export default Request;
