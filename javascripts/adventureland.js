"use strict";

let attractory = require('./attractory'),
    _ = require('lodash'),
    card_modul = require('../templates/card_modul.hbs');


attractory.loadParkAttraction(2)
    .then(
        (loadThemePark) => {
            let adventureArray = [];

            for (let i = 0; i < loadThemePark.length; i++) {
                if (loadThemePark[i].type_id === 5) {
                    adventureArray.push(loadThemePark[i]);
                    // console.log(adventureArray);
                }
                if (loadThemePark[i].type_id === 1) {
                    adventureArray.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 7) {
                    adventureArray.push(loadThemePark[i]);
                }
                if (loadThemePark[i].type_id === 4) {
                    adventureArray.push(loadThemePark[i]);
                }

            }

            let newDiv = $('<div id="modal2" class="modal">').html(card_modul(adventureArray));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;
