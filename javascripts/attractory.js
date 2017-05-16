'use strict';

let parkArea = [],
	parkAttraction = [],
	parkAttractionTypes =[],
	park = {};

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

            for(let i = 0; i < parkAttraction.length; i++) {
        		if(parkAttraction[i].area_id == area) {
        			// console.log(parkAttraction[i]);
        		}
        	}
            resolve(data);
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
            parkAttractionTypes = data;
            resolve(data);
        });
    });
};


module.exports = park;