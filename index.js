var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/binding',{
		templateUrl : 'templates/binding.html',
		controller : "bindCtrl"
	})
	.when('/contorllers',{
		templateUrl: 'templates/controllers.html'

	
	})
	.when('/validators',{
		templateUrl: 'templates/form.html'
		
	
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
				{'label' : 'controllers', 'url' : '#contorllers'},
				{'label': 'validators' , 'url':'#validators'}
			]
		}
	}
});

app.controller("bindCtrl", function($scope){
	$scope.name = "aswanth";

});