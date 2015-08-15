var app = angular.module('RTFM');

app.controller('mainCtrl', function($scope, threadsService) {
	$scope.ctrlMsg = "Hello World"

	$scope.register = function() {
		threadsService.register($scope.newUser);
	}

	$scope.logIn = function() {

	}
});