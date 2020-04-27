const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://eduardoweschenfelder:weschenfelder@cluster0-exmx0.mongodb.net/iWay?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Olá mundo" });
});

app.listen(3003);
