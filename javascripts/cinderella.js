"use strict";

let attractory = require('./attractory');

attractory.loadParkAttraction(7)
	.then(
        (loadThemePark) => {
        	// console.log(loadThemePark);
        },

        (reject) => {
            console.log('ERROR');
        });



module.exports = attractory;