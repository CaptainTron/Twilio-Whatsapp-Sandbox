const express = require("express");
const app = express();

// This one for .env files
require('dotenv').config();
// Middleware Goes here

// express.json() middle ware function
app.use(express.json())


// Setting the middleware Function 
const SendRouter = require("./Router/Router")
app.use("/api/twilio/sendmessage", SendRouter)



// Create server port or use local port otherwise
const port = process.env.PORT || 3000
app.listen(3000, console.log(`Server is Listening On port ${port}....`))
