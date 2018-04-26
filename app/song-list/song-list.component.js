'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('songList').
  component('songList', {
    templateUrl: 'song-list/song-list.template.html',
    controller: ['Song',
      function SongListController(Song) {
        this.songs = Song.query();
        this.orderProp = 'id';
      }
    ]
  });
