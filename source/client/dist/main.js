angular.module("config",[]).constant("config",{serverHost:"http://localhost:8080/"});var app=angular.module("communityCasts",["ngMaterial","ui.router","config"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(t,e,a){a.html5Mode(!0),e.otherwise("/"),t.state("about",{url:"/about",templateUrl:"/app/views/_about.html",data:{pageTitle:"About Community Casts"}}),t.state("submit",{url:"/submit",templateUrl:"/app/views/_submit.html",data:{pageTitle:"Submit a screencast"}}),t.state("home",{url:"/:tagged?",templateUrl:"/app/views/_screencasts.html",controller:"screencastsController",params:{sort:"popular",tagged:""},data:{pageTitle:"Community Casts"}})}]).run(["$rootScope","$state","$stateParams",function(t,e,a){t.$state=e,t.$stateParams=a}]);app.controller("menuController",["$scope","$http","$location","config",function(t,e,a,s){"use strict";e.get(s.serverHost+"tags").success(function(e){t.tags=e.tags})}]),app.controller("screencastsController",["$scope","$http","$stateParams","$window","$location","config",function(t,e,a,s,o,n){"use strict";function r(){t.page=1,t.screencasts=[],t.hasMore=!0,t.loaded=!1,t.busy=!1}t.loadBtnText="Load More",t.fetchScreencasts=function(){t.busy=!0;var s=n.serverHost+"screencasts";""!==a.tagged&&(s+="/tagged/"+encodeURIComponent(a.tagged)+"/");var o=s+"?page="+t.page+"&sort="+t.sortOption;e.get(o).success(function(e){1===t.page&&(t.totalCount=e.totalCount),t.busy=!1,t.page+=1,t.hasMore=e.hasMore,t.screencasts=t.screencasts.concat(e.screencasts),t.loaded=!0,t.hasMore||(t.loadBtnText="Showing "+t.screencasts.length+" of "+t.screencasts.length+" screencasts. There are no more to load.")})},t.changeSortOption=function(){r(),t.fetchScreencasts()},t.navigateTo=function(t){s.open(t)},r(),t.sortOption=a.sort,t.tagged=a.tagged,t.fetchScreencasts()}]);