// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result = [];
  
  var recursor = function(element) {
    if (_.contains(element.classList, className)) result.push(element);
    _.each(element.childNodes, recursor);
  }
  recursor(document.body);

  return result;
};
