(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-collections-collections-module"],{

/***/ "/pNy":
/*!**********************************************************************!*\
  !*** ./src/app/components/collections/collections-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CollectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsRoutingModule", function() { return CollectionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guard/user.guard */ "3owW");
/* harmony import */ var _activitycollection_activitycollection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activitycollection/activitycollection.component */ "Jnfo");
/* harmony import */ var _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addcollection/addcollection.component */ "OZyR");
/* harmony import */ var _detailcollection_detailcollection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailcollection/detailcollection.component */ "/uZx");
/* harmony import */ var _mycollection_mycollection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycollection/mycollection.component */ "Mfsy");
/* harmony import */ var _viewcollection_viewcollection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewcollection/viewcollection.component */ "p+dt");
/*
Project : Cryptotrades
FileName :  collections-routing.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the routing module which used to define collection related routes
*/










const routes = [
    {
        path: '',
        redirectTo: 'mycollection',
        pathMatch: 'full',
    },
    {
        path: 'mycollection',
        component: _mycollection_mycollection_component__WEBPACK_IMPORTED_MODULE_6__["MycollectionComponent"],
        canActivate: [src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'add',
        component: _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_4__["AddcollectionComponent"],
        canActivate: [src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'edit/:id',
        component: _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_4__["AddcollectionComponent"],
        canActivate: [src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'view/:id',
        component: _viewcollection_viewcollection_component__WEBPACK_IMPORTED_MODULE_7__["ViewcollectionComponent"]
    },
    {
        path: 'detail/:id',
        component: _detailcollection_detailcollection_component__WEBPACK_IMPORTED_MODULE_5__["DetailcollectionComponent"]
    },
    {
        path: 'activity/:id',
        component: _activitycollection_activitycollection_component__WEBPACK_IMPORTED_MODULE_3__["ActivitycollectionComponent"]
    }
];
class CollectionsRoutingModule {
}
CollectionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CollectionsRoutingModule });
CollectionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CollectionsRoutingModule_Factory(t) { return new (t || CollectionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/uZx":
/*!***************************************************************************************!*\
  !*** ./src/app/components/collections/detailcollection/detailcollection.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetailcollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailcollectionComponent", function() { return DetailcollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/config */ "E+pt");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/collection.service */ "MBni");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/item.service */ "jcKA");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _UI_skeleton_gridskeleton_gridskeleton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/skeleton/gridskeleton/gridskeleton.component */ "swHO");
/* harmony import */ var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../UI/item/item.component */ "xyAo");
/*
Project : Cryptotrades
FileName :  detailcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show detail page of collection with for collection owner
*/











function DetailcollectionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Royalties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Volume Traded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.collection_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.collectionInfo.item_count_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.collectionInfo.royalties, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.collectionInfo.volume_traded_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.collection_desc);
} }
function DetailcollectionComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailcollectionComponent_div_10_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.viewAllAction("recent"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailcollectionComponent_div_10_app_gridskeleton_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gridskeleton");
} }
function DetailcollectionComponent_div_10_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function DetailcollectionComponent_div_10_div_8_div_1_Template_app_item_itemEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.itemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r10);
} }
function DetailcollectionComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailcollectionComponent_div_10_div_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.recent);
} }
function DetailcollectionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Recently Listed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailcollectionComponent_div_10_div_5_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailcollectionComponent_div_10_app_gridskeleton_7_Template, 1, 0, "app-gridskeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailcollectionComponent_div_10_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.is_recent_viewall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.recent.length > 0);
} }
function DetailcollectionComponent_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailcollectionComponent_div_11_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.viewAllAction("minted"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailcollectionComponent_div_11_app_gridskeleton_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gridskeleton");
} }
function DetailcollectionComponent_div_11_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function DetailcollectionComponent_div_11_div_8_div_1_Template_app_item_itemEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.itemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r19);
} }
function DetailcollectionComponent_div_11_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailcollectionComponent_div_11_div_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.minted);
} }
function DetailcollectionComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Newly Minted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailcollectionComponent_div_11_div_5_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailcollectionComponent_div_11_app_gridskeleton_7_Template, 1, 0, "app-gridskeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailcollectionComponent_div_11_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.is_minted_viewall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.minted.length > 0);
} }
function DetailcollectionComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailcollectionComponent_div_12_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.viewAllAction("onauction"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailcollectionComponent_div_12_app_gridskeleton_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gridskeleton");
} }
function DetailcollectionComponent_div_12_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function DetailcollectionComponent_div_12_div_8_div_1_Template_app_item_itemEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.itemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r28);
} }
function DetailcollectionComponent_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailcollectionComponent_div_12_div_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.onauction);
} }
function DetailcollectionComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "On Auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailcollectionComponent_div_12_div_5_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailcollectionComponent_div_12_app_gridskeleton_7_Template, 1, 0, "app-gridskeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailcollectionComponent_div_12_div_8_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.is_onauction_viewall);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.onauction.length > 0);
} }
class DetailcollectionComponent {
    constructor(collectionService, userService, router, route, itemService, snackBar) {
        this.collectionService = collectionService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.itemService = itemService;
        this.snackBar = snackBar;
        this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
        this.ownCollection = false;
        this.collectionID = "";
        this.collection_banner = "default.png";
        this.collection_logo = "default.png";
        this.collection_desc = "";
        this.collection_name = "";
        this.loading = true;
        this.recent = [];
        this.is_recent_viewall = false;
        this.minted = [];
        this.is_minted_viewall = false;
        this.onauction = [];
        this.is_onauction_viewall = false;
        /**
         * This is the function which used to show item list by collection
         */
        this.getItemCollectionList = () => {
            this.loading = true;
            var params = {
                collection_id: this.collectionInfo._id,
            };
            this.itemService.listByCollectionItem(params).subscribe(result => {
                this.loading = false;
                if (result.status == true) {
                    this.recent = result.data.recent;
                    this.is_recent_viewall = (this.recent.length > 4) ? true : false;
                    if (this.recent.length > 4) {
                        this.recent.splice(3, 1);
                    }
                    this.minted = result.data.minted;
                    this.is_minted_viewall = (this.minted.length > 4) ? true : false;
                    if (this.minted.length > 4) {
                        this.minted.splice(3, 1);
                    }
                    this.onauction = result.data.onauction;
                    this.is_onauction_viewall = (this.onauction.length > 4) ? true : false;
                    if (this.onauction.length > 4) {
                        this.onauction.splice(3, 1);
                    }
                }
                this.loading = false;
            });
        };
        /**
         * This is the output function which used to navigate user to detail page
         */
        this.itemEvent = (event) => {
            if (event.type == "view") {
                this.router.navigate(['/item/view/' + event.item._id]);
            }
        };
        /**
         * This is the output function which used to navigate user to marketplace page
         */
        this.viewAllAction = (type) => {
            this.router.navigate(['/marketplace'], { queryParams: { collection_id: this.collectionID, type: type } });
        };
        this.currentUser = this.userService.getUser();
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            if (params.id) {
                this.collectionID = params.id;
                this.getCollectionInfo();
            }
            else {
                this.collectionID = "";
            }
            console.log(params); //log the entire params object
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * This is the function which used to get collection detail
     */
    getCollectionInfo() {
        this.collectionService.viewCollection({
            collection_id: this.collectionID
        }).subscribe(result => {
            this.collectionInfo = result.result;
            this.collection_banner = this.collectionInfo.banner;
            this.collection_logo = this.collectionInfo.image;
            this.collection_name = this.collectionInfo.name;
            this.collection_desc = this.collectionInfo.description;
            if (this.currentUser != null) {
                this.ownCollection = (this.collectionInfo.author_id == this.currentUser.user_id) ? true : false;
            }
            this.getItemCollectionList();
        });
    }
}
DetailcollectionComponent.ɵfac = function DetailcollectionComponent_Factory(t) { return new (t || DetailcollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
DetailcollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailcollectionComponent, selectors: [["app-detailcollection"]], decls: 13, vars: 6, consts: [[1, "appContainer"], [1, "collectionHeader"], [1, "collectionCover"], [3, "src"], [1, "collectionLogo"], [1, "collectionLogoInner"], ["class", "collectionSubHeader", 4, "ngIf"], [1, "collectionMainContainer"], [1, "container"], ["class", "listContainer", 4, "ngIf"], [1, "collectionSubHeader"], [1, "collection_stats"], [1, "listContainer"], [1, "listContainerHeader"], [1, "cil-album"], ["class", "viewall", 3, "click", 4, "ngIf"], [1, "listContainerContent"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "viewall", 3, "click"], [1, "icon-arrow-right"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [3, "item", "itemEvent"], [1, "cil-fire"], [1, "cil-graph"]], template: function DetailcollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailcollectionComponent_div_7_Template, 22, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailcollectionComponent_div_10_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailcollectionComponent_div_11_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailcollectionComponent_div_12_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/banner/" + ctx.collection_banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/logo/" + ctx.collection_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectionInfo != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recent.length > 0 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minted.length > 0 || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onauction.length > 0 || ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _UI_skeleton_gridskeleton_gridskeleton_component__WEBPACK_IMPORTED_MODULE_8__["GridskeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"]], styles: [".appContainer[_ngcontent-%COMP%] {margin:58px 0 0;}\n.collectionCover[_ngcontent-%COMP%] {height: 250px;}\n.collectionCover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%; -o-object-fit: cover; object-fit: cover; height: 250px;}\n.collectionHeader[_ngcontent-%COMP%] {position: relative; padding-bottom: 80px;}\n.collectionLogo[_ngcontent-%COMP%] {position: absolute; bottom: 18px; left: 0; right: 0;}\n.collectionLogoInner[_ngcontent-%COMP%] {width: 125px; height: 125px; margin: 0 auto;}\n.collectionLogoInner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 125px; height: 125px; border-radius: 50%; -o-object-fit: cover; object-fit: cover;}\n.collectionSubHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .collectionSubHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {margin: 0px; padding:0 20px; text-align: center;}\n.collection_stats[_ngcontent-%COMP%] {margin: 15px auto; width: 364px; border: 1px solid #e7e7e7;}\n.collection_stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style: none;}\n.collection_stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {margin: 0; padding: 0;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block; width: 120px; border-left: 1px solid #e7e7e7; padding:15px 0; text-align: center;}\n.collection_stats[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {border:0 none}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {display: block; margin: 0;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {color: #444; font-size: 18px; font-weight: 600;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {font-size: 14px; color: #999;}\n.collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n.listContainer[_ngcontent-%COMP%] {margin-bottom: 40px;}\n.listContainerHeader[_ngcontent-%COMP%] {position: relative; border-bottom: 1px solid #ccc; margin-bottom: 25px;}\n.listContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {font-size: 16px; font-weight: 600; margin: 0;}\n.listContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {display: inline-block; margin-right: 3px;}\n.listContainer[_ngcontent-%COMP%]   .viewall[_ngcontent-%COMP%] {font-size: 14px; font-weight: 600; position: absolute; right: 0; top: 7px; cursor: pointer;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbGNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGVBQWUsQ0FBQztBQUMvQixrQkFBa0IsYUFBYSxDQUFDO0FBQ2hDLHNCQUFzQixXQUFXLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztBQUNwRSxtQkFBbUIsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7QUFDNUQsaUJBQWlCLGtCQUFrQixFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQ3JFLHNCQUFzQixZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsQ0FBQztBQUNsRSwwQkFBMEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLENBQUM7QUFDN0YsaURBQWlELFdBQVcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLENBQUM7QUFDakcsbUJBQW1CLGlCQUFpQixFQUFFLFlBQVksRUFBRSx5QkFBeUIsQ0FBQztBQUM5RSw0Q0FBNEMsZ0JBQWdCLENBQUM7QUFDN0Qsc0JBQXNCLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDNUMsc0JBQXNCLHFCQUFxQixFQUFFLFlBQVksRUFBRSw4QkFBOEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLENBQUM7QUFDOUgsNEJBQTRCLGFBQWE7QUFDekMsdURBQXVELGNBQWMsRUFBRSxTQUFTLENBQUM7QUFDakYsMkJBQTJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7QUFDMUUsNEJBQTRCLGVBQWUsRUFBRSxXQUFXLENBQUM7QUFDekQsMEJBQTBCLGVBQWUsQ0FBQztBQUUxQyxnQkFBZ0IsbUJBQW1CLENBQUM7QUFDcEMsc0JBQXNCLGtCQUFrQixFQUFFLDZCQUE2QixFQUFFLG1CQUFtQixDQUFDO0FBQzdGLG1CQUFtQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO0FBQ2hFLHFCQUFxQixxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RCx5QkFBeUIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDO0FBRXBIO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QztBQUNBO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QztBQUNBO0lBQ0ksZUFBZSxlQUFlLENBQUM7QUFDbkMiLCJmaWxlIjoiZGV0YWlsY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcENvbnRhaW5lciB7bWFyZ2luOjU4cHggMCAwO31cbi5jb2xsZWN0aW9uQ292ZXIge2hlaWdodDogMjUwcHg7fVxuLmNvbGxlY3Rpb25Db3ZlciBpbWcge3dpZHRoOiAxMDAlOyBvYmplY3QtZml0OiBjb3ZlcjsgaGVpZ2h0OiAyNTBweDt9XG4uY29sbGVjdGlvbkhlYWRlciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogODBweDt9XG4uY29sbGVjdGlvbkxvZ28ge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxOHB4OyBsZWZ0OiAwOyByaWdodDogMDt9XG4uY29sbGVjdGlvbkxvZ29Jbm5lciB7d2lkdGg6IDEyNXB4OyBoZWlnaHQ6IDEyNXB4OyBtYXJnaW46IDAgYXV0bzt9XG4uY29sbGVjdGlvbkxvZ29Jbm5lciBpbWcge3dpZHRoOiAxMjVweDsgaGVpZ2h0OiAxMjVweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvYmplY3QtZml0OiBjb3Zlcjt9XG4uY29sbGVjdGlvblN1YkhlYWRlciBoMiwgLmNvbGxlY3Rpb25TdWJIZWFkZXIgcCB7bWFyZ2luOiAwcHg7IHBhZGRpbmc6MCAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmNvbGxlY3Rpb25fc3RhdHMge21hcmdpbjogMTVweCBhdXRvOyB3aWR0aDogMzY0cHg7IGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7fVxuLmNvbGxlY3Rpb25fc3RhdHMgdWwsIC5jb2xsZWN0aW9uX3N0YXRzIGxpIHtsaXN0LXN0eWxlOiBub25lO31cbi5jb2xsZWN0aW9uX3N0YXRzIHVsIHttYXJnaW46IDA7IHBhZGRpbmc6IDA7fVxuLmNvbGxlY3Rpb25fc3RhdHMgbGkge2Rpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDEyMHB4OyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlN2U3ZTc7IHBhZGRpbmc6MTVweCAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmNvbGxlY3Rpb25fc3RhdHMgbGkuZmlyc3Qge2JvcmRlcjowIG5vbmV9XG4uY29sbGVjdGlvbl9zdGF0cyBsaSBzcGFuLCAuY29sbGVjdGlvbl9zdGF0cyBsaSBsYWJlbCB7ZGlzcGxheTogYmxvY2s7IG1hcmdpbjogMDt9XG4uY29sbGVjdGlvbl9zdGF0cyBsaSBzcGFuIHtjb2xvcjogIzQ0NDsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwO31cbi5jb2xsZWN0aW9uX3N0YXRzIGxpIGxhYmVsIHtmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjOTk5O31cbi5jb2xsZWN0aW9uTWFpbkNvbnRhaW5lciB7bWFyZ2luOjMwcHggMCAwO31cblxuLmxpc3RDb250YWluZXIge21hcmdpbi1ib3R0b206IDQwcHg7fVxuLmxpc3RDb250YWluZXJIZWFkZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7IG1hcmdpbi1ib3R0b206IDI1cHg7fVxuLmxpc3RDb250YWluZXIgaDIge2ZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDYwMDsgbWFyZ2luOiAwO31cbi5saXN0Q29udGFpbmVyIGgyIGkge2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luLXJpZ2h0OiAzcHg7fVxuLmxpc3RDb250YWluZXIgLnZpZXdhbGwge2ZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOiA3cHg7IGN1cnNvcjogcG9pbnRlcjt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZyB7aGVpZ2h0OiAyMDBweDt9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZyB7aGVpZ2h0OiAxNjBweDt9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46NzNweCAwIDA7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailcollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detailcollection',
                templateUrl: './detailcollection.component.html',
                styleUrls: ['./detailcollection.component.css']
            }]
    }], function () { return [{ type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "68Gi":
/*!************************************************************!*\
  !*** ./src/app/UI/collectionitem/collectionitem.module.ts ***!
  \************************************************************/
/*! exports provided: CollectionitemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionitemModule", function() { return CollectionitemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collectionitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collectionitem.component */ "c1TD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/*
Project : Cryptotrades
FileName :  collectionitem.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to define collection item related component and module
*/





class CollectionitemModule {
}
CollectionitemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CollectionitemModule });
CollectionitemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CollectionitemModule_Factory(t) { return new (t || CollectionitemModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionitemModule, { declarations: [_collectionitem_component__WEBPACK_IMPORTED_MODULE_2__["CollectionitemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], exports: [_collectionitem_component__WEBPACK_IMPORTED_MODULE_2__["CollectionitemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionitemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
                ],
                exports: [_collectionitem_component__WEBPACK_IMPORTED_MODULE_2__["CollectionitemComponent"]],
                declarations: [_collectionitem_component__WEBPACK_IMPORTED_MODULE_2__["CollectionitemComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "C2Gl":
/*!**************************************************************!*\
  !*** ./src/app/components/collections/collections.module.ts ***!
  \**************************************************************/
/*! exports provided: CollectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsModule", function() { return CollectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _collections_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collections-routing.module */ "/pNy");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _mycollection_mycollection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mycollection/mycollection.component */ "Mfsy");
/* harmony import */ var src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/UI/nodata/nodata.module */ "Mhz7");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var src_app_UI_skeleton_collectionskeleton_collectionskeleton_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/UI/skeleton/collectionskeleton/collectionskeleton.module */ "GeXP");
/* harmony import */ var _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addcollection/addcollection.component */ "OZyR");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/UI/loader/loader.module */ "UfAB");
/* harmony import */ var _viewcollection_viewcollection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewcollection/viewcollection.component */ "p+dt");
/* harmony import */ var src_app_UI_collectionitem_collectionitem_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/UI/collectionitem/collectionitem.module */ "68Gi");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/UI/skeleton/itemskeleton/itemskeleton.module */ "qzpZ");
/* harmony import */ var src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/UI/item/item.module */ "jXLk");
/* harmony import */ var _detailcollection_detailcollection_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./detailcollection/detailcollection.component */ "/uZx");
/* harmony import */ var src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/UI/skeleton/gridskeleton/gridskeleton.module */ "IgIN");
/* harmony import */ var _activitycollection_activitycollection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./activitycollection/activitycollection.component */ "Jnfo");
/*
Project : Cryptotrades
FileName :  collections.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module which used to load collection related module and components
*/































class CollectionsModule {
}
CollectionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CollectionsModule });
CollectionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CollectionsModule_Factory(t) { return new (t || CollectionsModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _collections_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectionsRoutingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
                relativeTimeThresholdOptions: {
                    'm': 59
                }
            }),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_10__["NodataModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__["InfiniteScrollModule"],
            src_app_UI_skeleton_collectionskeleton_collectionskeleton_module__WEBPACK_IMPORTED_MODULE_12__["CollectionskeletonModule"],
            src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_20__["ItemskeletonModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
            src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_15__["LoaderModule"],
            src_app_UI_collectionitem_collectionitem_module__WEBPACK_IMPORTED_MODULE_17__["CollectionitemModule"],
            src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_21__["ItemModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"].forRoot(),
            src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_23__["GridskeletonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionsModule, { declarations: [_mycollection_mycollection_component__WEBPACK_IMPORTED_MODULE_9__["MycollectionComponent"], _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_13__["AddcollectionComponent"], _viewcollection_viewcollection_component__WEBPACK_IMPORTED_MODULE_16__["ViewcollectionComponent"], _detailcollection_detailcollection_component__WEBPACK_IMPORTED_MODULE_22__["DetailcollectionComponent"], _activitycollection_activitycollection_component__WEBPACK_IMPORTED_MODULE_24__["ActivitycollectionComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _collections_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectionsRoutingModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_10__["NodataModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__["InfiniteScrollModule"],
        src_app_UI_skeleton_collectionskeleton_collectionskeleton_module__WEBPACK_IMPORTED_MODULE_12__["CollectionskeletonModule"],
        src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_20__["ItemskeletonModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
        src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_15__["LoaderModule"],
        src_app_UI_collectionitem_collectionitem_module__WEBPACK_IMPORTED_MODULE_17__["CollectionitemModule"],
        src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_21__["ItemModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"], src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_23__["GridskeletonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _collections_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectionsRoutingModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
                        relativeTimeThresholdOptions: {
                            'm': 59
                        }
                    }),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                    src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_10__["NodataModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_11__["InfiniteScrollModule"],
                    src_app_UI_skeleton_collectionskeleton_collectionskeleton_module__WEBPACK_IMPORTED_MODULE_12__["CollectionskeletonModule"],
                    src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_20__["ItemskeletonModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
                    src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_15__["LoaderModule"],
                    src_app_UI_collectionitem_collectionitem_module__WEBPACK_IMPORTED_MODULE_17__["CollectionitemModule"],
                    src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_21__["ItemModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"].forRoot(),
                    src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_23__["GridskeletonModule"]
                ],
                declarations: [_mycollection_mycollection_component__WEBPACK_IMPORTED_MODULE_9__["MycollectionComponent"], _addcollection_addcollection_component__WEBPACK_IMPORTED_MODULE_13__["AddcollectionComponent"], _viewcollection_viewcollection_component__WEBPACK_IMPORTED_MODULE_16__["ViewcollectionComponent"], _detailcollection_detailcollection_component__WEBPACK_IMPORTED_MODULE_22__["DetailcollectionComponent"], _activitycollection_activitycollection_component__WEBPACK_IMPORTED_MODULE_24__["ActivitycollectionComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "GeXP":
/*!*****************************************************************************!*\
  !*** ./src/app/UI/skeleton/collectionskeleton/collectionskeleton.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CollectionskeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionskeletonModule", function() { return CollectionskeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collectionskeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collectionskeleton.component */ "VZoQ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/*
Project : Cryptotrades
FileName :  collectionskeleton.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load component and module related to collection skeleton
*/







class CollectionskeletonModule {
}
CollectionskeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CollectionskeletonModule });
CollectionskeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CollectionskeletonModule_Factory(t) { return new (t || CollectionskeletonModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectionskeletonModule, { declarations: [_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_2__["CollectionskeletonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]], exports: [_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_2__["CollectionskeletonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionskeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
                ],
                exports: [_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_2__["CollectionskeletonComponent"]],
                declarations: [_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_2__["CollectionskeletonComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Jnfo":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/collections/activitycollection/activitycollection.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ActivitycollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitycollectionComponent", function() { return ActivitycollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/config */ "E+pt");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/item.service */ "jcKA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/*
Project : Cryptotrades
FileName :  activitycollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show activity by collection
*/









function ActivitycollectionComponent_tr_29_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r4.from_id._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.from_id.first_name, " ", item_r4.from_id.last_name, "");
} }
function ActivitycollectionComponent_tr_29_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r4.to_id._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.to_id.first_name, " ", item_r4.to_id.last_name, "");
} }
function ActivitycollectionComponent_tr_29_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r7.blockChainExplorer + "tx/" + item_r4.transaction_hash, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.transaction_hash);
} }
function ActivitycollectionComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActivitycollectionComponent_tr_29_div_9_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActivitycollectionComponent_tr_29_div_11_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActivitycollectionComponent_tr_29_div_13_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/item/view/" + item_r4.item_id._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.mediaBase + "/images/item/thumb/" + item_r4.item_id.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.history_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.price, " ETH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.from_id != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.to_id != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.transaction_hash != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 8, item_r4.created_date, "LL"));
} }
function ActivitycollectionComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oops!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " No Data Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivitycollectionComponent_ul_32_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivitycollectionComponent_ul_32_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.prevHistoryPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivitycollectionComponent_ul_32_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivitycollectionComponent_ul_32_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.nextHistoryPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActivitycollectionComponent_ul_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivitycollectionComponent_ul_32_li_1_Template, 3, 0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActivitycollectionComponent_ul_32_li_2_Template, 3, 0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pageHistory != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasNextHistoryPage);
} }
function ActivitycollectionComponent_ul_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ActivitycollectionComponent {
    constructor(userService, router, itemService) {
        this.userService = userService;
        this.router = router;
        this.itemService = itemService;
        this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
        this.blockChainName = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].blockchain;
        this.blockChainExplorer = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].blockchain_url;
        this.histories = [];
        this.historyLoading = true;
        this.pageHistory = 1;
        this.totalHistoryDocs = 0;
        this.limitHistory = 10;
        this.hasNextHistoryPage = false;
        /**
         * This is the function which used to get activitly list from api
         */
        this.getHistoryList = () => {
            this.historyLoading = true;
            var params = {
                type: "collection",
                collection_id: this.collectionID,
                page: this.pageHistory
            };
            this.itemService.getHistory(params).subscribe(result => {
                if (result.status == true) {
                    this.histories = result.tempArray;
                    if (result.data.totalDocs > (result.data.offset + result.tempArray.length)) {
                        this.hasNextHistoryPage = true;
                    }
                    else {
                        this.hasNextHistoryPage = false;
                    }
                }
                else {
                    this.hasNextHistoryPage = false;
                }
                this.historyLoading = false;
            });
        };
        /**
         * This is the function which used to get activitly list from api on next page click
         */
        this.nextHistoryPage = () => {
            this.pageHistory = this.pageHistory + 1;
            this.getHistoryList();
        };
        /**
         * This is the function which used to get activitly list from api on previous page click
         */
        this.prevHistoryPage = () => {
            this.pageHistory = this.pageHistory - 1;
            this.getHistoryList();
        };
        this.currentUser = this.userService.getUser();
    }
    ngOnInit() {
        var url = this.router.url;
        this.collectionID = url.replace('/activity', '').split("/").pop();
        this.getHistoryList();
    }
}
ActivitycollectionComponent.ɵfac = function ActivitycollectionComponent_Factory(t) { return new (t || ActivitycollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"])); };
ActivitycollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivitycollectionComponent, selectors: [["app-activitycollection"]], decls: 34, vars: 4, consts: [[1, "collectionMainContainer"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "tradeBlock"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "cil-swap-vertical", "titleIcon"], [1, "card-body", "historyBody"], [1, "table", "table-bordered", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "itemDetail", 3, "routerLink"], [3, "src"], ["href", "javascript:void(0)", 3, "routerLink"], ["target", "_blank", 3, "href"], ["colspan", "7"], ["type", "info", "ng-reflect-type", "info"], ["role", "alert", "ng-reflect-ng-class", "", 1, "alert", "alert-info"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], ["href", "javascript:void(0)", 1, "page-link"]], template: function ActivitycollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Collection Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Transaction Hash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ActivitycollectionComponent_tr_29_Template, 17, 11, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ActivitycollectionComponent_tr_30_Template, 7, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ActivitycollectionComponent_ul_32_Template, 3, 2, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ActivitycollectionComponent_ul_33_Template, 4, 0, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.histories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.histories.length == 0 && ctx.historyLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.historyLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]], pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_7__["DateFormatPipe"]], styles: [".historyBody[_ngcontent-%COMP%] {overflow:hidden; overflow-x: auto; }\n.itemDetail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 50px; height: 50px; cursor: pointer; -o-object-fit: cover; object-fit: cover;}\n.collectionMainContainer[_ngcontent-%COMP%] {margin:128px 0 0;}\n@media (min-width: 992px) {\n    .collectionMainContainer[_ngcontent-%COMP%] {margin:143px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5Y29sbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ2pELGlCQUFpQixXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLENBQUM7QUFDL0UsMEJBQTBCLGdCQUFnQixDQUFDO0FBQzNDO0lBQ0ksMEJBQTBCLGdCQUFnQixDQUFDO0FBQy9DIiwiZmlsZSI6ImFjdGl2aXR5Y29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpc3RvcnlCb2R5IHtvdmVyZmxvdzpoaWRkZW47IG92ZXJmbG93LXg6IGF1dG87IH1cbi5pdGVtRGV0YWlsIGltZyB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgY3Vyc29yOiBwb2ludGVyOyBvYmplY3QtZml0OiBjb3Zlcjt9XG4uY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbjoxMjhweCAwIDA7fVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbGxlY3Rpb25NYWluQ29udGFpbmVyIHttYXJnaW46MTQzcHggMCAwO31cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitycollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activitycollection',
                templateUrl: './activitycollection.component.html',
                styleUrls: ['./activitycollection.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }]; }, null); })();


/***/ }),

/***/ "Mfsy":
/*!*******************************************************************************!*\
  !*** ./src/app/components/collections/mycollection/mycollection.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MycollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycollectionComponent", function() { return MycollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/collection.service */ "MBni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _UI_skeleton_collectionskeleton_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/skeleton/collectionskeleton/collectionskeleton.component */ "VZoQ");
/* harmony import */ var _UI_collectionitem_collectionitem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../UI/collectionitem/collectionitem.component */ "c1TD");
/* harmony import */ var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/nodata/nodata.component */ "he+D");
/*
Project : Cryptotrades
FileName :  mycollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show collection list created by logged user
*/










function MycollectionComponent_app_collectionskeleton_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-collectionskeleton");
} }
function MycollectionComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-collectionitem", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("collectionEvent", function MycollectionComponent_div_23_div_1_Template_app_collectionitem_collectionEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.collectionEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collection", item_r4);
} }
function MycollectionComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MycollectionComponent_div_23_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.collections);
} }
function MycollectionComponent_app_nodata_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 19);
} }
class MycollectionComponent {
    constructor(collectionService, router) {
        this.collectionService = collectionService;
        this.router = router;
        this.loading = false;
        this.page = 1;
        this.isApiLoading = false;
        this.collections = [];
        this.searchInput = '';
        this.keyword = '';
        this.getCollectionList = () => {
            this.isApiLoading = true;
            if (this.page == 1) {
                this.loading = true;
            }
            var params = {
                page: this.page,
                type: 'my',
                keyword: this.keyword
            };
            this.collectionService.listCollection(params).subscribe(result => {
                this.isApiLoading = false;
                console.log(result);
                if (result.status == true) {
                    if (this.page == 1) {
                        this.collections = result.tempArray;
                    }
                    else {
                        for (let index = 0; index < result.tempArray.length; index++) {
                            const element = result.tempArray[index];
                            this.collections.push(element);
                        }
                    }
                }
                this.loading = false;
            });
        };
        this.onNextPage = () => {
            if (this.loading == true || this.isApiLoading == true) {
                return;
            }
            this.page = this.page + 1;
            this.getCollectionList();
        };
        this.collectionEvent = (event) => {
            if (event.type == "view") {
                this.router.navigate(['/collection/view/' + event.item._id]);
            }
        };
        this.searchAction = () => {
            this.keyword = this.searchInput.replace(" ", "+");
            this.page = 1;
            this.getCollectionList();
        };
        this.resetAction = () => {
            this.searchInput = "";
            this.keyword = "";
            this.searchAction();
        };
    }
    ngOnInit() {
        this.getCollectionList();
    }
}
MycollectionComponent.ɵfac = function MycollectionComponent_Factory(t) { return new (t || MycollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MycollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MycollectionComponent, selectors: [["app-mycollection"]], decls: 25, vars: 6, consts: [[1, "appContainer"], [1, "container"], [1, "pageHeader"], ["routerLink", "/collection/add", 1, "btn", "btn-primary"], [1, "card-body-filter"], [1, "row"], [1, "col-sm-12"], ["type", "text", "id", "name", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body-filter-action"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-search"], [1, "fa", "fa-refresh"], ["infiniteScroll", "", 1, "pageContent", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "collection", "collectionEvent"], ["msg", "There is no data to display here"]], template: function MycollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create, curate, and manage collections of unique NFTs to share and sell.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MycollectionComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchInput = $event; })("keyup.enter", function MycollectionComponent_Template_input_keyup_enter_13_listener() { return ctx.searchAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MycollectionComponent_Template_button_click_15_listener() { return ctx.searchAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MycollectionComponent_Template_button_click_18_listener() { return ctx.resetAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function MycollectionComponent_Template_div_scrolled_21_listener() { return ctx.onNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MycollectionComponent_app_collectionskeleton_22_Template, 1, 0, "app-collectionskeleton", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MycollectionComponent_div_23_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MycollectionComponent_app_nodata_24_Template, 1, 0, "app-nodata", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.collections.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.collections.length == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _UI_skeleton_collectionskeleton_collectionskeleton_component__WEBPACK_IMPORTED_MODULE_6__["CollectionskeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _UI_collectionitem_collectionitem_component__WEBPACK_IMPORTED_MODULE_7__["CollectionitemComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_8__["NodataComponent"]], styles: [".appContainer[_ngcontent-%COMP%] {margin:88px 0 0;}\n.pageHeader[_ngcontent-%COMP%] {position: relative; padding-right: 165px;}\n.pageHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .pageHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {margin:0; padding: 0;}\n.pageHeader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {position: absolute; right: 0; top:0}\n.pageContent[_ngcontent-%COMP%] {margin:30px 0 0;}\n.card-body-filter[_ngcontent-%COMP%] {display: flex; flex-direction: row; margin-top: 25px;}\n.card-body-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {flex: 1;}\n.card-body-filter-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin-left: 10px; font-size: 14px; height: 35px;}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:103px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y29sbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsZUFBZSxDQUFDO0FBQy9CLGFBQWEsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7QUFDdEQsK0JBQStCLFFBQVEsRUFBRSxVQUFVLENBQUM7QUFDcEQsb0JBQW9CLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLO0FBQ3ZELGNBQWMsZUFBZSxDQUFDO0FBQzlCLG1CQUFtQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7QUFDeEUsd0JBQXdCLE9BQU8sQ0FBQztBQUNoQyxpQ0FBaUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztBQUNsRjtJQUNJLGVBQWUsZ0JBQWdCLENBQUM7QUFDcEMiLCJmaWxlIjoibXljb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwQ29udGFpbmVyIHttYXJnaW46ODhweCAwIDA7fVxuLnBhZ2VIZWFkZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1yaWdodDogMTY1cHg7fVxuLnBhZ2VIZWFkZXIgaDIsIC5wYWdlSGVhZGVyIHAge21hcmdpbjowOyBwYWRkaW5nOiAwO31cbi5wYWdlSGVhZGVyIGJ1dHRvbiB7cG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjB9XG4ucGFnZUNvbnRlbnQge21hcmdpbjozMHB4IDAgMDt9XG4uY2FyZC1ib2R5LWZpbHRlciB7ZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgbWFyZ2luLXRvcDogMjVweDt9XG4uY2FyZC1ib2R5LWZpbHRlciAucm93IHtmbGV4OiAxO31cbi5jYXJkLWJvZHktZmlsdGVyLWFjdGlvbiBidXR0b24ge21hcmdpbi1sZWZ0OiAxMHB4OyBmb250LXNpemU6IDE0cHg7IGhlaWdodDogMzVweDt9XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46MTAzcHggMCAwO31cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MycollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mycollection',
                templateUrl: './mycollection.component.html',
                styleUrls: ['./mycollection.component.css']
            }]
    }], function () { return [{ type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "OZyR":
/*!*********************************************************************************!*\
  !*** ./src/app/components/collections/addcollection/addcollection.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddcollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcollectionComponent", function() { return AddcollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "7pIB");
/* harmony import */ var src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/api */ "6p9a");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/config */ "E+pt");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/collection.service */ "MBni");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../UI/loader/loader.component */ "poLh");
/*
Project : Cryptotrades
FileName :  addcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show for user to  add and edit collection
*/














function AddcollectionComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Logo Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddcollectionComponent_div_31_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.uploadLogo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r0.logouploader);
} }
function AddcollectionComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcollectionComponent_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteLogo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.mediaBase + "/images/collection/logo/" + ctx_r1.collection_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddcollectionComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Banner Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddcollectionComponent_div_39_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.uploadBanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r2.banneruploader);
} }
function AddcollectionComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcollectionComponent_div_40_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteBanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.mediaBase + "/images/collection/banner/" + ctx_r3.collection_banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddcollectionComponent_app_loader_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AddcollectionComponent {
    constructor(formbuilder, snackBar, userService, collectionService, router, route) {
        this.formbuilder = formbuilder;
        this.snackBar = snackBar;
        this.userService = userService;
        this.collectionService = collectionService;
        this.router = router;
        this.route = route;
        this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__["config"].media_path;
        this.page_title = "Add Your Collection";
        this.button_title = "Create";
        this.spinner = false;
        this.collectionID = '';
        this.logoname = '';
        this.collection_logo = '';
        this.bannername = '';
        this.collection_banner = '';
        /**
         * This is the function which used to get collection details
         */
        this.getCollectionInfo = () => {
            var params = {
                collection_id: this.collectionID
            };
            this.collectionService.viewCollection(params).subscribe(result => {
                var resulter = result.result;
                this.collectionInfo = resulter;
                this.updateCollectionInfo();
            });
        };
        /**
         * This is the function which used to parse collection detail
         */
        this.updateCollectionInfo = () => {
            this.collection_logo = this.collectionInfo.image.length > 0 ? this.collectionInfo.image : '';
            this.collection_banner = this.collectionInfo.banner.length > 0 ? this.collectionInfo.banner : '';
            this.collectionForm.controls.name.setValue(this.collectionInfo.name);
            this.collectionForm.controls.description.setValue(this.collectionInfo.description);
            this.collectionForm.controls.image.setValue(this.collectionInfo.image);
            this.collectionForm.controls.banner.setValue(this.collectionInfo.banner);
            this.collectionForm.controls.royalties.setValue(this.collectionInfo.royalties);
        };
        /**
         * This is the function which used to upload collection logo on change
         */
        this.uploadLogo = () => {
            this.spinner = true;
            this.logouploader.uploadAll();
        };
        /**
         * This is the function which used to upload collection banner on change
         */
        this.uploadBanner = () => {
            this.spinner = true;
            this.banneruploader.uploadAll();
        };
        /**
         * This is the function which used to delete logo
         */
        this.deleteLogo = () => {
            this.collection_logo = "";
            this.collectionForm.controls.image.setValue("");
        };
        /**
         * This is the function which used to delete banner
         */
        this.deleteBanner = () => {
            this.collection_banner = "";
            this.collectionForm.controls.banner.setValue("");
        };
        /**
         * This is the function which used to validate collection before api submit
         */
        this.onSubmit = (formData) => {
            if (this.collectionForm.valid) {
                if (this.collection_logo == '') {
                    this.snackBar.open('Collection logo is required', "", { duration: 2000 });
                    return;
                }
                if (this.collection_banner == '') {
                    this.snackBar.open('Collection banner is required', "", { duration: 2000 });
                    return;
                }
                this.spinner = true;
                if (this.collectionID != "") {
                    this.updateCollectionApi({
                        name: formData.value.name,
                        description: formData.value.description,
                        royalties: formData.value.royalties,
                        image: formData.value.image,
                        banner: formData.value.banner,
                        collection_id: this.collectionID
                    });
                }
                else {
                    this.collectionCreateApi({
                        name: formData.value.name,
                        description: formData.value.description,
                        royalties: formData.value.royalties,
                        image: formData.value.image,
                        banner: formData.value.banner,
                    });
                }
            }
            else {
                if (this.collectionForm.controls.name.invalid) {
                    if (this.collectionForm.controls.name.errors) {
                        if (this.collectionForm.controls.name.errors.required) {
                            this.snackBar.open('Name is required', "", { duration: 2000 });
                        }
                        else if (this.collectionForm.controls.name.errors.minlength) {
                            this.snackBar.open('Name required minimum 3 characters', "", { duration: 2000 });
                        }
                        else if (this.collectionForm.controls.name.errors.maxlength) {
                            this.snackBar.open('Name required maximum 255 characters', "", { duration: 2000 });
                        }
                    }
                }
                else if (this.collectionForm.controls.description.invalid) {
                    if (this.collectionForm.controls.description.errors) {
                        if (this.collectionForm.controls.description.errors.required) {
                            this.snackBar.open('Description is required', "", { duration: 2000 });
                        }
                        else {
                            this.snackBar.open('Description should be between 3 to 1000 characters', "", { duration: 2000 });
                        }
                    }
                }
                else if (this.collectionForm.controls.royalties.invalid) {
                    if (this.collectionForm.controls.royalties.errors) {
                        if (this.collectionForm.controls.royalties.errors.required) {
                            this.snackBar.open('Royalties value is required', "", { duration: 2000 });
                        }
                        else {
                            this.snackBar.open('Royalties value should be numeric', "", { duration: 2000 });
                        }
                    }
                }
            }
        };
        /**
         * This is the function which used to update collection from api
         */
        this.updateCollectionApi = (params) => {
            this.collectionService.updateCollection(params).subscribe(result => {
                if (result.status == true) {
                    this.router.navigate(['/collection/mycollection']);
                }
                this.spinner = false;
                this.snackBar.open(result.message, "", { duration: 2000 });
            });
        };
        /**
         * This is the function which used to add collection from api
         */
        this.collectionCreateApi = (params) => {
            this.collectionService.addCollection(params).subscribe(result => {
                if (result.status == true) {
                    this.router.navigate(['/collection/mycollection']);
                }
                this.spinner = false;
                this.snackBar.open(result.message, "", { duration: 2000 });
            });
        };
        this.currentUser = this.userService.getUser();
        this.collectionForm = formbuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            'royalties': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]+(.[0-9]{0,5})?$")])],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1000)])],
            'banner': [""],
            'image': [""],
        });
        this.logouploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__["API"].base_url + '/media/collectionlogo',
            allowedMimeType: ['image/png', 'image/jpeg'],
            autoUpload: false,
            isHTML5: true,
            queueLimit: 1000,
            removeAfterUpload: false,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest'
                }
            ]
        });
        this.logouploader.onBuildItemForm = (fileItem, form) => {
        };
        this.logouploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.logouploader.onAfterAddingFile = (file) => {
            console.log("file is ", file);
            var ext = (file.file.type == "image/png") ? ".png" : ".jpg";
            this.logoname = this.currentUser.username + "_" + (new Date).getTime() + ext;
            file.file.name = this.logoname;
        };
        this.logouploader.onCompleteItem = (item, response, status, headers) => {
            console.log(item);
            console.log('Item');
            this.collection_logo = this.logoname;
            this.collectionForm.controls.image.setValue(this.collection_logo);
            let that = this;
            setTimeout(() => {
                that.spinner = false;
            }, 1000);
        };
        this.logouploader.onWhenAddingFileFailed = (item) => {
            let that = this;
            setTimeout(() => {
                that.spinner = false;
            }, 1000);
            this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
        };
        this.banneruploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__["API"].base_url + '/media/collectionbanner',
            allowedMimeType: ['image/png', 'image/jpeg'],
            autoUpload: false,
            isHTML5: true,
            queueLimit: 1000,
            removeAfterUpload: false,
            headers: [
                {
                    name: 'X-Requested-With',
                    value: 'XMLHttpRequest'
                }
            ]
        });
        this.banneruploader.onBuildItemForm = (fileItem, form) => {
        };
        this.banneruploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        };
        this.banneruploader.onAfterAddingFile = (file) => {
            console.log("file is ", file);
            var ext = (file.file.type == "image/png") ? ".png" : ".jpg";
            this.bannername = this.currentUser.username + "_" + (new Date).getTime() + ext;
            file.file.name = this.bannername;
        };
        this.banneruploader.onCompleteItem = (item, response, status, headers) => {
            console.log(item);
            console.log('Item');
            this.collection_banner = this.bannername;
            this.collectionForm.controls.banner.setValue(this.collection_banner);
            let that = this;
            setTimeout(() => {
                that.spinner = false;
            }, 1000);
        };
        this.banneruploader.onWhenAddingFileFailed = (item) => {
            let that = this;
            setTimeout(() => {
                that.spinner = false;
            }, 1000);
            this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
        };
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            if (params.id) {
                this.collectionID = params.id;
                this.page_title = "Update Your Collection";
                this.button_title = "Update";
                this.getCollectionInfo();
            }
            else {
                this.collectionID = "";
            }
            console.log(params); //log the entire params object
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
AddcollectionComponent.ɵfac = function AddcollectionComponent_Factory(t) { return new (t || AddcollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_7__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
AddcollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddcollectionComponent, selectors: [["app-addcollection"]], decls: 45, vars: 8, consts: [[1, "appContainer"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "name"], ["type", "text", "placeholder", "Enter Collection Name", "formControlName", "name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Royalties Percentage", "formControlName", "royalties", "required", "", 1, "form-control"], ["for", "description"], ["placeholder", "Enter Description", "formControlName", "description", 1, "form-control"], ["for", "email"], [1, "image-help-block"], ["class", "preview_empty_container", 4, "ngIf"], ["class", "image_preview", 4, "ngIf"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "px-4", 3, "value"], [4, "ngIf"], [1, "preview_empty_container"], [1, "preview_empty_container_img"], [1, "cil-image"], [1, "uploader_btn_container"], ["mat-menu-item", "", "type", "button", 1, "btn", "btn-primary"], [1, "cil-image-plus"], ["type", "file", "ng2FileSelect", "", "single", "", 3, "uploader", "change"], [1, "image_preview"], [3, "src"], [1, "image_preview_close", 3, "click"], ["type", "file", "ng2FileSelect", "", "signle", "", 3, "uploader", "change"]], template: function AddcollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddcollectionComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.collectionForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Royalties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Collection Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "This image will also be used for navigation. 350 x 350 recommended.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddcollectionComponent_div_31_Template, 11, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddcollectionComponent_div_32_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Collection Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This image will appear at the top of your collection page. Avoid including too much text in this banner image, as the dimensions change on different devices. 1400 x 400 recommended.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddcollectionComponent_div_39_Template, 11, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddcollectionComponent_div_40_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddcollectionComponent_app_loader_44_Template, 1, 0, "app-loader", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.page_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.collectionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection_logo == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection_logo != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection_banner == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection_banner != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.button_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"], _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], styles: [".appContainer[_ngcontent-%COMP%] {margin:88px 0 0;}\n.image-help-block[_ngcontent-%COMP%] {font-size: 12px; color: #999;}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:103px 0 0;}\n}\n.preview_empty_container[_ngcontent-%COMP%] {border:1px solid #ccc; text-align: center; height: 200px; position: relative; display: flex; justify-content: center; flex: 1; align-items: center; flex-direction: column; background-color: #e7e7e7;}\n.preview_empty_container_img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {font-size: 50px; color: #999;}\n.uploader_btn_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {position: relative;}\n.uploader_btn_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {margin-right: 5px; position: relative; top: 1px;}\ninput[type=\"file\"][_ngcontent-%COMP%]::before {content:\" \";display:inline-block;width:100%; position:absolute;height:100%;top:0;left:0;cursor:pointer;}\ninput[type=\"file\"][_ngcontent-%COMP%] {opacity: 0; position: absolute; height:35px;  width: 100%; top:0;left:0;}\n.image_preview[_ngcontent-%COMP%] {border:1px solid #ccc; position: relative; height: 200px; background-color: #e7e7e7;}\n.image_preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%; height: 200px; -o-object-fit: cover; object-fit: cover;}\n.image_preview_close[_ngcontent-%COMP%] {background-color: red; border: 0 none; color: #fff; position: absolute; right: 0; top:0; text-transform: uppercase; font-size: 12px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGVBQWUsQ0FBQztBQUMvQixtQkFBbUIsZUFBZSxFQUFFLFdBQVcsQ0FBQztBQUNoRDtJQUNJLGVBQWUsZ0JBQWdCLENBQUM7QUFDcEM7QUFDQSwwQkFBMEIscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUseUJBQXlCLENBQUM7QUFDaE8sZ0NBQWdDLGVBQWUsRUFBRSxXQUFXLENBQUM7QUFDN0QsZ0NBQWdDLGtCQUFrQixDQUFDO0FBQ25ELGtDQUFrQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUM7QUFDbEYsNEJBQTRCLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQ25JLG9CQUFvQixVQUFVLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxHQUFHLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzVGLGdCQUFnQixxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUseUJBQXlCLENBQUM7QUFDcEcsb0JBQW9CLFdBQVcsRUFBRSxhQUFhLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixDQUFDO0FBQ2xFLHNCQUFzQixxQkFBcUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxDQUFDIiwiZmlsZSI6ImFkZGNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBDb250YWluZXIge21hcmdpbjo4OHB4IDAgMDt9XG4uaW1hZ2UtaGVscC1ibG9jayB7Zm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzk5OTt9XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46MTAzcHggMCAwO31cbn1cbi5wcmV2aWV3X2VtcHR5X2NvbnRhaW5lciB7Ym9yZGVyOjFweCBzb2xpZCAjY2NjOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogMjAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXg6IDE7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7fVxuLnByZXZpZXdfZW1wdHlfY29udGFpbmVyX2ltZyBpIHtmb250LXNpemU6IDUwcHg7IGNvbG9yOiAjOTk5O31cbi51cGxvYWRlcl9idG5fY29udGFpbmVyIGJ1dHRvbiB7cG9zaXRpb246IHJlbGF0aXZlO31cbi51cGxvYWRlcl9idG5fY29udGFpbmVyIGJ1dHRvbiBpIHttYXJnaW4tcmlnaHQ6IDVweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDFweDt9XG5pbnB1dFt0eXBlPVwiZmlsZVwiXTo6YmVmb3JlIHtjb250ZW50OlwiIFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7IHBvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjt9XG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7b3BhY2l0eTogMDsgcG9zaXRpb246IGFic29sdXRlOyBoZWlnaHQ6MzVweDsgIHdpZHRoOiAxMDAlOyB0b3A6MDtsZWZ0OjA7fVxuLmltYWdlX3ByZXZpZXcge2JvcmRlcjoxcHggc29saWQgI2NjYzsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDIwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O31cbi5pbWFnZV9wcmV2aWV3IGltZyB7d2lkdGg6IDEwMCU7IGhlaWdodDogMjAwcHg7IG9iamVjdC1maXQ6IGNvdmVyO31cbi5pbWFnZV9wcmV2aWV3X2Nsb3NlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IGJvcmRlcjogMCBub25lOyBjb2xvcjogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtc2l6ZTogMTJweDt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addcollection',
                templateUrl: './addcollection.component.html',
                styleUrls: ['./addcollection.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_7__["CollectionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "VZoQ":
/*!********************************************************************************!*\
  !*** ./src/app/UI/skeleton/collectionskeleton/collectionskeleton.component.ts ***!
  \********************************************************************************/
/*! exports provided: CollectionskeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionskeletonComponent", function() { return CollectionskeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/*
Project : Cryptotrades
FileName :  collectionskeleton.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show collection skeleton
*/




const _c0 = function () { return { "height": "100%", "margin-top.px": 0, "margin-bottom.px": 0, "width": "100%", "background-color": "#c3c3c3", "border-radius": 0 }; };
const _c1 = function () { return { "height.px": 64, "width.px": 64, "margin-top.px": 0, "margin-bottom.px": 0, "background-color": "#c3c3c3", "border-radius": "50%" }; };
const _c2 = function () { return { "height.px": 12, "margin-top.px": 0, "margin-bottom.px": 0, "width": "70%", "background-color": "#c3c3c3" }; };
const _c3 = function () { return { "height.px": 12, "margin-top.px": 0, "margin-bottom.px": 0, "width": "50%", "background-color": "#c3c3c3" }; };
function CollectionskeletonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
class CollectionskeletonComponent {
    constructor() {
        this.collections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    ngOnInit() {
    }
}
CollectionskeletonComponent.ɵfac = function CollectionskeletonComponent_Factory(t) { return new (t || CollectionskeletonComponent)(); };
CollectionskeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionskeletonComponent, selectors: [["app-collectionskeleton"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "collectionItem"], [1, "collectionItemImg"], ["count", "1", 3, "theme"], [1, "collectionItemAuthor"], [1, "collectionItemAuthorInner"], [1, "collectionItemTitle"], [1, "collectionItemCount"]], template: function CollectionskeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionskeletonComponent_div_1_Template, 11, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"]], styles: [".collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; padding-bottom: 35px; height: 240px;}\n.collectionItemAuthor[_ngcontent-%COMP%] {position: absolute; bottom: 0px; left: 0; right: 0;}\n.collectionItemAuthorInner[_ngcontent-%COMP%] {border:3px solid #fff; width: 70px; height: 70px; border-radius: 50%; margin: 0 auto;}\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: center; margin: 15px 0 0;}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: center; margin: 0 0 15px;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25za2VsZXRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQix3QkFBd0IsRUFBRSxlQUFlLENBQUM7QUFDM0Qsb0JBQW9CLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGFBQWEsQ0FBQztBQUM1RSx1QkFBdUIsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7QUFDMUUsNEJBQTRCLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxDQUFDO0FBQ2pILHNCQUFzQixrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztBQUMzRCxzQkFBc0Isa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7QUFDM0Q7SUFDSSxvQkFBb0IsYUFBYSxDQUFDO0FBQ3RDO0FBQ0E7SUFDSSxvQkFBb0IsYUFBYSxDQUFDO0FBQ3RDIiwiZmlsZSI6ImNvbGxlY3Rpb25za2VsZXRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb25JdGVtIHtib3JkZXI6MXB4IHNvbGlkICNlN2U3ZTc7IG1hcmdpbjowIDAgMjVweDt9XG4uY29sbGVjdGlvbkl0ZW1JbWcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDM1cHg7IGhlaWdodDogMjQwcHg7fVxuLmNvbGxlY3Rpb25JdGVtQXV0aG9yIHtwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMHB4OyBsZWZ0OiAwOyByaWdodDogMDt9XG4uY29sbGVjdGlvbkl0ZW1BdXRob3JJbm5lciB7Ym9yZGVyOjNweCBzb2xpZCAjZmZmOyB3aWR0aDogNzBweDsgaGVpZ2h0OiA3MHB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG1hcmdpbjogMCBhdXRvO31cbi5jb2xsZWN0aW9uSXRlbVRpdGxlIHt0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMTVweCAwIDA7fVxuLmNvbGxlY3Rpb25JdGVtQ291bnQge3RleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIDAgMTVweDt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29sbGVjdGlvbkl0ZW1JbWcge2hlaWdodDogMjAwcHg7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29sbGVjdGlvbkl0ZW1JbWcge2hlaWdodDogMTYwcHg7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionskeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collectionskeleton',
                templateUrl: './collectionskeleton.component.html',
                styleUrls: ['./collectionskeleton.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "c1TD":
/*!***************************************************************!*\
  !*** ./src/app/UI/collectionitem/collectionitem.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionitemComponent", function() { return CollectionitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/config */ "E+pt");
/*
Project : Cryptotrades
FileName :  collectionitem.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to define collection item as sub compoonent
*/



class CollectionitemComponent {
    constructor() {
        this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
        this.collectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This is the function which used send notification to parent component for collection choose
         */
        this.collectionAction = () => {
            this.collectionEvent.emit({
                type: "view",
                item: this.collection
            });
        };
    }
    ngOnInit() {
    }
}
CollectionitemComponent.ɵfac = function CollectionitemComponent_Factory(t) { return new (t || CollectionitemComponent)(); };
CollectionitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionitemComponent, selectors: [["app-collectionitem"]], inputs: { collection: "collection" }, outputs: { collectionEvent: "collectionEvent" }, decls: 10, vars: 4, consts: [[1, "collectionItem", 3, "click"], [1, "collectionItemImg"], [1, "collectionItemImgBanner", 3, "src"], [1, "collectionItemAuthor"], [1, "collectionItemAuthorInner"], [3, "src"], [1, "collectionItemTitle"], [1, "collectionItemCount"]], template: function CollectionitemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollectionitemComponent_Template_div_click_0_listener() { return ctx.collectionAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/banner/" + ctx.collection.banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/logo/" + ctx.collection.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collection.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collection.item_count, " Items ");
    } }, styles: [".collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px; cursor: pointer;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; padding-bottom: 35px; height: 240px;}\n.collectionItemImgBanner[_ngcontent-%COMP%] {width: 100%; height: 205px; -o-object-fit: cover; object-fit: cover; background-color: #e7e7e7;}\n.collectionItemAuthor[_ngcontent-%COMP%] {position: absolute; bottom: 0px; left: 0; right: 0;}\n.collectionItemAuthorInner[_ngcontent-%COMP%] {border:3px solid #fff; width: 70px; height: 70px; border-radius: 50%; margin: 0 auto;}\n.collectionItemAuthorInner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 64px; height: 64px; -o-object-fit: cover; object-fit: cover; border-radius: 50%;}\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: center; margin: 15px 0 0; font-size: 16px; text-transform: capitalize; color: #444; font-weight: 600; white-space: nowrap;text-overflow:ellipsis; overflow: hidden; padding:0 10px}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: center; margin: 0 0 15px; font-size: 14px;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%]{height: 200px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 165px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 125px;}\n}\n@media screen and (max-width: 768px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 240px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 205px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHdCQUF3QixFQUFFLGVBQWUsRUFBRSxlQUFlLENBQUM7QUFDNUUsb0JBQW9CLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGFBQWEsQ0FBQztBQUM1RSwwQkFBMEIsV0FBVyxFQUFFLGFBQWEsRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLEVBQUUseUJBQXlCLENBQUM7QUFDbkcsdUJBQXVCLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBQzFFLDRCQUE0QixxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztBQUNqSCxnQ0FBZ0MsV0FBVyxFQUFFLFlBQVksRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7QUFDakcsc0JBQXNCLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYztBQUNwTixzQkFBc0Isa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO0FBQzVFO0lBQ0ksbUJBQW1CLGFBQWEsQ0FBQztJQUNqQywwQkFBMEIsYUFBYSxDQUFDO0FBQzVDO0FBQ0E7SUFDSSxvQkFBb0IsYUFBYSxDQUFDO0lBQ2xDLDBCQUEwQixhQUFhLENBQUM7QUFDNUM7QUFFQTtJQUNJLG9CQUFvQixhQUFhLENBQUM7SUFDbEMsMEJBQTBCLGFBQWEsQ0FBQztBQUM1QyIsImZpbGUiOiJjb2xsZWN0aW9uaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb25JdGVtIHtib3JkZXI6MXB4IHNvbGlkICNlN2U3ZTc7IG1hcmdpbjowIDAgMjVweDsgY3Vyc29yOiBwb2ludGVyO31cbi5jb2xsZWN0aW9uSXRlbUltZyB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogMzVweDsgaGVpZ2h0OiAyNDBweDt9XG4uY29sbGVjdGlvbkl0ZW1JbWdCYW5uZXIge3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwNXB4OyBvYmplY3QtZml0OiBjb3ZlcjsgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzt9XG4uY29sbGVjdGlvbkl0ZW1BdXRob3Ige3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAwcHg7IGxlZnQ6IDA7IHJpZ2h0OiAwO31cbi5jb2xsZWN0aW9uSXRlbUF1dGhvcklubmVyIHtib3JkZXI6M3B4IHNvbGlkICNmZmY7IHdpZHRoOiA3MHB4OyBoZWlnaHQ6IDcwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgbWFyZ2luOiAwIGF1dG87fVxuLmNvbGxlY3Rpb25JdGVtQXV0aG9ySW5uZXIgaW1nIHt3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBvYmplY3QtZml0OiBjb3ZlcjsgYm9yZGVyLXJhZGl1czogNTAlO31cbi5jb2xsZWN0aW9uSXRlbVRpdGxlIHt0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMTVweCAwIDA7IGZvbnQtc2l6ZTogMTZweDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IGNvbG9yOiAjNDQ0OyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IG92ZXJmbG93OiBoaWRkZW47IHBhZGRpbmc6MCAxMHB4fVxuLmNvbGxlY3Rpb25JdGVtQ291bnQge3RleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIDAgMTVweDsgZm9udC1zaXplOiAxNHB4O31cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZ3toZWlnaHQ6IDIwMHB4O31cbiAgICAuY29sbGVjdGlvbkl0ZW1JbWdCYW5uZXIge2hlaWdodDogMTY1cHg7fVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29sbGVjdGlvbkl0ZW1JbWcge2hlaWdodDogMTYwcHg7fVxuICAgIC5jb2xsZWN0aW9uSXRlbUltZ0Jhbm5lciB7aGVpZ2h0OiAxMjVweDt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDI0MHB4O31cbiAgICAuY29sbGVjdGlvbkl0ZW1JbWdCYW5uZXIge2hlaWdodDogMjA1cHg7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionitemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collectionitem',
                templateUrl: './collectionitem.component.html',
                styleUrls: ['./collectionitem.component.css']
            }]
    }], function () { return []; }, { collection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "p+dt":
/*!***********************************************************************************!*\
  !*** ./src/app/components/collections/viewcollection/viewcollection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewcollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcollectionComponent", function() { return ViewcollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/config */ "E+pt");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/collection.service */ "MBni");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/item.service */ "jcKA");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../UI/skeleton/itemskeleton/itemskeleton.component */ "nGB/");
/* harmony import */ var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../UI/nodata/nodata.component */ "he+D");
/* harmony import */ var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../UI/item/item.component */ "xyAo");
/* harmony import */ var _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../UI/loader/loader.component */ "poLh");
/*
Project : Cryptotrades
FileName :  viewcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show collection view for all users
*/

















const _c0 = ["confirmationModal"];
const _c1 = ["confirmationItemModal"];
function ViewcollectionComponent_div_7_div_3_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_div_7_div_3_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewcollectionComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewcollectionComponent_div_7_div_3_a_5_Template, 2, 0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/item/add/" + ctx_r8.collectionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection/edit/" + ctx_r8.collectionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.collectionInfo.item_count == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection/activity/" + ctx_r8.collectionID);
} }
function ViewcollectionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewcollectionComponent_div_7_div_3_Template, 8, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewcollectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Royalties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Volume Traded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.collection_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.collectionInfo.item_count_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.collectionInfo.royalties, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.collectionInfo.volume_traded_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.collection_desc);
} }
function ViewcollectionComponent_app_itemskeleton_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
} }
function ViewcollectionComponent_app_nodata_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 44);
} }
function ViewcollectionComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function ViewcollectionComponent_div_26_div_1_Template_app_item_itemEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.itemEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r13);
} }
function ViewcollectionComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewcollectionComponent_div_26_div_1_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.items);
} }
function ViewcollectionComponent_app_loader_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class ViewcollectionComponent {
    constructor(collectionService, userService, router, route, itemService, snackBar) {
        this.collectionService = collectionService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.itemService = itemService;
        this.snackBar = snackBar;
        this.spinner = false;
        this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
        this.ownCollection = false;
        this.collectionID = "";
        this.collection_banner = "default.png";
        this.collection_logo = "default.png";
        this.collection_desc = "";
        this.collection_name = "";
        this.items = [];
        this.page = 1;
        this.isApiLoading = false;
        this.loading = true;
        this.keyword = "";
        this.searchInput = "";
        /**
        * This is the function which used to delete collection by id
        */
        this.deleteAction = () => {
            this.spinner = true;
            this.confirmationModal.hide();
            this.collectionService.deleteCollection({
                collection_id: this.collectionID
            }).subscribe(result => {
                this.spinner = false;
                this.router.navigate(["/collection/mycollection"]);
            });
        };
        /**
         * This is the function which used to get item list by collection
         */
        this.getItemList = () => {
            this.isApiLoading = true;
            var params = {
                page: this.page,
                type: 'mycollection',
                collection_id: this.collectionInfo._id,
                keyword: this.keyword
            };
            console.log(this.page);
            this.itemService.listItem(params).subscribe(result => {
                this.isApiLoading = false;
                console.log(result);
                if (result.status == true) {
                    if (this.page == 1) {
                        this.items = result.tempArray;
                    }
                    else {
                        for (let index = 0; index < result.tempArray.length; index++) {
                            const element = result.tempArray[index];
                            this.items.push(element);
                        }
                    }
                }
                this.loading = false;
            });
        };
        /**
         * This is the function which used to get item list by collection on page scroll
         */
        this.onNextPage = () => {
            if (this.loading == true && this.isApiLoading == true) {
                return;
            }
            this.page = this.page + 1;
            this.getItemList();
        };
        /**
         * This is the output function which used to navgate, edit and publish item
         */
        this.itemEvent = (event) => {
            if (event.type == "edit") {
                this.router.navigate(['/item/edit/' + event.item._id]);
            }
            else if (event.type == "delete") {
                this.confirmationItemModal.show();
                this.selectedItem = event.item;
            }
            else if (event.type == "view") {
                this.router.navigate(['/item/view/' + event.item._id]);
            }
            else if (event.type == "publish") {
                this.spinner = true;
                this.itemService.publishItem({
                    item_id: event.item._id
                }).subscribe(result => {
                    if (result.status == true) {
                        this.resetAction();
                    }
                    this.snackBar.open("Item published successfully", "", { duration: 2000 });
                    this.spinner = false;
                });
            }
        };
        /**
         * This is the  function which used to delete item and update item array
         */
        this.itemDeleteAction = () => {
            var index = this.items.findIndex((itemobj) => {
                return itemobj._id == this.selectedItem._id;
            });
            if (index != -1) {
                this.items.splice(index, 1);
                this.itemService.deleteItem({
                    item_id: this.selectedItem._id
                }).subscribe(result => {
                });
            }
            this.confirmationItemModal.hide();
        };
        /**
         * This is the  function which used to search item by keyword with collection filter
         */
        this.searchAction = () => {
            this.loading = true;
            this.keyword = this.searchInput.replace(" ", "+");
            this.page = 1;
            this.getItemList();
        };
        /**
         * This is the  function which used to reset search by keyword with collection filter
         */
        this.resetAction = () => {
            this.loading = true;
            this.searchInput = "";
            this.keyword = "";
            this.searchAction();
        };
        this.confirmationModal = this.confirmationItemModal = this.subscription;
        this.currentUser = this.userService.getUser();
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            if (params.id) {
                this.loading = true;
                this.collectionID = params.id;
                this.getCollectionInfo();
            }
            else {
                this.collectionID = "";
            }
            console.log(params); //log the entire params object
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * This is the function which used to get collection detail from api
     */
    getCollectionInfo() {
        this.collectionService.viewCollection({
            collection_id: this.collectionID
        }).subscribe(result => {
            this.collectionInfo = result.result;
            this.collection_banner = this.collectionInfo.banner;
            this.collection_logo = this.collectionInfo.image;
            this.collection_name = this.collectionInfo.name;
            this.collection_desc = this.collectionInfo.description;
            this.ownCollection = (this.collectionInfo.author_id == this.currentUser.user_id) ? true : false;
            this.page = 1;
            this.getItemList();
        });
    }
}
ViewcollectionComponent.ɵfac = function ViewcollectionComponent_Factory(t) { return new (t || ViewcollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
ViewcollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewcollectionComponent, selectors: [["app-viewcollection"]], viewQuery: function ViewcollectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmationModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmationItemModal = _t.first);
    } }, decls: 64, vars: 11, consts: [[1, "appContainer"], [1, "collectionHeader"], [1, "collectionCover"], [3, "src"], [1, "collectionLogo"], [1, "collectionLogoInner"], ["class", "settingsAction dropdown dropright", "dropdown", "", 4, "ngIf"], ["class", "collectionSubHeader", 4, "ngIf"], [1, "container"], [1, "card-body-filter"], [1, "row"], [1, "col-sm-12"], ["type", "text", "id", "name", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body-filter-action"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-search"], [1, "fa", "fa-refresh"], ["infiniteScroll", "", 1, "collectionMainContainer", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [4, "ngIf"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["confirmationModal", "bs-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["confirmationItemModal", "bs-modal"], ["dropdown", "", 1, "settingsAction", "dropdown", "dropright"], ["id", "collectionlink-dropdown", "dropdownToggle", "", "aria-controls", "collection-dropdown", "data-offset", "10,20", 1, "btn", "btn-secondary"], [1, "icon-settings"], ["id", "collection-dropdown", "class", "dropdown-menu dropdown-menu-right", "aria-labelledby", "collectionlink-dropdown", 4, "dropdownMenu"], ["id", "collection-dropdown", "aria-labelledby", "collectionlink-dropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "routerLink"], ["class", "dropdown-item", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "collectionSubHeader"], [1, "collection_stats"], ["msg", "There is no data to display here"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"]], template: function ViewcollectionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewcollectionComponent_div_7_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewcollectionComponent_div_8_Template, 22, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewcollectionComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchInput = $event; })("keyup.enter", function ViewcollectionComponent_Template_input_keyup_enter_14_listener() { return ctx.searchAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_16_listener() { return ctx.searchAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_19_listener() { return ctx.resetAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function ViewcollectionComponent_Template_div_scrolled_22_listener() { return ctx.onNextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ViewcollectionComponent_app_itemskeleton_24_Template, 1, 0, "app-itemskeleton", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewcollectionComponent_app_nodata_25_Template, 1, 0, "app-nodata", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewcollectionComponent_div_26_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Are you sure to delete this collection?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r5.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_43_listener() { return ctx.deleteAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Are you sure to delete this item?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return _r6.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewcollectionComponent_Template_button_click_61_listener() { return ctx.itemDeleteAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ViewcollectionComponent_app_loader_63_Template, 1, 0, "app-loader", 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/banner/" + ctx.collection_banner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/collection/logo/" + ctx.collection_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownCollection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collectionInfo != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownMenuDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_12__["ItemskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_13__["NodataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"], _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"]], styles: [".appContainer[_ngcontent-%COMP%] {margin:58px 0 0;}\n.collectionCover[_ngcontent-%COMP%] {height: 250px;}\n.collectionCover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%; -o-object-fit: cover; object-fit: cover; height: 250px;}\n.collectionHeader[_ngcontent-%COMP%] {position: relative; padding-bottom: 80px;}\n.collectionLogo[_ngcontent-%COMP%] {position: absolute; bottom: 18px; left: 0; right: 0;}\n.collectionLogoInner[_ngcontent-%COMP%] {width: 125px; height: 125px; margin: 0 auto;}\n.collectionLogoInner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 125px; height: 125px; border-radius: 50%; -o-object-fit: cover; object-fit: cover;}\n.collectionSubHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .collectionSubHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {margin: 0px; padding:0 20px; text-align: center;}\n.collection_stats[_ngcontent-%COMP%] {margin: 15px auto; width: 364px; border: 1px solid #e7e7e7;}\n.collection_stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style: none;}\n.collection_stats[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {margin: 0; padding: 0;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block; width: 120px; border-left: 1px solid #e7e7e7; padding:15px 0; text-align: center;}\n.collection_stats[_ngcontent-%COMP%]   li.first[_ngcontent-%COMP%] {border:0 none}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {display: block; margin: 0;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {color: #444; font-size: 18px; font-weight: 600;}\n.collection_stats[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {font-size: 14px; color: #999;}\n.settingsAction[_ngcontent-%COMP%] {position: absolute; right:15px; top:265px; z-index: 2;}\n.collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n.collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; height: 240px;}\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: left; margin: 15px 15px 0;}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: left; margin: 0 15px 15px;}\n.card-body-filter[_ngcontent-%COMP%] {display: flex; flex-direction: row; margin-top: 25px;}\n.card-body-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {flex: 1;}\n.card-body-filter-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin-left: 10px; font-size: 14px; height: 35px;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdjb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxlQUFlLENBQUM7QUFDL0Isa0JBQWtCLGFBQWEsQ0FBQztBQUNoQyxzQkFBc0IsV0FBVyxFQUFFLG9CQUFpQixFQUFqQixpQkFBaUIsRUFBRSxhQUFhLENBQUM7QUFDcEUsbUJBQW1CLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO0FBQzVELGlCQUFpQixrQkFBa0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztBQUNyRSxzQkFBc0IsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7QUFDbEUsMEJBQTBCLFlBQVksRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixDQUFDO0FBQzdGLGlEQUFpRCxXQUFXLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0FBQ2pHLG1CQUFtQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUseUJBQXlCLENBQUM7QUFDOUUsNENBQTRDLGdCQUFnQixDQUFDO0FBQzdELHNCQUFzQixTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzVDLHNCQUFzQixxQkFBcUIsRUFBRSxZQUFZLEVBQUUsOEJBQThCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0FBQzlILDRCQUE0QixhQUFhO0FBQ3pDLHVEQUF1RCxjQUFjLEVBQUUsU0FBUyxDQUFDO0FBQ2pGLDJCQUEyQixXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0FBQzFFLDRCQUE0QixlQUFlLEVBQUUsV0FBVyxDQUFDO0FBQ3pELGlCQUFpQixrQkFBa0IsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUN2RSwwQkFBMEIsZUFBZSxDQUFDO0FBRTFDLGlCQUFpQix3QkFBd0IsRUFBRSxlQUFlLENBQUM7QUFDM0Qsb0JBQW9CLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUN0RCxzQkFBc0IsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDNUQsc0JBQXNCLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBRTVELG1CQUFtQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7QUFDeEUsd0JBQXdCLE9BQU8sQ0FBQztBQUNoQyxpQ0FBaUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztBQUVsRjtJQUNJLG9CQUFvQixhQUFhLENBQUM7QUFDdEM7QUFDQTtJQUNJLG9CQUFvQixhQUFhLENBQUM7QUFDdEM7QUFDQTtJQUNJLGVBQWUsZUFBZSxDQUFDO0FBQ25DIiwiZmlsZSI6InZpZXdjb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwQ29udGFpbmVyIHttYXJnaW46NThweCAwIDA7fVxuLmNvbGxlY3Rpb25Db3ZlciB7aGVpZ2h0OiAyNTBweDt9XG4uY29sbGVjdGlvbkNvdmVyIGltZyB7d2lkdGg6IDEwMCU7IG9iamVjdC1maXQ6IGNvdmVyOyBoZWlnaHQ6IDI1MHB4O31cbi5jb2xsZWN0aW9uSGVhZGVyIHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiA4MHB4O31cbi5jb2xsZWN0aW9uTG9nbyB7cG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE4cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwO31cbi5jb2xsZWN0aW9uTG9nb0lubmVyIHt3aWR0aDogMTI1cHg7IGhlaWdodDogMTI1cHg7IG1hcmdpbjogMCBhdXRvO31cbi5jb2xsZWN0aW9uTG9nb0lubmVyIGltZyB7d2lkdGg6IDEyNXB4OyBoZWlnaHQ6IDEyNXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG9iamVjdC1maXQ6IGNvdmVyO31cbi5jb2xsZWN0aW9uU3ViSGVhZGVyIGgyLCAuY29sbGVjdGlvblN1YkhlYWRlciBwIHttYXJnaW46IDBweDsgcGFkZGluZzowIDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4uY29sbGVjdGlvbl9zdGF0cyB7bWFyZ2luOiAxNXB4IGF1dG87IHdpZHRoOiAzNjRweDsgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNzt9XG4uY29sbGVjdGlvbl9zdGF0cyB1bCwgLmNvbGxlY3Rpb25fc3RhdHMgbGkge2xpc3Qtc3R5bGU6IG5vbmU7fVxuLmNvbGxlY3Rpb25fc3RhdHMgdWwge21hcmdpbjogMDsgcGFkZGluZzogMDt9XG4uY29sbGVjdGlvbl9zdGF0cyBsaSB7ZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMTIwcHg7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U3ZTdlNzsgcGFkZGluZzoxNXB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4uY29sbGVjdGlvbl9zdGF0cyBsaS5maXJzdCB7Ym9yZGVyOjAgbm9uZX1cbi5jb2xsZWN0aW9uX3N0YXRzIGxpIHNwYW4sIC5jb2xsZWN0aW9uX3N0YXRzIGxpIGxhYmVsIHtkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwO31cbi5jb2xsZWN0aW9uX3N0YXRzIGxpIHNwYW4ge2NvbG9yOiAjNDQ0OyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7fVxuLmNvbGxlY3Rpb25fc3RhdHMgbGkgbGFiZWwge2ZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM5OTk7fVxuLnNldHRpbmdzQWN0aW9uIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjE1cHg7IHRvcDoyNjVweDsgei1pbmRleDogMjt9XG4uY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbjozMHB4IDAgMDt9XG5cbi5jb2xsZWN0aW9uSXRlbSB7Ym9yZGVyOjFweCBzb2xpZCAjZTdlN2U3OyBtYXJnaW46MCAwIDI1cHg7fVxuLmNvbGxlY3Rpb25JdGVtSW1nIHtwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMjQwcHg7fVxuLmNvbGxlY3Rpb25JdGVtVGl0bGUge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMTVweCAxNXB4IDA7fVxuLmNvbGxlY3Rpb25JdGVtQ291bnQge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMCAxNXB4IDE1cHg7fVxuXG4uY2FyZC1ib2R5LWZpbHRlciB7ZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgbWFyZ2luLXRvcDogMjVweDt9XG4uY2FyZC1ib2R5LWZpbHRlciAucm93IHtmbGV4OiAxO31cbi5jYXJkLWJvZHktZmlsdGVyLWFjdGlvbiBidXR0b24ge21hcmdpbi1sZWZ0OiAxMHB4OyBmb250LXNpemU6IDE0cHg7IGhlaWdodDogMzVweDt9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZyB7aGVpZ2h0OiAyMDBweDt9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZyB7aGVpZ2h0OiAxNjBweDt9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46NzNweCAwIDA7fVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewcollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewcollection',
                templateUrl: './viewcollection.component.html',
                styleUrls: ['./viewcollection.component.css']
            }]
    }], function () { return [{ type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { confirmationModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmationModal']
        }], confirmationItemModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmationItemModal']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=components-collections-collections-module-es2015.js.map