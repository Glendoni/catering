webpackJsonp([7],{

/***/ "../../../../../src/app/routes/maps/google/google.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Basic Map</div>\r\n                <div class=\"cardbox-body\">\r\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [style.height]=\"'300px'\" class=\"center-block\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Markers</div>\r\n                <div class=\"cardbox-body\">\r\n                    <agm-map #agmMap [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [style.height]=\"'300px'\" class=\"center-block\">\r\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        <agm-marker [latitude]=\"lat2\" [longitude]=\"lng2\"></agm-marker>\r\n                    </agm-map>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">Panorama</div>\r\n        <div class=\"cardbox-body\">\r\n            <div id=\"panorama\" class=\"gmap\" [style.height]=\"'240px'\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/maps/google/google.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/maps/google/google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleComponent = (function () {
    function GoogleComponent(pt) {
        this.lat = -12.043333;
        this.lng = -77.028333;
        this.zoom = 14;
        this.scrollwheel = false;
        this.lat2 = -12.043333;
        this.lng2 = -77.03;
        pt.setTitle('Google Maps');
    }
    GoogleComponent.prototype.ngOnInit = function () {
        this.agmMap.mapReady.subscribe(function (map) {
            new google.maps.StreetViewPanorama(document.getElementById('panorama'), {
                position: { lat: 42.3455, lng: -71.0983 },
                pov: { heading: 165, pitch: 0 },
                zoom: 1
            });
        });
    };
    return GoogleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('agmMap'),
    __metadata("design:type", Object)
], GoogleComponent.prototype, "agmMap", void 0);
GoogleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-google',
        template: __webpack_require__("../../../../../src/app/routes/maps/google/google.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/maps/google/google.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], GoogleComponent);

var _a;
//# sourceMappingURL=google.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/maps/maps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_google_component__ = __webpack_require__("../../../../../src/app/routes/maps/google/google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vector_vector_component__ = __webpack_require__("../../../../../src/app/routes/maps/vector/vector.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'google', component: __WEBPACK_IMPORTED_MODULE_4__google_google_component__["a" /* GoogleComponent */] },
    { path: 'vector', component: __WEBPACK_IMPORTED_MODULE_5__vector_vector_component__["a" /* VectorComponent */] }
];
var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__google_google_component__["a" /* GoogleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__vector_vector_component__["a" /* VectorComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], MapsModule);

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/maps/vector/vector.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"pull-right\"><span class=\"mr text-muted\">Show last year events</span>\r\n                <label class=\"switch switch-info\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"showAllMarkers\" (change)=\"displayAllMarkers(showAllMarkers)\" /><span></span>\r\n                </label>\r\n            </div>\r\n            <div class=\"cardbox-title\">World Events</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div vectormap [mapHeight]=\"400\" [mapOptions]=\"options\" [mapSeries]=\"series\" [mapMarkers]=\"markers\" class=\"vector-map\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Usa Makers</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div vectormap [mapHeight]=\"400\" [mapOptions]=\"usa_options\" [mapSeries]=\"series\" [mapMarkers]=\"usa_markers\" class=\"vector-map\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/maps/vector/vector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Vector Maps\r\n */\n.vector-map {\n  height: 400px; }\n  .vector-map svg {\n    width: 100%; }\n  .vector-map .jvectormap-container {\n    background-color: transparent !important; }\n  .vector-map .jvectormap-zoomin,\n  .vector-map .jvectormap-zoomout {\n    position: absolute;\n    left: 10px;\n    width: 22px;\n    height: 22px;\n    border-radius: 2px;\n    background: #515253;\n    padding: 5px;\n    color: white;\n    cursor: pointer;\n    line-height: 10px;\n    text-align: center; }\n  .vector-map .jvectormap-zoomin {\n    top: 10px; }\n  .vector-map .jvectormap-zoomout {\n    top: 30px; }\n\n.jvectormap-label {\n  position: absolute;\n  display: none;\n  border: solid 1px #313232;\n  border-radius: 2px;\n  background: #313232;\n  color: white;\n  padding: 3px 6px;\n  opacity: 0.9;\n  z-index: 11; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/maps/vector/vector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VectorComponent = (function () {
    function VectorComponent(pt, colors) {
        this.colors = colors;
        this.options = {
            map: 'world_mill_en',
            normalizeFunction: 'polynomial',
            backgroundColor: '#fff',
            regionsSelectable: true,
            markersSelectable: true,
            regionStyle: {
                initial: {
                    fill: this.colors.byName('gray-lighter')
                },
                hover: {
                    fill: this.colors.byName('green-500'),
                    stroke: '#fff'
                },
            },
            markerStyle: {
                initial: {
                    fill: this.colors.byName('lightBlue-500'),
                    stroke: '#fff',
                    r: 10
                },
                hover: {
                    fill: this.colors.byName('purple-500'),
                    stroke: '#fff'
                }
            }
        };
        this.series = {};
        this.world_markers = [
            { 'latLng': [47.14, 9.52], 'name': 'Liechtenstein' },
            { 'latLng': [7.11, 171.06], 'name': 'Marshall Islands' },
            { 'latLng': [17.3, -62.73], 'name': 'Saint Kitts and Nevis' },
            { 'latLng': [3.2, 73.22], 'name': 'Maldives' },
            { 'latLng': [35.88, 14.5], 'name': 'Malta' },
            { 'latLng': [12.05, -61.75], 'name': 'Grenada' },
            { 'latLng': [13.16, -61.23], 'name': 'Saint Vincent and the Grenadines' },
            { 'latLng': [13.16, -59.55], 'name': 'Barbados' },
            { 'latLng': [17.11, -61.85], 'name': 'Antigua and Barbuda' },
            { 'latLng': [-4.61, 55.45], 'name': 'Seychelles' },
            { 'latLng': [7.35, 134.46], 'name': 'Palau' },
            { 'latLng': [42.5, 1.51], 'name': 'Andorra' }
        ];
        this.other_markers = [
            { 'latLng': [56.13, -106.34], 'name': 'Canada', style: { fill: this.colors.byName('info') } },
            { 'latLng': [40.71, -74.00], 'name': 'New York', style: { fill: this.colors.byName('info') } },
            { 'latLng': [43.65, -79.38], 'name': 'Toronto', style: { fill: this.colors.byName('info') } },
            { 'latLng': [37.77, -122.41], 'name': 'San Francisco', style: { fill: this.colors.byName('info') } },
            { 'latLng': [39.32, -111.09], 'name': 'Utah', style: { fill: this.colors.byName('info') } },
            { 'latLng': [41.9, 12.45], 'name': 'Vatican City', style: { fill: this.colors.byName('info') } },
            { 'latLng': [43.93, 12.46], 'name': 'San Marino', style: { fill: this.colors.byName('info') } }
        ];
        this.showAllMarkers = false;
        this.markers = this.world_markers;
        // USA Map
        this.usa_markers = [{
                latLng: [40.71, -74.00],
                name: 'New York'
            }, {
                latLng: [34.05, -118.24],
                name: 'Los Angeles'
            }, {
                latLng: [41.87, -87.62],
                name: 'Chicago'
            }, {
                latLng: [29.76, -95.36],
                name: 'Houston'
            }, {
                latLng: [39.95, -75.16],
                name: 'Philadelphia'
            }, {
                latLng: [38.90, -77.03],
                name: 'Washington'
            }, {
                latLng: [37.36, -122.03],
                name: 'Silicon Valley',
                style: {
                    fill: this.colors.byName('teal-700'),
                    r: 20
                }
            }];
        this.usa_options = {
            map: 'us_mill_en',
            normalizeFunction: 'polynomial',
            backgroundColor: '#fff',
            regionsSelectable: true,
            markersSelectable: true,
            regionStyle: {
                initial: {
                    fill: this.colors.byName('gray-lighter')
                },
                hover: {
                    fill: this.colors.byName('cyan-100'),
                    stroke: '#fff'
                },
            },
            markerStyle: {
                initial: {
                    fill: this.colors.byName('teal-300'),
                    stroke: '#fff',
                    r: 10
                },
                hover: {
                    fill: this.colors.byName('teal-300'),
                    stroke: '#fff'
                }
            }
        };
        pt.setTitle('Vector Maps');
    }
    VectorComponent.prototype.displayAllMarkers = function (show) {
        if (show)
            this.markers = this.world_markers.concat(this.other_markers);
        else
            this.markers = this.world_markers;
    };
    VectorComponent.prototype.ngOnInit = function () {
    };
    return VectorComponent;
}());
VectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vector',
        template: __webpack_require__("../../../../../src/app/routes/maps/vector/vector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/maps/vector/vector.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object])
], VectorComponent);

var _a, _b;
//# sourceMappingURL=vector.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map