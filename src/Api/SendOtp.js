require('dotenv').config();

const { VERIFY_SID } = process.env;

const client = require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);
// console.log(VERIFY_SID)
// const client = require("twilio")(accountSid, authToken)

const SendOtp = async (contact, res) => {
    const countryCode = '+233';

    try {
        const OtpResponse = await client.verify.v2.services(VERIFY_SID)
            .verifications.create({ 
                to: `${countryCode}${contact}`,
                channel: 'sms',
            });

        console.log('Verification status:', OtpResponse.status);
        res.status(200).send({message:true});
    } catch (error) {
        console.error('Twilio error:', error);
        res.status(400).send({ message: false });
    }
};

const VerifyOtp=async (contact,otp,res)=>{

    // const {contact,otp}=req.body
    const countryCode = '+233';
    try { 

         await client.verify.v2.services(VERIFY_SID).verificationChecks.create({
            to:`${countryCode}${contact}`,
            code:otp
         })

         res.status(200).send({message:true})
    }catch(error){
        console.log(error)
        res.status(400).send({message:false})
    }
}
module.exports={SendOtp,VerifyOtp};
