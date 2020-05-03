const Consult = require("../models/Consult");
const { findConnections, sendMessage } = require("../websocket");
module.exports = {
  async index(req, res) {
    const consults = await Consult.find();

    return res.json(consults);
  },

  async store(req, res) {
    const {
      name,
      email,
      certificados,
      ativosFix,
      qtdAFix,
      ativosVar,
      qtdAVar,
      experiencia,
      bio,
      perfil,
      latitude,
      longitude,
    } = req.body;
    console.log("doby", req.body);
    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    consult = await Consult.create({
      name,
      email,
      certificados,
      ativosFix,
      qtdAFix,
      ativosVar,
      qtdAVar,
      experiencia,
      bio,
      perfil,
      location,
    });

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      perfil
    );

    sendMessage(sendSocketMessageTo, "new-consult", consult);
    // }
    return res.json(consult);
  },

  // Update dev information
  // async update(req, res) {
  //   // Get github username
  //   const { github_username } = req.params;

  //   // Check if user exists in database
  //   let dev = await Dev.findOne({ github_username });

  //   // If username do not exists
  //   if (!dev) {
  //     return res.status(400).json({ message: "Usuário não encontrado!" });
  //   }

  //   // If exists, update it
  //   // If update just for some fields, it will use old dev info to complete
  //   const {
  //     name = dev.name,
  //     bio = dev.bio,
  //     longitude = dev.location.coordinates[0],
  //     latitude = dev.location.coordinates[1],
  //     avatar_url = dev.avatar_url,
  //   } = req.body;

  //   // Check if techs were updated to transform text in Array for each tech
  //   const techs = req.body.techs
  //     ? parseStringAsArray(req.body.techs)
  //     : dev.techs;

  //   // Create geolocation for lat & long (based on PointSchema)
  //   const location = {
  //     type: "Point",
  //     coordinates: [longitude, latitude],
  //   };

  //   // Update Dev and return the "updated" Dev
  //   let updatedDev = await Dev.findOneAndUpdate(
  //     github_username,
  //     { name, techs, bio, avatar_url, location },
  //     {
  //       new: true,
  //     }
  //   );

  //   return res.json(updatedDev);
  // },

  // // Delete Dev
  // async destroy(req, res) {
  //   // Get github username
  //   const { github_username } = req.params;

  //   // Check if user exists in database
  //   let dev = await Dev.findOne({ github_username });

  //   if (!dev) {
  //     return res.status(400).json({ message: "Usuário não encontrado!" });
  //   }

  //   // Delete user
  //   await Dev.deleteOne({ github_username });

  //   return res.json({ deleted: true });
  // },
};
