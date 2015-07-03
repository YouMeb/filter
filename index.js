'use strict';

var each = require('component/each');

module.exports = function filter(list, condi) {
  condi || (allwaysTrue);
  var newList = [];

  each(list, function (val) {
    if (condi(val)) {
      newList.push(val);
    }
  });

  return newList;
};

function allwaysTrue() {
  return true;
}
