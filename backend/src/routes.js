const express = require("express");
const { cepApi } = require("./controller/viaApi");
const router = express.Router();

//will router the controllers.

router.post("/mycep",cepApi)

//cache test
module.exports = router