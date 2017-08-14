"use strict";

// Library will all API calls
// -------------------------------------------------------------------------------------

const url = require('../settings').url;
const request = require('request');

//-------------------------------------------------------------------------------------

// Sort json by key   
var sortOrder = (key) => {    
    return (a, b) => {  
        if (a[key] > b[key]) {  
            return 1;  
        } else if (a[key] < b[key]) {  
            return -1;  
        }  
        return 0;  
    }  
};

//-------------------------------------------------------------------------------------

// Execute an HTTP request
var executeRequest = (url) => {
    return new Promise(
        (resolve, reject) => {    
            request(
                {
                    url,
                    json: true
                }, 
                (err, res, data) => {
                    if (res.statusCode === 200 && !err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                }
            );
        }
    );
};

//-------------------------------------------------------------------------------------

// List all sports
var allSports = () => {
    return new Promise(
        (resolve, reject) => {
            executeRequest(url)
            .then(
                (data) => {
                    const sports = data.sports;

                    if (sports) {
                        // Order by "pos" key
                        sports.sort(sortOrder('pos'));

                        resolve(sports);
                    } else {
                        reject('No sports were found');
                    }
                }
            )
            .catch(
                (err) => {
                    reject(err);
                }
            );
        }
    );
};

module.exports.allSports = allSports;

//-------------------------------------------------------------------------------------

// List all events under a particular sport
var allEventsBySport = (sportId) => {
    return new Promise(
        (resolve, reject) => { 

            allSports()
            .then(
                (data) => {                
                    const sport = data.find(s => s.id === sportId);

                    if (sport) {                        
                        const events = sport.events;
                        
                        if (events) {
                            // Order by "pos" key
                            events.sort(sortOrder('pos'));

                            resolve(events);
                        } else {
                            reject('No events found'); 
                        }

                    } else {
                        reject(`No sport with id = ${sportId} found`);
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            );
        }
    );
};

module.exports.allEventsBySport = allEventsBySport;

//-------------------------------------------------------------------------------------

// List all outcomes under a particular event
module.exports.allOutcomesByEvent = (sportId, eventId) => {
    return new Promise(
        (resolve, reject) => {

            allEventsBySport(sportId)
            .then(
                (data) => {
                    const event = data.find(e => e.id === eventId);                    

                    if (event) {                        
                        const outcomes = event.outcomes;
                        
                        if (outcomes) {
                            resolve(outcomes);
                        } else {
                            reject('No outcomes found'); 
                        }

                    } else {
                        reject(`No event with id = ${eventId} found`);
                    }
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            );

        }
    );
};


