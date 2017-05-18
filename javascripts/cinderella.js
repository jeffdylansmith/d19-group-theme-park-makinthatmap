"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs');

attractory.loadParkAttraction(7)
	.then(
        (loadThemePark) => {
        	let cinderella = [];
        	for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 2) {
                    cinderella.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 8) {
                    cinderella.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 3) {
                    cinderella.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 5) {
                    cinderella.push(loadThemePark[i]);
                }
            }

            let newDiv = $('<div id="modal7" class="modal">').html(card_modul(cinderella));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });



module.exports = attractory;