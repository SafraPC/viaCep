const express = require("express");
const { helloWorld } = require("./controller/helloWorld/helloWorld");

const router = express.Router();

//will router the controllers.
router.get("/helloworld",helloWorld)
module.exports = router