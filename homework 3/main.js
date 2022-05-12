Array.prototype.myFilter = function(callback, obj) {
  if (obj === undefined) {
    obj = this;
  }
  let newArray = [];
  for (let i = 0; i < obj.length; i++) {
    if (callback(obj[i])) {
      newArray.push(obj[i]);
    }
  }
  return newArray;
}


function createDebounceFunction(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  }
}