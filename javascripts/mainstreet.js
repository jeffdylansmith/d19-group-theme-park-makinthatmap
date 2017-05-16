"use strict";

let attractory = require('./attractory');

attractory.loadParkAttraction(1)
	.then(
        (loadThemePark) => {

        },

        (reject) => {
            console.log('ERROR');
        });



module.exports = attractory;