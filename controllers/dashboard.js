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
      buildrequest: buildRequestStore.getUserBuildRequest(loggedInUser.id),
      user: userStore.getUserById(loggedInUser.id),
      estimate: utility.getUserCurrentEstimate(loggedInUser.id),
      currentoverrun: utility.getUserCurrentEstimate(loggedInUser.id)
      //currentestimate: userStore.getCurrentestimate(user),
    };
    logger.info("about to render", buildRequestStore.getAllBuildRequests());
    response.render("dashboard", viewData);
  },

  addBuildRequest(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newBuildRequest = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      type: request.body.type,
      size: request.body.size,
      finish: request.body.finish,
      garage: request.body.garage,
      patio: request.body.patio,
      addinfo: request.body.addinfo,
      budget: request.body.budget
    };

    logger.debug("Creating a new Build Request", newBuildRequest);
    buildRequestStore.addBuildRequest(newBuildRequest);
    response.redirect("/dashboard");
  },

  deleteBuildRequest(request, response) {
    const buildRequestId = request.params.id;
    logger.debug(`Deleting build request ${buildRequestId}`);
    buildRequestStore.removeBuildRequest(buildRequestId);
    response.redirect("/dashboard");
  },

  getCurrentEstimate(request, response) {
    const buildRequestId = request.params.id;
    buildRequestStore.length;
    //currentEstimate = buildRequest.estimatedCost[buildRequest.length];
  
  }
  };

  
  // Your web app's Firebase configuration
 // const firebaseConfig = {
 //   apiKey: "AIzaSyC7yH3nNRQ2ttLxn10kPY93UkrgaJPaLac",
 //   authDomain: "storyclime.firebaseapp.com",
 //   databaseURL: "https://storyclime.firebaseio.com",
 //   projectId: "storyclime",
 //   storageBucket: "storyclime.appspot.com",
  //  messagingSenderId: "369261143174",
 //   appId: "1:369261143174:web:d5795200e0a5c61ab5dd07",
 //   measurementId: "G-D1NH43P9CQ"
//};

//firebase.initializeApp(firebaseConfig);

// Get a reference to the file storage service
//const storage = firebase.storage();
// Get a reference to the database service
//const database = firebase.database();

// Create camera database reference
//const camRef = database.ref("file");

// Sync on any updates to the DB. THIS CODE RUNS EVERY TIME AN UPDATE OCCURS ON THE DB.
//camRef.limitToLast(1).on("value", function(snapshot) {
  //snapshot.forEach(function(childSnapshot) {
   // const image = childSnapshot.val()["image"];
   // const time = childSnapshot.val()["timestamp"];
   // const storageRef = storage.ref(image);

   // storageRef
   //   .getDownloadURL()
   //   .then(function(url) {
   //     console.log(url);
   //     document.getElementById("photo").src = url;
   //     document.getElementById("time").innerText = time;
   //   })
  //    .catch(function(error) {
  //      console.log(error);
 //     });
 // });
//});
//};

//Use switch instead, but you get the idea. Tidy this and follow Finnerty on info passing from back end to front. Copy.
//randomMarsFact(request, response){
//  if (Math.floor(Math.random() * 6)) = 1{
 //   return "Did you know Mars is the third biggest planet?"
 // }
 // else if (Math.floor(Math.random() * 6)) = 2) {
  //  return "Temperatures in Mars can drop to more than -100 Celsius!"
  //}

//}

module.exports = dashboard;
