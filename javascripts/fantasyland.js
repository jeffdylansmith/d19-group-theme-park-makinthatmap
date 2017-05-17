"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(5)
    .then(
        (loadThemePark) => {
        	let fantasy = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 2) {
                    fantasy.push(loadThemePark[i]);
                    // console.log(adventureArray);
                }
            }

            let newDiv = $('<div id="modal5" class="modal">').html(card_modul(fantasy));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;