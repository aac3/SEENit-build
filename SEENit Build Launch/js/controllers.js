var movieApi = angular.module('MovieApi', ['ngResource'])

movieApi .config(function ($routeProvider) {
			$routeProvider
				.when('/', 
				{
					templateUrl:'Partials/posters.html', 
					controller:'BoxOfficeCtrl'
				})
				.otherwise({redirectTo: '/'});
});

movieApi.controller('BoxOfficeCtrl', function ($scope, $resource){
	$scope.box_office = $resource('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json',
			{
				apikey:'ca98y5v5vx2awy5fegbn9ars', 
				limit:'4', 
				callback:'JSON_CALLBACK'},
			{
			get:{method:'JSONP'}});
	
	$scope.boxResult = $scope.box_office.get();
});

