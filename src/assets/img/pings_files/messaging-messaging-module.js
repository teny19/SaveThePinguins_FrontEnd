(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messaging-messaging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messaging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/messaging/messaging.module.ts":
/*!***********************************************!*\
  !*** ./src/app/messaging/messaging.module.ts ***!
  \***********************************************/
/*! exports provided: MessagingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPageModule", function() { return MessagingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messaging_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging.page */ "./src/app/messaging/messaging.page.ts");







const routes = [
    {
        path: '',
        component: _messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]
    }
];
let MessagingPageModule = class MessagingPageModule {
};
MessagingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_messaging_page__WEBPACK_IMPORTED_MODULE_6__["MessagingPage"]]
    })
], MessagingPageModule);



/***/ }),

/***/ "./src/app/messaging/messaging.page.scss":
/*!***********************************************!*\
  !*** ./src/app/messaging/messaging.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/messaging/messaging.page.ts":
/*!*********************************************!*\
  !*** ./src/app/messaging/messaging.page.ts ***!
  \*********************************************/
/*! exports provided: MessagingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingPage", function() { return MessagingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagingPage = class MessagingPage {
    constructor() { }
    ngOnInit() {
    }
};
MessagingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: __webpack_require__(/*! raw-loader!./messaging.page.html */ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.page.html"),
        styles: [__webpack_require__(/*! ./messaging.page.scss */ "./src/app/messaging/messaging.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessagingPage);



/***/ })

}]);
//# sourceMappingURL=messaging-messaging-module.js.map