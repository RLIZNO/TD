(function () {
    'use strict';

    angular
        .module('transitionModule')
        .controller('transitionController', transitionController);

    //Inyeccion de dependencias
    transitionController.$inject = [
        'sweet',
        '$state',
        '$rootScope',
        'modalFactory',
        'catalogService',
        'CATALOG',
        '$filter',
        '$timeout',
        'messages',
        'addTableService'
        ];

    function transitionController(
        sweet,
        $state,
        $rootScope,
        modalFactory,
        catalogService,
        CATALOG,
        $filter,
        $timeout,
        messages,
        addTableService
    ) {

        var vm = this;
        vm.viewModelTransition = {};

    }
})();