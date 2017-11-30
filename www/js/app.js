// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
APP = angular.module('plus65', ['ionic', 'ui.bootstrap'])
APP.config(function($ionicConfigProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(false)
})
APP.run(function($ionicPlatform, $rootScope, $state, $ionicHistory, DrugsService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault()
    }

    DrugsService.initDrugs();

  })
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();

    if (toState.name == 'app.glossary') {
      $rootScope.hideTitleIcon = true
    } else {
      $rootScope.hideTitleIcon = false
    }

  });

  $ionicPlatform.registerBackButtonAction(function(e) {
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    if ($state.current.name !== 'app.glossary') {
      e.stopPropagation();
      $state.go('app.glossary');
      return;
    }
    navigator.app.exitApp();
  }, 101);

})