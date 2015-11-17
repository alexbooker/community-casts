(function() {
  'use strict';
  var screencastController = function($scope, $stateParams, screencast) {
    screencast($stateParams.screencastId).then(function(screencast) {
      $scope.screencast = screencast.data;
    });
  };
  screencastController.$inject = ['$scope','$stateParams', 'screencast'];
  angular
    .module('communityCasts')
    .controller('screencastController', screencastController);
})();
