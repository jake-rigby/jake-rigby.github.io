angular.module('Resume',['Resume.controllers','Resume.services'])

.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.when('/home' , {
		templateUrl : 'partials/home2.html', 
		controller : 'HomeController'
	});

	$routeProvider.when('/login' , {
		templateUrl : 'partials/login.html',
		controller : 'LoginController'
	});

	$routeProvider.otherwise({redirectTo:'/home'});

}])

.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})

.controller()

