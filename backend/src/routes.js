const express = require("express");
const { helloWorld } = require("./controller/helloWorld/helloWorld");
const { cepApi } = require("./controller/viaApi");
const router = express.Router();

//will router the controllers.
router.get("/helloworld",helloWorld)

//test with axios
router.post("/testapi",cepApi)
module.exports = router