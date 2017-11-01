APP.controller('GlossaryCtrl', function($scope, $ionicScrollDelegate, $timeout, DrugsService) {

  $scope.data = DrugsService.glassary();

  // $scope.toggleSections = function() {
  //   this.value.showSection = !this.value.showSection;
  // }

  // $scope.toggleSs = function() {
  //   this._value.showSs = !this._value.showSs;
  //   if (!this._value.showSs) {
  //     _.each(this._value, function(item) {
  //       if (item.showSection)
  //         item.showSection = null;
  //     })
  //   }
  //   $ionicScrollDelegate.resize();
  // }

  $scope.toggleReason = function() {
    this.item.showReasone = !this.item.showReasone;
    // $ionicScrollDelegate.resize();
  }

  $scope.toggleRefs = function() {
    this.item.showRefs = !this.item.showRefs
    // $ionicScrollDelegate.resize();
  }

  // $timeout(function() {
  //   $ionicScrollDelegate.resize();
  // }, 1000);
});
