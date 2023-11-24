const express=require('express')
const {SendOtp,VerifyOtp}=require('./SendOtp')
const router=express.Router()

router.post('/login',(req,res)=>{
    console.log(req.body)
})
router.get('/logs',(req,res)=>{
    res.send({name:'hello'})
//    console.log( SendOtp());

})
router.post('/otp', (req, res) => {
    const { contact } = req.body;

    // Validate that 'contact' is present in the request
    if (!contact) {
        return res.status(400).send({ message: 'Phone number is required' });
    }

    // Call the SendOtp function with the extracted phone number
    SendOtp(contact, res);
});
router.post('/verify-otp',  (req, res) => {
    const { contact, otp } = req.body;
     VerifyOtp(contact, otp, res);
});

module.exports=router