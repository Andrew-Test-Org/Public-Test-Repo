/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const {execSync} = __nccwpck_require__(81);

const output = execSync(`pwd`).toString();
console.log(output);
console.log('Find output');
const findOutput = execSync('find ./../.. -name test.plist').toString();
console.log(findOutput);
const bundleVersion = execSync(`grep -A1 'CFBundleVersion' ./../../_actions/Andrew-Test-Org/Public-Test-Repo/joe-check-bundle-version/test.plist | grep -v 'CFBundleVersion' | sed 's|[</string>,]||g'`).toString().trim();
const shortBundleVersion = execSync(`grep -A1 'CFBundleShortVersionString' ./../../_actions/Andrew-Test-Org/Public-Test-Repo/joe-check-bundle-version/test.plist | grep -v 'CFBundleShortVersionString' | sed 's|[</string>,]||g'`).toString().trim();

console.log(`Bundle Version: ${bundleVersion}`);
console.log(`Short Bundle Version: ${shortBundleVersion}`);

const hasValue = shortBundleVersion && bundleVersion;
if (!hasValue) {
    console.log('Failed to get Bundle Versions from plist');
} else if (bundleVersion.includes(shortBundleVersion)) {
    console.log('Bundle Versions match');
} else {
    console.log('Bundle Versions do not match');
}

})();

module.exports = __webpack_exports__;
/******/ })()
;