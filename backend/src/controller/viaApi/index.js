
const axios = require('axios');

const cepApi = async (_, res) => {
    try {
        //Can consume an api this way
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        res.json(data);
    } catch (error) {
      res.json({error: error.message,message: "Something Happened!" });
    }
  };
  
  module.exports = { cepApi };
  