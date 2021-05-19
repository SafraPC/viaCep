const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();
const connection = require("./database");

//For db stay async
(async()=>{
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  await connection()

  app.use(router);
  //Route not found exception

  app.use((_, res, next) =>{
    var err = new Error('Not Found');
    res.status(404).send({message:"Rota não Encontrada!"})
    next(err);
  });

  app.listen(8080, () => {
    console.log("Server is Running");
  });
})()
 
