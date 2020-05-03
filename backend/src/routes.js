const { Router } = require("express");

const ConsultController = require("./controllers/ConsultController");
const InvestController = require("./controllers/InvestController");
const SearchConsultController = require("./controllers/SearchConsultController");
const SearchInvestController = require("./controllers/SearchInvestController");

const routes = Router();

// Get all consultores
routes.get("/consult", ConsultController.index);

// Post route to Add new consultores
routes.post("/consult", ConsultController.store);

// Get all investidores
routes.get("/invest", InvestController.index);

// Post route to Add new investidores
routes.post("/invest", InvestController.store);

// Search Concultores by tech and geolocation
routes.get("/searchConsult", SearchConsultController.index);

// Search Investidores by tech and geolocation
routes.get("/searchInvest", SearchInvestController.index);

module.exports = routes;
