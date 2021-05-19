const axios = require("axios");
const CepAPI = require("../../model/viaCEP");
const cache = require("../../service/cache");

const cepApi = async (req, res) => {
  try {
    const cep = req.body.cep;
    const cached = await cache.get(cep);

    if (cep) {
      const rgx = /^[0-9]{5}-[0-9]{3}$/;

      if (rgx.test(cep)) {
        //Verify if does not exists in cache
        if (cached) {
          res.json({ message: cached });
        } else {
          //Verify if it exists in database
          const zipFound = await CepAPI.findOne({cep});
          if(zipFound){
            cache.set(cep, zipFound, 10);
            res.json(zipFound);
           
          }else{
          //If dont exist´s in redis and mongoDB
          const { data } = await axios(`https://viacep.com.br/ws/${cep}/json/`);
          
          if (!data.erro) {
            await CepAPI.create(data);
            cache.set(cep, data, 10);
            res.json(data);
          } else {
            res.status(400).json({ message: "Informe um CEP Correto!" });
          }
        }
      }
      } else {
        res.status(400).json({ message: "CEP Inválido!" });
      }
    } else {
      res.status(400).json({ message: "CEP Não Informado!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Internal Server Error" });
  }
};

module.exports = { cepApi };
