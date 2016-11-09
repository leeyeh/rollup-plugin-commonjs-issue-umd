(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('leancloud-realtime', ['exports'], factory) :
	(factory((global.AV = global.AV || {})));
}(this, (function (exports) { 'use strict';

  var Realtime = 1;
	exports.Realtime = Realtime;

	Object.defineProperty(exports, '__esModule', { value: true });

})));