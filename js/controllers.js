'use strict';

angular.module('Resume.controllers',['leaflet-directive'])

// Home Screen
.controller('HomeController',['$scope',function($scope){
	// stub
	$scope.gears = [
		{title:'Javascript',icon:'',label:'js'},
		{title:'HTML',icon:'html5',label:''},
		{title:'Flash',icon:'',label:'as3'},
		{title:'Air',icon:'gear'},
		{title:'redis',icon:'gear'},
		{title:'node.js',icon:'gear',label:'js'},
		{title:'socket.io',icon:'gear'},
		{title:'Bootstrap',icon:'css3'},
		{title:'express',label:'njs'},
		{title:'angular.js',label:'js'},
		{title:'Robotlegs',label:'as3'},
		{title:'Flex',label:'as3'}//,
		//{title:'Starling',label:'as3'},
		//{title:'Feathers',label:'as3'}
	]
}])


// Login Partial
.controller('LoginController',['$scope','UserService',function($scope,UserService){
	$scope.user = UserService.getUser();
	$scope.$on('userUpdated',function(event,user){
		$scope.user = user;
	})
	$scope.login = function(){
		UserService.loginGoogle();
	}
	$scope.logout = function(){
		UserService.logout();
	}
}])

