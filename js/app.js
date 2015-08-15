var app = angular.module('RTFM', ['firebase', 'ngRoute']);

app.constant('fb', {
	url: 'https://arcrealtimeforum.firebaseio.com/'
})

app.config(function($routeProvider) {
	$routeProvider
		.when('/threads', {
			templateUrl: 'js/threads/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadsService) {
					return threadsService.getThreads();
				}
			}
		})
		.when('/threads/:threadID', {
			templateUrl: 'js/threadID/threadID.html',
			controller: 'threadIDCtrl',
			resolve: {
				threadsRef: function(threadsService, $route) {
					return threadsService.getThread($route.current.params.threadID);
				},
				commentsRef: function(threadsService, $route) {
					return threadsService.getComments($route.current.params.threadID);
				}
			}
		})
		.otherwise({
			redirectTo: '/threads'
		})

});