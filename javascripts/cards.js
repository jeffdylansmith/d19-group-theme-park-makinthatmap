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
	$('#modal1').modal('open');

};

module.exports = cardStyle;