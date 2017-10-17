webpackJsonp([8],{

/***/ "../../../../../src/app/routes/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widgets_widgets_component__ = __webpack_require__("../../../../../src/app/routes/widgets/widgets/widgets.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__widgets_widgets_component__["a" /* WidgetsComponent */] }
];
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__widgets_widgets_component__["a" /* WidgetsComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/widgets/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-lg\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"pb-1 bg-gradient-warning\"></div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div>\r\n                            <div class=\"lead mb-2\">Arlene Marshall</div>\r\n                            <p><em class=\"ion-ios-email-outline mr-2 icon-lg text-warning\"></em><span>@marshall</span></p>\r\n                            <button class=\"btn btn-warning\" type=\"button\">Follow</button>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><img class=\"shadow-z5 thumb80 rounded\" src=\"assets/img/user/04.jpg\" alt=\"user\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"text-muted\">Comments</div>\r\n                            <div class=\"h4\"><strong>15000</strong></div>\r\n                        </div>\r\n                        <div class=\"col bl\">\r\n                            <div class=\"text-muted\">Posts</div>\r\n                            <div class=\"h4\"><strong>300</strong></div>\r\n                        </div>\r\n                        <div class=\"col bl hidden-sm-down\">\r\n                            <div class=\"text-muted\">Followers</div>\r\n                            <div class=\"h4\"><strong>4000</strong></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"pb-1 bg-gradient-success\"></div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div>\r\n                            <div class=\"lead mb-2\">Charles West</div>\r\n                            <p><em class=\"ion-ios-email-outline mr-2 icon-lg text-success\"></em><span>@Charles</span></p>\r\n                            <button class=\"btn btn-success\" type=\"button\">Follow</button>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><img class=\"shadow-z5 thumb80 rounded-circle\" src=\"assets/img/user/05.jpg\" alt=\"user\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col\">\r\n                            <div class=\"text-muted\">Comments</div>\r\n                            <div class=\"h4\"><strong>90900</strong></div>\r\n                        </div>\r\n                        <div class=\"col bl\">\r\n                            <div class=\"text-muted\">Posts</div>\r\n                            <div class=\"h4\"><strong>700</strong></div>\r\n                        </div>\r\n                        <div class=\"col bl hidden-sm-down\">\r\n                            <div class=\"text-muted\">Followers</div>\r\n                            <div class=\"h4\"><strong>5680</strong></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"pb-1 bg-gradient-info\"></div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"mr-4\"><img class=\"shadow-z5 thumb80 rounded\" src=\"assets/img/user/07.jpg\" alt=\"user\"></div>\r\n                        <div>\r\n                            <div class=\"h3 my-2\"><strong>Kelly Obrien</strong></div>\r\n                            <p>Profile</p>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-info\" type=\"button\">Contact</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\"><small>Friends</small>\r\n                    <div class=\"d-flex align-items-center\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/04.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/05.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/06.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/03.jpg\" alt=\"User\"><strong class=\"thumb32 pt-1 rounded bg-blue-grey-500 text-center\"><small>+10</small></strong></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"pb-1 bg-gradient-primary\"></div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"mr-4\"><img class=\"shadow-z5 thumb80 rounded\" src=\"assets/img/user/06.jpg\" alt=\"user\"></div>\r\n                        <div>\r\n                            <div class=\"h3 my-2\"><strong>Raul Palmer</strong></div>\r\n                            <p>Profile</p>\r\n                        </div>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-primary\" type=\"button\">Contact</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\"><small>Friends</small>\r\n                    <div class=\"d-flex align-items-center\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/04.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/05.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/06.jpg\" alt=\"User\"><img class=\"img-fluid thumb32 rounded mr-1\" src=\"assets/img/user/03.jpg\" alt=\"User\"><strong class=\"thumb32 pt-1 rounded bg-blue-grey-500 text-center\"><small>+5</small></strong>\r\n                        <div class=\"ml-auto\">\r\n                            <button class=\"btn btn-sm btn-outline-danger\" type=\"button\">Invite</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"h2 text-bold\">1,590</div>\r\n                    <div class=\"mb-2 text-muted\"><small>Comments</small></div>\r\n                    <div class=\"progress progress-xs mb-0\">\r\n                        <div class=\"progress-bar bg-success\" style=\"width: 45%;\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"h2 text-bold\">15,350</div>\r\n                    <div class=\"mb-2 text-muted\"><small>Requests</small></div>\r\n                    <div class=\"progress progress-xs mb-0\">\r\n                        <div class=\"progress-bar bg-warning\" style=\"width: 45%;\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox color-indigo-400\" style=\"border-left: 4px solid;\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p class=\"mb-0\">DESIGN</p><span class=\"text-muted\">Nunc posuere as loca.</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox color-blue-400\" style=\"border-left: 4px solid;\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p class=\"mb-0\">DEVELOPMENT</p><span class=\"text-muted\">Nunc posuere as loca.</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox color-red-400\" style=\"border-left: 4px solid;\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p class=\"mb-0\">CONCEPT</p><span class=\"text-muted\">Nunc posuere as loca.</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p class=\"mb-0\"><small><em class=\"ion-record text-primary mr-2\"></em></small>DEVELOPMENT</p><span class=\"text-muted\">24 %</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><span peity [data]=\"dataLine1\" [options]=\"optionsLine1\" [type]=\"'line'\"></span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p class=\"mb-0\"><small><em class=\"ion-record text-success mr-2\"></em></small>DESIGN</p><span class=\"text-muted\">32 %</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><span peity [data]=\"dataLine2\" [options]=\"optionsLine2\" [type]=\"'line'\"></span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p>Training time</p><span class=\"text-bold\">140 hs</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><span peity [data]=\"dataBar1\" [options]=\"optionsBar1\" [type]=\"'bar'\"></span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div>\r\n                            <p>Upgrade costs</p><span class=\"text-bold\">$ 11,500</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><span peity [data]=\"dataBar2\" [options]=\"optionsBar2\" [type]=\"'bar'\"></span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox text-white bg-gradient-success b0\">\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"text-bold display-1\">1500</div>\r\n                    <p class=\"text-bold\">Coding hours</p><span peity [data]=\"dataLine3\" [options]=\"optionsLine3\" [type]=\"'line'\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox text-white bg-gradient-primary b0\">\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"text-bold display-1\">730</div>\r\n                    <p class=\"text-bold\">Members</p><span peity [data]=\"dataLine3\" [options]=\"optionsLine3\" [type]=\"'line'\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body text-center\">\r\n                    <p class=\"text-muted text-bold\">Cups of Coffee</p>\r\n                    <div class=\"text-bold display-1 text-success\">150</div>\r\n                </div>\r\n                <div class=\"cardbox-footer\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div class=\"mr-auto\"><em class=\"ion-arrow-up-b text-success mr-3 icon-lg\"></em><span class=\"text-muted\">12%</span></div>\r\n                        <div class=\"ml-auto\"><span peity [data]=\"dataLine2\" [options]=\"optionsLine2\" [type]=\"'line'\"></span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body text-center\">\r\n                    <p class=\"text-muted text-bold\">Projects</p>\r\n                    <div class=\"text-bold display-1 text-primary\">125</div>\r\n                </div>\r\n                <div class=\"cardbox-footer\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div class=\"mr-auto\"><em class=\"ion-arrow-up-b text-success mr-3 icon-lg\"></em><span class=\"text-muted\">7.8%</span></div>\r\n                        <div class=\"ml-auto\">\r\n                            <div class=\"ml-auto\"><span peity [data]=\"dataLine1\" [options]=\"optionsLine1\" [type]=\"'line'\"></span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Curabitur quis leo nulla.</p>\r\n                    <p class=\"lead text-bold\">150</p>\r\n                    <div class=\"text-right\"><em class=\"ion-arrow-up-b text-success mr-3\"></em><span class=\"text-muted\">12%</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Curabitur quis leo nulla.</p>\r\n                    <p class=\"lead text-bold\">125</p>\r\n                    <div class=\"text-right\"><em class=\"ion-arrow-down-b text-danger mr-3\"></em><span class=\"text-muted\">7.8%</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Curabitur quis leo nulla.</p>\r\n                    <p class=\"lead text-bold\">25</p>\r\n                    <div class=\"text-right\"><em class=\"ion-arrow-down-b text-danger mr-3\"></em><span class=\"text-muted\">2.6%</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox bb0\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Curabitur quis leo nulla.</p>\r\n                    <p class=\"lead text-bold mb-0\">150</p>\r\n                </div>\r\n                <div class=\"progress progress-xs mb-0 bg-transparent\">\r\n                    <div class=\"progress-bar bg-success\" style=\"width: 25%;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox bb0\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Curabitur quis leo nulla.</p>\r\n                    <p class=\"lead text-bold mb-0\">125</p>\r\n                </div>\r\n                <div class=\"progress progress-xs mb-0 bg-transparent\">\r\n                    <div class=\"progress-bar bg-info\" style=\"width: 55%;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox bb0\">\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"text-muted text-bold\">Nunc fringilla eros et erat</p>\r\n                    <p class=\"lead text-bold mb-0\">1,550</p>\r\n                </div>\r\n                <div class=\"progress progress-xs mb-0 bg-transparent\">\r\n                    <div class=\"progress-bar bg-danger\" style=\"width: 12%;\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"float-right\"><em class=\"ion-arrow-graph-up-right text-success mr-3 icon-lg\"></em></div>\r\n                    <p class=\"text-bold\">PROGRESS\r\n                        <br><small class=\"text-muted\">Evolution of price</small></p>\r\n                    <p class=\"lead text-bold m-0\">150</p>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><small>VARIATION 12%</small></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"float-right\"><em class=\"ion-arrow-graph-down-right text-warning mr-3 icon-lg\"></em></div>\r\n                    <p class=\"text-bold\">PROGRESS\r\n                        <br><small class=\"text-muted\">Evolution of price</small></p>\r\n                    <p class=\"lead text-bold m-0\">125</p>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><small>VARIATION 7.8%</small></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"float-right\"><em class=\"ion-arrow-graph-up-right text-success mr-3 icon-lg\"></em></div>\r\n                    <p class=\"text-bold\">PROGRESS\r\n                        <br><small class=\"text-muted\">Evolution of price</small></p>\r\n                    <p class=\"lead text-bold m-0\">25</p>\r\n                </div>\r\n                <div class=\"cardbox-footer\"><small>VARIATION 2.6%</small></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div class=\"wd-xxs color-indigo-400\"><em class=\"ion-social-facebook icon-3x icon-fw\"></em></div>\r\n                        <div>\r\n                            <p class=\"lead mb-0\">Facebook</p><span class=\"text-muted\">Social share</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><a class=\"text-muted\" href=\"#\"><em class=\"ion-chevron-right\"></em></a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div class=\"wd-xxs color-blue-400\"><em class=\"ion-social-twitter icon-3x icon-fw\"></em></div>\r\n                        <div>\r\n                            <p class=\"lead mb-0\">Twitter</p><span class=\"text-muted\">Social share</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><a class=\"text-muted\" href=\"#\"><em class=\"ion-chevron-right\"></em></a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"d-flex justify-content-start align-items-center\">\r\n                        <div class=\"wd-xxs\"><em class=\"ion-social-github icon-3x icon-fw\"></em></div>\r\n                        <div>\r\n                            <p class=\"lead mb-0\">Github</p><span class=\"text-muted\">Code share</span>\r\n                        </div>\r\n                        <div class=\"ml-auto\"><a class=\"text-muted\" href=\"#\"><em class=\"ion-chevron-right\"></em></a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/widgets/widgets/widgets.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/widgets/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetsComponent = (function () {
    function WidgetsComponent(pt, colors) {
        this.colors = colors;
        this.dataLine1 = [3, 5, 3, 6, 2, 3, 6, 2];
        this.dataLine2 = [3, 5, 3, 6, 5, 3, 4, 6];
        this.dataLine3 = [3, 5, 3, 6, 2, 3, 6, 2];
        this.dataBar1 = [3, 5, 3, 6, 5, 3, 4, 6];
        this.dataBar2 = [3, 5, 3, 6, 2, 3, 6, 2];
        this.optionsLine1 = {
            fill: [this.colors.byName('blue-200')],
            stroke: this.colors.byName('blue-500'),
            strokeWidth: 2,
            height: 20,
            width: 60
        };
        this.optionsLine2 = {
            fill: [this.colors.byName('green-200')],
            stroke: this.colors.byName('green-500'),
            strokeWidth: 2,
            height: 20,
            width: 60
        };
        this.optionsLine3 = {
            fill: 'rgba(255,255,255,0.5)',
            stroke: '#fff',
            strokeWidth: 2,
            height: 20,
            width: 60
        };
        this.optionsBar1 = {
            fill: [this.colors.byName('deepPurple-500')],
            height: 30,
            width: 60
        };
        this.optionsBar2 = {
            fill: [this.colors.byName('pink-500')],
            height: 30,
            width: 60
        };
        pt.setTitle('Widgets');
    }
    WidgetsComponent.prototype.ngOnInit = function () {
    };
    return WidgetsComponent;
}());
WidgetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widgets',
        template: __webpack_require__("../../../../../src/app/routes/widgets/widgets/widgets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/widgets/widgets/widgets.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object])
], WidgetsComponent);

var _a, _b;
//# sourceMappingURL=widgets.component.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map