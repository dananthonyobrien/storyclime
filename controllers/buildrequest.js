"use strict";

const logger = require("../utils/logger");
const buildRequestStore = require("../models/buildrequest-store");
const uuid = require("uuid");

const buildRequest = {
  index(request, response) {
    const buildRequestId = request.params.id;
    logger.debug("Build Request id = ", buildRequestId);
    const viewData = {
      title: "Build Request",
      buildrequest: buildRequestStore.getBuildRequest(buildRequestId)
    };
    response.render("buildrequest", viewData);
  },
  
    getCurrentBuildRequest(request) {
    const final = buildRequestStore.getUserBuildRequest(request);
    if (buildRequestStore.getUserBuildRequest(request).length > 0) {
      return buildRequestStore.getBuildRequest(final[final.length - 1].id);
    } else return null;
  }
};

module.exports = buildRequest;
