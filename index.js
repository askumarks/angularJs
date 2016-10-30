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
	.when('/broadcast-emit',{
		templateUrl:'templates/broadcast.html',
	})
	.when('/api',{
		templateUrl:'templates/api.html',
		controller: 'apiController'
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
				{'label':'Form','url':'#form'},
				{'label':'Broadcast & Emit','url':'#broadcast-emit'},
				{'label':'Rest Api','url':'#api'}
			]
		}
	}
});

app.directive('parentDiv', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/parent-div.html',
		controller: function($scope){
			$scope.counter = 0;
			$scope.msg = [];
			$scope.$on('childClick', function(event, data){
				$scope.counter +=1;
				$scope.msg.push($scope.counter + '. ' + data);
			})
		}
	}

});

app.directive('childDiv', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/child-div.html',
		controller: function($scope){
			$scope.bcounter = 0;
			$scope.click = function(){
				$scope.$emit('childClick', 'hi clicked');
			}
		}
	}

});

app.controller("apiController", function($scope, $http){
	$scope.posts = [];
	$http.get('posts.json').success(function(response){
		$scope.posts = response;
	});

});
app.controller("bindCtrl", function($scope){
	$scope.name = "Jobin Mathew";
	$scope.profession = "Developer";

});
app.controller("newc", function($scope){
	$scope.uname = "Jobin M";
	$scope.profession = "Developer";


});