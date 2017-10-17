webpackJsonp([9],{

/***/ "../../../../../src/app/routes/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/routes/dashboard/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
            })
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/dashboard/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-9\">\r\n            <div class=\"welcome\">\r\n                <div class=\"float-right mt-1 mr-1 hidden-sm-down\">\r\n                    <a class=\"text-muted\" href=\"#\">\r\n                        <em class=\"ion-grid icon-lg\"></em>\r\n                    </a>\r\n                </div>\r\n                <h1>Hello, Jane</h1>\r\n                <p>Welcome back to your Bootstrap 4 admin template.</p>\r\n            </div>\r\n            <div class=\"my-4\">\r\n                <button class=\"btn btn-oval btn-primary btn-gradient mr-2\">14 Messages</button>\r\n                <button class=\"btn btn-secondary btn-oval\" type=\"button\"><em class=\"ion-forward text-success mr-2 icon-lg\"></em><span>View requests</span></button>\r\n            </div>\r\n            <div class=\"h-scroll\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-8 col-md-4\">\r\n                        <div class=\"cardbox\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"clearfix mb-2\">\r\n                                    <div class=\"float-right\"><small><em class=\"ml-2 ion-arrow-up-b\"></em></small></div>\r\n                                    <div class=\"float-left\"><small>Running tasks</small></div>\r\n                                </div>\r\n                                <div class=\"h3\" data-counter=\"275\">0</div>\r\n                                <div class=\"text-center mt-3\">\r\n                                    <div sparkline [values]=\"sparkValue1\" [options]=\"sparkOpts1\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8 col-md-4\">\r\n                        <div class=\"cardbox\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"clearfix mb-2\">\r\n                                    <div class=\"float-right\"><small><em class=\"ml-2 ion-arrow-down-b\"></em></small></div>\r\n                                    <div class=\"float-left\"><small>Commits</small></div>\r\n                                </div>\r\n                                <div class=\"h3\" data-counter=\"8345\">0</div>\r\n                                <div class=\"text-center mt-3\">\r\n                                    <div sparkline [values]=\"sparkValue2\" [options]=\"sparkOpts2\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8 col-md-4\">\r\n                        <div class=\"cardbox\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"clearfix mb-2\">\r\n                                    <div class=\"float-right\"><small><em class=\"ml-2 ion-arrow-up-b\"></em></small></div>\r\n                                    <div class=\"float-left\"><small>Pull requests</small></div>\r\n                                </div>\r\n                                <div class=\"h3\" data-counter=\"559\">0</div>\r\n                                <div class=\"text-center mt-3\">\r\n                                    <div sparkline [values]=\"sparkValue3\" [options]=\"sparkOpts3\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading clearfix\">\r\n                    <div class=\"float-md-left\"><strong>Overview of sales progress</strong>\r\n                        <br><small>Relevance per month of the current year</small></div>\r\n                    <div class=\"mb-2 hidden-sm-up\"></div>\r\n                    <div class=\"float-md-right\">\r\n                        <select class=\"custom-select form-control form-control-sm\">\r\n                            <option value=\"1\" selected=\"\">Last Period</option>\r\n                            <option value=\"2\">Last Month</option>\r\n                            <option value=\"4\">Last Year</option>\r\n                            <option value=\"4\">01.01.2017 - 06.06.2017</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div style=\"margin: 0 -8px;\">\r\n                    <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"275\" class=\"flot-chart flot-chart-lg flot-legend-left\"></div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"h-scroll\">\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-4\"><small>Visitors</small>\r\n                                <h5 class=\"mt-1 mb-3\"><strong>550</strong></h5>\r\n                                <div class=\"progress progress-xs mb-0 wd-xs m-auto\">\r\n                                    <div class=\"progress-bar bg-success\" style=\"width: 45%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4\"><small>Clicks</small>\r\n                                <h5 class=\"mt-1 mb-3\"><strong>230</strong></h5>\r\n                                <div class=\"progress progress-xs mb-0 wd-xs m-auto\">\r\n                                    <div class=\"progress-bar bg-warning\" style=\"width: 25%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4\"><small>Income</small>\r\n                                <h5 class=\"mt-1 mb-3\"><strong>$2,154.5</strong></h5>\r\n                                <div class=\"progress progress-xs mb-0 wd-xs m-auto\">\r\n                                    <div class=\"progress-bar bg-info\" style=\"width: 75%;\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox cardbox-map\">\r\n                <agm-map #agmMap [latitude]=\"map.lat\" [longitude]=\"map.lng\" [zoom]=\"map.zoom\" [scrollwheel]=\"map.scrollwheel\" [style.height]=\"'240px'\" [styles]=\"MapStyles\" [disableDefaultUI]=\"map.disableDefaultUI\" [streetViewControl]=\"false\" class=\"gmap gmap-md\">\r\n                    <agm-marker [latitude]=\"map.lat\" [longitude]=\"map.lng\" [title]=\"'You'\" [iconUrl]=\"'assets/img/marker.png'\"></agm-marker>\r\n                </agm-map>\r\n                <div class=\"cardbox-footer\">\r\n                    <div class=\"d-flex align-items-center\">\r\n                        <div class=\"mr-3\"><img class=\"thumb48 rounded-circle img-thumbnail\" src=\"assets/img/user/02.jpg\" alt=\"user\"></div>\r\n                        <div><strong class=\"mr-1\">Lois Miller</strong><small>is near to you.</small>\r\n                            <br><span>5 km from your location.</span></div>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-sm btn-success\" type=\"button\">Start travel</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox\">\r\n                <!-- START table-responsive-->\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Assignments</th>\r\n                                <th class=\"text-center\">Lead</th>\r\n                                <th class=\"text-center\">Evolution</th>\r\n                                <th class=\"text-center\">No. Tasks</th>\r\n                                <th class=\"text-right\">Status</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <p class=\"m-0\">Hendrerit.\r\n                                        <br><small class=\"text-thin\">Sed porta fermentum felis in molestie.</small></p>\r\n                                </td>\r\n                                <td class=\"va-middle text-center\"><img class=\"wd-xxs2 rounded-circle shadow-z2\" src=\"assets/img/user/02.jpg\" alt=\"Team lead\" data-toggle=\"tooltip\" data-title=\"Marion Woods\"></td>\r\n                                <td class=\"text-right va-middle text-center\"><em class=\"ion-arrow-graph-up-right text-success\"></em></td>\r\n                                <td class=\"va-middle text-center\">25/50</td>\r\n                                <td class=\"va-middle text-right\">\r\n                                    <div class=\"badge badge-info\">in progress</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <p class=\"m-0\">Vestibulum mauris\r\n                                        <br><small class=\"text-thin\">Sed porta fermentum felis in molestie.</small></p>\r\n                                </td>\r\n                                <td class=\"va-middle text-center\"><img class=\"wd-xxs2 rounded-circle shadow-z2\" src=\"assets/img/user/03.jpg\" alt=\"Team lead\" data-toggle=\"tooltip\" data-title=\"Camila Martinez\"></td>\r\n                                <td class=\"text-right va-middle text-center\"><em class=\"ion-arrow-graph-down-right text-warning\"></em></td>\r\n                                <td class=\"va-middle text-center\">7/50</td>\r\n                                <td class=\"va-middle text-right\">\r\n                                    <div class=\"badge badge-success\">completed</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <p class=\"m-0\">Common Pictures\r\n                                        <br><small class=\"text-thin\">Sed porta fermentum felis in molestie.</small></p>\r\n                                </td>\r\n                                <td class=\"va-middle text-center\"><img class=\"wd-xxs2 rounded-circle shadow-z2\" src=\"assets/img/user/04.jpg\" alt=\"Team lead\" data-toggle=\"tooltip\" data-title=\"Carrie Romero\"></td>\r\n                                <td class=\"text-right va-middle text-center\"><em class=\"ion-arrow-graph-up-right text-success\"></em></td>\r\n                                <td class=\"va-middle text-center\">65/100</td>\r\n                                <td class=\"va-middle text-right\">\r\n                                    <div class=\"badge badge-info\">in progress</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <p class=\"m-0\">Workaround\r\n                                        <br><small class=\"text-thin\">Sed porta fermentum felis in molestie.</small></p>\r\n                                </td>\r\n                                <td class=\"va-middle text-center\"><img class=\"wd-xxs2 rounded-circle shadow-z2\" src=\"assets/img/user/05.jpg\" alt=\"Team lead\" data-toggle=\"tooltip\" data-title=\"Gregory Payne\"></td>\r\n                                <td class=\"text-right va-middle text-center\"><em class=\"ion-arrow-graph-down-right text-warning\"></em></td>\r\n                                <td class=\"va-middle text-center\">29/50</td>\r\n                                <td class=\"va-middle text-right\">\r\n                                    <div class=\"badge badge-danger\">canceled</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>\r\n                                    <p class=\"m-0\">Workaround\r\n                                        <br><small class=\"text-thin\">Sed porta fermentum felis in molestie.</small></p>\r\n                                </td>\r\n                                <td class=\"va-middle text-center\"><img class=\"wd-xxs2 rounded-circle shadow-z2\" src=\"assets/img/user/07.jpg\" alt=\"Team lead\" data-toggle=\"tooltip\" data-title=\"Gregory Payne\"></td>\r\n                                <td class=\"text-right va-middle text-center\"><em class=\"ion-arrow-graph-down-right text-warning\"></em></td>\r\n                                <td class=\"va-middle text-center\">29/50</td>\r\n                                <td class=\"va-middle text-right\">\r\n                                    <div class=\"badge badge-info\">in progress</div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <!-- END table-responsive-->\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div>Monthly performance</div>\r\n                </div>\r\n                <div class=\"cardbox-body py-0\">\r\n                    <div flot [dataset]=\"donutData\" [options]=\"donutOptions\" height=\"275\" class=\"flot-chart flot-chart-lg\"></div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"text-center\"><span class=\"mr-3\">2017 vs. 2016</span>\r\n                        <br><small>Aliquam commodo mauris non lectus porttitor dignissim.</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div flot [dataset]=\"barChartData\" [options]=\"barChartOptions\" height=\"180\" class=\"flot-chart flot-chart-md\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox cardbox-flat\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"float-right\"><em class=\"ion-alert-circled icon-lg text-muted\"></em></div>\r\n                    <div>System usage</div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"text-center\">\r\n                        <input knob [data]=\"knobLoaderData1\" [options]=\"knobLoaderOptions1\"/>\r\n                    </div>\r\n                    <small><span class=\"float-right\" id=\"ram-value\">{{progress1}}</span>RAM</small>\r\n                    <div class=\"progress progress-xs mb-4\">\r\n                        <div class=\"progress-bar bg-success\" [style.width]=\"progress1\"></div>\r\n                    </div>\r\n                    <small><span class=\"float-right\" id=\"io-value\">{{progress2}}</span>I/O</small>\r\n                    <div class=\"progress progress-xs mb-3\">\r\n                        <div class=\"progress-bar bg-info\" [style.width]=\"progress2\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <div class=\"float-right\">\r\n                        <p class=\"m-0 text-muted\"><em class=\"ml-2 ion-arrow-up-b\"></em></p>\r\n                    </div>\r\n                    <div>PR/Commits per version</div><small>Curabitur diam mi, ultricies eget porttitor at, suscipit nec metus.</small>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                <div flot [dataset]=\"stackedChartData\" [options]=\"stackedChartOptions\" height=\"190\" class=\"flot-chart mb-2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/dashboard/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Flot Chart\r\n */\n.flot-chart {\n  display: block;\n  width: 100%;\n  font-size: 12px; }\n  @media only screen and (min-width: 768px) {\n    .flot-chart {\n      font-size: 14px; } }\n  .flot-chart .legend > div,\n  .flot-chart .legend > table {\n    top: 0 !important;\n    background-color: transparent !important;\n    color: inherit !important; }\n  .flot-chart .legend > table tr td {\n    padding: 3px; }\n  .flot-chart .legend > table tr td:first-child {\n    padding-left: 3px; }\n  .flot-chart .legend > table tr td:last-child {\n    padding-right: 3px; }\n  .flot-chart .legend > table tr + tr td {\n    padding-top: 0; }\n  .flot-chart .legend > div:first-child {\n    border-color: rgba(0, 0, 0, 0.1) !important; }\n  .flot-chart .legend .legendColorBox > div,\n  .flot-chart .legend .legendColorBox > div > div {\n    border-radius: 400px; }\n  .flot-chart .legend .legendColorBox > div {\n    border-color: rgba(162, 162, 162, 0.46) !important; }\n  .flot-chart.flot-legend-left .legend > div,\n  .flot-chart.flot-legend-left .legend > table {\n    left: 0 !important; }\n  .flot-chart:not([height]) {\n    height: 120px; }\n  .flot-chart.flot-chart-lg {\n    height: 275px; }\n  .flot-chart.flot-chart-md {\n    height: 190px; }\n  .flot-chart.flot-chart-sm {\n    height: 80px; }\n  .flot-chart.flot-chart-xs {\n    height: 60px; }\n\n.flot-chart-content {\n  width: 100%;\n  height: 100%; }\n\n.flot-pie-label {\n  padding: 3px 5px;\n  font-size: 10px;\n  text-align: center;\n  color: #fff; }\n\n#flotTip,\n.flotTip {\n  position: relative;\n  padding: 8px 16px;\n  font-size: 13px !important;\n  font-weight: 600;\n  border-radius: 2px !important;\n  border-color: transparent !important;\n  background-color: #455A64 !important;\n  color: #fff;\n  z-index: 5; }\n\n.welcome {\n  padding-top: 1rem; }\n  @media only screen and (min-width: 768px) {\n    .welcome {\n      padding-top: 0; } }\n  .welcome > h1 {\n    font-size: 2rem;\n    line-height: 1;\n    margin: 0 0 .5rem 0; }\n    @media only screen and (min-width: 768px) {\n      .welcome > h1 {\n        font-size: 2.5rem; } }\n  .welcome > small {\n    color: #a2a2a2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/dashboard/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(pt, colors, mapWrapper) {
        this.colors = colors;
        this.mapWrapper = mapWrapper;
        this.dt = new Date();
        // Sparklines
        this.sparkValue1 = [4, 2, 3, 5, 3, 2, 3, 4, 6];
        this.sparkValue2 = [5, 3, 4, 6, 5, 3, 4, 3, 4];
        this.sparkValue3 = [4, 3, 4, 5, 3, 2, 3, 4, 6];
        this.sparkOpts1 = this.getSparklineOptions();
        this.sparkOpts2 = this.getSparklineOptions();
        this.sparkOpts3 = this.getSparklineOptions();
        // Main Flot chart
        this.splineData = [{
                'label': 'Unique',
                'color': this.colors.byName('blue-400'),
                data: [
                    ['5', 50],
                    ['6', 70],
                    ['7', 60],
                    ['8', 120],
                    ['9', 80],
                    ['10', 150],
                    ['11', 80],
                    ['12', 90]
                ]
            }];
        this.splineOptions = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: { colors: [{ opacity: 0 }, { opacity: 1 }] }
                },
                points: {
                    show: true,
                    radius: 3
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 0,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                show: false,
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: this.colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 180,
                tickColor: 'transparent',
                font: {
                    color: this.colors.byName('blueGrey-200')
                },
                //position: 'right' or 'left',
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            legend: false,
            shadowSize: 0
        };
        // Bar chart stacked
        // ------------------------
        this.stackedChartData = [{
                data: [
                    ['1.2', 45],
                    ['2.5', 47],
                    ['3.0', 45],
                    ['4.2', 42],
                    ['4.5', 45],
                    ['4.7', 42],
                    ['5.0', 45]
                ]
            }, {
                data: [
                    ['1.2', 30],
                    ['2.5', 27],
                    ['3.0', 35],
                    ['4.2', 25],
                    ['4.5', 35],
                    ['4.7', 35],
                    ['5.0', 17]
                ]
            }];
        this.stackedChartOptions = {
            bars: {
                show: true,
                fill: true,
                barWidth: 0.3,
                lineWidth: 1,
                align: 'center',
                // order : 1,
                fillColor: {
                    colors: [{
                            opacity: 1
                        }, {
                            opacity: 1
                        }]
                }
            },
            colors: [this.colors.byName('deepPurple-100'), this.colors.byName('deepPurple-300')],
            series: {
                shadowSize: 3
            },
            xaxis: {
                show: true,
                position: 'bottom',
                mode: 'categories'
            },
            yaxis: {
                show: false,
                min: 0,
                max: 60
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: 'rgba(120,120,120,0.5)'
            },
            tooltip: true,
            tooltipOpts: {
                content: 'Value %x.0 is %y.0',
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: -20
                }
            }
        };
        // Flot bar chart
        // ------------------
        this.barChartOptions = {
            series: {
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 0.2,
                    lineWidth: 0,
                    align: 'center'
                },
                highlightColor: 'rgba(255,255,255,0.2)'
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: '#8394a9'
            },
            tooltip: true,
            tooltipOpts: {
                content: function getTooltip(label, x, y) {
                    return 'Activity for ' + x + ': ' + (y * 1000);
                }
            },
            xaxis: {
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: this.colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                tickColor: 'transparent',
                font: {
                    color: this.colors.byName('blueGrey-200')
                }
            },
            legend: {
                show: false
            },
            shadowSize: 0
        };
        this.barChartData = [{
                'label': '2017',
                bars: {
                    order: 0,
                    fillColor: { colors: [this.colors.byName('blue-100'), this.colors.byName('purple-100')] }
                },
                data: [
                    ['Jan', 30],
                    ['Feb', 25],
                    ['Mar', 30],
                    ['Apr', 35],
                    ['May', 5]
                ]
            }, {
                'label': '2016',
                bars: {
                    order: 1,
                    fillColor: { colors: [this.colors.byName('blue-500'), this.colors.byName('purple-400')] }
                },
                data: [
                    ['Jan', 45],
                    ['Feb', 35],
                    ['Mar', 25],
                    ['Apr', 50],
                    ['May', 20]
                ]
            }];
        // Donut chart
        // -----------------
        this.donutData = [{
                'color': this.colors.byName('blue-200'),
                'data': 60,
                'label': 'Users'
            }, {
                'color': this.colors.byName('blue-300'),
                'data': 90,
                'label': 'System'
            }, {
                'color': this.colors.byName('blue-400'),
                'data': 50,
                'label': 'Memory'
            }, {
                'color': this.colors.byName('blue-500'),
                'data': 80,
                'label': 'Server'
            }, {
                'color': this.colors.byName('blue-600'),
                'data': 116,
                'label': 'Database'
            }];
        this.donutOptions = {
            series: {
                pie: {
                    stroke: {
                        width: 0,
                        color: '#a1a1a1'
                    },
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            },
            legend: {
                show: false
            }
        };
        this.knobLoaderOptions1 = {
            width: '80%',
            displayInput: true,
            fgColor: this.colors.byName('primary'),
            bgColor: 'rgba(162,162,162, .09)',
            angleOffset: -125,
            angleArc: 250,
            readOnly: true
        };
        this.knobLoaderData1 = 20;
        this.progress1 = '25%';
        this.progress2 = '50%';
        // GOOGLE MAP
        // ----------------------
        this.MapStyles = [{ featureType: 'water', stylers: [{ visibility: 'on' }, { color: '#bdd1f9' }] }, { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];
        this.map = {
            lat: 43.102416,
            lng: -76.144695,
            disableDefaultUI: true,
            scrollwheel: false,
            zoom: 12,
            route: {
                origin: [43.102416, -76.144695],
                destination: [43.103419, -76.060238],
                travelMode: 'WALKING',
                strokeColor: this.colors.byName('green-500'),
                strokeOpacity: 1,
                strokeWeight: 6
            }
        };
        pt.setTitle('Dashboard');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Simulate real time knob chart
        setInterval(function () {
            _this.knobLoaderData1 = Math.floor(Math.random() * 20) + 20;
        }, 2000);
        // Animate progress bars in real time
        setInterval(function () {
            _this.progress1 = (Math.floor(Math.random() * 20) + 40) + '%';
            _this.progress2 = (Math.floor(Math.random() * 10) + 20) + '%';
        }, 4000);
        // Animate counting of numbers
        $('[data-counter]').each(function () {
            var $this = $(this);
            $this.prop('counter', 0).animate({
                counter: $this.data('counter')
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $this.text(numberWithCommas(Math.ceil(now)));
                }
            });
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
        });
        setTimeout(function () { return $(window).resize(); }, 1000);
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Enable Google Maps Directions API to use Routes
        // AGM doesn't support direction service api so we need to implement using nativa calls
        this.agmMap.mapReady.subscribe(function (map) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: _this.colors.byName('green-500'),
                    strokeOpacity: 1,
                    strokeWeight: 6
                }
            });
            directionsDisplay.setMap(map);
            directionsService.route({
                origin: new google.maps.LatLng(_this.map.route.origin[0], _this.map.route.origin[1]),
                destination: new google.maps.LatLng(_this.map.route.destination[0], _this.map.route.destination[1]),
                travelMode: _this.map.route.travelMode
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    console.log('Directions API Error ' + status);
                }
            });
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    DashboardComponent.prototype.getSparklineOptions = function () {
        return {
            chartRangeMin: 0,
            type: 'bar',
            height: 50,
            width: '90',
            lineWidth: 4,
            barSpacing: 8,
            barColor: this.colors.byName('blue-400'),
            valueSpots: {
                '0:': this.colors.byName('blue-700'),
            },
            lineColor: this.colors.byName('blue-700'),
            spotColor: this.colors.byName('blue-700'),
            fillColor: 'transparent',
            highlightLineColor: this.colors.byName('blue-700'),
            spotRadius: 0
        };
    };
    DashboardComponent.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('agmMap'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "agmMap", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/routes/dashboard/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/dashboard/dashboard/dashboard.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map