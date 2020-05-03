const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const InvestSchema = new mongoose.Schema({
  name: String,
  email: String,
  finalidade: String,
  tempo: String,
  renda: String,
  pretendeOnvestir: String,
  dilema: String,
  prodConhecidos: String,
  investimentosFeitos: String,
  patrimonio: String,
  personalidade: String,
  perfil: String,
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

module.exports = mongoose.model("Invest", InvestSchema);
