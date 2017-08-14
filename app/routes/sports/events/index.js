"use strict";

// This is the Sports/Events router. It handles this route:
// GET /sports/<id>/events/<id>	=> Retrive all outcomes for a given event
// -------------------------------------------------------------------------------------

// Create an instance of router and merge parameters with its parent router.
const events = require('express').Router({ mergeParams: true });

// Route handler
const allOutcomes = require('./all-outcomes');

// GET /sports/<id>/events/<id>
events.get('/:eventId', allOutcomes);

module.exports = events;