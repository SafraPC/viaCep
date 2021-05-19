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
      required: true,
      lowercase: true,
    },
    complemento: {
      type: String,
      required: true,
      lowercase: true,
    },
    bairro: {
      type: String,
      required: true,
      lowercase: true,
    },
    localidade: {
      type: String,
      required: true,
      lowercase: true,
    },
    uf: {
      type: String,
      required: true,
      lowercase: true,
    },
    ibge: {
      type: String,
      required: true,
      lowercase: true,
    },
    gia: {
      type: String,
      required: true,
      lowercase: true,
    },
    ddd: {
      type: String,
      required: true,
      lowercase: true,
    },
    siafi: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);
const CEP = mongoose.model("CepApi", CepSchema);

module.exports = CEP;
