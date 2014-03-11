// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'object') {
    var listElements = function(list, element, key) {
      return (list ? list + ',' : '') + (typeof key === 'string' ? stringifyJSON(element, key) : stringifyJSON(element));
    }

    var bookend = Array.isArray(obj) ? ['[',']'] : ['{','}'];
    return bookend[0] + _.reduce(obj, listElements, '') + bookend[1];
  } else {
    // Data
    var key = arguments[1];
    return (key ? stringifyJSON(key) + ':' : '') + (typeof obj === 'string' ? "'" + obj + "'" : obj);
  }
};
