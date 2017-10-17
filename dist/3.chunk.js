webpackJsonp([3],{

/***/ "../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Breadcrumb next to view title-->\r\n<ul class=\"breadcrumb mb-0\">\r\n    <li class=\"breadcrumb-item\"><a [routerLink]=\"'/'\">Home</a></li>\r\n    <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">Dashboard</a></li>\r\n    <li class=\"breadcrumb-item active\">\r\n        <span>Bootstrap</span>\r\n    </li>\r\n</ul>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 col-xs-12\">\r\n            <div class=\"jumbotron bg-gradient-primary text-white\">\r\n                <div class=\"container\">\r\n                    <h1>Hello, Jumbotron</h1>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>\r\n                    <p>Vivamus commodo, tortor ut interdum posuere, urna risus aliquet purus, eu fringilla dui neque quis nisi.</p>\r\n                    <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Alert Styles</div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"alert alert-success\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<a href=\"#\" class=\"alert-link\">Alert Link</a></div>\r\n                    <div class=\"alert alert-info\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<a href=\"#\" class=\"alert-link\">Alert Link</a></div>\r\n                    <div>\r\n                        <alert *ngFor=\"let alert of alerts;let i = index\" [type]=\"alert.type\" dismissible=\"true\" (close)=\"closeAlert(i)\">\r\n                            {{ alert?.msg }}\r\n                        </alert>\r\n                        <button type=\"button\" class='btn btn-primary' (click)=\"addAlert()\">Add Alert</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Progress Bar\r\n<!--                     <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"randomStacked()\">Stacked</button>\r\n                        <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"random()\">Randomize</button>\r\n                    </div>\r\n -->                </div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"lead\">Static</p>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">60%</div>\r\n                    </div>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">60%</div>\r\n                    </div>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">60%</div>\r\n                    </div>\r\n                    <p class=\"lead\">Striped</p>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar progress-bar-success progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%;\"><span class=\"sr-only\">40% Complete (success)</span></div>\r\n                    </div>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%;\"><span class=\"sr-only\">20% Complete</span></div>\r\n                    </div>\r\n                    <div class=\"progress mb-3\">\r\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%;\"><span class=\"sr-only\">45% Complete</span></div>\r\n                    </div>\r\n                    <p class=\"lead\">Stacked</p>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar progress-bar-success\" style=\"width: 35%;\"><span class=\"sr-only\">35% Complete (success)</span></div>\r\n                        <div class=\"progress-bar progress-bar-warning progress-bar-striped\" style=\"width: 20%;\"><span class=\"sr-only\">20% Complete (warning)</span></div>\r\n                        <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%;\"><span class=\"sr-only\">10% Complete (danger)</span></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Ratings</div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"lead\">Default</p>\r\n                    <rating [(ngModel)]=\"rate\" [max]=\"maxRat\" [readonly]=\"isReadonly\" (onHover)=\"hoveringOver($event)\" (onLeave)=\"resetStar()\" [titles]=\"['one','two','three']\" stateOn=\"ion-ios-star text-warning\" stateOff=\"ion-ios-star-outline\"></rating>\r\n                    <span class=\"label\" [ngClass]=\"{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}\" [ngStyle]=\"{display: (overStar && !isReadonly) ? 'inline' : 'none'}\">{{percent}}%</span>\r\n                    <pre class=\"card card-block card-header\" style=\"margin:15px 0;\">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || \"none\"}}</b></pre>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"rate = 0\" [disabled]=\"isReadonly\">Clear\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"isReadonly = ! isReadonly\">Toggle Readonly\r\n                    </button>\r\n                    <hr/>\r\n                    <p class=\"lead\">Custom icons</p>\r\n                    <div>\r\n                        <rating [(ngModel)]=\"x\" max=\"15\" stateOn=\"ion-wifi text-info\" stateOff=\"ion-wifi\"></rating>\r\n                        <p><b>(<i>Strenght:</i> {{x}})</b></p>\r\n                    </div>\r\n                    <div>\r\n                        <rating [(ngModel)]=\"y\" [ratingStates]=\"ratingStates\"></rating>\r\n                        <p><b>(<i>Things:</i> {{y}})</b></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Popovers</div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"lead\">Positional</p>\r\n                    <div class=\"mb-4\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\" placement=\"left\">\r\n                            Popover on left\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" placement=\"top\">\r\n                            Popover on top\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\" placement=\"bottom\">\r\n                            Popover on bottom\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\" placement=\"right\">\r\n                            Popover on right\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p class=\"lead\">Dismiss on click</p>\r\n                            <button type=\"button\" class=\"btn btn-info\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Dismissible popover\" triggers=\"focus\">\r\n                                Dismissible popover\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <p class=\"lead\">Append to body</p>\r\n                            <button type=\"button\" class=\"btn btn-info\" popover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n                                Popover appended to body\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Carousel</div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"mb-4\">\r\n                        <carousel [interval]=\"myInterval\" [noWrap]=\"false\">\r\n                            <slide *ngFor=\"let slidez of slides; let index=index\" [active]=\"slidez.active\" class=\"fw\">\r\n                                <img [src]=\"slidez.image\" class=\"img-responsive fw\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h4>Slide {{index}}</h4>\r\n                                    <p>{{slidez.text}}</p>\r\n                                </div>\r\n                            </slide>\r\n                        </carousel>\r\n                    </div>\r\n                    <div>\r\n                        <p>Interval, in milliseconds:</p>\r\n                        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"myInterval\" />\r\n                        <p>Add a slide with a random image</p>\r\n                        <button class=\"btn btn-info\" type=\"button\" (click)=\"addSlide()\">Add Slide</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Tooltips</div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"form-group\">\r\n                        <label>Dynamic Tooltip Text</label>\r\n                        <input type=\"text\" [(ngModel)]=\"dynamicTooltipText\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Dynamic Tooltip Popup Text</label>\r\n                        <input type=\"text\" [(ngModel)]=\"dynamicTooltip\" class=\"form-control\">\r\n                    </div>\r\n                    <p>\r\n                        Pellentesque <a href=\"#\" [tooltip]=\"dynamicTooltip\">{{dynamicTooltipText}}</a>, sit amet venenatis urna cursus eget nunc scelerisque viverra mauris, in aliquam. Tincidunt lobortis feugiat vivamus at\r\n                        <a href=\"#\" placement=\"left\" tooltip=\"On the Left!\">left</a> eget arcu dictum varius duis at consectetur lorem. Vitae elementum curabitur\r\n                        <a href=\"#\" placement=\"right\" tooltip=\"On the Right!\">right</a> nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas\r\n                        <a href=\"#\" placement=\"bottom\" tooltip=\"On the Bottom!\">bottom</a> pharetra convallis posuere morbi leo urna,\r\n                        <a href=\"#\" [tooltipAnimation]=\"false\" tooltip=\"I don't fade. :-(\">fading</a> at elementum eu, facilisis sed odio morbi quis commodo odio. In cursus\r\n                        <a href=\"#\" tooltipPopupDelay='1000' tooltip='appears with delay'>delayed</a> turpis massa tincidunt dui ut. nunc sed velit dignissim sodales ut eu sem integer vitae. Turpis egestas\r\n                    </p>\r\n                    <p>\r\n                        I can even contain HTML. <a href=\"#\" [tooltip]=\"htmlTooltip\" (tooltipStateChanged)=\"tooltipStateChanged($event)\">Check me out!</a>\r\n                    </p>\r\n                    <ng-template #toolTipTemplate let-model=\"model\">\r\n                        <h4>Tool tip custom content defined inside a template</h4>\r\n                        <h5>With context binding: {{model.text}}</h5>\r\n                    </ng-template>\r\n                    <form role=\"form\">\r\n                        <div class=\"form-group\">\r\n                            <label>Or use custom triggers, like focus: </label>\r\n                            <input type=\"text\" name=\"clickMe\" value=\"Click me!\" tooltip=\"See? Now click away...\" triggers=\"focus\" placement=\"right\" class=\"form-control\" />\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\" id=\"cardDemo7\">\r\n                <div class=\"card-header\">Default Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START Card-->\r\n            <div class=\"card mb-3 card-primary card-inverse\" id=\"cardDemo8\">\r\n                <div class=\"card-header\">Primary Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START Card-->\r\n            <div class=\"card mb-3 card-success card-inverse\" id=\"cardDemo9\">\r\n                <div class=\"card-header\">Success Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START Card-->\r\n            <div class=\"card mb-3 card-info card-inverse\" id=\"cardDemo10\">\r\n                <div class=\"card-header\">Info Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START Card-->\r\n            <div class=\"card mb-3 card-warning card-inverse\" id=\"cardDemo11\">\r\n                <div class=\"card-header\">Warning Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n        <div class=\"col-xl-4 col-xs-12\">\r\n            <!-- START Card-->\r\n            <div class=\"card mb-3 card-danger card-inverse\" id=\"cardDemo12\">\r\n                <div class=\"card-header\">Danger Card</div>\r\n                <div class=\"card-block\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>\r\n                </div>\r\n                <div class=\"card-footer\">Card Footer</div>\r\n            </div>\r\n            <!-- END Card-->\r\n        </div>\r\n    </div>\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Collapsible Accordion</div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\" [(ngModel)]=\"oneAtATime\"> Open only one at a time\r\n                        </label>\r\n                    </div>\r\n                    <accordion closeOthers=\"oneAtATime\" class=\"card-accordion mt-2\">\r\n                        <accordion-group [panelClass]=\"'mt-2'\">\r\n                            <div accordion-heading>Accordion Heading #1</div>\r\n                            <p>In vitae porttitor eros. Vivamus et urna magna. Mauris a velit id neque dignissim congue. Phasellus ut neque sem, ac vestibulum tellus. Integer eu diam neque, quis euismod turpis.</p>\r\n                        </accordion-group>\r\n                        <accordion-group [panelClass]=\"'mt-2'\">\r\n                            <div accordion-heading>Accordion Heading #2</div>\r\n                            <p>In vitae porttitor eros. Vivamus et urna magna. Sed euismod massa quis diam viverra eu consectetur elit imperdiet. Aenean rhoncus, est vel vestibulum tristique, ante lectus elementum augue, eu dictum turpis dui ut ipsum.</p>\r\n                        </accordion-group>\r\n                        <accordion-group [panelClass]=\"'mt-2'\">\r\n                            <div accordion-heading>Accordion Heading #3</div>\r\n                            <p>In vitae porttitor eros. Vivamus et urna magna. In consequat massa eget dui ultrices sit amet auctor libero molestie. Vestibulum nec viverra libero.</p>\r\n                        </accordion-group>\r\n                    </accordion>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <!-- START row-->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Basic Tabs</div>\r\n                <div class=\"card-block\">\r\n                    <tabset class=\"mb-4\">\r\n                        <tab heading=\"Home\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul qui officia deserunt mollit anim id est laborum.</tab>\r\n                        <tab heading=\"Profile\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat , sunt in culpa qui officia deserunt mollit anim id est laborum.</tab>\r\n                        <tab heading=\"Messages\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</tab>\r\n                        <tab heading=\"Settings\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</tab>\r\n                    </tabset>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <!-- START panel-->\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Pill Tabs</div>\r\n                <div class=\"card-block\">\r\n                    <tabset type=\"pills\" class=\"mb-4\">\r\n                        <tab heading=\"Home\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul qui officia deserunt mollit anim id est laborum.</tab>\r\n                        <tab heading=\"Profile\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat , sunt in culpa qui officia deserunt mollit anim id est laborum.</tab>\r\n                        <tab heading=\"Messages\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</tab>\r\n                        <tab heading=\"Settings\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</tab>\r\n                    </tabset>\r\n                </div>\r\n            </div>\r\n            <!-- END panel-->\r\n        </div>\r\n    </div>\r\n    <!-- END row-->\r\n    <!-- START panel-->\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Pagination</div>\r\n        <div class=\"card-block h-scroll\">\r\n            <div class=\"text-right\">\r\n                <button class=\"btn btn-info\" (click)=\"setPage(3)\">Set current page to: 3</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <p class=\"lead\">Standard and sizing</p>\r\n                <nav class=\"mx-auto\">\r\n                    <pagination class=\"justify-content-center\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n                </nav>\r\n                <nav class=\"mx-auto\">\r\n                    <pagination class=\"justify-content-center\" [directionLinks]=\"false\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (numPages)=\"smallnumPages\"></pagination>\r\n                </nav>\r\n                <pre>The selected page no: {{currentPage}}</pre>\r\n                <p>Pager</p>\r\n                <pager [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn\" itemsPerPage=\"10\"></pager>\r\n                <hr/>\r\n                <p>Limit the maximum visible buttons</p>\r\n                <nav class=\"mx-auto\">\r\n                    <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm justify-content-center\" [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\r\n                </nav>\r\n                <pre>Page: {{bigCurrentPage}} / {{numPages}}</pre>\r\n                <p class=\"lead\">Rounded buttons</p>\r\n                <nav class=\"mx-auto\">\r\n                    <pagination class=\"pagination-rounded justify-content-center\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"<\" nextText=\">\"></pagination>\r\n                </nav>\r\n                <nav class=\"mx-auto\">\r\n                    <pagination class=\"pagination-lg pagination-rounded justify-content-center\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"<\" nextText=\">\"></pagination>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END panel-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-item /deep/ .item {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapuiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BootstrapuiComponent = (function () {
    function BootstrapuiComponent(pt) {
        var _this = this;
        // ALERTs
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        // PROGRESSBAR
        this.max = 200;
        this.stacked = [];
        // TOOLTIPS
        this.dynamicTooltip = 'Hello, World!';
        this.dynamicTooltipText = 'dynamic';
        this.htmlTooltip = 'I\'ve been made <b>bold</b>!';
        this.tooltipModel = { text: 'foo', index: 1 };
        // RATINGS
        this.x = 5;
        this.y = 2;
        this.maxRat = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [{
                stateOn: 'icon-2x ion-android-radio-button-on',
                stateOff: 'icon-2x ion-android-radio-button-off'
            }, {
                stateOn: 'icon-2x ion-android-star',
                stateOff: 'icon-2x ion-android-star-outline'
            }, {
                stateOn: 'icon-2x ion-android-folder',
                stateOff: 'icon-2x ion-android-folder-open'
            }];
        // CAROUSEL PROPS
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
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
        // pagination/pager
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        // buttons
        this.singleModel = true;
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        pt.setTitle('Bootstrap');
        // init carousel
        this.addSlide(1);
        this.addSlide(2);
        this.addSlide(3);
        // progressbar
        this.random();
        this.randomStacked();
        // init typeahead
        this.dataSource = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        }).mergeMap(function (token) { return _this.getStatesAsObservable(token); });
    }
    // pagination/pager
    BootstrapuiComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BootstrapuiComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    // CAROUSEL METHODS
    BootstrapuiComponent.prototype.addSlide = function (id) {
        if (id === void 0) { id = 5; }
        this.slides.push({
            image: 'assets/img/pic' + id + '.jpg',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 2] + ' ' +
                ['Trees', 'Mountains', 'Clouds', 'Space'][this.slides.length % 2]
        });
    };
    // TYPEAHEAD METHODS
    BootstrapuiComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.statesComplex.filter(function (state) {
            return query.test(state.name);
        }));
    };
    BootstrapuiComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BootstrapuiComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BootstrapuiComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.item);
    };
    // ALERT METHOD
    BootstrapuiComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BootstrapuiComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    // PROGRESSBAR METHODS
    BootstrapuiComponent.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    BootstrapuiComponent.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    // TOOLTIPS METHODS
    BootstrapuiComponent.prototype.tooltipStateChanged = function (state) {
        console.log("Tooltip is open: " + state);
    };
    // RATINGS METHODS
    BootstrapuiComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.maxRat);
    };
    ;
    BootstrapuiComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BootstrapuiComponent.prototype.ngOnInit = function () {
    };
    return BootstrapuiComponent;
}());
BootstrapuiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bootstrapui',
        template: __webpack_require__("../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], BootstrapuiComponent);

var _a;
//# sourceMappingURL=bootstrapui.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-lg\">\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button colors</div><small>Standard Bootstrap buttons and color variants</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"mb-4 btn btn-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"mb-4 btn btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"mb-4 btn btn-success\" type=\"button\">Success</button>\r\n                <button class=\"mb-4 btn btn-info\" type=\"button\">Info</button>\r\n                <button class=\"mb-4 btn btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"mb-4 btn btn-danger\" type=\"button\">Danger</button>\r\n                <br>\r\n                <br><a class=\"btn btn-link\" href=\"#\">Button Link</a>\r\n                <button class=\"btn btn-secondary mr-3\" type=\"button\">button tag</button><a class=\"btn btn-secondary\" href=\"#\">anchor tag</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Gradient Button colors</div><small>Add class <code>.btn-gradient</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-success\" type=\"button\">Success</button>\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-info\" type=\"button\">Info</button>\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"mb-4 btn btn-lg btn-gradient wd-sm btn-danger\" type=\"button\">Danger</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Flat</div><small>Add class <code>.btn-flat</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-flat btn-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"btn btn-flat btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-flat btn-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-flat btn-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-flat btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-flat btn-danger\" type=\"button\">Danger</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Outline</div><small>Add class <code>.btn-outline-secondary</code><code>.btn-outline-primary</code><code>.btn-outline-success</code><code>.btn-outline-info</code><code>.btn-outline-warning</code><code>.btn-outline-danger</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"btn btn-outline-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-outline-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-outline-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-outline-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-outline-danger\" type=\"button\">Danger</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Circle</div><small>Add class <code>.btn-circle</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-circle btn-secondary\" type=\"button\">D</button>\r\n                <button class=\"btn btn-circle btn-primary\" type=\"button\">P</button>\r\n                <button class=\"btn btn-circle btn-success\" type=\"button\">S</button>\r\n                <button class=\"btn btn-circle btn-info\" type=\"button\">I</button>\r\n                <button class=\"btn btn-circle btn-warning\" type=\"button\">W</button>\r\n                <button class=\"btn btn-circle btn-danger\" type=\"button\">D</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Labeled</div><small>Special buttons supporting icons labels</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <!-- Success button with label-->\r\n                <button class=\"btn btn-labeled btn-success\" type=\"button\"><span class=\"btn-label\"><i class=\"ion-checkmark-round\"></i></span>Success</button>\r\n                <!-- Danger button with label-->\r\n                <button class=\"btn btn-labeled btn-danger\" type=\"button\"><span class=\"btn-label\"><i class=\"ion-close-round\"></i></span>Danger</button>\r\n                <!-- Info button with label-->\r\n                <button class=\"btn btn-labeled btn-info\" type=\"button\"><span class=\"btn-label\"><i class=\"ion-alert\"></i></span>Info</button>\r\n                <!-- Warning button with label-->\r\n                <button class=\"btn btn-labeled btn-warning\" type=\"button\"><span class=\"btn-label\"><i class=\"ion-nuclear\"></i></span>Warning</button>\r\n                <br>\r\n                <br>\r\n                <!-- Standard button with label-->\r\n                <button class=\"btn btn-labeled btn-secondary\" type=\"button\"><span class=\"btn-label\"><i class=\"ion-arrow-left-c\"></i></span>Left</button>\r\n                <!-- Standard button with label on the right side-->\r\n                <button class=\"btn btn-labeled btn-secondary\" type=\"button\">Right<span class=\"btn-label btn-label-right\"><i class=\"ion-arrow-right-c\"></i></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button sizing</div><small>Add class <code>.btn-xl, .btn-lg, .btn-sm</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <p>\r\n                        <button class=\"btn btn-primary btn-xl\" type=\"button\">X-Large button</button>\r\n                        <button class=\"btn btn-secondary btn-xl\" type=\"button\">X-Large button</button>\r\n                    </p>\r\n                    <p>\r\n                        <button class=\"btn btn-primary btn-lg\" type=\"button\">Large button</button>\r\n                        <button class=\"btn btn-secondary btn-lg\" type=\"button\">Large button</button>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <p>\r\n                        <button class=\"btn btn-primary\" type=\"button\">Normal button</button>\r\n                        <button class=\"btn btn-secondary\" type=\"button\">Normal button</button>\r\n                    </p>\r\n                    <p>\r\n                        <button class=\"btn btn-primary btn-sm\" type=\"button\">Small button</button>\r\n                        <button class=\"btn btn-secondary btn-sm\" type=\"button\">Small button</button>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button group</div><small>Organize buttons in groups</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center mb-4\">\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\">Left</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">Middle</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">Right</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\">1</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">2</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">3</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">4</button>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\">5</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">6</button>\r\n                    <button class=\"btn btn-secondary\" type=\"button\">7</button>\r\n                </div>\r\n                <div class=\"btn-group\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\">8</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Pills</div><small>Add class <code>.btn-pill-left</code>or<code>.btn-pill-right</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <p>Pill left</p>\r\n                <p>\r\n                    <button class=\"btn btn-pill-left btn-secondary\" type=\"button\">Secondary</button>\r\n                    <button class=\"btn btn-pill-left btn-primary\" type=\"button\">Primary</button>\r\n                    <button class=\"btn btn-pill-left btn-success\" type=\"button\">Success</button>\r\n                    <button class=\"btn btn-pill-left btn-info\" type=\"button\">Info</button>\r\n                    <button class=\"btn btn-pill-left btn-warning\" type=\"button\">Warning</button>\r\n                    <button class=\"btn btn-pill-left btn-danger\" type=\"button\">Danger</button>\r\n                </p>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <p>Pill right</p>\r\n                <p>\r\n                    <button class=\"btn btn-pill-right btn-secondary\" type=\"button\">Secondary</button>\r\n                    <button class=\"btn btn-pill-right btn-primary\" type=\"button\">Primary</button>\r\n                    <button class=\"btn btn-pill-right btn-success\" type=\"button\">Success</button>\r\n                    <button class=\"btn btn-pill-right btn-info\" type=\"button\">Info</button>\r\n                    <button class=\"btn btn-pill-right btn-warning\" type=\"button\">Warning</button>\r\n                    <button class=\"btn btn-pill-right btn-danger\" type=\"button\">Danger</button>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Oval</div><small>Add class <code>.btn-oval</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-oval btn-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"btn btn-oval btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-oval btn-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-oval btn-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-oval btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-oval btn-danger\" type=\"button\">Danger</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button Square</div><small>Add class <code>.btn-square</code>to standard Bootstrap buttons</small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-square btn-secondary\" type=\"button\">Secondary</button>\r\n                <button class=\"btn btn-square btn-primary\" type=\"button\">Primary</button>\r\n                <button class=\"btn btn-square btn-success\" type=\"button\">Success</button>\r\n                <button class=\"btn btn-square btn-info\" type=\"button\">Info</button>\r\n                <button class=\"btn btn-square btn-warning\" type=\"button\">Warning</button>\r\n                <button class=\"btn btn-square btn-danger\" type=\"button\">Danger</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Button dropdown</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-primary\" type=\"button\" data-toggle=\"dropdown\">primary<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-secondary\" type=\"button\" data-toggle=\"dropdown\">secondary<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-success\" type=\"button\" data-toggle=\"dropdown\">success<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-info\" type=\"button\" data-toggle=\"dropdown\">info<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-warning\" type=\"button\" data-toggle=\"dropdown\">warning<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"dropdown btn-group mb-4\">\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-danger\" type=\"button\" data-toggle=\"dropdown\">danger<span class=\"caret\"></span>\r\n                    </button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n    <!-- START card-->\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Split button dropdown</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"text-center\">\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-primary\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-primary\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">primary</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-secondary\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">secondary</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-success\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-success\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">success</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-info\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-info\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">info</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-warning\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-warning\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">warning</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n                <!-- START button group-->\r\n                <div dropdown class=\"btn-group dropdown\">\r\n                    <button class=\"btn btn-danger\" type=\"button\">Action</button>\r\n                    <button dropdownToggle class=\"btn dropdown-toggle btn-danger\" type=\"button\" data-toggle=\"dropdown\"><span class=\"caret\"></span><span class=\"sr-only\">danger</span></button>\r\n                    <div *dropdownMenu class=\"dropdown-menu\" role=\"menu\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                    </div>\r\n                </div>\r\n                <!-- END button group-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- END card-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = (function () {
    function ButtonsComponent(pt) {
        pt.setTitle('Buttons');
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buttons',
        template: __webpack_require__("../../../../../src/app/routes/elements/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/buttons/buttons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], ButtonsComponent);

var _a;
//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/colors/colors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-lg\">\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Default Bootstrap Colors</div>\r\n        </div>\r\n        <div class=\"cardbox-body text-center\">\r\n            <div class=\"d-flex justify-content-center flex-wrap\">\r\n                <div class=\"card bg-primary wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block\"><strong>Primary</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-primary</small></div>\r\n                </div>\r\n                <div class=\"card bg-info wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block\"><strong>Info</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-info</small></div>\r\n                </div>\r\n                <div class=\"card bg-success wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block\"><strong>Success</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-success</small></div>\r\n                </div>\r\n                <div class=\"card bg-warning wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block\"><strong>Warning</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-warning</small></div>\r\n                </div>\r\n                <div class=\"card bg-danger wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block\"><strong>Danger</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-danger</small></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Gradient Backgrounds</div>\r\n        </div>\r\n        <div class=\"cardbox-body text-center\">\r\n            <div class=\"d-flex justify-content-center flex-wrap\">\r\n                <div class=\"card bg-gradient-primary wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block text-white\"><strong>Primary</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-gradient-primary</small></div>\r\n                </div>\r\n                <div class=\"card bg-gradient-info wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block text-white\"><strong>Info</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-gradient-info</small></div>\r\n                </div>\r\n                <div class=\"card bg-gradient-success wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block text-white\"><strong>Success</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-gradient-success</small></div>\r\n                </div>\r\n                <div class=\"card bg-gradient-warning wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block text-white\"><strong>Warning</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-gradient-warning</small></div>\r\n                </div>\r\n                <div class=\"card bg-gradient-danger wd-sd mr-1 mb-1 b-0\">\r\n                    <div class=\"card-block text-white\"><strong>Danger</strong></div>\r\n                    <div class=\"card-footer bg-transparent\"><small class=\"text-white\">.bg-gradient-danger</small></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Material Design Palette</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-red-500\">\r\n                        <div class=\"mb-4\">Red</div>.bg-red-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-red-50\">.bg-red-50</div>\r\n                    <div class=\"p-3 bg-red-100\">.bg-red-100</div>\r\n                    <div class=\"p-3 bg-red-200\">.bg-red-200</div>\r\n                    <div class=\"p-3 bg-red-300\">.bg-red-300</div>\r\n                    <div class=\"p-3 bg-red-400\">.bg-red-400</div>\r\n                    <div class=\"p-3 bg-red-500\">.bg-red-500</div>\r\n                    <div class=\"p-3 bg-red-600\">.bg-red-600</div>\r\n                    <div class=\"p-3 bg-red-700\">.bg-red-700</div>\r\n                    <div class=\"p-3 bg-red-800\">.bg-red-800</div>\r\n                    <div class=\"p-3 bg-red-900\">.bg-red-900</div>\r\n                    <div class=\"p-3 bg-red-a100\">.bg-red-a100</div>\r\n                    <div class=\"p-3 bg-red-a200\">.bg-red-a200</div>\r\n                    <div class=\"p-3 bg-red-a400\">.bg-red-a400</div>\r\n                    <div class=\"p-3 bg-red-a700\">.bg-red-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-pink-500\">\r\n                        <div class=\"mb-4\">Pink</div>.bg-pink-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-pink-50\">.bg-pink-50</div>\r\n                    <div class=\"p-3 bg-pink-100\">.bg-pink-100</div>\r\n                    <div class=\"p-3 bg-pink-200\">.bg-pink-200</div>\r\n                    <div class=\"p-3 bg-pink-300\">.bg-pink-300</div>\r\n                    <div class=\"p-3 bg-pink-400\">.bg-pink-400</div>\r\n                    <div class=\"p-3 bg-pink-500\">.bg-pink-500</div>\r\n                    <div class=\"p-3 bg-pink-600\">.bg-pink-600</div>\r\n                    <div class=\"p-3 bg-pink-700\">.bg-pink-700</div>\r\n                    <div class=\"p-3 bg-pink-800\">.bg-pink-800</div>\r\n                    <div class=\"p-3 bg-pink-900\">.bg-pink-900</div>\r\n                    <div class=\"p-3 bg-pink-a100\">.bg-pink-a100</div>\r\n                    <div class=\"p-3 bg-pink-a200\">.bg-pink-a200</div>\r\n                    <div class=\"p-3 bg-pink-a400\">.bg-pink-a400</div>\r\n                    <div class=\"p-3 bg-pink-a700\">.bg-pink-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-purple-500\">\r\n                        <div class=\"mb-4\">Purple</div>.bg-purple-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-purple-50\">.bg-purple-50</div>\r\n                    <div class=\"p-3 bg-purple-100\">.bg-purple-100</div>\r\n                    <div class=\"p-3 bg-purple-200\">.bg-purple-200</div>\r\n                    <div class=\"p-3 bg-purple-300\">.bg-purple-300</div>\r\n                    <div class=\"p-3 bg-purple-400\">.bg-purple-400</div>\r\n                    <div class=\"p-3 bg-purple-500\">.bg-purple-500</div>\r\n                    <div class=\"p-3 bg-purple-600\">.bg-purple-600</div>\r\n                    <div class=\"p-3 bg-purple-700\">.bg-purple-700</div>\r\n                    <div class=\"p-3 bg-purple-800\">.bg-purple-800</div>\r\n                    <div class=\"p-3 bg-purple-900\">.bg-purple-900</div>\r\n                    <div class=\"p-3 bg-purple-a100\">.bg-purple-a100</div>\r\n                    <div class=\"p-3 bg-purple-a200\">.bg-purple-a200</div>\r\n                    <div class=\"p-3 bg-purple-a400\">.bg-purple-a400</div>\r\n                    <div class=\"p-3 bg-purple-a700\">.bg-purple-a700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-deep-purple-500\">\r\n                        <div class=\"mb-4\">Deep-purple</div>.bg-deep-purple-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-deep-purple-50\">.bg-deep-purple-50</div>\r\n                    <div class=\"p-3 bg-deep-purple-100\">.bg-deep-purple-100</div>\r\n                    <div class=\"p-3 bg-deep-purple-200\">.bg-deep-purple-200</div>\r\n                    <div class=\"p-3 bg-deep-purple-300\">.bg-deep-purple-300</div>\r\n                    <div class=\"p-3 bg-deep-purple-400\">.bg-deep-purple-400</div>\r\n                    <div class=\"p-3 bg-deep-purple-500\">.bg-deep-purple-500</div>\r\n                    <div class=\"p-3 bg-deep-purple-600\">.bg-deep-purple-600</div>\r\n                    <div class=\"p-3 bg-deep-purple-700\">.bg-deep-purple-700</div>\r\n                    <div class=\"p-3 bg-deep-purple-800\">.bg-deep-purple-800</div>\r\n                    <div class=\"p-3 bg-deep-purple-900\">.bg-deep-purple-900</div>\r\n                    <div class=\"p-3 bg-deep-purple-a100\">.bg-deep-purple-a100</div>\r\n                    <div class=\"p-3 bg-deep-purple-a200\">.bg-deep-purple-a200</div>\r\n                    <div class=\"p-3 bg-deep-purple-a400\">.bg-deep-purple-a400</div>\r\n                    <div class=\"p-3 bg-deep-purple-a700\">.bg-deep-purple-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-indigo-500\">\r\n                        <div class=\"mb-4\">Indigo</div>.bg-indigo-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-indigo-50\">.bg-indigo-50</div>\r\n                    <div class=\"p-3 bg-indigo-100\">.bg-indigo-100</div>\r\n                    <div class=\"p-3 bg-indigo-200\">.bg-indigo-200</div>\r\n                    <div class=\"p-3 bg-indigo-300\">.bg-indigo-300</div>\r\n                    <div class=\"p-3 bg-indigo-400\">.bg-indigo-400</div>\r\n                    <div class=\"p-3 bg-indigo-500\">.bg-indigo-500</div>\r\n                    <div class=\"p-3 bg-indigo-600\">.bg-indigo-600</div>\r\n                    <div class=\"p-3 bg-indigo-700\">.bg-indigo-700</div>\r\n                    <div class=\"p-3 bg-indigo-800\">.bg-indigo-800</div>\r\n                    <div class=\"p-3 bg-indigo-900\">.bg-indigo-900</div>\r\n                    <div class=\"p-3 bg-indigo-a100\">.bg-indigo-a100</div>\r\n                    <div class=\"p-3 bg-indigo-a200\">.bg-indigo-a200</div>\r\n                    <div class=\"p-3 bg-indigo-a400\">.bg-indigo-a400</div>\r\n                    <div class=\"p-3 bg-indigo-a700\">.bg-indigo-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-blue-500\">\r\n                        <div class=\"mb-4\">Blue</div>.bg-blue-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-blue-50\">.bg-blue-50</div>\r\n                    <div class=\"p-3 bg-blue-100\">.bg-blue-100</div>\r\n                    <div class=\"p-3 bg-blue-200\">.bg-blue-200</div>\r\n                    <div class=\"p-3 bg-blue-300\">.bg-blue-300</div>\r\n                    <div class=\"p-3 bg-blue-400\">.bg-blue-400</div>\r\n                    <div class=\"p-3 bg-blue-500\">.bg-blue-500</div>\r\n                    <div class=\"p-3 bg-blue-600\">.bg-blue-600</div>\r\n                    <div class=\"p-3 bg-blue-700\">.bg-blue-700</div>\r\n                    <div class=\"p-3 bg-blue-800\">.bg-blue-800</div>\r\n                    <div class=\"p-3 bg-blue-900\">.bg-blue-900</div>\r\n                    <div class=\"p-3 bg-blue-a100\">.bg-blue-a100</div>\r\n                    <div class=\"p-3 bg-blue-a200\">.bg-blue-a200</div>\r\n                    <div class=\"p-3 bg-blue-a400\">.bg-blue-a400</div>\r\n                    <div class=\"p-3 bg-blue-a700\">.bg-blue-a700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-light-blue-500\">\r\n                        <div class=\"mb-4\">Light-blue</div>.bg-light-blue-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-light-blue-50\">.bg-light-blue-50</div>\r\n                    <div class=\"p-3 bg-light-blue-100\">.bg-light-blue-100</div>\r\n                    <div class=\"p-3 bg-light-blue-200\">.bg-light-blue-200</div>\r\n                    <div class=\"p-3 bg-light-blue-300\">.bg-light-blue-300</div>\r\n                    <div class=\"p-3 bg-light-blue-400\">.bg-light-blue-400</div>\r\n                    <div class=\"p-3 bg-light-blue-500\">.bg-light-blue-500</div>\r\n                    <div class=\"p-3 bg-light-blue-600\">.bg-light-blue-600</div>\r\n                    <div class=\"p-3 bg-light-blue-700\">.bg-light-blue-700</div>\r\n                    <div class=\"p-3 bg-light-blue-800\">.bg-light-blue-800</div>\r\n                    <div class=\"p-3 bg-light-blue-900\">.bg-light-blue-900</div>\r\n                    <div class=\"p-3 bg-light-blue-a100\">.bg-light-blue-a100</div>\r\n                    <div class=\"p-3 bg-light-blue-a200\">.bg-light-blue-a200</div>\r\n                    <div class=\"p-3 bg-light-blue-a400\">.bg-light-blue-a400</div>\r\n                    <div class=\"p-3 bg-light-blue-a700\">.bg-light-blue-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-cyan-500\">\r\n                        <div class=\"mb-4\">Cyan</div>.bg-cyan-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-cyan-50\">.bg-cyan-50</div>\r\n                    <div class=\"p-3 bg-cyan-100\">.bg-cyan-100</div>\r\n                    <div class=\"p-3 bg-cyan-200\">.bg-cyan-200</div>\r\n                    <div class=\"p-3 bg-cyan-300\">.bg-cyan-300</div>\r\n                    <div class=\"p-3 bg-cyan-400\">.bg-cyan-400</div>\r\n                    <div class=\"p-3 bg-cyan-500\">.bg-cyan-500</div>\r\n                    <div class=\"p-3 bg-cyan-600\">.bg-cyan-600</div>\r\n                    <div class=\"p-3 bg-cyan-700\">.bg-cyan-700</div>\r\n                    <div class=\"p-3 bg-cyan-800\">.bg-cyan-800</div>\r\n                    <div class=\"p-3 bg-cyan-900\">.bg-cyan-900</div>\r\n                    <div class=\"p-3 bg-cyan-a100\">.bg-cyan-a100</div>\r\n                    <div class=\"p-3 bg-cyan-a200\">.bg-cyan-a200</div>\r\n                    <div class=\"p-3 bg-cyan-a400\">.bg-cyan-a400</div>\r\n                    <div class=\"p-3 bg-cyan-a700\">.bg-cyan-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-teal-500\">\r\n                        <div class=\"mb-4\">Teal</div>.bg-teal-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-teal-50\">.bg-teal-50</div>\r\n                    <div class=\"p-3 bg-teal-100\">.bg-teal-100</div>\r\n                    <div class=\"p-3 bg-teal-200\">.bg-teal-200</div>\r\n                    <div class=\"p-3 bg-teal-300\">.bg-teal-300</div>\r\n                    <div class=\"p-3 bg-teal-400\">.bg-teal-400</div>\r\n                    <div class=\"p-3 bg-teal-500\">.bg-teal-500</div>\r\n                    <div class=\"p-3 bg-teal-600\">.bg-teal-600</div>\r\n                    <div class=\"p-3 bg-teal-700\">.bg-teal-700</div>\r\n                    <div class=\"p-3 bg-teal-800\">.bg-teal-800</div>\r\n                    <div class=\"p-3 bg-teal-900\">.bg-teal-900</div>\r\n                    <div class=\"p-3 bg-teal-a100\">.bg-teal-a100</div>\r\n                    <div class=\"p-3 bg-teal-a200\">.bg-teal-a200</div>\r\n                    <div class=\"p-3 bg-teal-a400\">.bg-teal-a400</div>\r\n                    <div class=\"p-3 bg-teal-a700\">.bg-teal-a700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-green-500\">\r\n                        <div class=\"mb-4\">Green</div>.bg-green-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-green-50\">.bg-green-50</div>\r\n                    <div class=\"p-3 bg-green-100\">.bg-green-100</div>\r\n                    <div class=\"p-3 bg-green-200\">.bg-green-200</div>\r\n                    <div class=\"p-3 bg-green-300\">.bg-green-300</div>\r\n                    <div class=\"p-3 bg-green-400\">.bg-green-400</div>\r\n                    <div class=\"p-3 bg-green-500\">.bg-green-500</div>\r\n                    <div class=\"p-3 bg-green-600\">.bg-green-600</div>\r\n                    <div class=\"p-3 bg-green-700\">.bg-green-700</div>\r\n                    <div class=\"p-3 bg-green-800\">.bg-green-800</div>\r\n                    <div class=\"p-3 bg-green-900\">.bg-green-900</div>\r\n                    <div class=\"p-3 bg-green-a100\">.bg-green-a100</div>\r\n                    <div class=\"p-3 bg-green-a200\">.bg-green-a200</div>\r\n                    <div class=\"p-3 bg-green-a400\">.bg-green-a400</div>\r\n                    <div class=\"p-3 bg-green-a700\">.bg-green-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-light-green-500\">\r\n                        <div class=\"mb-4\">Light-green</div>.bg-light-green-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-light-green-50\">.bg-light-green-50</div>\r\n                    <div class=\"p-3 bg-light-green-100\">.bg-light-green-100</div>\r\n                    <div class=\"p-3 bg-light-green-200\">.bg-light-green-200</div>\r\n                    <div class=\"p-3 bg-light-green-300\">.bg-light-green-300</div>\r\n                    <div class=\"p-3 bg-light-green-400\">.bg-light-green-400</div>\r\n                    <div class=\"p-3 bg-light-green-500\">.bg-light-green-500</div>\r\n                    <div class=\"p-3 bg-light-green-600\">.bg-light-green-600</div>\r\n                    <div class=\"p-3 bg-light-green-700\">.bg-light-green-700</div>\r\n                    <div class=\"p-3 bg-light-green-800\">.bg-light-green-800</div>\r\n                    <div class=\"p-3 bg-light-green-900\">.bg-light-green-900</div>\r\n                    <div class=\"p-3 bg-light-green-a100\">.bg-light-green-a100</div>\r\n                    <div class=\"p-3 bg-light-green-a200\">.bg-light-green-a200</div>\r\n                    <div class=\"p-3 bg-light-green-a400\">.bg-light-green-a400</div>\r\n                    <div class=\"p-3 bg-light-green-a700\">.bg-light-green-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-lime-500\">\r\n                        <div class=\"mb-4\">Lime</div>.bg-lime-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-lime-50\">.bg-lime-50</div>\r\n                    <div class=\"p-3 bg-lime-100\">.bg-lime-100</div>\r\n                    <div class=\"p-3 bg-lime-200\">.bg-lime-200</div>\r\n                    <div class=\"p-3 bg-lime-300\">.bg-lime-300</div>\r\n                    <div class=\"p-3 bg-lime-400\">.bg-lime-400</div>\r\n                    <div class=\"p-3 bg-lime-500\">.bg-lime-500</div>\r\n                    <div class=\"p-3 bg-lime-600\">.bg-lime-600</div>\r\n                    <div class=\"p-3 bg-lime-700\">.bg-lime-700</div>\r\n                    <div class=\"p-3 bg-lime-800\">.bg-lime-800</div>\r\n                    <div class=\"p-3 bg-lime-900\">.bg-lime-900</div>\r\n                    <div class=\"p-3 bg-lime-a100\">.bg-lime-a100</div>\r\n                    <div class=\"p-3 bg-lime-a200\">.bg-lime-a200</div>\r\n                    <div class=\"p-3 bg-lime-a400\">.bg-lime-a400</div>\r\n                    <div class=\"p-3 bg-lime-a700\">.bg-lime-a700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-yellow-500\">\r\n                        <div class=\"mb-4\">Yellow</div>.bg-yellow-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-yellow-50\">.bg-yellow-50</div>\r\n                    <div class=\"p-3 bg-yellow-100\">.bg-yellow-100</div>\r\n                    <div class=\"p-3 bg-yellow-200\">.bg-yellow-200</div>\r\n                    <div class=\"p-3 bg-yellow-300\">.bg-yellow-300</div>\r\n                    <div class=\"p-3 bg-yellow-400\">.bg-yellow-400</div>\r\n                    <div class=\"p-3 bg-yellow-500\">.bg-yellow-500</div>\r\n                    <div class=\"p-3 bg-yellow-600\">.bg-yellow-600</div>\r\n                    <div class=\"p-3 bg-yellow-700\">.bg-yellow-700</div>\r\n                    <div class=\"p-3 bg-yellow-800\">.bg-yellow-800</div>\r\n                    <div class=\"p-3 bg-yellow-900\">.bg-yellow-900</div>\r\n                    <div class=\"p-3 bg-yellow-a100\">.bg-yellow-a100</div>\r\n                    <div class=\"p-3 bg-yellow-a200\">.bg-yellow-a200</div>\r\n                    <div class=\"p-3 bg-yellow-a400\">.bg-yellow-a400</div>\r\n                    <div class=\"p-3 bg-yellow-a700\">.bg-yellow-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-amber-500\">\r\n                        <div class=\"mb-4\">Amber</div>.bg-amber-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-amber-50\">.bg-amber-50</div>\r\n                    <div class=\"p-3 bg-amber-100\">.bg-amber-100</div>\r\n                    <div class=\"p-3 bg-amber-200\">.bg-amber-200</div>\r\n                    <div class=\"p-3 bg-amber-300\">.bg-amber-300</div>\r\n                    <div class=\"p-3 bg-amber-400\">.bg-amber-400</div>\r\n                    <div class=\"p-3 bg-amber-500\">.bg-amber-500</div>\r\n                    <div class=\"p-3 bg-amber-600\">.bg-amber-600</div>\r\n                    <div class=\"p-3 bg-amber-700\">.bg-amber-700</div>\r\n                    <div class=\"p-3 bg-amber-800\">.bg-amber-800</div>\r\n                    <div class=\"p-3 bg-amber-900\">.bg-amber-900</div>\r\n                    <div class=\"p-3 bg-amber-a100\">.bg-amber-a100</div>\r\n                    <div class=\"p-3 bg-amber-a200\">.bg-amber-a200</div>\r\n                    <div class=\"p-3 bg-amber-a400\">.bg-amber-a400</div>\r\n                    <div class=\"p-3 bg-amber-a700\">.bg-amber-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-orange-500\">\r\n                        <div class=\"mb-4\">Orange</div>.bg-orange-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-orange-50\">.bg-orange-50</div>\r\n                    <div class=\"p-3 bg-orange-100\">.bg-orange-100</div>\r\n                    <div class=\"p-3 bg-orange-200\">.bg-orange-200</div>\r\n                    <div class=\"p-3 bg-orange-300\">.bg-orange-300</div>\r\n                    <div class=\"p-3 bg-orange-400\">.bg-orange-400</div>\r\n                    <div class=\"p-3 bg-orange-500\">.bg-orange-500</div>\r\n                    <div class=\"p-3 bg-orange-600\">.bg-orange-600</div>\r\n                    <div class=\"p-3 bg-orange-700\">.bg-orange-700</div>\r\n                    <div class=\"p-3 bg-orange-800\">.bg-orange-800</div>\r\n                    <div class=\"p-3 bg-orange-900\">.bg-orange-900</div>\r\n                    <div class=\"p-3 bg-orange-a100\">.bg-orange-a100</div>\r\n                    <div class=\"p-3 bg-orange-a200\">.bg-orange-a200</div>\r\n                    <div class=\"p-3 bg-orange-a400\">.bg-orange-a400</div>\r\n                    <div class=\"p-3 bg-orange-a700\">.bg-orange-a700</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-deep-orange-500\">\r\n                        <div class=\"mb-4\">Deep-orange</div>.bg-deep-orange-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-deep-orange-50\">.bg-deep-orange-50</div>\r\n                    <div class=\"p-3 bg-deep-orange-100\">.bg-deep-orange-100</div>\r\n                    <div class=\"p-3 bg-deep-orange-200\">.bg-deep-orange-200</div>\r\n                    <div class=\"p-3 bg-deep-orange-300\">.bg-deep-orange-300</div>\r\n                    <div class=\"p-3 bg-deep-orange-400\">.bg-deep-orange-400</div>\r\n                    <div class=\"p-3 bg-deep-orange-500\">.bg-deep-orange-500</div>\r\n                    <div class=\"p-3 bg-deep-orange-600\">.bg-deep-orange-600</div>\r\n                    <div class=\"p-3 bg-deep-orange-700\">.bg-deep-orange-700</div>\r\n                    <div class=\"p-3 bg-deep-orange-800\">.bg-deep-orange-800</div>\r\n                    <div class=\"p-3 bg-deep-orange-900\">.bg-deep-orange-900</div>\r\n                    <div class=\"p-3 bg-deep-orange-a100\">.bg-deep-orange-a100</div>\r\n                    <div class=\"p-3 bg-deep-orange-a200\">.bg-deep-orange-a200</div>\r\n                    <div class=\"p-3 bg-deep-orange-a400\">.bg-deep-orange-a400</div>\r\n                    <div class=\"p-3 bg-deep-orange-a700\">.bg-deep-orange-a700</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-brown-500\">\r\n                        <div class=\"mb-4\">Brown</div>.bg-brown-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-brown-50\">.bg-brown-50</div>\r\n                    <div class=\"p-3 bg-brown-100\">.bg-brown-100</div>\r\n                    <div class=\"p-3 bg-brown-200\">.bg-brown-200</div>\r\n                    <div class=\"p-3 bg-brown-300\">.bg-brown-300</div>\r\n                    <div class=\"p-3 bg-brown-400\">.bg-brown-400</div>\r\n                    <div class=\"p-3 bg-brown-500\">.bg-brown-500</div>\r\n                    <div class=\"p-3 bg-brown-600\">.bg-brown-600</div>\r\n                    <div class=\"p-3 bg-brown-700\">.bg-brown-700</div>\r\n                    <div class=\"p-3 bg-brown-800\">.bg-brown-800</div>\r\n                    <div class=\"p-3 bg-brown-900\">.bg-brown-900</div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-blue-grey-500\">\r\n                        <div class=\"mb-4\">Blue-grey</div>.bg-blue-grey-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-blue-grey-50\">.bg-blue-grey-50</div>\r\n                    <div class=\"p-3 bg-blue-grey-100\">.bg-blue-grey-100</div>\r\n                    <div class=\"p-3 bg-blue-grey-200\">.bg-blue-grey-200</div>\r\n                    <div class=\"p-3 bg-blue-grey-300\">.bg-blue-grey-300</div>\r\n                    <div class=\"p-3 bg-blue-grey-400\">.bg-blue-grey-400</div>\r\n                    <div class=\"p-3 bg-blue-grey-500\">.bg-blue-grey-500</div>\r\n                    <div class=\"p-3 bg-blue-grey-600\">.bg-blue-grey-600</div>\r\n                    <div class=\"p-3 bg-blue-grey-700\">.bg-blue-grey-700</div>\r\n                    <div class=\"p-3 bg-blue-grey-800\">.bg-blue-grey-800</div>\r\n                    <div class=\"p-3 bg-blue-grey-900\">.bg-blue-grey-900</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"p-3 bg-grey-500\">\r\n                        <div class=\"mb-4\">Grey</div>.bg-grey-500\r\n                    </div>\r\n                    <div class=\"p-3 bg-grey-50\">.bg-grey-50</div>\r\n                    <div class=\"p-3 bg-grey-100\">.bg-grey-100</div>\r\n                    <div class=\"p-3 bg-grey-200\">.bg-grey-200</div>\r\n                    <div class=\"p-3 bg-grey-300\">.bg-grey-300</div>\r\n                    <div class=\"p-3 bg-grey-400\">.bg-grey-400</div>\r\n                    <div class=\"p-3 bg-grey-500\">.bg-grey-500</div>\r\n                    <div class=\"p-3 bg-grey-600\">.bg-grey-600</div>\r\n                    <div class=\"p-3 bg-grey-700\">.bg-grey-700</div>\r\n                    <div class=\"p-3 bg-grey-800\">.bg-grey-800</div>\r\n                    <div class=\"p-3 bg-grey-900\">.bg-grey-900</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/colors/colors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/colors/colors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = (function () {
    function ColorsComponent(pt) {
        pt.setTitle('Colors');
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    return ColorsComponent;
}());
ColorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-colors',
        template: __webpack_require__("../../../../../src/app/routes/elements/colors/colors.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/colors/colors.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], ColorsComponent);

var _a;
//# sourceMappingURL=colors.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrapui_bootstrapui_component__ = __webpack_require__("../../../../../src/app/routes/elements/bootstrapui/bootstrapui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/routes/elements/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colors_colors_component__ = __webpack_require__("../../../../../src/app/routes/elements/colors/colors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__ = __webpack_require__("../../../../../src/app/routes/elements/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__("../../../../../src/app/routes/elements/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nestable_nestable_component__ = __webpack_require__("../../../../../src/app/routes/elements/nestable/nestable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spinners_spinners_component__ = __webpack_require__("../../../../../src/app/routes/elements/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/routes/elements/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__ = __webpack_require__("../../../../../src/app/routes/elements/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utilities_utilities_component__ = __webpack_require__("../../../../../src/app/routes/elements/utilities/utilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modals_modals_component__ = __webpack_require__("../../../../../src/app/routes/elements/modals/modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__toaster_toaster_component__ = __webpack_require__("../../../../../src/app/routes/elements/toaster/toaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gridmasonry_gridmasonry_component__ = __webpack_require__("../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'bootstrapui', component: __WEBPACK_IMPORTED_MODULE_3__bootstrapui_bootstrapui_component__["a" /* BootstrapuiComponent */] },
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__["a" /* ButtonsComponent */] },
    { path: 'colors', component: __WEBPACK_IMPORTED_MODULE_5__colors_colors_component__["a" /* ColorsComponent */] },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__["a" /* GridComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'modals', component: __WEBPACK_IMPORTED_MODULE_13__modals_modals_component__["a" /* ModalsComponent */] },
    { path: 'nestable', component: __WEBPACK_IMPORTED_MODULE_8__nestable_nestable_component__["a" /* NestableComponent */] },
    { path: 'spinners', component: __WEBPACK_IMPORTED_MODULE_9__spinners_spinners_component__["a" /* SpinnersComponent */] },
    { path: 'sweetalert', component: __WEBPACK_IMPORTED_MODULE_10__sweetalert_sweetalert_component__["a" /* SweetalertComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'utilities', component: __WEBPACK_IMPORTED_MODULE_12__utilities_utilities_component__["a" /* UtilitiesComponent */] },
    { path: 'gridmasonry', component: __WEBPACK_IMPORTED_MODULE_15__gridmasonry_gridmasonry_component__["a" /* GridmasonryComponent */] },
    { path: 'toaster', component: __WEBPACK_IMPORTED_MODULE_14__toaster_toaster_component__["a" /* ToasterComponent */] }
];
var ElementsModule = (function () {
    function ElementsModule() {
    }
    return ElementsModule;
}());
ElementsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_16_angular2_toaster__["a" /* ToasterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__bootstrapui_bootstrapui_component__["a" /* BootstrapuiComponent */],
            __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__["a" /* ButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__colors_colors_component__["a" /* ColorsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nestable_nestable_component__["a" /* NestableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__spinners_spinners_component__["a" /* SpinnersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__sweetalert_sweetalert_component__["a" /* SweetalertComponent */],
            __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__utilities_utilities_component__["a" /* UtilitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__modals_modals_component__["a" /* ModalsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__toaster_toaster_component__["a" /* ToasterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__gridmasonry_gridmasonry_component__["a" /* GridmasonryComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16_angular2_toaster__["b" /* ToasterService */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], ElementsModule);

//# sourceMappingURL=elements.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid grid-example\">\r\n    <p>Bootstrap includes a powerful mobile-first flexbox grid system for building layouts of all shapes and sizes. It’s based on a 12 column layout and has multiple tiers, one for each media query range. You can use it with Sass mixins or our predefined classes.</p>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Auto-layout columns</div>\r\n        <div class=\"card-block\">\r\n            <p class=\"my-4 text-bold\" id=\"equal-width\">Equal-width</p>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">1 of 2</div>\r\n                    <div class=\"col\">1 of 2</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">1 of 3</div>\r\n                    <div class=\"col\">1 of 3</div>\r\n                    <div class=\"col\">1 of 3</div>\r\n                </div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"setting-one-column-width\">Setting one column width</p>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\">1 of 3</div>\r\n                    <div class=\"col-6\">2 of 3 (wider)</div>\r\n                    <div class=\"col\">3 of 3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">1 of 3</div>\r\n                    <div class=\"col-5\">2 of 3 (wider)</div>\r\n                    <div class=\"col\">3 of 3</div>\r\n                </div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"variable-width-content\">Variable width content</p>\r\n            <div class=\"container\">\r\n                <div class=\"row justify-content-md-center\">\r\n                    <div class=\"col col-xl-2\">1 of 3</div>\r\n                    <div class=\"col-12 col-lg-auto\">Variable width content</div>\r\n                    <div class=\"col col-xl-2\">3 of 3</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">1 of 3</div>\r\n                    <div class=\"col-12 col-lg-auto\">Variable width content</div>\r\n                    <div class=\"col col-xl-2\">3 of 3</div>\r\n                </div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"equal-width-multi-row\">Equal-width multi-row</p>\r\n            <div class=\"row\">\r\n                <div class=\"col\">col</div>\r\n                <div class=\"col\">col</div>\r\n                <div class=\"w-100\"></div>\r\n                <div class=\"col\">col</div>\r\n                <div class=\"col\">col</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Responsive classes</div>\r\n        <div class=\"card-block\">\r\n            <p class=\"my-4 text-bold\" id=\"all-breakpoints\">All breakpoints</p>\r\n            <div class=\"row\">\r\n                <div class=\"col\">col</div>\r\n                <div class=\"col\">col</div>\r\n                <div class=\"col\">col</div>\r\n                <div class=\"col\">col</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-8\">col-8</div>\r\n                <div class=\"col-4\">col-4</div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"stacked-to-horizontal\">Stacked to horizontal</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-8\">col-sm-8</div>\r\n                <div class=\"col-sm-4\">col-sm-4</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm\">col-sm</div>\r\n                <div class=\"col-sm\">col-sm</div>\r\n                <div class=\"col-sm\">col-sm</div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"mix-and-match\">Mix and match</p>\r\n            <!-- Stack the columns on mobile by making one full-width and the other half-width-->\r\n            <div class=\"row\">\r\n                <div class=\"col col-lg-8\">.col .col-lg-8</div>\r\n                <div class=\"col-6 col-lg-4\">.col-6 .col-lg-4</div>\r\n            </div>\r\n            <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop-->\r\n            <div class=\"row\">\r\n                <div class=\"col-6 col-lg-4\">.col-6 .col-lg-4</div>\r\n                <div class=\"col-6 col-lg-4\">.col-6 .col-lg-4</div>\r\n                <div class=\"col-6 col-lg-4\">.col-6 .col-lg-4</div>\r\n            </div>\r\n            <!-- Columns are always 50% wide, on mobile and desktop-->\r\n            <div class=\"row\">\r\n                <div class=\"col-6\">.col-6</div>\r\n                <div class=\"col-6\">.col-6</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Alignment</div>\r\n        <div class=\"card-block\">\r\n            <p class=\"my-4 text-bold\" id=\"vertical-alignment\">Vertical alignment</p>\r\n            <div class=\"container\">\r\n                <div class=\"row align-items-start\">\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                </div>\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                </div>\r\n                <div class=\"row align-items-end\">\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                    <div class=\"col\">One of three columns</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col align-self-start\">One of three columns</div>\r\n                    <div class=\"col align-self-center\">One of three columns</div>\r\n                    <div class=\"col align-self-end\">One of three columns</div>\r\n                </div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"horizontal-alignment\">Horizontal alignment</p>\r\n            <div class=\"container\">\r\n                <div class=\"row justify-content-start\">\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                </div>\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                </div>\r\n                <div class=\"row justify-content-end\">\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                </div>\r\n                <div class=\"row justify-content-around\">\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                </div>\r\n                <div class=\"row justify-content-between\">\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                    <div class=\"col-4\">One of two columns</div>\r\n                </div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"no-gutters\">No gutters</p>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-12 col-sm-6 col-lg-8\">.col-12 .col-sm-6 .col-lg-8</div>\r\n                <div class=\"col-6 col-lg-4\">.col-6 .col-lg-4</div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"column-wrapping\">Column wrapping</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-9\">.col-9</div>\r\n                <div class=\"col-4\">.col-4\r\n                    <br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>\r\n                <div class=\"col-6\">.col-6\r\n                    <br>Subsequent columns continue along the new line.</div>\r\n            </div>\r\n            <p class=\"my-4 text-bold\" id=\"column-resets\">Column resets</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\r\n                <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\r\n                <!-- Add the extra clearfix for only the required viewport-->\r\n                <div class=\"clearfix hidden-sm-up\"></div>\r\n                <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\r\n                <div class=\"col-6 col-sm-3\">.col-6 .col-sm-3</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5 col-lg-6\">.col-sm-5 .col-lg-6</div>\r\n                <div class=\"col-sm-5 offset-sm-2 col-lg-6 offset-md-0\">.col-sm-5 .offset-sm-2 .col-lg-6 .offset-md-0</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-lg-5 col-xl-6\">.col.col-sm-6.col-lg-5.col-xl-6</div>\r\n                <div class=\"col-sm-6 col-lg-5 offset-md-2 col-xl-6 offset-lg-0\">.col-sm-6 .col-lg-5 .offset-md-2 .col-xl-6 .offset-lg-0</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Reordering</div>\r\n        <div class=\"card-block\">\r\n            <p class=\"my-4 text-bold\" id=\"flex-order\">Flex order</p>\r\n            <p class=\"my-4 text-bold\" id=\"offsetting-columns\">Offsetting columns</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">.col-lg-4</div>\r\n                <div class=\"col-lg-4 offset-md-4\">.col-lg-4 .offset-md-4</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 offset-md-3\">.col-lg-3 .offset-md-3</div>\r\n                <div class=\"col-lg-3 offset-md-3\">.col-lg-3 .offset-md-3</div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 offset-md-3\">.col-lg-6 .offset-md-3</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Nesting</div>\r\n        <div class=\"card-block\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-9\">Level 1: .col-sm-9\r\n                    <div class=\"row\">\r\n                        <div class=\"col-8 col-sm-6\">Level 2: .col-8 .col-sm-6</div>\r\n                        <div class=\"col-4 col-sm-6\">Level 2: .col-4 .col-sm-6</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-example .row > .col,\n.grid-example .row > [class^=col-] {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  background-color: rgba(241, 242, 243, 0.15);\n  border: 1px dashed rgba(0, 0, 0, 0.15); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = (function () {
    function GridComponent(pt) {
        pt.setTitle('Grid');
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/routes/elements/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/grid/grid.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], GridComponent);

var _a;
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <p><strong class=\"mr-1\">Cards</strong>can be organized into Masonry-like columns with just CSS by wrapping them in<code>.card-columns.</code>Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.</p>\r\n    <div class=\"card-columns\">\r\n        <div class=\"card mb-4\"><img class=\"card-img-top img-fluid\" src=\"assets/img/pic1.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Card title that wraps to a new line</h4>\r\n                <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card p-3 mb-4\">\r\n            <blockquote class=\"card-block card-blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer><small class=\"text-muted\">Someone famous in\r\n                      <cite title=\"Source Title\">Source Title</cite></small></footer>\r\n            </blockquote>\r\n        </div>\r\n        <div class=\"card mb-4\"><img class=\"card-img-top img-fluid\" src=\"assets/img/pic2.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Card title</h4>\r\n                <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-inverse bg-gradient-info p-3 text-center mb-4 border-0\">\r\n            <blockquote class=\"card-blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n                <footer><small>Someone famous in\r\n                      <cite title=\"Source Title\">Source Title</cite></small></footer>\r\n            </blockquote>\r\n        </div>\r\n        <div class=\"card text-center mb-4\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Card title</h4>\r\n                <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\"><img class=\"card-img img-fluid\" src=\"assets/img/pic3.jpg\" alt=\"Card image\"></div>\r\n        <div class=\"card p-3 text-right mb-4\">\r\n            <blockquote class=\"card-blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer><small class=\"text-muted\">Someone famous in\r\n                      <cite title=\"Source Title\">Source Title</cite></small></footer>\r\n            </blockquote>\r\n        </div>\r\n        <div class=\"card mb-4\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Card title</h4>\r\n                <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\r\n                <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card mb-4\"><img class=\"card-img-top img-fluid\" src=\"assets/img/pic1.jpg\" alt=\"Card image cap\">\r\n            <div class=\"card-block\">\r\n                <h4 class=\"card-title\">Card title that wraps to a new line</h4>\r\n                <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-inverse card-primary p-3 text-center mb-4\">\r\n            <blockquote class=\"card-blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n                <footer><small>Someone famous in\r\n                      <cite title=\"Source Title\">Source Title</cite></small></footer>\r\n            </blockquote>\r\n        </div>\r\n        <div class=\"card mb-4\"><img class=\"card-img-top img-fluid\" src=\"assets/img/pic4.jpg\" alt=\"Card image cap\"></div>\r\n        <div class=\"card card-inverse bg-gradient-danger p-3 text-center mb-4\">\r\n            <blockquote class=\"card-blockquote\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n                <footer><small>Someone famous in\r\n                      <cite title=\"Source Title\">Source Title</cite></small></footer>\r\n            </blockquote>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridmasonryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridmasonryComponent = (function () {
    function GridmasonryComponent(pt) {
        pt.setTitle('Grid Masonry');
    }
    GridmasonryComponent.prototype.ngOnInit = function () {
    };
    return GridmasonryComponent;
}());
GridmasonryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gridmasonry',
        template: __webpack_require__("../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/gridmasonry/gridmasonry.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], GridmasonryComponent);

var _a;
//# sourceMappingURL=gridmasonry.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <div class=\"text-center\">\r\n        <h4 class=\"text-info mt0\"><a href=\"//ionicons.com/\" target=\"_blank\" class=\"text-info\"><em class=\"ion-ionic icon-2x\"></em></a><br/>ionicons</h4>\r\n        <p>The premium icon font for Ionic Framework. 100% free and open source. MIT Licensed.</p>\r\n    </div>\r\n    <ul class=\"icons-list\">\r\n        <li data-pack=\"default\" class=\"ion-ionic\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-up-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-right-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-down-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-left-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-up-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-right-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-down-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-left-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-up-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-right-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-down-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-left-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-return-right\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-return-left\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-swap\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-shrink\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-expand\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-move\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-resize\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chevron-up\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chevron-right\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chevron-down\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chevron-left\"></li>\r\n        <li data-pack=\"default\" class=\"ion-navicon-round\"></li>\r\n        <li data-pack=\"default\" class=\"ion-navicon\"></li>\r\n        <li data-pack=\"default\" class=\"ion-drag\"></li>\r\n        <li data-pack=\"default\" class=\"ion-log-in\"></li>\r\n        <li data-pack=\"default\" class=\"ion-log-out\"></li>\r\n        <li data-pack=\"default\" class=\"ion-checkmark-round\"></li>\r\n        <li data-pack=\"default\" class=\"ion-checkmark\"></li>\r\n        <li data-pack=\"default\" class=\"ion-checkmark-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-close-round\"></li>\r\n        <li data-pack=\"default\" class=\"ion-close\"></li>\r\n        <li data-pack=\"default\" class=\"ion-close-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-plus-round\"></li>\r\n        <li data-pack=\"default\" class=\"ion-plus\"></li>\r\n        <li data-pack=\"default\" class=\"ion-plus-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-minus-round\"></li>\r\n        <li data-pack=\"default\" class=\"ion-minus\"></li>\r\n        <li data-pack=\"default\" class=\"ion-minus-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-information\"></li>\r\n        <li data-pack=\"default\" class=\"ion-information-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-help\"></li>\r\n        <li data-pack=\"default\" class=\"ion-help-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-backspace-outline\"></li>\r\n        <li data-pack=\"default\" class=\"ion-backspace\"></li>\r\n        <li data-pack=\"default\" class=\"ion-help-buoy\"></li>\r\n        <li data-pack=\"default\" class=\"ion-asterisk\"></li>\r\n        <li data-pack=\"default\" class=\"ion-alert\"></li>\r\n        <li data-pack=\"default\" class=\"ion-alert-circled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-refresh\"></li>\r\n        <li data-pack=\"default\" class=\"ion-loop\"></li>\r\n        <li data-pack=\"default\" class=\"ion-shuffle\"></li>\r\n        <li data-pack=\"default\" class=\"ion-home\"></li>\r\n        <li data-pack=\"default\" class=\"ion-search\"></li>\r\n        <li data-pack=\"default\" class=\"ion-flag\"></li>\r\n        <li data-pack=\"default\" class=\"ion-star\"></li>\r\n        <li data-pack=\"default\" class=\"ion-heart\"></li>\r\n        <li data-pack=\"default\" class=\"ion-heart-broken\"></li>\r\n        <li data-pack=\"default\" class=\"ion-gear-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-gear-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-toggle-filled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-toggle\"></li>\r\n        <li data-pack=\"default\" class=\"ion-settings\"></li>\r\n        <li data-pack=\"default\" class=\"ion-wrench\"></li>\r\n        <li data-pack=\"default\" class=\"ion-hammer\"></li>\r\n        <li data-pack=\"default\" class=\"ion-edit\"></li>\r\n        <li data-pack=\"default\" class=\"ion-trash-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-trash-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-document\"></li>\r\n        <li data-pack=\"default\" class=\"ion-document-text\"></li>\r\n        <li data-pack=\"default\" class=\"ion-clipboard\"></li>\r\n        <li data-pack=\"default\" class=\"ion-scissors\"></li>\r\n        <li data-pack=\"default\" class=\"ion-funnel\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bookmark\"></li>\r\n        <li data-pack=\"default\" class=\"ion-email\"></li>\r\n        <li data-pack=\"default\" class=\"ion-email-unread\"></li>\r\n        <li data-pack=\"default\" class=\"ion-folder\"></li>\r\n        <li data-pack=\"default\" class=\"ion-filing\"></li>\r\n        <li data-pack=\"default\" class=\"ion-archive\"></li>\r\n        <li data-pack=\"default\" class=\"ion-reply\"></li>\r\n        <li data-pack=\"default\" class=\"ion-reply-all\"></li>\r\n        <li data-pack=\"default\" class=\"ion-forward\"></li>\r\n        <li data-pack=\"default\" class=\"ion-share\"></li>\r\n        <li data-pack=\"default\" class=\"ion-paper-airplane\"></li>\r\n        <li data-pack=\"default\" class=\"ion-link\"></li>\r\n        <li data-pack=\"default\" class=\"ion-paperclip\"></li>\r\n        <li data-pack=\"default\" class=\"ion-compose\"></li>\r\n        <li data-pack=\"default\" class=\"ion-briefcase\"></li>\r\n        <li data-pack=\"default\" class=\"ion-medkit\"></li>\r\n        <li data-pack=\"default\" class=\"ion-at\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pound\"></li>\r\n        <li data-pack=\"default\" class=\"ion-quote\"></li>\r\n        <li data-pack=\"default\" class=\"ion-cloud\"></li>\r\n        <li data-pack=\"default\" class=\"ion-upload\"></li>\r\n        <li data-pack=\"default\" class=\"ion-more\"></li>\r\n        <li data-pack=\"default\" class=\"ion-grid\"></li>\r\n        <li data-pack=\"default\" class=\"ion-calendar\"></li>\r\n        <li data-pack=\"default\" class=\"ion-clock\"></li>\r\n        <li data-pack=\"default\" class=\"ion-compass\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pinpoint\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pin\"></li>\r\n        <li data-pack=\"default\" class=\"ion-navigate\"></li>\r\n        <li data-pack=\"default\" class=\"ion-location\"></li>\r\n        <li data-pack=\"default\" class=\"ion-map\"></li>\r\n        <li data-pack=\"default\" class=\"ion-lock-combination\"></li>\r\n        <li data-pack=\"default\" class=\"ion-locked\"></li>\r\n        <li data-pack=\"default\" class=\"ion-unlocked\"></li>\r\n        <li data-pack=\"default\" class=\"ion-key\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-graph-up-right\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-graph-down-right\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-graph-up-left\"></li>\r\n        <li data-pack=\"default\" class=\"ion-arrow-graph-down-left\"></li>\r\n        <li data-pack=\"default\" class=\"ion-stats-bars\"></li>\r\n        <li data-pack=\"default\" class=\"ion-connection-bars\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pie-graph\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatbubble\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatbubble-working\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatbubbles\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatbox\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatbox-working\"></li>\r\n        <li data-pack=\"default\" class=\"ion-chatboxes\"></li>\r\n        <li data-pack=\"default\" class=\"ion-person\"></li>\r\n        <li data-pack=\"default\" class=\"ion-person-add\"></li>\r\n        <li data-pack=\"default\" class=\"ion-person-stalker\"></li>\r\n        <li data-pack=\"default\" class=\"ion-woman\"></li>\r\n        <li data-pack=\"default\" class=\"ion-man\"></li>\r\n        <li data-pack=\"default\" class=\"ion-female\"></li>\r\n        <li data-pack=\"default\" class=\"ion-male\"></li>\r\n        <li data-pack=\"default\" class=\"ion-transgender\"></li>\r\n        <li data-pack=\"default\" class=\"ion-fork\"></li>\r\n        <li data-pack=\"default\" class=\"ion-knife\"></li>\r\n        <li data-pack=\"default\" class=\"ion-spoon\"></li>\r\n        <li data-pack=\"default\" class=\"ion-soup-can-outline\"></li>\r\n        <li data-pack=\"default\" class=\"ion-soup-can\"></li>\r\n        <li data-pack=\"default\" class=\"ion-beer\"></li>\r\n        <li data-pack=\"default\" class=\"ion-wineglass\"></li>\r\n        <li data-pack=\"default\" class=\"ion-coffee\"></li>\r\n        <li data-pack=\"default\" class=\"ion-icecream\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pizza\"></li>\r\n        <li data-pack=\"default\" class=\"ion-power\"></li>\r\n        <li data-pack=\"default\" class=\"ion-mouse\"></li>\r\n        <li data-pack=\"default\" class=\"ion-battery-full\"></li>\r\n        <li data-pack=\"default\" class=\"ion-battery-half\"></li>\r\n        <li data-pack=\"default\" class=\"ion-battery-low\"></li>\r\n        <li data-pack=\"default\" class=\"ion-battery-empty\"></li>\r\n        <li data-pack=\"default\" class=\"ion-battery-charging\"></li>\r\n        <li data-pack=\"default\" class=\"ion-wifi\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bluetooth\"></li>\r\n        <li data-pack=\"default\" class=\"ion-calculator\"></li>\r\n        <li data-pack=\"default\" class=\"ion-camera\"></li>\r\n        <li data-pack=\"default\" class=\"ion-eye\"></li>\r\n        <li data-pack=\"default\" class=\"ion-eye-disabled\"></li>\r\n        <li data-pack=\"default\" class=\"ion-flash\"></li>\r\n        <li data-pack=\"default\" class=\"ion-flash-off\"></li>\r\n        <li data-pack=\"default\" class=\"ion-qr-scanner\"></li>\r\n        <li data-pack=\"default\" class=\"ion-image\"></li>\r\n        <li data-pack=\"default\" class=\"ion-images\"></li>\r\n        <li data-pack=\"default\" class=\"ion-wand\"></li>\r\n        <li data-pack=\"default\" class=\"ion-contrast\"></li>\r\n        <li data-pack=\"default\" class=\"ion-aperture\"></li>\r\n        <li data-pack=\"default\" class=\"ion-crop\"></li>\r\n        <li data-pack=\"default\" class=\"ion-easel\"></li>\r\n        <li data-pack=\"default\" class=\"ion-paintbrush\"></li>\r\n        <li data-pack=\"default\" class=\"ion-paintbucket\"></li>\r\n        <li data-pack=\"default\" class=\"ion-monitor\"></li>\r\n        <li data-pack=\"default\" class=\"ion-laptop\"></li>\r\n        <li data-pack=\"default\" class=\"ion-ipad\"></li>\r\n        <li data-pack=\"default\" class=\"ion-iphone\"></li>\r\n        <li data-pack=\"default\" class=\"ion-ipod\"></li>\r\n        <li data-pack=\"default\" class=\"ion-printer\"></li>\r\n        <li data-pack=\"default\" class=\"ion-usb\"></li>\r\n        <li data-pack=\"default\" class=\"ion-outlet\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bug\"></li>\r\n        <li data-pack=\"default\" class=\"ion-code\"></li>\r\n        <li data-pack=\"default\" class=\"ion-code-working\"></li>\r\n        <li data-pack=\"default\" class=\"ion-code-download\"></li>\r\n        <li data-pack=\"default\" class=\"ion-fork-repo\"></li>\r\n        <li data-pack=\"default\" class=\"ion-network\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pull-request\"></li>\r\n        <li data-pack=\"default\" class=\"ion-merge\"></li>\r\n        <li data-pack=\"default\" class=\"ion-xbox\"></li>\r\n        <li data-pack=\"default\" class=\"ion-playstation\"></li>\r\n        <li data-pack=\"default\" class=\"ion-steam\"></li>\r\n        <li data-pack=\"default\" class=\"ion-closed-captioning\"></li>\r\n        <li data-pack=\"default\" class=\"ion-videocamera\"></li>\r\n        <li data-pack=\"default\" class=\"ion-film-marker\"></li>\r\n        <li data-pack=\"default\" class=\"ion-disc\"></li>\r\n        <li data-pack=\"default\" class=\"ion-headphone\"></li>\r\n        <li data-pack=\"default\" class=\"ion-music-note\"></li>\r\n        <li data-pack=\"default\" class=\"ion-radio-waves\"></li>\r\n        <li data-pack=\"default\" class=\"ion-speakerphone\"></li>\r\n        <li data-pack=\"default\" class=\"ion-mic-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-mic-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-mic-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-volume-high\"></li>\r\n        <li data-pack=\"default\" class=\"ion-volume-medium\"></li>\r\n        <li data-pack=\"default\" class=\"ion-volume-low\"></li>\r\n        <li data-pack=\"default\" class=\"ion-volume-mute\"></li>\r\n        <li data-pack=\"default\" class=\"ion-levels\"></li>\r\n        <li data-pack=\"default\" class=\"ion-play\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pause\"></li>\r\n        <li data-pack=\"default\" class=\"ion-stop\"></li>\r\n        <li data-pack=\"default\" class=\"ion-record\"></li>\r\n        <li data-pack=\"default\" class=\"ion-skip-forward\"></li>\r\n        <li data-pack=\"default\" class=\"ion-skip-backward\"></li>\r\n        <li data-pack=\"default\" class=\"ion-eject\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bag\"></li>\r\n        <li data-pack=\"default\" class=\"ion-card\"></li>\r\n        <li data-pack=\"default\" class=\"ion-cash\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pricetag\"></li>\r\n        <li data-pack=\"default\" class=\"ion-pricetags\"></li>\r\n        <li data-pack=\"default\" class=\"ion-thumbsup\"></li>\r\n        <li data-pack=\"default\" class=\"ion-thumbsdown\"></li>\r\n        <li data-pack=\"default\" class=\"ion-happy-outline\"></li>\r\n        <li data-pack=\"default\" class=\"ion-happy\"></li>\r\n        <li data-pack=\"default\" class=\"ion-sad-outline\"></li>\r\n        <li data-pack=\"default\" class=\"ion-sad\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bowtie\"></li>\r\n        <li data-pack=\"default\" class=\"ion-tshirt-outline\"></li>\r\n        <li data-pack=\"default\" class=\"ion-tshirt\"></li>\r\n        <li data-pack=\"default\" class=\"ion-trophy\"></li>\r\n        <li data-pack=\"default\" class=\"ion-podium\"></li>\r\n        <li data-pack=\"default\" class=\"ion-ribbon-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-ribbon-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-university\"></li>\r\n        <li data-pack=\"default\" class=\"ion-magnet\"></li>\r\n        <li data-pack=\"default\" class=\"ion-beaker\"></li>\r\n        <li data-pack=\"default\" class=\"ion-erlenmeyer-flask\"></li>\r\n        <li data-pack=\"default\" class=\"ion-egg\"></li>\r\n        <li data-pack=\"default\" class=\"ion-earth\"></li>\r\n        <li data-pack=\"default\" class=\"ion-planet\"></li>\r\n        <li data-pack=\"default\" class=\"ion-lightbulb\"></li>\r\n        <li data-pack=\"default\" class=\"ion-cube\"></li>\r\n        <li data-pack=\"default\" class=\"ion-leaf\"></li>\r\n        <li data-pack=\"default\" class=\"ion-waterdrop\"></li>\r\n        <li data-pack=\"default\" class=\"ion-flame\"></li>\r\n        <li data-pack=\"default\" class=\"ion-fireball\"></li>\r\n        <li data-pack=\"default\" class=\"ion-bonfire\"></li>\r\n        <li data-pack=\"default\" class=\"ion-umbrella\"></li>\r\n        <li data-pack=\"default\" class=\"ion-nuclear\"></li>\r\n        <li data-pack=\"default\" class=\"ion-no-smoking\"></li>\r\n        <li data-pack=\"default\" class=\"ion-thermometer\"></li>\r\n        <li data-pack=\"default\" class=\"ion-speedometer\"></li>\r\n        <li data-pack=\"default\" class=\"ion-model-s\"></li>\r\n        <li data-pack=\"default\" class=\"ion-plane\"></li>\r\n        <li data-pack=\"default\" class=\"ion-jet\"></li>\r\n        <li data-pack=\"default\" class=\"ion-load-a\"></li>\r\n        <li data-pack=\"default\" class=\"ion-load-b\"></li>\r\n        <li data-pack=\"default\" class=\"ion-load-c\"></li>\r\n        <li data-pack=\"default\" class=\"ion-load-d\"></li>\r\n        <!-- end default icons pack-->\r\n        <li data-pack=\"ios\" class=\"ion-ios-ionic-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-back\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-forward\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-up\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-right\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-down\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-left\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-thin-up\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-thin-right\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-thin-down\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-arrow-thin-left\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-circle-filled\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-circle-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-checkmark-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-checkmark-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-checkmark\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-plus-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-plus-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-plus\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-close-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-close-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-close\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-minus-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-minus-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-minus\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-information-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-information-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-information\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-help-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-help-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-help\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-search\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-search-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-star\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-star-half\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-star-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-heart\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-heart-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-more\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-more-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-home\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-home-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud-upload\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud-upload-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud-download\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloud-download-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-upload\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-upload-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-download\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-download-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-refresh\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-refresh-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-refresh-empty\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-reload\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-loop-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-loop\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bookmarks\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bookmarks-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-book\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-book-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flag\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flag-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-glasses\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-glasses-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-browsers\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-browsers-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-at\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-at-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pricetag\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pricetag-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pricetags\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pricetags-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cart\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cart-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-chatboxes\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-chatboxes-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-chatbubble\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-chatbubble-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cog\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cog-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-gear\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-gear-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-settings\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-settings-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-toggle\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-toggle-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-analytics\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-analytics-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pie\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pie-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pulse\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pulse-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-filing\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-filing-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-box\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-box-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-compose\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-compose-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-trash\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-trash-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-copy\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-copy-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-email\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-email-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-undo\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-undo-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-redo\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-redo-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paperplane\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paperplane-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-folder\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-folder-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paper\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paper-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-list\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-list-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-world\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-world-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-alarm\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-alarm-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-speedometer\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-speedometer-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-stopwatch\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-stopwatch-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-timer\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-timer-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-clock\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-clock-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-time\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-time-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-calendar\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-calendar-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-photos\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-photos-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-albums\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-albums-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-camera\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-camera-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-reverse-camera\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-reverse-camera-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-eye\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-eye-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bolt\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bolt-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-color-wand\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-color-wand-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-color-filter\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-color-filter-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-grid-view\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-grid-view-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-crop-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-crop\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-barcode\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-barcode-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-briefcase\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-briefcase-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-medkit\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-medkit-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-medical\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-medical-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-infinite\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-infinite-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-calculator\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-calculator-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-keypad\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-keypad-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-telephone\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-telephone-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-drag\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-location\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-location-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-navigate\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-navigate-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-locked\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-locked-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-unlocked\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-unlocked-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-monitor\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-monitor-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-printer\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-printer-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-game-controller-a\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-game-controller-a-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-game-controller-b\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-game-controller-b-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-americanfootball\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-americanfootball-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-baseball\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-baseball-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-basketball\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-basketball-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-tennisball\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-tennisball-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-football\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-football-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-body\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-body-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-person\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-person-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-personadd\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-personadd-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-people\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-people-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-musical-notes\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-musical-note\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bell\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-bell-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-mic\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-mic-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-mic-off\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-volume-high\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-volume-low\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-play\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-play-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pause\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pause-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-recording\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-recording-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-fastforward\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-fastforward-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rewind\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rewind-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-skipbackward\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-skipbackward-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-skipforward\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-skipforward-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-shuffle-strong\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-shuffle\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-videocam\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-videocam-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-film\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-film-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flask\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flask-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-lightbulb\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-lightbulb-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-wineglass\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-wineglass-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pint\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-pint-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-nutrition\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-nutrition-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flower\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flower-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rose\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rose-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paw\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-paw-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flame\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-flame-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-sunny\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-sunny-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-partlysunny\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-partlysunny-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloudy\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloudy-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rainy\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-rainy-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-thunderstorm\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-thunderstorm-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-snowy\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-moon\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-moon-outline\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloudy-night\"></li>\r\n        <li data-pack=\"ios\" class=\"ion-ios-cloudy-night-outline\"></li>\r\n        <!-- end iOS 7-style icons pack-->\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-up\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-forward\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-down\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-back\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropup\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropup-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropright\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropright-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropdown\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropdown-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropleft\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-arrow-dropleft-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-add\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-add-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-remove\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-remove-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-close\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cancel\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-radio-button-off\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-radio-button-on\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-checkmark-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-checkbox-outline-blank\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-checkbox-outline\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-checkbox-blank\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-checkbox\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-done\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-done-all\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-menu\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-more-horizontal\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-more-vertical\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-refresh\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-sync\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-wifi\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-call\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-apps\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-settings\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-options\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-funnel\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-search\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-home\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cloud-outline\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cloud\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-download\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-upload\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cloud-done\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cloud-circle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-favorite-outline\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-favorite\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-star-outline\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-star-half\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-star\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-calendar\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-alarm-clock\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-time\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-stopwatch\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-watch\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-locate\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-navigate\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-pin\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-compass\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-map\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-walk\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-bicycle\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-car\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-bus\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-subway\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-train\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-boat\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-plane\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-restaurant\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-bar\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-cart\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-camera\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-image\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-film\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-color-palette\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-create\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-mail\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-drafts\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-send\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-archive\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-delete\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-attach\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-share\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-share-alt\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-bookmark\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-document\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-clipboard\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-list\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-folder-open\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-folder\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-print\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-open\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-exit\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-contract\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-expand\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-globe\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-chat\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-textsms\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-hangout\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-happy\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-sad\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-person\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-people\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-person-add\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-contact\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-contacts\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-playstore\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-lock\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-unlock\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-microphone\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-microphone-off\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-notifications-none\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-notifications\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-notifications-off\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-volume-mute\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-volume-down\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-volume-up\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-volume-off\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-hand\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-desktop\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-laptop\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-phone-portrait\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-phone-landscape\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-bulb\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-sunny\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-alert\"></li>\r\n        <li data-pack=\"android\" class=\"ion-android-warning\">\r\n            <!--\r\n      End Android-style icons pack.\r\n      Android-style icons originally built by Google’s [Material Design Icons](https://github.com/google/material-design-icons), used under [CC BY](http://creativecommons.org/licenses/by/4.0/) / Modified icons to fit ionicon’s grid from original.\r\n      -->\r\n        </li>\r\n        <li data-pack=\"social\" class=\"ion-social-twitter\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-twitter-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-facebook\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-facebook-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-googleplus\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-googleplus-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-google\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-google-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-dribbble\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-dribbble-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-octocat\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-github\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-github-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-instagram\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-instagram-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-whatsapp\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-whatsapp-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-snapchat\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-snapchat-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-foursquare\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-foursquare-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-pinterest\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-pinterest-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-rss\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-rss-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-tumblr\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-tumblr-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-wordpress\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-wordpress-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-reddit\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-reddit-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-hackernews\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-hackernews-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-designernews\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-designernews-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-yahoo\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-yahoo-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-buffer\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-buffer-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-skype\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-skype-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-linkedin\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-linkedin-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-vimeo\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-vimeo-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-twitch\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-twitch-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-youtube\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-youtube-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-dropbox\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-dropbox-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-apple\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-apple-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-android\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-android-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-windows\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-windows-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-html5\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-html5-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-css3\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-css3-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-javascript\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-javascript-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-angular\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-angular-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-nodejs\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-sass\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-python\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-chrome\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-chrome-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-codepen\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-codepen-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-markdown\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-tux\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-freebsd-devil\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-usd\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-usd-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-bitcoin\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-bitcoin-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-yen\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-yen-outline\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-euro\"></li>\r\n        <li data-pack=\"social\" class=\"ion-social-euro-outline\"></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = (function () {
    function IconsComponent(pt) {
        pt.setTitle('Icons');
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-icons',
        template: __webpack_require__("../../../../../src/app/routes/elements/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/icons/icons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], IconsComponent);

var _a;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/modals/modals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-md\">\r\n    <div class=\"cardbox mb-3\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Modals</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"modal d-block\" style=\"position: relative; z-index: 0;\">\r\n                <div class=\"modal-dialog shadow-z5\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Modal title</h5>\r\n                            <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <p>Modal body text goes here.</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                            <button class=\"btn btn-primary\" type=\"button\">Save changes</button>\r\n                            <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox mb-3\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Live demo</div>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"d-flex flex-column flex-sm-row\">\r\n                <button class=\"mr-2 mb-2 btn btn-primary\" type=\"button\" (click)=\"modalStd.show()\">Default modal</button>\r\n                <button class=\"mr-2 mb-2 btn btn-primary\" type=\"button\" (click)=\"modalLg.show()\">Large modal</button>\r\n                <button class=\"mr-2 mb-2 btn btn-primary\" type=\"button\" (click)=\"modalSm.show()\">Small modal</button>\r\n                <button class=\"mr-2 mb-2 btn btn-info\" type=\"button\" (click)=\"modalForm.show()\">Form modal</button>\r\n                <button class=\"mr-2 mb-2 btn btn-danger\" type=\"button\" (click)=\"modalAlert.show()\">Alert modal</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"cardbox mb-3\">\r\n        <div class=\"cardbox-heading\">\r\n            <div class=\"cardbox-title\">Modal Positions</div><small>Modals can be located to different location by attaching any of the classes <code>.modal-top</code><code>.modal-bottom</code><code>.modal-left</code><code>.modal-right</code>to the root element<br><span>This modals can have any content and can be used as secondary sidebars.</span></small>\r\n        </div>\r\n        <div class=\"cardbox-body\">\r\n            <div class=\"d-flex flex-column flex-sm-row\">\r\n                <button class=\"mr-2 mb-2 btn btn-success\" type=\"button\" (click)=\"modalTop.show()\"><strong>Top modal</strong></button>\r\n                <button class=\"mr-2 mb-2 btn btn-success\" type=\"button\" (click)=\"modalBottom.show()\"><strong>Bottom modal</strong></button>\r\n                <button class=\"mr-2 mb-2 btn btn-success\" type=\"button\" (click)=\"modalLeft.show()\"><strong>Left modal</strong></button>\r\n                <button class=\"mr-2 mb-2 btn btn-success\" type=\"button\" (click)=\"modalRight.show()\"><strong>Right modal</strong></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Default modal-->\r\n<div bsModal class=\"modal fade\" #modalStd=\"bs-modal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Default modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Mauris eu lacus massa, vel condimentum lectus.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Large modal-->\r\n<div bsModal class=\"modal fade\" #modalLg=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Large modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Mauris eu lacus massa, vel condimentum lectus.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Small Modal-->\r\n<div bsModal class=\"modal fade\" #modalSm=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Small modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vestibulum molestie commodo elit ut feugiat.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Form Modal-->\r\n<div bsModal class=\"modal fade\" #modalForm=\"bs-modal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Form modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"recipient\">To:</label>\r\n                        <input class=\"form-control\" id=\"recipient\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"message-content\">Message content:</label>\r\n                        <textarea class=\"form-control\" id=\"message-content\"></textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Close</button>\r\n                <button class=\"btn btn-info\" type=\"button\">Save changes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Alert Modal-->\r\n<div bsModal class=\"modal fade\" #modalAlert=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body bg-gradient-danger text-white\">\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><em class=\"text-white ion-close\"></em></button><strong class=\"text-white\">Important message from Modals</strong>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Top Modal-->\r\n<div bsModal class=\"modal fade modal-top\" #modalTop=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Top Modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vestibulum rutrum venenatis pretium. Mauris a velit id neque dignissim congue. Nullam lobortis consectetur hendrerit. </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Bottom Modal-->\r\n<div bsModal class=\"modal fade modal-bottom\" #modalBottom=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Bottom Modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vestibulum rutrum venenatis pretium. Mauris a velit id neque dignissim congue. Nullam lobortis consectetur hendrerit. </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Left Modal-->\r\n<div bsModal class=\"modal fade modal-left\" #modalLeft=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Left Modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vestibulum rutrum venenatis pretium. Mauris a velit id neque dignissim congue. Nullam lobortis consectetur hendrerit. </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Right Modal-->\r\n<div bsModal class=\"modal fade modal-right\" #modalRight=\"bs-modal\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"mt-0 modal-title\">Right Modal</h5>\r\n                <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Vestibulum rutrum venenatis pretium. Mauris a velit id neque dignissim congue. Nullam lobortis consectetur hendrerit. </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/modals/modals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/modals/modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalsComponent = (function () {
    function ModalsComponent(pt) {
        pt.setTitle('Modals');
    }
    ModalsComponent.prototype.ngOnInit = function () {
    };
    return ModalsComponent;
}());
ModalsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modals',
        template: __webpack_require__("../../../../../src/app/routes/elements/modals/modals.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/modals/modals.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], ModalsComponent);

var _a;
//# sourceMappingURL=modals.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/nestable/nestable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h5 class=\"mt-0\">Drag & drop hierarchical list with mouse and touch compatibility (jQuery plugin)</h5>\r\n    <p class=\"mb-4\">Based on <a href=\"https://github.com/dbushell/Nestable\">jQuery Nestable</a></p>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"dd\" id=\"nestable\">\r\n                <ol class=\"dd-list list-unstyled\">\r\n                    <li class=\"dd-item\" data-id=\"1\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/01.jpg\" alt=\"List user\"></div>\r\n                                    <div>\r\n                                        <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                        <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"dd-item\" data-id=\"2\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/02.jpg\" alt=\"List user\"></div>\r\n                                    <div>\r\n                                        <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                        <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ol class=\"dd-list list-unstyled\">\r\n                            <li class=\"dd-item\" data-id=\"3\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex\">\r\n                                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/03.jpg\" alt=\"List user\"></div>\r\n                                            <div>\r\n                                                <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"dd-item\" data-id=\"4\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex\">\r\n                                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/04.jpg\" alt=\"List user\"></div>\r\n                                            <div>\r\n                                                <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"dd-item\" data-id=\"5\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex\">\r\n                                            <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/05.jpg\" alt=\"List user\"></div>\r\n                                            <div>\r\n                                                <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                                <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ol class=\"dd-list list-unstyled\">\r\n                                    <li class=\"dd-item\" data-id=\"6\">\r\n                                        <div class=\"cardbox b0 dd-handle\">\r\n                                            <div class=\"cardbox-body\">\r\n                                                <div class=\"d-flex\">\r\n                                                    <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/06.jpg\" alt=\"List user\"></div>\r\n                                                    <div>\r\n                                                        <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                                        <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ol>\r\n                            </li>\r\n                        </ol>\r\n                    </li>\r\n                    <li class=\"dd-item\" data-id=\"11\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex\">\r\n                                    <div class=\"mr-4\"><img class=\"thumb48 rounded-circle\" src=\"assets/img/user/07.jpg\" alt=\"List user\"></div>\r\n                                    <div>\r\n                                        <div class=\"lead\"><a href=\"javascript:\">Eric Graves</a></div>\r\n                                        <div class=\"text-muted text-ellipsis\">Ut ac nisi id mauris</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n            <p>Output</p>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div>{{output1}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"dd\" id=\"nestable2\">\r\n                <ol class=\"dd-list list-unstyled\">\r\n                    <li class=\"dd-item\" data-id=\"1\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                    <div>\r\n                                        <div class=\"text-bold\">Pictures</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"dd-item\" data-id=\"2\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                    <div>\r\n                                        <div class=\"text-bold\">Documents</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ol class=\"dd-list list-unstyled\">\r\n                            <li class=\"dd-item\" data-id=\"3\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex align-items-center\">\r\n                                            <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                            <div>\r\n                                                <div class=\"text-bold\">Projects</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"dd-item\" data-id=\"4\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex align-items-center\">\r\n                                            <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                            <div>\r\n                                                <div class=\"text-bold\">Clients</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"dd-item\" data-id=\"5\">\r\n                                <div class=\"cardbox b0 dd-handle\">\r\n                                    <div class=\"cardbox-body\">\r\n                                        <div class=\"d-flex align-items-center\">\r\n                                            <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                            <div>\r\n                                                <div class=\"text-bold\">Invoices</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ol class=\"dd-list list-unstyled\">\r\n                                    <li class=\"dd-item\" data-id=\"6\">\r\n                                        <div class=\"cardbox b0 dd-handle\">\r\n                                            <div class=\"cardbox-body\">\r\n                                                <div class=\"d-flex align-items-center\">\r\n                                                    <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                                    <div>\r\n                                                        <div class=\"text-bold\">Last year</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ol>\r\n                            </li>\r\n                        </ol>\r\n                    </li>\r\n                    <li class=\"dd-item\" data-id=\"11\">\r\n                        <div class=\"cardbox b0 dd-handle\">\r\n                            <div class=\"cardbox-body\">\r\n                                <div class=\"d-flex align-items-center\">\r\n                                    <div class=\"mr-4\"><em class=\"ion-folder icon-3x text-info\"></em></div>\r\n                                    <div>\r\n                                        <div class=\"text-bold\">Movies</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ol>\r\n            </div>\r\n            <p>Output</p>\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <div>{{output2}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/nestable/nestable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dd {\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 0;\n  max-width: 600px;\n  list-style: none;\n  font-size: 13px;\n  line-height: 20px; }\n\n.dd-list {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .dd-list .dd-list {\n    padding-left: 30px; }\n\n.dd-collapsed .dd-list {\n  display: none; }\n\n.dd-item,\n.dd-empty,\n.dd-placeholder {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  min-height: 20px;\n  font-size: 13px;\n  line-height: 20px; }\n\n.dd-handle {\n  display: block;\n  margin: 5px 0;\n  padding: 5px 0;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 3px; }\n\n.dd-placeholder,\n.dd-empty {\n  margin: 5px 0;\n  padding: 0;\n  min-height: 30px;\n  border: 1px dashed #b6bcbf;\n  box-sizing: border-box; }\n\n.dd-empty {\n  border: 1px dashed #bbb;\n  min-height: 100px;\n  background-color: #e5e5e5;\n  background-size: 60px 60px;\n  background-position: 0 0, 30px 30px; }\n\n.dd-dragel {\n  position: absolute;\n  pointer-events: none;\n  z-index: 9999; }\n  .dd-dragel > .dd-item .dd-handle {\n    margin-top: 0; }\n\n.dd-item > button {\n  display: none !important;\n  position: absolute;\n  display: block;\n  right: 5px;\n  top: 5px;\n  width: 25px;\n  height: 30px;\n  padding: 0;\n  text-indent: 100%;\n  overflow: hidden;\n  border: 0;\n  background: transparent;\n  z-index: 10; }\n  .dd-item > button:before {\n    content: '+';\n    position: absolute;\n    display: block;\n    width: 100%;\n    text-indent: 0;\n    font-weight: bold;\n    color: #a2a2a2;\n    font-size: 2rem; }\n\n.dd-item > button[data-action=\"collapse\"]:before {\n  content: '-'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/nestable/nestable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_nestable_jquery_nestable_js__ = __webpack_require__("../../../../nestable/jquery.nestable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_nestable_jquery_nestable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_nestable_jquery_nestable_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NestableComponent = (function () {
    function NestableComponent(pt) {
        this.output1 = '';
        this.output2 = '';
        pt.setTitle('Nestable');
    }
    NestableComponent.prototype.ngOnInit = function () {
        this.nestable1 = $('#nestable');
        this.nestable2 = $('#nestable2');
        // activate Nestable for list 1
        this.nestable1.nestable({
            group: 1
        })
            .on('change', this.updateOutput.bind(this));
        // activate Nestable for list 2
        this.nestable2.nestable({
            group: 1
        })
            .on('change', this.updateOutput.bind(this));
    };
    NestableComponent.prototype.updateOutput = function () {
        this.output1 = JSON.stringify(this.nestable1.nestable('serialize'));
        this.output2 = JSON.stringify(this.nestable2.nestable('serialize'));
    };
    return NestableComponent;
}());
NestableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nestable',
        template: __webpack_require__("../../../../../src/app/routes/elements/nestable/nestable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/nestable/nestable.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], NestableComponent);

var _a;
//# sourceMappingURL=nestable.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/spinners/spinners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h5 class=\"mt-0\">Loaders.css</h5>\r\n    <p class=\"mb-4\">Delightful and performance-focused pure css loading animations.</p>\r\n    <div class=\"row loader-primary\">\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-pulse</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-pulse\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-grid-pulse</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-grid-pulse\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-clip-rotate</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-clip-rotate\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-clip-rotate-pulse</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-clip-rotate-pulse\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">square-spin</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner square-spin\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-clip-rotate-multiple</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-clip-rotate-multiple\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-pulse-rise</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-pulse-rise\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-rotate</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-rotate\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">cube-transition</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner cube-transition\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-zig-zag</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-zig-zag\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-zig-zag-deflect</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-zig-zag-deflect\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-triangle-path</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-triangle-path\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-scale</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-scale\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">line-scale</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner line-scale\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">line-scale-party</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner line-scale-party\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-scale-multiple</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-scale-multiple\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-pulse-sync</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-pulse-sync\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-beat</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-beat\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">line-scale-pulse-out</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner line-scale-pulse-out\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">line-scale-pulse-out-rapid</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner line-scale-pulse-out-rapid\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-scale-ripple</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-scale-ripple\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-scale-ripple-multiple</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-scale-ripple-multiple\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-spin-fade-loader</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-spin-fade-loader\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">line-spin-fade-loader</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner line-spin-fade-loader\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">triangle-skew-spin</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner triangle-skew-spin\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">pacman</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner pacman\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">ball-grid-beat</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner ball-grid-beat\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">semi-circle-spin</div>\r\n                <div class=\"loader-demo\">\r\n                    <div class=\"loader-inner semi-circle-spin\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/spinners/spinners.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/spinners/spinners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnersComponent = (function () {
    function SpinnersComponent(pt) {
        pt.setTitle('Spinners');
    }
    SpinnersComponent.prototype.ngOnInit = function () {
        $('.loader-inner').loaders();
    };
    return SpinnersComponent;
}());
SpinnersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-spinners',
        template: __webpack_require__("../../../../../src/app/routes/elements/spinners/spinners.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/spinners/spinners.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], SpinnersComponent);

var _a;
//# sourceMappingURL=spinners.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/sweetalert/sweetalert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-md\">\r\n    <div class=\"list-group mb-3\">\r\n        <div class=\"list-group-item justify-content-between flex-nowrap\">\r\n            <p>A basic message</p>\r\n            <p><a class=\"btn btn-primary\" (click)=\"swalDemo1();\" href=\"javascript:\">Try me!</a></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"list-group mb-3\">\r\n        <div class=\"list-group-item justify-content-between flex-nowrap\">\r\n            <p>A title with a text under</p>\r\n            <p><a class=\"btn btn-primary\" (click)=\"swalDemo2();\" href=\"javascript:\">Try me!</a></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"list-group mb-3\">\r\n        <div class=\"list-group-item justify-content-between flex-nowrap\">\r\n            <p>A success message!</p>\r\n            <p><a class=\"btn btn-primary\" (click)=\"swalDemo3();\" href=\"javascript:\">Try me!</a></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"list-group mb-3\">\r\n        <div class=\"list-group-item justify-content-between flex-nowrap\">\r\n            <p>A warning message, with a function attached to the &quot;Confirm&quot;-button</p>\r\n            <p><a class=\"btn btn-primary\" (click)=\"swalDemo4();\" href=\"javascript:\">Try me!</a></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"list-group mb-3\">\r\n        <div class=\"list-group-item justify-content-between flex-nowrap\">\r\n            <p>... and by passing a parameter, you can execute something else for &quot;Cancel&quot;.</p>\r\n            <p><a class=\"btn btn-primary\" (click)=\"swalDemo5();\" href=\"javascript:\">Try me!</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/sweetalert/sweetalert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/sweetalert/sweetalert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetalertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var swal = __webpack_require__("../../../../sweetalert/lib/sweetalert.js");

var SweetalertComponent = (function () {
    function SweetalertComponent(pt) {
        pt.setTitle('Buttons');
    }
    SweetalertComponent.prototype.ngOnInit = function () { };
    SweetalertComponent.prototype.swalDemo1 = function () {
        swal('Here\'s a message!');
    };
    SweetalertComponent.prototype.swalDemo2 = function () {
        swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
    };
    SweetalertComponent.prototype.swalDemo3 = function () {
        swal('Good job!', 'You clicked the button!', 'success');
    };
    SweetalertComponent.prototype.swalDemo4 = function () {
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
        }, function () {
            swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
        });
    };
    SweetalertComponent.prototype.swalDemo5 = function () {
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel plx!',
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
            else {
                swal('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    return SweetalertComponent;
}());
SweetalertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sweetalert',
        template: __webpack_require__("../../../../../src/app/routes/elements/sweetalert/sweetalert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/sweetalert/sweetalert.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], SweetalertComponent);

var _a;
//# sourceMappingURL=sweetalert.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/toaster/toaster.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container [toasterconfig]=\"toasterConfig\"></toaster-container>\r\n<div class=\"container container-md\">\r\n    <div class=\"clearfix mb-4\">\r\n        <div class=\"float-right\">\r\n            <button class=\"btn btn-danger\" (click)=\"clearAll()\" type=\"button\">Clear all</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Right Info</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-info\" (click)=\"showToaster('info', 'toast-top-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Left Info</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-info\" (click)=\"showToaster('info', 'toast-top-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Right Info</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-info\" (click)=\"showToaster('info', 'toast-bottom-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Left Info</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-info\" (click)=\"showToaster('info', 'toast-bottom-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Right Success</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-success\" (click)=\"showToaster('success', 'toast-top-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Left Success</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-success\" (click)=\"showToaster('success', 'toast-top-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Right Success</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-success\" (click)=\"showToaster('success', 'toast-bottom-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Left Success</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-success\" (click)=\"showToaster('success', 'toast-bottom-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Right Warning</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-warning\" (click)=\"showToaster('warning', 'toast-top-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Left Warning</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-warning\" (click)=\"showToaster('warning', 'toast-top-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Right Warning</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-warning\" (click)=\"showToaster('warning', 'toast-bottom-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Left Warning</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-warning\" (click)=\"showToaster('warning', 'toast-bottom-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Right Error</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-danger\" (click)=\"showToaster('error', 'toast-top-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Top Left Error</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-danger\" (click)=\"showToaster('error', 'toast-top-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Right Error</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-danger\" (click)=\"showToaster('error', 'toast-bottom-right')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Bottom Left Error</div>\r\n                <div class=\"card-block text-center\">\r\n                    <button class=\"btn btn-danger\" (click)=\"showToaster('error', 'toast-bottom-left')\" type=\"button\">Click</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div><small class=\"text-muted\">If Toastr shows all toasts in the same position, click on 'Clear all' button and wait a few seconds for the container to be removed.</small>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/toaster/toaster.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toast {\n  background-color: #ECEFF1; }\n\n.toast-success {\n  background-color: #4CAF50; }\n\n.toast-error {\n  background-color: #FF5252; }\n\n.toast-info {\n  background-color: #03A9F4; }\n\n.toast-warning {\n  background-color: #FF9800; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/toaster/toaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToasterComponent = (function () {
    function ToasterComponent(toasterService, pt) {
        this.toasterService = toasterService;
        this.toasterConfig = new __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["c" /* ToasterConfig */]({
            positionClass: 'toast-top-right'
        });
        pt.setTitle('Toastr');
    }
    ToasterComponent.prototype.showToaster = function (type, positionClass) {
        this.toasterConfig.positionClass = positionClass;
        this.toasterService.pop(type, '', 'My name is Inigo Montoya. You killed my father, prepare to die!');
    };
    ToasterComponent.prototype.clearAll = function () {
        this.toasterService.clear();
    };
    return ToasterComponent;
}());
ToasterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toaster',
        template: __webpack_require__("../../../../../src/app/routes/elements/toaster/toaster.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/toaster/toaster.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _b || Object])
], ToasterComponent);

var _a, _b;
//# sourceMappingURL=toaster.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <p>Bootstrap includes simple and easily customized typography for headings, body text, lists, and more. For even more control, check out the textual utility classes.</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Headings\r\n                    <p class=\"text-muted\">All HTML headings,<code class=\"highlighter-rouge\">&lt;h1&gt;</code> through<code>&lt;h6&gt;</code>, are available.</p>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h1>This is a Heading 1</h1>\r\n                    <p class=\"text-muted\">Etiam at enim quis nulla facilisis lacinia.</p>\r\n                    <h2>This is a Heading 2</h2>\r\n                    <p class=\"text-muted\">Pellentesque sollicitudin sollicitudin erat, in imperdiet tortor fringilla ut.</p>\r\n                    <h3>This is a Heading 3</h3>\r\n                    <p class=\"text-muted\">Ut et ligula ante, nec mollis lacus.</p>\r\n                    <h4>This is a Heading 4</h4>\r\n                    <p class=\"text-muted\">Duis mollis risus et nibh tincidunt in elementum sapien facilisis.</p>\r\n                    <h5>This is a Heading 5</h5>\r\n                    <p class=\"text-muted\">Suspendisse aliquam dignissim dictum.</p>\r\n                    <h6>This is a Heading 6</h6>\r\n                    <p class=\"text-muted\">Quisque sit amet tristique purus.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Display headings\r\n                    <p class=\"text-muted\">When you need a heading to stand out, consider using a display heading</p>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <div class=\"display-1 mb-4\">Display 1</div>\r\n                    <div class=\"display-2 mb-4\">Display 2</div>\r\n                    <div class=\"display-3 mb-4\">Display 3</div>\r\n                    <div class=\"display-4 mb-4\">Display 4</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Inline text elements</div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"lead\">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>\r\n                    <p>You can use the mark tag to\r\n                        <mark>highlight</mark> text.\r\n                    </p>\r\n                    <p>\r\n                        <del>This line of text is meant to be treated as deleted text.</del>\r\n                    </p>\r\n                    <p>\r\n                        <s>This line of text is meant to be treated as no longer accurate.</s>\r\n                    </p>\r\n                    <p>\r\n                        <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n                    </p>\r\n                    <p>\r\n                        <u>This line of text will render as underlined</u>\r\n                    </p>\r\n                    <p><small>This line of text is meant to be treated as fine print.</small></p>\r\n                    <p><strong>This line rendered as bold text.</strong></p>\r\n                    <p><em>This line rendered as italicized text.</em></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Contextual Text Colors</div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\r\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\r\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\r\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Lists</div>\r\n                <div class=\"card-block\">\r\n                    <p>Unordered</p>\r\n                    <ul>\r\n                        <li>Lorem ipsum dolor sit amet</li>\r\n                        <li>Consectetur adipiscing elit</li>\r\n                        <li>Integer molestie lorem at massa</li>\r\n                        <li>Facilisis in pretium nisl aliquet</li>\r\n                        <li><strong>Nulla volutpat aliquam velit</strong>\r\n                            <ul>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                            </ul>\r\n                        </li>\r\n                        <li>Aenean sit amet erat nunc</li>\r\n                        <li>Eget porttitor lorem</li>\r\n                    </ul>\r\n                    <p>Ordered</p>\r\n                    <ol>\r\n                        <li>Lorem ipsum dolor sit amet</li>\r\n                        <li>Consectetur adipiscing elit</li>\r\n                        <li>Facilisis in pretium nisl aliquet</li>\r\n                        <li>Nulla volutpat aliquam velit\r\n                            <ol>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                                <li>Duis ut nibh sapien.</li>\r\n                            </ol>\r\n                        </li>\r\n                        <li>Faucibus porta lacus fringilla vel</li>\r\n                        <li>Aenean sit amet erat nunc</li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card mb-4\">\r\n                <div class=\"card-header\">Blockquote</div>\r\n                <div class=\"card-block\">\r\n                    <blockquote class=\"blockquote\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                    </blockquote>\r\n                    <blockquote class=\"blockquote\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                        <footer class=\"blockquote-footer\">Someone famous in\r\n                            <cite title=\"Source Title\">Source Title</cite>\r\n                        </footer>\r\n                    </blockquote>\r\n                    <blockquote class=\"blockquote blockquote-reverse\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                        <footer class=\"blockquote-footer\">Someone famous in\r\n                            <cite title=\"Source Title\">Source Title</cite>\r\n                        </footer>\r\n                    </blockquote>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">Description list alignment</div>\r\n        <div class=\"card-block\">\r\n            <dl class=\"row\">\r\n                <dt class=\"col-sm-3\">Description lists</dt>\r\n                <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n                <dt class=\"col-sm-3\">Euismod</dt>\r\n                <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n                <dd class=\"col-sm-9 offset-sm-3\">Donec id elit non mi porta gravida at eget metus.</dd>\r\n                <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n                <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n                <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n                <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n                <dt class=\"col-sm-3\">Nesting</dt>\r\n                <dd class=\"col-sm-9\">\r\n                    <dl class=\"row\">\r\n                        <dt class=\"col-sm-4\">Nested definition list</dt>\r\n                        <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\r\n                    </dl>\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = (function () {
    function TypographyComponent(pt) {
        pt.setTitle('Typography');
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/routes/elements/typography/typography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/typography/typography.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], TypographyComponent);

var _a;
//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/elements/utilities/utilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h5>Utility classes</h5>\r\n    <p>Helpers classes to help build components without adding extra css. Default values can be changed via CSS or LESS @variables.</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Sizes</div>\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td><code>.fh / .fw</code></td>\r\n                        <td>Height or Width at 100%</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.fh-sm / .fw-sm</code></td>\r\n                        <td>Height or Width at 100% above 768px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.fh-md / .fw-md</code></td>\r\n                        <td>Height or Width at 100% above 992px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.fh-lg / .fw-lg</code></td>\r\n                        <td>Height or Width at 100% above 1200px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb8</code></td>\r\n                        <td>Set width and height of 8px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb16</code></td>\r\n                        <td>Set width and height of 16px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb24</code></td>\r\n                        <td>Set width and height of 24px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb32</code></td>\r\n                        <td>Set width and height of 32px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb40</code></td>\r\n                        <td>Set width and height of 40px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb48</code></td>\r\n                        <td>Set width and height of 48px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb64</code></td>\r\n                        <td>Set width and height of 64px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb80</code></td>\r\n                        <td>Set width and height of 80px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb96</code></td>\r\n                        <td>Set width and height of 96px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.thumb128</code></td>\r\n                        <td>Circle with radius 128px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial8</code></td>\r\n                        <td>Circle with radius 8px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial16</code></td>\r\n                        <td>Circle with radius 16px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial24</code></td>\r\n                        <td>Circle with radius 24px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial32</code></td>\r\n                        <td>Circle with radius 32px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial40</code></td>\r\n                        <td>Circle with radius 40px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial48</code></td>\r\n                        <td>Circle with radius 48px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial64</code></td>\r\n                        <td>Circle with radius 64px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial80</code></td>\r\n                        <td>Circle with radius 80px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial96</code></td>\r\n                        <td>Circle with radius 96px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.initial128</code></td>\r\n                        <td>Circle with radius 128px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-xxs</code></td>\r\n                        <td>Set width of 60px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-xs</code></td>\r\n                        <td>Set width of 90px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-sm</code></td>\r\n                        <td>Set width of 150px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-sd</code></td>\r\n                        <td>Set width of 200px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-md</code></td>\r\n                        <td>Set width of 240px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-lg</code></td>\r\n                        <td>Set width of 280px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-xl</code></td>\r\n                        <td>Set width of 320px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-xxl</code></td>\r\n                        <td>Set width of 360px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-wide</code></td>\r\n                        <td>Set width of 100%</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-auto</code></td>\r\n                        <td>Set width auto</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.wd-zero</code></td>\r\n                        <td>Set width of 0px</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Miscellaneous</div>\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td><code>.table-fixed</code></td>\r\n                        <td>Make table layout fixed</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.oh</code></td>\r\n                        <td>Overflow hidden (clear floats)</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.oa</code></td>\r\n                        <td>Overflow auto (adds scrollbars)</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.shadow-clear</code></td>\r\n                        <td>Remove box shadow</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.radius-clear</code></td>\r\n                        <td>Remove border radius</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.link-unstyled</code></td>\r\n                        <td>Remove underline and outline styles</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.reader-block</code></td>\r\n                        <td>Makes paragraphs more readable</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.image-list</code></td>\r\n                        <td>A list of images links overlap to the previous</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>textarea.no-resize</code></td>\r\n                        <td>Remove resize option from Texareas</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.inline</code></td>\r\n                        <td>Forces display: inline</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.block</code></td>\r\n                        <td>Forces display: block</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6 col-xs-12\">\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\">Text &amp; Font icons</div>\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td><code>.text-white</code></td>\r\n                        <td>Make text color white</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-alpha</code></td>\r\n                        <td>Make text color white 50% opacity</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-alpha-inverse</code></td>\r\n                        <td>Make text color dark 50% opacity</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-gray-darker</code></td>\r\n                        <td>Make text color @gray-darker</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-gray-dark</code></td>\r\n                        <td>Make text color @gray-dark</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-gray</code></td>\r\n                        <td>Make text color @gray</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-gray-light</code></td>\r\n                        <td>Make text color @gray-light</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-gray-lighter</code></td>\r\n                        <td>Make text color @gray-lighter</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-inherit</code></td>\r\n                        <td>Make text color inherit</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-soft</code></td>\r\n                        <td>Make text color black 26% opacity</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-light</code></td>\r\n                        <td>Make text color white 74% opacity</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-sm</code></td>\r\n                        <td>Make text 85% smaller</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-md</code></td>\r\n                        <td>Make text 90% bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-lg</code></td>\r\n                        <td>Make text 3x bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-nowrap</code></td>\r\n                        <td>Make text no wrap</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-thin</code></td>\r\n                        <td>Make text font weight 100</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-bold</code></td>\r\n                        <td>Make text font weight bold</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.text-normal</code></td>\r\n                        <td>Make text font weight normal</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-18</code></td>\r\n                        <td>Make icon at font size 18px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-24</code></td>\r\n                        <td>Make icon at font size 24px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-36</code></td>\r\n                        <td>Make icon at font size 36px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-48</code></td>\r\n                        <td>Make icon at font size 48px</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-2x</code></td>\r\n                        <td>Make icon 2x bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-3x</code></td>\r\n                        <td>Make icon 3x bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-4x</code></td>\r\n                        <td>Make icon 4x bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-5x</code></td>\r\n                        <td>Make icon 5x bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-lg</code></td>\r\n                        <td>Make icon 33% bigger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-fw</code></td>\r\n                        <td>Make icon fixed width</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-dark</code></td>\r\n                        <td>Make icon dark for light backgrounds</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.icon-light</code></td>\r\n                        <td>Make icon light for dark backgrounds</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"cardbox\">\r\n                <div class=\"cardbox-heading\"><small class=\"float-right\"><a href=\"colors.html\">More Colors</a></small>Backgrounds</div>\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td><code>.bg-white</code></td>\r\n                        <td>Make background color white</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-primary</code></td>\r\n                        <td>Make background color @primary</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-success</code></td>\r\n                        <td>Make background color @success</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-info</code></td>\r\n                        <td>Make background color @info</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-warning</code></td>\r\n                        <td>Make background color @warning</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-danger</code></td>\r\n                        <td>Make background color @danger</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-gray-darker</code></td>\r\n                        <td>Make background color @gray-darker</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-gray-dark</code></td>\r\n                        <td>Make background color @gray-dark</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-gray</code></td>\r\n                        <td>Make background color @gray</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-gray-light</code></td>\r\n                        <td>Make background color @gray-light</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-gray-lighter</code></td>\r\n                        <td>Make background color @gray-lighter</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-transparent</code></td>\r\n                        <td>Make background color transparent</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-fade</code></td>\r\n                        <td>Make background dark faded from bottom</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-cover</code></td>\r\n                        <td>Make background image cover</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-full</code></td>\r\n                        <td>Make background image cover and no-repeat</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><code>.bg-center</code></td>\r\n                        <td>Make background image cover and centered</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/elements/utilities/utilities.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/elements/utilities/utilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilitiesComponent = (function () {
    function UtilitiesComponent(pt) {
        pt.setTitle('Utilities');
    }
    UtilitiesComponent.prototype.ngOnInit = function () {
    };
    return UtilitiesComponent;
}());
UtilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utilities',
        template: __webpack_require__("../../../../../src/app/routes/elements/utilities/utilities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/elements/utilities/utilities.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _a || Object])
], UtilitiesComponent);

var _a;
//# sourceMappingURL=utilities.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/angular2-toaster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* unused harmony reexport ToastComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* unused harmony reexport ToasterContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toaster_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toaster_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* unused harmony reexport BodyOutputType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__ = __webpack_require__("../../../../angular2-toaster/src/toaster.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_toaster_module__["a"]; });






//# sourceMappingURL=angular2-toaster.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/bodyOutputType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyOutputType; });
var BodyOutputType;
(function (BodyOutputType) {
    BodyOutputType[BodyOutputType["Default"] = 0] = "Default";
    BodyOutputType[BodyOutputType["TrustedHtml"] = 1] = "TrustedHtml";
    BodyOutputType[BodyOutputType["Component"] = 2] = "Component";
})(BodyOutputType || (BodyOutputType = {}));
//# sourceMappingURL=bodyOutputType.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toast.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });



var ToastComponent = (function () {
    function ToastComponent(sanitizer, componentFactoryResolver, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.bodyOutputType = __WEBPACK_IMPORTED_MODULE_2__bodyOutputType__["a" /* BodyOutputType */];
        this.clickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToastComponent.prototype.ngOnInit = function () {
        if (this.toast.closeHtml) {
            this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
        }
    };
    ToastComponent.prototype.ngAfterViewInit = function () {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            var component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            var componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
    };
    ToastComponent.prototype.click = function (event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({
            value: { toast: toast, isCloseButton: true }
        });
    };
    return ToastComponent;
}());

ToastComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toastComp]',
                template: "\n        <i class=\"toaster-icon\" [ngClass]=\"iconClass\"></i>\n        <div class=\"toast-content\">\n            <div [ngClass]=\"toast.toasterConfig?.titleClass\">{{toast.title}}</div>\n            <div [ngClass]=\"toast.toasterConfig?.messageClass\" [ngSwitch]=\"toast.bodyOutputType\">\n                <div *ngSwitchCase=\"bodyOutputType.Component\" #componentBody></div>\n                <div *ngSwitchCase=\"bodyOutputType.TrustedHtml\" [innerHTML]=\"toast.body\"></div>\n                <div *ngSwitchCase=\"bodyOutputType.Default\">{{toast.body}}</div>\n            </div>\n        </div>\n        <div class=\"toast-close-button\" *ngIf=\"toast.showCloseButton\" (click)=\"click($event, toast)\"\n            [innerHTML]=\"safeCloseHtml\">\n        </div>"
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToastComponent.propDecorators = {
    'toast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'iconClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'componentBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['componentBody', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
    'clickEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__ = __webpack_require__("../../../../angular2-toaster/src/bodyOutputType.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterConfig; });

var ToasterConfig = (function () {
    function ToasterConfig(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<button class="toast-close-button" type="button">&times;</button>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || {
            error: 'toast-error',
            info: 'toast-info',
            wait: 'toast-wait',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        this.iconClasses = configOverrides.iconClasses || {
            error: 'icon-error',
            info: 'icon-info',
            wait: 'icon-wait',
            success: 'icon-success',
            warning: 'icon-warning'
        };
        this.bodyOutputType = configOverrides.bodyOutputType || __WEBPACK_IMPORTED_MODULE_0__bodyOutputType__["a" /* BodyOutputType */].Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultTypeClass = configOverrides.defaultTypeClass || 'toast-info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
    return ToasterConfig;
}());

//# sourceMappingURL=toaster-config.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toaster_config__ = __webpack_require__("../../../../angular2-toaster/src/toaster-config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterContainerComponent; });




var ToasterContainerComponent = (function () {
    function ToasterContainerComponent(toasterService, ref) {
        this.ref = ref;
        this.toasts = [];
        this.toasterService = toasterService;
    }
    ToasterContainerComponent.prototype.ngOnInit = function () {
        this.registerSubscribers();
        if (this.toasterconfig === null || typeof this.toasterconfig === 'undefined') {
            this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_2__toaster_config__["a" /* ToasterConfig */]();
        }
    };
    // event handlers
    ToasterContainerComponent.prototype.click = function (toast, isCloseButton) {
        if (this.toasterconfig.tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            var removeToast = true;
            if (toast.clickHandler) {
                if (typeof toast.clickHandler === "function") {
                    removeToast = toast.clickHandler(toast, isCloseButton);
                }
                else {
                    console.log("The toast click handler is not a callable function.");
                    return false;
                }
            }
            if (removeToast) {
                this.removeToast(toast);
            }
        }
    };
    ToasterContainerComponent.prototype.childClick = function ($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    };
    ToasterContainerComponent.prototype.stopTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (toast.timeoutId) {
                window.clearTimeout(toast.timeoutId);
                toast.timeoutId = null;
            }
        }
    };
    ToasterContainerComponent.prototype.restartTimer = function (toast) {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!toast.timeoutId) {
                this.configureTimer(toast);
            }
        }
        else if (toast.timeoutId === null) {
            this.removeToast(toast);
        }
    };
    // private functions
    ToasterContainerComponent.prototype.registerSubscribers = function () {
        var _this = this;
        this.addToastSubscriber = this.toasterService.addToast.subscribe(function (toast) {
            _this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe(function (clearWrapper) {
            _this.clearToasts(clearWrapper);
        });
    };
    ToasterContainerComponent.prototype.addToast = function (toast) {
        toast.toasterConfig = this.toasterconfig;
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId)
            return;
        if (!toast.type) {
            toast.type = this.toasterconfig.defaultTypeClass;
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(function (t) { return t.toastId === toast.toastId; })) {
                return;
            }
            else if (this.toasts.some(function (t) { return t.body === toast.body; })) {
                return;
            }
        }
        if (toast.showCloseButton === null || typeof toast.showCloseButton === "undefined") {
            if (typeof this.toasterconfig.showCloseButton === "object") {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === "boolean") {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        this.configureTimer(toast);
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    };
    ToasterContainerComponent.prototype.configureTimer = function (toast) {
        var _this = this;
        var timeout = (typeof toast.timeout === "number")
            ? toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === "object")
            timeout = timeout[toast.type];
        if (timeout > 0) {
            toast.timeoutId = window.setTimeout(function () {
                _this.ref.markForCheck();
                _this.removeToast(toast);
            }, timeout);
        }
    };
    ToasterContainerComponent.prototype.isLimitExceeded = function () {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    };
    ToasterContainerComponent.prototype.removeToast = function (toast) {
        var index = this.toasts.indexOf(toast);
        if (index < 0)
            return;
        this.toasts.splice(index, 1);
        if (toast.timeoutId) {
            window.clearTimeout(toast.timeoutId);
            toast.timeoutId = null;
        }
        if (toast.onHideCallback)
            toast.onHideCallback(toast);
        this.toasterService._removeToastSubject.next({ toastId: toast.toastId, toastContainerId: toast.toastContainerId });
    };
    ToasterContainerComponent.prototype.removeAllToasts = function () {
        for (var i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    };
    ToasterContainerComponent.prototype.clearToasts = function (clearWrapper) {
        var toastId = clearWrapper.toastId;
        var toastContainerId = clearWrapper.toastContainerId;
        if (toastContainerId === null || typeof toastContainerId === 'undefined') {
            this.clearToastsAction(toastId);
        }
        else if (toastContainerId === this.toasterconfig.toastContainerId) {
            this.clearToastsAction(toastId);
        }
    };
    ToasterContainerComponent.prototype.clearToastsAction = function (toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(function (t) { return t.toastId === toastId; })[0]);
        }
        else {
            this.removeAllToasts();
        }
    };
    ToasterContainerComponent.prototype.ngOnDestroy = function () {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    };
    return ToasterContainerComponent;
}());

ToasterContainerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'toaster-container',
                template: "\n        <div id=\"toast-container\" [ngClass]=\"[toasterconfig.positionClass]\">\n            <div toastComp *ngFor=\"let toast of toasts\" class=\"toast\" [toast]=\"toast\"\n                [@toastState]=\"toasterconfig.animation\" \n                [iconClass]=\"toasterconfig.iconClasses[toast.type]\" \n                [ngClass]=\"toasterconfig.typeClasses[toast.type]\"\n                (click)=\"click(toast)\" (clickEvent)=\"childClick($event)\" \n                (mouseover)=\"stopTimer(toast)\" (mouseout)=\"restartTimer(toast)\">\n            </div>\n        </div>\n        ",
                // TODO: use styleUrls once Angular 2 supports the use of relative paths
                // https://github.com/angular/angular/issues/2383
                //styleUrls: ['./toaster.css']
                animations: [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('toastState', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('flyRight, flyLeft, slideDown, slideUp, fade', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translate(0,0)' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => flyRight', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateX(100%)'
                            }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.25s ease-in')
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('flyRight => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.25s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateX(100%)'
                            }))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => flyLeft', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.25s ease-in')
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('flyLeft => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.25s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateX(-100%)'
                            }))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => slideDown', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s ease-in')
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('slideDown => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateY(200%)'
                            }))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => slideUp', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateY(200%)'
                            }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s ease-in')
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('slideUp => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0, transform: 'translateY(-200%)'
                            }))
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('void => fade', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0,
                            }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s ease-in')
                        ]),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* transition */])('fade => void', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* animate */])('0.3s 10ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                                opacity: 0,
                            }))
                        ])
                    ]),
                ]
            },] },
];
/** @nocollapse */
ToasterContainerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toaster_service__["a" /* ToasterService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
ToasterContainerComponent.propDecorators = {
    'toasterconfig': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=toaster-container.component.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__("../../../../angular2-toaster/src/toast.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__ = __webpack_require__("../../../../angular2-toaster/src/toaster-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toaster_service__ = __webpack_require__("../../../../angular2-toaster/src/toaster.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterModule; });





var ToasterModule = (function () {
    function ToasterModule() {
    }
    return ToasterModule;
}());

ToasterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_4__toaster_service__["a" /* ToasterService */]],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__toaster_container_component__["a" /* ToasterContainerComponent */],
                    __WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* ToastComponent */]
                ]
            },] },
];
/** @nocollapse */
ToasterModule.ctorParameters = function () { return []; };
//# sourceMappingURL=toaster.module.js.map

/***/ }),

/***/ "../../../../angular2-toaster/src/toaster.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });




var ToasterService = (function () {
    /**
     * Creates an instance of ToasterService.
     */
    function ToasterService() {
        var _this = this;
        this.addToast = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._addToast = observer; }).share();
        this.clearToasts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) { return _this._clearToasts = observer; }).share();
        this._removeToastSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.removeToast = this._removeToastSubject.share();
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    ToasterService.prototype.pop = function (type, title, body) {
        var toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        toast.toastId = Guid.newGuid();
        if (!this._addToast) {
            throw new Error("No Toaster Containers have been initialized to receive toasts.");
        }
        this._addToast.next(toast);
        return toast;
    };
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    ToasterService.prototype.popAsync = function (type, title, body) {
        var _this = this;
        setTimeout(function () {
            _this.pop(type, title, body);
        }, 0);
        return this.addToast;
    };
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    ToasterService.prototype.clear = function (toastId, toastContainerId) {
        var clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts.next(clearWrapper);
    };
    return ToasterService;
}());

ToasterService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToasterService.ctorParameters = function () { return []; };
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../nestable/jquery.nestable.js":
/***/ (function(module, exports) {

/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
;(function($, window, document, undefined)
{
    var hasTouch = 'ontouchstart' in document;

    /**
     * Detect CSS pointer-events property
     * events are normally disabled on the dragging element to avoid conflicts
     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
     */
    var hasPointerEvents = (function()
    {
        var el    = document.createElement('div'),
            docEl = document.documentElement;
        if (!('pointerEvents' in el.style)) {
            return false;
        }
        el.style.pointerEvents = 'auto';
        el.style.pointerEvents = 'x';
        docEl.appendChild(el);
        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';
        docEl.removeChild(el);
        return !!supports;
    })();

    var defaults = {
            listNodeName    : 'ol',
            itemNodeName    : 'li',
            rootClass       : 'dd',
            listClass       : 'dd-list',
            itemClass       : 'dd-item',
            dragClass       : 'dd-dragel',
            handleClass     : 'dd-handle',
            collapsedClass  : 'dd-collapsed',
            placeClass      : 'dd-placeholder',
            noDragClass     : 'dd-nodrag',
            emptyClass      : 'dd-empty',
            expandBtnHTML   : '<button data-action="expand" type="button">Expand</button>',
            collapseBtnHTML : '<button data-action="collapse" type="button">Collapse</button>',
            group           : 0,
            maxDepth        : 5,
            threshold       : 20
        };

    function Plugin(element, options)
    {
        this.w  = $(document);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var list = this;

            list.reset();

            list.el.data('nestable-group', this.options.group);

            list.placeEl = $('<div class="' + list.options.placeClass + '"/>');

            $.each(this.el.find(list.options.itemNodeName), function(k, el) {
                list.setParent($(el));
            });

            list.el.on('click', 'button', function(e) {
                if (list.dragEl) {
                    return;
                }
                var target = $(e.currentTarget),
                    action = target.data('action'),
                    item   = target.parent(list.options.itemNodeName);
                if (action === 'collapse') {
                    list.collapseItem(item);
                }
                if (action === 'expand') {
                    list.expandItem(item);
                }
            });

            var onStartEvent = function(e)
            {
                var handle = $(e.target);
                if (!handle.hasClass(list.options.handleClass)) {
                    if (handle.closest('.' + list.options.noDragClass).length) {
                        return;
                    }
                    handle = handle.closest('.' + list.options.handleClass);
                }

                if (!handle.length || list.dragEl) {
                    return;
                }

                list.isTouch = /^touch/.test(e.type);
                if (list.isTouch && e.touches.length !== 1) {
                    return;
                }

                e.preventDefault();
                list.dragStart(e.touches ? e.touches[0] : e);
            };

            var onMoveEvent = function(e)
            {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragMove(e.touches ? e.touches[0] : e);
                }
            };

            var onEndEvent = function(e)
            {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragStop(e.touches ? e.touches[0] : e);
                }
            };

            if (hasTouch) {
                list.el[0].addEventListener('touchstart', onStartEvent, false);
                window.addEventListener('touchmove', onMoveEvent, false);
                window.addEventListener('touchend', onEndEvent, false);
                window.addEventListener('touchcancel', onEndEvent, false);
            }

            list.el.on('mousedown', onStartEvent);
            list.w.on('mousemove', onMoveEvent);
            list.w.on('mouseup', onEndEvent);

        },

        serialize: function()
        {
            var data,
                depth = 0,
                list  = this;
                step  = function(level, depth)
                {
                    var array = [ ],
                        items = level.children(list.options.itemNodeName);
                    items.each(function()
                    {
                        var li   = $(this),
                            item = $.extend({}, li.data()),
                            sub  = li.children(list.options.listNodeName);
                        if (sub.length) {
                            item.children = step(sub, depth + 1);
                        }
                        array.push(item);
                    });
                    return array;
                };
            data = step(list.el.find(list.options.listNodeName).first(), depth);
            return data;
        },

        serialise: function()
        {
            return this.serialize();
        },

        reset: function()
        {
            this.mouse = {
                offsetX   : 0,
                offsetY   : 0,
                startX    : 0,
                startY    : 0,
                lastX     : 0,
                lastY     : 0,
                nowX      : 0,
                nowY      : 0,
                distX     : 0,
                distY     : 0,
                dirAx     : 0,
                dirX      : 0,
                dirY      : 0,
                lastDirX  : 0,
                lastDirY  : 0,
                distAxX   : 0,
                distAxY   : 0
            };
            this.isTouch    = false;
            this.moving     = false;
            this.dragEl     = null;
            this.dragRootEl = null;
            this.dragDepth  = 0;
            this.hasNewRoot = false;
            this.pointEl    = null;
        },

        expandItem: function(li)
        {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action="expand"]').hide();
            li.children('[data-action="collapse"]').show();
            li.children(this.options.listNodeName).show();
        },

        collapseItem: function(li)
        {
            var lists = li.children(this.options.listNodeName);
            if (lists.length) {
                li.addClass(this.options.collapsedClass);
                li.children('[data-action="collapse"]').hide();
                li.children('[data-action="expand"]').show();
                li.children(this.options.listNodeName).hide();
            }
        },

        expandAll: function()
        {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function() {
                list.expandItem($(this));
            });
        },

        collapseAll: function()
        {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function() {
                list.collapseItem($(this));
            });
        },

        setParent: function(li)
        {
            if (li.children(this.options.listNodeName).length) {
                li.prepend($(this.options.expandBtnHTML));
                li.prepend($(this.options.collapseBtnHTML));
            }
            li.children('[data-action="expand"]').hide();
        },

        unsetParent: function(li)
        {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action]').remove();
            li.children(this.options.listNodeName).remove();
        },

        dragStart: function(e)
        {
            var mouse    = this.mouse,
                target   = $(e.target),
                dragItem = target.closest(this.options.itemNodeName);

            this.placeEl.css('height', dragItem.height());

            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;
            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;
            mouse.startX = mouse.lastX = e.pageX;
            mouse.startY = mouse.lastY = e.pageY;

            this.dragRootEl = this.el;

            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);
            this.dragEl.css('width', dragItem.width());

            dragItem.after(this.placeEl);
            dragItem[0].parentNode.removeChild(dragItem[0]);
            dragItem.appendTo(this.dragEl);

            $(document.body).append(this.dragEl);
            this.dragEl.css({
                'left' : e.pageX - mouse.offsetX,
                'top'  : e.pageY - mouse.offsetY
            });
            // total depth of dragging item
            var i, depth,
                items = this.dragEl.find(this.options.itemNodeName);
            for (i = 0; i < items.length; i++) {
                depth = $(items[i]).parents(this.options.listNodeName).length;
                if (depth > this.dragDepth) {
                    this.dragDepth = depth;
                }
            }
        },

        dragStop: function(e)
        {
            var el = this.dragEl.children(this.options.itemNodeName).first();
            el[0].parentNode.removeChild(el[0]);
            this.placeEl.replaceWith(el);

            this.dragEl.remove();
            this.el.trigger('change');
            if (this.hasNewRoot) {
                this.dragRootEl.trigger('change');
            }
            this.reset();
        },

        dragMove: function(e)
        {
            var list, parent, prev, next, depth,
                opt   = this.options,
                mouse = this.mouse;

            this.dragEl.css({
                'left' : e.pageX - mouse.offsetX,
                'top'  : e.pageY - mouse.offsetY
            });

            // mouse position last events
            mouse.lastX = mouse.nowX;
            mouse.lastY = mouse.nowY;
            // mouse position this events
            mouse.nowX  = e.pageX;
            mouse.nowY  = e.pageY;
            // distance mouse moved between events
            mouse.distX = mouse.nowX - mouse.lastX;
            mouse.distY = mouse.nowY - mouse.lastY;
            // direction mouse was moving
            mouse.lastDirX = mouse.dirX;
            mouse.lastDirY = mouse.dirY;
            // direction mouse is now moving (on both axis)
            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;
            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;
            // axis mouse is now moving on
            var newAx   = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;

            // do nothing on first move
            if (!mouse.moving) {
                mouse.dirAx  = newAx;
                mouse.moving = true;
                return;
            }

            // calc distance moved on this axis (and direction)
            if (mouse.dirAx !== newAx) {
                mouse.distAxX = 0;
                mouse.distAxY = 0;
            } else {
                mouse.distAxX += Math.abs(mouse.distX);
                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {
                    mouse.distAxX = 0;
                }
                mouse.distAxY += Math.abs(mouse.distY);
                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {
                    mouse.distAxY = 0;
                }
            }
            mouse.dirAx = newAx;

            /**
             * move horizontal
             */
            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {
                // reset move distance on x-axis for new phase
                mouse.distAxX = 0;
                prev = this.placeEl.prev(opt.itemNodeName);
                // increase horizontal level if previous sibling exists and is not collapsed
                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {
                    // cannot increase level when item above is collapsed
                    list = prev.find(opt.listNodeName).last();
                    // check if depth limit has reached
                    depth = this.placeEl.parents(opt.listNodeName).length;
                    if (depth + this.dragDepth <= opt.maxDepth) {
                        // create new sub-level if one doesn't exist
                        if (!list.length) {
                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);
                            list.append(this.placeEl);
                            prev.append(list);
                            this.setParent(prev);
                        } else {
                            // else append to next level up
                            list = prev.children(opt.listNodeName).last();
                            list.append(this.placeEl);
                        }
                    }
                }
                // decrease horizontal level
                if (mouse.distX < 0) {
                    // we can't decrease a level if an item preceeds the current one
                    next = this.placeEl.next(opt.itemNodeName);
                    if (!next.length) {
                        parent = this.placeEl.parent();
                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);
                        if (!parent.children().length) {
                            this.unsetParent(parent.parent());
                        }
                    }
                }
            }

            var isEmpty = false;

            // find list item under cursor
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'hidden';
            }
            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'visible';
            }
            if (this.pointEl.hasClass(opt.handleClass)) {
                this.pointEl = this.pointEl.parent(opt.itemNodeName);
            }
            if (this.pointEl.hasClass(opt.emptyClass)) {
                isEmpty = true;
            }
            else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {
                return;
            }

            // find parent list of item under cursor
            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),
                isNewRoot   = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');

            /**
             * move vertical
             */
            if (!mouse.dirAx || isNewRoot || isEmpty) {
                // check if groups match if dragging over new root
                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {
                    return;
                }
                // check depth limit
                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;
                if (depth > opt.maxDepth) {
                    return;
                }
                var before = e.pageY < (this.pointEl.offset().top + this.pointEl.height() / 2);
                    parent = this.placeEl.parent();
                // if empty create new list to replace empty placeholder
                if (isEmpty) {
                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);
                    list.append(this.placeEl);
                    this.pointEl.replaceWith(list);
                }
                else if (before) {
                    this.pointEl.before(this.placeEl);
                }
                else {
                    this.pointEl.after(this.placeEl);
                }
                if (!parent.children().length) {
                    this.unsetParent(parent.parent());
                }
                if (!this.dragRootEl.find(opt.itemNodeName).length) {
                    this.dragRootEl.append('<div class="' + opt.emptyClass + '"/>');
                }
                // parent root list has changed
                if (isNewRoot) {
                    this.dragRootEl = pointElRoot;
                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];
                }
            }
        }

    };

    $.fn.nestable = function(params)
    {
        var lists  = this,
            retval = this;

        lists.each(function()
        {
            var plugin = $(this).data("nestable");

            if (!plugin) {
                $(this).data("nestable", new Plugin(this, params));
                $(this).data("nestable-id", new Date().getTime());
            } else {
                if (typeof params === 'string' && typeof plugin[params] === 'function') {
                    retval = plugin[params]();
                }
            }
        });

        return retval || lists;
    };

})(window.jQuery || window.Zepto, window, document);


/***/ }),

/***/ "../../../../sweetalert/lib/modules/default-params.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),

/***/ "../../../../sweetalert/lib/modules/handle-click.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__("../../../../sweetalert/lib/modules/utils.js");

var _getModal = __webpack_require__("../../../../sweetalert/lib/modules/handle-swal-dom.js");

var _hasClass$isDescendant = __webpack_require__("../../../../sweetalert/lib/modules/handle-dom.js");

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),

/***/ "../../../../sweetalert/lib/modules/handle-dom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),

/***/ "../../../../sweetalert/lib/modules/handle-key.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__("../../../../sweetalert/lib/modules/handle-dom.js");

var _setFocusStyle = __webpack_require__("../../../../sweetalert/lib/modules/handle-swal-dom.js");

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),

/***/ "../../../../sweetalert/lib/modules/handle-swal-dom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__("../../../../sweetalert/lib/modules/utils.js");

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__("../../../../sweetalert/lib/modules/handle-dom.js");

var _defaultParams = __webpack_require__("../../../../sweetalert/lib/modules/default-params.js");

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__("../../../../sweetalert/lib/modules/injected-html.js");

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),

/***/ "../../../../sweetalert/lib/modules/injected-html.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),

/***/ "../../../../sweetalert/lib/modules/set-params.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__("../../../../sweetalert/lib/modules/utils.js");

var _getModal$getInput$setFocusStyle = __webpack_require__("../../../../sweetalert/lib/modules/handle-swal-dom.js");

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__("../../../../sweetalert/lib/modules/handle-dom.js");

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),

/***/ "../../../../sweetalert/lib/modules/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ }),

/***/ "../../../../sweetalert/lib/sweetalert.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__("../../../../sweetalert/lib/modules/handle-dom.js");

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__("../../../../sweetalert/lib/modules/utils.js");

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__("../../../../sweetalert/lib/modules/handle-swal-dom.js");

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__("../../../../sweetalert/lib/modules/handle-click.js");

var _handleKeyDown = __webpack_require__("../../../../sweetalert/lib/modules/handle-key.js");

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__("../../../../sweetalert/lib/modules/default-params.js");

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__("../../../../sweetalert/lib/modules/set-params.js");

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=3.chunk.js.map