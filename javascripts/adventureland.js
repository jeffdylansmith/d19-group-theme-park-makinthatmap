"use strict";

let attractory = require('./attractory');

attractory.loadParkAttraction(2)
    .then(
        (loadThemePark) => {
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;