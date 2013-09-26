var movieApi = angular.module('MovieApi', ['ngResource'])

movieApi .config(function ($routeProvider) {
		$routeProvider
			.when('/search', 
			{
				templateUrl: "Partials/searchBox.html",	
				controller: 'MovieController'
			})
			.when('/details/:id',
			{
				templateUrl: "Partials/details.html",
				controller: "MovieInfo"	
			})
			.otherwise({redirectTo: '/'});
});

movieApi.controller('MovieController', function ($scope, $resource, $location){
		$scope.movieTrak = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?',
				{   
					apikey:'ca98y5v5vx2awy5fegbn9ars', 
					callback:'JSON_CALLBACK',
					page_limit: '8' 
				},
				{get:{method:'JSONP'}}
				);
		
		$scope.searchMovie = function () {
			$scope.movieList = $scope.movieTrak.get({q:$scope.movieTitle});
		}
		
		$scope.setRoute = function(route){
			$location.path(route);
		}
		
});

movieApi.controller('MovieInfo', function ($scope, $resource, $routeParams, $location){
	
	$scope.movieInfo = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies/:id.json',
			{
				 
				apikey:'ca98y5v5vx2awy5fegbn9ars', 
				callback:'JSON_CALLBACK'
			},
			{get:{method:'JSONP'}}
	);
	
	$scope.movieId = $routeParams.id;
	
	$scope.movieResult = $scope.movieInfo.get({id:$scope.movieId});
	
	console.log($scope.movieId)
});
