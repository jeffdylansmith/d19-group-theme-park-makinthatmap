'use strict';
let Handlebars = require('hbsfy/runtime'),
	parkInventory = require('./attractory.js'),
	cardTemplate = require('../templates/card-template.hbs');

Handlebars.registerHelper('increment', (value) => parseInt(value) + 1);

function populatePage(stuff) {
	let newDiv = document.createElement('div');
	newDiv.innerHTML = cardTemplate(stuff);
	$('#container').append(newDiv);
	// eventStuff();
}

parkInventory.loadInventory()
    .then(
        (loadThemePark) => {
            console.log('theme-Park', loadThemePark);
            populatePage(loadThemePark);
        },
        (reject) => {
            console.log('ERROR');
        });
