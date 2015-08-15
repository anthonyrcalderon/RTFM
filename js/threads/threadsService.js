var app = angular.module('RTFM');

app.service('threadsService', function($http, $firebaseObject, $firebaseAuth, fb) {

	var firebaseRef = new Firebase(fb.url)

	this.getThreads = function() {
		return new Firebase(fb.url + '/threads')
	}

	this.getThread = function(threadID) {
		return new Firebase(fb.url + '/threads/' + threadID);
	};

	this.getComments = function(threadID) {
		return new Firebase(fb.url + '/threads/' + threadID + '/comments');
	};


	this.register = function(user) {
		var authRef = new Firebase (fb.url + '/users');
		var authObject = $firebaseAuth(authRef);
		authObject.$createUser({
			email: user.email,
			password: user.password
		})
	}
});



/*
FIREBASE

$firebaseAuth
$createUser()			!	Create new user
$authWithPassword({}, cb())		!	Log In using email/password
$unAuth()					Log out
$getAuth()					
$onAuth()					
$authWithOAuthPopup()		creates popup for 3rd party auth
$authWithOAuthRedirect()	redirects to page for auth then redirects back

*/