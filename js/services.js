'use strict';



var services = angular.module('Resume.services',[]);
//var servicesRoot = 'http://localhost:1130'; // <-- dev
var servicesRoot = ''; // <-- web deploy (remember to add the URL environment variable in modulus)
//var servicesRoot = 'http://dealer-8930.onmodulus.net'; // <-- harcode for phonegap, once you have the service url
	


services.factory('UserService',['$http','$rootScope',function($http,$rootScope){
	var user = null;
	var service = {
		getLoginStatus : function(){
			return user != null;
		},
		getUser : function(){
			return user;
		},
		loginGoogle : function(){
			$http({method: 'GET', url: servicesRoot+'/user'})
			.success(function(data, status){
				if (status == 200) {
					user = data; 
					$rootScope.$broadcast('userUpdated',user);
				}
				else user = null; // 401
			})
			.error(function(data, status){
				console.log('login failed: '+status);
			})
		},
		logout : function(){
			user = null;
			$rootScope.$broadcast('userUpdated',user);
		}
	}
	service.loginGoogle(); // <-- attempt to get user straight off the bat
	return service;
}]);



services.factory('socket.io',['$http','$rootScope',function($http,$rootScope){
	
	var socket = io.connect(servicesRoot);

	var service = {};

	socket.on('connect',function(data){
		console.log('socket connected');
		socket.emit('getSMS');	
	});

	socket.once('disconnect', function(){
		console.log('socket disconnected by server');
	});

	return service;
}])