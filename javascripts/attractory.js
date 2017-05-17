'use strict';

let parkArea = [],
    parkAttraction = [],
    parkAttractionTypes = [],
    park = {};

// let timeConvert = require('./timeconverter.js');

park.loadParkArea = () => {
    return new Promise((resolve, reject) => {
        let loader = new XMLHttpRequest();
        loader.open('GET', 'https://mappy-5d13f.firebaseio.com/areas.json');
        loader.send();

        loader.addEventListener('load', function() {
            var data = JSON.parse(this.responseText);
            parkArea = data;
            resolve(data);
        });
    });
};

park.loadParkAttraction = (area) => {
    return new Promise((resolve, reject) => {
        let loader = new XMLHttpRequest();
        loader.open('GET', 'https://mappy-5d13f.firebaseio.com/attractions.json');
        loader.send();

        loader.addEventListener('load', function() {
            var data = JSON.parse(this.responseText);
            parkAttraction = data;
            let array = [];


			for (let i = 0; i < parkAttraction.length; i++) {
				// let times = [];
				// times = parkAttraction[i].times;
				// timesNumber = parseInt(times);


                if (parkAttraction[i].area_id === area) {
                    array.push(parkAttraction[i]);
                }
            }
            resolve(array);

        });
    });
};

park.loadParkAttractionTypes = () => {
    return new Promise((resolve, reject) => {
        let loader = new XMLHttpRequest();
        loader.open('GET', 'https://mappy-5d13f.firebaseio.com/attraction_types.json');
        loader.send();

        loader.addEventListener('load', function() {
            var data = JSON.parse(this.responseText);
            parkAttractionTypes = data;
            resolve(data);
        });
    });
};

park.loadParkInfo = () => {
    return new Promise((resolve, reject) => {
        let loader = new XMLHttpRequest();
        loader.open('GET', 'https://mappy-5d13f.firebaseio.com/park-info.json');
        loader.send();

        loader.addEventListener('load', function() {
            var data = JSON.parse(this.responseText);
            park = data;
            resolve(data);
        });
    });
};


module.exports = park;
