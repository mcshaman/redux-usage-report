"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = exports.isObjectOrArray = void 0;

var isObjectOrArray = function isObjectOrArray(x) {
  return x === Object(x) && typeof x !== 'function';
};

exports.isObjectOrArray = isObjectOrArray;

var isUndefined = function isUndefined(x) {
  return x === undefined;
};

exports.isUndefined = isUndefined;