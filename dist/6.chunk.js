webpackJsonp([6],{

/***/ "../../../../../src/app/routes/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radial_radial_component__ = __webpack_require__("../../../../../src/app/routes/charts/radial/radial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flot_flot_component__ = __webpack_require__("../../../../../src/app/routes/charts/flot/flot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__peity_peity_component__ = __webpack_require__("../../../../../src/app/routes/charts/peity/peity.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'radial', component: __WEBPACK_IMPORTED_MODULE_3__radial_radial_component__["a" /* RadialComponent */] },
    { path: 'flot', component: __WEBPACK_IMPORTED_MODULE_4__flot_flot_component__["a" /* FlotComponent */] },
    { path: 'peity', component: __WEBPACK_IMPORTED_MODULE_5__peity_peity_component__["a" /* PeityComponent */] }
];
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__radial_radial_component__["a" /* RadialComponent */],
            __WEBPACK_IMPORTED_MODULE_4__flot_flot_component__["a" /* FlotComponent */],
            __WEBPACK_IMPORTED_MODULE_5__peity_peity_component__["a" /* PeityComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/flot/flot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"barData\" [options]=\"barOptions\" class=\"flot-chart\" height=\"275\" id=\"bar-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Single Bars</strong></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"barStackeData\" [options]=\"barStackedOptions\" class=\"flot-chart\" height=\"275\" id=\"barstacked-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Stacked Bars</strong></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"areaData\" [options]=\"areaOptions\" class=\"flot-chart\" height=\"275\" id=\"area-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Area Chart</strong></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" class=\"flot-chart\" height=\"275\" id=\"spline-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Spline Chart</strong></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"realTimeData\" [options]=\"realTimeOptions\" class=\"flot-chart\" height=\"275\" id=\"realtime-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Real Time</strong></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"lineData\" [options]=\"lineOptions\" class=\"flot-chart\" height=\"275\" id=\"line-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Line</strong></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"pieData\" [options]=\"pieOptions\" class=\"flot-chart\" height=\"275\" id=\"pie-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Pie</strong></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"donutData\" [options]=\"donutOptions\" class=\"flot-chart\" height=\"275\" id=\"donut-flotchart\"></div>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><strong>Donut</strong></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/flot/flot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Flot Chart\r\n */\n.flot-chart {\n  display: block;\n  width: 100%;\n  font-size: 12px; }\n  @media only screen and (min-width: 768px) {\n    .flot-chart {\n      font-size: 14px; } }\n  .flot-chart .legend > div,\n  .flot-chart .legend > table {\n    top: 0 !important;\n    background-color: transparent !important;\n    color: inherit !important; }\n  .flot-chart .legend > table tr td {\n    padding: 3px; }\n  .flot-chart .legend > table tr td:first-child {\n    padding-left: 3px; }\n  .flot-chart .legend > table tr td:last-child {\n    padding-right: 3px; }\n  .flot-chart .legend > table tr + tr td {\n    padding-top: 0; }\n  .flot-chart .legend > div:first-child {\n    border-color: rgba(0, 0, 0, 0.1) !important; }\n  .flot-chart .legend .legendColorBox > div,\n  .flot-chart .legend .legendColorBox > div > div {\n    border-radius: 400px; }\n  .flot-chart .legend .legendColorBox > div {\n    border-color: rgba(162, 162, 162, 0.46) !important; }\n  .flot-chart.flot-legend-left .legend > div,\n  .flot-chart.flot-legend-left .legend > table {\n    left: 0 !important; }\n  .flot-chart:not([height]) {\n    height: 120px; }\n  .flot-chart.flot-chart-lg {\n    height: 275px; }\n  .flot-chart.flot-chart-md {\n    height: 190px; }\n  .flot-chart.flot-chart-sm {\n    height: 80px; }\n  .flot-chart.flot-chart-xs {\n    height: 60px; }\n\n.flot-chart-content {\n  width: 100%;\n  height: 100%; }\n\n.flot-pie-label {\n  padding: 3px 5px;\n  font-size: 10px;\n  text-align: center;\n  color: #fff; }\n\n#flotTip,\n.flotTip {\n  position: relative;\n  padding: 8px 16px;\n  font-size: 13px !important;\n  font-weight: 600;\n  border-radius: 2px !important;\n  border-color: transparent !important;\n  background-color: #455A64 !important;\n  color: #fff;\n  z-index: 5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/charts/flot/flot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlotComponent = (function () {
    function FlotComponent(http, pt, colors) {
        var _this = this;
        this.http = http;
        this.colors = colors;
        this.barOptions = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: true,
                    fillColor: { colors: [this.colors.byName('blue-500'), this.colors.byName('purple-500')] }
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: this.colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                // position: (isRTL ? 'right' : 'left'),
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: this.colors.byName('blueGrey-200')
                }
            },
            shadowSize: 0
        };
        this.barStackedOptions = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: this.colors.byName('blueGrey-200')
                },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 200,
                // position: (isRTL ? 'right' : 'left'),
                tickColor: 'rgba(162,162,162,.26)',
                font: {
                    color: this.colors.byName('blueGrey-200')
                }
            },
            shadowSize: 0
        };
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 2
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 1
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') },
                // position: 'right' or 'left',
                tickFormatter: function (v) { return v; }
            },
            shadowSize: 0
        };
        this.areaOptions = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.5
                            }, {
                                opacity: 0.9
                            }]
                    }
                },
                points: {
                    show: false
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') },
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') },
            },
            shadowSize: 0
        };
        this.lineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: 'rgba(162,162,162,.26)',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') },
                mode: 'categories'
            },
            yaxis: {
                max: 300,
                // position: 'right' or 'left',
                tickColor: 'rgba(162,162,162,.26)',
                font: { color: this.colors.byName('blueGrey-200') }
            },
            shadowSize: 0
        };
        // PIE
        // -----------------------------------
        this.pieData = [{
                'label': 'CSS',
                'color': '#009688',
                'data': 40
            }, {
                'label': 'LESS',
                'color': '#FFC107',
                'data': 90
            }, {
                'label': 'SASS',
                'color': '#FF7043',
                'data': 75
            }];
        this.pieOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function (label, series) {
                            return '<div class="flot-pie-label">' +
                                //label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };
        // DONUT
        // -----------------------------------
        this.donutData = [{
                'color': '#4CAF50',
                'data': 60,
                'label': 'Coffee'
            }, {
                'color': '#009688',
                'data': 90,
                'label': 'CSS'
            }, {
                'color': '#FFC107',
                'data': 50,
                'label': 'LESS'
            }, {
                'color': '#FF7043',
                'data': 80,
                'label': 'Jade'
            }, {
                'color': '#3949AB',
                'data': 116,
                'label': 'AngularJS'
            }];
        this.donutOptions = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };
        // REALTIME
        // -----------------------------------
        this.rtAuxData = [];
        this.realTimeOptions = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [this.colors.byName('blue-500'), this.colors.byName('blue-500')]
                    }
                },
                shadowSize: 0 // Drawing is faster without shadows
            },
            grid: {
                show: false,
                borderWidth: 0,
                minBorderMargin: 20,
                labelMargin: 10
            },
            xaxis: {
                tickFormatter: function () { return ''; }
            },
            yaxis: {
                min: 0,
                max: 110
            },
            legend: {
                show: true
            },
            colors: [this.colors.byName('blue-500')]
        };
        pt.setTitle('Flot Charts');
        this.getChartData('assets/static/chart/bar.json').subscribe(function (data) { return _this.barData = data; });
        this.getChartData('assets/static/chart/barstacked.json').subscribe(function (data) { return _this.barStackeData = data; });
        this.getChartData('assets/static/chart/spline.json').subscribe(function (data) { return _this.splineData = data; });
        this.getChartData('assets/static/chart/area.json').subscribe(function (data) { return _this.areaData = data; });
        this.getChartData('assets/static/chart/line.json').subscribe(function (data) { return _this.lineData = data; });
    }
    ;
    FlotComponent.prototype.getChartData = function (url) {
        return this.http.get(url).map(function (data) { return data.json(); });
    };
    FlotComponent.prototype.ngOnInit = function () {
        // Generate random data for realtime demo
        this.update();
    };
    // REALTIME demo
    // -----------------------------------
    FlotComponent.prototype.getRandomData = function () {
        var totalPoints = 300;
        if (this.rtAuxData.length > 0) {
            this.rtAuxData = this.rtAuxData.slice(1);
        }
        // Do a random walk
        while (this.rtAuxData.length < totalPoints) {
            var prev = this.rtAuxData.length > 0 ? this.rtAuxData[this.rtAuxData.length - 1] : 50, y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            }
            else if (y > 100) {
                y = 100;
            }
            this.rtAuxData.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.rtAuxData.length; ++i) {
            res.push([i, this.rtAuxData[i]]);
        }
        return [res];
    };
    FlotComponent.prototype.update = function () {
        this.realTimeData = this.getRandomData();
        setTimeout(this.update.bind(this), 30);
    };
    return FlotComponent;
}());
FlotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-flot',
        template: __webpack_require__("../../../../../src/app/routes/charts/flot/flot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/charts/flot/flot.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _c || Object])
], FlotComponent);

var _a, _b, _c;
//# sourceMappingURL=flot.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/peity/peity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <div class=\"row\">\r\n        <!-- Pie Chart-->\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"cardbox-title\">Pie Charts</div><small>A \"/\" delimiter is assumed to mean \"three out of five\", otherwise all of the values are included in the chart and the total is the sum of all values.</small>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <span peity [type]=\"'pie'\" [data]=\"pieData1\" [options]=\"pieOptions\"></span>\r\n                        <span peity [type]=\"'pie'\" [data]=\"pieData2\" [options]=\"pieOptions\"></span>\r\n                        <span peity [type]=\"'pie'\" [data]=\"pieData3\" [options]=\"pieOptions\"></span>\r\n                        <span peity [type]=\"'pie'\" [data]=\"pieData4\" [options]=\"pieOptions\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <pre><code>&lt;span peity [type]=&quot;'pie'&quot; [data]=&quot;pieData1&quot; [options]=&quot;pieOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'pie'&quot; [data]=&quot;pieData2&quot; [options]=&quot;pieOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'pie'&quot; [data]=&quot;pieData3&quot; [options]=&quot;pieOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'pie'&quot; [data]=&quot;pieData4&quot; [options]=&quot;pieOptions&quot;&gt;&lt;/span&gt;</code></pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Donut Charts-->\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"cardbox-title\">Donut Charts</div><small>Donut charts are the same as pie charts and take the same options with an added innerRadius option which defaults to half the radius.</small>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <span peity [type]=\"'donut'\" [data]=\"donutData1\" [options]=\"donutOptions\"></span>\r\n                        <span peity [type]=\"'donut'\" [data]=\"donutData2\" [options]=\"donutOptions\"></span>\r\n                        <span peity [type]=\"'donut'\" [data]=\"donutData3\" [options]=\"donutOptions\"></span>\r\n                        <span peity [type]=\"'donut'\" [data]=\"donutData4\" [options]=\"donutOptions\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <pre><code>&lt;span peity [type]=&quot;'donut'&quot; [data]=&quot;donutData1&quot; [options]=&quot;donutOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'donut'&quot; [data]=&quot;donutData2&quot; [options]=&quot;donutOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'donut'&quot; [data]=&quot;donutData3&quot; [options]=&quot;donutOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]=&quot;'donut'&quot; [data]=&quot;donutData4&quot; [options]=&quot;donutOptions&quot;&gt;&lt;/span&gt;</code></pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!-- Line Chart-->\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"cardbox-title\">Line Charts</div><small>Line charts work on a comma-separated list. Line charts can take as options: delimiter, fill, height, max, min, stroke, strokeWidth and width.</small>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <span peity [type]=\"'line'\" [data]=\"lineData1\" [options]=\"lineOptions\"></span>\r\n                        <span peity [type]=\"'line'\" [data]=\"lineData2\" [options]=\"lineOptions\"></span>\r\n                        <span peity [type]=\"'line'\" [data]=\"lineData3\" [options]=\"lineOptions\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <pre><code>&lt;span peity [type]&quot;'line'&quot; [data]=&quot;lineData1&quot; [options]=&quot;lineOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]&quot;'line'&quot; [data]=&quot;lineData2&quot; [options]=&quot;lineOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]&quot;'line'&quot; [data]=&quot;lineData3&quot; [options]=&quot;lineOptions&quot;&gt;&lt;/span&gt;</code></pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Bar Charts-->\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"cardbox-title\">Bar Charts</div><small>Bar charts work in the same way as line charts and take the following options: delimiter, fill, height, max, min, padding and width.</small>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <span peity [type]=\"'bar'\" [data]=\"barData1\" [options]=\"barOptions\"></span>\r\n                        <span peity [type]=\"'bar'\" [data]=\"barData2\" [options]=\"barOptions\"></span>\r\n                        <span peity [type]=\"'bar'\" [data]=\"barData3\" [options]=\"barOptions\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <pre><code>&lt;span peity [type]&quot;'bar'&quot; [data]=&quot;barData1&quot; [options]=&quot;barOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]&quot;'bar'&quot; [data]=&quot;barData2&quot; [options]=&quot;barOptions&quot;&gt;&lt;/span&gt;\r\n&lt;span peity [type]&quot;'bar'&quot; [data]=&quot;barData3&quot; [options]=&quot;barOptions&quot;&gt;&lt;/span&gt;</code></pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox mb-0\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Real time</div><small>Charts can be updated by changing the the jQuery selection's text content and calling change() on it. The chart will be redrawn with the same options that were originally passed to it.</small>\r\n            <div class=\"cardbox-body\">\r\n                <span peity [type]=\"'line'\" [data]=\"realTimeData\" [options]=\"realTimeOptions\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/peity/peity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/charts/peity/peity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeityComponent = (function () {
    function PeityComponent(pt, colors) {
        this.colors = colors;
        this.pieOptions = {
            radius: 25,
            fill: [this.colors.byName('deepPurple-100'), this.colors.byName('deepPurple-400'), this.colors.byName('deepPurple-700')]
        };
        this.pieData1 = '1/5';
        this.pieData2 = '226/360';
        this.pieData3 = [0.52, 1.041];
        this.pieData4 = [1, 2, 3, 2, 2];
        this.donutOptions = {
            radius: 25,
            fill: [this.colors.byName('pink-100'), this.colors.byName('pink-400'), this.colors.byName('pink-700')]
        };
        this.donutData1 = '1/5';
        this.donutData2 = '226/360';
        this.donutData3 = [0.52, 1.041];
        this.donutData4 = [1, 2, 3, 2, 2];
        this.lineOptions = {
            height: 40,
            width: 100,
            strokeWidth: 3,
            stroke: this.colors.byName('teal-500'),
            fill: this.colors.byName('teal-100')
        };
        this.lineData1 = [5, 3, 9, 6, 5, 9, 7, 3, 5, 2];
        this.lineData2 = [5, 3, 2, -1, -3, -2, 2, 3, 5, 2];
        this.lineData3 = [0, -3, -6, -4, -5, -4, -7, -3, -5, -2];
        this.barOptions = {
            height: 40,
            width: 100,
            fill: [this.colors.byName('cyan-100'), this.colors.byName('cyan-400'), this.colors.byName('cyan-700')]
        };
        this.barData1 = [5, 3, 9, 6, 5, 9, 7, 3, 5, 2];
        this.barData2 = [5, 3, 2, -1, -3, -2, 2, 3, 5, 2];
        this.barData3 = [0, -3, -6, -4, -5, -4, -7, -3, -5, -2];
        // Real time example
        this.realTimeOptions = {
            fill: this.colors.byName('green-200'),
            stroke: this.colors.byName('green-500'),
            width: '100%',
            height: 60
        };
        this.realTimeData = [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2];
        pt.setTitle('Peity');
    }
    PeityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.realTimeData.shift();
            _this.realTimeData.push(Math.round(Math.random() * 10));
            _this.realTimeData = _this.realTimeData.slice(); // force a new instance of the data
        }, 1000);
    };
    PeityComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    return PeityComponent;
}());
PeityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-peity',
        template: __webpack_require__("../../../../../src/app/routes/charts/peity/peity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/charts/peity/peity.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object])
], PeityComponent);

var _a, _b;
//# sourceMappingURL=peity.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/radial/radial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Knob Charts</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Default</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <input knob [data]=\"knobLoaderData1\" [options]=\"knobLoaderOptions1\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Ready only</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <input knob [data]=\"knobLoaderData2\" [options]=\"knobLoaderOptions2\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Offset and arc</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <input knob [data]=\"knobLoaderData3\" [options]=\"knobLoaderOptions3\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Display previous</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <input knob [data]=\"knobLoaderData4\" [options]=\"knobLoaderOptions4\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Easypie Charts</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Default</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <div easypiechart [options]=\"pieOptions1\" [percent]=\"piePercent1\" class=\"easypie-chart\"><span>{{piePercent1}}</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Slim</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <div easypiechart [options]=\"pieOptions2\" [percent]=\"piePercent2\" class=\"easypie-chart\"><span>{{piePercent1}}</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Track color</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <div easypiechart [options]=\"pieOptions3\" [percent]=\"piePercent3\" class=\"easypie-chart\"><span>{{piePercent1}}</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xl-3 col-sm-6\">\r\n                    <div class=\"cardbox cardbox-flat text-center\">\r\n                        <div class=\"cardbox-heading\">Scale color</div>\r\n                        <div class=\"cardbox-body text-center\">\r\n                            <div easypiechart [options]=\"pieOptions4\" [percent]=\"piePercent4\" class=\"easypie-chart\"><span>{{piePercent1}}</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/radial/radial.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Easy Pie Chart\r\n */\n.easypie-chart {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px; }\n  .easypie-chart span,\n  .easypie-chart .percentage {\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 100%;\n    margin-left: -50%;\n    height: 30px;\n    margin-top: -15px;\n    line-height: 25px;\n    text-align: center; }\n  .easypie-chart span {\n    font-size: 20px; }\n  .easypie-chart canvas {\n    max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/charts/radial/radial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadialComponent = (function () {
    function RadialComponent(pt, colors) {
        this.colors = colors;
        // KNOB Charts
        this.knobLoaderData1 = 80;
        this.knobLoaderOptions1 = {
            width: '50%',
            displayInput: true,
            thickness: 0.1,
            fgColor: this.colors.byName('cyan-500'),
            bgColor: 'rgba(162,162,162, .09)'
        };
        this.knobLoaderData2 = 45;
        this.knobLoaderOptions2 = {
            width: '50%',
            displayInput: true,
            thickness: 1,
            inputColor: '#fff',
            fgColor: this.colors.byName('amber-500'),
            bgColor: this.colors.byName('yellow-500'),
            readOnly: true
        };
        this.knobLoaderData3 = 20;
        this.knobLoaderOptions3 = {
            width: '50%',
            displayInput: true,
            fgColor: this.colors.byName('primary'),
            bgColor: 'rgba(162,162,162, .09)',
            angleOffset: -125,
            angleArc: 250
        };
        this.knobLoaderData4 = 30;
        this.knobLoaderOptions4 = {
            width: '50%',
            displayInput: true,
            fgColor: this.colors.byName('red-500'),
            bgColor: 'rgba(162,162,162, .09)',
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        // Easy Pie Charts
        this.piePercent1 = 85;
        this.piePercent2 = 45;
        this.piePercent3 = 25;
        this.piePercent4 = 60;
        this.pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        this.pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('danger'),
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        this.pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('deepPurple-500'),
            trackColor: false,
            scaleColor: this.colors.byName('gray'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        this.pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('deepPurple-500'),
            trackColor: 'rgba(162,162,162, .09)',
            scaleColor: this.colors.byName('gray-dark'),
            lineWidth: 15,
            lineCap: 'circle'
        };
        pt.setTitle('Radial Charts');
    }
    RadialComponent.prototype.randomize = function (type) {
        if (type === 'easy') {
            this.piePercent1 = this.random();
            this.piePercent2 = this.random();
            this.piePercent3 = this.random();
            this.piePercent4 = this.random();
        }
        if (type === 'knob') {
            this.knobLoaderData1 = this.random();
            this.knobLoaderData2 = this.random();
            this.knobLoaderData3 = this.random();
            this.knobLoaderData4 = this.random();
        }
    };
    ;
    RadialComponent.prototype.random = function () {
        return Math.floor((Math.random() * 100) + 1);
    };
    RadialComponent.prototype.ngOnInit = function () {
    };
    return RadialComponent;
}());
RadialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-radial',
        template: __webpack_require__("../../../../../src/app/routes/charts/radial/radial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/charts/radial/radial.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object])
], RadialComponent);

var _a, _b;
//# sourceMappingURL=radial.component.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map