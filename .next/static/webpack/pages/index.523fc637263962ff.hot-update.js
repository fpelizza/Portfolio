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

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"experiences\": function() { return /* binding */ experiences; },\n/* harmony export */   \"extraStudies\": function() { return /* binding */ extraStudies; },\n/* harmony export */   \"languages\": function() { return /* binding */ languages; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"softSkills\": function() { return /* binding */ softSkills; }\n/* harmony export */ });\nconst skills = [\n    {\n        skill: \"Java\",\n        percentage: 100\n    },\n    {\n        skill: \"JavaScript\",\n        percentage: 90\n    },\n    {\n        skill: \"Python\",\n        percentage: 80\n    },\n    {\n        skill: \"React\",\n        percentage: 80\n    },\n    {\n        skill: \"React Native\",\n        percentage: 80\n    },\n    {\n        skill: \"NextJS\",\n        percentage: 50\n    },\n    {\n        skill: \"NodeJS\",\n        percentage: 70\n    }\n];\nconst experiences = [\n    {\n        title: \"Software developer\",\n        company: \"Medialab\",\n        description: \"Development and research on an application for inclusion in the workplace for people with disabilities. Technologies used: React, React Native, Node.js and MongoDB\",\n        from: 2021,\n        to: 2023\n    }\n];\nconst projects = [\n    {\n        name: \"Spring Boot To-Do app\",\n        description: \"A simple CRUD API on Spring Boot using Java 11 and PostgreSQL\",\n        image: \"spring.png\"\n    },\n    {\n        name: \"React Native App\",\n        description: \"Application for inclusion in the workplace for people with disabilities\",\n        image: \"react-native.png\"\n    }\n];\nconst softSkills = [\n    {\n        name: \"Team work\",\n        description: \"Good teamwork skills, taking the appropriate role at all times, along with respect and good treatment of colleagues\"\n    },\n    {\n        name: \"Communication\",\n        description: \"Ability to communicate with a strong vocabulary and strong presence\"\n    },\n    {\n        name: \"Problem resolving\",\n        description: \"Ability to solve and analyze problems both in groups and autonomously\"\n    }\n];\nconst languages = [\n    {\n        name: \"Spanish\",\n        level: \"Native\"\n    },\n    {\n        name: \"English\",\n        level: \"Intermediate\"\n    }\n];\nconst extraStudies = [\n    {\n        name: \"Java Programming Masterclass for Software Developers\",\n        start: 2020,\n        end: 2020,\n        author: \"Tim Buchalka\",\n        description: \"Extensive course to learn the basics and advanced knowledge of Java \",\n        credential: \"https://www.udemy.com/certificate/UC-ae3d3468-915e-4e3d-971f-713e5cec8317/\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLFNBQVM7SUFDbEI7UUFDSUMsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxZQUFZO0lBQ2hCO0NBQ0gsQ0FBQztBQUVLLE1BQU1DLGNBQWM7SUFDdkI7UUFDSUMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGFBQ0k7UUFDSkMsTUFBTTtRQUNOQyxJQUFJO0lBQ1I7Q0FDSCxDQUFDO0FBRUssTUFBTUMsV0FBVztJQUNwQjtRQUNJQyxNQUFNO1FBQ05KLGFBQ0k7UUFDSkssT0FBTztJQUNYO0lBQ0E7UUFDSUQsTUFBTTtRQUNOSixhQUNJO1FBQ0pLLE9BQU87SUFDWDtDQUNILENBQUM7QUFFSyxNQUFNQyxhQUFhO0lBQ3RCO1FBQ0lGLE1BQU07UUFDTkosYUFDSTtJQUNSO0lBQ0E7UUFDSUksTUFBTTtRQUNOSixhQUNJO0lBQ1I7SUFDQTtRQUNJSSxNQUFNO1FBQ05KLGFBQ0k7SUFDUjtDQUNILENBQUM7QUFFSyxNQUFNTyxZQUFZO0lBQ3JCO1FBQ0lILE1BQU07UUFDTkksT0FBTztJQUNYO0lBQ0E7UUFDSUosTUFBTTtRQUNOSSxPQUFPO0lBQ1g7Q0FDSCxDQUFDO0FBRUssTUFBTUMsZUFBZTtJQUN4QjtRQUNJTCxNQUFNO1FBQ05NLE9BQU87UUFDUEMsS0FBSztRQUNMQyxRQUFRO1FBQ1JaLGFBQ0k7UUFDSmEsWUFDSTtJQUNSO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzPzlkYWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcbiAgICB7XG4gICAgICAgIHNraWxsOiBcIkphdmFcIixcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBza2lsbDogXCJKYXZhU2NyaXB0XCIsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDkwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBza2lsbDogXCJQeXRob25cIixcbiAgICAgICAgcGVyY2VudGFnZTogODAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNraWxsOiBcIlJlYWN0XCIsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBza2lsbDogXCJSZWFjdCBOYXRpdmVcIixcbiAgICAgICAgcGVyY2VudGFnZTogODAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNraWxsOiBcIk5leHRKU1wiLFxuICAgICAgICBwZXJjZW50YWdlOiA1MCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2tpbGw6IFwiTm9kZUpTXCIsXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTb2Z0d2FyZSBkZXZlbG9wZXJcIixcbiAgICAgICAgY29tcGFueTogXCJNZWRpYWxhYlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRGV2ZWxvcG1lbnQgYW5kIHJlc2VhcmNoIG9uIGFuIGFwcGxpY2F0aW9uIGZvciBpbmNsdXNpb24gaW4gdGhlIHdvcmtwbGFjZSBmb3IgcGVvcGxlIHdpdGggZGlzYWJpbGl0aWVzLiBUZWNobm9sb2dpZXMgdXNlZDogUmVhY3QsIFJlYWN0IE5hdGl2ZSwgTm9kZS5qcyBhbmQgTW9uZ29EQlwiLFxuICAgICAgICBmcm9tOiAyMDIxLFxuICAgICAgICB0bzogMjAyMyxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJTcHJpbmcgQm9vdCBUby1EbyBhcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkEgc2ltcGxlIENSVUQgQVBJIG9uIFNwcmluZyBCb290IHVzaW5nIEphdmEgMTEgYW5kIFBvc3RncmVTUUxcIixcbiAgICAgICAgaW1hZ2U6IFwic3ByaW5nLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlJlYWN0IE5hdGl2ZSBBcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFwcGxpY2F0aW9uIGZvciBpbmNsdXNpb24gaW4gdGhlIHdvcmtwbGFjZSBmb3IgcGVvcGxlIHdpdGggZGlzYWJpbGl0aWVzXCIsXG4gICAgICAgIGltYWdlOiBcInJlYWN0LW5hdGl2ZS5wbmdcIixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvZnRTa2lsbHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRlYW0gd29ya1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiR29vZCB0ZWFtd29yayBza2lsbHMsIHRha2luZyB0aGUgYXBwcm9wcmlhdGUgcm9sZSBhdCBhbGwgdGltZXMsIGFsb25nIHdpdGggcmVzcGVjdCBhbmQgZ29vZCB0cmVhdG1lbnQgb2YgY29sbGVhZ3Vlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNvbW11bmljYXRpb25cIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFiaWxpdHkgdG8gY29tbXVuaWNhdGUgd2l0aCBhIHN0cm9uZyB2b2NhYnVsYXJ5IGFuZCBzdHJvbmcgcHJlc2VuY2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJQcm9ibGVtIHJlc29sdmluZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQWJpbGl0eSB0byBzb2x2ZSBhbmQgYW5hbHl6ZSBwcm9ibGVtcyBib3RoIGluIGdyb3VwcyBhbmQgYXV0b25vbW91c2x5XCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNwYW5pc2hcIixcbiAgICAgICAgbGV2ZWw6IFwiTmF0aXZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRW5nbGlzaFwiLFxuICAgICAgICBsZXZlbDogXCJJbnRlcm1lZGlhdGVcIixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGV4dHJhU3R1ZGllcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSmF2YSBQcm9ncmFtbWluZyBNYXN0ZXJjbGFzcyBmb3IgU29mdHdhcmUgRGV2ZWxvcGVyc1wiLFxuICAgICAgICBzdGFydDogMjAyMCxcbiAgICAgICAgZW5kOiAyMDIwLFxuICAgICAgICBhdXRob3I6IFwiVGltIEJ1Y2hhbGthXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJFeHRlbnNpdmUgY291cnNlIHRvIGxlYXJuIHRoZSBiYXNpY3MgYW5kIGFkdmFuY2VkIGtub3dsZWRnZSBvZiBKYXZhIFwiLFxuICAgICAgICBjcmVkZW50aWFsOlxuICAgICAgICAgICAgXCJodHRwczovL3d3dy51ZGVteS5jb20vY2VydGlmaWNhdGUvVUMtYWUzZDM0NjgtOTE1ZS00ZTNkLTk3MWYtNzEzZTVjZWM4MzE3L1wiLFxuICAgIH0sXG5dO1xuIl0sIm5hbWVzIjpbInNraWxscyIsInNraWxsIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2VzIiwidGl0bGUiLCJjb21wYW55IiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInNvZnRTa2lsbHMiLCJsYW5ndWFnZXMiLCJsZXZlbCIsImV4dHJhU3R1ZGllcyIsInN0YXJ0IiwiZW5kIiwiYXV0aG9yIiwiY3JlZGVudGlhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./profile.js\n"));

/***/ })

});