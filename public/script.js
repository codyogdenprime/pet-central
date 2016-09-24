var myApp=angular.module("myApp",["ngRoute"]);myApp.config(["$routeProvider",function(a){a.when("/home",{templateUrl:"/views/about.htm",controller:"homeController"}).when("/add",{templateUrl:"/views/add.htm",controller:"addController"}).when("/submit",{templateUrl:"/views/add_finish.htm"}).when("/pets",{templateUrl:"/views/pets.htm",controller:"viewController"}).otherwise({})}]),myApp.controller("homeController",["$scope","$http",function(a,b){console.log("Home Controller")}]),myApp.controller("addController",["$scope","$http","$location",function(a,b,c){console.log("Add Pet Controller"),a.addPet=function(d){console.log("Run AddPet");var e={name:a.pet_name,age:a.pet_age,species:a.pet_type,image_url:a.pet_photo};b({method:"POST",url:"/pets",data:e}).then(function(a){console.log("Added!",a),c.path("submit")})}}]),myApp.controller("viewController",["$scope","$http",function(a,b){console.log("View Pets Controller"),a.pets=[],a.displayPets=function(){b({method:"GET",url:"/pets"}).then(function(b){console.log("GET result",b),a.pets=b.data})},a.displayPets(),a.removePet=function(){console.log("delete pet",this.pet._id);var c=confirm("Are you sure you want to delete "+this.pet.name+"?");if(c){var d={_id:this.pet._id};console.log("petObj:",d),b({method:"PATCH",url:"/pets",data:d}).then(function(b){console.log("DELETE result",b),a.displayPets()})}}}]);
//# sourceMappingURL=script.js.map