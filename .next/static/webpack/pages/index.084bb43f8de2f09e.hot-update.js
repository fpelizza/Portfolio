"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children , footer =true  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dark\",\n        style: {\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"\\xa9 Fermin Pelizza Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"2000 - \",\n                            new Date().getFullYear()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            margin: \"0\"\n                        },\n                        children: \"All rights Reserved.\"\n                    }, void 0, false, {\n                        fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/santiago/Git/Portfolio/components/Layout.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTjtBQUNKO0FBQ0k7QUFFbEMsTUFBTUksU0FBUyxTQUFpQztRQUFoQyxFQUFFQyxTQUFRLEVBQUVDLFFBQVMsSUFBSSxHQUFFOztJQUN6QyxNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEJDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxvQkFBb0IsQ0FBQ0MsTUFBUTtZQUNqQ04sc0RBQWU7UUFDakI7UUFFQUksT0FBT0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CSjtRQUVyQ0QsT0FBT0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCLElBQU1ULHFEQUFjO1FBRTVELE9BQU8sSUFBTTtZQUNYSSxPQUFPSSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxvQkFBb0JOO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7UUFBVUMsT0FBTztZQUFFQyxXQUFXO1FBQVE7OzBCQUNuRCw4REFBQ2hCLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNpQjtnQkFBS0gsV0FBVTswQkFBa0JYOzs7Ozs7WUFDakNDLHdCQUNDLDhEQUFDQTtnQkFBT1UsV0FBVTs7a0NBQ2hCLDhEQUFDSTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7NEJBQUU7NEJBQVEsSUFBSUMsT0FBT0MsV0FBVzs7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFFSixPQUFPOzRCQUFFTyxRQUFRO3dCQUFJO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0E5Qk1wQjs7UUFDV0osa0RBQVNBOzs7S0FEcEJJO0FBZ0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPntjaGlsZHJlbn08L21haW4+XG4gICAgICB7Zm9vdGVyICYmIChcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxPiZjb3B5OyBGZXJtaW4gUGVsaXp6YSBQb3J0Zm9saW88L2gxPlxuICAgICAgICAgIDxwPjIwMDAgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cbiAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMFwiIH19PkFsbCByaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwiTlByb2dyZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJmb290ZXIiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});