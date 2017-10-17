webpackJsonp([11],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"../../../../../src/app/routes/charts/charts.module.ts",
		6
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/routes/dashboard/dashboard.module.ts",
		9,
		0
	],
	"./elements/elements.module": [
		"../../../../../src/app/routes/elements/elements.module.ts",
		3
	],
	"./forms/forms.module": [
		"../../../../../src/app/routes/forms/forms.module.ts",
		4
	],
	"./maps/maps.module": [
		"../../../../../src/app/routes/maps/maps.module.ts",
		7,
		0
	],
	"./pages/errors/errors.module": [
		"../../../../../src/app/routes/pages/errors/errors.module.ts",
		5
	],
	"./pages/pages.module": [
		"../../../../../src/app/routes/pages/pages.module.ts",
		2,
		0
	],
	"./tables/tables.module": [
		"../../../../../src/app/routes/tables/tables.module.ts",
		1,
		0
	],
	"./widgets/widgets.module": [
		"../../../../../src/app/routes/widgets/widgets.module.ts",
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\r\n *\r\n * Dasha - Bootstrap Admin Template\r\n *\r\n * Version: 1.0.0\r\n * Author: @themicon_co\r\n * Website: http://themicon.co\r\n * License: https://wrapbootstrap.com/help/licenses\r\n *\r\n */\n/**\r\n * Bootstrap Reset\r\n */\nhtml, body {\n  direction: ltr;\n  width: 100%;\n  height: 100%;\n  min-width: 320px;\n  background-color: #f6fbfe;\n  font-size: 14px; }\n\nbody {\n  font-family: \"Open Sans\", -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #59676b;\n  font-size: 1rem; }\n\n.text-muted {\n  color: #a2a2a2 !important; }\n\ncode {\n  background-color: rgba(160, 160, 160, 0.12);\n  color: #F06292; }\n  code + code {\n    margin-left: .25rem; }\n\n.close {\n  text-shadow: 0 0 0 #000;\n  color: #59676b; }\n\n.btn {\n  outline: none !important;\n  border-radius: 2px;\n  font-size: .95rem;\n  font-family: inherit; }\n  .btn:active, .btn.active {\n    box-shadow: 0 0 0 #000; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #1E88E5;\n  border-color: #1E88E5; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #197dd6;\n    border-color: #197dd6; }\n  .btn-primary:focus, .btn-primary.focus {\n    box-shadow: 0 0 0 2px rgba(30, 136, 229, 0.5); }\n  .btn-primary.disabled, .btn-primary:disabled {\n    background-color: #1E88E5;\n    border-color: #1E88E5; }\n  .btn-primary:active, .btn-primary.active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #197dd6;\n    background-image: none;\n    border-color: #197dd6; }\n\n.btn-secondary {\n  color: #59676b;\n  background-color: #fff;\n  border-color: #ECEFF1; }\n  .btn-secondary:hover {\n    color: #59676b;\n    background-color: whitesmoke;\n    border-color: #e0e5e8; }\n  .btn-secondary:focus, .btn-secondary.focus {\n    box-shadow: 0 0 0 2px rgba(236, 239, 241, 0.5); }\n  .btn-secondary.disabled, .btn-secondary:disabled {\n    background-color: #fff;\n    border-color: #ECEFF1; }\n  .btn-secondary:active, .btn-secondary.active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #59676b;\n    background-color: whitesmoke;\n    background-image: none;\n    border-color: #e0e5e8; }\n\n.btn-success {\n  color: #fff;\n  background-color: #4CAF50;\n  border-color: #4CAF50; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #46a149;\n    border-color: #46a149; }\n  .btn-success:focus, .btn-success.focus {\n    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5); }\n  .btn-success.disabled, .btn-success:disabled {\n    background-color: #4CAF50;\n    border-color: #4CAF50; }\n  .btn-success:active, .btn-success.active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #46a149;\n    background-image: none;\n    border-color: #46a149; }\n\n.btn-info {\n  color: #fff;\n  background-color: #03A9F4;\n  border-color: #03A9F4; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #039be0;\n    border-color: #039be0; }\n  .btn-info:focus, .btn-info.focus {\n    box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.5); }\n  .btn-info.disabled, .btn-info:disabled {\n    background-color: #03A9F4;\n    border-color: #03A9F4; }\n  .btn-info:active, .btn-info.active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #039be0;\n    background-image: none;\n    border-color: #039be0; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #FF9800;\n  border-color: #FF9800; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #eb8c00;\n    border-color: #eb8c00; }\n  .btn-warning:focus, .btn-warning.focus {\n    box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.5); }\n  .btn-warning.disabled, .btn-warning:disabled {\n    background-color: #FF9800;\n    border-color: #FF9800; }\n  .btn-warning:active, .btn-warning.active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #eb8c00;\n    background-image: none;\n    border-color: #eb8c00; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #FF5252;\n  border-color: #FF5252; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #ff3e3e;\n    border-color: #ff3e3e; }\n  .btn-danger:focus, .btn-danger.focus {\n    box-shadow: 0 0 0 2px rgba(255, 82, 82, 0.5); }\n  .btn-danger.disabled, .btn-danger:disabled {\n    background-color: #FF5252;\n    border-color: #FF5252; }\n  .btn-danger:active, .btn-danger.active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #ff3e3e;\n    background-image: none;\n    border-color: #ff3e3e; }\n\n.text-primary {\n  color: #1E88E5 !important; }\n\n.text-success {\n  color: #4CAF50 !important; }\n\n.text-info {\n  color: #03A9F4 !important; }\n\n.text-warning {\n  color: #FF9800 !important; }\n\n.text-danger {\n  color: #FF5252 !important; }\n\n@media only screen and (max-width: 1199px) {\n  input[type=\"text\"], input[type=\"email\"], input[type=\"search\"], input[type=\"password\"] {\n    -webkit-appearance: none; } }\n\n.form-check-input {\n  margin-right: .5rem; }\n\n.has-success .form-control-feedback,\n.has-success .form-control-label,\n.has-success .col-form-label,\n.has-success .form-check-label,\n.has-success .custom-control {\n  color: #4CAF50; }\n\n.has-success .form-control {\n  border-color: #4CAF50; }\n\n.has-success .input-group-addon {\n  color: #4CAF50;\n  border-color: #4CAF50;\n  background-color: #d9eeda; }\n\n.has-warning .form-control-feedback,\n.has-warning .form-control-label,\n.has-warning .col-form-label,\n.has-warning .form-check-label,\n.has-warning .custom-control {\n  color: #FF9800; }\n\n.has-warning .form-control {\n  border-color: #FF9800; }\n\n.has-warning .input-group-addon {\n  color: #FF9800;\n  border-color: #FF9800;\n  background-color: #ffeacc; }\n\n.has-danger .form-control-feedback,\n.has-danger .form-control-label,\n.has-danger .col-form-label,\n.has-danger .form-check-label,\n.has-danger .custom-control {\n  color: #FF5252; }\n\n.has-danger .form-control {\n  border-color: #FF5252; }\n\n.has-danger .input-group-addon {\n  color: #FF5252;\n  border-color: #FF5252;\n  background-color: white; }\n\n.custom-control-indicator {\n  top: .25rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  background-color: rgba(160, 160, 160, 0.25); }\n\n.custom-select {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/custom-select-angle-down.svg") + ");\n  background-size: 12px 16px; }\n\n.table {\n  font-weight: 400;\n  margin-bottom: 2rem; }\n  .table > thead > tr > th {\n    border-bottom-width: 1px;\n    border-color: rgba(162, 162, 162, 0.16);\n    position: relative;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    font-weight: 700;\n    line-height: 24px;\n    letter-spacing: 0;\n    height: 48px;\n    font-size: 12px;\n    padding: 0 18px 0 18px !important;\n    padding-bottom: 8px !important; }\n  .table > tbody > tr > td {\n    position: relative;\n    vertical-align: middle;\n    border-top: 1px solid rgba(0, 0, 0, 0.045); }\n  .table > tbody + tbody {\n    border-bottom-width: 1px; }\n  .table .table {\n    background-color: transparent; }\n\n.table-hover > tbody > tr:hover {\n  background-color: rgba(162, 162, 162, 0.06); }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: rgba(162, 162, 162, 0.06); }\n\n.table-bordered {\n  border-color: rgba(162, 162, 162, 0.26); }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 1px; }\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tfoot > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > thead > tr > th {\n    border-color: rgba(162, 162, 162, 0.26); }\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: white; }\n\n.table-hover .table-active:hover {\n  background-color: #f2f2f2; }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: #f2f2f2; }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #99d39b; }\n\n.table-hover .table-success:hover {\n  background-color: #87cb8a; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #87cb8a; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #6acffd; }\n\n.table-hover .table-info:hover {\n  background-color: #51c7fd; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #51c7fd; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffc570; }\n\n.table-hover .table-warning:hover {\n  background-color: #ffbb57; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffbb57; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #ffc2c2; }\n\n.table-hover .table-danger:hover {\n  background-color: #ffa9a9; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #ffa9a9; }\n\ntr.active, tr.success, tr.info, tr.warning, tr.danger {\n  color: rgba(0, 0, 0, 0.67); }\n  tr.active > td, tr.success > td, tr.info > td, tr.warning > td, tr.danger > td {\n    border-top: 0 !important; }\n\n.progress .progress-bar {\n  transition: width .5s ease; }\n\n.progress-bar {\n  background-color: #1E88E5; }\n\n.progress-bar-info {\n  background-color: #03A9F4; }\n\n.progress-bar-success {\n  background-color: #4CAF50; }\n\n.progress-bar-warning {\n  background-color: #FF9800; }\n\n.progress-bar-danger {\n  background-color: #FF5252; }\n\n.alert-primary {\n  background-color: #1E88E5;\n  border-color: #1E88E5;\n  color: #fff; }\n  .alert-primary hr {\n    border-top-color: #187bd1; }\n  .alert-primary .alert-link {\n    color: #e6e5e5; }\n  .alert-primary a, .alert-primary .alert-link {\n    color: rgba(255, 255, 255, 0.58); }\n\n.alert-success {\n  background-color: #4CAF50;\n  border-color: #4CAF50;\n  color: #fff; }\n  .alert-success hr {\n    border-top-color: #449d48; }\n  .alert-success .alert-link {\n    color: #e6e5e5; }\n  .alert-success a, .alert-success .alert-link {\n    color: rgba(255, 255, 255, 0.58); }\n\n.alert-info {\n  background-color: #03A9F4;\n  border-color: #03A9F4;\n  color: #fff; }\n  .alert-info hr {\n    border-top-color: #0398db; }\n  .alert-info .alert-link {\n    color: #e6e5e5; }\n  .alert-info a, .alert-info .alert-link {\n    color: rgba(255, 255, 255, 0.58); }\n\n.alert-warning {\n  background-color: #FF9800;\n  border-color: #FF9800;\n  color: #fff; }\n  .alert-warning hr {\n    border-top-color: #e68900; }\n  .alert-warning .alert-link {\n    color: #e6e5e5; }\n  .alert-warning a, .alert-warning .alert-link {\n    color: rgba(255, 255, 255, 0.58); }\n\n.alert-danger {\n  background-color: #FF5252;\n  border-color: #FF5252;\n  color: #fff; }\n  .alert-danger hr {\n    border-top-color: #ff3939; }\n  .alert-danger .alert-link {\n    color: #e6e5e5; }\n  .alert-danger a, .alert-danger .alert-link {\n    color: rgba(255, 255, 255, 0.58); }\n\n.alert-dismissable .close, .alert-dismissible .close {\n  color: rgba(0, 0, 0, 0.75); }\n\n.jumbotron {\n  padding: 1rem;\n  border: 1px solid rgba(162, 162, 162, 0.12);\n  background-color: #fff; }\n  @media only screen and (min-width: 768px) {\n    .jumbotron {\n      padding: 2rem; } }\n\n.card .card-header {\n  background-color: transparent; }\n\n.card-primary {\n  background-color: #1E88E5;\n  border-color: #1E88E5; }\n  .card-primary .card-header,\n  .card-primary .card-footer {\n    background-color: transparent; }\n\n.card-success {\n  background-color: #4CAF50;\n  border-color: #4CAF50; }\n  .card-success .card-header,\n  .card-success .card-footer {\n    background-color: transparent; }\n\n.card-info {\n  background-color: #03A9F4;\n  border-color: #03A9F4; }\n  .card-info .card-header,\n  .card-info .card-footer {\n    background-color: transparent; }\n\n.card-warning {\n  background-color: #FF9800;\n  border-color: #FF9800; }\n  .card-warning .card-header,\n  .card-warning .card-footer {\n    background-color: transparent; }\n\n.card-danger {\n  background-color: #FF5252;\n  border-color: #FF5252; }\n  .card-danger .card-header,\n  .card-danger .card-footer {\n    background-color: transparent; }\n\n.card-accordion .card .card-header {\n  padding: 12px 24px; }\n  .card-accordion .card .card-header a {\n    color: inherit;\n    text-decoration: none; }\n    .card-accordion .card .card-header a:hover, .card-accordion .card .card-header a:focus {\n      color: #1E88E5; }\n\n.card-accordion .card .card-title a {\n  text-decoration: none; }\n\n.list-group .list-group-item {\n  color: inherit;\n  background-color: transparent;\n  border-color: rgba(162, 162, 162, 0.12);\n  padding: 1rem 1.5rem; }\n  .list-group .list-group-item.active {\n    color: #fff; }\n  .list-group .list-group-item.disabled, .list-group .list-group-item.disabled:focus, .list-group .list-group-item.disabled:hover {\n    background-color: rgba(162, 162, 162, 0.12);\n    color: inherit; }\n  .card > .list-group .list-group-item {\n    border-top: 0; }\n\na.list-group-item:focus,\na.list-group-item:hover,\nbutton.list-group-item:focus,\nbutton.list-group-item:hover {\n  background-color: transparent;\n  color: #1E88E5; }\n\n.list-group-item.active,\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  background-color: #03A9F4;\n  border-color: #03A9F4; }\n\n.breadcrumb {\n  font-weight: normal;\n  border-radius: 0;\n  color: #a2a2a2;\n  padding: 20px 20px;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(162, 162, 162, 0.16);\n  margin-bottom: 2rem; }\n  .breadcrumb .breadcrumb-item::before {\n    color: #ccc; }\n  .breadcrumb.breadcrumb-transparent {\n    background-color: transparent; }\n\n.dropdown-menu {\n  top: 50%;\n  border: 1px solid #ECEFF1;\n  border-radius: 1px;\n  line-height: 1;\n  min-width: 12rem;\n  box-shadow: 0px 5px 25px 0px rgba(123, 123, 123, 0.15); }\n  .dropdown-menu .dropdown-item {\n    padding: 1rem; }\n    .dropdown-menu .dropdown-item > em {\n      margin-right: 1rem;\n      color: #a2a2a2; }\n    .dropdown-menu .dropdown-item:hover, .dropdown-menu .dropdown-item:active {\n      background-color: rgba(162, 162, 162, 0.1);\n      color: inherit; }\n    .dropdown-menu .dropdown-item.active {\n      background-color: #1E88E5;\n      color: #fff; }\n      .dropdown-menu .dropdown-item.active > em {\n        color: #fff; }\n  .dropdown-menu .dropdown-divider {\n    margin: .5rem 0;\n    background-color: rgba(162, 162, 162, 0.16); }\n  .dropdown-menu .dropdown-header {\n    color: #a1a2a3;\n    padding: 1rem 1rem .5rem 1rem; }\n\n.navbar,\n.navbar .dropdown-menu {\n  -webkit-filter: none !important;\n          filter: none !important; }\n\n.badge-primary {\n  background-color: #1E88E5; }\n  .badge-primary[href]:focus, .badge-primary[href]:hover {\n    background-color: #166dba; }\n\n.badge-success {\n  background-color: #4CAF50; }\n  .badge-success[href]:focus, .badge-success[href]:hover {\n    background-color: #3d8b40; }\n\n.badge-info {\n  background-color: #03A9F4; }\n  .badge-info[href]:focus, .badge-info[href]:hover {\n    background-color: #0286c2; }\n\n.badge-warning {\n  background-color: #FF9800; }\n  .badge-warning[href]:focus, .badge-warning[href]:hover {\n    background-color: #cc7a00; }\n\n.badge-danger {\n  background-color: #FF5252; }\n  .badge-danger[href]:focus, .badge-danger[href]:hover {\n    background-color: #ff1f1f; }\n\n.nav-tabs {\n  border-color: rgba(162, 162, 162, 0.5); }\n\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  border-color: rgba(162, 162, 162, 0.5) rgba(162, 162, 162, 0.5) transparent rgba(162, 162, 162, 0.5); }\n\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n  color: #1E88E5;\n  border-color: rgba(162, 162, 162, 0.5) rgba(162, 162, 162, 0.5) transparent rgba(162, 162, 162, 0.5); }\n\n.tab-container.mb-4 > .nav-tabs, .tab-container.mb-4 > .nav-pills {\n  margin-bottom: 1.5rem; }\n\n.page-link {\n  background: transparent;\n  border-color: rgba(162, 162, 162, 0.5); }\n\n.page-item.disabled .page-link {\n  background-color: rgba(160, 160, 160, 0.25);\n  border-color: rgba(162, 162, 162, 0.5); }\n\n.page-link:focus, .page-link:hover {\n  border-color: #187bd1;\n  background: #1E88E5;\n  color: #fff; }\n\n/**\r\n * Bootstrap Custom\r\n */\n.progress.progress-sm {\n  height: 16px; }\n\n.progress.progress-xs {\n  border-radius: 3px;\n  border: 0;\n  height: 4px; }\n\n.badge-rounded {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 12px;\n  border-radius: 50%;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline; }\n\n.card-img-overlay-bottom {\n  top: 50%; }\n\n.form-control-inverse {\n  background-color: transparent;\n  border-color: rgba(255, 255, 255, 0.7);\n  color: #fff; }\n  .form-control-inverse:focus {\n    background-color: transparent;\n    color: #fff; }\n  .form-control-inverse::-moz-placeholder {\n    color: #fff;\n    opacity: 1; }\n  .form-control-inverse:-ms-input-placeholder {\n    color: #fff; }\n  .form-control-inverse::-webkit-input-placeholder {\n    color: #fff; }\n\n@media all and (-ms-high-contrast: none) {\n  .align-items-center.align-items-center-ie {\n    height: 1px;\n    min-height: 100%; } }\n\n/**\r\n * Animations\r\n */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes fadeInRightShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(18px, 0, 0);\n    transform: translate3d(18px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(18px, 0, 0);\n    transform: translate3d(18px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRightShort {\n  -webkit-animation-name: fadeInRightShort;\n  animation-name: fadeInRightShort; }\n\n@-webkit-keyframes fadeOutRightShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(18px, 0, 0);\n    transform: translate3d(18px, 0, 0); } }\n\n@keyframes fadeOutRightShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(18px, 0, 0);\n    transform: translate3d(18px, 0, 0); } }\n\n.fadeOutRightShort {\n  -webkit-animation-name: fadeOutRightShort;\n  animation-name: fadeOutRightShort; }\n\n@-webkit-keyframes fadeInLeftShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-18px, 0, 0);\n    transform: translate3d(-18px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-18px, 0, 0);\n    transform: translate3d(-18px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeftShort {\n  -webkit-animation-name: fadeInLeftShort;\n  animation-name: fadeInLeftShort; }\n\n@-webkit-keyframes fadeOutLeftShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-18px, 0, 0);\n    transform: translate3d(-18px, 0, 0); } }\n\n@keyframes fadeOutLeftShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-18px, 0, 0);\n    transform: translate3d(-18px, 0, 0); } }\n\n.fadeOutLeftShort {\n  -webkit-animation-name: fadeOutLeftShort;\n  animation-name: fadeOutLeftShort; }\n\n@-webkit-keyframes fadeOutUpShort {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); } }\n\n@keyframes fadeOutUpShort {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); } }\n\n.fadeOutUpShort {\n  -webkit-animation-name: fadeOutUpShort;\n  animation-name: fadeOutUpShort; }\n\n@-webkit-keyframes fadeInUpShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUpShort {\n  -webkit-animation-name: fadeInUpShort;\n  animation-name: fadeInUpShort; }\n\n@-webkit-keyframes fadeInDownShort {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownShort {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDownShort {\n  -webkit-animation-name: fadeInDownShort;\n  animation-name: fadeInDownShort; }\n\n@-webkit-keyframes fadeOutDownShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); } }\n\n@keyframes fadeOutDownShort {\n  from {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); } }\n\n.fadeOutDownShort {\n  -webkit-animation-name: fadeOutDownShort;\n  animation-name: fadeOutDownShort; }\n\n@-webkit-keyframes zoomInShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.95, 0.95, 0.95);\n    transform: scale3d(0.95, 0.95, 0.95); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomInShort {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.95, 0.95, 0.95);\n    transform: scale3d(0.95, 0.95, 0.95); }\n  50% {\n    opacity: 1; } }\n\n.zoomInShort {\n  -webkit-animation-name: zoomInShort;\n  animation-name: zoomInShort; }\n\n@-webkit-keyframes zoomBack {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.5, 0.5, 0.5);\n    transform: scale3d(0.5, 0.5, 0.5); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomBack {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.5, 0.5, 0.5);\n    transform: scale3d(0.5, 0.5, 0.5); }\n  100% {\n    opacity: 0; } }\n\n.zoomBack {\n  -webkit-animation-name: zoomBack;\n  animation-name: zoomBack; }\n\n/**\r\n * Buttons Extras\r\n */\n.input-group-btn > .btn {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.btn-shadow {\n  box-shadow: 0px 5px 25px 0px rgba(123, 123, 123, 0.15); }\n\n.btn-transparent {\n  background-color: transparent;\n  color: rgba(255, 255, 255, 0.9);\n  border-color: rgba(255, 255, 255, 0.5);\n  border-radius: 20px; }\n\n.btn-flat {\n  border-color: transparent !important;\n  border-radius: 2px;\n  background-color: transparent;\n  text-transform: uppercase; }\n  .btn-flat:active, .btn-flat.active {\n    box-shadow: 0 0 0 #000; }\n  .btn-flat.btn-primary {\n    color: #1E88E5; }\n    .btn-flat.btn-primary:hover, .btn-flat.btn-primary:focus, .btn-flat.btn-primary:active {\n      color: #fff; }\n    .btn-flat.btn-primary:focus {\n      background-color: #1E88E5; }\n    .btn-flat.btn-primary[disabled], .btn-flat.btn-primary.disabled {\n      color: rgba(30, 136, 229, 0.75) !important; }\n  .btn-flat.btn-success {\n    color: #4CAF50; }\n    .btn-flat.btn-success:hover, .btn-flat.btn-success:focus, .btn-flat.btn-success:active {\n      color: #fff; }\n    .btn-flat.btn-success:focus {\n      background-color: #4CAF50; }\n    .btn-flat.btn-success[disabled], .btn-flat.btn-success.disabled {\n      color: rgba(76, 175, 80, 0.75) !important; }\n  .btn-flat.btn-danger {\n    color: #FF5252; }\n    .btn-flat.btn-danger:hover, .btn-flat.btn-danger:focus, .btn-flat.btn-danger:active {\n      color: #fff; }\n    .btn-flat.btn-danger:focus {\n      background-color: #FF5252; }\n    .btn-flat.btn-danger[disabled], .btn-flat.btn-danger.disabled {\n      color: rgba(255, 82, 82, 0.75) !important; }\n  .btn-flat.btn-warning {\n    color: #FF9800; }\n    .btn-flat.btn-warning:hover, .btn-flat.btn-warning:focus, .btn-flat.btn-warning:active {\n      color: #fff; }\n    .btn-flat.btn-warning:focus {\n      background-color: #FF9800; }\n    .btn-flat.btn-warning[disabled], .btn-flat.btn-warning.disabled {\n      color: rgba(255, 152, 0, 0.75) !important; }\n  .btn-flat.btn-info {\n    color: #03A9F4; }\n    .btn-flat.btn-info:hover, .btn-flat.btn-info:focus, .btn-flat.btn-info:active {\n      color: #fff; }\n    .btn-flat.btn-info:focus {\n      background-color: #03A9F4; }\n    .btn-flat.btn-info[disabled], .btn-flat.btn-info.disabled {\n      color: rgba(3, 169, 244, 0.75) !important; }\n  .btn-flat.text-white {\n    color: #fff !important; }\n  .btn-flat[disabled], .btn-flat.disabled {\n    background-color: transparent !important; }\n  .btn-flat.btn-flat-icon {\n    border-radius: 50%;\n    font-size: 24px;\n    height: 32px;\n    width: 32px;\n    padding: 0;\n    overflow: hidden;\n    color: inherit !important; }\n    .btn-flat.btn-flat-icon > em {\n      line-height: 32px; }\n    .btn-flat.btn-flat-icon:hover, .btn-flat.btn-flat-icon:focus, .btn-flat.btn-flat-icon:active {\n      background-color: rgba(158, 158, 158, 0.2) !important; }\n\n.float-right > .btn-flat-icon {\n  margin-top: -4px; }\n\n.btn-circle {\n  width: 46px;\n  height: 46px;\n  overflow: hidden;\n  border-radius: 50% !important;\n  line-height: 46px;\n  padding: 0;\n  text-align: center; }\n\n.btn-xl {\n  padding: 20px 16px;\n  font-size: 18px; }\n\n.btn-square {\n  border-radius: 0; }\n\n.btn-pill-left, .btn-oval {\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  padding-left: 18px; }\n\n.btn-pill-right, .btn-oval {\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  padding-right: 18px; }\n\n.btn-labeled {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: left; }\n\n.btn-label {\n  position: relative;\n  background: transparent;\n  display: inline-block;\n  padding: 6px 16px;\n  left: -16px;\n  border-radius: 3px 0 0 3px; }\n  .btn-label.btn-label-right {\n    left: auto;\n    right: -16px;\n    border-radius: 0 3px 3px 0; }\n  .btn-label:after {\n    content: \"\";\n    position: absolute;\n    top: 5px;\n    bottom: 5px;\n    right: 0;\n    width: 1px;\n    background-color: rgba(0, 0, 0, 0.1); }\n  .btn-label.btn-label-right {\n    text-indent: -2px; }\n    .btn-label.btn-label-right:after {\n      left: 0;\n      right: auto; }\n\n.btn-lg .btn-label {\n  padding: 10px 20px;\n  left: -20px;\n  border-radius: 5px 0 0 5px; }\n  .btn-lg .btn-label.btn-label-right {\n    left: auto;\n    right: -20px;\n    border-radius: 0 5px 5px 0; }\n\n.btn-sm .btn-label {\n  padding: 1px 5px;\n  left: -5px;\n  border-radius: 2px 0 0 2px; }\n  .btn-sm .btn-label.btn-label-right {\n    left: auto;\n    right: -5px;\n    border-radius: 0 2px 2px 0; }\n\n.btn-fw {\n  min-width: 80px; }\n  .btn-fw.btn-sm {\n    min-width: 40px; }\n  .btn-fw.btn-md {\n    min-width: 60px; }\n  .btn-fw.btn-lg {\n    min-width: 140px; }\n\n.pagination-rounded .page-item > .page-link {\n  border-radius: 50% !important;\n  margin-right: 4px;\n  margin-left: 4px;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  padding: 0;\n  text-align: center; }\n  .pagination-rounded .page-item > .page-link > span {\n    position: relative;\n    top: -1px; }\n\n.pagination-rounded.pagination-lg .page-item > .page-link {\n  width: 44px;\n  height: 44px;\n  line-height: 44px; }\n\n.float-left.btn-group,\n.float-right.btn-group {\n  position: relative;\n  z-index: 1; }\n\n.btn-gradient.btn-secondary {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #B0BEC5 0, #78909C 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.btn-gradient.btn-primary {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #673AB7 0, #2196F3 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.btn-gradient.btn-info {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #009688 0, #42A5F5 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.btn-gradient.btn-success {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #CDDC39 0, #4CAF50 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.btn-gradient.btn-danger {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #7B1FA2 0, #F44336 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.btn-gradient.btn-warning {\n  border: 0;\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(135deg, #FDD835 0, #FF9800 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n/**\r\n * Dropdowns Extras\r\n */\n.dropdown-card {\n  max-width: 20rem; }\n\n.dropdown-scale {\n  display: block;\n  opacity: 0;\n  padding: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: all .3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n  .dropdown-scale.float-right, .dropdown-scale.dropdown-menu-right {\n    -webkit-transform-origin: top right;\n            transform-origin: top right; }\n\n.show > .dropdown-scale {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.dropup .dropdown-scale {\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n  .dropup .dropdown-scale.float-right, .dropup .dropdown-scale.dropdown-menu-right {\n    -webkit-transform-origin: bottom right;\n            transform-origin: bottom right; }\n\n/**\r\n * Rows - Extras\r\n */\n.row {\n  margin-right: -4px;\n  margin-left: -4px; }\n  .row .col-lg-1, .row .col-lg-2, .row .col-lg-3, .row .col-lg-4, .row .col-lg-5, .row .col-lg-6, .row .col-lg-7, .row .col-lg-8, .row .col-lg-9, .row .col-lg-10, .row .col-lg-11, .row .col-lg-12,\n  .row .col-xl-1, .row .col-xl-2, .row .col-xl-3, .row .col-xl-4, .row .col-xl-5, .row .col-xl-6, .row .col-xl-7, .row .col-xl-8, .row .col-xl-9, .row .col-xl-10, .row .col-xl-11, .row .col-xl-12,\n  .row .col-md-1, .row .col-md-2, .row .col-md-3, .row .col-md-4, .row .col-md-5, .row .col-md-6, .row .col-md-7, .row .col-md-8, .row .col-md-9, .row .col-md-10, .row .col-md-11, .row .col-md-12,\n  .row .col-sm-1, .row .col-sm-2, .row .col-sm-3, .row .col-sm-4, .row .col-sm-5, .row .col-sm-6, .row .col-sm-7, .row .col-sm-8, .row .col-sm-9, .row .col-sm-10, .row .col-sm-11, .row .col-sm-12,\n  .row .col-xs-1, .row .col-xs-2, .row .col-xs-3, .row .col-xs-4, .row .col-xs-5, .row .col-xs-6, .row .col-xs-7, .row .col-xs-8, .row .col-xs-9, .row .col-xs-10, .row .col-xs-11, .row .col-xs-12,\n  .row .col-1, .row .col-2, .row .col-3, .row .col-4, .row .col-5, .row .col-6, .row .col-7, .row .col-8, .row .col-9, .row .col-10, .row .col-11, .row .col-12 {\n    padding-right: 4px;\n    padding-left: 4px; }\n  @media only screen and (min-width: 480px) {\n    .row {\n      margin-right: -8px;\n      margin-left: -8px; }\n      .row .col-lg-1, .row .col-lg-2, .row .col-lg-3, .row .col-lg-4, .row .col-lg-5, .row .col-lg-6, .row .col-lg-7, .row .col-lg-8, .row .col-lg-9, .row .col-lg-10, .row .col-lg-11, .row .col-lg-12,\n      .row .col-xl-1, .row .col-xl-2, .row .col-xl-3, .row .col-xl-4, .row .col-xl-5, .row .col-xl-6, .row .col-xl-7, .row .col-xl-8, .row .col-xl-9, .row .col-xl-10, .row .col-xl-11, .row .col-xl-12,\n      .row .col-md-1, .row .col-md-2, .row .col-md-3, .row .col-md-4, .row .col-md-5, .row .col-md-6, .row .col-md-7, .row .col-md-8, .row .col-md-9, .row .col-md-10, .row .col-md-11, .row .col-md-12,\n      .row .col-sm-1, .row .col-sm-2, .row .col-sm-3, .row .col-sm-4, .row .col-sm-5, .row .col-sm-6, .row .col-sm-7, .row .col-sm-8, .row .col-sm-9, .row .col-sm-10, .row .col-sm-11, .row .col-sm-12,\n      .row .col-xs-1, .row .col-xs-2, .row .col-xs-3, .row .col-xs-4, .row .col-xs-5, .row .col-xs-6, .row .col-xs-7, .row .col-xs-8, .row .col-xs-9, .row .col-xs-10, .row .col-xs-11, .row .col-xs-12,\n      .row .col-1, .row .col-2, .row .col-3, .row .col-4, .row .col-5, .row .col-6, .row .col-7, .row .col-8, .row .col-9, .row .col-10, .row .col-11, .row .col-12 {\n        padding-right: 8px;\n        padding-left: 8px; } }\n  @media only screen and (min-width: 992px) {\n    .row {\n      margin-right: -12px;\n      margin-left: -12px; }\n      .row .col-lg-1, .row .col-lg-2, .row .col-lg-3, .row .col-lg-4, .row .col-lg-5, .row .col-lg-6, .row .col-lg-7, .row .col-lg-8, .row .col-lg-9, .row .col-lg-10, .row .col-lg-11, .row .col-lg-12,\n      .row .col-xl-1, .row .col-xl-2, .row .col-xl-3, .row .col-xl-4, .row .col-xl-5, .row .col-xl-6, .row .col-xl-7, .row .col-xl-8, .row .col-xl-9, .row .col-xl-10, .row .col-xl-11, .row .col-xl-12,\n      .row .col-md-1, .row .col-md-2, .row .col-md-3, .row .col-md-4, .row .col-md-5, .row .col-md-6, .row .col-md-7, .row .col-md-8, .row .col-md-9, .row .col-md-10, .row .col-md-11, .row .col-md-12,\n      .row .col-sm-1, .row .col-sm-2, .row .col-sm-3, .row .col-sm-4, .row .col-sm-5, .row .col-sm-6, .row .col-sm-7, .row .col-sm-8, .row .col-sm-9, .row .col-sm-10, .row .col-sm-11, .row .col-sm-12,\n      .row .col-xs-1, .row .col-xs-2, .row .col-xs-3, .row .col-xs-4, .row .col-xs-5, .row .col-xs-6, .row .col-xs-7, .row .col-xs-8, .row .col-xs-9, .row .col-xs-10, .row .col-xs-11, .row .col-xs-12,\n      .row .col-1, .row .col-2, .row .col-3, .row .col-4, .row .col-5, .row .col-6, .row .col-7, .row .col-8, .row .col-9, .row .col-10, .row .col-11, .row .col-12 {\n        padding-right: 12px;\n        padding-left: 12px; } }\n\n.t-grid .t-row {\n  width: 100%;\n  display: table;\n  table-layout: fixed; }\n\n.t-grid .t-col, .t-grid .t-cell {\n  display: table-cell; }\n\n/**\r\n * Modals\r\n */\n.modal-header,\n.modal-footer {\n  border-color: rgba(162, 162, 162, 0.12); }\n\n.modal.modal-right,\n.modal.modal-left,\n.modal.modal-bottom,\n.modal.modal-top {\n  -webkit-overflow-scrolling: touch; }\n  .modal.modal-right .modal-dialog,\n  .modal.modal-left .modal-dialog,\n  .modal.modal-bottom .modal-dialog,\n  .modal.modal-top .modal-dialog {\n    position: absolute;\n    margin: 0;\n    max-width: none;\n    transition-transform: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n    -webkit-overflow-scrolling: touch; }\n    .modal.modal-right .modal-dialog > .modal-content,\n    .modal.modal-left .modal-dialog > .modal-content,\n    .modal.modal-bottom .modal-dialog > .modal-content,\n    .modal.modal-top .modal-dialog > .modal-content {\n      border-radius: 0;\n      border: 0; }\n  .modal.modal-right.fade.show .modal-dialog,\n  .modal.modal-left.fade.show .modal-dialog,\n  .modal.modal-bottom.fade.show .modal-dialog,\n  .modal.modal-top.fade.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n\n.modal.fade.modal-right .modal-dialog,\n.modal.fade.modal-left .modal-dialog,\n.modal.fade.modal-bottom .modal-dialog,\n.modal.fade.modal-top .modal-dialog {\n  transition-transform: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.modal.modal-right .modal-dialog {\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 240px; }\n  .modal.modal-right .modal-dialog > .modal-content {\n    min-height: 100%; }\n\n.modal.modal-right.modal-auto-size .modal-dialog {\n  width: 80%; }\n  @media only screen and (min-width: 768px) {\n    .modal.modal-right.modal-auto-size .modal-dialog {\n      width: 50%; } }\n\n.modal.modal-right.fade .modal-dialog {\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n\n.modal.modal-left .modal-dialog {\n  left: 0;\n  bottom: 0;\n  top: 0;\n  width: 240px; }\n  .modal.modal-left .modal-dialog > .modal-content {\n    min-height: 100%; }\n\n.modal.modal-left.modal-auto-size .modal-dialog {\n  width: 80%; }\n  @media only screen and (min-width: 768px) {\n    .modal.modal-left.modal-auto-size .modal-dialog {\n      width: 50%; } }\n\n.modal.modal-left.fade .modal-dialog {\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0); }\n\n.modal.modal-top .modal-dialog {\n  right: 0;\n  left: 0;\n  top: 0;\n  width: 100%; }\n  .modal.modal-top .modal-dialog > .modal-content {\n    width: 100%; }\n\n.modal.modal-top.fade .modal-dialog {\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%); }\n\n.modal.modal-bottom .modal-dialog {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  max-height: 240px;\n  overflow-y: auto; }\n  .modal.modal-bottom .modal-dialog > .modal-content {\n    width: 100%; }\n\n.modal.modal-bottom.fade .modal-dialog {\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%); }\n\n.modal-backdrop {\n  opacity: 0;\n  will-change: opacity; }\n  .modal-backdrop.show {\n    transition: opacity .28s ease-in-out; }\n\n.modal-backdrop-light .modal-backdrop {\n  background-color: #fff; }\n  .modal-backdrop-light .modal-backdrop.show {\n    opacity: .9; }\n\n.modal-backdrop-soft .modal-backdrop.show {\n  opacity: .3; }\n\n.modal-backdrop {\n  position: fixed;\n  bottom: 0; }\n\n/**\r\n * Container variants\r\n */\n.page-container {\n  width: 100%;\n  height: 100%; }\n  .page-container > * {\n    min-height: 100%; }\n\n.container-full {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n  .container-full > .row {\n    margin: 0; }\n    .container-full > .row > [class*=\"col-\"]:first-child {\n      padding-left: 0; }\n    .container-full > .row > [class*=\"col-\"]:last-child {\n      padding-right: 0; }\n\n.container-fluid,\n.container-lg,\n.container-md,\n.container-sm,\n.container-xs {\n  padding: .6rem;\n  width: auto; }\n  @media only screen and (min-width: 480px) {\n    .container-fluid,\n    .container-lg,\n    .container-md,\n    .container-sm,\n    .container-xs {\n      padding: 1.2rem; } }\n\n.container-lg {\n  max-width: 1200px; }\n\n.container-md {\n  max-width: 992px; }\n\n.container-sm {\n  max-width: 768px; }\n\n.container-xs {\n  max-width: 480px; }\n\n@media only screen and (max-width: 1199px) {\n  .container-unwrap {\n    padding: 0; }\n    .container-unwrap > .row {\n      margin: 0; }\n      .container-unwrap > .row > [class*=\"col-\"] {\n        padding-left: 0;\n        padding-right: 0; }\n    .container-unwrap .cardbox {\n      margin-bottom: 0; } }\n\n.container-overlap {\n  position: relative;\n  padding: 2.2rem 1.2rem 4.5rem 1.2rem; }\n  .container-overlap + .container-fluid,\n  .container-overlap + .container-lg,\n  .container-overlap + .container-md,\n  .container-overlap + .container-sm,\n  .container-overlap + .container-xs {\n    padding-top: 0;\n    margin-top: -2.2rem; }\n    .container-overlap + .container-fluid .push-down,\n    .container-overlap + .container-lg .push-down,\n    .container-overlap + .container-md .push-down,\n    .container-overlap + .container-sm .push-down,\n    .container-overlap + .container-xs .push-down {\n      display: block;\n      height: 3.4rem; }\n  .container-overlap:before {\n    background-color: inherit;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1; }\n\n/**\r\n * Spinners (Loader.CSS)\r\n */\n.loader-primary .ball-pulse > div,\n.loader-primary .ball-grid-pulse > div,\n.loader-primary .square-spin > div,\n.loader-primary .ball-pulse-rise > div,\n.loader-primary .ball-rotate > div,\n.loader-primary .ball-rotate > div:before, .loader-primary .ball-rotate > div:after,\n.loader-primary .cube-transition > div,\n.loader-primary .ball-zig-zag > div,\n.loader-primary .ball-zig-zag-deflect > div,\n.loader-primary .ball-triangle-path > div,\n.loader-primary .ball-scale > div,\n.loader-primary .line-scale > div,\n.loader-primary .line-scale-party > div,\n.loader-primary .ball-scale-multiple > div,\n.loader-primary .ball-pulse-sync > div,\n.loader-primary .ball-beat > div,\n.loader-primary .line-scale-pulse-out > div,\n.loader-primary .line-scale-pulse-out-rapid > div,\n.loader-primary .ball-spin-fade-loader > div,\n.loader-primary .line-spin-fade-loader > div,\n.loader-primary .triangle-skew-spin > div,\n.loader-primary .ball-grid-beat > div,\n.loader-primary .semi-circle-spin > div {\n  background-color: #1E88E5; }\n\n.loader-primary .ball-clip-rotate-multiple {\n  width: 1px; }\n  .loader-primary .ball-clip-rotate-multiple > div {\n    border-color: #1E88E5 transparent #1E88E5 transparent; }\n    .loader-primary .ball-clip-rotate-multiple > div:last-child {\n      border-color: transparent #1E88E5 transparent #1E88E5; }\n\n.loader-primary .ball-clip-rotate > div {\n  border-color: #1E88E5;\n  border-bottom-color: transparent; }\n\n.loader-primary .ball-clip-rotate-pulse > div:first-child {\n  background-color: #1E88E5;\n  top: 5px;\n  left: -8px; }\n\n.loader-primary .ball-clip-rotate-pulse > div:last-child {\n  border-color: #1E88E5 transparent #1E88E5 transparent; }\n\n.loader-primary .square-spin > div,\n.loader-primary .ball-scale-ripple > div,\n.loader-primary .ball-scale-ripple-multiple > div {\n  border-color: #1E88E5; }\n\n.loader-primary .pacman > div:first-of-type {\n  border-top-color: #1E88E5;\n  border-left-color: #1E88E5;\n  border-bottom-color: #1E88E5; }\n\n.loader-primary .pacman > div:nth-child(2) {\n  border-top-color: #1E88E5;\n  border-left-color: #1E88E5;\n  border-bottom-color: #1E88E5; }\n\n.loader-primary .pacman > div:nth-child(3), .loader-primary .pacman > div:nth-child(4), .loader-primary .pacman > div:nth-child(5), .loader-primary .pacman > div:nth-child(6) {\n  background-color: #1E88E5; }\n\n.loader-demo {\n  padding: 20px 0;\n  height: 120px;\n  text-align: center; }\n  .loader-demo > .loader-inner {\n    display: inline-block; }\n\n/**\r\n * Themes\r\n */\n.theme-default .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-default .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-default .layout-container .header-container {\n  background-color: #fff;\n  color: #59676b; }\n\n.theme-default .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-default .sidebar-nav ul > li.active > a {\n  border-left-color: #1E88E5; }\n\n.theme-2 .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-2 .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-2 .layout-container .header-container {\n  background-color: #00BFA5;\n  color: #fff; }\n\n.theme-2 .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-2 .sidebar-nav ul > li.active > a {\n  border-left-color: #00BFA5; }\n\n.theme-3 .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-3 .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-3 .layout-container .header-container {\n  background-color: #00B8D4;\n  color: #fff; }\n\n.theme-3 .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-3 .sidebar-nav ul > li.active > a {\n  border-left-color: #00B8D4; }\n\n.theme-4 .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-4 .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-4 .layout-container .header-container {\n  background-color: #1976D2;\n  color: #fff; }\n\n.theme-4 .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-4 .sidebar-nav ul > li.active > a {\n  border-left-color: #1976D2; }\n\n.theme-5 .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-5 .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-5 .layout-container .header-container {\n  background-color: #7C4DFF;\n  color: #fff; }\n\n.theme-5 .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-5 .sidebar-nav ul > li.active > a {\n  border-left-color: #7C4DFF; }\n\n.theme-6 .layout-container .sidebar-container {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-6 .brand-header {\n  background-color: #263238;\n  color: #fff; }\n\n.theme-6 .layout-container .header-container {\n  background-color: #F50057;\n  color: #fff; }\n\n.theme-6 .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-6 .sidebar-nav ul > li.active > a {\n  border-left-color: #F50057; }\n\n.theme-default-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-default-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-default-w .layout-container .header-container {\n  background-color: #fff;\n  color: #59676b; }\n\n.theme-default-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-default-w .sidebar-nav ul > li.active > a {\n  border-left-color: #1E88E5; }\n\n.theme-2-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-2-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-2-w .layout-container .header-container {\n  background-color: #00BFA5;\n  color: #fff; }\n\n.theme-2-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-2-w .brand-header-logo > .nav-icon > svg, .theme-2-w .brand-header-logo > .nav-icon > em,\n.theme-2-w .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-2-w .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #00BFA5; }\n\n.theme-2-w .sidebar-nav ul > li.active > a {\n  border-left-color: #00BFA5; }\n\n.theme-3-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-3-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-3-w .layout-container .header-container {\n  background-color: #00B8D4;\n  color: #fff; }\n\n.theme-3-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-3-w .brand-header-logo > .nav-icon > svg, .theme-3-w .brand-header-logo > .nav-icon > em,\n.theme-3-w .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-3-w .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #00B8D4; }\n\n.theme-3-w .sidebar-nav ul > li.active > a {\n  border-left-color: #00B8D4; }\n\n.theme-4-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-4-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-4-w .layout-container .header-container {\n  background-color: #1976D2;\n  color: #fff; }\n\n.theme-4-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-4-w .brand-header-logo > .nav-icon > svg, .theme-4-w .brand-header-logo > .nav-icon > em,\n.theme-4-w .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-4-w .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #1976D2; }\n\n.theme-4-w .sidebar-nav ul > li.active > a {\n  border-left-color: #1976D2; }\n\n.theme-5-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-5-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-5-w .layout-container .header-container {\n  background-color: #7C4DFF;\n  color: #fff; }\n\n.theme-5-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-5-w .brand-header-logo > .nav-icon > svg, .theme-5-w .brand-header-logo > .nav-icon > em,\n.theme-5-w .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-5-w .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #7C4DFF; }\n\n.theme-5-w .sidebar-nav ul > li.active > a {\n  border-left-color: #7C4DFF; }\n\n.theme-6-w .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-6-w .brand-header {\n  background-color: #fff;\n  color: #455A64; }\n\n.theme-6-w .layout-container .header-container {\n  background-color: #F50057;\n  color: #fff; }\n\n.theme-6-w .layout-container .main-container {\n  background-color: #f6fbfe; }\n\n.theme-6-w .brand-header-logo > .nav-icon > svg, .theme-6-w .brand-header-logo > .nav-icon > em,\n.theme-6-w .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-6-w .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #F50057; }\n\n.theme-6-w .sidebar-nav ul > li.active > a {\n  border-left-color: #F50057; }\n\n.theme-gradient-sidebar-1 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #673AB7 0, #2196F3 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-1 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-1 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-1 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-1 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-1 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-sidebar-2 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #B0BEC5 0, #78909C 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-2 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-2 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-2 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-2 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-2 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-sidebar-3 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #009688 0, #42A5F5 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-3 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-3 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-3 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-3 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-3 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-sidebar-4 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #7B1FA2 0, #F44336 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-4 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-4 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-4 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-4 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-4 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-sidebar-5 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #FDD835 0, #FF9800 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-5 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-5 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-5 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-5 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-5 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-sidebar-6 .layout-container .sidebar-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #CDDC39 0, #4CAF50 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-sidebar-6 .brand-header-logo > .nav-icon > svg, .theme-gradient-sidebar-6 .brand-header-logo > .nav-icon > em,\n.theme-gradient-sidebar-6 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-sidebar-6 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-sidebar-6 .sidebar-nav ul > li.active > a {\n  border-left-color: #fff; }\n\n.theme-gradient-header-1 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #673AB7 0, #2196F3 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-1 .brand-header-logo > .nav-icon > svg, .theme-gradient-header-1 .brand-header-logo > .nav-icon > em,\n.theme-gradient-header-1 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-header-1 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-header-1 .sidebar-nav ul > li.active > a {\n  border-left-color: #1E88E5; }\n\n.theme-gradient-header-2 .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #263238; }\n\n.theme-gradient-header-2 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #B0BEC5 0, #78909C 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-2 .sidebar-nav ul > li.active > a {\n  border-left-color: #B0BEC5; }\n\n.theme-gradient-header-3 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #009688 0, #42A5F5 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-3 .brand-header-logo > .nav-icon > svg, .theme-gradient-header-3 .brand-header-logo > .nav-icon > em,\n.theme-gradient-header-3 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-header-3 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-header-3 .sidebar-nav ul > li.active > a {\n  border-left-color: #03A9F4; }\n\n.theme-gradient-header-4 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #7B1FA2 0, #F44336 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-4 .brand-header-logo > .nav-icon > svg, .theme-gradient-header-4 .brand-header-logo > .nav-icon > em,\n.theme-gradient-header-4 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-header-4 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-header-4 .sidebar-nav ul > li.active > a {\n  border-left-color: #FF5252; }\n\n.theme-gradient-header-5 .layout-container .sidebar-container {\n  background-color: #fff;\n  color: #263238; }\n\n.theme-gradient-header-5 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #FDD835 0, #FF9800 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-5 .sidebar-nav ul > li.active > a {\n  border-left-color: #FF9800; }\n\n.theme-gradient-header-6 .layout-container .header-container {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #CDDC39 0, #4CAF50 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  color: #fff; }\n\n.theme-gradient-header-6 .brand-header-logo > .nav-icon > svg, .theme-gradient-header-6 .brand-header-logo > .nav-icon > em,\n.theme-gradient-header-6 .sidebar-nav ul > li > a > .nav-icon > svg,\n.theme-gradient-header-6 .sidebar-nav ul > li > a > .nav-icon > em {\n  color: #fff; }\n\n.theme-gradient-header-6 .sidebar-nav ul > li.active > a {\n  border-left-color: #4CAF50; }\n\n.theme-dark {\n  background-color: #2f3c43; }\n  .theme-dark .layout-container .sidebar-container {\n    background-color: #263238;\n    color: #fff; }\n  .theme-dark .brand-header {\n    background-color: #263238;\n    color: #fff; }\n  .theme-dark .layout-container .header-container {\n    background-color: #37474F;\n    color: #fff; }\n  .theme-dark .layout-container .main-container {\n    background-color: #2f3c43;\n    color: #f1f1f1; }\n  .theme-dark .header-container > nav {\n    box-shadow: 0px 5px 25px 0px rgba(23, 23, 23, 0.15); }\n  .theme-dark .footer-container {\n    background-color: #2f3c43;\n    box-shadow: 0px 5px 25px 0px rgba(23, 23, 23, 0.15); }\n  .theme-dark .bg-white:not([class*='bg-']), .theme-dark .card-secondary > .card-header:not([class*='bg-']), .theme-dark .card:not([class*='bg-']):not(.card-primary):not(.card-success):not(.card-info):not(.card-warning):not(.card-danger), .theme-dark .card:not([class*='bg-']):not(.card-primary):not(.card-success):not(.card-info):not(.card-warning):not(.card-danger) > .card-header, .theme-dark .card:not([class*='bg-']):not(.card-primary):not(.card-success):not(.card-info):not(.card-warning):not(.card-danger) > .card-footer {\n    background-color: #35444c;\n    color: inherit; }\n  .theme-dark .cardbox {\n    background-color: #35444c;\n    box-shadow: 0px 5px 25px 0px rgba(23, 23, 23, 0.15); }\n  .theme-dark .cardbox.cardbox-map .cardbox-footer {\n    background-image: linear-gradient(rgba(55, 71, 79, 0), rgba(55, 71, 79, 0.55) 45%, #37474F); }\n  .theme-dark .bg-white {\n    background-color: #35444c;\n    color: inherit; }\n  .theme-dark .well, .theme-dark .jumbotron, .theme-dark .breadcrumb {\n    background-color: #35444c;\n    color: inherit; }\n  .theme-dark .modal-content {\n    background-color: #37474F;\n    color: #fff; }\n  .theme-dark .btn-secondary,\n  .theme-dark .note-btn-group .btn-default {\n    color: #fff;\n    background-color: #37474F;\n    border-color: #2d3940; }\n    .theme-dark .btn-secondary:hover,\n    .theme-dark .note-btn-group .btn-default:hover {\n      color: #fff;\n      background-color: #2f3c43;\n      border-color: #242f34; }\n    .theme-dark .btn-secondary:focus, .theme-dark .btn-secondary.focus,\n    .theme-dark .note-btn-group .btn-default:focus,\n    .theme-dark .note-btn-group .btn-default.focus {\n      box-shadow: 0 0 0 2px rgba(45, 57, 64, 0.5); }\n    .theme-dark .btn-secondary.disabled, .theme-dark .btn-secondary:disabled,\n    .theme-dark .note-btn-group .btn-default.disabled,\n    .theme-dark .note-btn-group .btn-default:disabled {\n      background-color: #37474F;\n      border-color: #2d3940; }\n    .theme-dark .btn-secondary:active, .theme-dark .btn-secondary.active,\n    .show > .theme-dark .btn-secondary.dropdown-toggle,\n    .theme-dark .note-btn-group .btn-default:active,\n    .theme-dark .note-btn-group .btn-default.active,\n    .show >\n    .theme-dark .note-btn-group .btn-default.dropdown-toggle {\n      color: #fff;\n      background-color: #2f3c43;\n      background-image: none;\n      border-color: #242f34; }\n  .theme-dark .dropdown-menu {\n    background-color: #37474F;\n    border-color: #2d3940; }\n    .theme-dark .dropdown-menu .dropdown-item {\n      color: #fff; }\n  .theme-dark .show > .dropdown-toggle.btn-secondary, .theme-dark .show > .dropdown-toggle.btn-secondary:hover, .theme-dark .show > .dropdown-toggle.btn-secondary:active, .theme-dark .show > .dropdown-toggle.btn-secondary.active, .theme-dark .show > .dropdown-toggle.btn-secondary:focus {\n    color: #fff;\n    background-color: #37474F;\n    border-color: #2d3940; }\n  .theme-dark .form-control, .theme-dark .custom-select, .theme-dark .custom-file-control {\n    color: inherit;\n    background-color: rgba(240, 240, 240, 0.1);\n    border-color: rgba(240, 240, 240, 0.12); }\n    .theme-dark .form-control:focus, .theme-dark .custom-select:focus, .theme-dark .custom-file-control:focus {\n      border-color: rgba(240, 240, 240, 0.36); }\n  .theme-dark .custom-file-control:before {\n    background: #37474F;\n    color: #fff;\n    border-color: rgba(240, 240, 240, 0.12); }\n  .theme-dark .form-control[disabled],\n  .theme-dark .form-control[readonly],\n  .theme-dark fieldset[disabled] .form-control {\n    background-color: rgba(240, 240, 240, 0.1); }\n  .theme-dark select:not([multiple]) option {\n    color: #59676b; }\n  .theme-dark .custom-select {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/custom-select-angle-down-white.svg") + "); }\n  .theme-dark .input-group-addon,\n  .theme-dark .input-group-button {\n    background-color: transparent;\n    border: 1px solid rgba(162, 162, 162, 0.26);\n    color: inherit; }\n  .theme-dark .nav-tabs .nav-item.show .nav-link, .theme-dark .nav-tabs .nav-link.active {\n    background: #37474F;\n    color: #fff; }\n  .theme-dark .note-editor .note-editing-area .note-editable {\n    background-color: rgba(240, 240, 240, 0.1); }\n  .theme-dark .progress {\n    background-color: rgba(240, 240, 240, 0.1); }\n  .theme-dark .thead-inverse th {\n    background-color: #455A64; }\n  .theme-dark .popover {\n    background-color: #37474F;\n    color: #fff; }\n    .theme-dark .popover .popover-title {\n      background-color: #41555e;\n      border-color: rgba(160, 160, 160, 0.15);\n      color: inherit; }\n    .theme-dark .popover .popover-content {\n      background-color: #37474F;\n      border-color: rgba(160, 160, 160, 0.15);\n      color: inherit; }\n    .theme-dark .popover.bs-tether-element-attached-left::after, .theme-dark .popover.popover-right::after {\n      border-right-color: #37474F; }\n    .theme-dark .popover.bs-tether-element-attached-right::after, .theme-dark .popover.popover-left::after {\n      border-left-color: #37474F; }\n    .theme-dark .popover.bs-tether-element-attached-top::after, .theme-dark .popover.popover-bottom::after {\n      border-bottom-color: #37474F; }\n    .theme-dark .popover.bs-tether-element-attached-bottom::after, .theme-dark .popover.popover-top::after {\n      border-top-color: #37474F; }\n  .theme-dark .twitter-typeahead .tt-hint {\n    color: inherit !important;\n    background-color: rgba(240, 240, 240, 0.1) !important;\n    border-color: rgba(240, 240, 240, 0.12) !important; }\n  .theme-dark .twitter-typeahead .tt-menu {\n    background-color: #37474F;\n    border: 1px solid rgba(160, 160, 160, 0.5); }\n  .theme-dark .twitter-typeahead .tt-suggestion {\n    color: #fff; }\n    .theme-dark .twitter-typeahead .tt-suggestion:hover {\n      background-color: rgba(160, 160, 160, 0.12); }\n  .theme-dark .ms-container .ms-selectable {\n    background: #37474F; }\n    .theme-dark .ms-container .ms-selectable li.ms-elem-selectable {\n      color: #fff; }\n    .theme-dark .ms-container .ms-selectable li.disabled {\n      background-color: transparent;\n      color: #6c8a99; }\n  .theme-dark .ms-container .ms-selection {\n    background: #37474F; }\n    .theme-dark .ms-container .ms-selection li.ms-elem-selection {\n      color: #fff; }\n    .theme-dark .ms-container .ms-selection li.disabled {\n      background-color: transparent;\n      color: #6c8a99; }\n  .theme-dark .select2-container--default .select2-dropdown {\n    background-color: #37474F;\n    color: #fff; }\n    .theme-dark .select2-container--default .select2-dropdown .select2-search__field {\n      color: inherit;\n      background-color: rgba(240, 240, 240, 0.1);\n      border-color: rgba(240, 240, 240, 0.12); }\n      .theme-dark .select2-container--default .select2-dropdown .select2-search__field:focus {\n        border-color: rgba(240, 240, 240, 0.36); }\n  .theme-dark .sidebar-nav ul > li.active > a {\n    border-left-color: #1E88E5; }\n\n.preview-theme-default {\n  background-color: #fff; }\n\n.preview-theme-2 {\n  background-color: #00BFA5; }\n\n.preview-theme-3 {\n  background-color: #00B8D4; }\n\n.preview-theme-4 {\n  background-color: #1976D2; }\n\n.preview-theme-5 {\n  background-color: #7C4DFF; }\n\n.preview-theme-6 {\n  background-color: #F50057; }\n\n.preview-theme-dark {\n  background-color: #263238; }\n\n.preview-theme-gradient-1 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #673AB7 0, #2196F3 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.preview-theme-gradient-2 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #B0BEC5 0, #78909C 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.preview-theme-gradient-3 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #009688 0, #42A5F5 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.preview-theme-gradient-4 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #7B1FA2 0, #F44336 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.preview-theme-gradient-5 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #FDD835 0, #FF9800 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.preview-theme-gradient-6 {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #CDDC39 0, #4CAF50 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n/**\r\n * Typography\r\n */\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  opacity: 0.54;\n  font-size: 0.6em;\n  color: inherit; }\n\nh1 > small, h2 > small, h3 > small, h4 > small, h5 > small, h6 > small {\n  margin-left: 5px; }\n\nsmall {\n  color: inherit; }\n\n.blockquote {\n  padding: 1rem 2rem;\n  margin: 0 0 2rem;\n  font-size: 1.75rem;\n  border-left: .5rem solid #eee; }\n  .blockquote p:last-child {\n    margin: 0; }\n  .blockquote .small, .blockquote footer, .blockquote small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857143;\n    color: #777; }\n    .blockquote .small:before, .blockquote footer:before, .blockquote small:before {\n      content: '\\2014   \\A0'; }\n\n/**\r\n * Forms - Note Editor\r\n */\n.note-area > textarea {\n  background-image: linear-gradient(rgba(162, 162, 162, 0.26) 0.1em, transparent 0.1em);\n  background-size: 100% 20px;\n  background-color: transparent !important;\n  line-height: 20px;\n  margin-top: 5px;\n  padding: 0;\n  padding-bottom: 1px;\n  border: none !important; }\n\n.note-area.note-area-margin {\n  position: relative; }\n  .note-area.note-area-margin > textarea {\n    padding-left: 55px; }\n  .note-area.note-area-margin:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 45px;\n    width: 5px;\n    background-color: rgba(255, 152, 0, 0.5); }\n\n/**\r\n * Forms - Switch\r\n */\n.switch .form-control {\n  padding-top: 7px;\n  margin-bottom: 0; }\n\n.switch * {\n  cursor: pointer; }\n\n.switch input {\n  opacity: 0;\n  position: absolute;\n  z-index: -1; }\n\n.switch {\n  margin-right: 8px; }\n  .switch span {\n    position: relative;\n    display: inline-block;\n    width: 35px;\n    height: 15px;\n    background-color: #9e9e9e;\n    border: 0;\n    border-radius: 8px;\n    vertical-align: middle;\n    transition: all 0.2s cubic-bezier(0.35, 0, 0.25, 1) 0.1s; }\n  .switch span:after {\n    content: \"\";\n    position: absolute;\n    background-color: #fff;\n    top: -2px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border: 0;\n    border-radius: 400px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);\n    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1); }\n  .switch.switch-primary input:checked + span {\n    background-color: #1E88E5; }\n    .switch.switch-primary input:checked + span:after {\n      background-color: #1E88E5; }\n  .switch.switch-primary.switch-warn input:checked + span {\n    background-color: rgba(30, 136, 229, 0.5); }\n  .switch.switch-info input:checked + span {\n    background-color: #03A9F4; }\n    .switch.switch-info input:checked + span:after {\n      background-color: #03A9F4; }\n  .switch.switch-info.switch-warn input:checked + span {\n    background-color: rgba(3, 169, 244, 0.5); }\n  .switch.switch-danger input:checked + span {\n    background-color: #FF5252; }\n    .switch.switch-danger input:checked + span:after {\n      background-color: #FF5252; }\n  .switch.switch-danger.switch-warn input:checked + span {\n    background-color: rgba(255, 82, 82, 0.5); }\n  .switch.switch-warning input:checked + span {\n    background-color: #FF9800; }\n    .switch.switch-warning input:checked + span:after {\n      background-color: #FF9800; }\n  .switch.switch-warning.switch-warn input:checked + span {\n    background-color: rgba(255, 152, 0, 0.5); }\n  .switch.switch-success input:checked + span {\n    background-color: #4CAF50; }\n    .switch.switch-success input:checked + span:after {\n      background-color: #4CAF50; }\n  .switch.switch-success.switch-warn input:checked + span {\n    background-color: rgba(76, 175, 80, 0.5); }\n  .switch.switch-purple input:checked + span {\n    background-color: #7E57C2; }\n    .switch.switch-purple input:checked + span:after {\n      background-color: #7E57C2; }\n  .switch.switch-purple.switch-warn input:checked + span {\n    background-color: rgba(126, 87, 194, 0.5); }\n\n.switch input:checked + span {\n  background-color: #1E88E5; }\n  .switch input:checked + span:after {\n    background-color: #1E88E5; }\n\n.switch.switch-warn input:checked + span {\n  background-color: rgba(30, 136, 229, 0.5); }\n\n.switch input:checked + span:after {\n  left: 50%; }\n\n.switch input:disabled + span {\n  background-color: rgba(158, 158, 158, 0.5) !important; }\n  .switch input:disabled + span:after {\n    background-color: #fff !important; }\n\n/**\r\n * Cards\r\n */\n.cardbox {\n  position: relative;\n  border-radius: 3px;\n  background-color: #fff;\n  box-shadow: 0px 5px 25px 0px rgba(123, 123, 123, 0.15);\n  margin-bottom: 8px; }\n  @media only screen and (min-width: 480px) {\n    .cardbox {\n      margin-bottom: 16px; } }\n  @media only screen and (min-width: 992px) {\n    .cardbox {\n      margin-bottom: 24px; } }\n  .cardbox .cardbox-heading {\n    padding: 16px;\n    margin: 0; }\n    .cardbox .cardbox-heading > .cardbox-title {\n      margin: 0;\n      font-size: 18px; }\n    .cardbox .cardbox-heading > .cardbox-icon {\n      float: right;\n      color: rgba(255, 255, 255, 0.87);\n      font-size: 20px; }\n    .cardbox .cardbox-heading > small {\n      font-size: .85rem;\n      color: rgba(162, 162, 162, 0.92);\n      letter-spacing: .01em; }\n  .cardbox .cardbox-body {\n    position: relative;\n    padding: 16px; }\n  .cardbox .cardbox-footer {\n    padding: 16px;\n    border-top: 1px solid rgba(162, 162, 162, 0.12); }\n  .cardbox .cardbox-item {\n    position: relative;\n    display: block;\n    min-height: 120px; }\n    .cardbox .cardbox-item > .cardbox-item-text {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: rgba(0, 0, 0, 0.35);\n      margin: 0;\n      color: #fff;\n      padding: 8px; }\n      .cardbox .cardbox-item > .cardbox-item-text a {\n        color: inherit; }\n    .cardbox .cardbox-item > .cardbox-item-image {\n      display: block;\n      width: 100%;\n      height: 190px;\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: cover; }\n    .cardbox .cardbox-item.cardbox-media {\n      min-height: 280px;\n      background-repeat: repeat;\n      background-position: 50% 50%;\n      background-size: cover;\n      background-attachment: scroll;\n      background-origin: padding-box; }\n      .cardbox .cardbox-item.cardbox-media .cardbox-media-quote {\n        padding: 16px;\n        font-size: 35px; }\n        @media only screen and (min-width: 768px) {\n          .cardbox .cardbox-item.cardbox-media .cardbox-media-quote {\n            font-size: 45px; } }\n        .cardbox .cardbox-item.cardbox-media .cardbox-media-quote > a {\n          color: inherit;\n          text-decoration: none; }\n        .cardbox .cardbox-item.cardbox-media .cardbox-media-quote:before {\n          content: '\\201C';\n          display: block;\n          font-size: 2em;\n          line-height: 1;\n          margin-top: 0.25em; }\n  .cardbox.cardbox-transparent {\n    background-color: transparent;\n    border: 0;\n    box-shadow: 0 0 0 #000; }\n  .cardbox .cardbox-offset {\n    position: relative;\n    padding-bottom: 36px;\n    z-index: 10; }\n    .cardbox .cardbox-offset > .cardbox-offset-item {\n      position: absolute;\n      top: -24px;\n      left: 15px;\n      right: 15px; }\n  .cardbox .cardbox-toolbar {\n    position: relative;\n    width: 100%;\n    min-height: 64px;\n    font-size: 18px;\n    line-height: 64px;\n    padding-left: 22px;\n    z-index: 2; }\n  .cardbox .cardbox-subheader {\n    padding: 16px 0 16px 16px;\n    line-height: .75em;\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: .01em;\n    color: rgba(0, 0, 0, 0.54); }\n  .cardbox .cardbox-divider {\n    display: block;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border: 1px solid rgba(0, 0, 0, 0.12); }\n    .cardbox .cardbox-divider + .cardbox-offset {\n      margin-top: -10px; }\n  .cardbox > .ui-datepicker,\n  .cardbox > .ui-datepicker-responsive > .ui-datepicker {\n    width: 100%;\n    box-shadow: 0 0 0 #000;\n    margin: 0; }\n    .cardbox > .ui-datepicker > table,\n    .cardbox > .ui-datepicker-responsive > .ui-datepicker > table {\n      width: 100%; }\n  .cardbox .editable-wrap {\n    width: 100%; }\n  .cardbox > .list-group > .list-group-item {\n    border-left: 0;\n    border-right: 0; }\n    .cardbox > .list-group > .list-group-item:first-child {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n    .cardbox > .list-group > .list-group-item:last-child {\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n      border-bottom: 0; }\n  .cardbox > .table-responsive > .table,\n  .cardbox > .table {\n    margin-bottom: 0; }\n  .cardbox > .table-responsive {\n    border: 0; }\n  .cardbox > .btn {\n    border-radius: 0;\n    width: 100%;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    text-align: center; }\n    .cardbox > .btn:last-child {\n      border-bottom-right-radius: 2px;\n      border-bottom-left-radius: 2px; }\n  .cardbox.cardbox-map {\n    border: 0; }\n    .cardbox.cardbox-map .cardbox-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      border: 0;\n      background-color: transparent;\n      padding-bottom: .5rem;\n      padding-top: 2.5rem;\n      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75) 35%, white);\n      background-repeat: no-repeat; }\n  .cardbox.cardbox-flat {\n    box-shadow: 0 0 0 #000;\n    background-color: transparent !important;\n    border: 0; }\n\n/**\r\n * Google Material Colors (customization)\r\n */\n.bg-pink-500 {\n  background-color: #E91E63;\n  color: #fff !important; }\n\n.bg-purple-400 {\n  background-color: #AB47BC;\n  color: #fff !important; }\n\n.bg-purple-500 {\n  background-color: #9C27B0;\n  color: #fff !important; }\n\n.bg-deep-purple-500 {\n  background-color: #673AB7;\n  color: #fff !important; }\n\n.bg-indigo-500 {\n  background-color: #3F51B5;\n  color: #fff !important; }\n\n.bg-green-50 {\n  background-color: #E8F5E9;\n  color: #fff !important; }\n\n.bg-green-500 {\n  background-color: #4CAF50;\n  color: #fff !important; }\n\n.bg-blue-500 {\n  background-color: #2196F3;\n  color: #fff !important; }\n\n.bg-blue-grey-900 {\n  background-color: #263238;\n  color: #fff !important; }\n\n.bg-red-500 {\n  background-color: #F44336;\n  color: #fff !important; }\n\n.bg-primary,\n.bg-red-800, .bg-red-900,\n.bg-pink-700, .bg-pink-800, .bg-pink-900,\n.bg-purple, .bg-purple-500, .bg-purple-600, .bg-purple-700, .bg-purple-800, .bg-purple-900,\n.bg-deep-purple, .bg-deep-purple-500, .bg-deep-purple-600, .bg-deep-purple-700, .bg-deep-purple-800, .bg-deep-purple-900, .bg-deep-purple-a400, .bg-deep-purple-a700,\n.bg-indigo, .bg-indigo-500, .bg-indigo-600, .bg-indigo-700, .bg-indigo-800, .bg-indigo-900, .bg-indigo-a700, .bg-blue-800,\n.bg-blue-900, .bg-light-blue-900,\n.bg-cyan-900, .bg-teal-800, .bg-teal-900,\n.bg-green-800, .bg-green-900,\n.bg-brown, .bg-brown-500, .bg-brown-600, .bg-brown-700, .bg-brown-800, .bg-brown-900, .bg-blue-grey-600,\n.bg-blue-grey-700, .bg-blue-grey-800, .bg-blue-grey-900, .bg-grey-600,\n.bg-grey-700, .bg-grey-800, .bg-grey-900 {\n  color: rgba(255, 255, 255, 0.97); }\n  .bg-primary .text-muted,\n  .bg-red-800 .text-muted, .bg-red-900 .text-muted,\n  .bg-pink-700 .text-muted, .bg-pink-800 .text-muted, .bg-pink-900 .text-muted,\n  .bg-purple .text-muted, .bg-purple-500 .text-muted, .bg-purple-600 .text-muted, .bg-purple-700 .text-muted, .bg-purple-800 .text-muted, .bg-purple-900 .text-muted,\n  .bg-deep-purple .text-muted, .bg-deep-purple-500 .text-muted, .bg-deep-purple-600 .text-muted, .bg-deep-purple-700 .text-muted, .bg-deep-purple-800 .text-muted, .bg-deep-purple-900 .text-muted, .bg-deep-purple-a400 .text-muted, .bg-deep-purple-a700 .text-muted,\n  .bg-indigo .text-muted, .bg-indigo-500 .text-muted, .bg-indigo-600 .text-muted, .bg-indigo-700 .text-muted, .bg-indigo-800 .text-muted, .bg-indigo-900 .text-muted, .bg-indigo-a700 .text-muted, .bg-blue-800 .text-muted,\n  .bg-blue-900 .text-muted, .bg-light-blue-900 .text-muted,\n  .bg-cyan-900 .text-muted, .bg-teal-800 .text-muted, .bg-teal-900 .text-muted,\n  .bg-green-800 .text-muted, .bg-green-900 .text-muted,\n  .bg-brown .text-muted, .bg-brown-500 .text-muted, .bg-brown-600 .text-muted, .bg-brown-700 .text-muted, .bg-brown-800 .text-muted, .bg-brown-900 .text-muted, .bg-blue-grey-600 .text-muted,\n  .bg-blue-grey-700 .text-muted, .bg-blue-grey-800 .text-muted, .bg-blue-grey-900 .text-muted, .bg-grey-600 .text-muted,\n  .bg-grey-700 .text-muted, .bg-grey-800 .text-muted, .bg-grey-900 .text-muted {\n    color: rgba(255, 255, 255, 0.57) !important; }\n  .bg-primary .text-soft,\n  .bg-red-800 .text-soft, .bg-red-900 .text-soft,\n  .bg-pink-700 .text-soft, .bg-pink-800 .text-soft, .bg-pink-900 .text-soft,\n  .bg-purple .text-soft, .bg-purple-500 .text-soft, .bg-purple-600 .text-soft, .bg-purple-700 .text-soft, .bg-purple-800 .text-soft, .bg-purple-900 .text-soft,\n  .bg-deep-purple .text-soft, .bg-deep-purple-500 .text-soft, .bg-deep-purple-600 .text-soft, .bg-deep-purple-700 .text-soft, .bg-deep-purple-800 .text-soft, .bg-deep-purple-900 .text-soft, .bg-deep-purple-a400 .text-soft, .bg-deep-purple-a700 .text-soft,\n  .bg-indigo .text-soft, .bg-indigo-500 .text-soft, .bg-indigo-600 .text-soft, .bg-indigo-700 .text-soft, .bg-indigo-800 .text-soft, .bg-indigo-900 .text-soft, .bg-indigo-a700 .text-soft, .bg-blue-800 .text-soft,\n  .bg-blue-900 .text-soft, .bg-light-blue-900 .text-soft,\n  .bg-cyan-900 .text-soft, .bg-teal-800 .text-soft, .bg-teal-900 .text-soft,\n  .bg-green-800 .text-soft, .bg-green-900 .text-soft,\n  .bg-brown .text-soft, .bg-brown-500 .text-soft, .bg-brown-600 .text-soft, .bg-brown-700 .text-soft, .bg-brown-800 .text-soft, .bg-brown-900 .text-soft, .bg-blue-grey-600 .text-soft,\n  .bg-blue-grey-700 .text-soft, .bg-blue-grey-800 .text-soft, .bg-blue-grey-900 .text-soft, .bg-grey-600 .text-soft,\n  .bg-grey-700 .text-soft, .bg-grey-800 .text-soft, .bg-grey-900 .text-soft {\n    color: rgba(255, 255, 255, 0.26); }\n\n.bg-red, .bg-red-500, .bg-red-600, .bg-red-700, .bg-red-a200, .bg-red-a400, .bg-red-a700, .bg-pink,\n.bg-pink-500, .bg-pink-600, .bg-pink-a200, .bg-pink-a400, .bg-pink-a700, .bg-purple-300,\n.bg-purple-400, .bg-purple-a200, .bg-purple-a400, .bg-purple-a700, .bg-deep-purple-300,\n.bg-deep-purple-400, .bg-deep-purple-a200,\n.bg-indigo-300, .bg-indigo-400, .bg-indigo-a200, .bg-indigo-a400, .bg-blue,\n.bg-blue-500, .bg-blue-600, .bg-blue-700, .bg-blue-a200, .bg-blue-a400, .bg-blue-a700, .bg-light-blue,\n.bg-light-blue-500, .bg-light-blue-600, .bg-light-blue-700, .bg-light-blue-800, .bg-light-blue-a700, .bg-cyan,\n.bg-cyan-500, .bg-cyan-600, .bg-cyan-700, .bg-cyan-800, .bg-teal,\n.bg-teal-500, .bg-teal-600, .bg-teal-700,\n.bg-amber-900, .bg-amber-800, .bg-yellow-900,\n.bg-green, .bg-green-500, .bg-green-600, .bg-green-700, .bg-light-green-800, .bg-light-green-900,\n.bg-lime-900, .bg-orange-500, .bg-orange-600, .bg-orange-700, .bg-orange-800, .bg-orange-900, .bg-orange-a400, .bg-orange-a700,\n.bg-deep-orange, .bg-deep-orange-500, .bg-deep-orange-600, .bg-deep-orange-700, .bg-deep-orange-800, .bg-deep-orange-900, .bg-deep-orange-a400, .bg-deep-orange-a700, .bg-brown-300,\n.bg-brown-400, .bg-blue-grey, .bg-blue-grey-400, .bg-blue-grey-500 {\n  color: #fff; }\n  .bg-red .text-muted, .bg-red-500 .text-muted, .bg-red-600 .text-muted, .bg-red-700 .text-muted, .bg-red-a200 .text-muted, .bg-red-a400 .text-muted, .bg-red-a700 .text-muted, .bg-pink .text-muted,\n  .bg-pink-500 .text-muted, .bg-pink-600 .text-muted, .bg-pink-a200 .text-muted, .bg-pink-a400 .text-muted, .bg-pink-a700 .text-muted, .bg-purple-300 .text-muted,\n  .bg-purple-400 .text-muted, .bg-purple-a200 .text-muted, .bg-purple-a400 .text-muted, .bg-purple-a700 .text-muted, .bg-deep-purple-300 .text-muted,\n  .bg-deep-purple-400 .text-muted, .bg-deep-purple-a200 .text-muted,\n  .bg-indigo-300 .text-muted, .bg-indigo-400 .text-muted, .bg-indigo-a200 .text-muted, .bg-indigo-a400 .text-muted, .bg-blue .text-muted,\n  .bg-blue-500 .text-muted, .bg-blue-600 .text-muted, .bg-blue-700 .text-muted, .bg-blue-a200 .text-muted, .bg-blue-a400 .text-muted, .bg-blue-a700 .text-muted, .bg-light-blue .text-muted,\n  .bg-light-blue-500 .text-muted, .bg-light-blue-600 .text-muted, .bg-light-blue-700 .text-muted, .bg-light-blue-800 .text-muted, .bg-light-blue-a700 .text-muted, .bg-cyan .text-muted,\n  .bg-cyan-500 .text-muted, .bg-cyan-600 .text-muted, .bg-cyan-700 .text-muted, .bg-cyan-800 .text-muted, .bg-teal .text-muted,\n  .bg-teal-500 .text-muted, .bg-teal-600 .text-muted, .bg-teal-700 .text-muted,\n  .bg-amber-900 .text-muted, .bg-amber-800 .text-muted, .bg-yellow-900 .text-muted,\n  .bg-green .text-muted, .bg-green-500 .text-muted, .bg-green-600 .text-muted, .bg-green-700 .text-muted, .bg-light-green-800 .text-muted, .bg-light-green-900 .text-muted,\n  .bg-lime-900 .text-muted, .bg-orange-500 .text-muted, .bg-orange-600 .text-muted, .bg-orange-700 .text-muted, .bg-orange-800 .text-muted, .bg-orange-900 .text-muted, .bg-orange-a400 .text-muted, .bg-orange-a700 .text-muted,\n  .bg-deep-orange .text-muted, .bg-deep-orange-500 .text-muted, .bg-deep-orange-600 .text-muted, .bg-deep-orange-700 .text-muted, .bg-deep-orange-800 .text-muted, .bg-deep-orange-900 .text-muted, .bg-deep-orange-a400 .text-muted, .bg-deep-orange-a700 .text-muted, .bg-brown-300 .text-muted,\n  .bg-brown-400 .text-muted, .bg-blue-grey .text-muted, .bg-blue-grey-400 .text-muted, .bg-blue-grey-500 .text-muted {\n    color: rgba(255, 255, 255, 0.57) !important; }\n  .bg-red .text-soft, .bg-red-500 .text-soft, .bg-red-600 .text-soft, .bg-red-700 .text-soft, .bg-red-a200 .text-soft, .bg-red-a400 .text-soft, .bg-red-a700 .text-soft, .bg-pink .text-soft,\n  .bg-pink-500 .text-soft, .bg-pink-600 .text-soft, .bg-pink-a200 .text-soft, .bg-pink-a400 .text-soft, .bg-pink-a700 .text-soft, .bg-purple-300 .text-soft,\n  .bg-purple-400 .text-soft, .bg-purple-a200 .text-soft, .bg-purple-a400 .text-soft, .bg-purple-a700 .text-soft, .bg-deep-purple-300 .text-soft,\n  .bg-deep-purple-400 .text-soft, .bg-deep-purple-a200 .text-soft,\n  .bg-indigo-300 .text-soft, .bg-indigo-400 .text-soft, .bg-indigo-a200 .text-soft, .bg-indigo-a400 .text-soft, .bg-blue .text-soft,\n  .bg-blue-500 .text-soft, .bg-blue-600 .text-soft, .bg-blue-700 .text-soft, .bg-blue-a200 .text-soft, .bg-blue-a400 .text-soft, .bg-blue-a700 .text-soft, .bg-light-blue .text-soft,\n  .bg-light-blue-500 .text-soft, .bg-light-blue-600 .text-soft, .bg-light-blue-700 .text-soft, .bg-light-blue-800 .text-soft, .bg-light-blue-a700 .text-soft, .bg-cyan .text-soft,\n  .bg-cyan-500 .text-soft, .bg-cyan-600 .text-soft, .bg-cyan-700 .text-soft, .bg-cyan-800 .text-soft, .bg-teal .text-soft,\n  .bg-teal-500 .text-soft, .bg-teal-600 .text-soft, .bg-teal-700 .text-soft,\n  .bg-amber-900 .text-soft, .bg-amber-800 .text-soft, .bg-yellow-900 .text-soft,\n  .bg-green .text-soft, .bg-green-500 .text-soft, .bg-green-600 .text-soft, .bg-green-700 .text-soft, .bg-light-green-800 .text-soft, .bg-light-green-900 .text-soft,\n  .bg-lime-900 .text-soft, .bg-orange-500 .text-soft, .bg-orange-600 .text-soft, .bg-orange-700 .text-soft, .bg-orange-800 .text-soft, .bg-orange-900 .text-soft, .bg-orange-a400 .text-soft, .bg-orange-a700 .text-soft,\n  .bg-deep-orange .text-soft, .bg-deep-orange-500 .text-soft, .bg-deep-orange-600 .text-soft, .bg-deep-orange-700 .text-soft, .bg-deep-orange-800 .text-soft, .bg-deep-orange-900 .text-soft, .bg-deep-orange-a400 .text-soft, .bg-deep-orange-a700 .text-soft, .bg-brown-300 .text-soft,\n  .bg-brown-400 .text-soft, .bg-blue-grey .text-soft, .bg-blue-grey-400 .text-soft, .bg-blue-grey-500 .text-soft {\n    color: rgba(255, 255, 255, 0.26); }\n\n/**\r\n * Datepicker\r\n */\n.ui-datepicker-responsive {\n  max-width: 100%;\n  overflow: auto; }\n\n.ui-datepicker {\n  background-color: transparent;\n  display: inline-block; }\n  .ui-datepicker .card {\n    padding: 0;\n    margin: 0;\n    border: 0; }\n  .ui-datepicker table {\n    width: 100%; }\n    .ui-datepicker table thead tr:last-child th {\n      line-height: 36px; }\n    .ui-datepicker table thead button {\n      width: 100%;\n      padding-top: 16px;\n      padding-bottom: 16px; }\n    .ui-datepicker table thead th {\n      padding: 0; }\n    .ui-datepicker table button {\n      border: 0;\n      border-radius: 0;\n      padding: 12px; }\n      .ui-datepicker table button span {\n        position: relative; }\n        .ui-datepicker table button span:after {\n          content: '';\n          display: block;\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: -8px;\n          margin: 0 auto;\n          border-radius: 50%;\n          height: 6px;\n          width: 6px;\n          background-color: transparent; }\n        .ui-datepicker table button span.text-info {\n          border-bottom: 1px solid;\n          font-weight: bold; }\n      .ui-datepicker table button.btn-default.btn-info {\n        background-color: #ECEFF1;\n        color: #333; }\n    .ui-datepicker table .full button span:after {\n      background-color: #03A9F4; }\n    .ui-datepicker table .partially button span:after {\n      background-color: #FF9800; }\n\n.ui-datepicker .dropdown-menu {\n  margin: 0;\n  padding: 0 0 5px 0;\n  border: 0; }\n\n.ui-datepicker.dp-head-primary table thead button {\n  background-color: #1E88E5;\n  color: #fff; }\n\n.ui-datepicker.dp-head-primary table thead tr:last-child th {\n  background-color: #166dba;\n  color: #fff; }\n\n.ui-datepicker.dp-head-success table thead button {\n  background-color: #4CAF50;\n  color: #fff; }\n\n.ui-datepicker.dp-head-success table thead tr:last-child th {\n  background-color: #3d8b40;\n  color: #fff; }\n\n.ui-datepicker.dp-head-warning table thead button {\n  background-color: #FF9800;\n  color: #fff; }\n\n.ui-datepicker.dp-head-warning table thead tr:last-child th {\n  background-color: #cc7a00;\n  color: #fff; }\n\n.ui-datepicker.dp-head-info table thead button {\n  background-color: #03A9F4;\n  color: #fff; }\n\n.ui-datepicker.dp-head-info table thead tr:last-child th {\n  background-color: #0286c2;\n  color: #fff; }\n\n.ui-datepicker.dp-head-danger table thead button {\n  background-color: #FF5252;\n  color: #fff; }\n\n.ui-datepicker.dp-head-danger table thead tr:last-child th {\n  background-color: #ff1f1f;\n  color: #fff; }\n\n.ui-datepicker.dp-head-pink table thead button {\n  background-color: #E91E63;\n  color: #fff; }\n\n.ui-datepicker.dp-head-pink table thead tr:last-child th {\n  background-color: #c1134e;\n  color: #fff; }\n\n.ui-datepicker.dp-head-purple table thead button {\n  background-color: #7E57C2;\n  color: #fff; }\n\n.ui-datepicker.dp-head-purple table thead tr:last-child th {\n  background-color: #643da9;\n  color: #fff; }\n\n.ui-datepicker.dp-table-primary table button.btn-info {\n  background-color: #1E88E5; }\n\n.ui-datepicker.dp-table-primary table button > span.text-info {\n  color: #1E88E5; }\n\n.ui-datepicker.dp-table-primary table button.active, .ui-datepicker.dp-table-primary table button:active, .ui-datepicker.dp-table-primary table button:hover {\n  background-color: #1E88E5;\n  color: #fff; }\n  .ui-datepicker.dp-table-primary table button.active > span,\n  .ui-datepicker.dp-table-primary table button.active > span.text-info, .ui-datepicker.dp-table-primary table button:active > span,\n  .ui-datepicker.dp-table-primary table button:active > span.text-info, .ui-datepicker.dp-table-primary table button:hover > span,\n  .ui-datepicker.dp-table-primary table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-success table button.btn-info {\n  background-color: #4CAF50; }\n\n.ui-datepicker.dp-table-success table button > span.text-info {\n  color: #4CAF50; }\n\n.ui-datepicker.dp-table-success table button.active, .ui-datepicker.dp-table-success table button:active, .ui-datepicker.dp-table-success table button:hover {\n  background-color: #4CAF50;\n  color: #fff; }\n  .ui-datepicker.dp-table-success table button.active > span,\n  .ui-datepicker.dp-table-success table button.active > span.text-info, .ui-datepicker.dp-table-success table button:active > span,\n  .ui-datepicker.dp-table-success table button:active > span.text-info, .ui-datepicker.dp-table-success table button:hover > span,\n  .ui-datepicker.dp-table-success table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-warning table button.btn-info {\n  background-color: #FF9800; }\n\n.ui-datepicker.dp-table-warning table button > span.text-info {\n  color: #FF9800; }\n\n.ui-datepicker.dp-table-warning table button.active, .ui-datepicker.dp-table-warning table button:active, .ui-datepicker.dp-table-warning table button:hover {\n  background-color: #FF9800;\n  color: #fff; }\n  .ui-datepicker.dp-table-warning table button.active > span,\n  .ui-datepicker.dp-table-warning table button.active > span.text-info, .ui-datepicker.dp-table-warning table button:active > span,\n  .ui-datepicker.dp-table-warning table button:active > span.text-info, .ui-datepicker.dp-table-warning table button:hover > span,\n  .ui-datepicker.dp-table-warning table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-info table button.btn-info {\n  background-color: #03A9F4; }\n\n.ui-datepicker.dp-table-info table button > span.text-info {\n  color: #03A9F4; }\n\n.ui-datepicker.dp-table-info table button.active, .ui-datepicker.dp-table-info table button:active, .ui-datepicker.dp-table-info table button:hover {\n  background-color: #03A9F4;\n  color: #fff; }\n  .ui-datepicker.dp-table-info table button.active > span,\n  .ui-datepicker.dp-table-info table button.active > span.text-info, .ui-datepicker.dp-table-info table button:active > span,\n  .ui-datepicker.dp-table-info table button:active > span.text-info, .ui-datepicker.dp-table-info table button:hover > span,\n  .ui-datepicker.dp-table-info table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-danger table button.btn-info {\n  background-color: #FF5252; }\n\n.ui-datepicker.dp-table-danger table button > span.text-info {\n  color: #FF5252; }\n\n.ui-datepicker.dp-table-danger table button.active, .ui-datepicker.dp-table-danger table button:active, .ui-datepicker.dp-table-danger table button:hover {\n  background-color: #FF5252;\n  color: #fff; }\n  .ui-datepicker.dp-table-danger table button.active > span,\n  .ui-datepicker.dp-table-danger table button.active > span.text-info, .ui-datepicker.dp-table-danger table button:active > span,\n  .ui-datepicker.dp-table-danger table button:active > span.text-info, .ui-datepicker.dp-table-danger table button:hover > span,\n  .ui-datepicker.dp-table-danger table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-pink table button.btn-info {\n  background-color: #E91E63; }\n\n.ui-datepicker.dp-table-pink table button > span.text-info {\n  color: #E91E63; }\n\n.ui-datepicker.dp-table-pink table button.active, .ui-datepicker.dp-table-pink table button:active, .ui-datepicker.dp-table-pink table button:hover {\n  background-color: #E91E63;\n  color: #fff; }\n  .ui-datepicker.dp-table-pink table button.active > span,\n  .ui-datepicker.dp-table-pink table button.active > span.text-info, .ui-datepicker.dp-table-pink table button:active > span,\n  .ui-datepicker.dp-table-pink table button:active > span.text-info, .ui-datepicker.dp-table-pink table button:hover > span,\n  .ui-datepicker.dp-table-pink table button:hover > span.text-info {\n    color: #fff; }\n\n.ui-datepicker.dp-table-purple table button.btn-info {\n  background-color: #7E57C2; }\n\n.ui-datepicker.dp-table-purple table button > span.text-info {\n  color: #7E57C2; }\n\n.ui-datepicker.dp-table-purple table button.active, .ui-datepicker.dp-table-purple table button:active, .ui-datepicker.dp-table-purple table button:hover {\n  background-color: #7E57C2;\n  color: #fff; }\n  .ui-datepicker.dp-table-purple table button.active > span,\n  .ui-datepicker.dp-table-purple table button.active > span.text-info, .ui-datepicker.dp-table-purple table button:active > span,\n  .ui-datepicker.dp-table-purple table button:active > span.text-info, .ui-datepicker.dp-table-purple table button:hover > span,\n  .ui-datepicker.dp-table-purple table button:hover > span.text-info {\n    color: #fff; }\n\n/**\r\n * Typeahead\r\n */\n.typeahead-ctrl .dropdown-menu {\n  max-height: 300px;\n  overflow: auto; }\n\n/**\r\n * Utilities\r\n */\n.fh {\n  height: 100% !important; }\n\n@media only screen and (min-width: 768px) {\n  .fh-sm {\n    height: 100% !important; } }\n\n@media only screen and (min-width: 992px) {\n  .fh-md {\n    height: 100% !important; } }\n\n@media only screen and (min-width: 1200px) {\n  .fh-lg {\n    height: 100% !important; } }\n\n.fw {\n  width: 100% !important; }\n\n@media only screen and (min-width: 768px) {\n  .fw-sm {\n    width: 100% !important; } }\n\n@media only screen and (min-width: 992px) {\n  .fw-md {\n    width: 100% !important; } }\n\n@media only screen and (min-width: 1200px) {\n  .fw-lg {\n    width: 100% !important; } }\n\n.va-middle {\n  vertical-align: middle !important; }\n\n.va-top {\n  vertical-align: top !important; }\n\n.va-bottom {\n  vertical-align: bottom !important; }\n\ntable.va-middle td {\n  vertical-align: middle !important; }\n\ntable.va-top td {\n  vertical-align: top !important; }\n\ntable.va-bottom td {\n  vertical-align: bottom !important; }\n\n.b0 {\n  border-width: 0 !important; }\n\n.bl0 {\n  border-left-width: 0 !important; }\n\n.br0 {\n  border-right-width: 0 !important; }\n\n.bt0 {\n  border-top-width: 0 !important; }\n\n.bb0 {\n  border-bottom-width: 0 !important; }\n\n.br, .b, .ba {\n  border-right: 1px solid rgba(162, 162, 162, 0.32); }\n\n.bl, .b, .ba {\n  border-left: 1px solid rgba(162, 162, 162, 0.32); }\n\n.bt, .b, .ba {\n  border-top: 1px solid rgba(162, 162, 162, 0.32); }\n\n.bb, .b, .ba {\n  border-bottom: 1px solid rgba(162, 162, 162, 0.32); }\n\n.spr {\n  margin-right: .25em; }\n\n.spl {\n  margin-left: .25em; }\n\n.text-white {\n  color: #fff; }\n\n.text-alpha {\n  color: rgba(255, 255, 255, 0.5); }\n\n.text-alpha-inverse {\n  color: rgba(0, 0, 0, 0.5); }\n\n.text-gray-darker {\n  color: #263238; }\n\n.text-gray-dark {\n  color: #455A64; }\n\n.text-gray {\n  color: #607D8B; }\n\n.text-gray-light {\n  color: #90A4AE; }\n\n.text-gray-lighter {\n  color: #ECEFF1; }\n\n.text-inherit {\n  color: inherit !important; }\n\n.text-soft {\n  color: rgba(162, 162, 162, 0.66); }\n\n.text-light {\n  color: rgba(255, 255, 255, 0.74); }\n\n.text-color {\n  color: #59676b; }\n\n.text-sm {\n  font-size: 0.85rem; }\n\n.text-md {\n  font-size: 1.9rem; }\n\n.text-lg {\n  font-size: 3rem; }\n\n.text-xl {\n  font-size: 10rem; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-thin {\n  font-weight: 100 !important; }\n\n.text-bold {\n  font-weight: bold !important; }\n\n.text-normal {\n  font-weight: normal !important; }\n\n.text-normal p {\n  font-weight: normal; }\n\n.text-ellipsis {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  vertical-align: bottom; }\n\n.inline {\n  display: inline-block !important; }\n\n.block-center {\n  margin: 0 auto; }\n\n.block {\n  display: block !important; }\n\n.bg-white {\n  background-color: #fff;\n  color: inherit !important; }\n\n.bg-primary {\n  background-color: #1E88E5 !important;\n  color: #fff !important; }\n\n.bg-primary .text-muted {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.bg-primary small {\n  color: inherit; }\n\n.bg-success {\n  background-color: #4CAF50 !important;\n  color: #fff !important; }\n\n.bg-success .text-muted {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.bg-success small {\n  color: inherit; }\n\n.bg-info {\n  background-color: #03A9F4 !important;\n  color: #fff !important; }\n\n.bg-info .text-muted {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.bg-info small {\n  color: inherit; }\n\n.bg-warning {\n  background-color: #FF9800 !important;\n  color: #fff !important; }\n\n.bg-warning .text-muted {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.bg-warning small {\n  color: inherit; }\n\n.bg-danger {\n  background-color: #FF5252 !important;\n  color: #fff !important; }\n\n.bg-danger .text-muted {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.bg-danger small {\n  color: inherit; }\n\n.bg-gray-darker {\n  background-color: #263238;\n  color: #fff !important; }\n\n.bg-gray-dark {\n  background-color: #455A64;\n  color: #fff !important; }\n\n.bg-gray {\n  background-color: #607D8B;\n  color: #59676b !important; }\n\n.bg-gray-light {\n  background-color: #90A4AE;\n  color: #59676b !important; }\n\n.bg-gray-lighter {\n  background-color: #ECEFF1;\n  color: #59676b !important; }\n\n.bg-transparent {\n  background-color: transparent !important; }\n\n.bg-fade {\n  background-color: transparent !important;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5) 55%, black);\n  background-repeat: no-repeat; }\n\n.bg-cover {\n  background-size: cover; }\n\n.bg-full {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed; }\n\n.bg-center {\n  background-position: center center;\n  background-size: cover; }\n\n.thumb8 {\n  width: 8px !important;\n  height: 8px !important; }\n\n.thumb16 {\n  width: 16px !important;\n  height: 16px !important; }\n\n.thumb24 {\n  width: 24px !important;\n  height: 24px !important; }\n\n.thumb32 {\n  width: 32px !important;\n  height: 32px !important; }\n\n.thumb40 {\n  width: 40px !important;\n  height: 40px !important; }\n\n.thumb48 {\n  width: 48px !important;\n  height: 48px !important; }\n\n.thumb64 {\n  width: 64px !important;\n  height: 64px !important; }\n\n.thumb80 {\n  width: 80px !important;\n  height: 80px !important; }\n\n.thumb96 {\n  width: 96px !important;\n  height: 96px !important; }\n\n.thumb128 {\n  width: 128px !important;\n  height: 128px !important; }\n\n.lh1 {\n  line-height: 1; }\n\n.lh8 {\n  line-height: 8px; }\n\n.lh16 {\n  line-height: 16px; }\n\n.lh24 {\n  line-height: 24px; }\n\n.lh32 {\n  line-height: 32px; }\n\n.lh40 {\n  line-height: 40px; }\n\n.lh48 {\n  line-height: 48px; }\n\n.lh64 {\n  line-height: 64px; }\n\n.lh80 {\n  line-height: 80px; }\n\n.lh96 {\n  line-height: 96px; }\n\n.lh128 {\n  line-height: 128px; }\n\n.square8 {\n  display: block;\n  width: 8px !important;\n  height: 8px !important; }\n\n.square16 {\n  display: block;\n  width: 16px !important;\n  height: 16px !important; }\n\n.square24 {\n  display: block;\n  width: 24px !important;\n  height: 24px !important; }\n\n.square32 {\n  display: block;\n  width: 32px !important;\n  height: 32px !important; }\n\n.square40 {\n  display: block;\n  width: 40px !important;\n  height: 40px !important; }\n\n.square48 {\n  display: block;\n  width: 48px !important;\n  height: 48px !important; }\n\n.square64 {\n  display: block;\n  width: 64px !important;\n  height: 64px !important; }\n\n.square80 {\n  display: block;\n  width: 80px !important;\n  height: 80px !important; }\n\n.square96 {\n  display: block;\n  width: 96px !important;\n  height: 96px !important; }\n\n.square128 {\n  display: block;\n  width: 128px !important;\n  height: 128px !important; }\n\n.initial8 {\n  display: block;\n  width: 8px !important;\n  height: 8px !important;\n  display: inline-block;\n  line-height: 8px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial16 {\n  display: block;\n  width: 16px !important;\n  height: 16px !important;\n  display: inline-block;\n  line-height: 16px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial24 {\n  display: block;\n  width: 24px !important;\n  height: 24px !important;\n  display: inline-block;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial32 {\n  display: block;\n  width: 32px !important;\n  height: 32px !important;\n  display: inline-block;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial40 {\n  display: block;\n  width: 40px !important;\n  height: 40px !important;\n  display: inline-block;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial48 {\n  display: block;\n  width: 48px !important;\n  height: 48px !important;\n  display: inline-block;\n  line-height: 48px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial64 {\n  display: block;\n  width: 64px !important;\n  height: 64px !important;\n  display: inline-block;\n  line-height: 64px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial80 {\n  display: block;\n  width: 80px !important;\n  height: 80px !important;\n  display: inline-block;\n  line-height: 80px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial96 {\n  display: block;\n  width: 96px !important;\n  height: 96px !important;\n  display: inline-block;\n  line-height: 96px;\n  text-align: center;\n  border-radius: 50%; }\n\n.initial128 {\n  display: block;\n  width: 128px !important;\n  height: 128px !important;\n  display: inline-block;\n  line-height: 128px;\n  text-align: center;\n  border-radius: 50%; }\n\n.table-fixed {\n  table-layout: fixed;\n  width: 100%; }\n\n.shadow-clear {\n  box-shadow: 0 0 0 #000 !important; }\n\n.radius-clear {\n  border-radius: 0 !important; }\n\n.item-grab {\n  cursor: -webkit-grab;\n  cursor: -moz-grab; }\n\n.item-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing; }\n\n.clickable {\n  cursor: pointer !important; }\n\n.rel-wrapper {\n  position: relative !important; }\n\n.oh {\n  overflow: hidden; }\n\n.oa {\n  overflow: auto; }\n\n@media only screen and (max-width: 767px) {\n  .h-scroll {\n    max-width: 100%;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n    .h-scroll > .row {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; } }\n\n.v-scroll-wrapper {\n  max-height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.icon-18 {\n  font-size: 18px;\n  vertical-align: -18%; }\n\n.icon-24 {\n  font-size: 24px;\n  vertical-align: -24%; }\n\n.icon-36 {\n  font-size: 36px;\n  vertical-align: -36%; }\n\n.icon-48 {\n  font-size: 48px;\n  vertical-align: -48%; }\n\n.icon-2x {\n  font-size: 2em; }\n\n.icon-3x {\n  font-size: 3em; }\n\n.icon-4x {\n  font-size: 4em; }\n\n.icon-5x {\n  font-size: 5em; }\n\n.icon-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.icon-fw {\n  display: inline-block;\n  width: 1.28571429em;\n  text-align: center; }\n\n.icon-dark {\n  color: rgba(0, 0, 0, 0.54); }\n  .icon-dark.icon-inactive {\n    color: rgba(0, 0, 0, 0.26); }\n\n.icon-light {\n  color: white; }\n  .icon-light.icon-inactive {\n    color: rgba(255, 255, 255, 0.3); }\n\n.wd-xxs2 {\n  width: 30px; }\n\n.wd-xxs {\n  width: 60px; }\n\n.wd-xs {\n  width: 90px; }\n\n.wd-sm {\n  width: 150px; }\n\n.wd-sd {\n  width: 200px; }\n\n.wd-md {\n  width: 240px; }\n\n.wd-lg {\n  width: 280px; }\n\n.wd-xl {\n  width: 320px; }\n\n.wd-xxl {\n  width: 360px; }\n\n.wd-wide {\n  width: 100%; }\n\n.wd-auto {\n  width: auto; }\n\n.wd-zero {\n  width: 0; }\n\n.mw-50 {\n  max-width: 50%; }\n\n.mh-50 {\n  max-height: 50%; }\n\n.hg-xs {\n  height: 30px; }\n\n.hg-sm {\n  height: 60px; }\n\n.hg-sd {\n  height: 90px; }\n\n.hg-md {\n  height: 120px; }\n\n.hg-lg {\n  height: 150px; }\n\n.hg-xl {\n  height: 200px; }\n\n.link-unstyled {\n  text-decoration: none !important;\n  outline: none !important; }\n\ntextarea.no-resize {\n  resize: none;\n  max-width: 100%;\n  min-width: 100%; }\n\n.shadow-z0 {\n  box-shadow: 0 0 0 #000; }\n\n.shadow-z1 {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.014); }\n\n.shadow-z2 {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.098), 0 1px 10px 0 rgba(0, 0, 0, 0.014); }\n\n.shadow-z3 {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.098), 0 1px 18px 0 rgba(0, 0, 0, 0.014); }\n\n.shadow-z4 {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.14), 0 8px 10px 1px rgba(0, 0, 0, 0.098), 0 3px 14px 2px rgba(0, 0, 0, 0.014); }\n\n.shadow-z5 {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.14), 0 16px 24px 2px rgba(0, 0, 0, 0.098), 0 6px 30px 5px rgba(0, 0, 0, 0.014); }\n\n.image-list > a {\n  margin-left: -8px; }\n  .image-list > a:first-child {\n    margin-left: 0; }\n  .image-list > a:last-of-type {\n    margin-right: 8px; }\n\n.list-group-unstyle > .list-group-item {\n  border-left: 0;\n  border-right: 0; }\n  .list-group-unstyle > .list-group-item:first-child {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .list-group-unstyle > .list-group-item:last-child {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n\n.icons-list {\n  margin: 40px auto;\n  padding-left: 0;\n  width: 100%;\n  list-style: none;\n  text-align: center;\n  font-size: 1px; }\n  .icons-list > li {\n    position: relative;\n    z-index: 0;\n    display: inline-block;\n    padding: 22px;\n    width: 84px;\n    border-radius: 4px;\n    list-style: none;\n    text-align: center;\n    font-weight: normal;\n    font-size: 32px;\n    cursor: pointer; }\n    .icons-list > li:hover {\n      background-color: transparent;\n      color: #03A9F4;\n      transition: all .2s ease;\n      -webkit-transform: scale(2);\n              transform: scale(2); }\n\n.bg-pic1 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic1.jpg") + "); }\n\n.bg-pic2 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic2.jpg") + "); }\n\n.bg-pic3 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic3.jpg") + "); }\n\n.bg-pic4 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic4.jpg") + "); }\n\n.bg-pic5 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic5.jpg") + "); }\n\n.bg-pic6 {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/pic6.jpg") + "); }\n\n.reader-block p {\n  margin: 16px auto;\n  font-size: 16px;\n  line-height: 28px;\n  font-weight: normal; }\n  .reader-block p > img {\n    max-width: 100%;\n    margin: 32px auto; }\n\n.box-placeholder {\n  margin-bottom: 15px;\n  padding: 20px;\n  border: 1px dashed rgba(162, 162, 162, 0.26);\n  background: transparent;\n  color: inherit; }\n  .box-placeholder > :last-child {\n    margin-bottom: 0; }\n  .box-placeholder.box-placeholder-lg {\n    padding-top: 80px;\n    padding-bottom: 80px; }\n\n.bg-gradient-secondary {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #B0BEC5 0, #78909C 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.bg-gradient-primary {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #673AB7 0, #2196F3 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.bg-gradient-info {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #009688 0, #42A5F5 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.bg-gradient-success {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #CDDC39 0, #4CAF50 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.bg-gradient-danger {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #7B1FA2 0, #F44336 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.bg-gradient-warning {\n  /* Chrome 10-25, Safari 5.1-6 */\n  background-image: linear-gradient(135deg, #FDD835 0, #FF9800 100%);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // prevent empty links to reload page
        $(document).on('click', 'a[href="#"]', function (e) { return e.preventDefault(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_routes_module__ = __webpack_require__("../../../../../src/app/routes/routes.module.ts");
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// https://github.com/ocombe/ng2-translate/issues/218
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/static/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            // BrowserModule,
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__routes_routes_module__["a" /* RoutesModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/colors/colors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var materialColors = __webpack_require__("../../../../material-colors/dist/colors.es2015.js");
var ColorsService = (function () {
    function ColorsService() {
        this.APP_COLORS = {
            'gray-darker': '#263238',
            'gray-dark': '#455A64',
            'gray': '#607D8B',
            'gray-light': '#90A4AE',
            'gray-lighter': '#ECEFF1',
            'primary': '#448AFF',
            'success': '#4CAF50',
            'info': '#03A9F4',
            'warning': '#FFB300',
            'danger': '#F44336'
        };
    }
    ColorsService.prototype.byName = function (name) {
        var color = this.APP_COLORS[name];
        if (!color && materialColors) {
            var c = name.split('-'); // red-500, blue-a100, deepPurple-500, etc
            if (c.length)
                color = (materialColors[c[0]] || {})[c[1]];
        }
        return (color || '#fff');
    };
    return ColorsService;
}());
ColorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ColorsService);

//# sourceMappingURL=colors.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colors_colors_service__ = __webpack_require__("../../../../../src/app/core/colors/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { SharedModule } from '../shared/shared.module';





var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2__pagetitle_pagetitle_service__["a" /* PagetitleService */],
            __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__["a" /* TranslatorService */],
            __WEBPACK_IMPORTED_MODULE_4__colors_colors_service__["a" /* ColorsService */]
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        this.menuItems = [];
    }
    MenuService.prototype.addMenu = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.menuItems.push(item);
        });
    };
    MenuService.prototype.getMenu = function () {
        return this.menuItems;
    };
    MenuService.prototype.getMenuSorted = function () {
        return this.menuItems.sort(function (a, b) {
            return a.order - b.order;
        });
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
// https://angular.io/styleguide#!#04-12
// https://angular.io/styleguide#!#04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/pagetitle/pagetitle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagetitleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagetitleService = (function () {
    function PagetitleService() {
        this.page = {
            title: ''
        };
    }
    PagetitleService.prototype.setTitle = function (newTitle) {
        this.page.title = newTitle;
    };
    PagetitleService.prototype.getTitle = function () {
        return this.page.title;
    };
    return PagetitleService;
}());
PagetitleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], PagetitleService);

//# sourceMappingURL=pagetitle.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/translator/translator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatorService = (function () {
    function TranslatorService(translate) {
        this.translate = translate;
        this.defaultLanguage = 'en';
        this.currentLang = this.defaultLanguage;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(this.defaultLanguage);
        this.availablelangs = [
            { code: 'en', text: 'English' },
            { code: 'es', text: 'Spanish' },
            { code: 'fr', text: 'French' }
        ];
        this.useLanguage();
    }
    TranslatorService.prototype.useLanguage = function (lang) {
        if (lang === void 0) { lang = this.defaultLanguage; }
        this.translate.use(lang);
        this.currentLang = lang;
    };
    TranslatorService.prototype.getAvailableLanguages = function () {
        return this.availablelangs;
    };
    TranslatorService.prototype.getCurrentLang = function () {
        for (var i in this.availablelangs) {
            if (this.availablelangs[i].code === this.currentLang) {
                return this.availablelangs[i].text;
            }
        }
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatorService);

var _a;
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-container\">\r\n    <div class=\"d-flex justify-content-between fh\">\r\n        <a class=\"footer-icon\"><em class=\"ion-chatboxes\"></em><span>Messages</span></a>\r\n        <a class=\"footer-icon\"><em class=\"ion-document-text\"></em><span>Widgets</span></a>\r\n        <a class=\"footer-icon footer-icon-lg\"><em class=\"ion-home\"></em><span>Dashboard</span></a>\r\n        <a class=\"footer-icon\"><em class=\"ion-map\"></em><span>Maps</span></a>\r\n        <a class=\"footer-icon\"><em class=\"ion-pie-graph\"></em><span>Charts</span></a>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Footer\r\n */\n.footer-container {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 60px;\n  border-top: 1px solid rgba(90, 90, 90, 0.12);\n  background-color: #f6fbfe;\n  box-shadow: 0px -5px 25px 0px rgba(123, 123, 123, 0.15);\n  color: #90A4AE; }\n\n.footer-icon {\n  display: block;\n  padding: 10px 6px;\n  border-bottom: 2px solid transparent;\n  font-size: 2rem;\n  text-align: center;\n  height: 100%;\n  line-height: 1;\n  text-decoration: none !important;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n  .footer-icon:hover, .footer-icon:focus, .footer-icon:active, .footer-icon.active {\n    color: #03A9F4 !important;\n    border-bottom-color: #03A9F4; }\n  .footer-icon span {\n    display: block;\n    font-size: .7rem; }\n  .footer-icon.footer-icon-lg em {\n    display: inline-block;\n    font-size: 2.75rem;\n    margin-top: -.95rem; }\n\n.footer-fixed .footer-container {\n  position: fixed; }\n  @media only screen and (min-width: 992px) {\n    .footer-fixed .footer-container {\n      margin-left: 240px; } }\n\n.footer-fixed .main-container {\n  padding-bottom: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header-container\">\r\n    <nav>\r\n        <ul class=\"hidden-lg-up\">\r\n            <li>\r\n                <a (click)=\"toggleSidebar()\" class=\"sidebar-toggler menu-link menu-link-close\">\r\n                    <span><em></em></span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"hidden-xs-down\">\r\n            <li>\r\n                <a (click)=\"toggleSidebarCoverModeVisible()\" class=\"covermode-toggler menu-link menu-link-close\">\r\n                    <span><em></em></span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <h2 [innerHTML]=\"pt.getTitle()\" class=\"header-title\"></h2>\r\n        <ul class=\"float-right\">\r\n            <li dropdown class=\"dropdown\">\r\n                <a dropdownToggle class=\"dropdown-toggle has-badge\">\r\n                    <img class=\"header-user-image\" src=\"assets/img/user/01.jpg\" alt=\"header-user-image\"><sup class=\"badge bg-danger\">3</sup>\r\n                </a>\r\n                <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-scale\">\r\n                    <h6 class=\"dropdown-header\">User menu</h6>\r\n                    <a class=\"dropdown-item\">\r\n                        <span class=\"float-right badge badge-primary\">4</span>\r\n                        <em class=\"ion-ios-email-outline icon-lg text-primary\"></em>\r\n                        Messages\r\n                    </a>\r\n                    <a class=\"dropdown-item\">\r\n                        <em class=\"ion-ios-gear-outline icon-lg text-primary\"></em>\r\n                        Settings\r\n                    </a>\r\n                    <div class=\"dropdown-divider\" role=\"presentation\"></div>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"'/signin'\">\r\n                        <em class=\"ion-log-out icon-lg text-primary\"></em>\r\n                        Logoff\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li dropdown class=\"dropdown\">\r\n                <a dropdownToggle class=\"dropdown-toggle has-badge\"><em class=\"ion-ios-keypad\"></em></a>\r\n                <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-scale dropdown-card\">\r\n                    <div class=\"p-3\">\r\n                        <div class=\"d-flex mb-3\">\r\n                            <div class=\"wd-xs mr-3\">\r\n                                <div class=\"card bg-gradient-primary border-0\">\r\n                                    <div class=\"card-block text-white text-center\">\r\n                                        <div class=\"mb-1\"><em class=\"ion-stats-bars icon-2x\"></em></div><small class=\"text-bold\">Stats</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"wd-xs\">\r\n                                <div class=\"card bg-gradient-info border-0\">\r\n                                    <div class=\"card-block text-white text-center\">\r\n                                        <div class=\"mb-1\"><em class=\"ion-map icon-2x\"></em></div><small class=\"text-bold\">Places</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex\">\r\n                            <div class=\"wd-xs mr-3\">\r\n                                <div class=\"card bg-gradient-warning border-0\">\r\n                                    <div class=\"card-block text-white text-center\">\r\n                                        <div class=\"mb-1\"><em class=\"ion-clock icon-2x\"></em></div><small class=\"text-bold\">Events</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"wd-xs\">\r\n                                <div class=\"card bg-gradient-danger border-0\">\r\n                                    <div class=\"card-block text-white text-center\">\r\n                                        <div class=\"mb-1\"><em class=\"ion-plane icon-2x\"></em></div><small class=\"text-bold\">Flights</small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li><a (click)=\"headerSearch.searchModal.show()\"><em class=\"ion-ios-search-strong\"></em></a></li>\r\n            <li><a (click)=\"seetingsBar.settingsModal.show()\"><em class=\"ion-more\"></em></a></li>\r\n        </ul>\r\n    </nav>\r\n</header>\r\n<header-search #headerSearch></header-search>\r\n<app-settings #seetingsBar></app-settings>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Header\r\n */\n.header-container {\n  position: relative;\n  background-color: #fff;\n  z-index: 1; }\n  @media only screen and (min-width: 992px) {\n    .header-container {\n      margin-left: 240px; } }\n  .header-container > nav {\n    min-height: 60px;\n    line-height: 60px;\n    box-shadow: 0px 5px 25px 0px rgba(123, 123, 123, 0.15); }\n    .header-container > nav::after {\n      display: block;\n      content: \"\";\n      clear: both; }\n    .header-container > nav > .header-title {\n      display: none;\n      position: relative;\n      float: left;\n      margin: 0;\n      padding: 0 .5rem;\n      font-size: 1.2rem;\n      line-height: inherit;\n      letter-spacing: .02em;\n      font-weight: 400; }\n      @media (min-width: 340px) {\n        .header-container > nav > .header-title {\n          display: block; } }\n      @media (max-width: 420px) {\n        .header-container > nav > .header-title {\n          max-width: 110px;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden; } }\n      @media only screen and (min-width: 768px) {\n        .header-container > nav > .header-title {\n          padding: 0 1rem;\n          font-size: 1.5rem; } }\n    .header-container > nav > ul {\n      float: left;\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n      .header-container > nav > ul::after {\n        display: block;\n        content: \"\";\n        clear: both; }\n      .header-container > nav > ul > li {\n        float: left; }\n        .header-container > nav > ul > li > a {\n          display: block;\n          padding: 0 1rem;\n          text-decoration: none;\n          color: inherit; }\n          .header-container > nav > ul > li > a > em {\n            font-size: 1.3rem;\n            vertical-align: -24%;\n            line-height: 1; }\n          .header-container > nav > ul > li > a > .header-user-image {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%; }\n            .header-container > nav > ul > li > a > .header-user-image + span {\n              margin-left: 14px; }\n        .header-container > nav > ul > li > form,\n        .header-container > nav > ul > li > button {\n          margin: 0 1rem; }\n        .header-container > nav > ul > li > form {\n          margin-top: 1.15rem; }\n      .header-container > nav > ul > li > a:hover {\n        background-color: rgba(0, 0, 0, 0.025); }\n\n.has-badge {\n  position: relative; }\n  .has-badge .badge {\n    position: absolute;\n    top: 18%;\n    left: 38px; }\n  .has-badge.dropdown-toggle::after {\n    display: none; }\n\n.covermode-toggler {\n  display: none !important; }\n\n.sidebar-close {\n  display: none !important; }\n\n@media only screen and (min-width: 992px) {\n  .sidebar-cover .covermode-toggler {\n    display: block !important; }\n  .sidebar-cover .sidebar-cover .sidebar-close {\n    display: block !important; } }\n\n.modal-search-form {\n  margin: 0 auto; }\n  @media only screen and (min-width: 768px) {\n    .modal-search-form {\n      max-width: 70%; } }\n  .modal-search-form .input-group-btn > .btn {\n    padding-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__ = __webpack_require__("../../../../../src/app/shared/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__ = __webpack_require__("../../../../../src/app/core/pagetitle/pagetitle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(settings, pt) {
        this.settings = settings;
        this.pt = pt;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleSidebarCoverModeVisible = function () {
        this.settings.app.sidebar.coverModeVisible = !this.settings.app.sidebar.coverModeVisible;
    };
    HeaderComponent.prototype.toggleSidebar = function (state) {
        if (state === void 0) { state = null; }
        //  state === true -> open
        //  state === false -> close
        //  state === null -> toggle
        this.settings.app.sidebar.visible = state !== null ? state : !this.settings.app.sidebar.visible;
    };
    HeaderComponent.prototype.openModalSearch = function () {
    };
    HeaderComponent.prototype.openModalBar = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss"), __webpack_require__("../../../../../src/app/layout/header/header.menu-links.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_pagetitle_pagetitle_service__["a" /* PagetitleService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.menu-links.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Header menu links (animated hamburguer toggles)\r\n */\n.header-container > nav > ul > li > .menu-link {\n  height: 60px;\n  padding-top: 25px; }\n\n.menu-link-close {\n  display: block;\n  position: relative; }\n  .menu-link-close span {\n    position: relative;\n    display: block; }\n  .menu-link-close span,\n  .menu-link-close span:before,\n  .menu-link-close span:after {\n    width: 18px;\n    height: 0;\n    border-bottom: 2px solid;\n    will-change: transform;\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s; }\n  .menu-link-close span {\n    transition: border-color 0.4s; }\n  .menu-link-close span:before,\n  .menu-link-close span:after {\n    content: \" \";\n    position: absolute; }\n  .menu-link-close span:before {\n    top: 6px; }\n  .menu-link-close span:after {\n    top: 12px; }\n\n.active .menu-link-close span {\n  border-color: transparent; }\n\n.active .menu-link-close span:before {\n  -webkit-transform: rotate(45deg) translate(1px, 0px);\n  transform: rotate(45deg) translate(1px, 0px); }\n\n.active .menu-link-close span:after {\n  -webkit-transform: rotate(-45deg) translate(4px, -3px);\n  transform: rotate(-45deg) translate(4px, -3px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #searchModal=\"bs-modal\" (onShown)=\"onModalShown()\" class=\"modal modal-top fade modal-search\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"modal-search-form\">\r\n                    <form action=\"#\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"input-group-btn\">\r\n                                <button (click)=\"searchModal.hide()\" class=\"btn btn-flat\" type=\"button\" data-dismiss=\"modal\"><em class=\"ion-arrow-left-c icon-lg text-muted\"></em></button>\r\n                            </div>\r\n                            <input class=\"form-control header-input-search\" type=\"text\" placeholder=\"Search..\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(element) {
        this.element = element;
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.onModalShown = function () {
        var input = this.element.nativeElement.querySelector('.header-input-search');
        if (input)
            input.focus();
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], SearchComponent.prototype, "searchModal", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header-search',
        template: __webpack_require__("../../../../../src/app/layout/header/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout-variants.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Layout Variants\r\n */\n.sidebar-cover .sidebar-container {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  .sidebar-cover .sidebar-container .brand-header {\n    box-shadow: 0 0 0 #000; }\n\n.sidebar-cover .header-container {\n  z-index: 30; }\n\n.sidebar-cover .main-container,\n.sidebar-cover .footer-container,\n.sidebar-cover .header-container {\n  margin-left: 0 !important; }\n\n.sidebar-cover.sidebar-cover-visible .sidebar-container {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.no-csstransforms3d .sidebar-cover .sidebar-cover .sidebar-container {\n  margin-left: -240px; }\n\n.no-csstransforms3d .sidebar-cover .sidebar-cover.sidebar-cover-visible .sidebar-container {\n  margin-left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-container\" [ngClass]=\"layout()\">\r\n    <!-- top navbar-->\r\n    <app-header></app-header>\r\n    <!-- sidebar-->\r\n    <app-sidebar></app-sidebar>\r\n    <div (click)=\"closeSidebar()\" class=\"sidebar-layout-obfuscator\"></div>\r\n    <!-- Main section-->\r\n    <main class=\"main-container\">\r\n        <!-- Page content-->\r\n        <section class=\"section-container\">\r\n            <router-outlet></router-outlet>\r\n        </section>\r\n        <!-- Page footer-->\r\n        <app-footer></app-footer>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Main Layout\r\n */\n.layout-container {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.main-container {\n  position: relative;\n  height: calc(100% - 60px);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n  @media only screen and (min-width: 992px) {\n    .main-container {\n      margin-left: 240px; } }\n  .main-container .section-container {\n    min-height: calc(100% - 60px); }\n\n.content-heading {\n  padding: 1.2rem;\n  box-shadow: 0 1px 0 rgba(20, 20, 20, 0.075); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__ = __webpack_require__("../../../../../src/app/shared/settings/settings.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(settings) {
        this.settings = settings;
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent.prototype.layout = function () {
        return [
            this.settings.app.sidebar.visible ? 'sidebar-visible' : '',
            this.settings.app.sidebar.coverMode ? 'sidebar-cover' : '',
            this.settings.app.sidebar.coverModeVisible ? 'sidebar-cover-visible' : '',
            this.settings.app.footer.fixed ? 'footer-fixed' : ''
        ].join(' ');
    };
    LayoutComponent.prototype.closeSidebar = function () {
        this.settings.app.sidebar.coverModeVisible = false;
        this.settings.app.sidebar.visible = false;
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss"), __webpack_require__("../../../../../src/app/layout/layout-variants.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], LayoutComponent);

var _a;
//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_search_search_component__ = __webpack_require__("../../../../../src/app/layout/header/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__ = __webpack_require__("../../../../../src/app/layout/settings/settings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_component__["a" /* SettingsComponent */],
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #settingsModal=\"bs-modal\" class=\"modal-settings modal modal-right fade\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"mt-0 modal-title\"><span>Settings</span></h4>\r\n                <div class=\"float-right clickable\" (click)=\"settingsModal.hide()\"><em class=\"ion-close-round text-soft\"></em></div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Dark sidebar</p>\r\n                <div class=\"d-flex flex-wrap mb-3\">\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-default\">\r\n                            <input type=\"radio\" checked name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-default\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-2\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-2\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-3\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-3\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-4\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-4\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-5\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-5\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-6\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-6\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <p>White sidebar</p>\r\n                <div class=\"d-flex flex-wrap mb-3\">\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-default\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-default-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-2\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-2-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-3\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-3-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-4\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-4-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-5\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-5-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-6\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-6-w\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <p>Sidebar Gradients</p>\r\n                <div class=\"d-flex flex-wrap mb-3\">\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-1\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-1\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-2\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-2\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-3\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-3\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-4\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-4\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-5\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-5\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-6\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-sidebar-6\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <p>Header Gradients</p>\r\n                <div class=\"d-flex flex-wrap mb-3\">\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-1\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-1\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-2\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-2\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-3\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-3\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-4\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-4\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-5\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-5\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-gradient-6\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-gradient-header-6\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <p>Dark content</p>\r\n                <div class=\"d-flex flex-wrap mb-3\">\r\n                    <div class=\"setting-color\">\r\n                        <label class=\"preview-theme-dark\">\r\n                            <input type=\"radio\" name=\"settingTheme\" [(ngModel)]=\"selectedTheme\" (change)=\"updateTheme()\" value=\"theme-dark\"><span class=\"ion-checkmark-round\"></span><span class=\"square24 b\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <p>\r\n                    <label class=\"custom-control custom-checkbox\">\r\n                        <input class=\"custom-control-input\" [(ngModel)]=\"settings.app.sidebar.coverMode\" type=\"checkbox\">\r\n                        <span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Sidebar Cover</span>\r\n                    </label>\r\n                </p>\r\n                <p>\r\n                    <label class=\"custom-control custom-checkbox\">\r\n                        <input class=\"custom-control-input\" [(ngModel)]=\"settings.app.sidebar.showtoolbar\" type=\"checkbox\">\r\n                        <span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Sidebar profile</span>\r\n                    </label>\r\n                </p>\r\n                <p>\r\n                    <label class=\"custom-control custom-checkbox\">\r\n                        <input class=\"custom-control-input\" [(ngModel)]=\"settings.app.footer.fixed\" type=\"checkbox\">\r\n                        <span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Fixed Footer</span>\r\n                    </label>\r\n                </p>\r\n                <hr>\r\n                <button type=\"button\" #fsbutton (click)=\"toggleFullScreen()\" class=\"btn btn-secondary\">Toggle fullscreen</button>\r\n                <hr>\r\n                <p>Change language</p>\r\n                <!-- START Language list-->\r\n                <select class=\"language-select custom-select form-control\"\r\n                        [(ngModel)]=\"selectedLanguage\"\r\n                        (change)=\"translator.useLanguage(selectedLanguage)\">\r\n                    <option *ngFor=\"let lang of translator.getAvailableLanguages()\" [value]=\"lang.code\">\r\n                        {{lang.text}}\r\n                    </option>\r\n                </select>\r\n                <!-- END Language list-->\r\n                <div class=\"mt-3\" [translate]=\"'translate.EXAMPLE'\">This is an example text using English as selected language.</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Settings\r\n */\n.setting-color {\n  padding: 0 5px; }\n  .setting-color > label {\n    display: block;\n    position: relative;\n    margin: 0 10px;\n    border-radius: 1px;\n    cursor: pointer;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.014); }\n    .setting-color > label:first-child {\n      margin-left: 0; }\n    .setting-color > label:last-child {\n      margin-right: 0; }\n    .setting-color > label .t-grid, .setting-color > label .t-row {\n      max-width: 60px;\n      height: 100%;\n      margin: 0; }\n    .setting-color > label > .color {\n      display: block;\n      height: 18px; }\n    .setting-color > label > .split {\n      display: block; }\n      .setting-color > label > .split::after {\n        display: block;\n        content: \"\";\n        clear: both; }\n      .setting-color > label > .split > .color {\n        display: block;\n        height: 37.5px; }\n        .setting-color > label > .split > .color:first-child {\n          float: left;\n          width: 70%; }\n        .setting-color > label > .split > .color:last-child {\n          float: right;\n          width: 30%; }\n    .setting-color > label > .ion-checkmark-round {\n      position: absolute;\n      display: block;\n      right: -5px;\n      top: -10px;\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      text-align: center;\n      font-size: 14px;\n      color: #4CAF50;\n      background-color: #fff;\n      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.014);\n      transition: -webkit-transform .2s ease;\n      transition: transform .2s ease;\n      transition: transform .2s ease, -webkit-transform .2s ease;\n      -webkit-transform: scale(0);\n              transform: scale(0); }\n    .setting-color > label > input[type=\"radio\"] {\n      position: absolute;\n      visibility: hidden; }\n      .setting-color > label > input[type=\"radio\"]:checked + .ion-checkmark-round {\n        opacity: 1 !important;\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_settings_settings_service__ = __webpack_require__("../../../../../src/app/shared/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var screenfull = __webpack_require__("../../../../screenfull/dist/screenfull.js");


var SettingsComponent = (function () {
    function SettingsComponent(settings, translator) {
        this.settings = settings;
        this.translator = translator;
        this.selectedTheme = 'theme-default';
        this.selectedLanguage = 'en';
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.updateTheme = function () {
        this.settings.setSetting('theme', this.selectedTheme);
        $('body')
            .removeClass(function (index, css) { return (css.match(/(^|\s)theme-\S+/g) || []).join(' '); })
            .addClass(this.settings.getSetting('theme'));
    };
    SettingsComponent.prototype.toggleFullScreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    return SettingsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], SettingsComponent.prototype, "fsbutton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('settingsModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], SettingsComponent.prototype, "settingsModal", void 0);
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/layout/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/settings/settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-container\">\r\n    <div class=\"brand-header\">\r\n        <div (click)=\"closeSidebar()\" class=\"float-left pt-4 text-muted sidebar-close\">\r\n            <em class=\"ion-arrow-left-c icon-lg\"></em>\r\n        </div>\r\n        <a class=\"brand-header-logo\">\r\n            <span class=\"brand-header-logo-text\">Dasha</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"sidebar-content\">\r\n        <div *ngIf=\"settings.app.sidebar.showtoolbar\" class=\"sidebar-toolbar\">\r\n            <div class=\"sidebar-toolbar-background\"></div>\r\n            <div class=\"sidebar-toolbar-content text-center\">\r\n                <a href=\"#\"><img class=\"rounded-circle thumb64\" src=\"assets/img/user/01.jpg\" alt=\"Profile\"></a>\r\n                <div class=\"mt-3\">\r\n                    <div class=\"lead\">Jane Doe</div>\r\n                    <div class=\"text-thin\">California, CA</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <nav class=\"sidebar-nav\" (click)=handleSidebar($event)>\r\n            <!-- 1st level items-->\r\n            <ul>\r\n                <li *ngFor=\"let item of menu\" [routerLinkActive]=\"['active']\">\r\n                    <!-- support for headings -->\r\n                    <div *ngIf=\"item.heading\" [innerHTML]=\"item.name\" class=\"sidebar-nav-heading\"></div>\r\n                    <!-- support for direct links-->\r\n                    <a [href]=\"item.href\" *ngIf=\"item.href && !item.heading\">\r\n                        <span *ngIf=\"item.subitems?.length\" class=\"pull-right nav-caret\">\r\n                            <em class=\"ion-ios-arrow-right\"></em>\r\n                        </span>\r\n                        <span *ngIf=\"item.label\" class=\"pull-right nav-label\">\r\n                            <span [innerHTML]=\"item.label.value\" [ngClass]=\"item.label?.classname\"></span>\r\n                        </span>\r\n                        <span class=\"nav-icon\" *ngIf=\"item.iconclass || item.imgpath\">\r\n                            <em *ngIf=\"item.iconclass\" [ngClass]=\"item.iconclass\"></em>\r\n                            <img *ngIf=\"item.imgpath\" [src]=\"item.imgpath\"/>\r\n                        </span>\r\n                        <span *ngIf=\"item.name\" [innerHTML]=\"item.name\"></span>\r\n                    </a>\r\n                    <!-- support for router links-->\r\n                    <a [routerLink]=\"item.link\" *ngIf=\"!item.href && !item.subitems?.length && !item.heading\">\r\n                        <span *ngIf=\"item.subitems?.length\" class=\"pull-right nav-caret\">\r\n                            <em class=\"ion-ios-arrow-right\"></em>\r\n                        </span>\r\n                        <span *ngIf=\"item.label\" class=\"pull-right nav-label\">\r\n                            <span [innerHTML]=\"item.label?.value\" [ngClass]=\"item.label?.classname\"></span>\r\n                        </span>\r\n                        <span class=\"nav-icon\" *ngIf=\"item.iconclass || item.imgpath\">\r\n                            <em *ngIf=\"item.iconclass\" [ngClass]=\"item.iconclass\"></em>\r\n                            <img *ngIf=\"item.imgpath\" [src]=\"item.imgpath\"/>\r\n                        </span>\r\n                        <span *ngIf=\"item.name\" [innerHTML]=\"item.name\"></span>\r\n                    </a>\r\n                    <!-- parent menu items have empty links-->\r\n                    <a *ngIf=\"!item.href && item.subitems?.length && !item.heading\">\r\n                        <span *ngIf=\"item.subitems?.length\" class=\"pull-right nav-caret\">\r\n                            <em class=\"ion-ios-arrow-right\"></em>\r\n                        </span>\r\n                        <span *ngIf=\"item.label\" class=\"pull-right nav-label\">\r\n                            <span [innerHTML]=\"item.label?.value\" [ngClass]=\"item.label?.classname\"></span>\r\n                        </span>\r\n                        <span class=\"nav-icon\" *ngIf=\"item.iconclass || item.imgpath\">\r\n                            <em *ngIf=\"item.iconclass\" [ngClass]=\"item.iconclass\"></em>\r\n                            <img *ngIf=\"item.imgpath\" [src]=\"item.imgpath\"/>\r\n                        </span>\r\n                        <span *ngIf=\"item.name\" [innerHTML]=\"item.name\"></span>\r\n                    </a>\r\n                    <!-- (2nd) level items-->\r\n                    <ul *ngIf=\"item.subitems?.length && !item.heading\" class=\"sidebar-subnav\">\r\n                        <li *ngFor=\"let sitem of item.subitems\" [routerLinkActive]=\"['active']\">\r\n                            <!-- (2nd) support for direct links-->\r\n                            <a [href]=\"sitem.href\" *ngIf=\"sitem.href && !sitem.heading\">\r\n                                <span *ngIf=\"sitem.subitems?.length\" class=\"pull-right nav-caret\">\r\n                                    <em class=\"ion-ios-arrow-right\"></em>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.label\" class=\"pull-right nav-label\">\r\n                                    <span [innerHTML]=\"sitem.label.value\" [ngClass]=\"sitem.label?.classname\"></span>\r\n                                </span>\r\n                                <span class=\"nav-icon\" *ngIf=\"sitem.iconclass || sitem.imgpath\">\r\n                                    <em *ngIf=\"sitem.iconclass\" [ngClass]=\"sitem.iconclass\"></em>\r\n                                    <img *ngIf=\"sitem.imgpath\" [src]=\"sitem.imgpath\"/>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.name\" [innerHTML]=\"sitem.name\"></span>\r\n                            </a>\r\n                            <!-- (2nd) support for router links-->\r\n                            <a [routerLink]=\"sitem.link\" *ngIf=\"!sitem.href && !sitem.subitems?.length && !sitem.heading\">\r\n                                <span *ngIf=\"sitem.subitems?.length\" class=\"pull-right nav-caret\">\r\n                                    <em class=\"ion-ios-arrow-right\"></em>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.label\" class=\"pull-right nav-label\">\r\n                                    <span [innerHTML]=\"sitem.label?.value\" *ngClass=\"sitem.label?.classname\"></span>\r\n                                </span>\r\n                                <span class=\"nav-icon\" *ngIf=\"sitem.iconclass || sitem.imgpath\">\r\n                                    <em *ngIf=\"sitem.iconclass\" [ngClass]=\"sitem.iconclass\"></em>\r\n                                    <img *ngIf=\"sitem.imgpath\" [src]=\"sitem.imgpath\"/>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.name\" [innerHTML]=\"sitem.name\"></span>\r\n                            </a>\r\n                            <!-- (2nd) parent menu items have empty links-->\r\n                            <a *ngIf=\"!sitem.href && sitem.subitems?.length && !sitem.heading\">\r\n                                <span *ngIf=\"sitem.subitems?.length\" class=\"pull-right nav-caret\">\r\n                                    <em class=\"ion-ios-arrow-right\"></em>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.label\" class=\"pull-right nav-label\">\r\n                                    <span [innerHTML]=\"sitem.label?.value\" [ngClass]=\"sitem.label?.classname\"></span>\r\n                                </span>\r\n                                <span class=\"nav-icon\" *ngIf=\"sitem.iconclass || sitem.imgpath\">\r\n                                    <em *ngIf=\"sitem.iconclass\" [ngClass]=\"sitem.iconclass\"></em>\r\n                                    <img *ngIf=\"sitem.imgpath\" [src]=\"sitem.imgpath\"/>\r\n                                </span>\r\n                                <span *ngIf=\"sitem.name\" [innerHTML]=\"sitem.name\"></span>\r\n                            </a>\r\n                            <!-- (3rd) level items-->\r\n                            <ul *ngIf=\"sitem.subitems?.length\" class=\"sidebar-subnav\">\r\n                                <li *ngFor=\"let ssitem of sitem.subitems\" [routerLinkActive]=\"['active']\">\r\n                                    <!-- (2nd) support for router links-->\r\n                                    <a [routerLink]=\"ssitem.link\" *ngIf=\"!ssitem.href && !ssitem.subitems?.length && !ssitem.heading\">\r\n                                        <span *ngIf=\"ssitem.subitems?.length\" class=\"pull-right nav-caret\">\r\n                                            <em class=\"ion-ios-arrow-right\"></em>\r\n                                        </span>\r\n                                        <span *ngIf=\"ssitem.label\" class=\"pull-right nav-label\">\r\n                                            <span [innerHTML]=\"ssitem.label?.value\" [ngClass]=\"ssitem.label?.classname\"></span>\r\n                                        </span>\r\n                                        <em [ngClass]=\"ssitem.iconclass\" *ngIf=\"ssitem.iconclass\"></em>\r\n                                        <span *ngIf=\"ssitem.name\" [innerHTML]=\"ssitem.name\"></span>\r\n                                    </a>\r\n                                </li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Sidebar\r\n */\n.sidebar-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 240px;\n  overflow-y: auto;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  background-color: #263238;\n  color: #fff;\n  z-index: 40; }\n  .sidebar-container a.sb-link {\n    color: rgba(255, 255, 255, 0.75);\n    text-decoration: none; }\n\n.brand-header {\n  height: 60px;\n  padding: 0 1rem;\n  text-align: center;\n  box-shadow: 0 0 0 #000; }\n  .brand-header > .brand-header-logo {\n    display: block;\n    height: 100%;\n    text-decoration: none;\n    color: inherit;\n    padding: 1rem 0; }\n    .brand-header > .brand-header-logo > img,\n    .brand-header > .brand-header-logo > svg {\n      width: auto;\n      max-height: 100%; }\n      .brand-header > .brand-header-logo > img + .brand-header-logo-text,\n      .brand-header > .brand-header-logo > svg + .brand-header-logo-text {\n        margin-left: .5rem; }\n    .brand-header > .brand-header-logo > svg {\n      fill: #fff; }\n    .brand-header > .brand-header-logo > .brand-header-logo-text {\n      font-size: 22px;\n      letter-spacing: .023em;\n      font-weight: 500;\n      font-size: 20px; }\n    .brand-header > .brand-header-logo > img,\n    .brand-header > .brand-header-logo > .brand-header-logo-text {\n      display: inline-block;\n      vertical-align: middle; }\n\n.brand-header + .sidebar-content {\n  height: calc(100% - 60px);\n  overflow: auto; }\n\n.sidebar-content {\n  box-shadow: -1px 0 0 rgba(160, 160, 160, 0.12) inset; }\n\n.sidebar-toolbar {\n  position: relative; }\n  .sidebar-toolbar .sidebar-toolbar-content {\n    position: relative;\n    padding: 2rem 1rem;\n    z-index: 3; }\n  .sidebar-toolbar .sidebar-toolbar-background {\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #263238;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/profile-bg.jpg") + ");\n    background-repeat: no-repeat;\n    background-position: left top;\n    background-size: cover;\n    opacity: 0.5;\n    z-index: 1; }\n  .sidebar-toolbar + .sidebar-nav {\n    padding-top: 0; }\n\n.sidebar-container {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform .28s ease-in-out;\n  transition: transform .28s ease-in-out;\n  transition: transform .28s ease-in-out, -webkit-transform .28s ease-in-out;\n  will-change: transform; }\n  @media only screen and (max-width: 991px) and (min-width: 1px) {\n    .sidebar-container {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0); } }\n\n.sidebar-layout-obfuscator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 30;\n  visibility: hidden;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  will-change: opacity;\n  transition: opacity .28s ease-in-out, visibility .28s ease-in-out; }\n\n.sidebar-visible, .sidebar-cover-visible {\n  overflow: hidden; }\n  .sidebar-visible .sidebar-container, .sidebar-cover-visible .sidebar-container {\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  .sidebar-visible .sidebar-layout-obfuscator, .sidebar-cover-visible .sidebar-layout-obfuscator {\n    opacity: 1;\n    visibility: visible; }\n\n.no-csstransforms3d .sidebar-container {\n  margin-left: -240px; }\n  @media only screen and (min-width: 992px) {\n    .no-csstransforms3d .sidebar-container {\n      margin-left: 0; } }\n\n@media only screen and (max-width: 1199px) {\n  .no-csstransforms3d .sidebar-visible .sidebar-container {\n    margin-left: 0; } }\n\n.sidebar-nav {\n  padding-top: 16px;\n  font-weight: 500;\n  background-color: inherit; }\n  .sidebar-nav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    .sidebar-nav ul > li > .sidebar-nav-heading {\n      padding: 1.2rem 1rem;\n      font-size: .8rem;\n      font-weight: bold;\n      letter-spacing: .045rem; }\n    .sidebar-nav ul > li > a {\n      display: block;\n      padding: 0 1rem;\n      border-left: 4px solid transparent;\n      height: 50px;\n      line-height: 50px;\n      text-decoration: none;\n      letter-spacing: 0.0125em;\n      color: inherit;\n      overflow: hidden;\n      cursor: default; }\n      .sidebar-nav ul > li > a > .nav-icon {\n        position: relative;\n        display: inline-block;\n        width: 1em;\n        height: 1em;\n        margin-right: 16px;\n        text-align: center;\n        font-size: 24px;\n        vertical-align: middle; }\n        .sidebar-nav ul > li > a > .nav-icon > em,\n        .sidebar-nav ul > li > a > .nav-icon > img,\n        .sidebar-nav ul > li > a > .nav-icon > svg {\n          position: absolute;\n          display: inline-block;\n          color: inherit;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          line-height: 1; }\n        .sidebar-nav ul > li > a > .nav-icon > svg {\n          color: #868B90;\n          fill: #64B5F6; }\n        .sidebar-nav ul > li > a > .nav-icon > em {\n          color: #868B90; }\n      .sidebar-nav ul > li > a > .nav-label,\n      .sidebar-nav ul > li > a > .nav-caret {\n        line-height: inherit; }\n      .sidebar-nav ul > li > a > .nav-label {\n        margin-right: 16px;\n        margin-top: -2px; }\n      .sidebar-nav ul > li > a > .nav-caret {\n        margin-left: 11px; }\n        .sidebar-nav ul > li > a > .nav-caret + .nav-label {\n          margin-right: 0; }\n    .sidebar-nav ul > li > a:hover,\n    .sidebar-nav ul > li > a:focus {\n      background-color: rgba(162, 162, 162, 0.09); }\n    .sidebar-nav ul > li.active > a {\n      background-color: rgba(0, 0, 0, 0.025);\n      border-left-color: #1E88E5; }\n    .sidebar-nav ul > li.active > ul li.active > a {\n      background-color: rgba(162, 162, 162, 0.026);\n      font-weight: bold; }\n    .sidebar-nav ul > li ul > li > a {\n      padding-left: 56px;\n      border-left: 0; }\n    .sidebar-nav ul > li ul > li ul > li > a {\n      padding-left: 72px; }\n    .sidebar-nav ul > li > ul {\n      height: 0;\n      overflow: hidden; }\n    .sidebar-nav ul > li > a > .nav-caret {\n      transition-transform: .2s ease; }\n    .sidebar-nav ul > li.active > ul {\n      height: auto; }\n      .sidebar-nav ul > li.active > ul > li > a {\n        opacity: 1;\n        margin-left: 0; }\n    .sidebar-nav ul > li.active > a > .nav-caret {\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n\n.sidebar-nav > ul > li > a > span:last-of-type {\n  margin-left: -4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_settings_settings_service__ = __webpack_require__("../../../../../src/app/shared/settings/settings.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(menuService, settings, injector) {
        this.menuService = menuService;
        this.settings = settings;
        this.injector = injector;
        this.menu = menuService.getMenuSorted();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]);
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.settings.app.sidebar.visible = false;
            _this.settings.app.sidebar.coverModeVisible = false;
        });
    };
    SidebarComponent.prototype.closeSidebar = function () {
        this.settings.app.sidebar.coverModeVisible = false;
        this.settings.app.sidebar.visible = false;
    };
    SidebarComponent.prototype.handleSidebar = function (event) {
        var item = this.getItemElement(event);
        // check click is on a tag
        if (!item)
            return;
        var ele = $(item), liparent = ele.parent()[0];
        var lis = ele.parent().parent().children(); // markup: ul > li > a
        // remove .active from childs
        lis.find('li').removeClass('active');
        // remove .active from siblings ()
        $.each(lis, function (key, li) {
            if (li !== liparent)
                $(li).removeClass('active');
        });
        var next = ele.next();
        if (next.length && next[0].tagName === 'UL') {
            ele.parent().toggleClass('active');
            event.preventDefault();
        }
    };
    // find the a element in click context
    // doesn't check deeply, asumens two levels only
    SidebarComponent.prototype.getItemElement = function (event) {
        var element = event.target, parent = element.parentNode;
        if (element.tagName.toLowerCase() === 'a') {
            return element;
        }
        if (parent.tagName.toLowerCase() === 'a') {
            return parent;
        }
        if (parent.parentNode.tagName.toLowerCase() === 'a') {
            return parent.parentNode;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var headingMenu = {
    order: 0,
    name: 'MENU',
    heading: true
};
var Dashboard = {
    name: 'Dashboard',
    link: '/dashboard',
    iconclass: 'ion-ios-speedometer-outline',
    order: 1
};
var Widgets = {
    name: 'Widgets',
    link: '/widgets',
    order: 2,
    iconclass: 'ion-ios-box-outline',
    label: {
        value: '!',
        classname: 'badge-rounded bg-primary'
    }
};
var headingComponents = {
    order: 2.1,
    name: 'COMPONENTS',
    heading: true
};
var Elements = {
    name: 'Elements',
    link: '/elements',
    iconclass: 'ion-ios-settings',
    order: 3,
    subitems: [{
            name: 'Buttons',
            link: '/elements/buttons'
        }, {
            name: 'Bootstrap',
            link: '/elements/bootstrapui'
        }, {
            name: 'Modals',
            link: '/elements/modals'
        }, {
            name: 'Toaster',
            link: '/elements/toaster'
        }, {
            name: 'Sweet-alert',
            link: '/elements/sweetalert'
        }, {
            name: 'Spinners',
            link: '/elements/spinners'
        }, {
            name: 'Nestable',
            link: '/elements/nestable'
        }, {
            name: 'Grid',
            link: '/elements/grid'
        }, {
            name: 'Grid Masonry',
            link: '/elements/gridmasonry'
        }, {
            name: 'Typography',
            link: '/elements/typography'
        }, {
            name: 'Icons',
            link: '/elements/icons'
        }, {
            name: 'Utilities',
            link: '/elements/utilities'
        }, {
            name: 'Colors',
            link: '/elements/colors'
        }]
};
var Forms = {
    name: 'Forms',
    link: '/forms',
    iconclass: 'ion-ios-gear-outline',
    order: 4,
    subitems: [{
            name: 'Standard',
            link: '/forms/standard'
        }, {
            name: 'Advanced',
            link: '/forms/advanced'
        }, {
            name: 'Validation',
            link: '/forms/validation'
        }, {
            name: 'Dropzone',
            link: '/forms/dropzone'
        }, {
            name: 'Summernote',
            link: '/forms/summernote'
        }, {
            name: 'Wizard Steps',
            link: '/forms/wizard'
        }, {
            name: 'Typeahead',
            link: '/forms/typeahead'
        }]
};
var Tables = {
    name: 'Tables',
    link: 'tables',
    order: 5,
    iconclass: 'ion-ios-list-outline',
    subitems: [{
            name: 'Classic',
            link: '/tables/classic'
        }, {
            name: 'Responsive',
            link: '/tables/responsive'
        }, {
            name: 'Data Table',
            link: '/tables/datatables'
        }, {
            name: 'Ngx Datatable',
            link: '/tables/ngxdatatable'
        }]
};
var Charts = {
    name: 'Charts',
    link: '/charts',
    iconclass: 'ion-ios-pulse',
    order: 6,
    subitems: [{
            name: 'Flot',
            link: '/charts/flot'
        }, {
            name: 'Peity',
            link: '/charts/peity'
        }, {
            name: 'Radial',
            link: '/charts/radial'
        }]
};
var Maps = {
    name: 'Maps',
    link: 'maps',
    iconclass: 'ion-ios-location-outline',
    order: 7,
    subitems: [{
            name: 'Google Maps',
            link: '/maps/google'
        }, {
            name: 'Vector Maps',
            link: '/maps/vector'
        }]
};
var headingMore = {
    order: 7.1,
    name: 'MORE',
    heading: true
};
var User = {
    name: 'User',
    link: 'user',
    order: 8,
    iconclass: 'ion-ios-person-outline',
    subitems: [{
            name: 'Signin',
            link: '/signin'
        }, {
            name: 'Signup',
            link: '/signup'
        }, {
            name: 'Lock',
            link: '/lock'
        }, {
            name: 'Recover',
            link: '/recover'
        }]
};
var Pages = {
    name: 'Pages',
    link: 'pages',
    order: 9,
    iconclass: 'ion-ios-keypad-outline',
    subitems: [{
            name: 'Forum',
            link: '/pages/forum'
        }, {
            name: 'Calendar',
            link: '/pages/calendar'
        }, {
            name: 'Timeline',
            link: '/pages/timeline'
        }, {
            name: 'Invoice',
            link: '/pages/invoice'
        }, {
            name: 'FullMap',
            link: '/pages/fullmap'
        }, {
            name: 'Pricing',
            link: '/pages/pricing'
        }, {
            name: 'People',
            link: '/pages/people'
        }, {
            name: 'Contact',
            link: '/pages/contact'
        }, {
            name: 'Wall',
            link: '/pages/wall'
        }, {
            name: 'Mailbox',
            link: '/pages/mailbox'
        }, {
            name: 'Errors',
            link: 'error',
            subitems: [{
                    name: '404',
                    link: '/error/404'
                }, {
                    name: '403',
                    link: '/error/403'
                }, {
                    name: '500',
                    link: '/error/500'
                }, {
                    name: '503',
                    link: '/error/503'
                }]
        }]
};
var menu = [
    headingMenu,
    Dashboard,
    Widgets,
    headingComponents,
    Elements,
    Forms,
    Tables,
    Charts,
    Maps,
    headingMore,
    User,
    Pages
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_module__ = __webpack_require__("../../../../../src/app/routes/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__("../../../../../src/app/routes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RoutesModule = (function () {
    function RoutesModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* menu */]);
    }
    return RoutesModule;
}());
RoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__user_user_module__["a" /* UserModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], RoutesModule);

var _a;
//# sourceMappingURL=routes.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_signin_signin_component__ = __webpack_require__("../../../../../src/app/routes/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_signup_signup_component__ = __webpack_require__("../../../../../src/app/routes/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_lock_lock_component__ = __webpack_require__("../../../../../src/app/routes/user/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_recover_recover_component__ = __webpack_require__("../../../../../src/app/routes/user/recover/recover.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
        ]
    },
    { path: 'error', loadChildren: './pages/errors/errors.module#ErrorsModule' },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__user_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__user_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'lock', component: __WEBPACK_IMPORTED_MODULE_3__user_lock_lock_component__["a" /* LockComponent */] },
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_4__user_recover_recover_component__["a" /* RecoverComponent */] },
    // Not found
    { path: '**', redirectTo: 'dashboard' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/routes/user/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"d-flex align-items-center align-items-center-ie bg-gradient-danger text-white\">\r\n        <div class=\"fw\">\r\n            <div class=\"container container-xs\">\r\n                <div class=\"text-center my-4\"><img class=\"rounded-circle mb-3 block-center img-fluid img-thumbnail thumb80\" src=\"assets/img/user/01.jpg\" alt=\"user\">\r\n                    <p>Jane Doe</p>\r\n                </div>\r\n                <form [formGroup]=\"lockForm\" (submit)=\"submitForm($event, lockForm)\" class=\"cardbox cardbox-flat text-white form-validate text-color\" id=\"user-lock\" name=\"loginForm\" novalidate=\"\">\r\n                    <div class=\"cardbox-heading\">\r\n                        <p class=\"text-center\">Type your password to unlock terminal</p>\r\n                    </div>\r\n                    <div class=\"cardbox-body\">\r\n                        <div class=\"input-group\">\r\n                            <input formControlName=\"password\" [formControl]=\"lockForm.controls['password']\" class=\"form-control form-control-inverse\" type=\"password\" name=\"accountPassword\" required=\"\" placeholder=\"Password\">\r\n                            <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-secondary btn-gradient\" type=\"submit\"><em class=\"ion-ios-locked-outline icon-lg\"></em></button>\r\n                                </span>\r\n                        </div>\r\n                        <span class=\"text-danger\" *ngIf=\"lockForm.controls['password'].hasError('required') && (lockForm.controls['password'].dirty || lockForm.controls['password'].touched)\">Please type your password</span>\r\n                        <div class=\"text-right\"><small><a class=\"text-white\" [routerLink]=\"'/signin'\">Not you?</a></small></div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/user/lock/lock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/user/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockComponent = (function () {
    function LockComponent(fb, inj) {
        this.inj = inj;
        this.lockForm = fb.group({
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    LockComponent.prototype.submitForm = function ($ev, form) {
        $ev.preventDefault();
        var value = form.value;
        for (var c in form.controls) {
            form.controls[c].markAsTouched();
        }
        if (form.valid) {
            this.router.navigate(['/dashboard']);
        }
        // console.log(value);
    };
    LockComponent.prototype.ngOnInit = function () {
        this.router = this.inj.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]);
    };
    return LockComponent;
}());
LockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lock',
        template: __webpack_require__("../../../../../src/app/routes/user/lock/lock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/user/lock/lock.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], LockComponent);

var _a, _b;
//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/user/recover/recover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"d-flex align-items-center align-items-center-ie bg-gradient-primary text-white\">\r\n        <div class=\"fw\">\r\n            <div class=\"container container-xs\">\r\n                <div class=\"text-center my-4\"><img class=\"rounded-circle mb-3 block-center img-fluid img-thumbnail thumb80\" src=\"assets/img/user/01.jpg\" alt=\"user\">\r\n                    <p>Jane Doe</p>\r\n                </div>\r\n                <form [formGroup]=\"recForm\" (submit)=\"submitForm($event, recForm)\" class=\"cardbox cardbox-flat text-white form-validate text-color\" id=\"user-recover\" action=\"\" name=\"loginForm\" novalidate=\"\">\r\n                    <div class=\"cardbox-heading\">\r\n                        <p class=\"text-center text-inherit\">Type your mail to receive instructions to reset your password.</p>\r\n                    </div>\r\n                    <div class=\"cardbox-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                                <input formControlName=\"email\" [formControl]=\"recForm.controls['email']\" class=\"form-control form-control-inverse\" type=\"email\" name=\"accountName\" required=\"\" placeholder=\"Email address\"><span class=\"input-group-btn\">\r\n                                <span class=\"text-danger\" *ngIf=\"recForm.controls['email'].hasError('required') && (recForm.controls['email'].dirty || recForm.controls['email'].touched)\">This field is required</span>\r\n                                <span class=\"text-danger\" *ngIf=\"recForm.controls['email'].hasError('email') && (recForm.controls['email'].dirty || recForm.controls['email'].touched)\">Please enter a valid email</span>\r\n                              <button class=\"btn btn-success btn-gradient\" type=\"submit\">Reset</button></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/user/recover/recover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/user/recover/recover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverComponent = (function () {
    function RecoverComponent(fb) {
        this.mailSent = false;
        this.recForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])]
        });
    }
    RecoverComponent.prototype.submitForm = function ($ev, form) {
        $ev.preventDefault();
        var value = form.value;
        for (var c in form.controls) {
            form.controls[c].markAsTouched();
        }
        if (form.valid) {
            this.mailSent = true;
        }
        // console.log(value);
    };
    RecoverComponent.prototype.ngOnInit = function () {
    };
    return RecoverComponent;
}());
RecoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recover',
        template: __webpack_require__("../../../../../src/app/routes/user/recover/recover.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/user/recover/recover.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], RecoverComponent);

var _a;
//# sourceMappingURL=recover.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/user/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"d-flex align-items-center align-items-center-ie bg-gradient-primary text-white\">\r\n        <div class=\"fw\">\r\n            <div class=\"container container-xs\">\r\n                <form [formGroup]=\"loginForm\" (submit)=\"submitForm($event, loginForm)\" class=\"cardbox cardbox-flat text-white form-validate text-color\" id=\"user-login\" action=\"\" name=\"loginForm\" novalidate=\"\">\r\n                    <div class=\"cardbox-heading\">\r\n                        <div class=\"cardbox-title text-center\">Login</div>\r\n                    </div>\r\n                    <div class=\"cardbox-body\">\r\n                        <div class=\"px-5\">\r\n                            <div class=\"form-group\">\r\n                                <input [formControl]=\"loginForm.controls['email']\" class=\"form-control form-control-inverse\" type=\"email\" name=\"accountName\" required=\"\" placeholder=\"Email address\">\r\n                                <span class=\"text-danger\" *ngIf=\"loginForm.controls['email'].hasError('required') && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\">This field is required</span>\r\n                                <span class=\"text-danger\" *ngIf=\"loginForm.controls['email'].hasError('email') && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\">Please enter a valid email</span>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input [formControl]=\"loginForm.controls['password']\" class=\"form-control form-control-inverse\" type=\"password\" name=\"accountPassword\" required=\"\" placeholder=\"Password\">\r\n                                <span class=\"text-danger\" *ngIf=\"loginForm.controls['password'].hasError('required') && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\">Input required</span>\r\n                            </div>\r\n                            <div class=\"form-group mt-4\">\r\n                                <label class=\"custom-control custom-checkbox mb-0\">\r\n                                    <input class=\"custom-control-input\" type=\"checkbox\" checked><span class=\"custom-control-indicator\"></span><span class=\"custom-control-description\">Keep me logged in</span>\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"text-center my-4\">\r\n                                <button [disabled]=\"!loginForm.valid || loginForm.pristine\" class=\"btn btn-lg btn-gradient btn-oval btn-info btn-block\" type=\"submit\">Authenticate</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"text-center\"><small><a class=\"text-inherit\" [routerLink]=\"'/recover'\">Forgot password?</a></small></div>\r\n                    </div>\r\n                    <div class=\"cardbox-footer text-center text-sm\">\r\n                        <span class=\"mr-2\">No account yet?</span>\r\n                        <a class=\"text-inherit\" [routerLink]=\"'/signup'\">\r\n                            <strong>Register Now</strong>\r\n                        </a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/user/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/user/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(fb) {
        this.loginForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    }
    SigninComponent.prototype.submitForm = function ($ev, form) {
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
    SigninComponent.prototype.ngOnInit = function () {
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/routes/user/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/user/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div class=\"d-flex align-items-center align-items-center-ie bg-gradient-primary text-white\">\r\n        <div class=\"fw\">\r\n            <div class=\"container container-xs\">\r\n                <form [formGroup]=\"regForm\" (submit)=\"submitForm($event, regForm)\" class=\"cardbox cardbox-flat text-white form-validate text-color\" id=\"user-signup\" action=\"\" name=\"createForm\" novalidate=\"\">\r\n                    <div class=\"cardbox-heading\">\r\n                        <div class=\"cardbox-title text-center\">Create account</div>\r\n                    </div>\r\n                    <div class=\"cardbox-body pb-0\">\r\n                        <div class=\"px-5\">\r\n                            <div class=\"form-group\">\r\n                                <input formControlName=\"email\" [formControl]=\"regForm.controls['email']\" class=\"form-control form-control-inverse\" type=\"email\" name=\"accountName\" required=\"\" placeholder=\"Email\">\r\n                                <span class=\"text-danger\" *ngIf=\"regForm.controls['email'].hasError('required') && (regForm.controls['email'].dirty || regForm.controls['email'].touched)\">This field is required</span>\r\n                                <span class=\"text-danger\" *ngIf=\"regForm.controls['email'].hasError('email') && (regForm.controls['email'].dirty || regForm.controls['email'].touched)\">Please enter a valid email</span>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input formControlName=\"password\" [formControl]=\"regForm.controls['password']\" class=\"form-control form-control-inverse\" id=\"account-password\" type=\"password\" name=\"accountPassword\" required=\"\" placeholder=\"Password\">\r\n                                <span class=\"text-danger\" *ngIf=\"regForm.controls['password'].hasError('required') && (regForm.controls['password'].dirty || regForm.controls['password'].touched)\">Input required</span>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input formControlName=\"confirmPassword\" [formControl]=\"regForm.controls['confirmPassword']\" class=\"form-control form-control-inverse\" type=\"password\" name=\"accountPasswordCheck\" required=\"\" placeholder=\"Confirm password\">\r\n                                <span class=\"text-danger\" *ngIf=\"regForm.controls['confirmPassword'].errors?.equalTo\">Input does Not match</span>\r\n                            </div>\r\n                            <div class=\"py-4 text-center\">\r\n                                <button [disabled]=\"!regForm.valid || regForm.pristine\" class=\"btn btn-lg btn-gradient btn-oval btn-info btn-block\" type=\"submit\">Create</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cardbox-footer text-center text-sm\"><span>By registering I accept the</span>\r\n                        <a>\r\n                            <u class=\"text-white\">Terms of Service</u></a><span> and </span>\r\n                        <a>\r\n                            <u class=\"text-white\">Privacy</u></a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/user/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(fb) {
        var loginPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var loginPasswordConfirm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].equalTo(loginPassword));
        this.regForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'password': loginPassword,
            'confirmPassword': loginPasswordConfirm
        });
    }
    SignupComponent.prototype.submitForm = function ($ev, form) {
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
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/routes/user/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/user/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/routes/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/routes/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lock_lock_component__ = __webpack_require__("../../../../../src/app/routes/user/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recover_recover_component__ = __webpack_require__("../../../../../src/app/routes/user/recover/recover.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// const routes: Routes = [
//     { path: 'signin', component: SigninComponent },
//     { path: 'signup', component: SignupComponent },
//     { path: 'lock', component: LockComponent },
//     { path: 'recover', component: RecoverComponent },
// ];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lock_lock_component__["a" /* LockComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recover_recover_component__["a" /* RecoverComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lock_lock_component__["a" /* LockComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recover_recover_component__["a" /* RecoverComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasypiechartDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasypiechartDirective = (function () {
    function EasypiechartDirective(element) {
        this.element = element;
        /**
         * default easy pie chart options
         * @type {Object}
         */
        this.defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.percent = this.percent || 0;
        this.options = $.extend({}, this.defaultOptions, this.options);
    }
    EasypiechartDirective.prototype.ngOnInit = function () {
        if (EasyPieChart) {
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    };
    EasypiechartDirective.prototype.ngOnChanges = function (changes) {
        if (this.pieChart && changes['percent']) {
            this.pieChart.update(this.percent);
        }
    };
    return EasypiechartDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "options", void 0);
EasypiechartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[easypiechart]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasypiechartDirective);

var _a;
//# sourceMappingURL=easypiechart.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/flot/flot.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotDirective = (function () {
    function FlotDirective(el) {
        this.el = el;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = $(this.el.nativeElement);
        if (!$.plot) {
            console.log('Flot chart no available.');
        }
        this.plot = null;
    }
    FlotDirective.prototype.ngOnInit = function () { };
    FlotDirective.prototype.ngOnChanges = function (changes) {
        if (!$.plot) {
            return;
        }
        if (changes['dataset']) {
            this.onDatasetChanged(this.dataset);
        }
        if (changes['series']) {
            this.onSerieToggled(this.series);
        }
    };
    FlotDirective.prototype.init = function () {
        var heightDefault = 220;
        this.width = this.attrWidth || '100%';
        this.height = this.height || heightDefault;
        this.element.css({
            width: this.width,
            height: this.height
        });
        var plotObj;
        if (!this.dataset || !this.options) {
            return;
        }
        plotObj = $.plot(this.el.nativeElement, this.dataset, this.options);
        if (this.ready) {
            this.ready.next({ plot: plotObj });
        }
        return plotObj;
    };
    FlotDirective.prototype.ngAfterViewInit = function () {
        this.plot = this.init();
    };
    FlotDirective.prototype.onDatasetChanged = function (dataset) {
        if (this.plot) {
            this.plot.setData(dataset);
            this.plot.setupGrid();
            return this.plot.draw();
        }
        else {
            this.plot = this.init();
            this.onSerieToggled(this.series);
            return this.plot;
        }
    };
    FlotDirective.prototype.onSerieToggled = function (series) {
        if (!this.plot || !series) {
            return;
        }
        var someData = this.plot.getData();
        for (var sName in series) {
            series[sName].forEach(toggleFor(sName));
        }
        this.plot.setData(someData);
        this.plot.draw();
        function toggleFor(sName) {
            return function (s, i) {
                if (someData[i] && someData[i][sName]) {
                    someData[i][sName].show = s;
                }
            };
        }
    };
    FlotDirective.prototype.ngOnDestroy = function () {
        if (this.plot) {
            this.plot.shutdown();
        }
    };
    return FlotDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "dataset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "attrWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FlotDirective.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "series", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "ready", void 0);
FlotDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flot]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotDirective);

var _a;
//# sourceMappingURL=flot.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/knob/knob.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnobDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KnobDirective = (function () {
    function KnobDirective(element) {
        this.element = element;
        this.chart = null;
    }
    KnobDirective.prototype.ngOnInit = function () {
        this.chart = $(this.element.nativeElement);
        this.chart.val(this.data).knob(this.options);
    };
    KnobDirective.prototype.ngOnChanges = function (changes) {
        if (this.chart && changes['data']) {
            this.chart.val(this.data).trigger('change');
        }
        if (this.chart && changes['options']) {
            this.chart.trigger('configure', this.options);
        }
    };
    return KnobDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KnobDirective.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KnobDirective.prototype, "options", void 0);
KnobDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[knob]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], KnobDirective);

var _a;
//# sourceMappingURL=knob.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/peity/peity.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeityDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeityDirective = (function () {
    function PeityDirective(element) {
        this.element = element;
        this.chart = null;
    }
    PeityDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chart = $(this.element.nativeElement);
        this.chart.text(this.getData()).peity(this.type, this.options);
        // responsive
        $(window).resize(function () { return _this.chart.peity(_this.type, _this.options); });
    };
    PeityDirective.prototype.ngOnChanges = function (changes) {
        if (this.chart && changes['data']) {
            this.chart.text(this.getData()).change();
        }
    };
    // If data is string, don't parse as array
    PeityDirective.prototype.getData = function () {
        return (typeof this.data === 'string') ?
            this.data :
            this.data.join();
    };
    return PeityDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PeityDirective.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "options", void 0);
PeityDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[peity]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], PeityDirective);

var _a;
//# sourceMappingURL=peity.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(el) {
        this.el = el;
        // generate a unique resize event so we can detach later
        this.resizeEventId = 'resize.sparkline' + 1324;
        this.$element = $(el.nativeElement);
    }
    SparklineDirective.prototype.ngOnInit = function () {
        this.initSparkLine();
    };
    SparklineDirective.prototype.initSparkLine = function () {
        var _this = this;
        var options = this.options, data = this.$element.data();
        if (!options) {
            options = data;
        }
        else {
            if (data) {
                options = $.extend({}, options, data);
            }
        }
        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;
        this.runSparkline(options);
        if (options.resize) {
            $(window).on(this.resizeEventId, function () {
                _this.runSparkline(options);
            });
        }
    };
    SparklineDirective.prototype.runSparkline = function (options) {
        if (this.values) {
            this.$element.sparkline(this.values, options);
        }
        else {
            this.$element.sparkline('html', options);
        }
    };
    SparklineDirective.prototype.ngOnDestroy = function () {
        $(window).off(this.resizeEventId);
    };
    return SparklineDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "values", void 0);
SparklineDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[sparkline]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineDirective);

var _a;
//# sourceMappingURL=sparkline.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/vectormap/vectormap.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectormapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VectormapDirective = (function () {
    function VectormapDirective(element) {
        this.element = element;
        this._markersLen = 0; // change detection
    }
    VectormapDirective.prototype.ngOnInit = function () {
        this.$element = $(this.element.nativeElement);
        this.$element.css('height', this.mapHeight);
        if (!this.$element.vectorMap) {
            return;
        }
        if (this.mapMarkers) {
            this.mapOptions.markers = this.mapMarkers;
        }
        if (this.mapSeries) {
            this.mapOptions.series = this.mapSeries;
        }
        this.$element.vectorMap(this.mapOptions);
    };
    // compare length of markers, if they change reload the map
    // and store the current value for next check
    VectormapDirective.prototype.ngDoCheck = function () {
        if (this._markersLen !== this.mapMarkers.length) {
            this.mapOptions.markers = this.mapMarkers;
            this.$element.empty().vectorMap(this.mapOptions);
            this._markersLen = this.mapMarkers.length;
        }
    };
    return VectormapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], VectormapDirective.prototype, "mapHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapSeries", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapMarkers", void 0);
VectormapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[vectormap]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], VectormapDirective);

var _a;
//# sourceMappingURL=vectormap.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        // Global Settings
        // -----------------------------------
        this.app = {
            name: 'Dasha',
            description: 'Bootstrap 4 Admin Template',
            layout: {
                rtl: false
            },
            sidebar: {
                showtoolbar: true,
                visible: false,
                coverMode: false,
                coverModeVisible: false // cover mode sidebar visible
            },
            footer: {
                fixed: false
            },
            theme: 'theme-default' // no actively used
        };
    }
    SettingsService.prototype.getSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.setSetting = function (name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    };
    SettingsService.prototype.toggleSetting = function (name) {
        return this.setSetting(name, !this.getSetting(name));
    };
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_accordion__ = __webpack_require__("../../../../ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__ = __webpack_require__("../../../../ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_rating__ = __webpack_require__("../../../../ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_popover__ = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__ = __webpack_require__("../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_flot_flot_directive__ = __webpack_require__("../../../../../src/app/shared/directives/flot/flot.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_sparkline_sparkline_directive__ = __webpack_require__("../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_vectormap_vectormap_directive__ = __webpack_require__("../../../../../src/app/shared/directives/vectormap/vectormap.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_knob_knob_directive__ = __webpack_require__("../../../../../src/app/shared/directives/knob/knob.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__settings_settings_service__ = __webpack_require__("../../../../../src/app/shared/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_peity_peity_directive__ = __webpack_require__("../../../../../src/app/shared/directives/peity/peity.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// https://angular.io/styleguide#!#04-10
var SharedModule = SharedModule_1 = (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_popover__["a" /* PopoverModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__settings_settings_service__["a" /* SettingsService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_24__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_knob_knob_directive__["a" /* KnobDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_peity_peity_directive__["a" /* PeityDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_accordion__["a" /* AccordionModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_alert__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_buttons__["a" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_carousel__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_collapse__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["b" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_pagination__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_rating__["a" /* RatingModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_timepicker__["a" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_tooltip__["a" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_popover__["a" /* PopoverModule */],
            __WEBPACK_IMPORTED_MODULE_21__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_24__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_knob_knob_directive__["a" /* KnobDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_peity_peity_directive__["a" /* PeityDirective */]
        ]
    })
    // https://github.com/ocombe/ng2-translate/issues/209
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/assets/img/custom-select-angle-down-white.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "custom-select-angle-down-white.d48db18930e104e61dc8.svg";

/***/ }),

/***/ "../../../../../src/assets/img/custom-select-angle-down.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "custom-select-angle-down.6f3adad2533a5245a8c0.svg";

/***/ }),

/***/ "../../../../../src/assets/img/pic1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic1.38fd68cfea8b8b992928.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pic2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic2.727aff858df622227d95.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pic3.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic3.56574a3c86067082fcc9.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pic4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic4.1b185a321b78b835b578.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pic5.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic5.87f43d440778fbd48e49.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/pic6.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pic6.a118b567e6ca2fdb5cd3.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/profile-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile-bg.69dbceda2e4d0290c2db.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js__ = __webpack_require__("../../../../../src/modernizr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modernizr_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/*!
 *
 * Dasha - Bootstrap Admin Template
 *
 * Version: 1.0.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */
 // 'npm run modernizr' to create this file;




if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modernizr.js":
/***/ (function(module, exports) {

/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-cssanimations-csscalc-csstransforms-csstransforms3d-csstransitions-flexboxtweener-fontface-inlinesvg-localstorage-multiplebgs-preserve3d-sessionstorage-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-websqldatabase-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.5.0',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  var classes = [];
  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
/* DOC
Detects if you can use the shorthand method to define multiple parts of an
element's background-position simultaniously.

eg `background-position: right 10px bottom 10px`
*/

  Modernizr.addTest('bgpositionshorthand', function() {
    var elem = createElement('a');
    var eStyle = elem.style;
    var val = 'right 10px bottom 10px';
    eStyle.cssText = 'background-position: ' + val + ';';
    return (eStyle.backgroundPosition === val);
  });


  /**
   * If the browsers follow the spec, then they would expose vendor-specific styles as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following (which is technically incorrect):
   *   elem.style.webkitBorderRadius

   * WebKit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  


  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;


  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} - The element we want to find the computed styles of
   * @param {string|null} [pseudoSelector]- An optional pseudo element selector (e.g. :before), of null if none
   * @returns {CSSStyleDeclaration}
   */

  function computedStyle(elem, pseudo, prop) {
    var result;

    if ('getComputedStyle' in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;

      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? 'error' : 'log';
          console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }

    return result;
  }

  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return computedStyle(node, null, 'position') == 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   * @returns {false|*} returns false if the prop is unsupported, otherwise the value that is supported
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   * @returns {false|string} returns the string version of the property, or false if it is unsupported
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;
  
/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
/* DOC
Detects the ability to control an element's background position using css
*/

  Modernizr.addTest('bgpositionxy', function() {
    return testAllProps('backgroundPositionX', '3px', true) && testAllProps('backgroundPositionY', '5px', true);
  });

/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
/* DOC
Detects the ability to use round and space as properties for background-repeat
*/

  // Must value-test these
  Modernizr.addTest('bgrepeatround', testAllProps('backgroundRepeat', 'round'));
  Modernizr.addTest('bgrepeatspace', testAllProps('backgroundRepeat', 'space'));

/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/

  // Must test value, as this specifically tests the `cover` value
  Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));

/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/

  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));


  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['','']);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  
/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
/* DOC
Method of allowing calculated values for length units. For example:

```css
//lem {
  width: calc(100% - 3em);
}
```
*/

  Modernizr.addTest('csscalc', function() {
    var prop = 'width:';
    var value = 'calc(10px);';
    var el = createElement('a');

    el.style.cssText = prop + prefixes.join(value + prop);

    return !!el.style.length;
  });

/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransforms', function() {
    // Android < 3.0 is buggy, so we sniff and blacklist
    // http://git.io/hHzL7w
    return navigator.userAgent.indexOf('Android 2.') === -1 &&
           testAllProps('transform', 'scale(1)', true);
  });


  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

  Modernizr.addTest('csstransforms3d', function() {
    var ret = !!testAllProps('perspective', '1px', true);
    var usePrefix = Modernizr._config.usePrefixes;

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && (!usePrefix || 'webkitPerspective' in docElement.style)) {
      var mq;
      var defaultStyle = '#modernizr{width:0;height:0}';
      // Use CSS Conditional Rules if available
      if (Modernizr.supports) {
        mq = '@supports (perspective: 1px)';
      } else {
        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.
        // `@media (transform-3d),(-webkit-transform-3d){ ... }`
        mq = '@media (transform-3d)';
        if (usePrefix) {
          mq += ',(-webkit-transform-3d)';
        }
      }

      mq += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';

      testStyles(defaultStyle + mq, function(elem) {
        ret = elem.offsetWidth === 7 && elem.offsetHeight === 18;
      });
    }

    return ret;
  });

/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["denyskoch", "aFarkas"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/1748"
  }]
}
!*/
/* DOC
Detects support for `transform-style: preserve-3d`, for getting a proper 3D perspective on elements.
*/

  Modernizr.addTest('preserve3d', function() {
    var outerAnchor, innerAnchor;
    var CSS = window.CSS;
    var result = false;

    if (CSS && CSS.supports && CSS.supports('(transform-style: preserve-3d)')) {
      return true;
    }

    outerAnchor = createElement('a');
    innerAnchor = createElement('a');

    outerAnchor.style.cssText = 'display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);';
    innerAnchor.style.cssText = 'display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);';

    outerAnchor.appendChild(innerAnchor);
    docElement.appendChild(outerAnchor);

    result = innerAnchor.getBoundingClientRect();
    docElement.removeChild(outerAnchor);

    result = result.width && result.width < 4;
    return result;
  });

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/

  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));

/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/

  var blacklist = (function() {
    var ua = navigator.userAgent;
    var webos = ua.match(/w(eb)?osbrowser/gi);
    var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    return webos || wppre8;
  }());
  if (blacklist) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
;
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
/* DOC
Detects support for SVG in `<embed>` or `<object>` elements.
*/

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);


  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();

  


   // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */

  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */

  function addTest(feature, test) {

    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });

  

/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "aliases": ["svgincss"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/


  // Original Async test by Stu Cox
  // https://gist.github.com/chriscoyier/8774501

  // Now a Sync test based on good results here
  // http://codepen.io/chriscoyier/pen/bADFx

  // Note http://www.w3.org/TR/SVG11/feature#Image is *supposed* to represent
  // support for the `<image>` tag in SVG, not an SVG file linked from an `<img>`
  // tag in HTML – but it’s a heuristic which works
  Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));


  /**
   * Object.prototype.toString can be used with every object and allows you to
   * get its class easily. Abstracting it off of an object prevents situations
   * where the toString property has been overridden
   *
   * @access private
   * @function toStringFn
   * @returns {function} An abstracted toString function
   */

  var toStringFn = ({}).toString;
  
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
/* DOC
Detects support for clip paths in SVG (only, not on HTML content).

See [this discussion](https://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
*/

  Modernizr.addTest('svgclippaths', function() {
    return !!document.createElementNS &&
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  });

/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/

  // Should fail in Safari: https://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function() {
    var result = false;
    try {
      result = 'SVGFEColorMatrixElement' in window &&
        SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    }
    catch (e) {}
    return result;
  });

/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
/* DOC
Detects support for foreignObject tag in SVG.
*/

  Modernizr.addTest('svgforeignobject', function() {
    return !!document.createElementNS &&
      /SVGForeignObject/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')));
  });

/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
/* DOC
Detects support for inline SVG in HTML (not within XHTML).
*/

  Modernizr.addTest('inlinesvg', function() {
    var div = createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  });

/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/

  // SVG SMIL animation
  Modernizr.addTest('smil', function() {
    return !!document.createElementNS &&
      /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
  });

/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window)` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Similarly, in Chrome with "Block third-party cookies and site data" enabled,
  // attempting to access `window.sessionStorage` will throw an exception. crbug.com/357625

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  Modernizr.addTest('localstorage', function() {
    var mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files
  Modernizr.addTest('sessionstorage', function() {
    var mod = 'modernizr';
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/

  // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.
  Modernizr.addTest('websqldatabase', 'openDatabase' in window);

/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/

  // Setting multiple images AND a color on the background shorthand property
  // and then querying the style.background property value for the number of
  // occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

  Modernizr.addTest('multiplebgs', function() {
    var style = createElement('a').style;
    style.cssText = 'background:url(https://),url(https://),red url(https://)';

    // If the UA supports multiple backgrounds, there should be three occurrences
    // of the string "url(" in the return value for elemStyle.background
    return (/(url\s*\(.*?){3}/).test(style.background);
  });


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map