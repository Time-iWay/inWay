const socketio = require("socket.io");

const calculateDistance = require("./utils/calculateDistance");

// Connection
let io;

// "Save" each connection
const connections = [];

exports.setupWebsocket = (server) => {
  io = socketio(server);

  io.on("connection", (socket) => {
    const { latitude, longitude, perfil } = socket.handshake.query;

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      perfil,
    });
  });
};

exports.findConnections = (coordinates, perfil) => {
  return connections.filter((connection) => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 && perfil
    );
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach((connection) => {
    io.to(connection.id).emit(message, data);
  });
};
