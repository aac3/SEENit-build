var movieApi = angular.module('MovieApi', [])

movieApi.controller('CoreController', function ($scope ){
	var ref = new Firebase("https://seenit.firebaseio.com/");

	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		if (error) {
			console.log("errored", error);
			return;
		}
	});	

	$scope.signup = function() {

		auth.createUser($scope.email, $scope.password, function(error, user) {
			if (!error) {
			    console.log('User Id: ' + user.id + ', Email: ' + user.email);
			} else {
				console.log("Messed up", error);
			}
		});
	}
	
	$scope.login = function() {
		
		auth.login('password', { 
			email: $scope.email, 
			password: $scope.password 
			
		});
		
		
		 auth = new FirebaseSimpleLogin(ref, function(error, user) {
		  if (error) {
		    // an error occurred while attempting login
		    console.log(error);
		  } else if (user) {
		    // user authenticated with Firebase
		    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
		  } else {
		    // user is logged out
		  }
		});
		
	}
	
	$scope.logout = function() {
    auth.logout();
    }
    
   movieApi.controller('userProfile', function ($scope){
	   
	   var ref = new Firebase("https://seenit.firebaseio.com/");
	   
	   
   })
	
/*
	}
	auth.initialize(ref, {scope: $scope, name: "user"});
	$scope.signup = function() {
		auth.createUser($scope.username, $scope.email, $scope.password);
	};
*/

});




 


/*
function MyController($scope, angularFireAuth) {
var ref = new Firebase("https://seenit.firebaseio.com/");
  angularFireAuth.initialize(ref, {scope: $scope, name: "user"});
  $scope.signup = function() {
	  console.log("Working - " + $scope.username + " - " + $scope.email + " - " + $scope.password)
	 // AngularFireAuth.createUser($scope.username, $scope.email, $scope.password);
  };
}
*/