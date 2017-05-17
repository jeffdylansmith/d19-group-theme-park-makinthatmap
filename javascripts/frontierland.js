"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(3)
    .then(
        (loadThemePark) => {
        	let frontierLand = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 2) {
                    frontierLand.push(loadThemePark[i]);
                    // console.log(adventureArray);
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