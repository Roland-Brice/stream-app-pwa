'use strict';

angular.
  module('streamApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<song-list></song-list>'
        }).
        when('/audio/audio1.html',{
          template: 'audio/audio1.html'
        });
    }
  ]);
