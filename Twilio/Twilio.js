// this module for enviromental variable
require('dotenv').config();

// call the environmental file 
const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);



// This wil wait for request and send mesage to the whatsapp message
const SendMessage = async(SendTo, SendMessages, Media) => {
    try {
       const sendmessage = await client.messages
            .create({
                body: `${SendMessages}`,
                from: `whatsapp:${process.env.PHONE_NUMBER}`,
                to: `whatsapp:${SendTo}`,
                mediaUrl: [Media]
            })
            return sendmessage.sid;
            
    } catch (error) {
        console.log(error.message);
    }
}


// this will export the function
module.exports = SendMessage;