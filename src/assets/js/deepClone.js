export default function deepClone (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  } else if (obj && typeof obj === 'object') {
    var cloned = {};
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      cloned[key] = obj[key];
    }
    return cloned;
  } else {
    return obj;
  }
};
