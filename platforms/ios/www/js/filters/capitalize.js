  APP.filter('capitalize', function() {
    return function(input, all) {

      if (input.indexOf('WHO') === 0)
        return input;
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
  });