APP.controller('GeneralsCtrl', function($scope, $ionicScrollDelegate, DrugsService) {
  $scope.data = DrugsService.getInstraction();

  $scope.toggleReason = function() {
    this.item.showReasone = !this.item.showReasone;
    $ionicScrollDelegate.resize();
  }

  $scope.toggleRefs = function() {
    this.item.showRefs = !this.item.showRefs
    $ionicScrollDelegate.resize();
  }

});