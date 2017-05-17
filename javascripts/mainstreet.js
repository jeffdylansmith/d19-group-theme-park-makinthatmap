"use strict";

let attractory = require('./attractory'),
	_ = require('lodash'),
	card_modul = require('../templates/card_modul.hbs');


attractory.loadParkAttraction(1)
	.then(
		(loadThemePark) => {
			let mainStreettArray = [];

			for (let i = 0; i < loadThemePark.length; i++) {
				if (loadThemePark[i].type_id === 2) {
					mainStreettArray.push(loadThemePark[i]);
				}

			}
			// card_modul(mainStreetArray);
			let newDiv = $('<div id="modal1" class="modal">').html(card_modul(mainStreettArray));
			$('#container').append(newDiv);
			$('.modal').modal();
		},

		(reject) => {
			console.log('ERROR');
		});





module.exports = attractory;