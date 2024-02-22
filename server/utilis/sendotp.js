import dotenv from "dotenv"
import fast2sms from "fast2sms";
// import twilio from "twilio";
// dotenv.config()

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// const client =new twilio(accountSid,authToken);
// console.log(accountSid);
// console.log(authToken);

export const sendotp=async(phonenumber)=>{

    try{   
    console.log(phonenumber);
    // console.log(client);
    // const message=await client.messages
    // .create({
    //     from:+16203106802,
    //    body: 'You have an appointment with Owl, Inc. on Friday, November 3 at 4:00 PM. Reply C to confirm.',
    // //    messagingServiceSid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    //    to: +917988547587
       
    //  })
     console.log(message);
    }
    catch(err){
        console.log(err);
    }
    // .then(message => console.log(message.sid));

} 


