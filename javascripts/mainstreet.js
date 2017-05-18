"use strict";

let attractory = require('./attractory'),
	_ = require('lodash'),
	card_modul = require('../templates/card_modul.hbs'),
	utilities = require('./utilities');

attractory.loadParkAttraction(1)
	.then(
		(loadThemePark) => {
			let mainStreettArray = [];


			for (let i = 0; i < loadThemePark.length; i++) {
				if (loadThemePark[i].type_id === 2) {
					// loadThemePark[i].fansy = 'Restaurants';
					mainStreettArray.push(loadThemePark[i]);
				}
				if (loadThemePark[i].type_id === 1) {
					mainStreettArray.push(loadThemePark[i]);
				}
				if (loadThemePark[i].type_id === 6) {
					mainStreettArray.push(loadThemePark[i]);
				}
				if (loadThemePark[i].type_id === 8) {
					mainStreettArray.push(loadThemePark[i]);
				}

			}
			let modalData = utilities(mainStreettArray);

			let newDiv = $('<div id="modal1" class="modal modal-fixed-footer">').html(card_modul(modalData));
			console.log(utilities(mainStreettArray));
			$('#container').append(newDiv);
			$('.modal').modal();
		},

		(reject) => {
			console.log('ERROR');
		});





module.exports = attractory;