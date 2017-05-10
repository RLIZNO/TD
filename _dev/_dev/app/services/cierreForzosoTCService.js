
(function () {
    
    'use strict';

    angular
        .module('app')
        .service('cierreForzosoTCService', cierreForzosoTCService);

    cierreForzosoTCService.$inject = [
        '$http', 
        '$q',
        'PREFIX_URL',
        'URL'
    ];

    function cierreForzosoTCService(
        $http, 
        $q,
        PREFIX_URL,
        URL) {

      var service = {
            addcierreForzosoTC: addcierreForzosoTC,
            updatecierreForzosoTC: updatecierreForzosoTC,
            getcierreForzosoTC: getcierreForzosoTC
        };

        return service;

        /*INSERT CIERRE FORZOSO*/

        function addcierreForzosoTC(json){
            $http.post(PREFIX_URL.SERVICES + URL.ADD_CIERRE_FORZOSO, json)
              .then(
                  function(response) {
                      return response.data;
                  },
                  function(errResponse){
                      return $q.reject(errResponse);
                  }
              );
        }

        /*UPDATE CIERRE FORZOSO*/

        function updatecierreForzosoTC(json){
            $http.put(PREFIX_URL.SERVICES + URL.UPDATE_CIERRE_FORZOSO, json)
              .then(
                  function (response){
                      return response.data;
                  },
                  function (errResponse){
                      return $q.reject(errResponse);
                  }
              );
        }

        /*SELECT CIERRE FORZOSO*/

        function getcierreForzosoTC(docNumId){
            $http.get(PREFIX_URL.SERVICES + URL.GET_CIERRE_FORZOSO + '?documentType=2&documentNumber=' + docNumId )
              .then(
                  function (response){
                      deferred.resolve(response.data);
                  },
                  function (errResponse){
                      deferred.reject(errResponse);
                  }
              );
            return deferred.promise;
        }
    }

})();
