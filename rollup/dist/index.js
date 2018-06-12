(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  require("core-js/shim");

  require("regenerator-runtime/runtime");

  require("core-js/fn/regexp/escape");

  if (global._babelPolyfill) {
    throw new Error("only one instance of babel-polyfill is allowed");
  }
  global._babelPolyfill = true;

  var DEFINE_PROPERTY = "defineProperty";
  function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
      writable: true,
      configurable: true,
      value: value
    });
  }

  define(String.prototype, "padLeft", "".padStart);
  define(String.prototype, "padRight", "".padEnd);

  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
  });

  module.exports = require("./lib/api/node.js");

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  function loadImg(src) {
      var promise = new Promise(function (resolve, reject) {
          var img = document.createElement('img');
          // throw new Error('语法错误')
          img.onload = function () {
              resolve(img);
          };
          img.onerror = function () {
              reject();
          };
          img.src = src;
      });
      return promise;
  }

  var result1 = loadImg('https://img.mukewang.com/5b0cc0e300019e2f09360316.jpg');
  var result2 = loadImg('https://img3.mukewang.com/545847d40001cbef02200220-100-100.jpg');
  // 串联
  // result1.then(function(img1){
  //     console.log('第一张图片加载完成');
  //     console.log(img1.width)
  // 	return result2 // 链式操作
  // }).then(function(img2){
  //     console.log('第二张图片加载完成');
  //     console.log(img2.height);
  // })

  // Promise.all([result1,result2]).then(datas=>{
  //     console.log('all',datas[0])
  //     console.log('all',datas[1])
  // })
  // Promise.race([result1,result2]).then(data=>{
  //     console.log('race',data)
  //     // console.log(datas[1])/
  // })
  var load = function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var result1, result2;
          return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                  switch (_context.prev = _context.next) {
                      case 0:
                          _context.next = 2;
                          return loadImg('https://img.mukewang.com/5b0cc0e300019e2f09360316.jpg');

                      case 2:
                          result1 = _context.sent;

                          console.log(result1);
                          _context.next = 6;
                          return loadImg('https://img3.mukewang.com/545847d40001cbef02200220-100-100.jpg');

                      case 6:
                          result2 = _context.sent;

                          console.log(result2);

                      case 8:
                      case 'end':
                          return _context.stop();
                  }
              }
          }, _callee, this);
      }));

      return function load() {
          return _ref.apply(this, arguments);
      };
  }();
  load();

})));
