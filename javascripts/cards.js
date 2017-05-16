"use strict";

let cardStyle = {};

cardStyle.highlightCard = function(event) {

  var cakeCards = document.getElementsByClassName("is-clicked");

  if (cakeCards.length > 0) {
    for (var i = 0; i < cakeCards.length; i++ ) {
    	let div = '';

      $(cakeCards[i]).removeClass("is-clicked");
    }
  }

  var card = event.target.closest(".card-wrapper");

  card.classList.add("is-clicked");

};

module.exports = cardStyle;