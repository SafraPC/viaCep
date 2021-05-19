const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();

(async () => {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(router);
  app.listen(8080, () => {
    console.log("Server is Running");
  });
})();
