angular.app(['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

})

.factory('Data', function ($q) {
	var deferred = $q.defer();
	$http.get('/data/data.json')
		.success(function (data, status, headers, config) {
			try {
				data = JSON.parse(data);
			} catch (e) {
				deferred.reject(e);
			}
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config) {
			deferred.reject(e);
		})
	return deferred.promise;
})