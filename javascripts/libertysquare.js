"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(4)
    .then(
        (loadThemePark) => {
        	let libertySquare = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 2) {
                    libertySquare.push(loadThemePark[i]);
                    // console.log(adventureArray);
                }
            }

            let newDiv = $('<div id="modal4" class="modal">').html(card_modul(libertySquare));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;