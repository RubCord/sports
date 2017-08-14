"use strict";

// Connect all routes to the Main router
// Run the web server
// -------------------------------------------------------------------------------------

// Import dependencies
const app = require('express')();
const settings = require('./settings');
const routes = require('./routes');
const port = process.env.PORT || settings.port;
const cache = require('apicache').middleware;

// Caching all routes
app.use(cache('10 minutes'))

// Connect all routes to the Main router
app.use('/', routes);

// Run the web server
app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});

module.exports = app // Used by Mocha