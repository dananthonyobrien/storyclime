"use strict";

const logger = require("../utils/logger");
const userStore = require("../models/user-store");
const uuid = require("uuid");

const user = {
  index(request, response) {
    const userId = request.params.id;
    logger.debug("Build Request id = ", userId);
    const viewData = {
      title: "User",
      user: userStore.getUser(userId)
    };
    response.render("user", viewData);
  },
};

module.exports = user;