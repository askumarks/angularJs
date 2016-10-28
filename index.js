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
	.when('/validation',{
		templateUrl: 'templates/validation.html'
	
	})
	.when('/filter',{
		templateUrl: 'templates/filter.html',
		controller : 'filterCtrlr'
	
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
				{'label' : 'Binding', 'url' : '#binding'},
				{'label' : 'Controllers', 'url' : '#contorllers'},
				{'label' : 'Validation', 'url': '#validation'},
				{'label' : 'Filter', 'url': '#filter'}
			]
		}
	}
});

app.controller("bindCtrl", function($scope){
	$scope.name = "Rony & AK";

});
app.controller("filterCtrlr", function($scope){
	$scope.names=[
		{fName:"Anantha",lName:"Krishnan"},
		{fName:"Rony",lName:"Samuel"},
		{fName:"Midhun",lName:"George"},
		{fName:"Jobin",lName:"Mathew"},
		{fName:"Nabeel",lName:"Thalakkat"},
		{fName:"Antu",lName:"Kuriakose"},
		{fName:"Keerthi",lName:"Nair"},
		{fName:"Asita",lName:"Raju"},
		{fName:"Anju",lName:"Antony"},

	];
	$scope.price = 0;

	$scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
    $scope.convert = function(y) {
    	$scope.myNum = parseInt(y);
    }
 
});