var myApp=angular.module("myApp",["ngRoute"]);myApp.config(["$routeProvider",function(a){a.when("/home",{templateUrl:"/views/about.htm",controller:"homeController"}).when("/add",{templateUrl:"/views/add.htm",controller:"addController"}).when("/pets",{templateUrl:"/views/pets.htm",controller:"viewController"}).otherwise({})}]),myApp.controller("homeController",["$scope","$http",function(a,b){console.log("Home Controller")}]),myApp.controller("addController",["$scope","$http","$location",function(a,b,c){console.log("Add Pet Controller"),a.addPet=function(d){console.log("Run AddPet");var e={name:a.pet_name,age:a.pet_age,species:a.pet_type,image_url:a.pet_photo};b({method:"POST",url:"/pets",data:e}).then(function(a){console.log("Added!",a),c.path("pets")})}}]),myApp.controller("viewController",["$scope","$http",function(a,b){console.log("View Pets Controller"),a.pets=[],b({method:"GET",url:"/pets"}).then(function(b){console.log("GET result",b),a.pets=b.data})}]);
//# sourceMappingURL=script.js.map