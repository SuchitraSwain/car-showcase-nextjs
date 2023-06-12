"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateCarRent\": function() { return /* binding */ calculateCarRent; },\n/* harmony export */   \"deleteSearchParams\": function() { return /* binding */ deleteSearchParams; },\n/* harmony export */   \"fetchCars\": function() { return /* binding */ fetchCars; },\n/* harmony export */   \"generateCarImageUrl\": function() { return /* binding */ generateCarImageUrl; },\n/* harmony export */   \"updateSearchParams\": function() { return /* binding */ updateSearchParams; }\n/* harmony export */ });\nconst calculateCarRent = (city_mpg, year)=>{\n    const basePricePerDay = 50; // Base rental price per day in dollars\n    const mileageFactor = 0.1; // Additional rate per mile driven\n    const ageFactor = 0.05; // Additional rate per year of vehicle age\n    // Calculate additional rate based on mileage and age\n    const mileageRate = city_mpg * mileageFactor;\n    const ageRate = (new Date().getFullYear() - year) * ageFactor;\n    // Calculate total rental rate per day\n    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;\n    return rentalRatePerDay.toFixed(0);\n};\nconst updateSearchParams = (type, value)=>{\n    // Get the current URL search params\n    const searchParams = new URLSearchParams(window.location.search);\n    // Set the specified search parameter to the given value\n    searchParams.set(type, value);\n    // Set the specified search parameter to the given value\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n    return newPathname;\n};\nconst deleteSearchParams = (type)=>{\n    // Set the specified search parameter to the given value\n    const newSearchParams = new URLSearchParams(window.location.search);\n    // Delete the specified search parameter\n    newSearchParams.delete(type.toLocaleLowerCase());\n    // Construct the updated URL pathname with the deleted search parameter\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(newSearchParams.toString());\n    return newPathname;\n};\nasync function fetchCars(filters) {\n    const { manufacturer , year , model , limit , fuel  } = filters;\n    // Set the required headers for the API request\n    const headers = {\n        \"X-RapidAPI-Key\": \"71825f8eedmsh0e1e8de0593a14cp1281ffjsnf743b6b08b02\" || 0,\n        \"X-RapidAPI-Host\": \"cars-by-api-ninjas.p.rapidapi.com\"\n    };\n    // Set the required headers for the API request\n    const response = await fetch(\"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel), {\n        headers: headers\n    });\n    // Parse the response as JSON\n    const result = await response.json();\n    return result;\n}\nconst generateCarImageUrl = (car, angle)=>{\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    const { make , model , year  } = car;\n    url.searchParams.append(\"customer\", \"desuchitraswaincompany\" || 0);\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"zoomType\", \"fullscreen\");\n    url.searchParams.append(\"modelYear\", \"\".concat(year));\n    // url.searchParams.append('zoomLevel', zoomLevel);\n    url.searchParams.append(\"angle\", \"\".concat(angle));\n    return \"\".concat(url);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vdXRpbHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFTyxNQUFNQSxtQkFBbUIsQ0FBQ0MsVUFBa0JDLE9BQWlCO0lBQ2xFLE1BQU1DLGtCQUFrQixJQUFJLHVDQUF1QztJQUNuRSxNQUFNQyxnQkFBZ0IsS0FBSyxrQ0FBa0M7SUFDN0QsTUFBTUMsWUFBWSxNQUFNLDBDQUEwQztJQUVsRSxxREFBcUQ7SUFDckQsTUFBTUMsY0FBY0wsV0FBV0c7SUFDL0IsTUFBTUcsVUFBVSxDQUFDLElBQUlDLE9BQU9DLFdBQVcsS0FBS1AsSUFBRyxJQUFLRztJQUVwRCxzQ0FBc0M7SUFDdEMsTUFBTUssbUJBQW1CUCxrQkFBa0JHLGNBQWNDO0lBRXpELE9BQU9HLGlCQUFpQkMsT0FBTyxDQUFDO0FBQ2xDLEVBQUU7QUFFSyxNQUFNQyxxQkFBcUIsQ0FBQ0MsTUFBY0MsUUFBa0I7SUFDakUsb0NBQW9DO0lBQ3BDLE1BQU1DLGVBQWUsSUFBSUMsZ0JBQWdCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFFL0Qsd0RBQXdEO0lBQ3hESixhQUFhSyxHQUFHLENBQUNQLE1BQU1DO0lBRXZCLHdEQUF3RDtJQUN4RCxNQUFNTyxjQUFjLEdBQStCTixPQUE1QkUsT0FBT0MsUUFBUSxDQUFDSSxRQUFRLEVBQUMsS0FBMkIsT0FBeEJQLGFBQWFRLFFBQVE7SUFFeEUsT0FBT0Y7QUFDVCxFQUFFO0FBRUssTUFBTUcscUJBQXFCLENBQUNYLE9BQWlCO0lBQ2xELHdEQUF3RDtJQUN4RCxNQUFNWSxrQkFBa0IsSUFBSVQsZ0JBQWdCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFFbEUsd0NBQXdDO0lBQ3hDTSxnQkFBZ0JDLE1BQU0sQ0FBQ2IsS0FBS2MsaUJBQWlCO0lBRTdDLHVFQUF1RTtJQUN2RSxNQUFNTixjQUFjLEdBQStCSSxPQUE1QlIsT0FBT0MsUUFBUSxDQUFDSSxRQUFRLEVBQUMsS0FBOEIsT0FBM0JHLGdCQUFnQkYsUUFBUTtJQUUzRSxPQUFPRjtBQUNULEVBQUU7QUFFSyxlQUFlTyxVQUFVQyxPQUFvQixFQUFFO0lBQ3BELE1BQU0sRUFBRUMsYUFBWSxFQUFFNUIsS0FBSSxFQUFFNkIsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFHSjtJQUVuRCwrQ0FBK0M7SUFDL0MsTUFBTUssVUFBdUI7UUFDM0Isa0JBQWtCQyxvREFBcUMsSUFBSSxDQUFFO1FBQzdELG1CQUFtQjtJQUNyQjtJQUVBLCtDQUErQztJQUMvQyxNQUFNRyxXQUFXLE1BQU1DLE1BQ3JCLDBEQUErRXJDLE9BQXJCNEIsY0FBYSxVQUFzQkMsT0FBZDdCLE1BQUssV0FBd0I4QixPQUFmRCxPQUFNLFdBQTRCRSxPQUFuQkQsT0FBTSxlQUFrQixPQUFMQyxPQUMvSDtRQUNFQyxTQUFTQTtJQUNYO0lBR0YsNkJBQTZCO0lBQzdCLE1BQU1NLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtJQUVsQyxPQUFPRDtBQUNULENBQUM7QUFFTSxNQUFNRSxzQkFBc0IsQ0FBQ0MsS0FBZUMsUUFBbUI7SUFDcEUsTUFBTUMsTUFBTSxJQUFJQyxJQUFJO0lBQ3BCLE1BQU0sRUFBRUMsS0FBSSxFQUFFaEIsTUFBSyxFQUFFN0IsS0FBSSxFQUFFLEdBQUd5QztJQUU5QkUsSUFBSTlCLFlBQVksQ0FBQ2lDLE1BQU0sQ0FBQyxZQUFZYix3QkFBc0MsSUFBSTtJQUM5RVUsSUFBSTlCLFlBQVksQ0FBQ2lDLE1BQU0sQ0FBQyxRQUFRRDtJQUNoQ0YsSUFBSTlCLFlBQVksQ0FBQ2lDLE1BQU0sQ0FBQyxlQUFlakIsTUFBTW1CLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUMxREwsSUFBSTlCLFlBQVksQ0FBQ2lDLE1BQU0sQ0FBQyxZQUFZO0lBQ3BDSCxJQUFJOUIsWUFBWSxDQUFDaUMsTUFBTSxDQUFDLGFBQWEsR0FBUSxPQUFMOUM7SUFDeEMsbURBQW1EO0lBQ25EMkMsSUFBSTlCLFlBQVksQ0FBQ2lDLE1BQU0sQ0FBQyxTQUFTLEdBQVMsT0FBTko7SUFFcEMsT0FBTyxHQUFPLE9BQUpDO0FBQ1osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9pbmRleC50cz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhclByb3BzLCBGaWx0ZXJQcm9wcyB9IGZyb20gXCJAdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUNhclJlbnQgPSAoY2l0eV9tcGc6IG51bWJlciwgeWVhcjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGJhc2VQcmljZVBlckRheSA9IDUwOyAvLyBCYXNlIHJlbnRhbCBwcmljZSBwZXIgZGF5IGluIGRvbGxhcnNcbiAgY29uc3QgbWlsZWFnZUZhY3RvciA9IDAuMTsgLy8gQWRkaXRpb25hbCByYXRlIHBlciBtaWxlIGRyaXZlblxuICBjb25zdCBhZ2VGYWN0b3IgPSAwLjA1OyAvLyBBZGRpdGlvbmFsIHJhdGUgcGVyIHllYXIgb2YgdmVoaWNsZSBhZ2VcblxuICAvLyBDYWxjdWxhdGUgYWRkaXRpb25hbCByYXRlIGJhc2VkIG9uIG1pbGVhZ2UgYW5kIGFnZVxuICBjb25zdCBtaWxlYWdlUmF0ZSA9IGNpdHlfbXBnICogbWlsZWFnZUZhY3RvcjtcbiAgY29uc3QgYWdlUmF0ZSA9IChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB5ZWFyKSAqIGFnZUZhY3RvcjtcblxuICAvLyBDYWxjdWxhdGUgdG90YWwgcmVudGFsIHJhdGUgcGVyIGRheVxuICBjb25zdCByZW50YWxSYXRlUGVyRGF5ID0gYmFzZVByaWNlUGVyRGF5ICsgbWlsZWFnZVJhdGUgKyBhZ2VSYXRlO1xuXG4gIHJldHVybiByZW50YWxSYXRlUGVyRGF5LnRvRml4ZWQoMCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoUGFyYW1zID0gKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAvLyBHZXQgdGhlIGN1cnJlbnQgVVJMIHNlYXJjaCBwYXJhbXNcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAvLyBTZXQgdGhlIHNwZWNpZmllZCBzZWFyY2ggcGFyYW1ldGVyIHRvIHRoZSBnaXZlbiB2YWx1ZVxuICBzZWFyY2hQYXJhbXMuc2V0KHR5cGUsIHZhbHVlKTtcblxuICAvLyBTZXQgdGhlIHNwZWNpZmllZCBzZWFyY2ggcGFyYW1ldGVyIHRvIHRoZSBnaXZlbiB2YWx1ZVxuICBjb25zdCBuZXdQYXRobmFtZSA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xuXG4gIHJldHVybiBuZXdQYXRobmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTZWFyY2hQYXJhbXMgPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gIC8vIFNldCB0aGUgc3BlY2lmaWVkIHNlYXJjaCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIHZhbHVlXG4gIGNvbnN0IG5ld1NlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgLy8gRGVsZXRlIHRoZSBzcGVjaWZpZWQgc2VhcmNoIHBhcmFtZXRlclxuICBuZXdTZWFyY2hQYXJhbXMuZGVsZXRlKHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XG5cbiAgLy8gQ29uc3RydWN0IHRoZSB1cGRhdGVkIFVSTCBwYXRobmFtZSB3aXRoIHRoZSBkZWxldGVkIHNlYXJjaCBwYXJhbWV0ZXJcbiAgY29uc3QgbmV3UGF0aG5hbWUgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7bmV3U2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcblxuICByZXR1cm4gbmV3UGF0aG5hbWU7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXJzKGZpbHRlcnM6IEZpbHRlclByb3BzKSB7XG4gIGNvbnN0IHsgbWFudWZhY3R1cmVyLCB5ZWFyLCBtb2RlbCwgbGltaXQsIGZ1ZWwgfSA9IGZpbHRlcnM7XG5cbiAgLy8gU2V0IHRoZSByZXF1aXJlZCBoZWFkZXJzIGZvciB0aGUgQVBJIHJlcXVlc3RcbiAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSB7XG4gICAgXCJYLVJhcGlkQVBJLUtleVwiOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SQVBJRF9BUElfS0VZIHx8IFwiXCIsXG4gICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJjYXJzLWJ5LWFwaS1uaW5qYXMucC5yYXBpZGFwaS5jb21cIixcbiAgfTtcblxuICAvLyBTZXQgdGhlIHJlcXVpcmVkIGhlYWRlcnMgZm9yIHRoZSBBUEkgcmVxdWVzdFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2NhcnMtYnktYXBpLW5pbmphcy5wLnJhcGlkYXBpLmNvbS92MS9jYXJzP21ha2U9JHttYW51ZmFjdHVyZXJ9JnllYXI9JHt5ZWFyfSZtb2RlbD0ke21vZGVsfSZsaW1pdD0ke2xpbWl0fSZmdWVsX3R5cGU9JHtmdWVsfWAsXG4gICAge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9XG4gICk7XG5cbiAgLy8gUGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhckltYWdlVXJsID0gKGNhcjogQ2FyUHJvcHMsIGFuZ2xlPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoXCJodHRwczovL2Nkbi5pbWFnaW4uc3R1ZGlvL2dldGltYWdlXCIpO1xuICBjb25zdCB7IG1ha2UsIG1vZGVsLCB5ZWFyIH0gPSBjYXI7XG5cbiAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ2N1c3RvbWVyJywgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU1BR0lOX0FQSV9LRVkgfHwgJycpO1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbWFrZScsIG1ha2UpO1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kZWxGYW1pbHknLCBtb2RlbC5zcGxpdChcIiBcIilbMF0pO1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnem9vbVR5cGUnLCAnZnVsbHNjcmVlbicpO1xuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kZWxZZWFyJywgYCR7eWVhcn1gKTtcbiAgLy8gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3pvb21MZXZlbCcsIHpvb21MZXZlbCk7XG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhbmdsZScsIGAke2FuZ2xlfWApO1xuXG4gIHJldHVybiBgJHt1cmx9YDtcbn0gXG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlQ2FyUmVudCIsImNpdHlfbXBnIiwieWVhciIsImJhc2VQcmljZVBlckRheSIsIm1pbGVhZ2VGYWN0b3IiLCJhZ2VGYWN0b3IiLCJtaWxlYWdlUmF0ZSIsImFnZVJhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJyZW50YWxSYXRlUGVyRGF5IiwidG9GaXhlZCIsInVwZGF0ZVNlYXJjaFBhcmFtcyIsInR5cGUiLCJ2YWx1ZSIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2V0IiwibmV3UGF0aG5hbWUiLCJwYXRobmFtZSIsInRvU3RyaW5nIiwiZGVsZXRlU2VhcmNoUGFyYW1zIiwibmV3U2VhcmNoUGFyYW1zIiwiZGVsZXRlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJmZXRjaENhcnMiLCJmaWx0ZXJzIiwibWFudWZhY3R1cmVyIiwibW9kZWwiLCJsaW1pdCIsImZ1ZWwiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1JBUElEX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImdlbmVyYXRlQ2FySW1hZ2VVcmwiLCJjYXIiLCJhbmdsZSIsInVybCIsIlVSTCIsIm1ha2UiLCJhcHBlbmQiLCJORVhUX1BVQkxJQ19JTUFHSU5fQVBJX0tFWSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./utils/index.ts\n"));

/***/ })

});