Array.prototype.myFilter = function(callback, obj = this) {
  const newArray = [];
  
  for (let i = 0; i < obj.length; i++) {
    if (callback(obj[i])) {
      newArray.push(obj[i]);
    }
  }
  
  return newArray;
}


function createDebounceFunction(func, delay) {
  let timeout;
  
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  }
}
