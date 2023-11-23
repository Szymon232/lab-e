/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


var appState = {
  currentStyle: {
    name: 'fajne',
    file: 'style1.css'
  },
  styles: [{
    name: 'fajne',
    file: 'style1.css'
  }, {
    name: 'fajne2',
    file: 'style2.css'
  }, {
    name: 'fajne3',
    file: 'style3.css'
  }]
};
function applyStyle() {
  var styleLink = document.getElementById('styleLink');
  styleLink.href = "css/".concat(appState.currentStyle.file);
}
applyStyle();
function generateStyleLinks() {
  var nav = document.querySelector('.main-nav ul');
  if (nav !== null) {
    appState.styles.forEach(function (style) {
      var link = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = style.name;
      a.addEventListener('click', function () {
        return changeStyle(style.name);
      });
      link.appendChild(a);
      nav.appendChild(link);
    });
  }
}
generateStyleLinks();
function changeStyle(styleName) {
  var selectedStyle = appState.styles.find(function (style) {
    return style.name === styleName;
  });
  if (selectedStyle) {
    appState.currentStyle = selectedStyle;
    applyStyle();
  }
}
/******/ })()
;