'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('arcFajita.services', [])
.factory('LayerService', function ($http) {
	
	//API
	return {
		getLayerData: function () {
			return $http.get('data/toc.json').then(function(result) {
               return result.data.toc.group;
            });
		}
	};
});