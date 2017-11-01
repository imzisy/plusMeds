APP.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.search', {
      url: '/search',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    })
    .state('app.glossary', {
      url: '/glossary',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/glossary.html',
          controller: 'GlossaryCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('app.how', {
      url: '/how',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/how.html',
          controller: 'HowCtrl'
        }
      }
    })
    .state('app.generals', {
      url: '/generals',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/generals.html',
          controller: 'GeneralsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/glossary');
});
