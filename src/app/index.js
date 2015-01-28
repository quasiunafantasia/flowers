'use strict';
/*jshint esnext: true */


angular.module('flowersJs', ['ngRoute', 'ui.bootstrap'])  
  .config(function ($routeProvider) {
    $routeProvider
       .when ("/", {
        templateUrl: "app/index.html",
        controller: ""
 
      })
      .when ("/addplant", {
        templateUrl: "app/addPlant/addPlant.html",
        controller: "AddPlantCtrl"
      })
      .when ("/listplants", {
        templateUrl: "app/listPlants/listPlants.html",
        controller: "ListPlantsCtrl"
      })        
      .otherwise({
        redirectTo: '/'
      });

  });
