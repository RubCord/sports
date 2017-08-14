"use strict";

// This is a router handler for this route:
// GET /sports => Retrive all sports
// -------------------------------------------------------------------------------------

const utils = require('../../utils');

module.exports = (req, res) => {
  // Retrieve all sports
  utils.allSports()
  .then(
 		(data) => {  			
	        // Remove events
            data.forEach((element) => {
                delete element.events;
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