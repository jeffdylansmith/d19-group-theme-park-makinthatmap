"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(6)
    .then(
        (loadThemePark) => {
        	let tomorrow = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 2) {
                    tomorrow.push(loadThemePark[i]);
                    // console.log(adventureArray);
                }
            }

            let newDiv = $('<div id="modal6" class="modal">').html(card_modul(tomorrow));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;