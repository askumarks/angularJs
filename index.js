var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/binding',{
		templateUrl : 'templates/binding.html',
		controller : "bindCtrl"
	})
	.when('/expression',{
		templateUrl: 'templates/expression.html'
	
	})
	.when('/form',{
		templateUrl : 'templates/form.html',
		controller : "bindCtrl"
	})
	.when('/filter',{
		templateUrl : 'templates/filter.html',
		controller : "bindCtrl"
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
				{'label' : 'expression', 'url' : '#expression'},
				{'label' : 'form','url':'#form'},
				{'label' : 'filter','url':'#filter'}
			]

		}
	}
});
app.directive("passwordVerify", function() {
   return {
      require: "ngModel",
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
            var combined;

            if (scope.passwordVerify || ctrl.$viewValue) {
               combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
            }                    
            return combined;
        }, function(value) {
            if (value) {
                ctrl.$parsers.unshift(function(viewValue) {
                    var origin = scope.passwordVerify;
                    if (origin !== viewValue) {
                        ctrl.$setValidity("passwordVerify", false);
                        return undefined;
                    } else {
                        ctrl.$setValidity("passwordVerify", true);
                        return viewValue;
                    }
                });
            }
        });
     }
   };
});


app.controller("bindCtrl", function($scope){
	$scope.name = " ";
	$scope.pwd="";
	$scope.confirmpwd="";
	$scope.list= [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai' 
        ];
     $scope.price = 58;
   

});