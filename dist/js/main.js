/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlbumService: function() { return /* binding */ AlbumService; }
/* harmony export */ });
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var AlbumService = /*#__PURE__*/function () {
  function AlbumService() {
    _classCallCheck(this, AlbumService);
    _defineProperty(this, "musicData", [{
      artist: 'Adele',
      name: '25',
      sales: 1731000
    }, {
      artist: 'Drake',
      name: 'Views',
      sales: 1608000
    }, {
      artist: 'Beyonce',
      name: 'Lemonade',
      sales: 1554000
    }, {
      artist: 'Chris Stapleton',
      name: 'Traveller',
      sales: 1085000
    }, {
      artist: 'Pentatonix',
      name: 'A Pentatonix Christmas',
      sales: 904000
    }, {
      artist: 'Original Broadway Cast Recording',
      name: 'Hamilton: An American Musical',
      sales: 820000
    }, {
      artist: 'Twenty One Pilots',
      name: 'Blurryface',
      sales: 738000
    }, {
      artist: 'Prince',
      name: 'The Very Best of Prince',
      sales: 668000
    }, {
      artist: 'Rihanna',
      name: 'Anti',
      sales: 603000
    }, {
      artist: 'Justin Bieber',
      name: 'Purpose',
      sales: 554000
    }]);
    _defineProperty(this, "musicAlbums", void 0);
    this.musicAlbums = this.musicData.slice();
  }
  return _createClass(AlbumService, [{
    key: "deleteArtist",
    value: function deleteArtist(name) {
      var albumsWithoutArtist = this.musicAlbums.filter(function (album) {
        return album.artist !== name;
      });
      this.musicAlbums = albumsWithoutArtist;
    }
  }, {
    key: "addAlbum",
    value: function addAlbum(album) {
      this.musicAlbums.push(album);
    }
  }, {
    key: "searchArtist",
    value: function searchArtist(name) {
      var albumsFromArtist = this.musicAlbums.filter(function (album) {
        return album.artist.toLowerCase().includes(name.toLowerCase());
      });
      return albumsFromArtist;
    }
  }, {
    key: "getAlbumsWithMostSales",
    value: function getAlbumsWithMostSales() {
      return this.musicAlbums.filter(function (album) {
        return album.sales >= 1000000;
      });
    }
  }, {
    key: "getArtistsWithLongNames",
    value: function getArtistsWithLongNames() {
      return this.musicAlbums.filter(function (album) {
        return album.artist.length >= 8;
      });
    }
  }]);
}();

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablePopulator: function() { return /* binding */ TablePopulator; }
/* harmony export */ });
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TablePopulator = /*#__PURE__*/function () {
  function TablePopulator() {
    _classCallCheck(this, TablePopulator);
  }
  return _createClass(TablePopulator, [{
    key: "rowTemplate",
    value: function rowTemplate(album, albumType) {
      if (albumType === "bigArtist") {
        return "<div>".concat(album.artist, " es un gran artista!</div>");
      } else if (albumType === "longName") {
        return "<div>".concat(album.artist, " tiene un nombre muy grande</div>");
      } else if (albumType === "searchedByArtist") {
        return "<div>El album ".concat(album.name, " tiene de ").concat(album.artist, " ha vendido ").concat(album.sales, " copias</div>");
      } else {
        return "<tr><td>".concat(album.name, "</td><td>").concat(album.artist, "</td><td>").concat(album.sales, "</td></tr>");
      }
    }
  }, {
    key: "addArtistsToTable",
    value: function addArtistsToTable(tableElement, albums) {
      var artistType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      tableElement.innerHTML = "";
      tableElement.innerHTML += this.getAlbums(albums, artistType);
    }
  }, {
    key: "getAlbums",
    value: function getAlbums(albums, albumType) {
      var _this = this;
      var tableRows = "";
      albums.forEach(function (album) {
        return tableRows += _this.rowTemplate(album, albumType);
      });
      return tableRows;
    }
  }, {
    key: "getTotalSales",
    value: function getTotalSales(albums) {
      var totalAlbumSales = 0;
      albums.forEach(function (album) {
        return totalAlbumSales += album.sales;
      });
      return totalAlbumSales;
    }
  }]);
}();

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _albums_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




//get data containers
var artistsTable = document.getElementById("all-artist-table");
var longNamesTable = document.getElementById("long-names-container");
var bigArtistsTable = document.getElementById("big-artists-container");
var totalSalesContainer = document.getElementById("total-sales-container");
var searchedArtistsContainer = document.getElementById("searched-artists-container");

//get buttons that trigger those actions
var artistsPane = document.getElementById("artists-tab");
var longNamesPane = document.getElementById("long-names-tab");
var bigArtistsPane = document.getElementById("big-artists-tab");
var searchButton = document.getElementById("button-search");
var artistNameInput = document.getElementById("artist-input");
var allAlbums, longNames, bigArtists;
var totalAlbumSales;
var albumService = new _albums_service__WEBPACK_IMPORTED_MODULE_1__.AlbumService();
var tablePopulator = new _table_service__WEBPACK_IMPORTED_MODULE_2__.TablePopulator();
var okComputer = {
  name: "Ok Computer",
  artist: "Radiohead",
  sales: 5000000
};
albumService.deleteArtist("Adele");
albumService.deleteArtist("Prince");
albumService.deleteArtist("Justin Bieber");
albumService.addAlbum(okComputer);
function loadFirstTime() {
  allAlbums = albumService.musicAlbums;
  totalAlbumSales = tablePopulator.getTotalSales(allAlbums);
  tablePopulator.addArtistsToTable(artistsTable, allAlbums);
  totalSalesContainer.innerHTML = totalAlbumSales.toString();
}
artistsPane.addEventListener("click", function () {
  loadFirstTime();
});
bigArtistsPane.addEventListener("click", function () {
  bigArtists = albumService.getAlbumsWithMostSales();
  tablePopulator.addArtistsToTable(bigArtistsTable, bigArtists, "bigArtist");
});
longNamesPane.addEventListener("click", function () {
  longNames = albumService.getArtistsWithLongNames();
  tablePopulator.addArtistsToTable(longNamesTable, longNames, "longName");
});
searchButton.addEventListener("click", function () {
  var artistsName = artistNameInput.value;
  if (artistsName !== "") {
    var searchedArtists = albumService.searchArtist(artistsName);
    if (searchedArtists.length == 0) {
      searchedArtistsContainer.innerHTML = "<span>Lo sentimos, no conocemos ese artista! :C</span>";
    } else {
      tablePopulator.addArtistsToTable(searchedArtistsContainer, searchedArtists, "searchedByArtist");
    }
  } else {
    searchedArtistsContainer.innerHTML = "<span>Por favor ingresa un nombre! :C</span>";
  }
});
loadFirstTime();
}();
/******/ })()
;