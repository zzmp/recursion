// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var key = arguments[1];
  var listKey = function(key) {
    return (key ? stringifyJSON(key) + ':' : '');
  }

  if (obj && typeof obj === 'object') {
    var listElements = function(list, element, key) {
      return (list ? list + ',' : '') + (typeof key === 'string' ? stringifyJSON(element, key) : stringifyJSON(element));
    }

    var bookend = Array.isArray(obj) ? ['[',']'] : ['{','}'];
    return listKey(key) + bookend[0] + _.reduce(obj, listElements, '') + bookend[1];
  } else {
    // Data
    var formatType = function(obj) {
      if (typeof obj === 'string') return '"' + obj + '"';
      else if (typeof obj === 'number') return obj;
      else if (typeof obj === 'boolean') return obj;
      else if (typeof obj === 'object') return 'null'; // null case
      else if (typeof obj === 'undefined') return 'null';
      // object/array are covered in previous block
    }

    return listKey(key) + formatType(obj);
  }
};
