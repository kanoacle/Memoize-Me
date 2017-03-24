/* jshint esversion: 6*/

const select = (function() {

var cache = {};

  const memoize = function(id) {
    if (id in cache) {
      console.log('Cache hit');
      return cache[id];
    } else {
      console.log('Cache miss');
      cache[id] = document.querySelector(id);
      return cache[id];
    }
  };

  const clear = function() {
    console.log('Cache cleared');
    cache = {};
  };

  return {
    memoize: memoize,
    clear: clear,
    cache: cache
  };
});

var faka = select();
faka.memoize('faka');
console.log(cache.faka);