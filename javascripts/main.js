'use strict';
let Handlebars = require('hbsfy/runtime'),
	parkInventory = require('./attractory.js'),
	cardTemplate = require('../templates/card-template.hbs'),
	heading = require('../templates/heading_template.hbs'),
	footerTemplate = require('../templates/footer_template.hbs'),
	events = require('./events.js'),
	_ = require('lodash');

Handlebars.registerHelper('increment', (value) => parseInt(value) + 1);

function populatePage(stuff) {
	$('#container').html(cardTemplate(stuff));
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

parkInventory.loadParkArea()
    .then(
        (loadThemePark) => {
            // console.log('Park Area', loadThemePark);
            populatePage(loadThemePark);
        },
        (reject) => {
            console.log('ERROR');
        });

parkInventory.loadParkAttraction()
    .then(
        (loadThemePark) => {
            // console.log('Park Attraction', loadThemePark);
            // var times = _.groupBy(loadThemePark, 'times');
            // console.log(times);

        },
        (reject) => {
            console.log('ERROR');
        });

parkInventory.loadParkAttractionTypes()
    .then(
        (loadThemePark) => {
            // console.log('Park Attraction Types', loadThemePark);

        },
        (reject) => {
            console.log('ERROR');
        });

parkInventory.loadParkInfo()
    .then(
        (loadThemePark) => {
            // console.log('Park Info', loadThemePark);
            populateHeading(loadThemePark);
            populateFooter(loadThemePark);
        },
        (reject) => {
            console.log('ERROR');
        });