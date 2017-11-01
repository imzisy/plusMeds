APP.filter('romanNumbers', function() {
  var nums = {
    0: '0',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  }
  return function(input) {
    if (input && nums[input])
      return nums[input];
    return input
  }
});