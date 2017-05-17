"use strict";

let attractory = require('./attractory'),
	_ = require('lodash'),
	card_modul = require('../templates/card_modul.hbs');


attractory.loadParkAttraction(1)
	.then(
		(loadThemePark) => {
			let mainStreetArray = [];

			for (let i = 0; i < loadThemePark.length; i++) {
				if (loadThemePark[i].type_id === 2) {
					mainStreetArray.push(loadThemePark[i]);
					console.log(mainStreetArray);
				}
			}
			// card_modul(mainStreetArray);
			let newDiv = $('<div id="modal1" class="modal">').html(card_modul(mainStreetArray));
			$('#container').append(newDiv);
			$('.modal').modal();
		},

		(reject) => {
			console.log('ERROR');
		});

module.exports = attractory;