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
	when("/submit", {
		templateUrl: "/views/add_finish.htm"
	}).
	when("/pets", {
		templateUrl: "/views/pets.htm",
		controller: 'viewController'
	}).
	otherwise({
		redirectTo: "/home"
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

			$location.path( 'submit' ); 
		});
	};
}]);

myApp.controller( 'viewController', [ '$scope', '$http', function( $scope, $http ) {
	console.log( 'View Pets Controller' );

	$scope.pets = [];

	$scope.displayPets = function() {
		$http({
			method: 'GET',
			url: '/pets'
		}).then( function( result ) {

			console.log( 'GET result', result );

			$scope.pets = result.data;

		});
	};

	// Display pets on load
	$scope.displayPets();

	$scope.removePet = function() {
		console.log( 'delete pet', this.pet._id );

		// Make the user confirm deletion
		var confirmDelete = confirm( 'Are you sure you want to delete ' + this.pet.name + '?' );

		// If the user confirms
		if( confirmDelete ){
			// Run the DELETE call

			// Create Pet Object
			var petObj = {
				_id: this.pet._id
			};
			console.log( 'petObj:', petObj );

			$http({
				method: 'PATCH',
				url: '/pets',
				data: petObj
			}).then( function( result ) {
				console.log( 'DELETE result', result );
				// Display the pets again
				$scope.displayPets();
			});
		}
	};
}]);