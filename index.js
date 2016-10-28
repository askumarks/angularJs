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
	.when('/filters',{
		templateUrl : 'templates/filters.html',
		controller : "newc"
	})
	.when('/form',{
		templateUrl:'templates/form.html',
		controller:"formcontrol"
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
				{'label' : 'bindings', 'url' : '#binding'},
				{'label' : 'controllers', 'url' : '#contorllers'},
				{'label' : 'filters', 'url' : '#filters'},
				{'label':'Form','url':'#form'}
			]
		}
	}
});

app.controller("bindCtrl", function($scope){
	$scope.name = "Jobin Mathew";
	$scope.profession = "Developer";

});
app.controller("newc", function($scope){
	$scope.uname = "Jobin M";
	$scope.profession = "Developer";


});