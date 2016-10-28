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
		templateUrl : 'templates/filters.html',
		controller : "newc"
	})
	.when('/form',{
		templateUrl:'templates/form.html',
		controller:"formcontrol"
	})
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
	https://github.com/askumarks/angularJs.git	controller: function($scope){
			$scope.links = [
				{'label' : 'bindings', 'url' : '#binding'},
				{'label' : 'controllers', 'url' : '#controllers'},
				{'label' : 'controllers', 'url' : '#contorllers'},
				{'label' : 'filters', 'url' : '#filters'},
				{'label' : 'validation', 'url' : '#validation'}
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
app.controller("bindCtrl1", function($scope){
	$scope.name = "";

});

app.controller("bindCtrl2", function($scope){
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.email = "";
	$scope.phoneNumber = "";


});
