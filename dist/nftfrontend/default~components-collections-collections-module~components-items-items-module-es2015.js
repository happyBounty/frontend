(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-collections-collections-module~components-items-items-module"],{

/***/ "IgIN":
/*!*****************************************************************!*\
  !*** ./src/app/UI/skeleton/gridskeleton/gridskeleton.module.ts ***!
  \*****************************************************************/
/*! exports provided: GridskeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridskeletonModule", function() { return GridskeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _gridskeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gridskeleton.component */ "swHO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/*
Project : Cryptotrades
FileName :  gridskeleton.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load component and module related to grid skeleton
*/







class GridskeletonModule {
}
GridskeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridskeletonModule });
GridskeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridskeletonModule_Factory(t) { return new (t || GridskeletonModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridskeletonModule, { declarations: [_gridskeleton_component__WEBPACK_IMPORTED_MODULE_2__["GridskeletonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]], exports: [_gridskeleton_component__WEBPACK_IMPORTED_MODULE_2__["GridskeletonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridskeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]
                ],
                exports: [_gridskeleton_component__WEBPACK_IMPORTED_MODULE_2__["GridskeletonComponent"]],
                declarations: [_gridskeleton_component__WEBPACK_IMPORTED_MODULE_2__["GridskeletonComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "K3ix":
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \***************************************************************************************/
/*! exports provided: BsModalRef, BsModalService, MODAL_CONFIG_DEFAULT_OVERRIDE, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_CONFIG_DEFAULT_OVERRIDE", function() { return MODAL_CONFIG_DEFAULT_OVERRIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "3XJ7");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "WyaX");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
// tslint:disable-next-line:no-any



const _c0 = ["*"];
class BsModalRef {
    constructor() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
}
BsModalRef.ɵfac = function BsModalRef_Factory(t) { return new (t || BsModalRef)(); };
BsModalRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalRef, factory: BsModalRef.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBackdropOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ModalOptions {
}
ModalOptions.ɵfac = function ModalOptions_Factory(t) { return new (t || ModalOptions)(); };
ModalOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalOptions, factory: ModalOptions.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
if (false) {}
/** @type {?} */
const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
const MODAL_CONFIG_DEFAULT_OVERRIDE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('override-default-config');
/** @type {?} */
const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
    BACK: 'browser-back-navigation-clicked'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }), this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop(event) {
        /** @type {?} */
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @return {?}
     */
    onPopState() {
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACK);
        this.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.bsModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            this.bsModalService.hide(this.config.id);
            this.isModalHiding = false;
        }), this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalContainerComponent, selectors: [["modal-container"]], hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"], hostVars: 3, hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("mouseup", function ModalContainerComponent_mouseup_HostBindingHandler($event) { return ctx.onClickStop($event); })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() { return ctx.onPopState(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    } }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["role", "document"], [1, "modal-content"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    } }, encapsulation: 2 });
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ModalContainerComponent.propDecorators = {
    onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
    onPopState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:popstate',] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true',
                    '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                    '[attr.aria-describedby]': 'config.ariaDescribedby'
                }
            }]
    }], function () { return [{ type: ModalOptions }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { 
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:popstate']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.esc', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
        // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) { return new (t || ModalBackdropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ModalBackdropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBackdropComponent, selectors: [["bs-modal-backdrop"]], hostAttrs: [1, "modal-backdrop"], decls: 0, vars: 0, template: function ModalBackdropComponent_Template(rf, ctx) { }, encapsulation: 2 });
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBackdropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                host: { class: CLASS_NAME.BACKDROP }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRANSITION_DURATION = 300;
/** @type {?} */
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     * @param {?} modalDefaultOption
     */
    constructor(_element, _viewContainerRef, _renderer, clf, modalDefaultOption) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.clickStartedInContent = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
        this._config = modalDefaultOption || modalConfigDefaults;
    }
    /**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop(event) {
        /** @type {?} */
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._config = this._config || this.getConfig();
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._config.show) {
                this.show();
            }
        }), 0);
    }
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            this.showElement();
        }));
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout((/**
             * @return {?}
             */
            () => this.hideModal()), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, this._config, config);
    }
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        /** @type {?} */
        const transitionComplete = (/**
         * @return {?}
         */
        () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        });
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            if (!this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        }));
    }
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            const callbackRemove = (/**
             * @return {?}
             */
            () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            });
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    removeBackdrop() {
        this._backdrop.hide();
    }
    /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        /** @type {?} */
        const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @protected
     * @return {?}
     */
    setScrollbar() {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    resetScrollbar() {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) { return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8)); };
ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ModalDirective, selectors: [["", "bsModal", ""]], hostBindings: function ModalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ModalDirective_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("mouseup", function ModalDirective_mouseup_HostBindingHandler($event) { return ctx.onClickStop($event); })("keydown.esc", function ModalDirective_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); });
    } }, inputs: { config: "config" }, outputs: { onShow: "onShow", onShown: "onShown", onHide: "onHide", onHidden: "onHidden" }, exportAs: ["bs-modal"] });
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] },
    { type: ModalOptions, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
];
ModalDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
    onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bsModal]',
                exportAs: 'bs-modal'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }, { type: ModalOptions, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
            }] }]; }, { onShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onClickStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup', ['$event']]
        }], 
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.esc', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     * @param {?} modalDefaultOption
     */
    constructor(rendererFactory, clf, modalDefaultOption) {
        this.clf = clf;
        this.modalDefaultOption = modalDefaultOption;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = null;
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
        this.config = modalDefaultOption ?
            (Object.assign({}, modalConfigDefaults, modalDefaultOption)) :
            modalConfigDefaults;
    }
    /**
     * Shows a modal
     * @template T
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    show(
    // tslint:disable-next-line:no-any
    content, config) {
        this.modalsCount++;
        this._createLoaders();
        /** @type {?} */
        const id = (config === null || config === void 0 ? void 0 : config.id) || (new Date()).getUTCMilliseconds();
        this.config = this.modalDefaultOption ?
            Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) :
            Object.assign({}, modalConfigDefaults, config);
        this.config.id = id;
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    hide(id) {
        if (this.modalsCount === 1 || id == null) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(id);
            this.removeLoaders(id);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        var _a;
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            for (const provider of this.config.providers) {
                modalLoader.provide(provider);
            }
        }
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body');
        bsModalRef.hide = (/**
         * @return {?}
         */
        () => modalContainerRef.instance.hide());
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        });
        bsModalRef.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        bsModalRef.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
        this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
        // call 'show' method after assign setClass in bsModalRef.
        // it makes modal component's bsModalRef available to call setClass method
        modalContainerRef.show({
            content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this,
            id: this.config.id
        });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
        return bsModalRef;
    }
    /**
     * @param {?=} id
     * @return {?}
     */
    _hideModal(id) {
        if (id != null) {
            /** @type {?} */
            const indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            loader => loader.instance.config.id === id));
            /** @type {?} */
            const modalLoader = this.loaders[indexToRemove];
            if (modalLoader) {
                modalLoader.hide(id);
            }
        }
        else {
            this.loaders.forEach((/**
             * @param {?} loader
             * @return {?}
             */
            (loader) => {
                loader.hide(loader.instance.config.id);
            }));
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?=} id
     * @return {?}
     */
    removeLoaders(id) {
        if (id != null) {
            /** @type {?} */
            const indexToRemove = this.loaders.findIndex((/**
             * @param {?} loader
             * @return {?}
             */
            loader => loader.instance.config.id === id));
            if (indexToRemove >= 0) {
                this.loaders.splice(indexToRemove, 1);
                this.loaders.forEach((/**
                 * @param {?} loader
                 * @param {?} i
                 * @return {?}
                 */
                (loader, i) => {
                    loader.instance.level = i + 1;
                }));
            }
        }
        else {
            this.loaders.splice(0, this.loaders.length);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            to.emit(this.lastDismissReason || data);
        }));
    }
}
BsModalService.ɵfac = function BsModalService_Factory(t) { return new (t || BsModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MODAL_CONFIG_DEFAULT_OVERRIDE, 8)); };
BsModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BsModalService, factory: BsModalService.ɵfac });
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] },
    { type: ModalOptions, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODAL_CONFIG_DEFAULT_OVERRIDE,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BsModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }, { type: ModalOptions, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
ModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent], exports: [ModalBackdropComponent, ModalDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-modal.js.map

/***/ }),

/***/ "swHO":
/*!********************************************************************!*\
  !*** ./src/app/UI/skeleton/gridskeleton/gridskeleton.component.ts ***!
  \********************************************************************/
/*! exports provided: GridskeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridskeletonComponent", function() { return GridskeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/*
Project : Cryptotrades
FileName :  gridskeleton.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show grid skeleton
*/




const _c0 = function () { return { "height": "100%", "margin-top.px": 0, "margin-bottom.px": 0, "width": "100%", "background-color": "#c3c3c3", "border-radius": 0 }; };
const _c1 = function () { return { "height.px": 12, "margin-top.px": 0, "margin-bottom.px": 0, "width": "70%", "background-color": "#c3c3c3" }; };
const _c2 = function () { return { "height.px": 12, "margin-top.px": 0, "margin-bottom.px": 0, "width": "50%", "background-color": "#c3c3c3" }; };
function GridskeletonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
} }
class GridskeletonComponent {
    constructor() {
        this.collections = [1, 2, 3, 4];
    }
    ngOnInit() {
    }
}
GridskeletonComponent.ɵfac = function GridskeletonComponent_Factory(t) { return new (t || GridskeletonComponent)(); };
GridskeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridskeletonComponent, selectors: [["app-gridskeleton"]], decls: 2, vars: 1, consts: [[1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "collectionItem"], [1, "collectionItemImg"], ["count", "1", 3, "theme"], [1, "collectionItemTitle"], [1, "collectionItemCount"]], template: function GridskeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridskeletonComponent_div_1_Template, 8, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"]], styles: [".collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; height: 240px;}\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: left; margin: 15px 15px 0;}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: left; margin: 0 15px 15px;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWRza2VsZXRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQix3QkFBd0IsRUFBRSxlQUFlLENBQUM7QUFDM0Qsb0JBQW9CLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUN0RCxzQkFBc0IsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDNUQsc0JBQXNCLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQzVEO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QztBQUNBO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QyIsImZpbGUiOiJncmlkc2tlbGV0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWN0aW9uSXRlbSB7Ym9yZGVyOjFweCBzb2xpZCAjZTdlN2U3OyBtYXJnaW46MCAwIDI1cHg7fVxuLmNvbGxlY3Rpb25JdGVtSW1nIHtwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMjQwcHg7fVxuLmNvbGxlY3Rpb25JdGVtVGl0bGUge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMTVweCAxNXB4IDA7fVxuLmNvbGxlY3Rpb25JdGVtQ291bnQge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMCAxNXB4IDE1cHg7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDIwMHB4O31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDE2MHB4O31cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridskeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gridskeleton',
                templateUrl: './gridskeleton.component.html',
                styleUrls: ['./gridskeleton.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~components-collections-collections-module~components-items-items-module-es2015.js.map