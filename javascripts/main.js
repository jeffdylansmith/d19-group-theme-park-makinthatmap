'use strict';
let Handlebars = require('hbsfy/runtime'),
	attractory = require('./attractory.js'),
	cardTemplate = require('../templates/card-template.hbs'),
	heading = require('../templates/heading_template.hbs'),
	footerTemplate = require('../templates/footer_template.hbs'),
	events = require('./events.js'),
	card_modul = require('../templates/card_modul.hbs'),
	_ = require('lodash');

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

attractory.loadParkAttractionSelect()
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