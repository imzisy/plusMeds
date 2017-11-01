APP.directive('categoriesUi', function($compile) {
  // http://jsfiddle.net/nkuDW/1/
  function link(scope, element, attrs) {
    if (scope.categoriesUi && !_.isObject(scope.categoriesUi))
      scope.categoriesUi = JSON.parse(scope.categoriesUi);

    // var divNode = document.createElement('div');
    // newText = newText.replace(key, "<span class=\"positive text-terms\" ng-click=\"showinfo()\">" + key + "</span>");
    var mainSpan = document.createElement('span');
    if (scope.categoriesUi.text[scope.categoriesUi.text.length - 1] !== '.')
      scope.categoriesUi.text += '.';
    
    mainSpan.innerText = scope.categoriesUi.text;
    mainSpan.innerHTML = mainSpan.innerHTML.replace('m2', 'm<sup>2</sup>');
    if (scope.categoriesUi.exp) {
      for (var key in scope.categoriesUi.exp) {
        if (key)
          mainSpan.innerHTML = mainSpan.innerHTML.replace(key, "<span class=\"text-terms\" ng-click=\"click('" + key + "')\">" + key + "</span>");
      }
    }
    element.append(mainSpan);
    $compile(element.contents())(scope);
    // element.removeAttr('categories-ui');
    // element.removeAttr('categoriesUi');
  }

  return {
    restrict: 'A',
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      categoriesUi: '@',
    },
    link: link,
    controller: function($scope, $log, $ionicModal) {
      $scope.click = function(exp) {
        $scope.exp = exp;
        var data = JSON.parse(this.categoriesUi);
        if (data && data.exp && data.exp[exp]) {
          $scope.data = data.exp[exp];
          $log.info(data[exp]);
          $scope.modal.show();
        }
      };

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/categories.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
    }

  };
});