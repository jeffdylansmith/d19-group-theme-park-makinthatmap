"use strict";

module.exports = function getModalData(array) {
 var attractions = array;
 return {
   rides: attractions.filter(attraction => {
     return attraction.type_id === 1;
   }),
   restaurants: attractions.filter(attraction => {
     return attraction.type_id === 2;
   }),
   shows: attractions.filter(attraction => {
     return attraction.type_id === 3;
   }),
   vendor: attractions.filter(attraction => {
     return attraction.type_id === 4;
   }),
   characters: attractions.filter(attraction => {
     return attraction.type_id === 5;
   }),
   animals: attractions.filter(attraction => {
     return attraction.type_id === 6;
   }),
   games: attractions.filter(attraction => {
     return attraction.type_id === 7;
   }),
   events: attractions.filter(attraction => {
     return attraction.type_id === 8;
   }),
 };
};