APP.controller('SearchCtrl', function($scope, $log, $ionicScrollDelegate, DrugsService) {
  $scope.values = {
    called: false
  };

  $scope.search = function() {
    if (!$scope.values.search) {
      $scope.data = null;
      return;
    }
    $scope.values.called = true;
    $scope.data = DrugsService.search($scope.values.search);
  };

  $scope.cancel = function() {
    $scope.values.search = null;
    $scope.values.called = false;
    $scope.data = null;
  }

  $scope.toggleSs = function() {
    this.v.showSs = !this.v.showSs;
    if (!this.v.showSs) {
      _.each(this.v, function(item) {
        if (item.showSection)
          item.showSection = null;
      })
    }
    $ionicScrollDelegate.resize();
  }

  $scope.toggleReason = function() {
    this.item.showReasone = !this.item.showReasone;
    $ionicScrollDelegate.resize();
  }

  $scope.toggleRefs = function() {
    this.item.showRefs = !this.item.showRefs
    $ionicScrollDelegate.resize();
  }

});