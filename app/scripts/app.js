'use strict';

/**
 * @ngdoc overview
 * @name weekworkApp
 * @description
 * # weekworkApp
 *
 * Main module of the application.
 */
angular.module('weekworkApp', ["ui.router","Tab"]).config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when("","/fon1")
	$stateProvider.state("fon1",{
		url:"/fon1",
		templateUrl:"views/fon1.html",
		controller:"fon1",
	}).state("fon2",{
		url:"/fon2",
		templateUrl:"views/fon2.html",
		controller:"fon2"
	})
});
