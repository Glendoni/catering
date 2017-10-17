webpackJsonp([2],{

/***/ "../../../../../src/app/routes/pages/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"d-flex flex-wrap justify-content-between\">\r\n                <div>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n                            <em class=\"ion-arrow-left-b\"></em>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n                            Today\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n                            <em class=\"ion-arrow-right-b\"></em>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center align-self-center\">\r\n                    <h6 class=\"text-uppercase mb-0\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h6>\r\n                </div>\r\n                <div class=\"hidden-md-down text-right\">\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"view = 'month'\" [class.active]=\"view === 'month'\">\r\n                            Month\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"view = 'week'\" [class.active]=\"view === 'week'\">\r\n                            Week\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"view = 'day'\" [class.active]=\"view === 'day'\">\r\n                            Day\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div [ngSwitch]=\"view\">\r\n                <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-month-view>\r\n                <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-week-view>\r\n                <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-day-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css"), "");

// module
exports.push([module.i, ".cal-month-view .cal-day-badge {\n  background-color: #03A9F4; }\n\n.cal-month-view .cal-open-day-events {\n  box-shadow: 0 0 0 #000;\n  background-color: rgba(162, 162, 162, 0.15);\n  overflow: hidden; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number,\n.cal-week-view .cal-header.cal-weekend span {\n  color: #59676b;\n  font-weight: bold; }\n\n.cal-month-view .cal-day-cell.cal-today,\n.cal-week-view .cal-header.cal-today {\n  background-color: rgba(3, 169, 244, 0.15); }\n\n.cal-month-view .cal-event-title {\n  color: #59676b; }\n\n.cal-week-view .cal-event .cal-event-title,\n.cal-day-view .cal-event .cal-event-title {\n  color: #fff !important; }\n\n.cal-week-view .cal-event em,\n.cal-day-view .cal-event em {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: transparent; }\n\n.cal-week-view .cal-day-headers .cal-header:hover, .cal-week-view .cal-day-headers .cal-drag-over,\n.cal-month-view .cal-cell-row .cal-cell:hover, .cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: rgba(160, 160, 160, 0.15); }\n\n.cal-day-view .cal-hour-segment:hover, .cal-day-view .cal-drag-over .cal-hour-segment,\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: transparent; }\n\n.cal-month-view .cal-days,\n.cal-month-view .cal-days .cal-cell-row,\n.cal-month-view .cal-day-cell:not(:last-child),\n.cal-week-view .cal-day-headers .cal-header:not(:last-child),\n.cal-week-view .cal-day-headers,\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment, .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour-rows {\n  border-color: rgba(160, 160, 160, 0.15); }\n\n.theme-dark .cal-month-view .cal-event-title {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarComponent = (function () {
    function CalendarComponent(pt, colors) {
        var _this = this;
        this.colors = colors;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [{
                label: '<em class="text-muted ion-edit mx-2"></em>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<em class="text-muted ion-trash-b"></em>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [{
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: { primary: this.colors.byName('primary'), secondary: this.colors.byName('blue-300') },
                actions: this.actions
            }, {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: { primary: this.colors.byName('deepPurple-500'), secondary: this.colors.byName('deepPurple-300') },
                actions: this.actions
            }, {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: { primary: this.colors.byName('pink-500'), secondary: this.colors.byName('pink-300') },
            }, {
                start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: { primary: this.colors.byName('deepPurple-500'), secondary: this.colors.byName('deepPurple-300') },
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
        this.activeDayIsOpen = true;
        pt.setTitle('Calendar');
    }
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        console.log('handleEvent : ' + action);
    };
    CalendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: this.colors.byName('red-500'),
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calendar',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__("../../../../../src/app/routes/pages/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/calendar/calendar.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_colors_colors_service__["a" /* ColorsService */]) === "function" && _b || Object])
], CalendarComponent);

var _a, _b;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-overlap bg-gradient-info text-center\">\r\n    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/03.jpg\" alt=\"user\"></div>\r\n    <div class=\"text-white\">\r\n        <div class=\"h3\">Jane Frazier</div><small>Aenean condimentum augue sapien.</small>\r\n    </div>\r\n</div>\r\n<div class=\"container container-md\">\r\n    <form class=\"cardbox\">\r\n        <h5 class=\"cardbox-heading pb-0\">Personal Information</h5>\r\n        <div class=\"cardbox-body\">\r\n            <table class=\"table table-striped mb-0\">\r\n                <tbody>\r\n                    <tr>\r\n                        <td><em class=\"ion-document-text icon-fw mr-3\"></em>Area</td>\r\n                        <td>Research &amp; development</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-egg icon-fw mr-3\"></em>Birthday</td>\r\n                        <td><span class=\"is-editable text-inherit\">10/11/2000</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-ios-body icon-fw mr-3\"></em>Member since</td>\r\n                        <td><span class=\"is-editable text-inherit\">05/11/2015</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-man icon-fw mr-3\"></em>Female</td>\r\n                        <td>\r\n                            <a class=\"text-inherit\" id=\"gender\" href=\"#\"></a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-android-home icon-fw mr-3\"></em>Address</td>\r\n                        <td><span class=\"is-editable text-inherit\">Some street, 123</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-email icon-fw mr-3\"></em>Email</td>\r\n                        <td><span class=\"is-editable text-inherit\"><a href=\"#\">user@mail.com</a></span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><em class=\"ion-ios-telephone icon-fw mr-3\"></em>Contact phone</td>\r\n                        <td><span class=\"is-editable text-inherit\">13-123-46578</span></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </form>\r\n    <div class=\"cardbox\">\r\n        <h5 class=\"cardbox-heading\">Activity</h5>\r\n        <div class=\"cardbox-body pb-0\">\r\n            <p class=\"float-left mr-3\"><em class=\"ion-record text-info\"></em></p>\r\n            <div class=\"oh\">\r\n                <p><strong class=\"mr-2\">Added</strong><span class=\"mr-2\">a new issue</span><a href=\"#\">#5478</a></p>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left text-muted\"><em class=\"ion-android-time mr-2\"></em><span>an hour ago</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-body pb-0\">\r\n            <p class=\"float-left mr-3\"><em class=\"ion-record text-danger\"></em></p>\r\n            <div class=\"oh\">\r\n                <p><strong class=\"mr-2\">Commented</strong><span class=\"mr-2\"> on the project</span><a href=\"#\">Material</a></p>\r\n                <p class=\"bl pl-3\"><i>That's awesome!</i></p>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left text-muted\"><em class=\"ion-android-time mr-2\"></em><span>2 hours ago</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-body pb-0\">\r\n            <p class=\"float-left mr-3\"><em class=\"ion-record text-success\"></em></p>\r\n            <div class=\"oh\">\r\n                <p><strong class=\"mr-2\">Completed</strong><span> all tasks asigned this week</span></p>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left text-muted\"><em class=\"ion-android-time mr-2\"></em><span>3 hours ago</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-body pb-0\">\r\n            <p class=\"float-left mr-3\"><em class=\"ion-record text-info\"></em></p>\r\n            <div class=\"oh\">\r\n                <p><strong class=\"mr-2\">Published</strong><span class=\"mr-2\"> new photos on the album</span><a href=\"#\">WorldTrip</a></p>\r\n                <p>\r\n                    <a href=\"#\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic4.jpg\" alt=\"Pic\"></a>\r\n                    <a href=\"#\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic5.jpg\" alt=\"Pic\"></a>\r\n                    <a href=\"#\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic6.jpg\" alt=\"Pic\"></a>\r\n                </p>\r\n                <div class=\"clearfix\">\r\n                    <div class=\"float-left text-muted\"><em class=\"ion-android-time mr-2\"></em><span>4 hours ago</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"clearfix\">\r\n                <p class=\"float-left mr-3\"><em class=\"ion-record text-primary\"></em></p>\r\n                <div class=\"oh\">\r\n                    <p><strong class=\"mr-2\">Following</strong><span class=\"mr-2\">Jane Kuhn</span></p>\r\n                    <p><span class=\"image-list\"><a href=\"#\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/03.jpg\" alt=\"User\"></a><a href=\"#\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/04.jpg\" alt=\"User\"></a><a href=\"#\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/05.jpg\" alt=\"User\"></a><a href=\"#\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/06.jpg\" alt=\"User\"></a><a href=\"#\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/07.jpg\" alt=\"User\"></a><strong><a class=\"ml-2 link-unstyled\" href=\"#\">+200</a></strong></span></p>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"float-left text-muted\"><em class=\"ion-android-time mr-2\"></em><span>yesterday</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(pt) {
        pt.setTitle('Contact');
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/routes/pages/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading pb-0\">\r\n            <div class=\"float-right\"><small>Total topics: 5</small></div>\r\n            <div class=\"cardbox-title\">Global Topics</div><small>Posts found: 15,000</small>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-auto\"></div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><small class=\"text-muted\">Views</small></div>\r\n                    <div class=\"wd-xxs\"><small class=\"text-muted\">Messages</small></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-red-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Rules</a></p><small>Aenean dictum vulputate porta. Nulla eget lorem leo, sit amet elementum lorem.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>12</span></div>\r\n                    <div class=\"wd-xxs\"><span>45</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-green-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Pubic Announcements</a></p><small>Donec malesuada ullamcorper nibh et venenatis. Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>65</span></div>\r\n                    <div class=\"wd-xxs\"><span>22</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-cyan-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Privacy</a></p><small>Maecenas ornare libero eget eros imperdiet dictum.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>351</span></div>\r\n                    <div class=\"wd-xxs\"><span>100</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-blue-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Policy</a></p><small>Curabitur nec congue erat.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>1000</span></div>\r\n                    <div class=\"wd-xxs\"><span>500</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-purple-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Latest News</a></p><small>Curabitur nec congue erat.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>995</span></div>\r\n                    <div class=\"wd-xxs\"><span>265</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading pb-0\">\r\n            <div class=\"float-right\"><small>Total topics: 6</small></div>\r\n            <div class=\"cardbox-title\">Dashboard Topics</div><small>Posts found: 47,000</small>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-3\"></div>\r\n                <div class=\"mr-auto\"></div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><small class=\"text-muted\">Views</small></div>\r\n                    <div class=\"wd-xxs\"><small class=\"text-muted\">Messages</small></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-blue-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Administration</a></p><small>Aenean dictum vulputate porta. Nulla eget lorem leo, sit amet elementum lorem.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>12</span></div>\r\n                    <div class=\"wd-xxs\"><span>45</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-orange-700\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Single Page Application</a></p><small>Donec malesuada ullamcorper nibh et venenatis. Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>65</span></div>\r\n                    <div class=\"wd-xxs\"><span>22</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-blue-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Network Security</a></p><small>Maecenas ornare libero eget eros imperdiet dictum.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>351</span></div>\r\n                    <div class=\"wd-xxs\"><span>100</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-pink-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Isomorphic Apps</a></p><small>Curabitur nec congue erat.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>1000</span></div>\r\n                    <div class=\"wd-xxs\"><span>500</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-deep-purple-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Latest Releases</a></p><small>Curabitur nec congue erat.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>995</span></div>\r\n                    <div class=\"wd-xxs\"><span>265</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-2 bb\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-4 ml-2 px-2 text-center rounded thumb32 lh32 bg-indigo-500\"><em class=\"ion-ios-paper-outline icon-lg\"></em></div>\r\n                <div class=\"mr-auto\">\r\n                    <p class=\"mb-1\"><a href=\"#\">Known bugs</a></p><small>Proin a porta turpis. Curabitur ultricies risus eget nulla commodo tempor.</small>\r\n                </div>\r\n                <div class=\"d-flex text-center\">\r\n                    <div class=\"wd-xxs\"><span>9541</span></div>\r\n                    <div class=\"wd-xxs\"><span>1547</span></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/forum/forum.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumComponent = (function () {
    function ForumComponent(pt) {
        pt.setTitle('Forum');
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    return ForumComponent;
}());
ForumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forum',
        template: __webpack_require__("../../../../../src/app/routes/pages/forum/forum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/forum/forum.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], ForumComponent);

var _a;
//# sourceMappingURL=forum.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/fullmap/fullmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-full\">\r\n    <div class=\"row fh bg-white\">\r\n        <div class=\"col-md-5 col-xl-3 fh hidden-sm-down hidden-xs-down pr-0\">\r\n            <div class=\"v-scroll-wrapper\">\r\n                <div class=\"p-4\">\r\n                    <h5 class=\"text-center\">Locations</h5>\r\n                    <div class=\"text-center text-muted\"><small>Click on each item to focus a marker in the map</small></div>\r\n                </div>\r\n                <div id=\"markers-list\">\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[0].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p1.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">Canada</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[1].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p2.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">New York</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[2].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p3.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">Toronto</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[3].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p4.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">San Francisco, CA</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[4].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p5.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">Utah</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card card-inverse b0\" (click)=\"moveTo(myMarkers[0].coords)\">\r\n                        <img class=\"card-img\" src=\"assets/img/map/p1.jpg\" alt=\"Card image\">\r\n                        <div class=\"card-img-overlay card-img-overlay-bottom bg-fade\">\r\n                            <h5 class=\"mb-0 card-title\">1456, street address</h5>\r\n                            <small class=\"card-text\">Canada</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-7 col-xl-9 fh pl-0\">\r\n            <agm-map [latitude]=\"currLatitude\" [longitude]=\"currLongitude\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [usePanning]=\"true\" class=\"center-block fh\">\r\n                <agm-marker *ngFor=\"let marker of myMarkers\" [latitude]=\"marker.coords.latitude\" [longitude]=\"marker.coords.longitude\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/fullmap/fullmap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/fullmap/fullmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullmapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullmapComponent = (function () {
    function FullmapComponent(pt) {
        this.myMarkers = [
            { id: 0, name: 'Canada', coords: { latitude: 56.130366, longitude: -106.346771 } },
            { id: 1, name: 'New York', coords: { latitude: 40.712784, longitude: -74.005941 } },
            { id: 2, name: 'Toronto', coords: { latitude: 43.653226, longitude: -79.383184 } },
            { id: 3, name: 'San Francisco', coords: { latitude: 37.774929, longitude: -122.419416 } },
            { id: 4, name: 'Utah', coords: { latitude: 39.320980, longitude: -111.093731 } }
        ];
        this.currLatitude = this.myMarkers[0].coords.latitude;
        this.currLongitude = this.myMarkers[0].coords.longitude;
        this.zoom = 4;
        this.scrollwheel = false;
        pt.setTitle('Fullmap');
    }
    FullmapComponent.prototype.moveTo = function (coords) {
        this.currLatitude = coords.latitude;
        this.currLongitude = coords.longitude;
    };
    FullmapComponent.prototype.ngOnInit = function () {
    };
    return FullmapComponent;
}());
FullmapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fullmap',
        template: __webpack_require__("../../../../../src/app/routes/pages/fullmap/fullmap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/fullmap/fullmap.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], FullmapComponent);

var _a;
//# sourceMappingURL=fullmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/invoice/invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <h3 class=\"m-0\">Dasha Inc.</h3><small class=\"text-muted\">Nulla viverra dignissim metus ac placerat</small>\r\n                </div>\r\n                <div class=\"col-sm-6 text-sm-right\">\r\n                    <h5 class=\"my\">Invoice no. #2456544</h5>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2\">\r\n                    <h4 class=\"m-0\">Deliver to:</h4>\r\n                </div>\r\n                <div class=\"col-lg-10\">\r\n                    <address><strong>Twitter, Inc.</strong>\r\n                        <br> 1355 Market Street, Suite 900\r\n                        <br> San Francisco, CA 94103\r\n                        <br>\r\n                        <abbr title=\"Phone\">P:</abbr> (123) 456-7890</address>\r\n                    <address class=\"mb-0\"><strong>Full Name</strong>\r\n                        <br><a href=\"mailto:#\">first.last@example.com</a></address>\r\n                </div>\r\n            </div>\r\n            <div class=\"my-4\"></div>\r\n            <div class=\"table-responsive my-4\">\r\n                <table class=\"table table-bordered\">\r\n                    <thead class=\"thead-inverse\">\r\n                        <tr>\r\n                            <th>Item #</th>\r\n                            <th>Description</th>\r\n                            <th>Quantity</th>\r\n                            <th>Unit Price</th>\r\n                            <th class=\"text-right\">Total</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>1001</td>\r\n                            <td>Iphone 6+ - 64Gb</td>\r\n                            <td>2</td>\r\n                            <td>$ 200</td>\r\n                            <td class=\"text-right\">$ 600</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>2002</td>\r\n                            <td>Iphone 7 - 128Gb</td>\r\n                            <td>4</td>\r\n                            <td>$ 500</td>\r\n                            <td class=\"text-right\">$ 2,500</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3010</td>\r\n                            <td>Ipad 12x - 512Gb</td>\r\n                            <td>5</td>\r\n                            <td>$ 650</td>\r\n                            <td class=\"text-right\">$ 650</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>3009</td>\r\n                            <td>iMac HyperRetina 45</td>\r\n                            <td>6</td>\r\n                            <td>$ 1,100</td>\r\n                            <td class=\"text-right\">$ 6,600</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <p><strong>Bottom words for this invoice</strong></p>\r\n                    <p><small>Nulla egestas faucibus tincidunt. Praesent non nulla et ligula luctus mattis eget at lacus. Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. Suspendisse vehicula, magna non tristique tincidunt, massa nisi luctus tellus, vel laoreet sem lectus ut nibh. Vestibulum purus ipsum.</small></p>\r\n                    <hr class=\"hidden-sm-up\">\r\n                </div>\r\n                <div class=\"col-lg-1 col-xl-3\"></div>\r\n                <div class=\"col-lg-5 col-xl-3 text-right\">\r\n                    <p class=\"clearfix\"><strong class=\"float-left\">Sub Total:</strong><span class=\"float-right\">8,395.00</span></p>\r\n                    <p class=\"clearfix\"><strong class=\"float-left\">Promo code:</strong><span class=\"float-right\">ABC-XYZ</span></p>\r\n                    <p class=\"clearfix\"><strong class=\"float-left\">Tax (10%):</strong><span class=\"float-right\">2,145.00</span></p>\r\n                    <hr>\r\n                    <h3 class=\"m-0 text-right\">USD 10,540.00</h3>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class=\"clearfix\">\r\n                <button class=\"btn btn-secondary float-left mr-3\" type=\"button\" data-toggle=\"tooltip\" data-title=\"Edit this invoice\"><em class=\"ion-edit\"></em></button>\r\n                <button class=\"btn btn-secondary float-left\" type=\"button\" data-toggle=\"tooltip\" data-title=\"Print this invoice\"><em class=\"ion-printer\"></em></button>\r\n                <button class=\"btn btn-secondary float-left\" type=\"button\" data-toggle=\"tooltip\" data-title=\"Lock this invoice\"><em class=\"ion-unlocked\"></em></button>\r\n                <button class=\"btn btn-primary float-right\" type=\"button\">Send Invoice</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/invoice/invoice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/invoice/invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvoiceComponent = (function () {
    function InvoiceComponent(pt) {
        pt.setTitle('Invoice');
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    return InvoiceComponent;
}());
InvoiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__("../../../../../src/app/routes/pages/invoice/invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/invoice/invoice.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], InvoiceComponent);

var _a;
//# sourceMappingURL=invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/mailbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/04.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Eleanor Harper</div>\r\n                    <p>eleanor.harper@myemail.com</p>\r\n                </div>\r\n                <div class=\"list-group bb\">\r\n                    <a class=\"list-group-item active\" href=\"javascript:\">\r\n                        <em class=\"ion-home mr-4\"></em>Inbox<span class=\"ml-auto badge badge-pill\">35</span>\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action\" href=\"javascript:\">\r\n                        <em class=\"ion-trash-b mr-4\"></em>Trash\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action\" href=\"javascript:\">\r\n                        <em class=\"ion-forward mr-4\"></em>Sent<span class=\"ml-auto badge badge-pill text-muted\">2</span>\r\n                    </a>\r\n                    <a class=\"list-group-item list-group-item-action\" href=\"javascript:\">\r\n                        <em class=\"ion-help-buoy mr-4\"></em>Spam<span class=\"ml-auto badge badge-pill text-muted\">10</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <button (click)=\"messageNew.msgNewModal.show()\" class=\"btn btn-success btn-block\" id=\"compose\" type=\"button\"><em class=\"ion-edit mr-2\"></em>New message</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <p class=\"ph\">Today</p>\r\n            <div class=\"cardbox\">\r\n                <table class=\"table table-hover table-fixed va-middle\">\r\n                    <tbody>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td class=\"wd-xxs\">\r\n                                <div class=\"initial32 bg-blue-500\">T</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis wd-sm\">Timmothy Terry</td>\r\n                            <td class=\"text-ellipsis\">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit nibh eu nisi congue dapibus. </td>\r\n                            <td class=\"wd-xxs\">\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/01.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-green-500\">N</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Nina Brown</td>\r\n                            <td class=\"text-ellipsis\">Etiam eu ipsum dui, et tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/06.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/03.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Myrtle James</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-amber-500\">T</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Ted Vasquez</td>\r\n                            <td class=\"text-ellipsis\">Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-pink-500\">L</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Lillian Snyder</td>\r\n                            <td class=\"text-ellipsis\">Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <p class=\"ph\">Yesterday</p>\r\n            <div class=\"cardbox\">\r\n                <table class=\"table table-hover table-fixed va-middle\">\r\n                    <tbody>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td class=\"wd-xxs\">\r\n                                <div class=\"initial32 bg-indigo-500\">E</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis wd-sm\">Erin Alvarez</td>\r\n                            <td class=\"text-ellipsis\">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras nunc velit, bibendum vel imperdiet eget, posuere nec diam. </td>\r\n                            <td class=\"wd-xxs\">\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/04.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-green-500\">K</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Kelly Hernandez</td>\r\n                            <td class=\"text-ellipsis\">Integer sit amet vulputate mauris. Praesent nulla est, molestie at auctor vulputate, semper eu sapien. Fusce dolor lacus, interdum eu tincidunt sed, aliquet vel turpis. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/06.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/05.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Oscar Stanley</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <p class=\"ph\">2 days ago</p>\r\n            <div class=\"cardbox\">\r\n                <table class=\"table table-hover table-fixed va-middle\">\r\n                    <tbody>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td class=\"wd-xxs\">\r\n                                <div class=\"initial32 bg-blue-500\">T</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis wd-sm\">Timmothy Terry</td>\r\n                            <td class=\"text-ellipsis\">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris hendrerit nibh eu nisi congue dapibus. </td>\r\n                            <td class=\"wd-xxs\">\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/01.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-green-500\">N</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Nina Brown</td>\r\n                            <td class=\"text-ellipsis\">Etiam eu ipsum dui, et tincidunt orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/06.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Nathan Richardson</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td><img src=\"assets/img/user/03.jpg\" alt=\"user\" class=\"rounded-circle thumb32\" /></td>\r\n                            <td class=\"text-ellipsis\">Myrtle James</td>\r\n                            <td class=\"text-ellipsis\">Praesent leo quam, faucibus at facilisis id, rhoncus sit amet metus. Sed pretium malesuada leo sit amet convallis. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-amber-500\">T</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Ted Vasquez</td>\r\n                            <td class=\"text-ellipsis\">Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                        <tr (click)=\"messageView.msgViewModal.show()\">\r\n                            <td>\r\n                                <div class=\"initial32 bg-pink-500\">L</div>\r\n                            </td>\r\n                            <td class=\"text-ellipsis\">Lillian Snyder</td>\r\n                            <td class=\"text-ellipsis\">Praesent vel nisi nibh.Integer imperdiet, turpis nec viverra egestas, magna sapien convallis velit, nec vestibulum turpis dui vel dui. </td>\r\n                            <td>\r\n                                <!-- START dropdown-->\r\n                                <div dropdown class=\"pull-right dropdown\">\r\n                                    <button type=\"button\" dropdownToggle (click)=\"$event.stopPropagation()\" class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-reply icon-fw\"></em>Reply</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-forward icon-fw\"></em>Forward</a></li>\r\n                                        <li><a href=\"javascript:\" class=\"dropdown-item\"><em class=\"ion-trash-a icon-fw\"></em>Spam</a></li>\r\n                                    </ul>\r\n                                </div>\r\n                                <!-- END dropdown-->\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-messagenew #messageNew></app-messagenew>\r\n<app-messageview #messageView></app-messageview>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/mailbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/mailbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailboxComponent = (function () {
    function MailboxComponent(pt) {
        pt.setTitle('Mailbox');
    }
    MailboxComponent.prototype.ngOnInit = function () {
    };
    return MailboxComponent;
}());
MailboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mailbox',
        template: __webpack_require__("../../../../../src/app/routes/pages/mailbox/mailbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/mailbox/mailbox.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], MailboxComponent);

var _a;
//# sourceMappingURL=mailbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #msgNewModal=\"bs-modal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <form action=\"\">\r\n                    <div class=\"form-group\">\r\n                        <label>To:</label>\r\n                        <input rows=\"3\" aria-multiline=\"true\" tabindex=\"0\" aria-invalid=\"false\" class=\"form-control\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Message</label>\r\n                        <textarea rows=\"3\" aria-multiline=\"true\" tabindex=\"0\" aria-invalid=\"false\" class=\"form-control\"></textarea>\r\n                    </div>\r\n                    <button type=\"button\" (click)=\"msgNewModal.hide()\" class=\"btn btn-success\">Send</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagenewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagenewComponent = (function () {
    function MessagenewComponent() {
    }
    MessagenewComponent.prototype.ngOnInit = function () {
    };
    return MessagenewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgNewModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], MessagenewComponent.prototype, "msgNewModal", void 0);
MessagenewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messagenew',
        template: __webpack_require__("../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MessagenewComponent);

var _a;
//# sourceMappingURL=messagenew.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #msgViewModal=\"bs-modal\" class=\"modal fade modal-right modal-auto-size\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"media m-0 py\">\r\n                    <div class=\"d-flex mr-3\">\r\n                        <a href=\"javascript:\"><img class=\"rounded-circle thumb64\" src=\"assets/img/user/04.jpg\" alt=\"User\"></a>\r\n                    </div>\r\n                    <div class=\"media-body align-self-center\">\r\n                        <div class=\"h5\">Patrick Brooks</div><span class=\"text-muted\">patrick.brooks@mail.com</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"align-items-end\">\r\n                    <div class=\"clickable\" (click)=\"msgViewModal.hide()\"><sup><em class=\"ion-close-round text-muted icon-2x\"></em></sup></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"pull-right dropdown\">\r\n                    <button type=\"button\" dropdownToggle class=\"btn btn-default btn-flat btn-flat-icon\"><em class=\"ion-android-more-vertical\"></em></button>\r\n                    <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu md-dropdown-menu dropdown-menu-right\">\r\n                        <li><a class=\"dropdown-item\" href=\"javascript:\"><em class=\"ion-star icon-fw\"></em>Favorite</a></li>\r\n                        <li><a class=\"dropdown-item\" href=\"javascript:\"><em class=\"ion-ios-box icon-fw\"></em>Archive</a></li>\r\n                        <li><a class=\"dropdown-item\" href=\"javascript:\" (click)=\"msgViewModal.hide()\"><em class=\"ion-trash-a icon-fw\"></em>Discard</a></li>\r\n                    </ul>\r\n                </div>\r\n                <!-- END dropdown-->\r\n                <p class=\"text-muted\">26 aug 2015 10:30 am</p>\r\n                <h4 class=\"mt\">Nam vel tristique dolor.</h4>\r\n                <div class=\"reader-block\">\r\n                    <p>Praesent vel nisi nibh. Vestibulum purus ipsum, rutrum varius aliquam id, rhoncus eget neque. Curabitur sodales nisl eu enim suscipit eu faucibus dui mattis.</p>\r\n                    <p>Aenean risus nulla, aliquam sed aliquam vitae, ultricies non elit. Suspendisse nunc massa, euismod eu egestas quis, molestie sit amet mauris. Mauris eu lacus massa, vel condimentum lectus. Quisque quam justo, cursus sit amet pretium vel, viverra vel leo. Nullam lobortis consectetur hendrerit. Aenean rhoncus, est vel vestibulum tristique, ante lectus elementum augue, eu dictum turpis dui ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                    <p>Pellentesque ac ligula varius nisl laoreet pretium quis quis tellus. Praesent et mauris lacus, non volutpat augue.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"d-flex flex-column fw\">\r\n                    <div class=\"p-2\">Reply</div>\r\n                    <div class=\"p-2\">\r\n                        <div class=\"media m-0 py\">\r\n                            <div class=\"d-flex mr-3\">\r\n                                <a href=\"javascript:\"><img class=\"rounded-circle thumb32\" src=\"assets/img/user/01.jpg\" alt=\"User\"></a>\r\n                            </div>\r\n                            <div class=\"media-body\">\r\n                                <form action=\"\">\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control\" rows=\"3\" aria-multiline=\"true\" tabindex=\"0\" aria-invalid=\"false\" placeholder=\"Write here...\"></textarea>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-success\" type=\"button\" (click)=\"msgViewModal.hide()\">Send</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageviewComponent = (function () {
    function MessageviewComponent() {
    }
    MessageviewComponent.prototype.ngOnInit = function () {
    };
    return MessageviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('msgViewModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], MessageviewComponent.prototype, "msgViewModal", void 0);
MessageviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messageview',
        template: __webpack_require__("../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MessageviewComponent);

var _a;
//# sourceMappingURL=messageview.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timeline_timeline_component__ = __webpack_require__("../../../../../src/app/routes/pages/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_invoice_component__ = __webpack_require__("../../../../../src/app/routes/pages/invoice/invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/routes/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/routes/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wall_wall_component__ = __webpack_require__("../../../../../src/app/routes/pages/wall/wall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mailbox_mailbox_component__ = __webpack_require__("../../../../../src/app/routes/pages/mailbox/mailbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mailbox_messagenew_messagenew_component__ = __webpack_require__("../../../../../src/app/routes/pages/mailbox/messagenew/messagenew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mailbox_messageview_messageview_component__ = __webpack_require__("../../../../../src/app/routes/pages/mailbox/messageview/messageview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forum_forum_component__ = __webpack_require__("../../../../../src/app/routes/pages/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fullmap_fullmap_component__ = __webpack_require__("../../../../../src/app/routes/pages/fullmap/fullmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/routes/pages/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__people_people_component__ = __webpack_require__("../../../../../src/app/routes/pages/people/people.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_5__timeline_timeline_component__["a" /* TimelineComponent */] },
    { path: 'invoice', component: __WEBPACK_IMPORTED_MODULE_6__invoice_invoice_component__["a" /* InvoiceComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_7__pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'wall', component: __WEBPACK_IMPORTED_MODULE_9__wall_wall_component__["a" /* WallComponent */] },
    { path: 'mailbox', component: __WEBPACK_IMPORTED_MODULE_10__mailbox_mailbox_component__["a" /* MailboxComponent */] },
    { path: 'fullmap', component: __WEBPACK_IMPORTED_MODULE_14__fullmap_fullmap_component__["a" /* FullmapComponent */] },
    { path: 'forum', component: __WEBPACK_IMPORTED_MODULE_13__forum_forum_component__["a" /* ForumComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_component__["a" /* CalendarComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_16__people_people_component__["a" /* PeopleComponent */] }
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBNs42Rt_CyxAqdbIBK0a5Ut83QiauESPA'
            }),
            __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_6__invoice_invoice_component__["a" /* InvoiceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pricing_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_9__wall_wall_component__["a" /* WallComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mailbox_mailbox_component__["a" /* MailboxComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mailbox_messagenew_messagenew_component__["a" /* MessagenewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__mailbox_messageview_messageview_component__["a" /* MessageviewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__forum_forum_component__["a" /* ForumComponent */],
            __WEBPACK_IMPORTED_MODULE_15__calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__fullmap_fullmap_component__["a" /* FullmapComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\r\n    <div class=\"mb-4 text-right\">\r\n        <button class=\"btn btn-primary btm-sm\" type=\"button\"><em class=\"ion-plus mr-2\"></em>New Contact</button>\r\n    </div>\r\n    <div class=\"mb-4\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8\">\r\n                <form>\r\n                    <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Search Name, Job, etc...\">\r\n                </form>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <select class=\"form-control form-control-lg\" name=\"area\">\r\n                    <option value=\"\">Select Area</option>\r\n                    <option value=\"\">Area 1</option>\r\n                    <option value=\"\">Area 2</option>\r\n                    <option value=\"\">Area 3</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-columns\">\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/01.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Eleanor Harper</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget. Etiam at enim quis nulla facilisis lacinia.</p>\r\n                <p><em class=\"ion-email mr-2\"></em>mail@contact.com</p>\r\n                <p><em class=\"ion-email mr-2\"></em>mail2@contact.com</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/02.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Theresa Foster</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/03.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Don Carlson</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/04.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Robin Richardson</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/05.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Fernando Morrison</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/06.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Nathaniel Gutierrez</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Vestibulum vel dui vel magna vulputate tempus non eget magna.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/07.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Shannon Robinson</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget. Phasellus dolor velit, dictum a pulvinar eu, convallis a ante.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/04.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Irene Vasquez</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec.</p>\r\n                <p><em class=\"ion-email mr-2\"></em>mail@contact.com</p>\r\n                <p><em class=\"ion-email mr-2\"></em>mail2@contact.com</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block pb-0 clearfix\">\r\n                <!-- START dropdown-->\r\n                <div dropdown class=\"float-right dropdown hidden-md-down\">\r\n                    <button class=\"btn btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Call</a><a class=\"dropdown-item\" href=\"#\">Locate</a><a class=\"dropdown-item\" href=\"#\">Edit</a></div>\r\n                </div>\r\n                <!-- END dropdown-->\r\n            </div>\r\n            <div class=\"card-block pt-0\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/01.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Addison Nichols</div>\r\n                    <p><em class=\"ion-briefcase mr-2\"></em><small class=\"text-muted\">Art director</small></p>\r\n                </div>\r\n                <p class=\"mt-3\">Proin est sapien, convallis non hendrerit nec, laoreet ut ipsum. Sed pharetra euismod dolor, id feugiat ante volutpat eget. Proin sed erat sit amet metus rhoncus tincidunt.</p>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-email icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-facebook icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-twitter icon-lg icon-fw\"></em></button>\r\n                <button class=\"btn btn-sm btn-secondary\" type=\"button\"><em class=\"ion-social-skype icon-lg icon-fw\"></em></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/people/people.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent(pt) {
        pt.setTitle('People');
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/routes/pages/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/people/people.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <div class=\"row\">\r\n        <!-- PLAN-->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox b\">\r\n                <div class=\"p-2\">\r\n                    <div class=\"cardbox-body bg-gradient-primary text-center text-white rounded\"><em class=\"ion-bag icon-3x\"></em>\r\n                        <div class=\"text-bold\">INITIAL</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Unlimited Styles</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>RTL &amp; Translation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Customer support</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Free Updates</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Limited to one client</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Multiple installation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Not ready for resale</span></p>\r\n                </div>\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"h1 mb-4 text-primary text-bold\">FREE</div><a class=\"btn btn-outline-primary\" href=\"#\">CHOOSE</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- PLAN-->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox b\">\r\n                <div class=\"p-2\">\r\n                    <div class=\"cardbox-body bg-gradient-info text-center text-white rounded\"><em class=\"ion-bag icon-3x\"></em>\r\n                        <div class=\"text-bold\">ADVANCED</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Unlimited Styles</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>RTL &amp; Translation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Customer support</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Free Updates</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Limited to one client</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Multiple installation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Not ready for resale</span></p>\r\n                </div>\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"mb-4 text-info\"><span class=\"h1\"><small>$</small><span class=\"text-bold\">30</span></span><small class=\"text-muted\">/ year</small></div><a class=\"btn btn-outline-info\" href=\"#\">CHOOSE</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- PLAN-->\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"cardbox b\">\r\n                <div class=\"p-2\">\r\n                    <div class=\"cardbox-body bg-gradient-success text-center text-white rounded\"><em class=\"ion-bag icon-3x\"></em>\r\n                        <div class=\"text-bold\">PREMIUM</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Unlimited Styles</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>RTL &amp; Translation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Customer support</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Free Updates</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Limited to one client</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Multiple installation</span></p>\r\n                    <p class=\"mb-3\"><em class=\"ion-checkmark-round mx-3\"></em><span>Ready for resale*</span></p>\r\n                </div>\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"mb-4 text-success\"><span class=\"h1\"><small>$</small><span class=\"text-bold\">30</span></span><small class=\"text-muted\">/ year</small></div><a class=\"btn btn-outline-success\" href=\"#\">CHOOSE</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mb-5\"></div>\r\n    <div class=\"card-group\">\r\n        <!-- PLAN-->\r\n        <div class=\"card b\">\r\n            <div class=\"card-block text-center bb text-info\"><em class=\"ion-heart icon-2x\"></em>\r\n                <h1 class=\"my-4 text-bold\"><sup></sup><span class=\"text-lg\">FREE</span><span></span></h1>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n                <p class=\"mb-4\"><span>Unlimited Styles</span></p>\r\n                <p class=\"mb-4\"><span>RTL &amp; Translation</span></p>\r\n                <p class=\"mb-4\"><span>\r\n                      <del>Customer support</del></span></p>\r\n                <p class=\"mb-4\"><span>Free Updates</span></p>\r\n                <p class=\"mb-4\"><span>Limited to one client</span></p>\r\n                <p class=\"mb-4\"><span>\r\n                      <del>Multiple installation</del></span></p>\r\n                <p class=\"mb-4\"><span>Not ready for resale</span></p>\r\n            </div>\r\n            <div class=\"card-block text-center bt text-info\"><a class=\"btn btn-info btn-flat\" href=\"#\">CHOOSE</a></div>\r\n        </div>\r\n        <!-- PLAN-->\r\n        <div class=\"card b\">\r\n            <div class=\"card-block text-center bb text-primary\"><em class=\"ion-star icon-2x\"></em>\r\n                <h1 class=\"my-4 text-bold\"><sup>$</sup><span class=\"text-lg\">17</span><small>/mo</small></h1>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n                <p class=\"mb-4\"><span>Unlimited Styles</span></p>\r\n                <p class=\"mb-4\"><span>RTL &amp; Translation</span></p>\r\n                <p class=\"mb-4\"><span>Customer support</span></p>\r\n                <p class=\"mb-4\"><span>Free Updates</span></p>\r\n                <p class=\"mb-4\"><span>Limited to one client</span></p>\r\n                <p class=\"mb-4\"><span>Multiple installation</span></p>\r\n                <p class=\"mb-4\"><span>Not ready for resale</span></p>\r\n            </div>\r\n            <div class=\"card-block text-center bt\"><a class=\"btn btn-primary\" href=\"#\">RECOMMENDED</a></div>\r\n        </div>\r\n        <!-- PLAN-->\r\n        <div class=\"card b\">\r\n            <div class=\"card-block text-center bb text-primary\"><em class=\"ion-help-buoy icon-2x\"></em>\r\n                <h1 class=\"my-4 text-bold\"><sup>$</sup><span class=\"text-lg\">49</span><small>/mo</small></h1>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n                <p class=\"mb-4\"><span>Unlimited Styles</span></p>\r\n                <p class=\"mb-4\"><span>RTL &amp; Translation</span></p>\r\n                <p class=\"mb-4\"><span>Customer support</span></p>\r\n                <p class=\"mb-4\"><span>Free Updates</span></p>\r\n                <p class=\"mb-4\"><span>Limited to one client</span></p>\r\n                <p class=\"mb-4\"><span>Multiple installation</span></p>\r\n                <p class=\"mb-4\"><span>Not ready for resale</span></p>\r\n            </div>\r\n            <div class=\"card-block text-center bt text-primary\"><a class=\"btn btn-primary btn-flat\" href=\"#\">CHOOSE</a></div>\r\n        </div>\r\n        <!-- PLAN-->\r\n        <div class=\"card b\">\r\n            <div class=\"card-block text-center bb text-danger\"><em class=\"ion-wand icon-2x\"></em>\r\n                <h1 class=\"my-4 text-bold\"><sup>$</sup><span class=\"text-lg\">95</span><small>/mo</small></h1>\r\n            </div>\r\n            <div class=\"card-block text-center\">\r\n                <p class=\"mb-4\"><span>Unlimited Styles</span></p>\r\n                <p class=\"mb-4\"><span>RTL &amp; Translation</span></p>\r\n                <p class=\"mb-4\"><span>Customer support</span></p>\r\n                <p class=\"mb-4\"><span>Free Updates</span></p>\r\n                <p class=\"mb-4\"><span>Limited to one client</span></p>\r\n                <p class=\"mb-4\"><span>Multiple installation</span></p>\r\n                <p class=\"mb-4\"><span>Ready for resale*</span></p>\r\n            </div>\r\n            <div class=\"card-block text-center bt\"><a class=\"btn btn-danger btn-flat\" href=\"#\">CHOOSE</a></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/pricing/pricing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingComponent = (function () {
    function PricingComponent(pt) {
        pt.setTitle('Pricing');
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    return PricingComponent;
}());
PricingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pricing',
        template: __webpack_require__("../../../../../src/app/routes/pages/pricing/pricing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/pricing/pricing.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], PricingComponent);

var _a;
//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-sm\">\r\n    <!-- START timeline-->\r\n    <ul class=\"timeline\">\r\n        <li class=\"timeline-separator\" data-datetime=\"Today\"></li>\r\n        <!-- START timeline item-->\r\n        <li>\r\n            <div class=\"timeline-badge bg-danger\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-heading\">Client Meeting</div>\r\n                    <div class=\"cardbox-body\">\r\n                        <p>Pellentesque ut diam velit, eget porttitor risus. Nullam posuere euismod volutpat.</p>\r\n                    </div>\r\n                    <div class=\"cardbox-body\">\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [scrollwheel]=\"scrollwheel\" [style.height]=\"'300px'\" class=\"center-block\">\r\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline item-->\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge bg-cyan-500\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"cardbox right\">\r\n                    <div class=\"card-block\">\r\n                        <p><strong>Appointment</strong></p>\r\n                        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.</p>\r\n                        <p><strong>People</strong></p>\r\n                        <p>\r\n                            <a tooltip=\"@Fowler\"><img class=\"wd-xxs img-thumbnail rounded-circle mr-2\" src=\"assets/img/user/02.jpg\" alt=\"user\"></a>\r\n                            <a tooltip=\"@Castro\"><img class=\"wd-xxs img-thumbnail rounded-circle mr-2\" src=\"assets/img/user/03.jpg\" alt=\"user\"></a>\r\n                            <a tooltip=\"@Jackson\"><img class=\"wd-xxs img-thumbnail rounded-circle mr-2\" src=\"assets/img/user/04.jpg\" alt=\"user\"></a>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline separator-->\r\n        <li class=\"timeline-separator\" data-datetime=\"1 day ago\"></li>\r\n        <!-- END timeline separator-->\r\n        <!-- START timeline item-->\r\n        <li>\r\n            <div class=\"timeline-badge bg-yellow-500\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-body\"><small class=\"float-right text-muted\">50m ago</small>\r\n                        <p><strong>Conference</strong></p>\r\n                        <p>Join development group</p><small><a href=\"skype:echo123?call\"><em class=\"ion-ios-telephone mr-2 icon-lg\"></em> Call the Skype Echo</a></small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline item-->\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge bg-purple-400\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"cardbox\">\r\n                    <div class=\"cardbox-body\"><small class=\"float-right text-muted\">2h ago</small><em class=\"mr-3 ion-ios-telephone icon-lg\"></em>Call with Michael</div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline item-->\r\n        <li>\r\n            <div class=\"timeline-badge bg-info\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"cardbox bg-lime-500\">\r\n                    <div class=\"card-block\"><small class=\"float-right text-muted\">10h ago</small>\r\n                        <p><strong>Fly</strong></p>\r\n                        <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline separator-->\r\n        <li class=\"timeline-separator\" data-datetime=\"This week\"></li>\r\n        <!-- END timeline separator-->\r\n        <!-- START timeline item-->\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge bg-warning\"></div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-block\">\r\n                        <p><strong>Use any element</strong></p>\r\n                        <p>This component doesn't have a shadow because it's based on Bootstrap 4 Card.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <!-- END timeline item-->\r\n        <!-- START timeline item-->\r\n        <li class=\"timeline-end\">\r\n            <a class=\"timeline-badge bg-blue-grey-200\"></a>\r\n        </li>\r\n        <!-- END timeline item-->\r\n    </ul>\r\n    <!-- END timeline-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/timeline/timeline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Timeline\r\n */\n.timeline {\n  list-style: none;\n  padding: 0 0 20px;\n  position: relative;\n  z-index: 0; }\n  .timeline:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    content: \" \";\n    width: 1px;\n    border-left: 1px dashed rgba(162, 162, 162, 0.36);\n    left: 10px; }\n  .timeline .timeline-end {\n    float: none;\n    clear: both; }\n  .timeline > li {\n    margin-bottom: 20px; }\n    .timeline > li::after {\n      display: block;\n      content: \"\";\n      clear: both; }\n    .timeline > li.timeline-separator {\n      position: relative;\n      float: none;\n      clear: both;\n      margin: 0 auto;\n      padding: 40px 0; }\n      .timeline > li.timeline-separator:first-child {\n        padding-top: 0; }\n      .timeline > li.timeline-separator:before {\n        content: attr(data-datetime);\n        display: inline-block;\n        width: 120px;\n        text-align: center;\n        padding: 0 20px;\n        line-height: 30px;\n        background-color: #90A4AE;\n        border-radius: 2px;\n        color: #fff; }\n  .timeline > li > .timeline-panel {\n    margin-left: 40px; }\n  .timeline > li > .timeline-date {\n    margin: -20px 0 0;\n    display: block;\n    height: 20px;\n    line-height: 20px;\n    font-size: 13px; }\n    .timeline > li > .timeline-date > time:after {\n      content: attr(datetime); }\n  .timeline > li > .timeline-badge {\n    position: absolute;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    line-height: 20px;\n    font-size: 1.2em;\n    text-align: center;\n    color: #fff;\n    z-index: 100; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p, .timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = (function () {
    function TimelineComponent(pt) {
        this.lat = -12.043333;
        this.lng = -77.028333;
        this.zoom = 14;
        this.scrollwheel = false;
        pt.setTitle('Timeline');
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__("../../../../../src/app/routes/pages/timeline/timeline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/timeline/timeline.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], TimelineComponent);

var _a;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/pages/wall/wall.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-overlap bg-gradient-primary\"></div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 col-md-4\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <!-- START dropdown-->\r\n                    <div class=\"float-right dropdown\" dropdown>\r\n                        <button class=\"btn btn-secondary btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                        <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"javascript:\">Private Message</a><a class=\"dropdown-item\" href=\"javascript:\">Stop following</a>\r\n                            <div class=\"dropdown-divider\" role=\"separator\"></div><a class=\"dropdown-item\" href=\"javascript:\">Report</a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END dropdown-->\r\n                </div>\r\n                <div class=\"cardbox-body text-center\">\r\n                    <div class=\"mb-3\"><img class=\"wd-sm rounded-circle img-thumbnail\" src=\"assets/img/user/04.jpg\" alt=\"user\"></div>\r\n                    <div class=\"h3\">Eleanor Harper</div>\r\n                    <p>eleanor.harper@myemail.com</p>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col\">\r\n                            <h3 class=\"mt-0 text-bold\">5,5k</h3><small>Followers</small>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h3 class=\"mt-0 text-bold\">390</h3><small>Following</small>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h3 class=\"mt-0 text-bold\">90</h3><small>Posts</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <p><strong>About</strong></p>\r\n                    <p>Maecenas arcu augue, lobortis nec dictum eget, varius a tortor. Maecenas tellus mauris, vestibulum nec sagittis dignissim, malesuada at ante. </p>\r\n                </div>\r\n                <div class=\"cardbox-body\">\r\n                    <button class=\"btn btn-info btn-block\" id=\"compose\" type=\"button\">Connect</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-md-8\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-body\">\r\n                    <form class=\"mt-3\" action=\"\">\r\n                        <div class=\"form-group\">\r\n                            <label>What's on your mind?</label>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control fw\" type=\"text\"><span class=\"input-group-btn bl\">\r\n                            <button class=\"btn btn-secondary border-0\" type=\"button\"><em class=\"ion-chevron-right text-success\"></em></button></span>\r\n                            </div>\r\n                            <div class=\"text-right\"><small>Any message here</small></div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- Inner card-->\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <!-- START dropdown-->\r\n                    <div class=\"float-right dropdown\" dropdown>\r\n                        <button class=\"btn btn-secondary btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                        <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"javascript:\">Hide post</a><a class=\"dropdown-item\" href=\"javascript:\">Stop following</a>\r\n                            <div class=\"dropdown-divider\" role=\"separator\"></div><a class=\"dropdown-item\" href=\"javascript:\">Report</a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END dropdown-->\r\n                    <div class=\"media m-0\">\r\n                        <div class=\"d-flex mr-3\">\r\n                            <a href=\"javascript:\"><img class=\"rounded-circle thumb48\" src=\"assets/img/user/06.jpg\" alt=\"User\"></a>\r\n                        </div>\r\n                        <div class=\"media-body p-2\">\r\n                            <p class=\"m-0 text-bold\">Stephen Palmer</p><small class=\"text-muted\"><em class=\"ion-earth text-muted mr-2\"></em><span>2 hours</span></small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p\">Ut egestas consequat faucibus. Donec id lectus tortor. Maecenas at porta purus. Etiam feugiat risus massa. Vivamus fermentum libero vel felis aliquet interdum. </div>\r\n                </div>\r\n                <div class=\"cardbox-footer\">\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-thumbsup icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-happy-outline icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-chatbubbles icon-lg\"></em></button>\r\n                </div>\r\n            </div>\r\n            <!-- Inner card-->\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">\r\n                    <!-- START dropdown-->\r\n                    <div class=\"float-right dropdown\" dropdown>\r\n                        <button class=\"btn btn-secondary btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                        <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"javascript:\">Hide post</a><a class=\"dropdown-item\" href=\"javascript:\">Stop following</a>\r\n                            <div class=\"dropdown-divider\" role=\"separator\"></div><a class=\"dropdown-item\" href=\"javascript:\">Report</a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END dropdown-->\r\n                    <div class=\"media m-0\">\r\n                        <div class=\"d-flex mr-3\">\r\n                            <a href=\"javascript:\"><img class=\"rounded-circle thumb48\" src=\"assets/img/user/05.jpg\" alt=\"User\"></a>\r\n                        </div>\r\n                        <div class=\"media-body p-2\">\r\n                            <p class=\"m-0 text-bold\">Ricky Wagner</p><small class=\"text-muted\"><em class=\"ion-earth text-muted mr-2\"></em><span>10 hours</span></small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-item\"><img class=\"fw img-fluid\" src=\"assets/img/pic6.jpg\" alt=\"MaterialImg\">\r\n                    <div class=\"cardbox-item-text bg-transparent\">\r\n                        <p>In lacinia tellus vitae nisl consectetur pellentesque.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-footer\">\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-thumbsup icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-happy-outline icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-chatbubbles icon-lg\"></em></button>\r\n                </div>\r\n            </div>\r\n            <!-- Inner card-->\r\n            <div class=\"cardbox reader-block\">\r\n                <div class=\"cardbox-heading\">\r\n                    <!-- START dropdown-->\r\n                    <div class=\"float-right dropdown\" dropdown>\r\n                        <button class=\"btn btn-secondary btn-flat btn-flat-icon\" type=\"button\" dropdownToggle><em class=\"ion-android-more-horizontal\"></em></button>\r\n                        <div *dropdownMenu class=\"dropdown-menu dropdown-scale dropdown-menu-right\" role=\"menu\"><a class=\"dropdown-item\" href=\"javascript:\">Hide post</a><a class=\"dropdown-item\" href=\"javascript:\">Stop following</a>\r\n                            <div class=\"dropdown-divider\" role=\"separator\"></div><a class=\"dropdown-item\" href=\"javascript:\">Report</a>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END dropdown-->\r\n                    <div class=\"media m-0\">\r\n                        <div class=\"d-flex mr-3\">\r\n                            <a href=\"javascript:\"><img class=\"rounded-circle thumb48\" src=\"assets/img/user/06.jpg\" alt=\"User\"></a>\r\n                        </div>\r\n                        <div class=\"media-body p-2\">\r\n                            <p class=\"m-0 text-bold\">Stephen Palmer</p><small class=\"text-muted\"><em class=\"ion-earth text-muted mr-2\"></em><span>Yesterday</span></small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p\">\r\n                        <div class=\"mb-3\">Donec a purus auctor dui hendrerit accumsan non quis augue nisl sed iaculis.</div>\r\n                        <a href=\"javascript:\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic1.jpg\" alt=\"Pic\"></a>\r\n                        <a href=\"javascript:\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic2.jpg\" alt=\"Pic\"></a>\r\n                        <a href=\"javascript:\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic3.jpg\" alt=\"Pic\"></a>\r\n                        <a href=\"javascript:\"><img class=\"mr-2 thumb48\" src=\"assets/img/pic4.jpg\" alt=\"Pic\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"cardbox-footer\">\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-thumbsup icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-happy-outline icon-lg\"></em></button>\r\n                    <button class=\"btn btn-flat btn-primary\" type=\"button\"><em class=\"ion-chatbubbles icon-lg\"></em></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-12\">\r\n            <div class=\"push-down\"></div>\r\n            <div class=\"cardbox cardbox-transparent\">\r\n                <h5 class=\"cardbox-heading\">Contacts</h5>\r\n                <div class=\"list-group\">\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/01.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/02.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Becky Mills</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Sed laoreet arcu pharetra.</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/03.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Ronald Gutierrez</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/04.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Johnny Bowman</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/05.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Carter Sims</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Sed laoreet arcu pharetra.</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/06.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Allen Olson</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"list-group-item flex-column align-items-start border-0\">\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/07.jpg\" alt=\"List user\"></div>\r\n                            <div>\r\n                                <div class=\"lead\"><a href=\"javascript:\">Keith Gutierrez</a></div>\r\n                                <div class=\"text-muted text-ellipsis\">Sed laoreet arcu pharetra.</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/pages/wall/wall.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/pages/wall/wall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WallComponent = (function () {
    function WallComponent(pt) {
        pt.setTitle('Wall');
    }
    WallComponent.prototype.ngOnInit = function () {
    };
    return WallComponent;
}());
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wall',
        template: __webpack_require__("../../../../../src/app/routes/pages/wall/wall.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/pages/wall/wall.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], WallComponent);

var _a;
//# sourceMappingURL=wall.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/calendar.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/directives/click.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarModule; });



























/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * &commat;NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["a" /* DraggableHelper */],
                config.eventTitleFormatter || __WEBPACK_IMPORTED_MODULE_24__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */],
                config.dateFormatter || __WEBPACK_IMPORTED_MODULE_25__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */],
                config.utils || __WEBPACK_IMPORTED_MODULE_26__providers_calendarUtils_provider__["a" /* CalendarUtils */]
            ]
        };
    };
    return CalendarModule;
}());

CalendarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                    __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                    __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipWindowComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipDirective */],
                    __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                    __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                    __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                    __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                    __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                    __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2_angular_resizable_element__["a" /* ResizableModule */],
                    __WEBPACK_IMPORTED_MODULE_3_angular_draggable_droppable__["b" /* DragAndDropModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_4__components_day_calendarDayView_component__["a" /* CalendarDayViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__components_week_calendarWeekView_component__["a" /* CalendarWeekViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_6__components_month_calendarMonthView_component__["a" /* CalendarMonthViewComponent */],
                    __WEBPACK_IMPORTED_MODULE_8__components_common_calendarEventActions_component__["a" /* CalendarEventActionsComponent */],
                    __WEBPACK_IMPORTED_MODULE_9__components_common_calendarEventTitle_component__["a" /* CalendarEventTitleComponent */],
                    __WEBPACK_IMPORTED_MODULE_10__components_month_calendarMonthCell_component__["a" /* CalendarMonthCellComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__components_month_calendarOpenDayEvents_component__["a" /* CalendarOpenDayEventsComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__components_week_calendarWeekViewHeader_component__["a" /* CalendarWeekViewHeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__components_week_calendarWeekViewEvent_component__["a" /* CalendarWeekViewEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_14__components_day_calendarAllDayEvent_component__["a" /* CalendarAllDayEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__components_day_calendarDayViewHourSegment_component__["a" /* CalendarDayViewHourSegmentComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipWindowComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["b" /* CalendarTooltipDirective */],
                    __WEBPACK_IMPORTED_MODULE_18__directives_calendarPreviousView_directive__["a" /* CalendarPreviousViewDirective */],
                    __WEBPACK_IMPORTED_MODULE_19__directives_calendarNextView_directive__["a" /* CalendarNextViewDirective */],
                    __WEBPACK_IMPORTED_MODULE_20__directives_calendarToday_directive__["a" /* CalendarTodayDirective */],
                    __WEBPACK_IMPORTED_MODULE_22__pipes_calendarDate_pipe__["a" /* CalendarDatePipe */],
                    __WEBPACK_IMPORTED_MODULE_23__pipes_calendarEventTitle_pipe__["a" /* CalendarEventTitlePipe */],
                    __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthViewHeader_component__["a" /* CalendarMonthViewHeaderComponent */],
                    __WEBPACK_IMPORTED_MODULE_16__components_day_calendarDayViewEvent_component__["a" /* CalendarDayViewEventComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__directives_click_directive__["a" /* ClickDirective */]
                ],
                entryComponents: [
                    __WEBPACK_IMPORTED_MODULE_17__directives_calendarTooltip_directive__["a" /* CalendarTooltipWindowComponent */]
                ]
            },] },
];
/** @nocollapse */
CalendarModule.ctorParameters = function () { return []; };
//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventActions.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventActionsComponent; });

var CalendarEventActionsComponent = (function () {
    function CalendarEventActionsComponent() {
    }
    return CalendarEventActionsComponent;
}());

CalendarEventActionsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-event-actions',
                template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
            },] },
];
/** @nocollapse */
CalendarEventActionsComponent.ctorParameters = function () { return []; };
CalendarEventActionsComponent.propDecorators = {
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=calendarEventActions.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/common/calendarEventTitle.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleComponent; });

var CalendarEventTitleComponent = (function () {
    function CalendarEventTitleComponent() {
    }
    return CalendarEventTitleComponent;
}());

CalendarEventTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-event-title',
                template: "\n    <a\n      class=\"cal-event-title\"\n      href=\"javascript:;\"\n      [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n    </a>\n  "
            },] },
];
/** @nocollapse */
CalendarEventTitleComponent.ctorParameters = function () { return []; };
CalendarEventTitleComponent.propDecorators = {
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=calendarEventTitle.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarAllDayEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarAllDayEventComponent; });

var CalendarAllDayEventComponent = (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarAllDayEventComponent;
}());

CalendarAllDayEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-all-day-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarAllDayEventComponent.ctorParameters = function () { return []; };
CalendarAllDayEventComponent.propDecorators = {
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarAllDayEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewComponent; });





/**
 * @hidden
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
 */
var MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to a segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({ event: dropEvent.dropData.event, newStart: segment.date });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = (dayEvent.top - currentResize.originalTop);
        }
        else {
            pixelsMoved = (dayEvent.height - currentResize.originalHeight);
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.start, minutesMoved);
        var newEnd;
        if (dayEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.beforeViewRender.emit({
            body: this.hours
        });
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT
        });
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    return CalendarDayViewComponent;
}());

CalendarDayViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view',
                template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"eventTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarDayViewComponent.propDecorators = {
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hourSegments': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayStartHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayStartMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayEndHour': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayEndMinute': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventSnapSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hourSegmentTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'allDayEventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'hourSegmentClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarDayView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewEventComponent; });

var CalendarDayViewEventComponent = (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarDayViewEventComponent;
}());

CalendarDayViewEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n        [style.borderColor]=\"dayEvent.event.color.primary\"\n        [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n        [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n        [ngClass]=\"dayEvent.event.cssClass\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewEventComponent.ctorParameters = function () { return []; };
CalendarDayViewEventComponent.propDecorators = {
    'dayEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarDayViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/day/calendarDayViewHourSegment.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDayViewHourSegmentComponent; });

var CalendarDayViewHourSegmentComponent = (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    return CalendarDayViewHourSegmentComponent;
}());

CalendarDayViewHourSegmentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-day-view-hour-segment',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-hour-segment\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarDayViewHourSegmentComponent.ctorParameters = function () { return []; };
CalendarDayViewHourSegmentComponent.propDecorators = {
    'segment': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=calendarDayViewHourSegment.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthCell.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthCellComponent; });

var CalendarMonthCellComponent = (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.unhighlightDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarMonthCellComponent.prototype.onEventClick = function (mouseEvent, calendarEvent) {
        if (mouseEvent.stopPropagation) {
            mouseEvent.stopPropagation();
        }
        this.eventClicked.emit({ event: calendarEvent });
    };
    return CalendarMonthCellComponent;
}());

CalendarMonthCellComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-cell',
                template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events\"\n          [style.backgroundColor]=\"event.color.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"onEventClick($event, event)\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate\n      }\">\n    </ng-template>\n  ",
                host: {
                    'class': 'cal-cell cal-day-cell',
                    '[class.cal-past]': 'day.isPast',
                    '[class.cal-today]': 'day.isToday',
                    '[class.cal-future]': 'day.isFuture',
                    '[class.cal-weekend]': 'day.isWeekend',
                    '[class.cal-in-month]': 'day.inMonth',
                    '[class.cal-out-month]': '!day.inMonth',
                    '[class.cal-has-events]': 'day.events.length > 0',
                    '[class.cal-open]': 'day === openDay',
                    '[style.backgroundColor]': 'day.backgroundColor'
                }
            },] },
];
/** @nocollapse */
CalendarMonthCellComponent.ctorParameters = function () { return []; };
CalendarMonthCellComponent.propDecorators = {
    'day': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'openDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'highlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'unhighlightDay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarMonthCell.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__ = __webpack_require__("../../../../date-fns/set_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_set_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__ = __webpack_require__("../../../../date-fns/set_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__ = __webpack_require__("../../../../date-fns/set_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__ = __webpack_require__("../../../../date-fns/get_date/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__ = __webpack_require__("../../../../date-fns/get_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_get_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__ = __webpack_require__("../../../../date-fns/get_year/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_get_year__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewComponent; });











/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = __WEBPACK_IMPORTED_MODULE_7_date_fns_get_year___default()(day.date);
        var month = __WEBPACK_IMPORTED_MODULE_6_date_fns_get_month___default()(day.date);
        var date = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_date___default()(day.date);
        var newStart = __WEBPACK_IMPORTED_MODULE_2_date_fns_set_date___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_set_month___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_set_year___default()(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = __WEBPACK_IMPORTED_MODULE_8_date_fns_difference_in_seconds___default()(newStart, event.start);
            newEnd = __WEBPACK_IMPORTED_MODULE_9_date_fns_add_seconds___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) { return __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(day.date, _this.viewDate); });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days
            });
        }
    };
    return CalendarMonthViewComponent;
}());

CalendarMonthViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-view',
                template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"dayClicked.emit({day: day})\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarMonthViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_10__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarMonthViewComponent.propDecorators = {
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'activeDayIsOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cellTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'openDayEventsTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dayClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarMonthView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarMonthViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarMonthViewHeaderComponent; });

var CalendarMonthViewHeaderComponent = (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    return CalendarMonthViewHeaderComponent;
}());

CalendarMonthViewHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-month-view-header',
                template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarMonthViewHeaderComponent.ctorParameters = function () { return []; };
CalendarMonthViewHeaderComponent.propDecorators = {
    'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=calendarMonthViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/month/calendarOpenDayEvents.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarOpenDayEventsComponent; });


var CalendarOpenDayEventsComponent = (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarOpenDayEventsComponent;
}());

CalendarOpenDayEventsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-open-day-events',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                animations: [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('collapse', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => *', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('150ms linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' }))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('* => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: '*' }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('150ms linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ height: 0 }))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
CalendarOpenDayEventsComponent.ctorParameters = function () { return []; };
CalendarOpenDayEventsComponent.propDecorators = {
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarOpenDayEvents.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewComponent; });





/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.eventRows = [];
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        var resizeHelper = new __WEBPACK_IMPORTED_MODULE_3__providers_calendarResizeHelper_provider__["a" /* CalendarResizeHelper */](weekViewContainer, this.getDayColumnWidth(weekViewContainer));
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var currentResize = this.currentResizes.get(weekEvent);
        var daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var daysDragged = draggedByPx / dayWidth;
        var newStart = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.start, daysDragged);
        var newEnd;
        if (weekEvent.event.end) {
            newEnd = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        var dragHelper = new __WEBPACK_IMPORTED_MODULE_2__providers_calendarDragHelper_provider__["a" /* CalendarDragHelper */](weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.beforeViewRender.emit({
            header: this.days
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    return CalendarWeekViewComponent;
}());

CalendarWeekViewComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view',
                template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          class=\"cal-event-container\"\n          #event\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          *ngFor=\"let weekEvent of eventRow.row\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: getDayColumnWidth(eventRowContainer), right: getDayColumnWidth(eventRowContainer)}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, getDayColumnWidth(eventRowContainer))\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: getDayColumnWidth(eventRowContainer)}\"\n          [validateDrag]=\"validateDrag\"\n          (dragStart)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, getDayColumnWidth(eventRowContainer))\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [customTemplate]=\"eventTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__["a" /* CalendarUtils */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
CalendarWeekViewComponent.propDecorators = {
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'events': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'excludeDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'refresh': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'weekStartsOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'headerTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'precision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'weekendDays': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventTimesChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'beforeViewRender': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarWeekView.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewEvent.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewEventComponent; });

var CalendarWeekViewEventComponent = (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarWeekViewEventComponent;
}());

CalendarWeekViewEventComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view-event',
                template: "\n    <ng-template #defaultTemplate>\n      <div\n        class=\"cal-event\"\n        [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n        [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n        [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n        [ngClass]=\"weekEvent.event?.cssClass\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewEventComponent.ctorParameters = function () { return []; };
CalendarWeekViewEventComponent.propDecorators = {
    'weekEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipPlacement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tooltipTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'eventClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarWeekViewEvent.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/components/week/calendarWeekViewHeader.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWeekViewHeaderComponent; });

var CalendarWeekViewHeaderComponent = (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventDropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarWeekViewHeaderComponent;
}());

CalendarWeekViewHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mwl-calendar-week-view-header',
                template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarWeekViewHeaderComponent.ctorParameters = function () { return []; };
CalendarWeekViewHeaderComponent.propDecorators = {
    'days': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dayHeaderClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'eventDropped': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=calendarWeekViewHeader.component.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarNextView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__ = __webpack_require__("../../../../date-fns/add_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__ = __webpack_require__("../../../../date-fns/add_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_add_months__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNextViewDirective; });




/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_add_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_add_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_add_months___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    return CalendarNextViewDirective;
}());

CalendarNextViewDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarNextView]'
            },] },
];
/** @nocollapse */
CalendarNextViewDirective.ctorParameters = function () { return []; };
CalendarNextViewDirective.propDecorators = {
    'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
//# sourceMappingURL=calendarNextView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarPreviousView.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__ = __webpack_require__("../../../../date-fns/sub_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__ = __webpack_require__("../../../../date-fns/sub_weeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__ = __webpack_require__("../../../../date-fns/sub_months/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPreviousViewDirective; });




/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: __WEBPACK_IMPORTED_MODULE_1_date_fns_sub_days___default.a,
            week: __WEBPACK_IMPORTED_MODULE_2_date_fns_sub_weeks___default.a,
            month: __WEBPACK_IMPORTED_MODULE_3_date_fns_sub_months___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    return CalendarPreviousViewDirective;
}());

CalendarPreviousViewDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarPreviousView]'
            },] },
];
/** @nocollapse */
CalendarPreviousViewDirective.ctorParameters = function () { return []; };
CalendarPreviousViewDirective.propDecorators = {
    'view': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
//# sourceMappingURL=calendarPreviousView.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarToday.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__ = __webpack_require__("../../../../date-fns/start_of_today/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTodayDirective; });


/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(__WEBPACK_IMPORTED_MODULE_1_date_fns_start_of_today___default()());
    };
    return CalendarTodayDirective;
}());

CalendarTodayDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarToday]'
            },] },
];
/** @nocollapse */
CalendarTodayDirective.ctorParameters = function () { return []; };
CalendarTodayDirective.propDecorators = {
    'viewDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'viewDateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
//# sourceMappingURL=calendarToday.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/calendarTooltip.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarTooltipDirective; });



var CalendarTooltipWindowComponent = (function () {
    function CalendarTooltipWindowComponent() {
    }
    return CalendarTooltipWindowComponent;
}());

CalendarTooltipWindowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                template: "\n    <ng-template #defaultTemplate>\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
            },] },
];
/** @nocollapse */
CalendarTooltipWindowComponent.ctorParameters = function () { return []; };
CalendarTooltipWindowComponent.propDecorators = {
    'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var CalendarTooltipDirective = (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; //tslint:disable-line
        this.placement = 'top'; // tslint:disable-line no-input-rename
        this.positioning = new __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, true);
            var elm = this.tooltipRef.location.nativeElement.children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    return CalendarTooltipDirective;
}());

CalendarTooltipDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlCalendarTooltip]'
            },] },
];
/** @nocollapse */
CalendarTooltipDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] },] },
]; };
CalendarTooltipDirective.propDecorators = {
    'contents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mwlCalendarTooltip',] },],
    'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
    'customTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTemplate',] },],
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEvent',] },],
    'onMouseOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
    'onMouseOut': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
};
//# sourceMappingURL=calendarTooltip.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/directives/click.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickDirective; });

var ClickDirective = (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var eventName = typeof window['Hammer'] !== 'undefined' ? 'tap' : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    return ClickDirective;
}());

ClickDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlClick]'
            },] },
];
/** @nocollapse */
ClickDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
ClickDirective.propDecorators = {
    'click': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mwlClick',] },],
};
//# sourceMappingURL=click.directive.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarMomentDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calendarUtils_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_module__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/calendar.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__calendar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_day_calendarDayView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/day/calendarDayView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_month_calendarMonthView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/month/calendarMonthView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_week_calendarWeekView_component__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/components/week/calendarWeekView.component.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* unused harmony reexport DAYS_OF_WEEK */










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarDate.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDatePipe; });


/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    return CalendarDatePipe;
}());

CalendarDatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'calendarDate'
            },] },
];
/** @nocollapse */
CalendarDatePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarDateFormatter_provider__["a" /* CalendarDateFormatter */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
]; };
//# sourceMappingURL=calendarDate.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/pipes/calendarEventTitle.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitlePipe; });


var CalendarEventTitlePipe = (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    return CalendarEventTitlePipe;
}());

CalendarEventTitlePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'calendarEventTitle'
            },] },
];
/** @nocollapse */
CalendarEventTitlePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__providers_calendarEventTitleFormatter_provider__["a" /* CalendarEventTitleFormatter */], },
]; };
//# sourceMappingURL=calendarEventTitle.pipe.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDateFormatter; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class is responsible for all formatting of dates. There are 2 implementations available, the `CalendarNativeDateFormatter` (default) which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(__WEBPACK_IMPORTED_MODULE_0__calendarNativeDateFormatter_provider__["a" /* CalendarNativeDateFormatter */]));

//# sourceMappingURL=calendarDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarDragHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDragHelper; });

var CalendarDragHelper = (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());

//# sourceMappingURL=calendarDragHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarEventTitleFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEventTitleFormatter; });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

//# sourceMappingURL=calendarEventTitleFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarMomentDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export MOMENT */
/* unused harmony export CalendarMomentDateFormatter */

var MOMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import * as moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('D MMM');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
    };
    return CalendarMomentDateFormatter;
}());

/** @nocollapse */
CalendarMomentDateFormatter.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [MOMENT,] },] },
]; };
//# sourceMappingURL=calendarMomentDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarNativeDateFormatter.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__ = __webpack_require__("../../../../date-fns/get_iso_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarNativeDateFormatter; });

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting. It is the default date formatter used by the calendar.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date);
        var weekNumber = __WEBPACK_IMPORTED_MODULE_0_date_fns_get_iso_week___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());

//# sourceMappingURL=calendarNativeDateFormatter.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarResizeHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/providers/util.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarResizeHelper; });

var CalendarResizeHelper = (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* isInside */])(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());

//# sourceMappingURL=calendarResizeHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/calendarUtils.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_calendar_utils__ = __webpack_require__("../../../../calendar-utils/dist/calendar-utils.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarUtils; });


var CalendarUtils = (function () {
    function CalendarUtils() {
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["a" /* getMonthView */])(args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["b" /* getWeekViewHeader */])(args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["c" /* getWeekView */])(args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["d" /* getDayView */])(args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_calendar_utils__["e" /* getDayViewHourGrid */])(args);
    };
    return CalendarUtils;
}());

CalendarUtils.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
CalendarUtils.ctorParameters = function () { return []; };
//# sourceMappingURL=calendarUtils.provider.js.map

/***/ }),

/***/ "../../../../angular-calendar/dist/esm/src/providers/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInside;
function isInside(outer, inner) {
    return outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/dragAndDrop.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__droppable_directive__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropModule; });




var DragAndDropModule = (function () {
    function DragAndDropModule() {
    }
    DragAndDropModule.forRoot = function () {
        return {
            ngModule: DragAndDropModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__draggableHelper_provider__["a" /* DraggableHelper */]
            ]
        };
    };
    return DragAndDropModule;
}());

DragAndDropModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* Draggable */],
                    __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* Droppable */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* Draggable */],
                    __WEBPACK_IMPORTED_MODULE_2__droppable_directive__["a" /* Droppable */]
                ]
            },] },
];
/** @nocollapse */
DragAndDropModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dragAndDrop.module.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__ = __webpack_require__("../../../../rxjs/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeLast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Draggable; });












var MOVE_CURSOR = 'move';
var Draggable = (function () {
    /**
     * @hidden
     */
    function Draggable(element, renderer, draggableHelper, zone) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragAxis = { x: true, y: true };
        this.dragSnapGrid = {};
        this.ghostDragEnabled = true;
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventListenerSubscriptions = {};
    }
    Draggable.prototype.ngOnInit = function () {
        var _this = this;
        this.checkEventListeners();
        var pointerDrag = this.pointerDown
            .filter(function () { return _this.canDrag(); })
            .flatMap(function (pointerDownEvent) {
            pointerDownEvent.event.preventDefault();
            _this.zone.run(function () {
                _this.dragStart.next({ x: 0, y: 0 });
            });
            _this.setCursor(MOVE_CURSOR);
            var currentDrag = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
            _this.draggableHelper.currentDrag.next(currentDrag);
            var pointerMove = _this.pointerMove
                .map(function (pointerMoveEvent) {
                pointerMoveEvent.event.preventDefault();
                return {
                    currentDrag: currentDrag,
                    x: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    y: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY
                };
            })
                .map(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.x = Math.floor(moveData.x / _this.dragSnapGrid.x) * _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.y = Math.floor(moveData.y / _this.dragSnapGrid.y) * _this.dragSnapGrid.y;
                }
                return moveData;
            })
                .map(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.x = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.y = 0;
                }
                return moveData;
            })
                .filter(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            })
                .takeUntil(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge(_this.pointerUp, _this.pointerDown));
            pointerMove.takeLast(1).subscribe(function (_a) {
                var x = _a.x, y = _a.y;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y });
                });
                currentDrag.complete();
                _this.setCssTransform(null);
                if (_this.ghostDragEnabled) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', null);
                }
            });
            return pointerMove;
        })
            .share();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
            .merge(pointerDrag.take(1).map(function (value) { return [, value]; }), pointerDrag.pairwise())
            .filter(function (_a) {
            var previous = _a[0], next = _a[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })
            .map(function (_a) {
            var previous = _a[0], next = _a[1];
            return next;
        })
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag = _a.currentDrag, clientX = _a.clientX, clientY = _a.clientY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostDragEnabled) {
                _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', 'none');
            }
            _this.setCssTransform("translate(" + x + "px, " + y + "px)");
            currentDrag.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    Draggable.prototype.ngOnChanges = function (changes) {
        if (changes['dragAxis']) {
            this.checkEventListeners();
        }
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
        this.pointerDown.complete();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    Draggable.prototype.checkEventListeners = function () {
        var _this = this;
        var canDrag = this.canDrag();
        var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    Draggable.prototype.onMouseDown = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (event) {
                _this.pointerMove.next({ event: event, clientX: event.clientX, clientY: event.clientY });
            });
        }
        this.pointerDown.next({ event: event, clientX: event.clientX, clientY: event.clientY });
    };
    Draggable.prototype.onMouseUp = function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp.next({ event: event, clientX: event.clientX, clientY: event.clientY });
    };
    Draggable.prototype.onTouchStart = function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (event) {
                _this.pointerMove.next({ event: event, clientX: event.targetTouches[0].clientX, clientY: event.targetTouches[0].clientY });
            });
        }
        this.pointerDown.next({ event: event, clientX: event.touches[0].clientX, clientY: event.touches[0].clientY });
    };
    Draggable.prototype.onTouchEnd = function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp.next({ event: event, clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY });
    };
    Draggable.prototype.onMouseEnter = function () {
        this.setCursor(MOVE_CURSOR);
    };
    Draggable.prototype.onMouseLeave = function () {
        this.setCursor(null);
    };
    Draggable.prototype.setCssTransform = function (value) {
        if (this.ghostDragEnabled) {
            this.renderer.setStyle(this.element.nativeElement, 'transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-webkit-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-ms-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-moz-transform', value);
            this.renderer.setStyle(this.element.nativeElement, '-o-transform', value);
        }
    };
    Draggable.prototype.canDrag = function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    Draggable.prototype.setCursor = function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    Draggable.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            _this.eventListenerSubscriptions[type]();
            delete _this.eventListenerSubscriptions[type];
        });
    };
    return Draggable;
}());

Draggable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDraggable]'
            },] },
];
/** @nocollapse */
Draggable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_11__draggableHelper_provider__["a" /* DraggableHelper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Draggable.propDecorators = {
    'dropData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragAxis': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ghostDragEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'validateDrag': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragging': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableHelper; });

var DraggableHelper = (function () {
    function DraggableHelper() {
        this.currentDrag = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    return DraggableHelper;
}());

//# sourceMappingURL=draggableHelper.provider.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/droppable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droppable; });





function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}
var Droppable = (function () {
    function Droppable(element, draggableHelper, zone) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.dragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Droppable.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag) {
            var droppableRectangle = _this.element.nativeElement.getBoundingClientRect();
            var currentDragDropData;
            var overlaps = drag.map(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                return isCoordinateWithinRectangle(clientX, clientY, droppableRectangle);
            });
            var overlapsChanged = overlaps.distinctUntilChanged();
            var dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                dragOverActive = true;
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps.filter(function (overlapsNow) { return overlapsNow; }).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged
                .pairwise()
                .filter(function (_a) {
                var didOverlap = _a[0], overlapsNow = _a[1];
                return didOverlap && !overlapsNow;
            })
                .subscribe(function () {
                dragOverActive = false;
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag.flatMap(function () { return overlaps; }).subscribe({
                complete: function () {
                    if (dragOverActive) {
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.currentDragSubscription.unsubscribe();
    };
    return Droppable;
}());

Droppable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlDroppable]'
            },] },
];
/** @nocollapse */
Droppable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__draggableHelper_provider__["a" /* DraggableHelper */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Droppable.propDecorators = {
    'dragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'dragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'drop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../angular-draggable-droppable/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragAndDrop_module__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/dragAndDrop.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dragAndDrop_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggableHelper_provider__ = __webpack_require__("../../../../angular-draggable-droppable/dist/esm/src/draggableHelper.provider.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__draggableHelper_provider__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resizable_module__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resizable_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* unused harmony reexport Resizable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");
/* unused harmony reexport ResizeHandle */

 // tslint:disable-line
 // tslint:disable-line
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__ = __webpack_require__("../../../../rxjs/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__ = __webpack_require__("../../../../rxjs/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");
/* unused harmony export MOUSE_MOVE_THROTTLE_MS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resizable; });














function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    var diff = Math.abs(value1 - value2);
    return diff < precision;
}
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    var newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
function getElementRect(element, ghostElementPositioning) {
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop,
            bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop,
            left: element.nativeElement.offsetLeft,
            right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft
        };
    }
    else {
        var boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top,
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            right: boundingRect.right
        };
    }
}
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    var elmPosition = elm.nativeElement.getBoundingClientRect();
    var edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
var DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'ew-resize',
    topOrBottom: 'ns-resize'
});
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return null;
    }
}
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    var edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = newRectangle[edge] - initialRectangle[edge];
    });
    return edgesDiff;
}
var RESIZE_ACTIVE_CLASS = 'resize-active';
var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
var MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable [resizeEdges]="{bottom: true, right: true, top: true, left: true}" [enableGhostResize]="true"&gt;&lt;/div&gt;
 * ```
 */
var Resizable = (function () {
    /**
     * @hidden
     */
    function Resizable(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.pointerEventListenerSubscriptions = {};
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    Resizable.prototype.ngOnInit = function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListenerSubscriptions.pointerDown = this.pointerEventListeners.pointerDown.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListenerSubscriptions.pointerMove = this.pointerEventListeners.pointerMove.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListenerSubscriptions.pointerUp = this.pointerEventListeners.pointerUp.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        var currentResize;
        var removeGhostElement = function () {
            if (currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        var mouseMove = this.mousemove.share();
        mouseMove
            .filter(function () { return !!currentResize; })
            .subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove.throttle(function (val) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__["interval"])(MOUSE_MOVE_THROTTLE_MS); }).subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var resizeEdges = getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            var cursor = currentResize ? null : getResizeCursor(resizeEdges, resizeCursors);
            _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        var mousedrag = this.mousedown.flatMap(function (startCoords) {
            var getDiff = function (moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            };
            var getSnapGrid = function () {
                var snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right && currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            var getGrid = function (coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            };
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(mouseMove.take(1).map(function (coords) { return [, coords]; }), mouseMove.pairwise()).map(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
            }).filter(function (_a) {
                var previousCoords = _a[0], newCoords = _a[1];
                if (!previousCoords) {
                    return true;
                }
                var snapGrid = getSnapGrid();
                var previousGrid = getGrid(previousCoords, snapGrid);
                var newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }).map(function (_a) {
                var newCoords = _a[1];
                var snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }).takeUntil(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_merge__["merge"])(_this.mouseup, _this.mousedown));
        }).filter(function () { return !!currentResize; });
        mousedrag.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(currentResize.startingRect, currentResize.edges, clientX, clientY);
        }).filter(function (newBoundingRect) {
            return newBoundingRect.height > 0 && newBoundingRect.width > 0;
        }).filter(function (newBoundingRect) {
            return _this.validateResize ? _this.validateResize({
                rectangle: newBoundingRect,
                edges: getEdgesDiff({
                    edges: currentResize.edges,
                    initialRectangle: currentResize.startingRect,
                    newRectangle: newBoundingRect
                })
            }) : true;
        }).subscribe(function (newBoundingRect) {
            if (currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: currentResize.edges,
                        initialRectangle: currentResize.startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            currentResize.currentRect = newBoundingRect;
        });
        this.mousedown.map(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return edges || getResizeEdges({
                clientX: clientX, clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
        }).filter(function (edges) {
            return Object.keys(edges).length > 0;
        }).subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            var startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                var resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({ edges: edges, initialRectangle: startingRect, newRectangle: startingRect }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: currentResize.edges,
                            initialRectangle: currentResize.startingRect,
                            newRectangle: currentResize.currentRect
                        }),
                        rectangle: currentResize.currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.resizeHandles.forEach(function (handle) {
            handle.resizable = _this;
        });
    };
    /**
     * @hidden
     */
    Resizable.prototype.ngOnDestroy = function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.pointerEventListenerSubscriptions.pointerDown.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerMove.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerUp.unsubscribe();
    };
    Resizable.prototype.setElementClass = function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    return Resizable;
}());

Resizable.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizable]'
            },] },
];
/** @nocollapse */
Resizable.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
Resizable.propDecorators = {
    'validateResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'enableGhostResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeSnapGrid': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursors': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeCursorPrecision': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ghostElementPositioning': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'resizeStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'resizeHandles': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_13__resizeHandle_directive__["a" /* ResizeHandle */],] },],
};
var PointerEventListeners = (function () {
    function PointerEventListeners(renderer, zone) {
        var _this = this;
        zone.runOutsideAngular(function () {
            _this.pointerDown = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseDown();
                    unsubscribeTouchStart();
                };
            }).share();
            _this.pointerMove = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({ clientX: event.targetTouches[0].clientX, clientY: event.targetTouches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseMove();
                    unsubscribeTouchMove();
                };
            }).share();
            _this.pointerUp = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                var unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({ clientX: event.clientX, clientY: event.clientY, event: event });
                });
                var unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
                var unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({ clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY, event: event });
                });
                return function () {
                    unsubscribeMouseUp();
                    unsubscribeTouchEnd();
                    unsubscribeTouchCancel();
                };
            }).share();
        });
    }
    PointerEventListeners.getInstance = function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());
//# sourceMappingURL=resizable.directive.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizable.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resizable_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizable.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__ = __webpack_require__("../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableModule; });



var ResizableModule = (function () {
    function ResizableModule() {
    }
    return ResizableModule;
}());

ResizableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]],
                exports: [__WEBPACK_IMPORTED_MODULE_1__resizable_directive__["a" /* Resizable */], __WEBPACK_IMPORTED_MODULE_2__resizeHandle_directive__["a" /* ResizeHandle */]]
            },] },
];
/** @nocollapse */
ResizableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=resizable.module.js.map

/***/ }),

/***/ "../../../../angular-resizable-element/dist/esm/src/resizeHandle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeHandle; });

/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable&gt;
 *   &lt;div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * ```
 */
var ResizeHandle = (function () {
    function ResizeHandle(renderer, element, zone) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    ResizeHandle.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMousedown = function (event, mouseX, mouseY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (event) {
                    _this.onMousemove(event, event.targetTouches[0].clientX, event.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (event) {
                    _this.onMousemove(event, event.clientX, event.clientY);
                });
            }
            _this.resizable.mousedown.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    /**
     * @private
     */
    ResizeHandle.prototype.onMouseup = function (mouseX, mouseY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    ResizeHandle.prototype.onMousemove = function (event, mouseX, mouseY) {
        this.resizable.mousemove.next({ mouseX: mouseX, mouseY: mouseY, edges: this.resizeEdges, event: event });
    };
    ResizeHandle.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            _this.eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    return ResizeHandle;
}());

ResizeHandle.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mwlResizeHandle]'
            },] },
];
/** @nocollapse */
ResizeHandle.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
ResizeHandle.propDecorators = {
    'resizeEdges': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onMousedown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] },],
    'onMouseup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] },],
};
//# sourceMappingURL=resizeHandle.directive.js.map

/***/ }),

/***/ "../../../../calendar-utils/dist/calendar-utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__ = __webpack_require__("../../../../date-fns/end_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__ = __webpack_require__("../../../../date-fns/add_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__ = __webpack_require__("../../../../date-fns/difference_in_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__ = __webpack_require__("../../../../date-fns/start_of_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__ = __webpack_require__("../../../../date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__ = __webpack_require__("../../../../date-fns/get_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__ = __webpack_require__("../../../../date-fns/start_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__ = __webpack_require__("../../../../date-fns/add_days/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__ = __webpack_require__("../../../../date-fns/end_of_week/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__ = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__ = __webpack_require__("../../../../date-fns/start_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__ = __webpack_require__("../../../../date-fns/end_of_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__ = __webpack_require__("../../../../date-fns/is_same_month/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__ = __webpack_require__("../../../../date-fns/is_same_second/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__ = __webpack_require__("../../../../date-fns/set_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__ = __webpack_require__("../../../../date-fns/set_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__ = __webpack_require__("../../../../date-fns/start_of_minute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__ = __webpack_require__("../../../../date-fns/difference_in_minutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__ = __webpack_require__("../../../../date-fns/add_hours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__ = __webpack_require__("../../../../date-fns/add_seconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max__ = __webpack_require__("../../../../date-fns/max/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_max__);
/* unused harmony export DAYS_OF_WEEK */
/* unused harmony export SECONDS_IN_DAY */
/* unused harmony export SECONDS_IN_WEEK */
/* unused harmony export getWeekViewEventOffset */
/* harmony export (immutable) */ __webpack_exports__["b"] = getWeekViewHeader;
/* harmony export (immutable) */ __webpack_exports__["c"] = getWeekView;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMonthView;
/* harmony export (immutable) */ __webpack_exports__["d"] = getDayView;
/* harmony export (immutable) */ __webpack_exports__["e"] = getDayViewHourGrid;





















var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * DAYS_IN_WEEK;
function getExcludedSeconds(_a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var endDate = __WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(startDate, seconds - 1);
    var dayStart = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(startDate);
    var dayEnd = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(__WEBPACK_IMPORTED_MODULE_19_date_fns_add_seconds___default()(endDate, 0));
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = __WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds({ dayStart: dayStart, dayEnd: dayEnd, day: day, precision: precision, startDate: startDate, endDate: endDate });
        }
        current = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(_a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(endDate, __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    var span = SECONDS_IN_DAY;
    var begin = __WEBPACK_IMPORTED_MODULE_20_date_fns_max___default()(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.end, begin);
                break;
            default:
                span = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(event.end, 1), begin) * SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds 7days
    if (totalLength > SECONDS_IN_WEEK) {
        span = SECONDS_IN_WEEK - offsetSeconds;
    }
    span -= getExcludedSeconds({ startDate: begin, seconds: span, excluded: excluded, precision: precision });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeek = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    if (event.start < startOfWeek) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset = __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(event.start), startOfWeek) * SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(event.start, startOfWeek);
            break;
    }
    offset -= getExcludedSeconds({ startDate: startOfWeek, seconds: offset, excluded: excluded, precision: precision });
    return offset / SECONDS_IN_DAY;
}
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventStart, periodEnd)) {
        return true;
    }
    if (__WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodStart) || __WEBPACK_IMPORTED_MODULE_13_date_fns_is_same_second___default()(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) { return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd }); });
}
function getWeekDay(_a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var today = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: __WEBPACK_IMPORTED_MODULE_4_date_fns_is_same_day___default()(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(__WEBPACK_IMPORTED_MODULE_5_date_fns_get_day___default()(date)) > -1
    };
}
function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays;
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var days = [];
    var _loop_2 = function (i) {
        var date = __WEBPACK_IMPORTED_MODULE_7_date_fns_add_days___default()(start, i);
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            days.push(getWeekDay({ date: date, weekendDays: weekendDays }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_2(i);
    }
    return days;
}
function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e;
    if (!events) {
        events = [];
    }
    var startOfViewWeek = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var endOfViewWeek = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewDate, { weekStartsOn: weekStartsOn });
    var maxRange = DAYS_IN_WEEK - excluded.length;
    var eventsMapped = getEventsInPeriod({ events: events, periodStart: startOfViewWeek, periodEnd: endOfViewWeek }).map(function (event) {
        var offset = getWeekViewEventOffset({ event: event, startOfWeek: startOfViewWeek, excluded: excluded, precision: precision });
        var span = getWeekViewEventSpan({ event: event, offset: offset, startOfWeekDate: startOfViewWeek, excluded: excluded, precision: precision });
        return { event: event, offset: offset, span: span };
    }).filter(function (e) { return e.offset < maxRange; }).filter(function (e) { return e.span > 0; }).map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek
    }); }).sort(function (itemA, itemB) {
        var startSecondsDiff = __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return __WEBPACK_IMPORTED_MODULE_9_date_fns_difference_in_seconds___default()(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var eventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= DAYS_IN_WEEK &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            eventRows.push({
                row: [
                    event
                ].concat(otherRowEvents)
            });
        }
    });
    return eventRows;
}
function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? __WEBPACK_IMPORTED_MODULE_10_date_fns_start_of_month___default()(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? __WEBPACK_IMPORTED_MODULE_11_date_fns_end_of_month___default()(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var start = __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_week___default()(viewStart, { weekStartsOn: weekStartsOn });
    var end = __WEBPACK_IMPORTED_MODULE_8_date_fns_end_of_week___default()(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_3 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                date = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            var day = getWeekDay({ date: date, weekendDays: weekendDays });
            var events_1 = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(date),
                periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(date)
            });
            day.inMonth = __WEBPACK_IMPORTED_MODULE_12_date_fns_is_same_month___default()(date, viewDate);
            day.events = events_1;
            day.badgeTotal = events_1.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2_date_fns_difference_in_days___default()(end, start) + 1; i++) {
        _loop_3(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
        var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
        var isRowInMonth = row.some(function (day) { return day.date.getMonth() === viewDate.getMonth(); });
        if (isRowInMonth) {
            days = days.concat(row);
        }
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days
    };
}
function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var dayViewEvents = getEventsInPeriod({
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    }).sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    }).map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = (hourSegments * segmentHeight) / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = previousDayEvents.filter(function (previousEvent) {
            var previousEventTop = previousEvent.top;
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    }).filter(function (dayEvent) { return dayEvent.height > 0; });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod({
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(startOfView),
        periodEnd: __WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents
    };
}
function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var hours = [];
    var startOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = __WEBPACK_IMPORTED_MODULE_15_date_fns_set_minutes___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_set_hours___default()(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_minute___default()(__WEBPACK_IMPORTED_MODULE_0_date_fns_end_of_day___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = __WEBPACK_IMPORTED_MODULE_3_date_fns_start_of_day___default()(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = __WEBPACK_IMPORTED_MODULE_1_date_fns_add_minutes___default()(__WEBPACK_IMPORTED_MODULE_18_date_fns_add_hours___default()(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../angular-calendar/dist/css/angular-calendar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * angular-calendar - A calendar component for angular 4.0+ that can display events on a month, week or day view\n * @version v0.18.3\n * @author Matt Lewis\n * @link https://github.com/mattlewis92/angular-calendar#readme\n * @license MIT\n */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-event.cal-starts-within-week {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-event.cal-ends-within-week {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n  .cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n  .cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n  .cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block;\n    height: 30px; }\n  .cal-day-view .cal-hour-segment::after {\n    content: '\\A0'; }\n  .cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n  .cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n  .cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n  .cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n  .cal-day-view .cal-event-container {\n    position: absolute; }\n  .cal-day-view .cal-event {\n    border: solid 1px;\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box; }\n  .cal-day-view .cal-draggable {\n    cursor: move; }\n  .cal-day-view .cal-event.cal-starts-within-day {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .cal-day-view .cal-event.cal-ends-within-day {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../date-fns/add_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "../../../../date-fns/add_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "../../../../date-fns/add_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var setISOYear = __webpack_require__("../../../../date-fns/set_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears


/***/ }),

/***/ "../../../../date-fns/add_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "../../../../date-fns/add_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "../../../../date-fns/add_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "../../../../date-fns/add_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @returns {Date} the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters


/***/ }),

/***/ "../../../../date-fns/add_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "../../../../date-fns/add_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "../../../../date-fns/add_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears


/***/ }),

/***/ "../../../../date-fns/are_ranges_overlapping/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ "../../../../date-fns/closest_index_to/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestIndexTo


/***/ }),

/***/ "../../../../date-fns/closest_to/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}

module.exports = closestTo


/***/ }),

/***/ "../../../../date-fns/compare_asc/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "../../../../date-fns/compare_desc/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_iso_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft = startOfISOWeekLeft.getTime() -
    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfISOWeekRight.getTime() -
    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarISOWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
}

module.exports = differenceInCalendarISOYears


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getQuarter = __webpack_require__("../../../../date-fns/get_quarter/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)

  return yearDiff * 4 + quarterDiff
}

module.exports = differenceInCalendarQuarters


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft = startOfWeekLeft.getTime() -
    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime() -
    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_calendar_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}

module.exports = differenceInCalendarYears


/***/ }),

/***/ "../../../../date-fns/difference_in_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "../../../../date-fns/difference_in_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),

/***/ "../../../../date-fns/difference_in_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarISOYears = __webpack_require__("../../../../date-fns/difference_in_calendar_iso_years/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")
var subISOYears = __webpack_require__("../../../../date-fns/sub_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
  dateLeft = subISOYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

module.exports = differenceInISOYears


/***/ }),

/***/ "../../../../date-fns/difference_in_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "../../../../date-fns/difference_in_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "../../../../date-fns/difference_in_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarMonths = __webpack_require__("../../../../date-fns/difference_in_calendar_months/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ "../../../../date-fns/difference_in_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMonths = __webpack_require__("../../../../date-fns/difference_in_months/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInQuarters


/***/ }),

/***/ "../../../../date-fns/difference_in_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "../../../../date-fns/difference_in_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var differenceInDays = __webpack_require__("../../../../date-fns/difference_in_days/index.js")

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInWeeks


/***/ }),

/***/ "../../../../date-fns/difference_in_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInCalendarYears = __webpack_require__("../../../../date-fns/difference_in_calendar_years/index.js")
var compareAsc = __webpack_require__("../../../../date-fns/compare_asc/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastYearNotFull)
}

module.exports = differenceInYears


/***/ }),

/***/ "../../../../date-fns/distance_in_words/index.js":
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__("../../../../date-fns/compare_desc/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js")
var differenceInMonths = __webpack_require__("../../../../date-fns/difference_in_months/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ "../../../../date-fns/distance_in_words_strict/index.js":
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__("../../../../date-fns/compare_desc/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var differenceInSeconds = __webpack_require__("../../../../date-fns/difference_in_seconds/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWordsStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'm'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'M', partialMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var unit
  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = mathPartial(seconds / 60) - offset
  var hours, days, months, years

  if (options.unit) {
    unit = String(options.unit)
  } else {
    if (minutes < 1) {
      unit = 's'
    } else if (minutes < 60) {
      unit = 'm'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'h'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'd'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'M'
    } else {
      unit = 'Y'
    }
  }

  // 0 up to 60 seconds
  if (unit === 's') {
    return localize('xSeconds', seconds, localizeOptions)

  // 1 up to 60 mins
  } else if (unit === 'm') {
    return localize('xMinutes', minutes, localizeOptions)

  // 1 up to 24 hours
  } else if (unit === 'h') {
    hours = mathPartial(minutes / 60)
    return localize('xHours', hours, localizeOptions)

  // 1 up to 30 days
  } else if (unit === 'd') {
    days = mathPartial(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 up to 12 months
  } else if (unit === 'M') {
    months = mathPartial(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', months, localizeOptions)

  // 1 year up to max Date
  } else if (unit === 'Y') {
    years = mathPartial(minutes / MINUTES_IN_YEAR)
    return localize('xYears', years, localizeOptions)
  }

  throw new Error('Unknown unit: ' + unit)
}

module.exports = distanceInWordsStrict


/***/ }),

/***/ "../../../../date-fns/distance_in_words_to_now/index.js":
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__("../../../../date-fns/distance_in_words/index.js")

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ "../../../../date-fns/each_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ "../../../../date-fns/end_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "../../../../date-fns/end_of_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(59, 59, 999)
  return date
}

module.exports = endOfHour


/***/ }),

/***/ "../../../../date-fns/end_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var endOfWeek = __webpack_require__("../../../../date-fns/end_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek (dirtyDate) {
  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = endOfISOWeek


/***/ }),

/***/ "../../../../date-fns/end_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear


/***/ }),

/***/ "../../../../date-fns/end_of_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(59, 999)
  return date
}

module.exports = endOfMinute


/***/ }),

/***/ "../../../../date-fns/end_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "../../../../date-fns/end_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfQuarter


/***/ }),

/***/ "../../../../date-fns/end_of_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond


/***/ }),

/***/ "../../../../date-fns/end_of_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var endOfDay = __webpack_require__("../../../../date-fns/end_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

module.exports = endOfToday


/***/ }),

/***/ "../../../../date-fns/end_of_tomorrow/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 *
 * @description
 * Return the end of tomorrow.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfTomorrow


/***/ }),

/***/ "../../../../date-fns/end_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "../../../../date-fns/end_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYear


/***/ }),

/***/ "../../../../date-fns/end_of_yesterday/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYesterday


/***/ }),

/***/ "../../../../date-fns/format/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__("../../../../date-fns/get_day_of_year/index.js")
var getISOWeek = __webpack_require__("../../../../date-fns/get_iso_week/index.js")
var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var isValid = __webpack_require__("../../../../date-fns/is_valid/index.js")
var enLocale = __webpack_require__("../../../../date-fns/locale/en/index.js")

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ "../../../../date-fns/get_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "../../../../date-fns/get_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "../../../../date-fns/get_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfYear = __webpack_require__("../../../../date-fns/start_of_year/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ "../../../../date-fns/get_days_in_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "../../../../date-fns/get_days_in_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isLeapYear = __webpack_require__("../../../../date-fns/is_leap_year/index.js")

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear (dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear


/***/ }),

/***/ "../../../../date-fns/get_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ "../../../../date-fns/get_iso_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

module.exports = getISODay


/***/ }),

/***/ "../../../../date-fns/get_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "../../../../date-fns/get_iso_weeks_in_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")
var addWeeks = __webpack_require__("../../../../date-fns/add_weeks/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear (dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear


/***/ }),

/***/ "../../../../date-fns/get_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "../../../../date-fns/get_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds (dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds


/***/ }),

/***/ "../../../../date-fns/get_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ "../../../../date-fns/get_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "../../../../date-fns/get_overlapping_days_in_ranges/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @category Range Helpers
 * @summary Get the number of days that overlap in two date ranges
 *
 * @description
 * Get the number of days that overlap in two date ranges
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Number} the number of days that overlap in two date ranges
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges adds 1 for each started overlapping day:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping date ranges returns 0:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> 0
 */
function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate = comparedStartTime < initialStartTime
    ? initialStartTime
    : comparedStartTime

  var overlapEndDate = comparedEndTime > initialEndTime
    ? initialEndTime
    : comparedEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}

module.exports = getOverlappingDaysInRanges


/***/ }),

/***/ "../../../../date-fns/get_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter


/***/ }),

/***/ "../../../../date-fns/get_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds


/***/ }),

/***/ "../../../../date-fns/get_time/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate) {
  var date = parse(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}

module.exports = getTime


/***/ }),

/***/ "../../../../date-fns/get_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "../../../../date-fns/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__("../../../../date-fns/add_days/index.js"),
  addHours: __webpack_require__("../../../../date-fns/add_hours/index.js"),
  addISOYears: __webpack_require__("../../../../date-fns/add_iso_years/index.js"),
  addMilliseconds: __webpack_require__("../../../../date-fns/add_milliseconds/index.js"),
  addMinutes: __webpack_require__("../../../../date-fns/add_minutes/index.js"),
  addMonths: __webpack_require__("../../../../date-fns/add_months/index.js"),
  addQuarters: __webpack_require__("../../../../date-fns/add_quarters/index.js"),
  addSeconds: __webpack_require__("../../../../date-fns/add_seconds/index.js"),
  addWeeks: __webpack_require__("../../../../date-fns/add_weeks/index.js"),
  addYears: __webpack_require__("../../../../date-fns/add_years/index.js"),
  areRangesOverlapping: __webpack_require__("../../../../date-fns/are_ranges_overlapping/index.js"),
  closestIndexTo: __webpack_require__("../../../../date-fns/closest_index_to/index.js"),
  closestTo: __webpack_require__("../../../../date-fns/closest_to/index.js"),
  compareAsc: __webpack_require__("../../../../date-fns/compare_asc/index.js"),
  compareDesc: __webpack_require__("../../../../date-fns/compare_desc/index.js"),
  differenceInCalendarDays: __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js"),
  differenceInCalendarISOWeeks: __webpack_require__("../../../../date-fns/difference_in_calendar_iso_weeks/index.js"),
  differenceInCalendarISOYears: __webpack_require__("../../../../date-fns/difference_in_calendar_iso_years/index.js"),
  differenceInCalendarMonths: __webpack_require__("../../../../date-fns/difference_in_calendar_months/index.js"),
  differenceInCalendarQuarters: __webpack_require__("../../../../date-fns/difference_in_calendar_quarters/index.js"),
  differenceInCalendarWeeks: __webpack_require__("../../../../date-fns/difference_in_calendar_weeks/index.js"),
  differenceInCalendarYears: __webpack_require__("../../../../date-fns/difference_in_calendar_years/index.js"),
  differenceInDays: __webpack_require__("../../../../date-fns/difference_in_days/index.js"),
  differenceInHours: __webpack_require__("../../../../date-fns/difference_in_hours/index.js"),
  differenceInISOYears: __webpack_require__("../../../../date-fns/difference_in_iso_years/index.js"),
  differenceInMilliseconds: __webpack_require__("../../../../date-fns/difference_in_milliseconds/index.js"),
  differenceInMinutes: __webpack_require__("../../../../date-fns/difference_in_minutes/index.js"),
  differenceInMonths: __webpack_require__("../../../../date-fns/difference_in_months/index.js"),
  differenceInQuarters: __webpack_require__("../../../../date-fns/difference_in_quarters/index.js"),
  differenceInSeconds: __webpack_require__("../../../../date-fns/difference_in_seconds/index.js"),
  differenceInWeeks: __webpack_require__("../../../../date-fns/difference_in_weeks/index.js"),
  differenceInYears: __webpack_require__("../../../../date-fns/difference_in_years/index.js"),
  distanceInWords: __webpack_require__("../../../../date-fns/distance_in_words/index.js"),
  distanceInWordsStrict: __webpack_require__("../../../../date-fns/distance_in_words_strict/index.js"),
  distanceInWordsToNow: __webpack_require__("../../../../date-fns/distance_in_words_to_now/index.js"),
  eachDay: __webpack_require__("../../../../date-fns/each_day/index.js"),
  endOfDay: __webpack_require__("../../../../date-fns/end_of_day/index.js"),
  endOfHour: __webpack_require__("../../../../date-fns/end_of_hour/index.js"),
  endOfISOWeek: __webpack_require__("../../../../date-fns/end_of_iso_week/index.js"),
  endOfISOYear: __webpack_require__("../../../../date-fns/end_of_iso_year/index.js"),
  endOfMinute: __webpack_require__("../../../../date-fns/end_of_minute/index.js"),
  endOfMonth: __webpack_require__("../../../../date-fns/end_of_month/index.js"),
  endOfQuarter: __webpack_require__("../../../../date-fns/end_of_quarter/index.js"),
  endOfSecond: __webpack_require__("../../../../date-fns/end_of_second/index.js"),
  endOfToday: __webpack_require__("../../../../date-fns/end_of_today/index.js"),
  endOfTomorrow: __webpack_require__("../../../../date-fns/end_of_tomorrow/index.js"),
  endOfWeek: __webpack_require__("../../../../date-fns/end_of_week/index.js"),
  endOfYear: __webpack_require__("../../../../date-fns/end_of_year/index.js"),
  endOfYesterday: __webpack_require__("../../../../date-fns/end_of_yesterday/index.js"),
  format: __webpack_require__("../../../../date-fns/format/index.js"),
  getDate: __webpack_require__("../../../../date-fns/get_date/index.js"),
  getDay: __webpack_require__("../../../../date-fns/get_day/index.js"),
  getDayOfYear: __webpack_require__("../../../../date-fns/get_day_of_year/index.js"),
  getDaysInMonth: __webpack_require__("../../../../date-fns/get_days_in_month/index.js"),
  getDaysInYear: __webpack_require__("../../../../date-fns/get_days_in_year/index.js"),
  getHours: __webpack_require__("../../../../date-fns/get_hours/index.js"),
  getISODay: __webpack_require__("../../../../date-fns/get_iso_day/index.js"),
  getISOWeek: __webpack_require__("../../../../date-fns/get_iso_week/index.js"),
  getISOWeeksInYear: __webpack_require__("../../../../date-fns/get_iso_weeks_in_year/index.js"),
  getISOYear: __webpack_require__("../../../../date-fns/get_iso_year/index.js"),
  getMilliseconds: __webpack_require__("../../../../date-fns/get_milliseconds/index.js"),
  getMinutes: __webpack_require__("../../../../date-fns/get_minutes/index.js"),
  getMonth: __webpack_require__("../../../../date-fns/get_month/index.js"),
  getOverlappingDaysInRanges: __webpack_require__("../../../../date-fns/get_overlapping_days_in_ranges/index.js"),
  getQuarter: __webpack_require__("../../../../date-fns/get_quarter/index.js"),
  getSeconds: __webpack_require__("../../../../date-fns/get_seconds/index.js"),
  getTime: __webpack_require__("../../../../date-fns/get_time/index.js"),
  getYear: __webpack_require__("../../../../date-fns/get_year/index.js"),
  isAfter: __webpack_require__("../../../../date-fns/is_after/index.js"),
  isBefore: __webpack_require__("../../../../date-fns/is_before/index.js"),
  isDate: __webpack_require__("../../../../date-fns/is_date/index.js"),
  isEqual: __webpack_require__("../../../../date-fns/is_equal/index.js"),
  isFirstDayOfMonth: __webpack_require__("../../../../date-fns/is_first_day_of_month/index.js"),
  isFriday: __webpack_require__("../../../../date-fns/is_friday/index.js"),
  isFuture: __webpack_require__("../../../../date-fns/is_future/index.js"),
  isLastDayOfMonth: __webpack_require__("../../../../date-fns/is_last_day_of_month/index.js"),
  isLeapYear: __webpack_require__("../../../../date-fns/is_leap_year/index.js"),
  isMonday: __webpack_require__("../../../../date-fns/is_monday/index.js"),
  isPast: __webpack_require__("../../../../date-fns/is_past/index.js"),
  isSameDay: __webpack_require__("../../../../date-fns/is_same_day/index.js"),
  isSameHour: __webpack_require__("../../../../date-fns/is_same_hour/index.js"),
  isSameISOWeek: __webpack_require__("../../../../date-fns/is_same_iso_week/index.js"),
  isSameISOYear: __webpack_require__("../../../../date-fns/is_same_iso_year/index.js"),
  isSameMinute: __webpack_require__("../../../../date-fns/is_same_minute/index.js"),
  isSameMonth: __webpack_require__("../../../../date-fns/is_same_month/index.js"),
  isSameQuarter: __webpack_require__("../../../../date-fns/is_same_quarter/index.js"),
  isSameSecond: __webpack_require__("../../../../date-fns/is_same_second/index.js"),
  isSameWeek: __webpack_require__("../../../../date-fns/is_same_week/index.js"),
  isSameYear: __webpack_require__("../../../../date-fns/is_same_year/index.js"),
  isSaturday: __webpack_require__("../../../../date-fns/is_saturday/index.js"),
  isSunday: __webpack_require__("../../../../date-fns/is_sunday/index.js"),
  isThisHour: __webpack_require__("../../../../date-fns/is_this_hour/index.js"),
  isThisISOWeek: __webpack_require__("../../../../date-fns/is_this_iso_week/index.js"),
  isThisISOYear: __webpack_require__("../../../../date-fns/is_this_iso_year/index.js"),
  isThisMinute: __webpack_require__("../../../../date-fns/is_this_minute/index.js"),
  isThisMonth: __webpack_require__("../../../../date-fns/is_this_month/index.js"),
  isThisQuarter: __webpack_require__("../../../../date-fns/is_this_quarter/index.js"),
  isThisSecond: __webpack_require__("../../../../date-fns/is_this_second/index.js"),
  isThisWeek: __webpack_require__("../../../../date-fns/is_this_week/index.js"),
  isThisYear: __webpack_require__("../../../../date-fns/is_this_year/index.js"),
  isThursday: __webpack_require__("../../../../date-fns/is_thursday/index.js"),
  isToday: __webpack_require__("../../../../date-fns/is_today/index.js"),
  isTomorrow: __webpack_require__("../../../../date-fns/is_tomorrow/index.js"),
  isTuesday: __webpack_require__("../../../../date-fns/is_tuesday/index.js"),
  isValid: __webpack_require__("../../../../date-fns/is_valid/index.js"),
  isWednesday: __webpack_require__("../../../../date-fns/is_wednesday/index.js"),
  isWeekend: __webpack_require__("../../../../date-fns/is_weekend/index.js"),
  isWithinRange: __webpack_require__("../../../../date-fns/is_within_range/index.js"),
  isYesterday: __webpack_require__("../../../../date-fns/is_yesterday/index.js"),
  lastDayOfISOWeek: __webpack_require__("../../../../date-fns/last_day_of_iso_week/index.js"),
  lastDayOfISOYear: __webpack_require__("../../../../date-fns/last_day_of_iso_year/index.js"),
  lastDayOfMonth: __webpack_require__("../../../../date-fns/last_day_of_month/index.js"),
  lastDayOfQuarter: __webpack_require__("../../../../date-fns/last_day_of_quarter/index.js"),
  lastDayOfWeek: __webpack_require__("../../../../date-fns/last_day_of_week/index.js"),
  lastDayOfYear: __webpack_require__("../../../../date-fns/last_day_of_year/index.js"),
  max: __webpack_require__("../../../../date-fns/max/index.js"),
  min: __webpack_require__("../../../../date-fns/min/index.js"),
  parse: __webpack_require__("../../../../date-fns/parse/index.js"),
  setDate: __webpack_require__("../../../../date-fns/set_date/index.js"),
  setDay: __webpack_require__("../../../../date-fns/set_day/index.js"),
  setDayOfYear: __webpack_require__("../../../../date-fns/set_day_of_year/index.js"),
  setHours: __webpack_require__("../../../../date-fns/set_hours/index.js"),
  setISODay: __webpack_require__("../../../../date-fns/set_iso_day/index.js"),
  setISOWeek: __webpack_require__("../../../../date-fns/set_iso_week/index.js"),
  setISOYear: __webpack_require__("../../../../date-fns/set_iso_year/index.js"),
  setMilliseconds: __webpack_require__("../../../../date-fns/set_milliseconds/index.js"),
  setMinutes: __webpack_require__("../../../../date-fns/set_minutes/index.js"),
  setMonth: __webpack_require__("../../../../date-fns/set_month/index.js"),
  setQuarter: __webpack_require__("../../../../date-fns/set_quarter/index.js"),
  setSeconds: __webpack_require__("../../../../date-fns/set_seconds/index.js"),
  setYear: __webpack_require__("../../../../date-fns/set_year/index.js"),
  startOfDay: __webpack_require__("../../../../date-fns/start_of_day/index.js"),
  startOfHour: __webpack_require__("../../../../date-fns/start_of_hour/index.js"),
  startOfISOWeek: __webpack_require__("../../../../date-fns/start_of_iso_week/index.js"),
  startOfISOYear: __webpack_require__("../../../../date-fns/start_of_iso_year/index.js"),
  startOfMinute: __webpack_require__("../../../../date-fns/start_of_minute/index.js"),
  startOfMonth: __webpack_require__("../../../../date-fns/start_of_month/index.js"),
  startOfQuarter: __webpack_require__("../../../../date-fns/start_of_quarter/index.js"),
  startOfSecond: __webpack_require__("../../../../date-fns/start_of_second/index.js"),
  startOfToday: __webpack_require__("../../../../date-fns/start_of_today/index.js"),
  startOfTomorrow: __webpack_require__("../../../../date-fns/start_of_tomorrow/index.js"),
  startOfWeek: __webpack_require__("../../../../date-fns/start_of_week/index.js"),
  startOfYear: __webpack_require__("../../../../date-fns/start_of_year/index.js"),
  startOfYesterday: __webpack_require__("../../../../date-fns/start_of_yesterday/index.js"),
  subDays: __webpack_require__("../../../../date-fns/sub_days/index.js"),
  subHours: __webpack_require__("../../../../date-fns/sub_hours/index.js"),
  subISOYears: __webpack_require__("../../../../date-fns/sub_iso_years/index.js"),
  subMilliseconds: __webpack_require__("../../../../date-fns/sub_milliseconds/index.js"),
  subMinutes: __webpack_require__("../../../../date-fns/sub_minutes/index.js"),
  subMonths: __webpack_require__("../../../../date-fns/sub_months/index.js"),
  subQuarters: __webpack_require__("../../../../date-fns/sub_quarters/index.js"),
  subSeconds: __webpack_require__("../../../../date-fns/sub_seconds/index.js"),
  subWeeks: __webpack_require__("../../../../date-fns/sub_weeks/index.js"),
  subYears: __webpack_require__("../../../../date-fns/sub_years/index.js")
}


/***/ }),

/***/ "../../../../date-fns/is_after/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ "../../../../date-fns/is_before/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ "../../../../date-fns/is_date/index.js":
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "../../../../date-fns/is_equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ "../../../../date-fns/is_first_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate) {
  return parse(dirtyDate).getDate() === 1
}

module.exports = isFirstDayOfMonth


/***/ }),

/***/ "../../../../date-fns/is_friday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday (dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday


/***/ }),

/***/ "../../../../date-fns/is_future/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),

/***/ "../../../../date-fns/is_last_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var endOfDay = __webpack_require__("../../../../date-fns/end_of_day/index.js")
var endOfMonth = __webpack_require__("../../../../date-fns/end_of_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth


/***/ }),

/***/ "../../../../date-fns/is_leap_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear


/***/ }),

/***/ "../../../../date-fns/is_monday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday


/***/ }),

/***/ "../../../../date-fns/is_past/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast


/***/ }),

/***/ "../../../../date-fns/is_same_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "../../../../date-fns/is_same_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfHour = __webpack_require__("../../../../date-fns/start_of_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}

module.exports = isSameHour


/***/ }),

/***/ "../../../../date-fns/is_same_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__("../../../../date-fns/is_same_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
}

module.exports = isSameISOWeek


/***/ }),

/***/ "../../../../date-fns/is_same_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}

module.exports = isSameISOYear


/***/ }),

/***/ "../../../../date-fns/is_same_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfMinute = __webpack_require__("../../../../date-fns/start_of_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}

module.exports = isSameMinute


/***/ }),

/***/ "../../../../date-fns/is_same_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "../../../../date-fns/is_same_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfQuarter = __webpack_require__("../../../../date-fns/start_of_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

module.exports = isSameQuarter


/***/ }),

/***/ "../../../../date-fns/is_same_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__("../../../../date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "../../../../date-fns/is_same_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

module.exports = isSameWeek


/***/ }),

/***/ "../../../../date-fns/is_same_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ "../../../../date-fns/is_saturday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday (dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday


/***/ }),

/***/ "../../../../date-fns/is_sunday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday (dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday


/***/ }),

/***/ "../../../../date-fns/is_this_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameHour = __webpack_require__("../../../../date-fns/is_same_hour/index.js")

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour (dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour


/***/ }),

/***/ "../../../../date-fns/is_this_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameISOWeek = __webpack_require__("../../../../date-fns/is_same_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek (dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek


/***/ }),

/***/ "../../../../date-fns/is_this_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameISOYear = __webpack_require__("../../../../date-fns/is_same_iso_year/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 *
 * @example
 * // If today is 25 September 2014,
 * // is 30 December 2013 in this ISO week-numbering year?
 * var result = isThisISOYear(new Date(2013, 11, 30))
 * //=> true
 */
function isThisISOYear (dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear


/***/ }),

/***/ "../../../../date-fns/is_this_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameMinute = __webpack_require__("../../../../date-fns/is_same_minute/index.js")

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute (dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute


/***/ }),

/***/ "../../../../date-fns/is_this_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__("../../../../date-fns/is_same_month/index.js")

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ "../../../../date-fns/is_this_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameQuarter = __webpack_require__("../../../../date-fns/is_same_quarter/index.js")

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter (dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter


/***/ }),

/***/ "../../../../date-fns/is_this_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameSecond = __webpack_require__("../../../../date-fns/is_same_second/index.js")

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond (dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond


/***/ }),

/***/ "../../../../date-fns/is_this_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__("../../../../date-fns/is_same_week/index.js")

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
 * //=> false
 */
function isThisWeek (dirtyDate, dirtyOptions) {
  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
}

module.exports = isThisWeek


/***/ }),

/***/ "../../../../date-fns/is_this_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__("../../../../date-fns/is_same_year/index.js")

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ "../../../../date-fns/is_thursday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday (dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday


/***/ }),

/***/ "../../../../date-fns/is_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ "../../../../date-fns/is_tomorrow/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow (dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow


/***/ }),

/***/ "../../../../date-fns/is_tuesday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday


/***/ }),

/***/ "../../../../date-fns/is_valid/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("../../../../date-fns/is_date/index.js")

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ "../../../../date-fns/is_wednesday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday


/***/ }),

/***/ "../../../../date-fns/is_weekend/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ "../../../../date-fns/is_within_range/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ "../../../../date-fns/is_yesterday/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday (dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
}

module.exports = isYesterday


/***/ }),

/***/ "../../../../date-fns/last_day_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var lastDayOfWeek = __webpack_require__("../../../../date-fns/last_day_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate) {
  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = lastDayOfISOWeek


/***/ }),

/***/ "../../../../date-fns/last_day_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear


/***/ }),

/***/ "../../../../date-fns/last_day_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfMonth


/***/ }),

/***/ "../../../../date-fns/last_day_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter


/***/ }),

/***/ "../../../../date-fns/last_day_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek


/***/ }),

/***/ "../../../../date-fns/last_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfYear


/***/ }),

/***/ "../../../../date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js":
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ "../../../../date-fns/locale/en/build_distance_in_words_locale/index.js":
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ "../../../../date-fns/locale/en/build_format_locale/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__("../../../../date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js")

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ "../../../../date-fns/locale/en/index.js":
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__("../../../../date-fns/locale/en/build_distance_in_words_locale/index.js")
var buildFormatLocale = __webpack_require__("../../../../date-fns/locale/en/build_format_locale/index.js")

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ "../../../../date-fns/max/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "../../../../date-fns/min/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}

module.exports = min


/***/ }),

/***/ "../../../../date-fns/parse/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__("../../../../date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "../../../../date-fns/set_date/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "../../../../date-fns/set_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = date.getDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay


/***/ }),

/***/ "../../../../date-fns/set_day_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate)
  var dayOfYear = Number(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear


/***/ }),

/***/ "../../../../date-fns/set_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "../../../../date-fns/set_iso_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")
var getISODay = __webpack_require__("../../../../date-fns/get_iso_day/index.js")

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, dirtyDay) {
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

module.exports = setISODay


/***/ }),

/***/ "../../../../date-fns/set_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getISOWeek = __webpack_require__("../../../../date-fns/get_iso_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek (dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate)
  var isoWeek = Number(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek


/***/ }),

/***/ "../../../../date-fns/set_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var startOfISOYear = __webpack_require__("../../../../date-fns/start_of_iso_year/index.js")
var differenceInCalendarDays = __webpack_require__("../../../../date-fns/difference_in_calendar_days/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, dirtyISOYear) {
  var date = parse(dirtyDate)
  var isoYear = Number(dirtyISOYear)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear


/***/ }),

/***/ "../../../../date-fns/set_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds setted
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds (dirtyDate, dirtyMilliseconds) {
  var date = parse(dirtyDate)
  var milliseconds = Number(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds


/***/ }),

/***/ "../../../../date-fns/set_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "../../../../date-fns/set_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__("../../../../date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "../../../../date-fns/set_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")
var setMonth = __webpack_require__("../../../../date-fns/set_month/index.js")

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter (dirtyDate, dirtyQuarter) {
  var date = parse(dirtyDate)
  var quarter = Number(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter


/***/ }),

/***/ "../../../../date-fns/set_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds) {
  var date = parse(dirtyDate)
  var seconds = Number(dirtySeconds)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds


/***/ }),

/***/ "../../../../date-fns/set_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "../../../../date-fns/start_of_day/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "../../../../date-fns/start_of_hour/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour


/***/ }),

/***/ "../../../../date-fns/start_of_iso_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__("../../../../date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "../../../../date-fns/start_of_iso_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__("../../../../date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__("../../../../date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "../../../../date-fns/start_of_minute/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "../../../../date-fns/start_of_month/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "../../../../date-fns/start_of_quarter/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfQuarter


/***/ }),

/***/ "../../../../date-fns/start_of_second/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "../../../../date-fns/start_of_today/index.js":
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__("../../../../date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ "../../../../date-fns/start_of_tomorrow/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfTomorrow


/***/ }),

/***/ "../../../../date-fns/start_of_week/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "../../../../date-fns/start_of_year/index.js":
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__("../../../../date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ "../../../../date-fns/start_of_yesterday/index.js":
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of yesterday.
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYesterday


/***/ }),

/***/ "../../../../date-fns/sub_days/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__("../../../../date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "../../../../date-fns/sub_hours/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addHours = __webpack_require__("../../../../date-fns/add_hours/index.js")

/**
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addHours(dirtyDate, -amount)
}

module.exports = subHours


/***/ }),

/***/ "../../../../date-fns/sub_iso_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addISOYears = __webpack_require__("../../../../date-fns/add_iso_years/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears


/***/ }),

/***/ "../../../../date-fns/sub_milliseconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__("../../../../date-fns/add_milliseconds/index.js")

/**
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds


/***/ }),

/***/ "../../../../date-fns/sub_minutes/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMinutes = __webpack_require__("../../../../date-fns/add_minutes/index.js")

/**
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @returns {Date} the new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes


/***/ }),

/***/ "../../../../date-fns/sub_months/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__("../../../../date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "../../../../date-fns/sub_quarters/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addQuarters = __webpack_require__("../../../../date-fns/add_quarters/index.js")

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters


/***/ }),

/***/ "../../../../date-fns/sub_seconds/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addSeconds = __webpack_require__("../../../../date-fns/add_seconds/index.js")

/**
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @returns {Date} the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds


/***/ }),

/***/ "../../../../date-fns/sub_weeks/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__("../../../../date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "../../../../date-fns/sub_years/index.js":
/***/ (function(module, exports, __webpack_require__) {

var addYears = __webpack_require__("../../../../date-fns/add_years/index.js")

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addYears(dirtyDate, -amount)
}

module.exports = subYears


/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map