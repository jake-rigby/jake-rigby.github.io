angular.module('bob',[
	
	'ngRoute',
	'ui.bootstrap',
	'angular-socketify',
	'jr-directives'
])

.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.when('/', {
		templateUrl : 'partials/home.html',
		controller : 'HomeController'
	});


	$routeProvider.otherwise({redirectTo:'/'});

}])