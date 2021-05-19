const axios = require("axios");

const cepApi = async (req, res) => {
  try {
    const cep = req.body.cep;
    if (cep) {
      const rgx = /^[0-9]{5}-[0-9]{3}$/;
      if (rgx.test(cep) === true) {
        
        
        const {data} = await axios(`https://viacep.com.br/ws/${cep}/json/`)
        res.json(data)
     
      } else {
        res.status(400).send({ message: "CEP Inválido!" });
      }
    } else {
      res.status(400).json({ message: "CEP Não Informado!" });
    }

    // 
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, message: "Something Happened!" });
  }
};

module.exports = { cepApi };
