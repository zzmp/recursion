// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'object') {
    var listElements = function(list, element) {
      return (list ? list + ',' : '') + stringifyJSON(element);
    }

    Array.isArray(obj) ? {
      // Array
      _.reduce(obj, listElements, '');
    } :
    {
      // Object
    };
  } else {
    // Data
  }
};
