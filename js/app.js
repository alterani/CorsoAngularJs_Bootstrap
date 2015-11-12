/**
 * Created with JetBrains WebStorm.
 * User: enricoalterani
 * Date: 09/11/15
 * Time: 14.52
 * To change this template use File | Settings | File Templates.
 */
angular.module("myApp",["modulo_controller", "modulo_servizi", "modulo_factory", "ngRoute", "direttive_personalizzate"])
    .config(function($httpProvider) {
        $httpProvider.defaults.headers.common["Authorization"] = "Basic cGlwcG86cGx1dG8=";
    })
    .config(function($routeProvider) {
        $routeProvider.when("/utenti", {

            templateUrl: "templates/listaUtenti.html",
            controller: "listaUtentiCtrl"

        })
        .when("/utenti/:userId", {
                templateUrl: "/templates/utente.html",
                controller: "utenteCtrl"
         })
    .otherwise({redirectTo: "/utenti"});
    })
    .run(function($rootScope) {
        $rootScope.appVersion = "1.0";
    });
