const mongoose = require("mongoose");

const CepSchema = new mongoose.Schema(
  {
    cep: {
      type: String,
      required: true,
      unique: true,
    },
    logradouro: {
      type: String,
      lowercase: true,
    },
    complemento: {
      type: String,
      lowercase: true,
    },
    bairro: {
      type: String,
      lowercase: true,
    },
    localidade: {
      type: String,
      lowercase: true,
    },
    uf: {
      type: String,
      lowercase: true,
    },
    ibge: {
      type: String,
      lowercase: true,
    },
    gia: {
      type: String,
      lowercase: true,
    },
    ddd: {
      type: String,
      lowercase: true,
    },
    siafi: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
const CEP = mongoose.model("CepApi", CepSchema);

module.exports = CEP;
