var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/Assignment1", {
        templateUrl : "Assignment1.html"
    })
    .when("/Assignment2", {
        templateUrl : "Assignment2.html",
        Controller  : "Ass2Controller.js"
    })
    .when("/Assignment3", {
        templateUrl : "Assignment3.html",
        Controller  : "Ass3Controller.js"
    })
    .when("/Assignment4", {
        templateUrl : "Assignment4.html",
        Controller  : "Ass4Controller.js"
    })
    .when("/Assignment5", {
        templateUrl : "Assignment5.html",
        Controller  : "Ass5Controller.js"
    })
      .when("/Assignment6", {
        templateUrl : "Assignment6.html",
        Controller  : "Ass6Controller.js"
    })
});
