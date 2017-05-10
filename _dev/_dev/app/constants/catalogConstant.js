/*Constantes para los catalogos */
(function () {
    'use strict';

    angular
        .module('app')
        .constant('CATALOG', {
            TYPE_DOCUMENTS: 1,
            COUNTRIES: 2,
            NATIONALITIES : 13,
            TASK_YES_NO : 23,
            TYPE_LIVING : 61,
            SEX : 15,
            CIVIL_STATUS: 16
        });
})();