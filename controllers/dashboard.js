"use strict";

const logger = require("../utils/logger");
const buildRequestStore = require("../models/buildrequest-store");
const uuid = require("uuid");
const accounts = require("./accounts.js");
const userStore = require("../models/user-store");
const utility = require("./utility.js");
let currentEstimate;

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    //const user = userStore.getUserById(request.params.id);
    const viewData = {
      title: "Dashboard",
      user: userStore.getUserById(loggedInUser.id),
    };
    logger.info("about to render", buildRequestStore.getAllBuildRequests());
    response.render("dashboard", viewData);
  }
    
};
 
module.exports = dashboard;
