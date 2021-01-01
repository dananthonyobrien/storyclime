"use strict";

const logger = require("../utils/logger");
const accounts = require("./accounts.js");
const buildRequest = require("./buildrequest.js");
const buildRequestStore = require("../models/buildrequest-store");
//let currentEstimate;

const utility = {
  getUserCurrentEstimate(request) {
    const loggedInUser = request;
    //let estimate = 10;
    let estimate;
    let currentoverrun = 0;
    //let estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).estimatedCost;
    if (buildRequestStore.getUserBuildRequest(loggedInUser.id).length > 0) {
      estimate = buildRequest.getCurrentBuildRequest(loggedInUser.id).budget;
    } else estimate = 0;
    //return estimate;
    //let last =  buildRequestStore.getUserBuildRequest(loggedInUser.id).length - 1;
    //let estimate = buildRequestStore.getUserBuildRequest(loggedInUser.id)[last].estimatedCost;
    return estimate;
    return currentoverrun;
  },
  
 // isBear(request)
//{
 //   const loggedInUser = request;
  //  if (user.teddyType(loggedInUser.id)) == "bear" return true; 
  //  else return false;
    
//},
  
};
module.exports = utility;
