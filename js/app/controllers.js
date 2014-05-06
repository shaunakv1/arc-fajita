'use strict';

/* Controllers */

angular.module('arcFajita.controllers', [])/**
 * Map Controller: responsible for everything you see on map.
 */
.controller('MapCtrl', function($scope,leafletData) {

    angular.extend($scope, {
        usa: {
            lat: 40.1786097044826,
            lng: -116.99,
            zoom: 4
        },
        esri: {
            url: "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}"
        }
    });
});