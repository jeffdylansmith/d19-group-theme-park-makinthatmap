'use strict';

let themePark = [];
let park = {};

park.loadInventory = () => {
    return new Promise((resolve, reject) => {
        let loader = new XMLHttpRequest();
        loader.open('GET', 'https://mappy-5d13f.firebaseio.com/.json');
        loader.send();

        loader.addEventListener('load', function() {
            var data = JSON.parse(this.responseText);
            themePark = data;
            resolve(data);
        });
    });
};

module.exports = park;