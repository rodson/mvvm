(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('rs-html-parser'), require('util')) :
	typeof define === 'function' && define.amd ? define(['rs-html-parser', 'util'], factory) :
	(factory(global.rsHtmlParser,global.util));
}(this, (function (rsHtmlParser,util) { 'use strict';

util = util && util.hasOwnProperty('default') ? util['default'] : util;

const input = `
  <div>
    <div>{{ title }}</div>
    <div>{{ desc }}</div>
    <button v-on:click="btnClick">click</button>
  </div>
`;

const tokens = rsHtmlParser.tokenize(input.trim());
// console.log(tokens);

const ast = rsHtmlParser.parse(tokens);

util.inspect(ast, false, null);

})));
