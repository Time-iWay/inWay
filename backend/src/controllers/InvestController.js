const Invest = require("../models/Invest");
const { findConnections, sendMessage } = require("../websocket");
module.exports = {
  // List all invests
  async index(req, res) {
    const invests = await Invest.find();

    return res.json(invests);
  },

  // Create a new invest
  async store(req, res) {
    // Get github user info from body on post route
    const {
      name,
      email,
      finalidade,
      tempo,
      renda,
      pretendeOnvestir,
      dilema,
      prodConhecidos,
      investimentosFeitos,
      patrimonio,
      personalidade,
      perfil,
      latitude,
      longitude,
    } = req.body;
    console.log("doby", req.body);

    // Create geolocation for lat & long (based on PointSchema)
    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    // Create new user in Database
    invest = await Invest.create({
      name,
      email,
      finalidade,
      tempo,
      renda,
      pretendeOnvestir,
      dilema,
      prodConhecidos,
      investimentosFeitos,
      patrimonio,
      personalidade,
      perfil,
      location,
    });

    // Use websocket connections to filter new devs by techs and location
    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      perfil
    );

    //Sending new devs in filter searched
    sendMessage(sendSocketMessageTo, "new-invest", invest);
    // }
    return res.json(invest);
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
