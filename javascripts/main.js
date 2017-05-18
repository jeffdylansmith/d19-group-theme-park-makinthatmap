'use strict';
let Handlebars = require('hbsfy/runtime'),
	attractory = require('./attractory.js'),
	cardTemplate = require('../templates/card-template.hbs'),
	heading = require('../templates/heading_template.hbs'),
	footerTemplate = require('../templates/footer_template.hbs'),
	events = require('./events.js'),
	card_modul = require('../templates/card_modul.hbs'),
	_ = require('lodash');

Handlebars.registerHelper('type_value', (value) => {
	if (value == 1) {
		return 'Ride';
	} else if (value == 2) {
		return 'Restaurant';
	} else if (value == 3) {
		return 'Show';
	} else if (value == 4) {
		return 'Vendor';
	} else if (value == 5) {
		return 'Character Meet';
	} else if (value == 6) {
		return 'Animals';
	} else if (value == 7) {
		return 'Game';
	} else if (value == 8){
		return 'Special Event';
	}
});


Handlebars.registerHelper('if_eq', (a, b) => {
	if (a == b) {
		return true;
	} else {
		return false;
	}
});


function populatePage(e) {

	$('#container').html(cardTemplate(e));

	events();
}

function populateHeading(e) {
	let header = $('<header>');
	header.html(heading(e));
	$('#header').append(header);
}

function populateFooter() {
	let footer = $('<footer>');
	footer.html(footerTemplate());
	$('#footer').append(footer);
}

attractory.loadParkArea()
    .then(
        (loadThemePark) => {
            populatePage(loadThemePark);
        },
        (reject) => {
            console.log('ERROR');
        });

attractory.loadParkAttraction()
    .then(
        (loadThemePark) => {
        	events();
        },
        (reject) => {
            console.log('ERROR');
        });

attractory.loadParkAttractionTypes()
    .then(
        (loadThemePark) => {

        },
        (reject) => {
            console.log('ERROR');
        });

attractory.loadParkInfo()
    .then(
        (loadThemePark) => {
            populateHeading(loadThemePark);
            populateFooter(loadThemePark);
        },
        (reject) => {
            console.log('ERROR');
        });