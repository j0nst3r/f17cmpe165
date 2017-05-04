angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			template: '<home></home>'
		})

		.when('/login',{
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		
		.when('/login/:id',{
			templateUrl: 'views/redirection.html',
			controller: 'LoginController'
		})
  
		.when('/registration', {
			template: '<registrationform></registrationform>'
		})
		
		.when('/notification', {
			templateUrl: 'views/notification.html',
			controller: 'NotificationController'	
		})
		
		.when('/account/:id?', {
			template: '<accountmanager></accountmanager>',
		})
		
		.when('/launches', {
			template: '<home></home>'
		})

		.when('/create-launch', {
			template: '<create-launch></create-launch>'
		})
		
		
		.when('/launch-board/:userId?', {
			template: '<launch-board user-id="$resolve.userId"></launch-board>',
			resolve: {
				userId: ['$route', function ($route) {
					return $route.current.params.userId
				}]
			}
		})

		.when('/view/:launchId', {
			template: '<social-share launch-id="$resolve.launchId"></social-share>',
			resolve: {
				userId: ['$route', function ($route) {
					return $route.current.params.launchId
				}]
			}
		})
		
	$locationProvider.html5Mode(true);

}]);