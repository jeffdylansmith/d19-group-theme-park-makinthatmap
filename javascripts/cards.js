"use strict";

let card_modul = require('../templates/card_modul.hbs');
let cardStyle = {};

cardStyle.highlightCard = function(event) {

	var cakeCards = document.getElementsByClassName("is-clicked");

	if (cakeCards.length > 0) {
		for (var i = 0; i < cakeCards.length; i++ ) {
			$(cakeCards[i]).removeClass("is-clicked");

		}
	}

	var card = event.target.closest(".card-wrapper");

	card.classList.add("is-clicked");

	if (card.id == 'card0') {
		$('#modal1').modal('open');
	} else if (card.id == 'card1') {
		$('#modal2').modal('open');
	} else if (card.id == 'card2') {
		$('#modal3').modal('open');
	} else if (card.id == 'card3') {
		$('#modal4').modal('open');
	} else if (card.id == 'card4') {
		$('#modal5').modal('open');
	} else if (card.id == 'card5') {
		$('#modal6').modal('open');
	} else if (card.id == 'card6') {
		$('#modal7').modal('open');
	} else {
		console.log('card not found');
	}





};

module.exports = cardStyle;