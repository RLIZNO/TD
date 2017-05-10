(function () {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routes($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('validationAccount', {
                url: "/",
                templateUrl: "app/feature/validationAccount/validationAccountView.html",
                controller: "validationAccountController as validationAccount"
            })
            .state('moldedFormalization', {
                url: "/form",
                templateUrl: "app/feature/moldedFormalization/formalizationView.html",
                controller: "formalizationController as moldedFormalization"
            })
            .state('productManteniment', {
                url: "/prod",
                templateUrl: "app/feature/productManteniment/mantenimentView.html",
                controller: "mantenimentController as productManteniment"
            })
            .state('transitionManteniment', {
                url: "/trans",
                templateUrl: "app/feature/transitionManteniment/transitionView.html",
                controller: "transitionController as transitionManteniment"
            })
            .state('transactionCode',{
                url: "/transCode",
                templateUrl: "app/feature/transactionCodeParameterization/transactionView.html",
                controller: "transactionController as transactionCode"
            })
            .state('transactionResume',{
                url: "/resumen",
                templateUrl: "app/feature/transactionResume/transactionResumeView.html",
                controller: "transactionResumeController as transactionResume"
            });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    }
})();