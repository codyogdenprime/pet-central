var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "/views/about.htm"
      }).
      when("/add", {
        templateUrl: "/views/add.htm"
      }).
      when("/pets", {
        templateUrl: "/views/pets.htm"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);