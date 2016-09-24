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
	
	});
}]);

myApp.controller( 'homeController', [ '$scope', '$http', function( $scope, $http ) {

	console.log('Home Controller');

}]);

myApp.controller( 'addController', [ '$scope', '$http', '$location', function( $scope, $http, $location ) {

	console.log( 'Add Pet Controller' );

	$scope.addPet = function( event ) {
		console.log( 'Run AddPet' );

		var petObj = {
			name : $scope.pet_name,
			age : $scope.pet_age,
			species : $scope.pet_type,
			image_url : $scope.pet_photo
		};

		$http({
			method: 'POST',
			url: '/pets',
			data: petObj
		}).then( function( result ) {

			console.log( 'Added!', result );

			$location.path( 'pets' );

		});

	};

	// $location.path( 'pets' ); // Change the location once the pet is added.

}]);

myApp.controller( 'viewController', [ '$scope', '$http', function( $scope, $http ) {

	console.log( 'View Pets Controller' );

	$scope.pets = [];

	$http({
		method: 'GET',
		url: '/pets'
	}).then( function( result ) {

		console.log( 'GET result', result );

		$scope.pets = result.data;

	});

}]);