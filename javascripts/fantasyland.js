"use strict";

let attractory = require('./attractory'),
	card_modul = require('../templates/card_modul.hbs'),
    utilities = require('./utilities');

attractory.loadParkAttraction(5)
    .then(
        (loadThemePark) => {
            let modalData = utilities(loadThemePark);
            let newDiv = $('<div id="modal5" class="modal modal-fixed-footer">').html(card_modul(modalData));
            $('#container').append(newDiv);
            $('.modal').modal();
        },

        (reject) => {
            console.log('ERROR');
        });

module.exports = attractory;