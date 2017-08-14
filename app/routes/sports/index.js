"use strict";

// This is the Sports router. It handles these routes:
// GET /sports 		=> Retrive all sports
// GET /sports/<id> => Retrieve all events for a given sport
// -------------------------------------------------------------------------------------

// Create an instance of router
const sports = require('express').Router();

// Import Sports/Events router
const events = require('./events');

// Attach Sports/Events router to the Sports router
sports.use('/:sportId/events', events);

// Route handlers
const allSports = require('./all-sports');
const allEvents = require('./all-events');

// GET /sports
sports.get('/', allSports);

// GET /sports/<id>
sports.get('/:sportId', allEvents);

module.exports = sports;