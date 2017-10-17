webpackJsonp([4],{

/***/ "../../../../../src/app/routes/forms/advanced/advanced.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">ng2Select</div>\r\n            <small>Angular2 based replacement for select boxes </small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <label class=\"mt\">Single Select</label>\r\n            <ng-select [allowClear]=\"true\" [items]=\"items\" [disabled]=\"disabled\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\" (removed)=\"removed($event)\" (typed)=\"typed($event)\" placeholder=\"No city selected\">\r\n            </ng-select>\r\n            <label class=\"mt-2\">Multiple</label>\r\n            <ng-select (data)=\"value\" [multiple]=\"true\" [items]=\"items\" [disabled]=\"disabled\" (data)=\"refreshValue($event)\" (selected)=\"selected($event)\" (removed)=\"removed($event)\" placeholder=\"No city selected\"></ng-select>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Datepicker</div>\r\n            <small>Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges.</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"ui-datepicker-responsive\">\r\n                        <datepicker [(ngModel)]=\"dt\" class=\"ui-datepicker dp-head-success dp-table-success\"></datepicker>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"ui-datepicker-responsive\">\r\n                        <datepicker [(ngModel)]=\"dt\" class=\"ui-datepicker dp-head-primary dp-table-primary\"></datepicker>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"ui-datepicker-responsive\">\r\n                        <datepicker [(ngModel)]=\"dt\" class=\"ui-datepicker dp-head-warning dp-table-warning\"></datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-footer\">\r\n            <strong>Selected: {{dt}}</strong>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Time Picker</div>\r\n            <small>A lightweight & configurable timepicker directive</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <timepicker [(ngModel)]=\"mytime\" (change)=\"changed()\" [hourStep]=\"hstep\" [minuteStep]=\"mstep\" [showMeridian]=\"ismeridian\" [readonlyInput]=\"!isEnabled\"></timepicker>\r\n                    <pre class=\"alert alert-info\">Time is: {{mytime}}</pre>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            Hours step is:\r\n                            <select class=\"form-control\" [(ngModel)]=\"hstep\">\r\n                                <option *ngFor=\"let opt of options.hstep\" [value]=\"opt\">{{opt}}</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            Minutes step is:\r\n                            <select class=\"form-control\" [(ngModel)]=\"mstep\">\r\n                                <option *ngFor=\"let opt of options.mstep\" [value]=\"opt\">{{opt}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"toggleMode()\">12H / 24H</button>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"isEnabled=!isEnabled\">Enable / Disable input</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"update()\">Set to 14:00</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Color Picker</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <p>Input</p>\r\n                    <!-- <label for=\"\" [style.color]=\"colorDemo1\">Show me color</label> -->\r\n                    <input class=\"form-control\" [(colorPicker)]=\"colorDemo1\" [value]=\"colorDemo1\" />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <p>Html element:</p>\r\n                    <div class=\"mt-4 text-bold\" [(colorPicker)]=\"colorDemo2\" [cpPosition]=\"'bottom'\" [style.color]=\"colorDemo2\" [cpPositionOffset]=\"'50%'\" [cpPositionRelativeToArrow]=\"true\">Change me!</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mt-4\">\r\n                <div class=\"col-sm-6\">\r\n                    <p>Cancel button</p>\r\n                    <input class=\"form-control\" [(colorPicker)]=\"colorDemo3\" [value]=\"colorDemo3\" [cpCancelButton]=\"true\" [cpHeight]=\"'310px'\" />\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <p>Output format</p>\r\n                    <input class=\"form-control\" [(colorPicker)]=\"colorDemo4\" [value]=\"colorDemo4\" [cpOutputFormat]=\"'rgba'\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">Note editors (textarea)</div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"note-area\">\r\n                        <textarea rows=\"10\" class=\"form-control\">In elementum magna sed sapien gravida scelerisque.</textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p>With margin</p>\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"note-area note-area-margin\">\r\n                        <textarea rows=\"10\" class=\"form-control\">Curabitur tellus mauris, fringilla sed tempus eget, convallis id orci.</textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/advanced/advanced.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyphicon.glyphicon-chevron-down:before,\n.glyphicon.glyphicon-chevron-up:before {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon.glyphicon-chevron-up:before {\n  content: \"\\F126\"; }\n\n.glyphicon.glyphicon-chevron-down:before {\n  content: \"\\F123\"; }\n\n.ui-select-container.dropdown.open .dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/advanced/advanced.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedComponent = (function () {
    function AdvancedComponent(pt) {
        // Color Picker
        this.colorDemo1 = '#555555';
        this.colorDemo2 = '#555555';
        this.colorDemo3 = '#555555';
        this.colorDemo4 = '#555555';
        // ng2Select
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
            'Zagreb', 'Zaragoza', 'Łódź'];
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        // timepicker
        this.hstep = 1;
        this.mstep = 15;
        this.ismeridian = true;
        this.isEnabled = true;
        this.mytime = new Date();
        this.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };
        pt.setTitle('Advanced');
    }
    Object.defineProperty(AdvancedComponent.prototype, "disabledV", {
        //ng2 select
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    AdvancedComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    AdvancedComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    AdvancedComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    AdvancedComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    // timepicker
    AdvancedComponent.prototype.toggleMode = function () {
        this.ismeridian = !this.ismeridian;
    };
    AdvancedComponent.prototype.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        this.mytime = d;
    };
    AdvancedComponent.prototype.changed = function () {
        console.log('Time changed to: ' + this.mytime);
    };
    AdvancedComponent.prototype.clear = function () {
        this.mytime = void 0;
    };
    AdvancedComponent.prototype.ngOnInit = function () {
    };
    return AdvancedComponent;
}());
AdvancedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advanced',
        template: __webpack_require__("../../../../../src/app/routes/forms/advanced/advanced.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/advanced/advanced.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], AdvancedComponent);

var _a;
//# sourceMappingURL=advanced.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/dropzone/dropzone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-lg\">\r\n    <h3 class=\"display-4 mb-5 text-center\">Dropzone</h3>\r\n    <div class=\"mb-5\">\r\n        <p class=\"m-0 text-center\">DropzoneJS is an open source library that provides drag&apos;n&apos;drop file uploads with image previews.</p>\r\n        <p class=\"text-center\">It’s lightweight, doesn’t depend on any other library (like jQuery) and is <a href=\"http://www.dropzonejs.com/\" target=\"_blank\">highly customizable</a></p>\r\n    </div>\r\n    <form #dropzoneArea class=\"dropzone mb-3 card d-flex flex-row justify-content-center flex-wrap\" action=\"#\">\r\n        <div class=\"dropzone-previews\"></div>\r\n        <div class=\"text-right fw\">\r\n            <button class=\"btn btn-primary btn-lg btn-gradient\" type=\"submit\"><strong>Send</strong></button>\r\n        </div>\r\n    </form>\r\n    <p><small class=\"text-muted\">This demo does not upload files to any server.</small></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/dropzone/dropzone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../dropzone/dist/basic.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../dropzone/dist/dropzone.css"), "");

// module
exports.push([module.i, ".dropzone {\n  border: 0; }\n  .dropzone .dz-default.dz-message {\n    font-size: 35px; }\n  .dropzone .dz-preview.dz-image-preview {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.014); }\n    .dropzone .dz-preview.dz-image-preview .dz-image {\n      border-radius: 1px; }\n    .dropzone .dz-preview.dz-image-preview .dz-details {\n      position: relative;\n      line-height: 1;\n      padding: 6px 4px;\n      margin: 0;\n      opacity: 1;\n      font-size: 14px; }\n  .dropzone .dz-preview .dz-image img {\n    transition: -webkit-transform .2s ease;\n    transition: transform .2s ease;\n    transition: transform .2s ease, -webkit-transform .2s ease; }\n  .dropzone .dz-preview:hover .dz-image img {\n    -webkit-filter: none;\n    filter: none;\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    transition: -webkit-transform .5s ease;\n    transition: transform .5s ease;\n    transition: transform .5s ease, -webkit-transform .5s ease; }\n  .dropzone .dz-preview.dz-file-preview .dz-image {\n    border-radius: 1px;\n    background-image: none;\n    background-color: #ECEFF1; }\n  .dropzone .dz-filename {\n    display: none; }\n  .dropzone .dz-preview .dz-remove {\n    color: #a2a2a2;\n    font-size: 12px; }\n    .dropzone .dz-preview .dz-remove:hover {\n      color: #FF5252;\n      text-decoration: none; }\n  .dropzone .dz-preview .dz-error-message {\n    top: 130px;\n    border-radius: 2px;\n    transition: all .2s ease; }\n    .dropzone .dz-preview .dz-error-message:after {\n      display: none; }\n  .dropzone .dz-preview.dz-error:hover .dz-error-message {\n    top: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/dropzone/dropzone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dropzone__ = __webpack_require__("../../../../dropzone/dist/dropzone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Prevent Dropzone from auto discovering
// This is useful when you want to create the
// Dropzone programmatically later
__WEBPACK_IMPORTED_MODULE_1_dropzone__["autoDiscover"] = false;
var DropzoneComponent = (function () {
    function DropzoneComponent(pt) {
        // Dropzone settings
        this.options = {
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 100,
            maxFiles: 100,
            dictDefaultMessage: '<em class="ion-upload color-blue-grey-100 icon-2x"></em><br>Drop files here to upload',
            paramName: 'file',
            maxFilesize: 2,
            addRemoveLinks: true,
            accept: function (file, done) {
                if (file.name === 'justinbieber.jpg') {
                    done('Naha, you dont. :)');
                }
                else {
                    done();
                }
            },
            // dont use arrow functions so you can reference the dropzone with 'this' keyword
            init: function () {
                var dzHandler = this;
                this.element.querySelector('button[type=submit]').addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dzHandler.processQueue();
                });
                this.on('addedfile', function (file) {
                    console.log('Added file: ' + file.name);
                });
                this.on('removedfile', function (file) {
                    console.log('Removed file: ' + file.name);
                });
                this.on('sendingmultiple', function () {
                });
                this.on('successmultiple', function () {
                });
                this.on('errormultiple', function () {
                });
            }
        };
        pt.setTitle('Dropzone');
    }
    DropzoneComponent.prototype.ngOnInit = function () { };
    DropzoneComponent.prototype.ngAfterViewInit = function () {
        new __WEBPACK_IMPORTED_MODULE_1_dropzone__(this.dropzoneArea.nativeElement, this.options);
    };
    return DropzoneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropzoneArea'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DropzoneComponent.prototype, "dropzoneArea", void 0);
DropzoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dropzone',
        template: __webpack_require__("../../../../../src/app/routes/forms/dropzone/dropzone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/dropzone/dropzone.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _b || Object])
], DropzoneComponent);

var _a, _b;
//# sourceMappingURL=dropzone.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/forms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__standard_standard_component__ = __webpack_require__("../../../../../src/app/routes/forms/standard/standard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validation_validation_component__ = __webpack_require__("../../../../../src/app/routes/forms/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__advanced_advanced_component__ = __webpack_require__("../../../../../src/app/routes/forms/advanced/advanced.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summernote_summernote_component__ = __webpack_require__("../../../../../src/app/routes/forms/summernote/summernote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_component__ = __webpack_require__("../../../../../src/app/routes/forms/dropzone/dropzone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__ = __webpack_require__("../../../../../src/app/routes/forms/wizard/wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typeahead_typeahead_component__ = __webpack_require__("../../../../../src/app/routes/forms/typeahead/typeahead.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'standard', component: __WEBPACK_IMPORTED_MODULE_6__standard_standard_component__["a" /* StandardComponent */] },
    { path: 'validation', component: __WEBPACK_IMPORTED_MODULE_7__validation_validation_component__["a" /* ValidationComponent */] },
    { path: 'advanced', component: __WEBPACK_IMPORTED_MODULE_8__advanced_advanced_component__["a" /* AdvancedComponent */] },
    { path: 'summernote', component: __WEBPACK_IMPORTED_MODULE_9__summernote_summernote_component__["a" /* SummernoteComponent */] },
    { path: 'dropzone', component: __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_component__["a" /* DropzoneComponent */] },
    { path: 'wizard', component: __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__["a" /* WizardComponent */] },
    { path: 'typeahead', component: __WEBPACK_IMPORTED_MODULE_12__typeahead_typeahead_component__["a" /* TypeaheadComponent */] }
];
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__["ColorPickerModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__["ColorPickerService"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__standard_standard_component__["a" /* StandardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__validation_validation_component__["a" /* ValidationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__advanced_advanced_component__["a" /* AdvancedComponent */],
            __WEBPACK_IMPORTED_MODULE_9__summernote_summernote_component__["a" /* SummernoteComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dropzone_dropzone_component__["a" /* DropzoneComponent */],
            __WEBPACK_IMPORTED_MODULE_11__wizard_wizard_component__["a" /* WizardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__typeahead_typeahead_component__["a" /* TypeaheadComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], FormsModule);

//# sourceMappingURL=forms.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/standard/standard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h5 class=\"mt-0\">Forms</h5>\r\n    <p class=\"mb-4\">Bootstrap provides several form control styles, layout options, and custom components for creating a wide variety of forms.</p>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-body\">\r\n            <form method=\"get\" action=\"/\">\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">With help</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control\" type=\"text\"><span class=\"form-text text-muted\">A block of help text that breaks onto a new line and may extend beyond one line.</span>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\" for=\"input-id-1\">Label focus</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control\" id=\"input-id-1\" type=\"text\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Password</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control\" type=\"password\" name=\"password\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Placeholder</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"placeholder\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Disabled</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Static control</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <p class=\"form-control-static\">email@example.com</p>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Checkboxes and radios</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">Option one is this and that—be sure to include why it's great\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" id=\"optionsRadios1\" type=\"radio\" name=\"optionsRadios\" value=\"option1\" checked=\"\">Option one is this and that—be sure to include why it's great\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" id=\"optionsRadios2\" type=\"radio\" name=\"optionsRadios\" value=\"option2\">Option two can be something else and selecting it will deselect option one\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Inline checkboxes</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"form-check form-check-inline\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" id=\"inlineCheckbox1\" type=\"checkbox\" value=\"option1\"> a\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" id=\"inlineCheckbox2\" type=\"checkbox\" value=\"option2\"> b\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check form-check-inline\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" id=\"inlineCheckbox3\" type=\"checkbox\" value=\"option3\"> c\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset class=\"last-child\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Select</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <select class=\"form-control\" name=\"account\">\r\n                                <option>Option 1</option>\r\n                                <option>Option 2</option>\r\n                                <option>Option 3</option>\r\n                                <option>Option 4</option>\r\n                            </select>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <select class=\"form-control\" multiple=\"\">\r\n                                        <option>Option 1</option>\r\n                                        <option>Option 2</option>\r\n                                        <option>Option 3</option>\r\n                                        <option>Option 4</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row has-success\">\r\n                        <label class=\"col-lg-2 col-form-label\">Input with success</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control form-control-success\" id=\"inputSuccess1\" type=\"text\">\r\n                            <div class=\"form-control-feedback\">Success! You&apos;ve done it.</div><small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row has-warning\">\r\n                        <label class=\"col-lg-2 col-form-label\">Input with warning</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control form-control-warning\" id=\"inputWarning1\" type=\"text\">\r\n                            <div class=\"form-control-feedback\">Shucks, check the formatting of that and try again.</div><small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row has-danger\">\r\n                        <label class=\"col-lg-2 col-form-label\">Input with error (danger)</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control form-control-danger\" id=\"inputDanger1\" type=\"text\">\r\n                            <div class=\"form-control-feedback\">Sorry, that username&apos;s taken. Try another?</div><small class=\"form-text text-muted\">Example help text that remains unchanged.</small>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Custom controls</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <p>Checkboxes</p>\r\n                            <p>\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input class=\"custom-control-input\" type=\"checkbox\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Check this custom checkbox</span>\r\n                                </label>\r\n                            </p>\r\n                            <p>\r\n                                <label class=\"custom-control custom-checkbox\">\r\n                                    <input class=\"custom-control-input\" type=\"checkbox\" checked=\"checked\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Custom checkbox checked</span>\r\n                                </label>\r\n                            </p>\r\n                            <p class=\"mt-3\">Radios</p>\r\n                            <p>\r\n                                <label class=\"custom-control custom-radio\">\r\n                                    <input class=\"custom-control-input\" id=\"radio1\" name=\"radio\" type=\"radio\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Toggle this custom radio</span>\r\n                                </label>\r\n                            </p>\r\n                            <p>\r\n                                <label class=\"custom-control custom-radio\">\r\n                                    <input class=\"custom-control-input\" id=\"radio21\" name=\"radio\" type=\"radio\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Or toggle this other custom radio</span>\r\n                                </label>\r\n                            </p>\r\n                            <p>\r\n                                <label class=\"custom-control custom-radio\">\r\n                                    <input class=\"custom-control-input\" id=\"radio22\" name=\"radio\" type=\"radio\" checked=\"checked\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Another custom radio checked</span>\r\n                                </label>\r\n                            </p>\r\n                            <p class=\"mt-3\">Select</p>\r\n                            <select class=\"custom-select\">\r\n                                <option selected=\"\">Open this select menu</option>\r\n                                <option value=\"1\">One</option>\r\n                                <option value=\"2\">Two</option>\r\n                                <option value=\"3\">Three</option>\r\n                            </select>\r\n                            <p class=\"mt-3\">File</p>\r\n                            <label class=\"custom-file\">\r\n                                <input class=\"custom-file-input\" id=\"file\" type=\"file\"><span class=\"custom-file-control\"></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Control sizing</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\">\r\n                            <br>\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Default input\">\r\n                            <br>\r\n                            <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Column sizing</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-2\">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\".col-lg-2\">\r\n                                </div>\r\n                                <div class=\"col-lg-3\">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\".col-lg-3\">\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\".col-lg-4\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Input groups</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\">@</span>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"Username\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" type=\"text\"><span class=\"input-group-addon\">.00</span>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\">$</span>\r\n                                <input class=\"form-control\" type=\"text\"><span class=\"input-group-addon\">.00</span>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\">\r\n                            <input type=\"checkbox\"></span>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\"><span class=\"input-group-addon\">\r\n                            <input type=\"radio\"></span>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Button addons</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"input-group\"><span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-secondary\" type=\"button\">Go!</button></span>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" type=\"text\"><span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-success\" type=\"button\">Go!</button></span>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\"><span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"button\"><em class=\"ion-person\"></em></button></span>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"...\"><span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-primary\" type=\"button\"><em class=\"ion-person-stalker\"></em></button></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Multiple addons</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\"><span class=\"input-group-addon\">\r\n                                <input type=\"checkbox\" aria-label=\"Checkbox for following text input\"></span><span class=\"input-group-addon\">$</span>\r\n                                        <input class=\"form-control\" type=\"text\" aria-label=\"Text input with checkbox\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-6\">\r\n                                    <div class=\"input-group\"><span class=\"input-group-addon\">$</span><span class=\"input-group-addon\">0.00</span>\r\n                                        <input class=\"form-control\" type=\"text\" aria-label=\"Text input with radio button\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">With dropdowns</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"input-group\">\r\n                                <div dropdown class=\"input-group-btn\">\r\n                                    <button dropdownToggle class=\"btn btn-secondary\" type=\"button\">Action<span class=\"caret\"></span></button>\r\n                                    <div *dropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" type=\"text\">\r\n                                <div dropdown class=\"input-group-btn\">\r\n                                    <button dropdownToggle class=\"btn btn-secondary\" type=\"button\">Action<span class=\"caret\"></span></button>\r\n                                    <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n                <fieldset>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-lg-2 col-form-label\">Segmented</label>\r\n                        <div class=\"col-lg-10\">\r\n                            <div class=\"input-group\">\r\n                                <div dropdown class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-secondary\" type=\"button\" tabindex=\"-1\">Action</button>\r\n                                    <button dropdownToggle class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" type=\"button\"><span class=\"caret\"></span></button>\r\n                                    <div *dropdownMenu class=\"dropdown-menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"text\">\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" type=\"text\">\r\n                                <div dropdown class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-secondary\" type=\"button\" tabindex=\"-1\">Action</button>\r\n                                    <button dropdownToggle class=\"btn btn-secondary dropdown-toggle dropdown-toggle-split\" type=\"button\"><span class=\"caret\"></span></button>\r\n                                    <div *dropdownMenu class=\"dropdown-menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/standard/standard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/standard/standard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StandardComponent = (function () {
    function StandardComponent(pt) {
        pt.setTitle('Standard Inputs');
    }
    StandardComponent.prototype.ngOnInit = function () {
    };
    return StandardComponent;
}());
StandardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-standard',
        template: __webpack_require__("../../../../../src/app/routes/forms/standard/standard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/standard/standard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], StandardComponent);

var _a;
//# sourceMappingURL=standard.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/summernote/summernote.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h4 class=\"mt-0\">Summernote</h4>\r\n    <p class=\"mb-4\">Super simple WYSIWYG Editor based on Bootstrap</p>\r\n    <div class=\"mb-4\">\r\n        <div #summernote class=\"summernote\">Pellentesque sollicitudin sollicitudin erat, in imperdiet tortor fringilla ut...</div>\r\n    </div>\r\n    <h4>Summernote airmode</h4>\r\n    <p class=\"mb-4\">To reveal toolbar, select a text where you want to shape up</p>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-body\">\r\n            <div #summernoteAir class=\"summernote-air\" contenteditable=\"true\">\r\n                <h3>Vivamus elit lectus</h3>\r\n                <p><i>Duis cursus consectetur elementum.</i></p>\r\n                <p>Suscipit a venenatis id, varius sit amet nunc. Mauris eu lacus massa, vel condimentum lectus. Quisque sollicitudin massa vel erat tincidunt blandit. Nulla mauris sem, hendrerit sed fringilla a, facilisis vitae eros. Donec ullamcorper scelerisque mollis. Donec ac lectus vel nulla pretium porta tempus eget tortor. Pellentesque sed purus libero. Praesent nec eros ac urna dictum ultrices. Donec at feugiat risus.</p>\r\n                <p>Fusce dolor lacus, interdum eu tincidunt sed, aliquet vel turpis. Nunc luctus, quam non condimentum ornare, orci ligula malesuada lacus, nec sagittis neque augue vel nunc. Quisque congue egestas cursus. Integer lorem metus, rutrum non rhoncus sed, fringilla interdum urna. Curabitur gravida, ante ac imperdiet accumsan, quam nibh porttitor mauris, non luctus sem lectus porta augue. Nunc eget augue mi.</p>\r\n                <br>\r\n                <p>Aliquam eget dui tellus.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/summernote/summernote.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Form Editors\r\n */\n.note-editor .note-editing-area .note-editable {\n  color: inherit !important; }\n\n.note-editor .note-statusbar {\n  background-color: rgba(162, 162, 162, 0.26) !important; }\n\n.note-editor.note-frame {\n  border-color: rgba(162, 162, 162, 0.26) !important; }\n\n.note-editor .dropdown-menu {\n  max-height: 280px;\n  overflow: auto; }\n\n.summernote-air + .note-editor .note-editing-area .note-editable {\n  background-color: transparent !important; }\n\n.panel-heading.note-toolbar {\n  padding: 1.6rem 2.4rem; }\n\n.note-btn-group .btn-default {\n  color: #59676b;\n  background-color: #fff;\n  border-color: #ECEFF1; }\n  .note-btn-group .btn-default:hover {\n    color: #59676b;\n    background-color: whitesmoke;\n    border-color: #e0e5e8; }\n  .note-btn-group .btn-default:focus, .note-btn-group .btn-default.focus {\n    box-shadow: 0 0 0 2px rgba(236, 239, 241, 0.5); }\n  .note-btn-group .btn-default.disabled, .note-btn-group .btn-default:disabled {\n    background-color: #fff;\n    border-color: #ECEFF1; }\n  .note-btn-group .btn-default:active, .note-btn-group .btn-default.active,\n  .show > .note-btn-group .btn-default.dropdown-toggle {\n    color: #59676b;\n    background-color: whitesmoke;\n    background-image: none;\n    border-color: #e0e5e8; }\n\n.note-btn-group .dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap; }\n\n.note-popover .popover-content .note-color .dropdown-toggle,\n.note-editor .panel-heading.note-toolbar .note-color .dropdown-toggle {\n  width: 20px;\n  padding-left: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/summernote/summernote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummernoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummernoteComponent = (function () {
    function SummernoteComponent(pt) {
        pt.setTitle('Summernote');
    }
    SummernoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(this.summernote.nativeElement).summernote({
            height: 380,
            dialogsInBody: true,
            callbacks: {
                onChange: function (contents, $editable) {
                    _this.contents = contents;
                }
            }
        });
        $(this.summernoteAir.nativeElement).summernote({
            airMode: true,
            dialogsInBody: true,
            callbacks: {
                onChange: function (contents, $editable) {
                    _this.contents2 = contents;
                }
            }
        });
        // Hide the initial popovers that display
        $('.note-popover').css({
            'display': 'none'
        });
    };
    return SummernoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('summernote'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SummernoteComponent.prototype, "summernote", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('summernoteAir'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], SummernoteComponent.prototype, "summernoteAir", void 0);
SummernoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summernote',
        template: __webpack_require__("../../../../../src/app/routes/forms/summernote/summernote.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/summernote/summernote.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _c || Object])
], SummernoteComponent);

var _a, _b, _c;
//# sourceMappingURL=summernote.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/typeahead/typeahead.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Static arrays</div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"rel-wrapper mb-4\">\r\n                        <input [(ngModel)]=\"selected\" [typeahead]=\"states\" class=\"form-control\">\r\n                    </div>\r\n                    <pre class=\"card card-block card-header\">Model: {{selected | json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Custom item template</div>\r\n                <div class=\"cardbox-body\">\r\n                    <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\r\n                        <div>This is: {{model | json}} Index: {{ index }}</div>\r\n                    </ng-template>\r\n                    <div class=\"rel-wrapper mb-4\">\r\n                        <input [(ngModel)]=\"customSelected\" [typeahead]=\"statesComplex\" [typeaheadItemTemplate]=\"customItemTemplate\" [typeaheadOptionField]=\"'name'\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" class=\"form-control\">\r\n                    </div>\r\n                    <pre class=\"card card-block card-header\">Model: {{customSelected | json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Asynchronous results</div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"mb-4\">\r\n                        <div class=\"rel-wrapper\">\r\n                            <input [(ngModel)]=\"asyncSelected\" [typeahead]=\"dataSource\" (typeaheadLoading)=\"changeTypeaheadLoading($event)\" (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'name'\" placeholder=\"Locations loaded with timeout\" class=\"form-control\">\r\n                        </div>\r\n                        <div *ngIf=\"typeaheadLoading===true\">\r\n                            <i class=\"fa fa-refresh ng-hide\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"typeaheadNoResults===true\">\r\n                            <i class=\"fa fa-times\"></i> No Results Found\r\n                        </div>\r\n                    </div>\r\n                    <pre class=\"card card-block card-header\">Model: {{asyncSelected | json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Typeahead inside a form</div>\r\n                <div class=\"cardbox-body\">\r\n                    <form [formGroup]=\"myForm\" class=\"rel-wrapper mb-4\">\r\n                        <input formControlName=\"state\" [typeahead]=\"states\" (typeaheadOnSelect)=\"typeaheadOnSelect($event)\" [typeaheadOptionsLimit]=\"7\" [typeaheadOptionField]=\"'name'\" [typeaheadMinLength]=\"0\" placeholder=\"Typeahead inside a form\" class=\"form-control\">\r\n                    </form>\r\n                    <pre class=\"card card-block card-header\">Model: {{myForm.value.state | json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/typeahead/typeahead.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "typeahead-container.dropdown-menu {\n  max-height: 300px;\n  overflow: auto; }\n  typeahead-container.dropdown-menu .dropdown-item:hover {\n    background-color: #1E88E5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TypeaheadComponent = (function () {
    function TypeaheadComponent(pt) {
        var _this = this;
        // TYPEAHEAD PROPS
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            state: this.stateCtrl
        });
        this.customSelected = '';
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }
        ];
        pt.setTitle('Typeahead');
        // init typeahead
        this.dataSource = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        }).mergeMap(function (token) { return _this.getStatesAsObservable(token); });
    }
    TypeaheadComponent.prototype.ngOnInit = function () {
    };
    // TYPEAHEAD METHODS
    TypeaheadComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    TypeaheadComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    TypeaheadComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    TypeaheadComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.item);
    };
    return TypeaheadComponent;
}());
TypeaheadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typeahead',
        template: __webpack_require__("../../../../../src/app/routes/forms/typeahead/typeahead.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/typeahead/typeahead.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], TypeaheadComponent);

var _a;
//# sourceMappingURL=typeahead.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/validation/validation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h5 class=\"mt-0\">Form validation</h5>\r\n    <p class=\"mb-4\">Angular native form validation</p>\r\n    <form [formGroup]=\"loginForm\" class=\"form-validate form-horizontal\" (submit)=\"submitForm($event, loginForm)\" novalidate=\"\">\r\n        <!-- START card-->\r\n        <div class=\"cardbox\">\r\n            <div class=\"cardbox-heading\">\r\n                <small class=\"pull-right\">* Required fields</small> Form Register\r\n            </div>\r\n            <div class=\"cardbox-body\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Email Address *</label>\r\n                    <input class=\"form-control\" type=\"email\" placeholder=\"mail@example.com\" formControlName=\"email\" [formControl]=\"loginForm.controls['email']\" />\r\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls['email'].hasError('required') && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\">This field is required</span>\r\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls['email'].hasError('email') && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\">Please enter a valid email</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Password *</label>\r\n                    <input class=\"form-control\" type=\"password\" formControlName=\"password\" [formControl]=\"loginForm.controls['password']\" />\r\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls['password'].hasError('required') && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\">Input required</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\">Confirm Password *</label>\r\n                    <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" [formControl]=\"loginForm.controls['confirmPassword']\" />\r\n                    <span class=\"text-danger\" *ngIf=\"loginForm.controls['confirmPassword'].errors?.equalTo\">Input does Not match</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"cardbox-body\">\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left mt-1\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input class=\"custom-control-input\" formControlName=\"checkagree\" [formControl]=\"loginForm.controls['checkagree']\" type=\"checkbox\" name=\"agreements\" required=\"\"><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\"><span class=\"ml-1\">I agree with the</span><a href=\"#\"> terms</a></span>\r\n                        </label>\r\n                        <span class=\"text-danger\" *ngIf=\"loginForm.controls['checkagree'].hasError('required') && (loginForm.controls['checkagree'].dirty || loginForm.controls['checkagree'].touched)\">This field is required</span>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                        <button class=\"btn btn-info\" type=\"submit\">Register</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END card-->\r\n    </form>\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <form [formGroup]=\"valForm\" class=\"form-validate form-horizontal\" (submit)=\"submitForm($event, valForm)\" novalidate=\"\">\r\n                <!-- START panel-->\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-heading\">Basics</div>\r\n                    <div class=\"cardbox-body\">\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Required Text</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"sometext\" [formControl]=\"valForm.controls['sometext']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['sometext'].hasError('required') && (valForm.controls['sometext'].dirty || valForm.controls['sometext'].touched)\">This field is required</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">required</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 col-form-label\">Checkbox &amp; Radio</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div>\r\n                                        <label class=\"custom-control custom-checkbox\">\r\n                                            <input class=\"custom-control-input\" formControlName=\"checkbox\" [formControl]=\"valForm.controls['checkbox']\" type=\"checkbox\" required=\"\" name=\"checkbox\">\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                            <span class=\"custom-control-description\">Check this custom checkbox</span>\r\n                                        </label>\r\n                                        <span class=\"text-danger\" *ngIf=\"valForm.controls['checkbox'].hasError('required') && (valForm.controls['checkbox'].dirty || valForm.controls['checkbox'].touched)\">This field is required</span>\r\n                                    </div>\r\n                                    <div>\r\n                                        <label class=\"custom-control custom-radio\">\r\n                                            <input class=\"custom-control-input\" type=\"radio\" required=\"\" name=\"radio\" formControlName=\"radio\" value=\"option1\" [formControl]=\"valForm.controls['radio']\">\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                            <span class=\"custom-control-description\">Option one</span>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div>\r\n                                        <label class=\"custom-control custom-radio\">\r\n                                            <input class=\"custom-control-input\" type=\"radio\" required=\"\" name=\"radio\" formControlName=\"radio\" value=\"option2\" [formControl]=\"valForm.controls['radio']\">\r\n                                            <span class=\"custom-control-indicator\"></span>\r\n                                            <span class=\"custom-control-description\">Option two checked</span>\r\n                                        </label>\r\n                                    </div>\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['radio'].hasError('required') && (valForm.controls['radio'].dirty || valForm.controls['radio'].touched)\">This field is required</span>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Select</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <select class=\"form-control\" formControlName=\"select\" [formControl]=\"valForm.controls['select']\">\r\n                                        <option value=\"\">Nothing</option>\r\n                                        <option value=\"1\">Option 1</option>\r\n                                        <option value=\"2\">Option 2</option>\r\n                                        <option value=\"3\">Option 3</option>\r\n                                        <option value=\"4\">Option 4</option>\r\n                                    </select>\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['select'].hasError('required') && (valForm.controls['select'].dirty || valForm.controls['select'].touched)\">This field is required</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\"></small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Digits</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"digits\" [formControl]=\"valForm.controls['digits']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['digits'].hasError('pattern') && (valForm.controls['digits'].dirty || valForm.controls['digits'].touched)\">This field must contain only digits</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">pattern=\"/^[0-9]+$/\"</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Minlength</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"minlen\" [formControl]=\"valForm.controls['minlen']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['minlen'].hasError('minlength') && (valForm.controls['minlen'].dirty || valForm.controls['minlen'].touched)\">This field requires a min length</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">minlength 6</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Maxlength</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"maxlen\" [formControl]=\"valForm.controls['maxlen']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['maxlen'].hasError('maxlength') && (valForm.controls['maxlen'].dirty || valForm.controls['maxlen'].touched)\">This field requires a max length</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">maxlength 10</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-heading\">Extended</div>\r\n                    <div class=\"cardbox-body\">\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Number</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"number\" formControlName=\"number\" [formControl]=\"valForm.controls['number']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['number'].hasError('required') && (valForm.controls['number'].dirty || valForm.controls['number'].touched)\">This field is required</span>\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['number'].hasError('number') && (valForm.controls['number'].dirty || valForm.controls['number'].touched)\">This field must be a valid number</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">type='number'</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Alphabetic</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"alphanum\" [formControl]=\"valForm.controls['alphanum']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['alphanum'].hasError('pattern') && (valForm.controls['alphanum'].dirty || valForm.controls['alphanum'].touched)\">This field must contain only letters</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">pattern=\"/^[a-zA-Z]+$/\"</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Email</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"email\" placeholder=\"mail@example.com\" formControlName=\"email\" [formControl]=\"valForm.controls['email']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">Enter a valid email</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">type='email'</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Url</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"url\" placeholder=\"http://\" formControlName=\"url\" [formControl]=\"valForm.controls['url']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['url'].hasError('url') && (valForm.controls['url'].dirty || valForm.controls['url'].touched)\">Enter a valid url</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">type='url'</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Date</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"date\" formControlName=\"date\" [formControl]=\"valForm.controls['date']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['date'].hasError('date') && (valForm.controls['date'].dirty || valForm.controls['date'].touched)\">Enter a valid date</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">type='date'</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Min</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"minvalue\" [formControl]=\"valForm.controls['minvalue']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['minvalue'].hasError('min') && (valForm.controls['minvalue'].dirty || valForm.controls['minvalue'].touched)\">This field requires minimum value</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">min value 6</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Max</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"maxvalue\" [formControl]=\"valForm.controls['maxvalue']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['maxvalue'].hasError('max') && (valForm.controls['maxvalue'].dirty || valForm.controls['maxvalue'].touched)\">This field requires maximum value</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">max value 10\"</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Length range</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"minmaxlen\" [formControl]=\"valForm.controls['minmaxlen']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['minmaxlen'].hasError('rangeLength') && (valForm.controls['minmaxlen'].dirty || valForm.controls['minmaxlen'].touched)\">This field requires a range</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">length range between 6 and 10</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Value range</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"range\" [formControl]=\"valForm.controls['range']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['range'].hasError('range') && (valForm.controls['range'].dirty || valForm.controls['range'].touched)\">This field requires a value range</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">value range between 10 and 20</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-heading\">Custom</div>\r\n                    <div class=\"cardbox-body\">\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Min words</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"minwords\" [formControl]=\"valForm.controls['minwords']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['minwords'].hasError('minWords') && (valForm.controls['minwords'].dirty || valForm.controls['minwords'].touched)\">This field requires a minimum amount of words</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">words >= 6</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"bb0\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Max words</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"maxwords\" [formControl]=\"valForm.controls['maxwords']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['maxwords'].hasError('maxWords') && (valForm.controls['maxwords'].dirty || valForm.controls['maxwords'].touched)\">This field requires a maximum amount of words</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">words <= 6</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"bb0\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Range of words</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"rangewords\" [formControl]=\"valForm.controls['rangewords']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['rangewords'].hasError('minWords') && (valForm.controls['rangewords'].dirty || valForm.controls['rangewords'].touched)\">This field requires a minimum amount of words</span>\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['rangewords'].hasError('maxWords') && (valForm.controls['rangewords'].dirty || valForm.controls['rangewords'].touched)\">This field requires a maximum amount of words</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">words range between 6 and 10</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Email BlackList</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <input class=\"form-control\" type=\"email\" placeholder=\"example: 'bad@email.com'\" formControlName=\"email_bl\" [formControl]=\"valForm.controls['email_bl']\" />\r\n                                    <span class=\"text-danger\" *ngIf=\"valForm.controls['email_bl'].hasError('blacklist') && (valForm.controls['email_bl'].dirty || valForm.controls['email_bl'].touched)\">Email found in black list</span>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">BlackList: <br>{{ blackList }}</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-sm-2 control-label\">Equal to</label>\r\n                                <div class=\"col-sm-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xs-6\">\r\n                                            <input class=\"form-control\" type=\"password\" formControlName=\"password\" [formControl]=\"valForm.controls['password']\" />\r\n                                            <span class=\"text-danger\" *ngIf=\"valForm.controls['password'].hasError('required') && (valForm.controls['password'].dirty || valForm.controls['password'].touched)\">Input required</span>\r\n                                        </div>\r\n                                        <div class=\"col-xs-6\">\r\n                                            <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" [formControl]=\"valForm.controls['confirmPassword']\" />\r\n                                            <span class=\"text-danger\" *ngIf=\"valForm.controls['confirmPassword'].errors?.equalTo\">Input does Not match</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <small class=\"text-muted\">Value match</small>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                    <button class=\"btn btn-info\" type=\"submit\">Run validation</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/validation/validation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/validation/validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ValidationComponent = (function () {
    function ValidationComponent(fb, pt) {
        this.blackList = ['bad@email.com', 'some@mail.com', 'wrong@email.co'];
        pt.setTitle('Form Validation');
        var formPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var formPasswordConfirm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(formPassword));
        // Model Driven validation
        this.valForm = fb.group({
            'sometext': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'checkbox': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'checkagree': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'radio': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'select': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'digits': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[0-9]+$')],
            'minlen': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)],
            'maxlen': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10)],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email],
            'url': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].url],
            'date': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].date],
            'number': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].number])],
            'alphanum': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z]+$')],
            'minvalue': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].min(6)],
            'maxvalue': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].max(10)],
            'minwords': [null, this.minWords(6)],
            'maxwords': [null, this.maxWords(10)],
            'minmaxlen': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].rangeLength([6, 10])],
            'range': [null, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].range([10, 20])],
            'rangewords': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([this.minWords(6), this.maxWords(10)])],
            'email_bl': [null, this.checkBlackList(this.blackList)],
            'password': formPassword,
            'confirmPassword': formPasswordConfirm
        });
        ///////
        var loginPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var loginPasswordConfirm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(loginPassword));
        this.loginForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'checkagree': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'password': loginPassword,
            'confirmPassword': loginPasswordConfirm
        });
    }
    ValidationComponent.prototype.submitForm = function ($ev, form) {
        $ev.preventDefault();
        var value = form.value;
        for (var c in form.controls) {
            form.controls[c].markAsTouched();
        }
        if (form.valid) {
            console.log('Valid!');
        }
        console.log(value);
    };
    ValidationComponent.prototype.minWords = function (checkValue) {
        return (function (control) {
            return (control.value || '').split(' ').length >= checkValue ? null : { 'minWords': control.value };
        });
    };
    ValidationComponent.prototype.maxWords = function (checkValue) {
        return (function (control) {
            return (control.value || '').split(' ').length <= checkValue ? null : { 'maxWords': control.value };
        });
    };
    ValidationComponent.prototype.checkBlackList = function (list) {
        return (function (control) {
            return list.indexOf(control.value) < 0 ? null : { 'blacklist': control.value };
        });
    };
    ValidationComponent.prototype.ngOnInit = function () {
    };
    return ValidationComponent;
}());
ValidationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validation',
        template: __webpack_require__("../../../../../src/app/routes/forms/validation/validation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/validation/validation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _b || Object])
], ValidationComponent);

var _a, _b;
//# sourceMappingURL=validation.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/forms/wizard/wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Form wizard</div><small>Using Angular native component methods</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <form class=\"form-validate\" novalidate=\"novalidate\">\r\n                <div class=\"wizard clearfix\">\r\n                    <div class=\"steps clearfix\">\r\n                        <ul class=\"list-inline\">\r\n                            <li [class.current]=\"stepActive(1)\">\r\n                                <a>\r\n                                    <span class=\"number\">1.</span>\r\n                                    Account\r\n                                </a>\r\n                            </li>\r\n                            <li [class.current]=\"stepActive(2)\">\r\n                                <a>\r\n                                    <span class=\"number\">2.</span>\r\n                                    Profile\r\n                                </a>\r\n                            </li>\r\n                            <li [class.current]=\"stepActive(3)\">\r\n                                <a>\r\n                                    <span class=\"number\">3.</span>\r\n                                    Hints\r\n                                </a>\r\n                            </li>\r\n                            <li [class.current]=\"stepActive(4)\">\r\n                                <a>\r\n                                    <span class=\"number\">4.</span>\r\n                                    Finish\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"content clearfix\">\r\n                        <fieldset class=\"body\" [class.current]=\"stepActive(1)\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"userName\">User name *</label>\r\n                                <input class=\"form-control\" id=\"userName\" name=\"userName\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"password\">Password *</label>\r\n                                <input class=\"form-control\" id=\"password\" name=\"password\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"confirm\">Confirm Password *</label>\r\n                                <input class=\"form-control\" id=\"confirm\" name=\"confirm\" type=\"text\">\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"body\" [class.current]=\"stepActive(2)\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">First name *</label>\r\n                                <input class=\"form-control\" id=\"name\" name=\"name\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"surname\">Last name *</label>\r\n                                <input class=\"form-control\" id=\"surname\" name=\"surname\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"email\">Email *</label>\r\n                                <input class=\"form-control email\" id=\"email\" name=\"email\" type=\"text\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"address\">Address</label>\r\n                                <input class=\"form-control\" id=\"address\" name=\"address\" type=\"text\">\r\n                            </div>\r\n                        </fieldset>\r\n                        <fieldset class=\"body\" [class.current]=\"stepActive(3)\">\r\n                            <p class=\"lead text-center\">Almost there!</p>\r\n                        </fieldset>\r\n                        <fieldset class=\"body\" [class.current]=\"stepActive(4)\">\r\n                            <p class=\"lead\">One last check</p>\r\n                            <div class=\"form-check\">\r\n                                <label class=\"form-check-label\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" name=\"terms\">I agree with the Terms and Conditions.\r\n                                </label>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                    <div class=\"actions clearfix\">\r\n                        <ul class=\"list-inline\">\r\n                            <li [class.disabled]=\"isFirstStep()\">\r\n                                <a (click)=\"stepPrev()\">Previous</a>\r\n                            </li>\r\n                            <li>\r\n                                <a (click)=\"stepNext()\" [innerHTML]=\"isLastStep() ? 'Finish' : 'Next'\">Next</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/forms/wizard/wizard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wizard > .steps {\n  position: relative;\n  display: block;\n  width: 100%; }\n  .wizard > .steps .number {\n    font-size: 1.429em; }\n  .wizard > .steps > ul > li {\n    width: 25%; }\n\n.wizard > .content {\n  background-color: transparent;\n  display: block;\n  margin: 0.5em;\n  min-height: 350px;\n  overflow: hidden;\n  position: relative;\n  width: auto;\n  border-radius: 5px; }\n  .wizard > .content > .body {\n    float: left;\n    position: absolute;\n    width: 100%;\n    height: 95%;\n    padding: 2.5% 0;\n    display: none; }\n    .wizard > .content > .body.current {\n      display: block; }\n    .wizard > .content > .body ul {\n      list-style: disc !important; }\n      .wizard > .content > .body ul > li {\n        display: list-item; }\n    .wizard > .content > .body > iframe {\n      border: 0 none;\n      width: 100%;\n      height: 100%; }\n    .wizard > .content > .body input.error {\n      border-color: #FF5252; }\n    .wizard > .content > .body input.valid {\n      border-color: #4CAF50; }\n    .wizard > .content > .body label {\n      display: inline-block;\n      margin-bottom: 0.5em; }\n      .wizard > .content > .body label.error {\n        color: #FF5252;\n        display: block !important;\n        padding: 0; }\n      .wizard > .content > .body label.valid {\n        border-color: #4CAF50; }\n\n.wizard > .actions {\n  position: relative;\n  display: block;\n  text-align: right;\n  width: 100%; }\n  .wizard > .actions > ul {\n    display: inline-block;\n    text-align: right; }\n    .wizard > .actions > ul > li {\n      margin: 0 0.5em; }\n\n.wizard > .steps > ul > li, .wizard > .actions > ul > li {\n  float: left; }\n\n.wizard > .steps a, .wizard > .steps a:hover, .wizard > .steps a:active {\n  display: block;\n  width: auto;\n  margin: 0 0.5em 0.5em;\n  padding: 1em 1em;\n  text-decoration: none;\n  border-radius: 0;\n  font-weight: bold;\n  color: inherit; }\n  .wizard > .steps a > small, .wizard > .steps a:hover > small, .wizard > .steps a:active > small {\n    font-weight: normal;\n    color: #a2a2a2; }\n\n.wizard > .steps .disabled a, .wizard > .steps .disabled a:hover, .wizard > .steps .disabled a:active {\n  background: transparent;\n  color: inherit;\n  cursor: default; }\n\n.wizard > .steps .current a, .wizard > .steps .current a:hover, .wizard > .steps .current a:active {\n  border-bottom: 2px solid #1E88E5;\n  cursor: default; }\n\n.wizard > .steps .done a, .wizard > .steps .done a:hover, .wizard > .steps .done a:active {\n  background: transparent;\n  color: inherit; }\n\n.wizard > .actions a, .wizard > .actions a:hover, .wizard > .actions a:active {\n  display: inline-block;\n  padding: 6px 16px;\n  font-size: 13px;\n  border-radius: 3px;\n  text-decoration: none;\n  color: #fff;\n  background: #1E88E5;\n  border: 0; }\n\n.wizard > .actions .disabled a, .wizard > .actions .disabled a:hover, .wizard > .actions .disabled a:active {\n  color: inherit;\n  background: rgba(160, 160, 160, 0.25);\n  border: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/forms/wizard/wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = (function () {
    function WizardComponent(pt) {
        this.currentStep = 1;
        this.steps = [1, 2, 3, 4];
        pt.setTitle('Form Wizard');
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.stepNext = function () {
        if (!this.isLastStep())
            this.currentStep++;
    };
    WizardComponent.prototype.stepPrev = function () {
        if (!this.isFirstStep())
            this.currentStep--;
    };
    WizardComponent.prototype.stepActive = function (stepNo) {
        return this.currentStep === stepNo;
    };
    WizardComponent.prototype.isFirstStep = function () {
        return this.currentStep === Math.min.apply(Math, this.steps);
    };
    WizardComponent.prototype.isLastStep = function () {
        return this.currentStep === Math.max.apply(Math, this.steps);
    };
    return WizardComponent;
}());
WizardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wizard',
        template: __webpack_require__("../../../../../src/app/routes/forms/wizard/wizard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/forms/wizard/wizard.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], WizardComponent);

var _a;
//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../dropzone/dist/basic.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  position: relative; }\n  .dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    width: 120px;\n    margin: 0.5em; }\n    .dropzone .dz-preview .dz-progress {\n      display: block;\n      height: 15px;\n      border: 1px solid #aaa; }\n      .dropzone .dz-preview .dz-progress .dz-upload {\n        display: block;\n        height: 100%;\n        width: 0;\n        background: green; }\n    .dropzone .dz-preview .dz-error-message {\n      color: red;\n      display: none; }\n    .dropzone .dz-preview.dz-error .dz-error-message, .dropzone .dz-preview.dz-error .dz-error-mark {\n      display: block; }\n    .dropzone .dz-preview.dz-success .dz-success-mark {\n      display: block; }\n    .dropzone .dz-preview .dz-error-mark, .dropzone .dz-preview .dz-success-mark {\n      position: absolute;\n      display: none;\n      left: 30px;\n      top: 30px;\n      width: 54px;\n      height: 58px;\n      left: 50%;\n      margin-left: -27px; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../dropzone/dist/dropzone.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n  .dropzone.dz-clickable {\n    cursor: pointer; }\n    .dropzone.dz-clickable * {\n      cursor: default; }\n    .dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n      cursor: pointer; }\n  .dropzone.dz-started .dz-message {\n    display: none; }\n  .dropzone.dz-drag-hover {\n    border-style: solid; }\n    .dropzone.dz-drag-hover .dz-message {\n      opacity: 0.5; }\n  .dropzone .dz-message {\n    text-align: center;\n    margin: 2em 0; }\n  .dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    margin: 16px;\n    min-height: 100px; }\n    .dropzone .dz-preview:hover {\n      z-index: 1000; }\n      .dropzone .dz-preview:hover .dz-details {\n        opacity: 1; }\n    .dropzone .dz-preview.dz-file-preview .dz-image {\n      border-radius: 20px;\n      background: #999;\n      background: linear-gradient(to bottom, #eee, #ddd); }\n    .dropzone .dz-preview.dz-file-preview .dz-details {\n      opacity: 1; }\n    .dropzone .dz-preview.dz-image-preview {\n      background: white; }\n      .dropzone .dz-preview.dz-image-preview .dz-details {\n        transition: opacity 0.2s linear; }\n    .dropzone .dz-preview .dz-remove {\n      font-size: 14px;\n      text-align: center;\n      display: block;\n      cursor: pointer;\n      border: none; }\n      .dropzone .dz-preview .dz-remove:hover {\n        text-decoration: underline; }\n    .dropzone .dz-preview:hover .dz-details {\n      opacity: 1; }\n    .dropzone .dz-preview .dz-details {\n      z-index: 20;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      font-size: 13px;\n      min-width: 100%;\n      max-width: 100%;\n      padding: 2em 1em;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.9);\n      line-height: 150%; }\n      .dropzone .dz-preview .dz-details .dz-size {\n        margin-bottom: 1em;\n        font-size: 16px; }\n      .dropzone .dz-preview .dz-details .dz-filename {\n        white-space: nowrap; }\n        .dropzone .dz-preview .dz-details .dz-filename:hover span {\n          border: 1px solid rgba(200, 200, 200, 0.8);\n          background-color: rgba(255, 255, 255, 0.8); }\n        .dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n          overflow: hidden;\n          text-overflow: ellipsis; }\n          .dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n            border: 1px solid transparent; }\n      .dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n        background-color: rgba(255, 255, 255, 0.4);\n        padding: 0 0.4em;\n        border-radius: 3px; }\n    .dropzone .dz-preview:hover .dz-image img {\n      -webkit-transform: scale(1.05, 1.05);\n      transform: scale(1.05, 1.05);\n      -webkit-filter: blur(8px);\n      filter: blur(8px); }\n    .dropzone .dz-preview .dz-image {\n      border-radius: 20px;\n      overflow: hidden;\n      width: 120px;\n      height: 120px;\n      position: relative;\n      display: block;\n      z-index: 10; }\n      .dropzone .dz-preview .dz-image img {\n        display: block; }\n    .dropzone .dz-preview.dz-success .dz-success-mark {\n      -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n    .dropzone .dz-preview.dz-error .dz-error-mark {\n      opacity: 1;\n      -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n    .dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n      pointer-events: none;\n      opacity: 0;\n      z-index: 500;\n      position: absolute;\n      display: block;\n      top: 50%;\n      left: 50%;\n      margin-left: -27px;\n      margin-top: -27px; }\n      .dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n        display: block;\n        width: 54px;\n        height: 54px; }\n    .dropzone .dz-preview.dz-processing .dz-progress {\n      opacity: 1;\n      transition: all 0.2s linear; }\n    .dropzone .dz-preview.dz-complete .dz-progress {\n      opacity: 0;\n      transition: opacity 0.4s ease-in; }\n    .dropzone .dz-preview:not(.dz-processing) .dz-progress {\n      -webkit-animation: pulse 6s ease infinite;\n      animation: pulse 6s ease infinite; }\n    .dropzone .dz-preview .dz-progress {\n      opacity: 1;\n      z-index: 1000;\n      pointer-events: none;\n      position: absolute;\n      height: 16px;\n      left: 50%;\n      top: 50%;\n      margin-top: -8px;\n      width: 80px;\n      margin-left: -40px;\n      background: rgba(255, 255, 255, 0.9);\n      -webkit-transform: scale(1);\n      border-radius: 8px;\n      overflow: hidden; }\n      .dropzone .dz-preview .dz-progress .dz-upload {\n        background: #333;\n        background: linear-gradient(to bottom, #666, #444);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 0;\n        transition: width 300ms ease-in-out; }\n    .dropzone .dz-preview.dz-error .dz-error-message {\n      display: block; }\n    .dropzone .dz-preview.dz-error:hover .dz-error-message {\n      opacity: 1;\n      pointer-events: auto; }\n    .dropzone .dz-preview .dz-error-message {\n      pointer-events: none;\n      z-index: 1000;\n      position: absolute;\n      display: block;\n      display: none;\n      opacity: 0;\n      transition: opacity 0.3s ease;\n      border-radius: 8px;\n      font-size: 13px;\n      top: 130px;\n      left: -10px;\n      width: 140px;\n      background: #be2626;\n      background: linear-gradient(to bottom, #be2626, #a92222);\n      padding: 0.5em 1.2em;\n      color: white; }\n      .dropzone .dz-preview .dz-error-message:after {\n        content: '';\n        position: absolute;\n        top: -6px;\n        left: 64px;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid #be2626; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../dropzone/dist/dropzone.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {
/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Emitter, ExifRestore, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    slice = [].slice,
    extend1 = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  noop = function() {};

  Emitter = (function() {
    function Emitter() {}

    Emitter.prototype.addEventListener = Emitter.prototype.on;

    Emitter.prototype.on = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    };

    Emitter.prototype.emit = function() {
      var args, callback, callbacks, event, j, len;
      event = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      this._callbacks = this._callbacks || {};
      callbacks = this._callbacks[event];
      if (callbacks) {
        for (j = 0, len = callbacks.length; j < len; j++) {
          callback = callbacks[j];
          callback.apply(this, args);
        }
      }
      return this;
    };

    Emitter.prototype.removeListener = Emitter.prototype.off;

    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

    Emitter.prototype.removeEventListener = Emitter.prototype.off;

    Emitter.prototype.off = function(event, fn) {
      var callback, callbacks, i, j, len;
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }
      callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }
      for (i = j = 0, len = callbacks.length; j < len; i = ++j) {
        callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      return this;
    };

    return Emitter;

  })();

  Dropzone = (function(superClass) {
    var extend, resolveOption;

    extend1(Dropzone, superClass);

    Dropzone.prototype.Emitter = Emitter;


    /*
    This is a list of all available events you can register on a dropzone object.
    
    You can register an event handler like this:
    
        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      timeout: 30000,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      thumbnailMethod: 'crop',
      resizeWidth: null,
      resizeHeight: null,
      resizeMimeType: null,
      resizeQuality: 0.8,
      resizeMethod: 'contain',
      filesizeBase: 1000,
      maxFiles: null,
      params: {},
      headers: null,
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      hiddenInputContainer: "body",
      capture: null,
      renameFilename: null,
      renameFile: null,
      forceFallback: false,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
      },
      init: function() {
        return noop;
      },
      accept: function(file, done) {
        return done();
      },
      fallback: function() {
        var child, j, len, messageElement, ref, span;
        this.element.className = this.element.className + " dz-browser-not-supported";
        ref = this.element.getElementsByTagName("div");
        for (j = 0, len = ref.length; j < len; j++) {
          child = ref[j];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          if (span.textContent != null) {
            span.textContent = this.options.dictFallbackMessage;
          } else if (span.innerText != null) {
            span.innerText = this.options.dictFallbackMessage;
          }
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file, width, height, resizeMethod) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        if ((width == null) && (height == null)) {
          width = info.srcWidth;
          height = info.srcHeight;
        } else if (width == null) {
          width = height * srcRatio;
        } else if (height == null) {
          height = width / srcRatio;
        }
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
          if (resizeMethod === 'crop') {
            if (srcRatio > trgRatio) {
              info.srcHeight = file.height;
              info.srcWidth = info.srcHeight * trgRatio;
            } else {
              info.srcWidth = file.width;
              info.srcHeight = info.srcWidth / trgRatio;
            }
          } else if (resizeMethod === 'contain') {
            if (srcRatio > trgRatio) {
              height = width / srcRatio;
            } else {
              width = height * srcRatio;
            }
          } else {
            throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
      },
      transformFile: function(file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
          return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        } else {
          return done(file);
        }
      },
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var j, k, l, len, len1, len2, node, ref, ref1, ref2, removeFileEvent, removeLink, results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            node.textContent = file.name;
          }
          ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            node = ref1[k];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          results = [];
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            removeLink = ref2[l];
            results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return results;
        }
      },
      removedfile: function(file) {
        var ref;
        if (file.previewElement) {
          if ((ref = file.previewElement) != null) {
            ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var j, len, ref, thumbnailElement;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          for (j = 0, len = ref.length; j < len; j++) {
            thumbnailElement = ref[j];
            thumbnailElement.alt = file.name;
            thumbnailElement.src = dataUrl;
          }
          return setTimeout(((function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this)), 1);
        }
      },
      error: function(file, message) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            results.push(node.textContent = message);
          }
          return results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var j, len, node, ref, results;
        if (file.previewElement) {
          ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            node = ref[j];
            if (node.nodeName === 'PROGRESS') {
              results.push(node.value = progress);
            } else {
              results.push(node.style.width = progress + "%");
            }
          }
          return results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          file._removeLink.textContent = this.options.dictRemoveFile;
        }
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-complete");
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      queuecomplete: noop,
      addedfiles: noop
    };

    extend = function() {
      var j, key, len, object, objects, target, val;
      target = arguments[0], objects = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      for (j = 0, len = objects.length; j < len; j++) {
        object = objects[j];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element1, options) {
      var elementOptions, fallback, ref;
      this.element = element1;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (ref = Dropzone.optionsForElement(this.element)) != null ? ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      if (this.options.renameFilename != null) {
        this.options.renameFile = (function(_this) {
          return function(file) {
            return _this.options.renameFilename.call(_this, file.name, file);
          };
        })(this);
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (!file.accepted) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === status) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getAddedFiles = function() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, j, len, ref, results;
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          results.push(file);
        }
      }
      return results;
    };

    Dropzone.prototype.init = function() {
      var eventName, j, len, noPropagation, ref, ref1, setupHiddenFileInput;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            if (_this.options.capture != null) {
              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, j, len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (j = 0, len = files.length; j < len; j++) {
                  file = files[j];
                  _this.addFile(file);
                }
              }
              _this.emit("addedfiles", files);
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (ref = window.URL) != null ? ref : window.webkitURL;
      ref1 = this.events;
      for (j = 0, len = ref1.length; j < len; j++) {
        eventName = ref1[j];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (undefined) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  _this.hiddenFileInput.click();
                }
                return true;
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var ref;
      this.disable();
      this.removeAllFiles(true);
      if ((ref = this.hiddenFileInput) != null ? ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, j, len, ref, totalBytes, totalBytesSent, totalUploadProgress;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        ref = this.getActiveFiles();
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype._renameFile = function(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, j, len, ref, tagName;
      getFallback = function(elements) {
        var el, j, len;
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      ref = ["div", "form"];
      for (j = 0, len = ref.length; j < len; j++) {
        tagName = ref[j];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, j, len, listener, ref, results;
      ref = this.listeners;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        elementListeners = ref[j];
        results.push((function() {
          var ref1, results1;
          ref1 = elementListeners.events;
          results1 = [];
          for (event in ref1) {
            listener = ref1[event];
            results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return results1;
        })());
      }
      return results;
    };

    Dropzone.prototype.disable = function() {
      var file, j, len, ref, results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      ref = this.files;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        results.push(this.cancelUpload(file));
      }
      return results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var cutoff, i, j, len, selectedSize, selectedUnit, unit, units;
      selectedSize = 0;
      selectedUnit = "b";
      if (size > 0) {
        units = ['tb', 'gb', 'mb', 'kb', 'b'];
        for (i = j = 0, len = units.length; j < len; i = ++j) {
          unit = units[i];
          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }
        selectedSize = Math.round(10 * selectedSize) / 10;
      }
      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      this.emit("addedfiles", files);
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, ref;
      if ((e != null ? (ref = e.clipboardData) != null ? ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, j, len, results;
      results = [];
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        results.push(this.addFile(file));
      }
      return results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, j, len, results;
      results = [];
      for (j = 0, len = items.length; j < len; j++) {
        item = items[j];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            results.push(this.addFile(item.getAsFile()));
          } else {
            results.push(void 0);
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, errorHandler, readEntries;
      dirReader = directory.createReader();
      errorHandler = function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      };
      readEntries = (function(_this) {
        return function() {
          return dirReader.readEntries(function(entries) {
            var entry, j, len;
            if (entries.length > 0) {
              for (j = 0, len = entries.length; j < len; j++) {
                entry = entries[j];
                if (entry.isFile) {
                  entry.file(function(file) {
                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }
                    file.fullPath = path + "/" + file.name;
                    return _this.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this._addFilesFromDirectory(entry, path + "/" + entry.name);
                }
              }
              readEntries();
            }
            return null;
          }, errorHandler);
        };
      })(this);
      return readEntries();
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file)
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      var file;
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (function(_this) {
        return function(dataUrl) {
          _this.emit("thumbnail", file, dataUrl);
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, j, len, ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      ref = this.files.slice();
      for (j = 0, len = ref.length; j < len; j++) {
        file = ref[j];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.resizeImage = function(file, width, height, resizeMethod, callback) {
      return this.createThumbnail(file, width, height, resizeMethod, false, (function(_this) {
        return function(dataUrl, canvas) {
          var resizeMimeType, resizedDataURL;
          if (canvas === null) {
            return callback(file);
          } else {
            resizeMimeType = _this.options.resizeMimeType;
            if (resizeMimeType == null) {
              resizeMimeType = file.type;
            }
            resizedDataURL = canvas.toDataURL(resizeMimeType, _this.options.resizeQuality);
            if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
              resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
            }
            return callback(Dropzone.dataURItoBlob(resizedDataURL));
          }
        };
      })(this));
    };

    Dropzone.prototype.createThumbnail = function(file, width, height, resizeMethod, fixOrientation, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          file.dataURL = fileReader.result;
          if (file.type === "image/svg+xml") {
            if (callback != null) {
              callback(fileReader.result);
            }
            return;
          }
          return _this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.createThumbnailFromUrl = function(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var img;
      img = document.createElement("img");
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.onload = (function(_this) {
        return function() {
          var loadExif;
          loadExif = function(callback) {
            return callback(1);
          };
          if ((typeof EXIF !== "undefined" && EXIF !== null) && fixOrientation) {
            loadExif = function(callback) {
              return EXIF.getData(img, function() {
                return callback(EXIF.getTag(this, 'Orientation'));
              });
            };
          }
          return loadExif(function(orientation) {
            var canvas, ctx, ref, ref1, ref2, ref3, resizeInfo, thumbnail;
            file.width = img.width;
            file.height = img.height;
            resizeInfo = _this.options.resize.call(_this, file, width, height, resizeMethod);
            canvas = document.createElement("canvas");
            ctx = canvas.getContext("2d");
            canvas.width = resizeInfo.trgWidth;
            canvas.height = resizeInfo.trgHeight;
            if (orientation > 4) {
              canvas.width = resizeInfo.trgHeight;
              canvas.height = resizeInfo.trgWidth;
            }
            switch (orientation) {
              case 2:
                ctx.translate(canvas.width, 0);
                ctx.scale(-1, 1);
                break;
              case 3:
                ctx.translate(canvas.width, canvas.height);
                ctx.rotate(Math.PI);
                break;
              case 4:
                ctx.translate(0, canvas.height);
                ctx.scale(1, -1);
                break;
              case 5:
                ctx.rotate(0.5 * Math.PI);
                ctx.scale(1, -1);
                break;
              case 6:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(0, -canvas.height);
                break;
              case 7:
                ctx.rotate(0.5 * Math.PI);
                ctx.translate(canvas.width, -canvas.height);
                ctx.scale(-1, 1);
                break;
              case 8:
                ctx.rotate(-0.5 * Math.PI);
                ctx.translate(-canvas.width, 0);
            }
            drawImageIOSFix(ctx, img, (ref = resizeInfo.srcX) != null ? ref : 0, (ref1 = resizeInfo.srcY) != null ? ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (ref2 = resizeInfo.trgX) != null ? ref2 : 0, (ref3 = resizeInfo.trgY) != null ? ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");
            if (callback != null) {
              return callback(thumbnail, canvas);
            }
          });
        };
      })(this);
      if (callback != null) {
        img.onerror = callback;
      }
      return img.src = file.dataURL;
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var j, len, ref, results;
        ref = this.files;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          file = ref[j];
          if (file.xhr === xhr) {
            results.push(file);
          }
        }
        return results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, j, k, len, len1, ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (j = 0, len = groupedFiles.length; j < len; j++) {
          groupedFile = groupedFiles[j];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (k = 0, len1 = groupedFiles.length; k < len1; k++) {
          groupedFile = groupedFiles[k];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((ref = file.status) === Dropzone.ADDED || ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    resolveOption = function() {
      var args, option;
      option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (typeof option === 'function') {
        return option.apply(this, args);
      }
      return option;
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var doneCounter, doneFunction, file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, j, k, key, l, len, len1, len2, len3, m, method, o, option, progressObj, ref, ref1, ref2, ref3, ref4, ref5, response, results, updateProgress, url, value, xhr;
      xhr = new XMLHttpRequest();
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.xhr = xhr;
      }
      method = resolveOption(this.options.method, files);
      url = resolveOption(this.options.url, files);
      xhr.open(method, url, true);
      xhr.timeout = resolveOption(this.options.timeout, files);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var k, len1, results;
          results = [];
          for (k = 0, len1 = files.length; k < len1; k++) {
            file = files[k];
            results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, k, l, len1, len2, len3, m, progress, results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (k = 0, len1 = files.length; k < len1; k++) {
              file = files[k];
              file.upload.progress = progress;
              file.upload.total = e.total;
              file.upload.bytesSent = e.loaded;
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (l = 0, len2 = files.length; l < len2; l++) {
              file = files[l];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          results = [];
          for (m = 0, len3 = files.length; m < len3; m++) {
            file = files[m];
            results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var error1, ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
              try {
                response = JSON.parse(response);
              } catch (error1) {
                e = error1;
                response = "Invalid JSON response from server.";
              }
            }
          }
          updateProgress();
          if (!((200 <= (ref = xhr.status) && ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (ref = xhr.upload) != null ? ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }
      formData = new FormData();
      if (this.options.params) {
        ref1 = this.options.params;
        for (key in ref1) {
          value = ref1[key];
          formData.append(key, value);
        }
      }
      for (k = 0, len1 = files.length; k < len1; k++) {
        file = files[k];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (l = 0, len2 = ref2.length; l < len2; l++) {
          input = ref2[l];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            ref3 = input.options;
            for (m = 0, len3 = ref3.length; m < len3; m++) {
              option = ref3[m];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((ref4 = inputType.toLowerCase()) !== "checkbox" && ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      doneCounter = 0;
      results = [];
      for (i = o = 0, ref5 = files.length - 1; 0 <= ref5 ? o <= ref5 : o >= ref5; i = 0 <= ref5 ? ++o : --o) {
        doneFunction = (function(_this) {
          return function(file, paramName, fileName) {
            return function(transformedFile) {
              formData.append(paramName, transformedFile, fileName);
              if (++doneCounter === files.length) {
                return _this.submitRequest(xhr, formData, files);
              }
            };
          };
        })(this);
        results.push(this.options.transformFile.call(this, files[i], doneFunction(files[i], this._getParamName(i), files[i].upload.filename)));
      }
      return results;
    };

    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, j, len;
      for (j = 0, len = files.length; j < len; j++) {
        file = files[j];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Emitter);

  Dropzone.version = "5.1.1";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, j, len, results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, j, len, results;
        results = [];
        for (j = 0, len = elements.length; j < len; j++) {
          el = elements[j];
          if (/(^| )dropzone($| )/.test(el.className)) {
            results.push(dropzones.push(el));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    results = [];
    for (j = 0, len = dropzones.length; j < len; j++) {
      dropzone = dropzones[j];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        results.push(new Dropzone(dropzone));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, j, len, ref, regex;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        ref = Dropzone.blacklistedBrowsers;
        for (j = 0, len = ref.length; j < len; j++) {
          regex = ref[j];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  Dropzone.dataURItoBlob = function(dataURI) {
    var ab, byteString, i, ia, j, mimeString, ref;
    byteString = atob(dataURI.split(',')[1]);
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    ab = new ArrayBuffer(byteString.length);
    ia = new Uint8Array(ab);
    for (i = j = 0, ref = byteString.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {
      type: mimeString
    });
  };

  without = function(list, rejectedItem) {
    var item, j, len, results;
    results = [];
    for (j = 0, len = list.length; j < len; j++) {
      item = list[j];
      if (item !== rejectedItem) {
        results.push(item);
      }
    }
    return results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, error1, j, k, len, len1, ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (j = 0, len = els.length; j < len; j++) {
          el = els[j];
          elements.push(this.getElement(el, name));
        }
      } catch (error1) {
        e = error1;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      ref = document.querySelectorAll(els);
      for (k = 0, len1 = ref.length; k < len1; k++) {
        el = ref[k];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, j, len, mimeType, validType;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (j = 0, len = acceptedFiles.length; j < len; j++) {
      validType = acceptedFiles[j];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*
  
  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(1, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };

  ExifRestore = (function() {
    function ExifRestore() {}

    ExifRestore.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    ExifRestore.encode64 = function(input) {
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    };

    ExifRestore.restore = function(origFileBase64, resizedFileBase64) {
      var image, rawImage, segments;
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      segments = this.slice2Segments(rawImage);
      image = this.exifManipulation(resizedFileBase64, segments);
      return 'data:image/jpeg;base64,' + this.encode64(image);
    };

    ExifRestore.exifManipulation = function(resizedFileBase64, segments) {
      var aBuffer, exifArray, newImageArray;
      exifArray = this.getExifArray(segments);
      newImageArray = this.insertExif(resizedFileBase64, exifArray);
      aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    };

    ExifRestore.getExifArray = function(segments) {
      var seg, x;
      seg = void 0;
      x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    };

    ExifRestore.insertExif = function(resizedFileBase64, exifArray) {
      var array, ato, buf, imageData, mae, separatePoint;
      imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      buf = this.decode64(imageData);
      separatePoint = buf.indexOf(255, 3);
      mae = buf.slice(0, separatePoint);
      ato = buf.slice(separatePoint);
      array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };

    ExifRestore.slice2Segments = function(rawImageArray) {
      var endPoint, head, length, seg, segments;
      head = 0;
      segments = [];
      while (true) {
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          endPoint = head + length + 2;
          seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    };

    ExifRestore.decode64 = function(input) {
      var base64test, buf, chr1, chr2, chr3, enc1, enc2, enc3, enc4, i, output;
      output = '';
      chr1 = void 0;
      chr2 = void 0;
      chr3 = '';
      enc1 = void 0;
      enc2 = void 0;
      enc3 = void 0;
      enc4 = '';
      i = 0;
      buf = [];
      base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warning('There were invalid base64 characters in the input text.\n' + 'Valid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\n' + 'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    };

    return ExifRestore;

  })();


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e, error1;
      try {
        root.doScroll("left");
      } catch (error1) {
        e = error1;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (undefined) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "../../../../ng2-select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-select/select/common.js"));
__export(__webpack_require__("../../../../ng2-select/select/off-click.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.module.js"));
__export(__webpack_require__("../../../../ng2-select/select/select.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-item.js"));
__export(__webpack_require__("../../../../ng2-select/select/select-pipes.js"));


/***/ }),

/***/ "../../../../ng2-select/select/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
exports.escapeRegexp = escapeRegexp;


/***/ }),

/***/ "../../../../ng2-select/select/off-click.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    /* tslint:enable */
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (typeof document !== 'undefined') {
            document.addEventListener('click', _this.offClickHandler);
        } }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    OffClickDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[offClick]'
                },] },
    ];
    /** @nocollapse */
    OffClickDirective.ctorParameters = function () { return []; };
    OffClickDirective.propDecorators = {
        'offClickHandler': [{ type: core_1.Input, args: ['offClick',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return OffClickDirective;
}());
exports.OffClickDirective = OffClickDirective;


/***/ }),

/***/ "../../../../ng2-select/select/select-item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SelectItem = (function () {
    function SelectItem(source) {
        var _this = this;
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id || source.text;
            this.text = source.text;
            if (source.children && source.text) {
                this.children = source.children.map(function (c) {
                    var r = new SelectItem(c);
                    r.parent = _this;
                    return r;
                });
                this.text = source.text;
            }
        }
    }
    SelectItem.prototype.fillChildrenHash = function (optionsMap, startIndex) {
        var i = startIndex;
        this.children.map(function (child) {
            optionsMap.set(child.id, i++);
        });
        return i;
    };
    SelectItem.prototype.hasChildren = function () {
        return this.children && this.children.length > 0;
    };
    SelectItem.prototype.getSimilar = function () {
        var r = new SelectItem(false);
        r.id = this.id;
        r.text = this.text;
        r.parent = this.parent;
        return r;
    };
    return SelectItem;
}());
exports.SelectItem = SelectItem;


/***/ }),

/***/ "../../../../ng2-select/select/select-pipes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var HighlightPipe = (function () {
    function HighlightPipe() {
    }
    HighlightPipe.prototype.transform = function (value, query) {
        if (query.length < 1) {
            return value;
        }
        if (query) {
            var tagRE = new RegExp('<[^<>]*>', 'ig');
            // get ist of tags
            var tagList = value.match(tagRE);
            // Replace tags with token
            var tmpValue = value.replace(tagRE, '$!$');
            // Replace search words
            value = tmpValue.replace(new RegExp(common_1.escapeRegexp(query), 'gi'), '<strong>$&</strong>');
            // Reinsert HTML
            for (var i = 0; value.indexOf('$!$') > -1; i++) {
                value = value.replace('$!$', tagList[i]);
            }
        }
        return value;
    };
    HighlightPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'highlight' },] },
    ];
    /** @nocollapse */
    HighlightPipe.ctorParameters = function () { return []; };
    return HighlightPipe;
}());
exports.HighlightPipe = HighlightPipe;
function stripTags(input) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, '');
}
exports.stripTags = stripTags;


/***/ }),

/***/ "../../../../ng2-select/select/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var select_item_1 = __webpack_require__("../../../../ng2-select/select/select-item.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var common_1 = __webpack_require__("../../../../ng2-select/select/common.js");
var styles = "\n  .ui-select-toggle {\n    position: relative;\n  }\n\n  /* Fix caret going into new line in Firefox */\n  .ui-select-placeholder {\n    float: left;\n  }\n  \n  /* Fix Bootstrap dropdown position when inside a input-group */\n  .input-group > .dropdown {\n    /* Instead of relative */\n    position: static;\n  }\n  \n  .ui-select-match > .btn {\n    /* Instead of center because of .btn */\n    text-align: left !important;\n  }\n  \n  .ui-select-match > .caret {\n    position: absolute;\n    top: 45%;\n    right: 15px;\n  }\n  \n  .ui-disabled {\n    background-color: #eceeef;\n    border-radius: 4px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    opacity: 0.6;\n    top: 0;\n    left: 0;\n    cursor: not-allowed;\n  }\n  \n  .ui-select-choices {\n    width: 100%;\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n    margin-top: 0;\n  }\n  \n  .ui-select-multiple .ui-select-choices {\n    margin-top: 1px;\n  }\n  .ui-select-choices-row>a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: 400;\n      line-height: 1.42857143;\n      color: #333;\n      white-space: nowrap;\n  }\n  .ui-select-choices-row.active>a {\n      color: #fff;\n      text-decoration: none;\n      outline: 0;\n      background-color: #428bca;\n  }\n  \n  .ui-select-multiple {\n    height: auto;\n    padding:3px 3px 0 3px;\n  }\n  \n  .ui-select-multiple input.ui-select-search {\n    background-color: transparent !important; /* To prevent double background when disabled */\n    border: none;\n    outline: none;\n    box-shadow: none;\n    height: 1.6666em;\n    padding: 0;\n    margin-bottom: 3px;\n    \n  }\n  .ui-select-match .close {\n      font-size: 1.6em;\n      line-height: 0.75;\n  }\n  \n  .ui-select-multiple .ui-select-match-item {\n    outline: 0;\n    margin: 0 3px 3px 0;\n  }\n  .ui-select-toggle > .caret {\n      position: absolute;\n      height: 10px;\n      top: 50%;\n      right: 10px;\n      margin-top: -2px;\n  }\n";
var SelectComponent = (function () {
    function SelectComponent(element, sanitizer) {
        this.sanitizer = sanitizer;
        this.allowClear = false;
        this.placeholder = '';
        this.idField = 'id';
        this.textField = 'text';
        this.childrenField = 'children';
        this.multiple = false;
        this.data = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.removed = new core_1.EventEmitter();
        this.typed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
        this.options = [];
        this.itemObjects = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inputMode = false;
        this._optionsOpened = false;
        this.inputValue = '';
        this._items = [];
        this._disabled = false;
        this._active = [];
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }
    Object.defineProperty(SelectComponent.prototype, "items", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._items = this.itemObjects = [];
            }
            else {
                this._items = value.filter(function (item) {
                    if ((typeof item === 'string') || (typeof item === 'object' && item && item[_this.textField] && item[_this.idField])) {
                        return item;
                    }
                });
                this.itemObjects = this._items.map(function (item) { return (typeof item === 'string' ? new select_item_1.SelectItem(item) : new select_item_1.SelectItem({ id: item[_this.idField], text: item[_this.textField], children: item[_this.childrenField] })); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled === true) {
                this.hideOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (selectedItems) {
            var _this = this;
            if (!selectedItems || selectedItems.length === 0) {
                this._active = [];
            }
            else {
                var areItemsStrings_1 = typeof selectedItems[0] === 'string';
                this._active = selectedItems.map(function (item) {
                    var data = areItemsStrings_1
                        ? item
                        : { id: item[_this.idField], text: item[_this.textField] };
                    return new select_item_1.SelectItem(data);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "optionsOpened", {
        get: function () {
            return this._optionsOpened;
        },
        set: function (value) {
            this._optionsOpened = value;
            this.opened.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SelectComponent.prototype.inputEvent = function (e, isUpMode) {
        if (isUpMode === void 0) { isUpMode = false; }
        // tab
        if (e.keyCode === 9) {
            return;
        }
        if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
            e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
            return;
        }
        // backspace
        if (!isUpMode && e.keyCode === 8) {
            var el = this.element.nativeElement
                .querySelector('div.ui-select-container > input');
            if (!el.value || el.value.length <= 0) {
                if (this.active.length > 0) {
                    this.remove(this.active[this.active.length - 1]);
                }
                e.preventDefault();
            }
        }
        // esc
        if (!isUpMode && e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // del
        if (!isUpMode && e.keyCode === 46) {
            if (this.active.length > 0) {
                this.remove(this.active[this.active.length - 1]);
            }
            e.preventDefault();
        }
        // left
        if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
            this.behavior.first();
            e.preventDefault();
            return;
        }
        // right
        if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
            this.behavior.last();
            e.preventDefault();
            return;
        }
        // up
        if (!isUpMode && e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (!isUpMode && e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (!isUpMode && e.keyCode === 13) {
            if (this.active.indexOf(this.activeOption) === -1) {
                this.selectActiveMatch();
                this.behavior.next();
            }
            e.preventDefault();
            return;
        }
        var target = e.target || e.srcElement;
        if (target && target.value) {
            this.inputValue = target.value;
            this.behavior.filter(new RegExp(common_1.escapeRegexp(this.inputValue), 'ig'));
            this.doEvent('typed', this.inputValue);
        }
        else {
            this.open();
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.behavior = (this.firstItemHasChildren) ?
            new ChildrenBehavior(this) : new GenericBehavior(this);
    };
    SelectComponent.prototype.remove = function (item) {
        if (this._disabled === true) {
            return;
        }
        if (this.multiple === true && this.active) {
            var index = this.active.indexOf(item);
            this.active.splice(index, 1);
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
        if (this.multiple === false) {
            this.active = [];
            this.data.next(this.active);
            this.doEvent('removed', item);
        }
    };
    SelectComponent.prototype.doEvent = function (type, value) {
        if (this[type] && value) {
            this[type].next(value);
        }
        this.onTouched();
        if (type === 'selected' || type === 'removed') {
            this.onChange(this.active);
        }
    };
    SelectComponent.prototype.clickedOutside = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    Object.defineProperty(SelectComponent.prototype, "firstItemHasChildren", {
        get: function () {
            return this.itemObjects[0] && this.itemObjects[0].hasChildren();
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.writeValue = function (val) {
        this.active = val;
        this.data.emit(this.active);
    };
    SelectComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    SelectComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectComponent.prototype.matchClick = function (e) {
        if (this._disabled === true) {
            return;
        }
        this.inputMode = !this.inputMode;
        if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
            this.focusToInput();
            this.open();
        }
    };
    SelectComponent.prototype.mainClick = function (event) {
        if (this.inputMode === true || this._disabled === true) {
            return;
        }
        if (event.keyCode === 46) {
            event.preventDefault();
            this.inputEvent(event);
            return;
        }
        if (event.keyCode === 8) {
            event.preventDefault();
            this.inputEvent(event, true);
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 13 ||
            event.keyCode === 27 || (event.keyCode >= 37 && event.keyCode <= 40)) {
            event.preventDefault();
            return;
        }
        this.inputMode = true;
        var value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        var target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    };
    SelectComponent.prototype.selectActive = function (value) {
        this.activeOption = value;
    };
    SelectComponent.prototype.isActive = function (value) {
        return this.activeOption.id === value.id;
    };
    SelectComponent.prototype.removeClick = function (value, event) {
        event.stopPropagation();
        this.remove(value);
    };
    SelectComponent.prototype.focusToInput = function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        setTimeout(function () {
            var el = _this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    };
    SelectComponent.prototype.open = function () {
        var _this = this;
        this.options = this.itemObjects
            .filter(function (option) { return (_this.multiple === false ||
            _this.multiple === true && !_this.active.find(function (o) { return option.text === o.text; })); });
        if (this.options.length > 0) {
            this.behavior.first();
        }
        this.optionsOpened = true;
    };
    SelectComponent.prototype.hideOptions = function () {
        this.inputMode = false;
        this.optionsOpened = false;
    };
    SelectComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this.activeOption);
    };
    SelectComponent.prototype.selectMatch = function (value, e) {
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.options.length <= 0) {
            return;
        }
        if (this.multiple === true) {
            this.active.push(value);
            this.data.next(this.active);
        }
        if (this.multiple === false) {
            this.active[0] = value;
            this.data.next(this.active[0]);
        }
        this.doEvent('selected', value);
        this.hideOptions();
        if (this.multiple === true) {
            this.focusToInput('');
        }
        else {
            this.focusToInput(select_pipes_1.stripTags(value.text));
            this.element.nativeElement.querySelector('.ui-select-container').focus();
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    styles: [styles],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            /* tslint:disable */
                            useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                            /* tslint:enable */
                            multi: true
                        }
                    ],
                    template: "\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === false\"\n     (keyup)=\"mainClick($event)\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container dropdown open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <div class=\"ui-select-match\"\n         *ngIf=\"!inputMode\">\n      <span tabindex=\"-1\"\n          class=\"btn btn-default btn-secondary form-control ui-select-toggle\"\n          (click)=\"matchClick($event)\"\n          style=\"outline: 0;\">\n        <span *ngIf=\"active.length <= 0\" class=\"ui-select-placeholder text-muted\">{{placeholder}}</span>\n        <span *ngIf=\"active.length > 0\" class=\"ui-select-match-text pull-left\"\n              [ngClass]=\"{'ui-select-allow-clear': allowClear && active.length > 0}\"\n              [innerHTML]=\"sanitize(active[0].text)\"></span>\n        <i class=\"dropdown-toggle pull-right\"></i>\n        <i class=\"caret pull-right\"></i>\n        <a *ngIf=\"allowClear && active.length>0\" class=\"btn btn-xs btn-link pull-right\" style=\"margin-right: 10px; padding: 0;\" (click)=\"removeClick(active[0], $event)\">\n           <i class=\"glyphicon glyphicon-remove\"></i>\n        </a>\n      </span>\n    </div>\n    <input type=\"text\" autocomplete=\"false\" tabindex=\"-1\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           [disabled]=\"disabled\"\n           class=\"form-control ui-select-search\"\n           *ngIf=\"inputMode\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n\n  <div tabindex=\"0\"\n     *ngIf=\"multiple === true\"\n     (keyup)=\"mainClick($event)\"\n     (focus)=\"focusToInput('')\"\n     [offClick]=\"clickedOutside\"\n     class=\"ui-select-container ui-select-multiple dropdown form-control open\">\n    <div [ngClass]=\"{'ui-disabled': disabled}\"></div>\n    <span class=\"ui-select-match\">\n        <span *ngFor=\"let a of active\">\n            <span class=\"ui-select-match-item btn btn-default btn-secondary btn-xs\"\n                  tabindex=\"-1\"\n                  type=\"button\"\n                  [ngClass]=\"{'btn-default': true}\">\n               <a class=\"close\"\n                  style=\"margin-left: 5px; padding: 0;\"\n                  (click)=\"removeClick(a, $event)\">&times;</a>\n               <span [innerHtml]=\"sanitize(a.text)\"></span>\n           </span>\n        </span>\n    </span>\n    <input type=\"text\"\n           (keydown)=\"inputEvent($event)\"\n           (keyup)=\"inputEvent($event, true)\"\n           (click)=\"matchClick($event)\"\n           [disabled]=\"disabled\"\n           autocomplete=\"false\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           class=\"form-control ui-select-search\"\n           placeholder=\"{{active.length <= 0 ? placeholder : ''}}\"\n           role=\"combobox\">\n     <!-- options template -->\n     <ul *ngIf=\"optionsOpened && options && options.length > 0 && !firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let o of options\" role=\"menuitem\">\n          <div class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  \n      <ul *ngIf=\"optionsOpened && options && options.length > 0 && firstItemHasChildren\"\n          class=\"ui-select-choices dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let c of options; let index=index\" role=\"menuitem\">\n          <div class=\"divider dropdown-divider\" *ngIf=\"index > 0\"></div>\n          <div class=\"dropdown-header\">{{c.text}}</div>\n  \n          <div *ngFor=\"let o of c.children\"\n               class=\"ui-select-choices-row\"\n               [class.active]=\"isActive(o)\"\n               (mouseenter)=\"selectActive(o)\"\n               (click)=\"selectMatch(o, $event)\"\n               [ngClass]=\"{'active': isActive(o)}\">\n            <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n              <div [innerHtml]=\"sanitize(o.text | highlight:inputValue)\"></div>\n            </a>\n          </div>\n        </li>\n      </ul>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: platform_browser_1.DomSanitizer, },
    ]; };
    SelectComponent.propDecorators = {
        'allowClear': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'idField': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'childrenField': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'data': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'removed': [{ type: core_1.Output },],
        'typed': [{ type: core_1.Output },],
        'opened': [{ type: core_1.Output },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
var Behavior = (function () {
    function Behavior(actor) {
        this.optionsMap = new Map();
        this.actor = actor;
    }
    Behavior.prototype.fillOptionsMap = function () {
        var _this = this;
        this.optionsMap.clear();
        var startPos = 0;
        this.actor.itemObjects
            .map(function (item) {
            startPos = item.fillChildrenHash(_this.optionsMap, startPos);
        });
    };
    Behavior.prototype.ensureHighlightVisible = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
            return;
        }
        var activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
            return;
        }
        var highlighted = choices[activeIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    Behavior.prototype.getActiveIndex = function (optionsMap) {
        if (optionsMap === void 0) { optionsMap = void 0; }
        var ai = this.actor.options.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    };
    return Behavior;
}());
exports.Behavior = Behavior;
var GenericBehavior = (function (_super) {
    __extends(GenericBehavior, _super);
    function GenericBehavior(actor) {
        _super.call(this, actor);
    }
    GenericBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.last = function () {
        this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.prev = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.next = function () {
        var index = this.actor.options.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
            .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
        _super.prototype.ensureHighlightVisible.call(this);
    };
    GenericBehavior.prototype.filter = function (query) {
        var _this = this;
        var options = this.actor.itemObjects
            .filter(function (option) {
            return select_pipes_1.stripTags(option.text).match(query) &&
                (_this.actor.multiple === false ||
                    (_this.actor.multiple === true && _this.actor.active.map(function (item) { return item.id; }).indexOf(option.id) < 0));
        });
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0];
            _super.prototype.ensureHighlightVisible.call(this);
        }
    };
    return GenericBehavior;
}(Behavior));
exports.GenericBehavior = GenericBehavior;
var ChildrenBehavior = (function (_super) {
    __extends(ChildrenBehavior, _super);
    function ChildrenBehavior(actor) {
        _super.call(this, actor);
    }
    ChildrenBehavior.prototype.first = function () {
        this.actor.activeOption = this.actor.options[0].children[0];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.last = function () {
        this.actor.activeOption =
            this.actor
                .options[this.actor.options.length - 1]
                .children[this.actor.options[this.actor.options.length - 1].children.length - 1];
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.prev = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index - 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent - 1]) {
                this.actor.activeOption = this.actor
                    .options[indexParent - 1]
                    .children[this.actor.options[indexParent - 1].children.length - 1];
            }
        }
        if (!this.actor.activeOption) {
            this.last();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.next = function () {
        var _this = this;
        var indexParent = this.actor.options
            .findIndex(function (option) { return _this.actor.activeOption.parent && _this.actor.activeOption.parent.id === option.id; });
        var index = this.actor.options[indexParent].children
            .findIndex(function (option) { return _this.actor.activeOption && _this.actor.activeOption.id === option.id; });
        this.actor.activeOption = this.actor.options[indexParent].children[index + 1];
        if (!this.actor.activeOption) {
            if (this.actor.options[indexParent + 1]) {
                this.actor.activeOption = this.actor.options[indexParent + 1].children[0];
            }
        }
        if (!this.actor.activeOption) {
            this.first();
        }
        this.fillOptionsMap();
        this.ensureHighlightVisible(this.optionsMap);
    };
    ChildrenBehavior.prototype.filter = function (query) {
        var options = [];
        var optionsMap = new Map();
        var startPos = 0;
        for (var _i = 0, _a = this.actor.itemObjects; _i < _a.length; _i++) {
            var si = _a[_i];
            var children = si.children.filter(function (option) { return query.test(option.text); });
            startPos = si.fillChildrenHash(optionsMap, startPos);
            if (children.length > 0) {
                var newSi = si.getSimilar();
                newSi.children = children;
                options.push(newSi);
            }
        }
        this.actor.options = options;
        if (this.actor.options.length > 0) {
            this.actor.activeOption = this.actor.options[0].children[0];
            _super.prototype.ensureHighlightVisible.call(this, optionsMap);
        }
    };
    return ChildrenBehavior;
}(Behavior));
exports.ChildrenBehavior = ChildrenBehavior;


/***/ }),

/***/ "../../../../ng2-select/select/select.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var select_1 = __webpack_require__("../../../../ng2-select/select/select.js");
var select_pipes_1 = __webpack_require__("../../../../ng2-select/select/select-pipes.js");
var off_click_1 = __webpack_require__("../../../../ng2-select/select/off-click.js");
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective],
                    exports: [select_1.SelectComponent, select_pipes_1.HighlightPipe, off_click_1.OffClickDirective]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ "../../../../ngx-color-picker/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/index.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/color-picker.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var color_picker_service_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.service.js");
var formats_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/formats.js");
var helpers_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/helpers.js");
var ColorPickerComponent = (function () {
    function ColorPickerComponent(el, cdr, service) {
        this.el = el;
        this.cdr = cdr;
        this.service = service;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
    }
    ColorPickerComponent.prototype.setDialog = function (instance, elementRef, color, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpOutputFormat, cpPresetLabel, cpPresetColors, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpOKButton, cpOKButtonClass, cpOKButtonText, cpHeight, cpWidth, cpIgnoredElements, cpDialogDisplay, cpSaveClickOutside, cpAlphaChannel) {
        this.directiveInstance = instance;
        this.initialColor = color;
        this.directiveElementRef = elementRef;
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset);
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        this.cpOutputFormat = cpOutputFormat;
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpOKButton = cpOKButton;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpOKButtonText = cpOKButtonText;
        this.cpHeight = parseInt(cpHeight);
        this.cpWidth = parseInt(cpWidth);
        if (!this.cpWidth) {
            this.cpWidth = elementRef.nativeElement.offsetWidth;
        }
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpDialogDisplay = cpDialogDisplay;
        if (this.cpDialogDisplay === 'inline') {
            this.dialogArrowOffset = 0;
            this.dialogArrowSize = 0;
        }
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpAlphaChannel = cpAlphaChannel;
    };
    ColorPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
        var hueWidth = this.hueSlider.nativeElement.offsetWidth;
        this.sliderDimMax = new helpers_1.SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        this.slider = new helpers_1.SliderPosition(0, 0, 0, 0);
        if (this.cpOutputFormat === 'rgba') {
            this.format = 1;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = 2;
        }
        else {
            this.format = 0;
        }
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    ColorPickerComponent.prototype.ngAfterViewInit = function () {
        if (this.cpWidth != 230) {
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
            var hueWidth = this.hueSlider.nativeElement.offsetWidth;
            this.sliderDimMax = new helpers_1.SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.update(false);
            this.cdr.detectChanges();
        }
    };
    ColorPickerComponent.prototype.setInitialColor = function (color) {
        this.initialColor = color;
    };
    ColorPickerComponent.prototype.setPresetConfig = function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    ColorPickerComponent.prototype.openDialog = function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    ColorPickerComponent.prototype.cancelColor = function () {
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
    };
    ColorPickerComponent.prototype.oKColor = function () {
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    ColorPickerComponent.prototype.setColorFromString = function (value, emit) {
        if (emit === void 0) { emit = true; }
        var hsva;
        if (this.cpAlphaChannel === 'hex8') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.update(emit);
        }
    };
    ColorPickerComponent.prototype.onMouseDown = function (event) {
        if ((!this.isDescendant(this.el.nativeElement, event.target)
            && event.target != this.directiveElementRef.nativeElement &&
            this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) && this.cpDialogDisplay === 'popup') {
            if (!this.cpSaveClickOutside) {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            this.closeColorPicker();
        }
    };
    ColorPickerComponent.prototype.openColorPicker = function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.setDialogPosition();
                _this.hidden = false;
                _this.cdr.detectChanges();
            }, 0);
            this.directiveInstance.toggle(true);
            document.addEventListener('mousedown', this.listenerMouseDown);
            window.addEventListener('resize', this.listenerResize);
        }
    };
    ColorPickerComponent.prototype.closeColorPicker = function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.toggle(false);
            document.removeEventListener('mousedown', this.listenerMouseDown);
            window.removeEventListener('resize', this.listenerResize);
        }
    };
    ColorPickerComponent.prototype.onResize = function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
    };
    ColorPickerComponent.prototype.setDialogPosition = function () {
        var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
        var node = this.directiveElementRef.nativeElement, position = 'static';
        var parentNode = null;
        while (node !== null && node.tagName !== 'HTML') {
            position = window.getComputedStyle(node).getPropertyValue("position");
            if (position !== 'static' && parentNode === null) {
                parentNode = node;
            }
            if (position === 'fixed') {
                break;
            }
            node = node.parentNode;
        }
        if (position !== 'fixed') {
            var boxDirective = this.createBox(this.directiveElementRef.nativeElement, true);
            if (parentNode === null) {
                parentNode = node;
            }
            var boxParent = this.createBox(parentNode, true);
            this.top = boxDirective.top - boxParent.top;
            this.left = boxDirective.left - boxParent.left;
        }
        else {
            var boxDirective = this.createBox(this.directiveElementRef.nativeElement, false);
            this.top = boxDirective.top;
            this.left = boxDirective.left;
            this.position = 'fixed';
        }
        if (this.cpPosition === 'left') {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left -= this.cpWidth + this.dialogArrowSize - 2;
        }
        else if (this.cpPosition === 'top') {
            this.top -= dialogHeight + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            this.arrowTop = dialogHeight - 1;
        }
        else if (this.cpPosition === 'bottom') {
            this.top += boxDirective.height + this.dialogArrowSize;
            this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
        }
        else {
            this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
            this.left += boxDirective.width + this.dialogArrowSize - 2;
        }
    };
    ColorPickerComponent.prototype.setSaturation = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.s = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
        this.directiveInstance.inputChanged({ slider: 'saturation', value: val });
    };
    ColorPickerComponent.prototype.setLightness = function (val) {
        var hsla = this.service.hsva2hsla(this.hsva);
        hsla.l = val.v / val.rg;
        this.hsva = this.service.hsla2hsva(hsla);
        this.update();
        this.directiveInstance.inputChanged({ slider: 'lightness', value: val });
    };
    ColorPickerComponent.prototype.setHue = function (val) {
        this.hsva.h = val.v / val.rg;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'hue', value: val });
    };
    ColorPickerComponent.prototype.setAlpha = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'alpha', value: val });
    };
    ColorPickerComponent.prototype.setR = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.r = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ slider: 'red', value: val });
    };
    ColorPickerComponent.prototype.setG = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.g = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ slider: 'green', value: val });
    };
    ColorPickerComponent.prototype.setB = function (val) {
        var rgba = this.service.hsvaToRgba(this.hsva);
        rgba.b = val.v / val.rg;
        this.hsva = this.service.rgbaToHsva(rgba);
        this.update();
        this.directiveInstance.inputChanged({ slider: 'blue', value: val });
    };
    ColorPickerComponent.prototype.setA = function (val) {
        this.hsva.a = val.v / val.rg;
        this.update();
        this.directiveInstance.inputChanged({ slider: 'alpha', value: val });
    };
    ColorPickerComponent.prototype.setHex = function (val) {
        this.setColorFromString(val);
        this.directiveInstance.inputChanged({ slider: 'hex', value: val });
    };
    ColorPickerComponent.prototype.setSaturationAndBrightness = function (val) {
        this.hsva.s = val.s / val.rgX;
        this.hsva.v = val.v / val.rgY;
        this.update();
        this.directiveInstance.sliderChanged({ slider: 'saturation-lightness', value: val });
    };
    ColorPickerComponent.prototype.formatPolicy = function () {
        this.format = (this.format + 1) % 3;
        if (this.format === 0 && this.hsva.a < 1 && this.cpAlphaChannel === 'hex6') {
            this.format++;
        }
        return this.format;
    };
    ColorPickerComponent.prototype.update = function (emit) {
        if (emit === void 0) { emit = true; }
        if (this.sliderDimMax) {
            var hsla = this.service.hsva2hsla(this.hsva);
            var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            var hueRgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(new formats_1.Hsva(this.hsva.h, 1, 1, 1)));
            this.hslaText = new formats_1.Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
            this.rgbaText = new formats_1.Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
            this.hexText = this.service.hexText(rgba, this.cpAlphaChannel === 'hex8');
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.hueSliderColor = 'rgb(' + hueRgba.r + ',' + hueRgba.g + ',' + hueRgba.b + ')';
            if (this.format === 0 && this.hsva.a < 1 && this.cpAlphaChannel === 'hex6') {
                this.format++;
            }
            var lastOutput = this.outputColor;
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8');
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', false);
            this.slider = new helpers_1.SliderPosition((this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    ColorPickerComponent.prototype.isDescendant = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    ColorPickerComponent.prototype.createBox = function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    return ColorPickerComponent;
}());
ColorPickerComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'color-picker',
                template: '<div class="color-picker" [hidden]="!show" [style.visibility]="this.hidden ? \'hidden\' : \'visible\'" [style.height.px]="cpHeight" [style.width.px]="cpWidth" [style.top.px]="top" [style.left.px]="left" [style.position]="position" #dialogPopup><div *ngIf="cpDialogDisplay==\'popup\'" class="arrow arrow-{{cpPosition}}" [style.top.px]="arrowTop"></div><div [slider] [style.background-color]="hueSliderColor" [rgX]="1" [rgY]="1" (newValue)="setSaturationAndBrightness($event)" class="saturation-lightness"><div [style.left.px]="slider.s" [style.top.px]="slider.v" class="cursor"></div></div><div class="box"><div class="left"><div class="selected-color-background"></div><div [style.background-color]="selectedColor" class="selected-color"></div></div><div class="right"><div *ngIf="cpAlphaChannel===\'disabled\'" style="height: 18px"></div><div [slider] [rgX]="1" (newValue)="setHue($event)" class="hue" #hueSlider><div [style.left.px]="slider.h" class="cursor"></div></div><div [hidden]="cpAlphaChannel===\'disabled\'" [slider] [style.background-color]="alphaSliderColor" [rgX]="1" (newValue)="setAlpha($event)" class="alpha" #alphaSlider><div [style.left.px]="slider.a" class="cursor"></div></div></div></div><div [hidden]="format!=2" class="hsla-text"><div class="box"><input [text] type="number" pattern="[0-9]*" min="0" max="360" [rg]="360" (newValue)="setHue($event)" [value]="hslaText.h"> <input [text] type="number" pattern="[0-9]*" min="0" max="100" [rg]="100" (newValue)="setSaturation($event)" [value]="hslaText.s"> <input [text] type="number" pattern="[0-9]*" min="0" max="100" [rg]="100" (newValue)="setLightness($event)" [value]="hslaText.l"> <input *ngIf="cpAlphaChannel!==\'disabled\'" [text] type="number" pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [rg]="1" (newValue)="setA($event)" [value]="hslaText.a"></div><div class="box"><div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!==\'disabled\'">A</div></div></div><div [hidden]="format!=1" class="rgba-text"><div class="box"><input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setR($event)" [value]="rgbaText.r"> <input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setG($event)" [value]="rgbaText.g"> <input [text] type="number" pattern="[0-9]*" min="0" max="255" [rg]="255" (newValue)="setB($event)" [value]="rgbaText.b"> <input *ngIf="cpAlphaChannel!==\'disabled\'" [text] type="number" pattern="[0-9]+([\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [rg]="1" (newValue)="setA($event)" [value]="rgbaText.a"></div><div class="box"><div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!==\'disabled\'">A</div></div></div><div [hidden]="format!=0" class="hex-text"><div class="box"><input [text] (newValue)="setHex($event)" [value]="hexText"></div><div class="box"><div>Hex</div></div></div><div (click)="formatPolicy()" class="type-policy"></div><div *ngIf="cpPresetColors && cpPresetColors.length" class="preset-area"><hr><div class="preset-label">{{cpPresetLabel}}</div><div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)"></div></div><div *ngIf="cpOKButton || cpCancelButton" class="button-area"><button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="oKColor()">{{cpOKButtonText}}</button> <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="cancelColor()">{{cpCancelButtonText}}</button></div></div>',
                styles: ['.color-picker *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;font-size:11px}.color-picker{cursor:default;width:230px;height:auto;border:1px solid #777;left:30px;top:250px;position:absolute;z-index:1000;background-color:#fff;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.color-picker i{cursor:default;position:relative}.color-picker input{text-align:center;font-size:13px;height:26px;-moz-appearance:textfield}.color-picker input:invalid{box-shadow:none}.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input:-moz-ui-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{width:100%;padding:4px;font-size:11px;text-align:left;color:#555}.color-picker .preset-area .preset-color{cursor:pointer;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;-moz-border-radius:25%;-webkit-border-radius:25%;border-radius:25%;-khtml-border-radius:25%;border:1px solid #a9a9a9}.color-picker .arrow{height:0;width:0;border-style:solid;position:absolute;z-index:999999}.color-picker .arrow-right{border-width:5px 10px;border-color:transparent #777 transparent transparent;top:10px;left:-20px}.color-picker .arrow-left{border-width:5px 10px;border-color:transparent transparent transparent #777;top:10px;left:100%}.color-picker .arrow-bottom{border-width:10px 5px;border-color:transparent transparent #777;top:-20px;left:10px}.color-picker .arrow-top{border-width:10px 5px;border-color:#777 transparent transparent;left:10px}.color-picker div.cursor-sv{cursor:default;position:relative;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;-khtml-border-radius:50%;width:15px;height:15px;border:1px solid #ddd}.color-picker div.cursor{cursor:default;position:relative;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;-khtml-border-radius:50%;width:16px;height:16px;border:2px solid #222}.color-picker .saturation-lightness{cursor:pointer;width:100%;height:130px;border:none;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .alpha,.color-picker .hue{cursor:pointer;width:100%;height:16px;border:none;background-size:100% 100%}.color-picker .box{display:flex;padding:4px 8px}.color-picker .box .left{position:relative;padding:16px 8px}.color-picker .box .right{flex:1 1 auto;padding:12px 8px}.color-picker .hue{margin-bottom:16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .selected-color{width:40px;height:40px;top:16px;left:8px;position:absolute;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;-khtml-border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;-khtml-border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .type-policy{position:absolute;top:215px;right:12px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;background-size:8px 16px;-moz-background-size:8px 16px;-webkit-background-size:8px 16px;-o-background-size:8px 16px;width:16px;height:24px}.color-picker .hsla-text,.color-picker .rgba-text{width:100%;font-size:11px;padding:4px 8px}.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .hsla-text .box input,.color-picker .rgba-text .box input{min-width:0;flex:1;margin:0 8px 0 0;float:left;border:1px solid #a9a9a9;padding:1px}.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child{margin-right:0}.color-picker .hsla-text .box div,.color-picker .rgba-text .box div{flex:1 1 auto;text-align:center;color:#555;margin-right:8px}.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child{margin-right:0}.color-picker .hex-text{width:100%;font-size:11px;padding:4px 8px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box input{flex:1 1 auto;border:1px solid #a9a9a9;padding:1px}.color-picker .hex-text .box div{flex:1 1 auto;text-align:center;color:#555;float:left;clear:left}']
            },] },
];
/** @nocollapse */
ColorPickerComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
    { type: color_picker_service_1.ColorPickerService, },
]; };
ColorPickerComponent.propDecorators = {
    'hueSlider': [{ type: core_1.ViewChild, args: ['hueSlider',] },],
    'alphaSlider': [{ type: core_1.ViewChild, args: ['alphaSlider',] },],
    'dialogElement': [{ type: core_1.ViewChild, args: ['dialogPopup',] },],
};
exports.ColorPickerComponent = ColorPickerComponent;
//# sourceMappingURL=color-picker.component.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/color-picker.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var color_picker_service_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.service.js");
var color_picker_component_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.component.js");
var ColorPickerDirective = (function () {
    function ColorPickerDirective(vcRef, el, service, cfr, cdr) {
        this.vcRef = vcRef;
        this.el = el;
        this.service = service;
        this.cfr = cfr;
        this.cdr = cdr;
        this.colorPickerSelect = new core_1.EventEmitter(true);
        this.colorPickerChange = new core_1.EventEmitter(false);
        this.cpInputChange = new core_1.EventEmitter(true);
        this.cpSliderChange = new core_1.EventEmitter(true);
        this.cpToggleChange = new core_1.EventEmitter(true);
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOutputFormat = 'hex';
        this.cpPresetLabel = 'Preset colors';
        this.cpCancelButton = false;
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpCancelButtonText = 'Cancel';
        this.cpOKButton = false;
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpOKButtonText = 'OK';
        this.cpFallbackColor = '#fff';
        this.cpHeight = 'auto';
        this.cpWidth = '230px';
        this.cpIgnoredElements = [];
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpAlphaChannel = 'hex6';
        this.ignoreChanges = false;
        this.created = false;
    }
    ColorPickerDirective.prototype.ngOnChanges = function (changes) {
        if (changes.cpToggle) {
            if (changes.cpToggle.currentValue)
                this.openDialog();
            if (!changes.cpToggle.currentValue && this.dialog)
                this.dialog.closeColorPicker();
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    ColorPickerDirective.prototype.ngOnInit = function () {
        var hsva = this.service.stringToHsva(this.colorPicker);
        if (hsva === null)
            hsva = this.service.stringToHsva(this.colorPicker, true);
        if (hsva == null) {
            hsva = this.service.stringToHsva(this.cpFallbackColor);
        }
        var color = this.service.outputFormat(hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8');
        if (color !== this.colorPicker) {
            //setTimeout(() => {
            this.colorPickerChange.emit(color);
            this.cdr.detectChanges();
        }
    };
    ColorPickerDirective.prototype.onClick = function () {
        var _this = this;
        if (this.cpIgnoredElements.filter(function (item) { return item === _this.el.nativeElement; }).length === 0) {
            this.openDialog();
        }
    };
    ColorPickerDirective.prototype.openDialog = function () {
        if (!this.created) {
            this.created = true;
            var compFactory = this.cfr.resolveComponentFactory(color_picker_component_1.ColorPickerComponent);
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            var cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.setDialog(this, this.el, this.colorPicker, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpOutputFormat, this.cpPresetLabel, this.cpPresetColors, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpHeight, this.cpWidth, this.cpIgnoredElements, this.cpDialogDisplay, this.cpSaveClickOutside, this.cpAlphaChannel);
            this.dialog = cmpRef.instance;
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    ColorPickerDirective.prototype.colorChanged = function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    ColorPickerDirective.prototype.colorSelected = function (value) {
        this.colorPickerSelect.emit(value);
    };
    ColorPickerDirective.prototype.inputChanged = function (event) {
        this.cpInputChange.emit(event);
    };
    ColorPickerDirective.prototype.sliderChanged = function (event) {
        this.cpSliderChange.emit(event);
    };
    ColorPickerDirective.prototype.changeInput = function (value) {
        this.dialog.setColorFromString(value, true);
    };
    ColorPickerDirective.prototype.toggle = function (value) {
        this.cpToggleChange.emit(value);
    };
    return ColorPickerDirective;
}());
ColorPickerDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[colorPicker]',
                host: {
                    '(input)': 'changeInput($event.target.value)',
                    '(click)': 'onClick()'
                }
            },] },
];
/** @nocollapse */
ColorPickerDirective.ctorParameters = function () { return [
    { type: core_1.ViewContainerRef, },
    { type: core_1.ElementRef, },
    { type: color_picker_service_1.ColorPickerService, },
    { type: core_1.ComponentFactoryResolver, },
    { type: core_1.ChangeDetectorRef, },
]; };
ColorPickerDirective.propDecorators = {
    'colorPicker': [{ type: core_1.Input, args: ['colorPicker',] },],
    'colorPickerSelect': [{ type: core_1.Output, args: ['colorPickerSelect',] },],
    'colorPickerChange': [{ type: core_1.Output, args: ['colorPickerChange',] },],
    'cpToggle': [{ type: core_1.Input, args: ['cpToggle',] },],
    'cpInputChange': [{ type: core_1.Output, args: ['cpInputChange',] },],
    'cpSliderChange': [{ type: core_1.Output, args: ['cpSliderChange',] },],
    'cpToggleChange': [{ type: core_1.Output, args: ['cpToggleChange',] },],
    'cpPosition': [{ type: core_1.Input, args: ['cpPosition',] },],
    'cpPositionOffset': [{ type: core_1.Input, args: ['cpPositionOffset',] },],
    'cpPositionRelativeToArrow': [{ type: core_1.Input, args: ['cpPositionRelativeToArrow',] },],
    'cpOutputFormat': [{ type: core_1.Input, args: ['cpOutputFormat',] },],
    'cpPresetLabel': [{ type: core_1.Input, args: ['cpPresetLabel',] },],
    'cpPresetColors': [{ type: core_1.Input, args: ['cpPresetColors',] },],
    'cpCancelButton': [{ type: core_1.Input, args: ['cpCancelButton',] },],
    'cpCancelButtonClass': [{ type: core_1.Input, args: ['cpCancelButtonClass',] },],
    'cpCancelButtonText': [{ type: core_1.Input, args: ['cpCancelButtonText',] },],
    'cpOKButton': [{ type: core_1.Input, args: ['cpOKButton',] },],
    'cpOKButtonClass': [{ type: core_1.Input, args: ['cpOKButtonClass',] },],
    'cpOKButtonText': [{ type: core_1.Input, args: ['cpOKButtonText',] },],
    'cpFallbackColor': [{ type: core_1.Input, args: ['cpFallbackColor',] },],
    'cpHeight': [{ type: core_1.Input, args: ['cpHeight',] },],
    'cpWidth': [{ type: core_1.Input, args: ['cpWidth',] },],
    'cpIgnoredElements': [{ type: core_1.Input, args: ['cpIgnoredElements',] },],
    'cpDialogDisplay': [{ type: core_1.Input, args: ['cpDialogDisplay',] },],
    'cpSaveClickOutside': [{ type: core_1.Input, args: ['cpSaveClickOutside',] },],
    'cpAlphaChannel': [{ type: core_1.Input, args: ['cpAlphaChannel',] },],
};
exports.ColorPickerDirective = ColorPickerDirective;
//# sourceMappingURL=color-picker.directive.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/color-picker.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var helpers_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/helpers.js");
var color_picker_service_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.service.js");
var color_picker_component_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.component.js");
var color_picker_directive_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.directive.js");
var ColorPickerModule = (function () {
    function ColorPickerModule() {
    }
    return ColorPickerModule;
}());
ColorPickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                providers: [color_picker_service_1.ColorPickerService],
                declarations: [color_picker_component_1.ColorPickerComponent, color_picker_directive_1.ColorPickerDirective, helpers_1.TextDirective, helpers_1.SliderDirective],
                exports: [color_picker_directive_1.ColorPickerDirective],
                entryComponents: [color_picker_component_1.ColorPickerComponent]
            },] },
];
/** @nocollapse */
ColorPickerModule.ctorParameters = function () { return []; };
exports.ColorPickerModule = ColorPickerModule;
//# sourceMappingURL=color-picker.module.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/color-picker.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var formats_1 = __webpack_require__("../../../../ngx-color-picker/dist/lib/formats.js");
var ColorPickerService = (function () {
    function ColorPickerService() {
    }
    ColorPickerService.prototype.hsla2hsva = function (hsla) {
        var h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1), l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new formats_1.Hsva(h, 0, 0, a);
        }
        else {
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new formats_1.Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    ColorPickerService.prototype.hsva2hsla = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        if (v === 0) {
            return new formats_1.Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new formats_1.Hsla(h, 1, 1, a);
        }
        else {
            var l = v * (2 - s) / 2;
            return new formats_1.Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    ColorPickerService.prototype.rgbaToHsva = function (rgba) {
        var r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1), b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return new formats_1.Hsva(h, s, v, a);
    };
    ColorPickerService.prototype.hsvaToRgba = function (hsva) {
        var h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
        var r, g, b;
        var i = Math.floor(h * 6);
        var f = h * 6 - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
        }
        return new formats_1.Rgba(r, g, b, a);
    };
    ColorPickerService.prototype.stringToHsva = function (colorString, hex8) {
        if (colorString === void 0) { colorString = ''; }
        if (hex8 === void 0) { hex8 = false; }
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[2]) / 255, parseInt(execResult[3]) / 255, parseInt(execResult[4]) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            },
            {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new formats_1.Hsla(parseInt(execResult[2]) / 360, parseInt(execResult[3]) / 100, parseInt(execResult[4]) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (hex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4], 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            }, {
                re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                parse: function (execResult) {
                    return new formats_1.Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
                }
            });
        }
        colorString = (colorString || '').toLowerCase();
        var hsva = null;
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                var parser = stringParsers[key];
                var match = parser.re.exec(colorString), color = match && parser.parse(match);
                if (color) {
                    if (color instanceof formats_1.Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof formats_1.Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    ColorPickerService.prototype.outputFormat = function (hsva, outputFormat, allowHex8) {
        if (hsva.a < 1) {
            switch (outputFormat) {
                case 'hsla':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new formats_1.Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' + hslaText.a + ')';
                default:
                    if (allowHex8 && outputFormat === 'hex')
                        return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + Math.round(rgba.a * 100) / 100 + ')';
            }
        }
        else {
            switch (outputFormat) {
                case 'hsla':
                    var hsla = this.hsva2hsla(hsva);
                    var hslaText = new formats_1.Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                case 'rgba':
                    var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                default:
                    return this.hexText(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
            }
        }
    };
    ColorPickerService.prototype.hexText = function (rgba, allowHex8) {
        var hexText = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (hexText[1] === hexText[2] && hexText[3] === hexText[4] && hexText[5] === hexText[6] && rgba.a === 1 && !allowHex8) {
            hexText = '#' + hexText[1] + hexText[3] + hexText[5];
        }
        if (allowHex8) {
            hexText += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        return hexText;
    };
    ColorPickerService.prototype.denormalizeRGBA = function (rgba) {
        return new formats_1.Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    return ColorPickerService;
}());
ColorPickerService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ColorPickerService.ctorParameters = function () { return []; };
exports.ColorPickerService = ColorPickerService;
//# sourceMappingURL=color-picker.service.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/formats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Hsva = (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
exports.Hsva = Hsva;
var Hsla = (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
exports.Hsla = Hsla;
var Rgba = (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());
exports.Rgba = Rgba;
//# sourceMappingURL=formats.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TextDirective = (function () {
    function TextDirective() {
        this.newValue = new core_1.EventEmitter();
    }
    TextDirective.prototype.changeInput = function (value) {
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            var numeric = parseFloat(value);
            if (!isNaN(numeric) && numeric >= 0 && numeric <= this.rg) {
                this.newValue.emit({ v: numeric, rg: this.rg });
            }
        }
    };
    return TextDirective;
}());
TextDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[text]',
                host: {
                    '(input)': 'changeInput($event.target.value)'
                }
            },] },
];
/** @nocollapse */
TextDirective.ctorParameters = function () { return []; };
TextDirective.propDecorators = {
    'newValue': [{ type: core_1.Output, args: ['newValue',] },],
    'text': [{ type: core_1.Input, args: ['text',] },],
    'rg': [{ type: core_1.Input, args: ['rg',] },],
};
exports.TextDirective = TextDirective;
var SliderDirective = (function () {
    function SliderDirective(el) {
        var _this = this;
        this.el = el;
        this.newValue = new core_1.EventEmitter();
        this.listenerMove = function (event) { _this.move(event); };
        this.listenerStop = function () { _this.stop(); };
    }
    SliderDirective.prototype.setCursor = function (event) {
        var height = this.el.nativeElement.offsetHeight;
        var width = this.el.nativeElement.offsetWidth;
        var x = Math.max(0, Math.min(this.getX(event), width));
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rg: this.rgY });
        }
        else {
            this.newValue.emit({ v: x / width, rg: this.rgX });
        }
    };
    SliderDirective.prototype.move = function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    SliderDirective.prototype.start = function (event) {
        this.setCursor(event);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
    };
    SliderDirective.prototype.stop = function () {
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
    };
    SliderDirective.prototype.getX = function (event) {
        return (event.pageX !== undefined ? event.pageX : event.touches[0].pageX) - this.el.nativeElement.getBoundingClientRect().left - window.pageXOffset;
    };
    SliderDirective.prototype.getY = function (event) {
        return (event.pageY !== undefined ? event.pageY : event.touches[0].pageY) - this.el.nativeElement.getBoundingClientRect().top - window.pageYOffset;
    };
    return SliderDirective;
}());
SliderDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[slider]',
                host: {
                    '(mousedown)': 'start($event)',
                    '(touchstart)': 'start($event)'
                }
            },] },
];
/** @nocollapse */
SliderDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
SliderDirective.propDecorators = {
    'newValue': [{ type: core_1.Output, args: ['newValue',] },],
    'slider': [{ type: core_1.Input, args: ['slider',] },],
    'rgX': [{ type: core_1.Input, args: ['rgX',] },],
    'rgY': [{ type: core_1.Input, args: ['rgY',] },],
};
exports.SliderDirective = SliderDirective;
var SliderPosition = (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
exports.SliderPosition = SliderPosition;
var SliderDimension = (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());
exports.SliderDimension = SliderDimension;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../../../ngx-color-picker/dist/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.component.js"));
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.directive.js"));
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.module.js"));
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/color-picker.service.js"));
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/formats.js"));
__export(__webpack_require__("../../../../ngx-color-picker/dist/lib/helpers.js"));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map