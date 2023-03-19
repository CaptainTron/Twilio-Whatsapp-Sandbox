const express = require("express");
const router = express.Router();


// Route of incoming data will go here
const SendMessage = require("../Controller/Controller");
// post method to receive data from the client
router.route('/').post(SendMessage)

// exporting the router
module.exports = router;