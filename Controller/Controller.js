const SendMessages = require("../Twilio/Twilio")


// This function will catch incoming body request from user and send it to Twilio SendMessage(....) 
const SendMessage = async(req, res) => {
    try {
        const { PhoneNumber, Message, Media } = req.body

        // Check wheather the user has provided Phone number and Message or not
        if(!PhoneNumber || !Message){
            res.status(400).json({message:"Phone Number or Message Body Is Missing"})
            return;
        }
        const SID =  await SendMessages(PhoneNumber, Message, Media)
        res.status(200).json({ message: `Message Successfully Send to : -  ${PhoneNumber}`, message_SID: SID})
    }
    // if any exception or error arises in user input.
    catch (err) {
        res.status(401).json({ message: err.message })
    }
}


module.exports = SendMessage;




