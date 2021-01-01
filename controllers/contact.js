"use strict";

const logger = require("../utils/logger");

const contact = {
  index(request, response) {
    logger.info("contact rendering");
    const viewData = {
      title: "Contact",
    };
    response.render("contact", viewData);
  },
};

module.exports = contact;
