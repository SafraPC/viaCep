const express = require("express");
const { cepApi } = require("./controller/viaApi");
const {cacheTest} = require('./controller/testCache')
const router = express.Router();

//will router the controllers.

router.post("/testapi",cepApi)

//cache test
router.post('/testcache',cacheTest)
module.exports = router