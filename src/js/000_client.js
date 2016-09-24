var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/about.htm",
        controller: 'homeController'
      }).
      when("/add", {
        templateUrl: "/views/add.htm",
        controller: 'addController'
      }).
      when("/pets", {
        templateUrl: "/views/pets.htm",
        controller: 'viewController'
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);

myApp.controller( 'homeController', [ '$scope', function( $scope ) {

	console.log('Home Controller');

}]);

myApp.controller( 'addController', [ '$scope', '$location', function( $scope, $location ) {

	console.log( 'Add Pet Controller' );

	// $location.path( 'pets' ); // Change the location once the pet is added.

}]);

myApp.controller( 'viewController', [ '$scope', function( $scope ) {

	console.log( 'View Pets Controller' );

}]);