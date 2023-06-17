/*!
 * liuyi-clone 1.0.3
 * Licensed under MIT
 */

function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

function clone(source) {
  var t = type(source);
  if (t !== 'object' && t !== 'array') {
    return source;
  }
  var target;
  if (t === 'object') {
    target = {};
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = clone(source[key]);
      }
    }
  } else {
    target = [];
    for (var i = 0; i < source.length; i++) {
      target[i] = clone(source[i]);
    }
  }
  return target;
}

export default clone;
