"use strict";

// This is a router handler for this route:
// GET /sports/<id> => Retrieve all events for a given sport
// -------------------------------------------------------------------------------------

const utils = require('../../utils');

module.exports = (req, res) => {
  // Retrieve all events for a given sport
  const sportId = parseInt(req.params.sportId); // Convert string to number

  utils.allEventsBySport(sportId)
  .then(
 		(data) => {  
            // Remove outcomes
            data.forEach((element) => {
                delete element.outcomes;
            });			
  			res.status(200).json(data);
 		}
  )
  .catch(
  		(err) => {
			res.status(500).json({ err });
  		}
  );
};