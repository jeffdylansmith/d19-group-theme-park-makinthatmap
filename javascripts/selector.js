'use strict';

let attractory = require('./attractory'),

	utilities = require('./utilities'),

selectDiv = '';

attractory.loadParkAttractionSelect()
	.then(
		(loadThemePark) => {

			$('#selectType').change(function() {
				// for (let i = 0; i < loadThemePark.length; i++) {
					let modalData = utilities(loadThemePark);

					if ($('#selectType option:selected').val() == 1) {
						for (let x in modalData.rides){
						selectDiv += `<p>${modalData.rides[x].name} </p>`;
						}

					} else if ($('#selectType option:selected').val() == 2) {
						for (let x in modalData.restaurants){
						selectDiv += `<p>${modalData.restaurants[x].name} </p>`;
						}
					}
				$('#select').html(selectDiv);
			});

		},

		(reject) => {
			console.log('ERROR');
		});


module.exports = attractory;


// let rideArray = [];
// 					if ($('#selectType option:selected').val() == loadThemePark.type_id) {
// 						rideArray
// 						selectDiv += `<div>${loadThemePark}</div>`;
// 					} else if ($('#selectType option:selected').val() == 2) {
// 						console.log('rest');
// 					}
// 					$('#select').html(selectDiv);