var myApp=angular.module("myApp",["ngRoute"]);myApp.config(["$routeProvider",function(a){a.when("/home",{templateUrl:"/views/about.htm",controller:"homeController"}).when("/add",{templateUrl:"/views/add.htm",controller:"addController"}).when("/pets",{templateUrl:"/views/pets.htm",controller:"viewController"}).otherwise({})}]),myApp.controller("homeController",["$scope",function(a){console.log("Home Controller")}]),myApp.controller("addController",["$scope","$http",function(a,b){console.log("Add Pet Controller"),a.addPet=function(c){console.log("Run AddPet");var d={name:a.pet_name,age:a.pet_age,species:a.pet_type,image_url:a.pet_photo};b({method:"POST",url:"/pets",data:d}).then(function(a){console.log("Added!",a)})}}]),myApp.controller("viewController",["$scope",function(a){console.log("View Pets Controller")}]);
//# sourceMappingURL=script.js.map