APP.factory('DrugsService', function(drugsData, $log, $http, $ionicLoading, $ionicPopup) {
  var _data = drugsData;

  function initDrugs() {
    // check internet ->
    // _data = get data from internet
    // check localstorage
    // _data = get data from localstorage
    $ionicLoading.show({
      template: 'Please Wait, updating data..'
    })

    $http.get('http://salamsolutions.com.my/apps/plusmeds/drugs.js')
      .then(function success(data) {
        _data = data;
        $ionicLoading.hide()
      }, function fail(err) {
        $ionicLoading.hide()
        $ionicPopup.alert({
          title: 'Error',
          template: 'was not able to update data, please try again later.'
        })
      })


  }

  function _search(source, query) {
    var results = [];
    _.forEach(source, function(stopItem) {
      _.forEach(stopItem.terms, function(item) {
        if (item.toLowerCase().match(query)) {
          results.push(stopItem);
          return false;
        }
      });
    });
    return results;
  }

  return {
    drugs: function() {
      return _data;
    },
    search: function(query) {
      query = query.toLowerCase();
      var stop = _search(_data.stop, query);
      var start = _search(_data.start, query);

      var results = {

        'STOPP CRITERIA': stop.length > 0 ? _.groupBy(stop, 'Section') : null,
        'START CRITERIA': start.length > 0 ? _.groupBy(start, 'Section') : null
      }
      $log.info(results);
      return results;
    },
    glassary: function() {
      return {
        'STOPP CRITERIA': _.groupBy(_data.stop, 'Section'),
        'START CRITERIA': _.groupBy(_data.start, 'Section')
      }
    },
    getInstraction: function() {
      var data = [];
      _.each(_data.stop, function(item) {
        if (item.Section === 'Section A: Drug indication criteria')
          data.push(item);
      });
      return data;

    },
    initDrugs: initDrugs,

  }
});