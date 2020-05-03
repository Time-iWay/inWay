const Consult = require("../models/Consult");

module.exports = {
  async index(req, res) {
    console.log(req.query);
    const { perfil, longitude, latitude } = req.query;

    // Do a search for a consults that has any tech near the geolocation
    const consults = await Consult.find({
      // Filter by any perfil
      perfil: {
        $in: perfil,
      },

      location: {
        $near: {
          //perto
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          // Distance in meters
          $maxDistance: 10000, //10km
        },
      },
    });

    return res.json(consults);
  },
};
