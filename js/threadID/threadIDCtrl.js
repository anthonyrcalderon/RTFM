var app = angular.module('RTFM');

app.controller('threadIDCtrl', function($scope, threadsRef, $firebaseObject, commentsRef, $firebaseArray) {
	var thread = $firebaseObject(threadsRef);

	thread.$bindTo($scope, 'thread');

	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: username,
			text: text
		})
	}

});






