"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(3)
    .then(
        (loadThemePark) => {
        	let frontierLand = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 1) {
                    frontierLand.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 3) {
                    frontierLand.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 5) {
                    frontierLand.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 7) {
                    frontierLand.push(loadThemePark[i]);
                }
            }

            let newDiv = $('<div id="modal3" class="modal">').html(card_modul(frontierLand));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;