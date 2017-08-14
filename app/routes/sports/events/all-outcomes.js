"use strict";

// This is a router handler for this route:
// GET /sports/<id>/events/<id> => Retrieve all outcomes for a given event
// -------------------------------------------------------------------------------------

const utils = require('../../../utils');

module.exports = (req, res) => {
  // Retrieve all outcomes for a given event
  const sportId = parseInt(req.params.sportId); // Convert string to number
  const eventId = parseInt(req.params.eventId); // Convert string to number
  
  utils.allOutcomesByEvent(sportId, eventId)
  .then(
 		(data) => {  			
  			res.status(200).json(data);
 		}
  )
  .catch(
  		(err) => {
			res.status(500).json({ err });
  		}
  );
};