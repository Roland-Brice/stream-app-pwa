'use strict';

angular.
  module('core.song').
  factory('Song', ['$resource',
    function($resource) {
      return $resource('audios/:songId.json', {}, {
        query: {
          method: 'GET',
          params: {songId: 'audios'},
          isArray: true
        }
      });
    }
  ]);
