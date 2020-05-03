const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const ConsultSchema = new mongoose.Schema({
  name: String,
  email: String,
  certificados: String,
  ativosFix: String,
  qtdAFix: Number,
  ativosVar: String,
  qtdAVar: Number,
  experiencia: String,
  bio: String,
  perfil: String,
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

module.exports = mongoose.model("Concult", ConsultSchema);
