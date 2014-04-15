'use strict';



var services = angular.module('Resume.services',[]);
//var servicesRoot = 'http://localhost:1130'; // <-- dev
var servicesRoot = ''; // <-- web deploy (remember to add the URL environment variable in modulus)
//var servicesRoot = 'http://dealer-8930.onmodulus.net'; // <-- harcode for phonegap, once you have the service url