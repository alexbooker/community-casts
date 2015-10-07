(function () {
  'use strict';
  function _buildUrl(options) {
    var url = options.baseUrl + 'api/screencasts';
    if (options.tagged !== '') {
      url += '/tagged/' + encodeURIComponent(options.tagged);
    }
    if (options.search) {
      url += '/search/' + encodeURIComponent(options.search);
    }
    url += '?page=' + options.page;
    url += '&sort=' + options.sort;
    return url;
  }

  var screencasts = function($http) {
    return {
      get: function(options, done) {
        var url = _buildUrl(options);
        return $http.get(url).then(function(response) {
          done(response.data);
        });
      }
    };
  };

  screencasts.$inject = [
    '$http'
  ];

  angular.module('communityCasts')
    .service('screencasts', screencasts);
})();