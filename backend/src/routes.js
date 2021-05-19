const express = require("express");
const { helloWorld } = require("./controller/helloWorld/helloWorld");
const { notFound } = require("./controller/notFound");
const { cepApi } = require("./controller/viaApi");
const router = express.Router();

//will router the controllers.
router.get("/helloworld",helloWorld)
router.get("/",notFound)

//test with axios
router.get("/testapi",cepApi)
module.exports = router