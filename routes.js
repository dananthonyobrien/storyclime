"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const buildRequest = require("./controllers/buildrequest.js")
const accounts = require('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get("/dashboard", dashboard.index);
router.post("/dashboard/addbuildrequest", dashboard.addBuildRequest);
router.get("/dashboard/deletebuildrequest/:id", dashboard.deleteBuildRequest);
router.get("/dashboard/listbuildrequests");


router.get("/about", about.index);



module.exports = router;
