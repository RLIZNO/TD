 
(function () {
    
    'use strict';

    angular
        .module('app')
        .service('validTransactionAffiliate', validTransactionAffiliate);

    validTransactionAffiliate.$inject = [
        '$http', 
        '$q',
        'PREFIX_URL',
        'URL'
    ];

    function validTransactionAffiliate(
        $http, 
        $q,
        PREFIX_URL,
        URL) {
        
        var service = {
            getvalidaTransitionAffiliate: getvalidaTransitionAffiliate,
            getValidComerce: getValidComerce
        };

        return service;

        /**
         *	@ngdoc method
         *	@description
         *	Consulta si el usuario tiene permisos para crear cliente y cuenta, trae la información basica del usuario.
         * 
         *	@param {String} userName nombre de usuario de red.
         *
         *	@return {Object} La respuesta del servicio.
         */
        function getvalidaTransitionAffiliate() {

            return $http.get(PREFIX_URL.SERVICES + URL.VALIDATE_AFF)
                .then(
                    function (response) {
                    	return response.data;
                    },
                      function (errResponse) {
                        return $q.reject(errResponse);
                    }
                );

        }

                /**
         *  @ngdoc method
         *  @description
         *  Consulta si el usuario tiene permisos para crear cliente y cuenta, trae la información basica del usuario.
         * 
         *  @param {String} userName nombre de usuario de red.
         *
         *  @return {Object} La respuesta del servicio.
         */
        function getValidComerce() {

            return $http.get(PREFIX_URL.SERVICES + URL.VALIDATE_AFF_COM)
                .then(
                    function (response) {
                      return response.data;
                    },
                      function (errResponse) {
                        return $q.reject(errResponse);
                    }
                );

        }

    }

})();
