// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  if (typeof obj === 'undefined') return;

  var recursor = function(obj, key) {
    var listKey = function(key) {
      return (key ? recursor(key) + ':' : '');
    }

    if (obj && typeof obj === 'object') {
      var listElements = function(list, element, key) {
        if (typeof element === 'function' || typeof element === 'undefined') return list;
        return (list ? list + ',' : '') + (typeof key === 'string' ? recursor(element, key) : recursor(element));
      }

      var bookend = Array.isArray(obj) ? ['[',']'] : ['{','}'];
      return listKey(key) + bookend[0] + _.reduce(obj, listElements, '') + bookend[1];
    } else {
      // Data
      var formatType = function(obj) {
        var formatString = function(str) {
          // remove escaped characters (this is not comprehensive, nor is it ideal regexp)
          return str.replace(/\\/g,'\\\\').replace(/\"/g,'\\\"').replace(/\r/g,'\\r').replace(/\t/g,'\\t').replace(/\n/g,'\\n');;
        };

        if (typeof obj === 'string') return '"' + formatString(obj) + '"';
        else if (typeof obj === 'number') return obj;
        else if (typeof obj === 'boolean') return obj;
        else if (typeof obj === 'object') return 'null'; // null case
        // object/array are covered in previous block
      }

      return listKey(key) + formatType(obj);
    }
  };
  return recursor(obj);
};
