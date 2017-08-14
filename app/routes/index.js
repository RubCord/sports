"use strict";

// This is the Main router
// Sports router is attached to the Main router
// -------------------------------------------------------------------------------------

// Create an instance of router
const routes = require('express').Router();

// Import Sports router
const sports = require('./sports');

// Attach Sports router to the Main router
routes.use('/sports', sports);

module.exports = routes;