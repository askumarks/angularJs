var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/binding',{
		templateUrl : 'templates/binding.html',
		controller : "bindCtrl"
	})
	.when('/controllers',{
		templateUrl: 'templates/controllers.html'
	
	})
	.when('/filters',{
		templateUrl: 'templates/filters.html',
		controller : "bindCtrl1"

	})

	.when('/validation',{
		templateUrl: 'templates/validation.html',
		controller : "bindCtrl2"


	})
	.otherwise({
		templateUrl : 'templates/home.html'
	});
});

app.directive('quickLinks', function(){
	return {
		restrict: 'E',
		templateUrl: "templates/quicklinks.html",
		controller: function($scope){
			$scope.links = [
				{'label' : 'binding', 'url' : '#binding'},
				{'label' : 'controllers', 'url' : '#controllers'},
				{'label' : 'filters', 'url' : '#filters'},
				{'label' : 'validation', 'url' : '#validation'}
				
			]
		}
	}
});

app.controller("bindCtrl", function($scope){
	$scope.name = "aswanth";

});
app.controller("bindCtrl1", function($scope){
	$scope.name = "";

});

app.controller("bindCtrl2", function($scope){
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.phoneNumber = "";


});
