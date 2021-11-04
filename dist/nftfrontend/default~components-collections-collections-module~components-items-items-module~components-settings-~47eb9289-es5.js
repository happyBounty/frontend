(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-collections-collections-module~components-items-items-module~components-settings-~47eb9289"], {
    /***/
    "0IaG":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js ***!
      \************************************************************************/

    /*! exports provided: MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MAT_DIALOG_SCROLL_STRATEGY_FACTORY, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle, _MatDialogBase, _MatDialogContainerBase, _closeDialogVia, matDialogAnimations, throwMatDialogContentAlreadyAttachedError */

    /***/
    function IaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA", function () {
        return MAT_DIALOG_DATA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS", function () {
        return MAT_DIALOG_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
        return MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialog", function () {
        return MatDialog;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogActions", function () {
        return MatDialogActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogClose", function () {
        return MatDialogClose;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogConfig", function () {
        return MatDialogConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContainer", function () {
        return MatDialogContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogContent", function () {
        return MatDialogContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogModule", function () {
        return MatDialogModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogRef", function () {
        return MatDialogRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatDialogTitle", function () {
        return MatDialogTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogBase", function () {
        return _MatDialogBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatDialogContainerBase", function () {
        return _MatDialogContainerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_closeDialogVia", function () {
        return _closeDialogVia;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matDialogAnimations", function () {
        return matDialogAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throwMatDialogContentAlreadyAttachedError", function () {
        return throwMatDialogContentAlreadyAttachedError;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for opening a modal dialog with the MatDialog service.
       */


      function MatDialogContainer_ng_template_0_Template(rf, ctx) {}

      var MatDialogConfig = function MatDialogConfig() {
        _classCallCheck(this, MatDialogConfig);

        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Custom class for the overlay pane. */

        this.panelClass = '';
        /** Whether the dialog has a backdrop. */

        this.hasBackdrop = true;
        /** Custom class for the backdrop. */

        this.backdropClass = '';
        /** Whether the user can use escape or clicking on the backdrop to close the modal. */

        this.disableClose = false;
        /** Width of the dialog. */

        this.width = '';
        /** Height of the dialog. */

        this.height = '';
        /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */

        this.maxWidth = '80vw';
        /** Data being injected into the child component. */

        this.data = null;
        /** ID of the element that describes the dialog. */

        this.ariaDescribedBy = null;
        /** ID of the element that labels the dialog. */

        this.ariaLabelledBy = null;
        /** Aria label to assign to the dialog element. */

        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */

        this.autoFocus = true;
        /**
         * Whether the dialog should restore focus to the
         * previously-focused element, after it's closed.
         */

        this.restoreFocus = true;
        /**
         * Whether the dialog should close when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.closeOnNavigation = true; // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatDialog.
       * @docs-private
       */


      var matDialogAnimations = {
        /** Animation that is applied on the dialog container by default. */
        dialogContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('dialogContainer', [// Note: The `enter` animation transitions to `transform: none`, because for some reason
        // specifying the transform explicitly, causes IE both to blur the dialog content and
        // decimate the animation performance. Leaving it as `none` solves both issues.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0,
          transform: 'scale(0.7)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          transform: 'none',
          opacity: 1
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
          opacity: 0
        })))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception for the case when a ComponentPortal is
       * attached to a DomPortalOutlet without an origin.
       * @docs-private
       */

      function throwMatDialogContentAlreadyAttachedError() {
        throw Error('Attempting to attach dialog content after content is already attached');
      }
      /**
       * Base class for the `MatDialogContainer`. The base class does not implement
       * animations as these are left to implementers of the dialog container.
       */


      var _MatDialogContainerBase = /*#__PURE__*/function (_angular_cdk_portal__) {
        _inherits(_MatDialogContainerBase, _angular_cdk_portal__);

        var _super = _createSuper(_MatDialogContainerBase);

        function _MatDialogContainerBase(_elementRef, _focusTrapFactory, _changeDetectorRef, _document,
        /** The dialog configuration. */
        _config, _focusMonitor) {
          var _this;

          _classCallCheck(this, _MatDialogContainerBase);

          _this = _super.call(this);
          _this._elementRef = _elementRef;
          _this._focusTrapFactory = _focusTrapFactory;
          _this._changeDetectorRef = _changeDetectorRef;
          _this._config = _config;
          _this._focusMonitor = _focusMonitor;
          /** Emits when an animation state changes. */

          _this._animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Element that was focused before the dialog was opened. Save this to restore upon close. */

          _this._elementFocusedBeforeDialogWasOpened = null;
          /**
           * Type of interaction that led to the dialog being closed. This is used to determine
           * whether the focus style will be applied when returning focus to its original location
           * after the dialog is closed.
           */

          _this._closeInteractionType = null;
          /**
           * Attaches a DOM portal to the dialog container.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this.attachDomPortal = function (portal) {
            if (_this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return _this._portalOutlet.attachDomPortal(portal);
          };

          _this._ariaLabelledBy = _config.ariaLabelledBy || null;
          _this._document = _document;
          return _this;
        }
        /** Initializes the dialog container with the attached content. */


        _createClass(_MatDialogContainerBase, [{
          key: "_initializeWithAttachedContent",
          value: function _initializeWithAttachedContent() {
            this._setupFocusTrap(); // Save the previously focused element. This element will be re-focused
            // when the dialog closes.


            this._capturePreviouslyFocusedElement(); // Move focus onto the dialog immediately in order to prevent the user
            // from accidentally opening multiple dialogs at the same time.


            this._focusDialogContainer();
          }
          /**
           * Attach a ComponentPortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachComponentPortal(portal);
          }
          /**
           * Attach a TemplatePortal as content to this dialog container.
           * @param portal Portal to be attached as the dialog content.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwMatDialogContentAlreadyAttachedError();
            }

            return this._portalOutlet.attachTemplatePortal(portal);
          }
          /** Moves focus back into the dialog if it was moved out. */

        }, {
          key: "_recaptureFocus",
          value: function _recaptureFocus() {
            if (!this._containsFocus()) {
              var focusContainer = !this._config.autoFocus || !this._focusTrap.focusInitialElement();

              if (focusContainer) {
                this._elementRef.nativeElement.focus();
              }
            }
          }
          /** Moves the focus inside the focus trap. */

        }, {
          key: "_trapFocus",
          value: function _trapFocus() {
            // If we were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
              this._focusTrap.focusInitialElementWhenReady();
            } else if (!this._containsFocus()) {
              // Otherwise ensure that focus is on the dialog container. It's possible that a different
              // component tried to move focus while the open animation was running. See:
              // https://github.com/angular/components/issues/16215. Note that we only want to do this
              // if the focus isn't inside the dialog already, because it's possible that the consumer
              // turned off `autoFocus` in order to move focus themselves.
              this._elementRef.nativeElement.focus();
            }
          }
          /** Restores focus to the element that was focused before the dialog opened. */

        }, {
          key: "_restoreFocus",
          value: function _restoreFocus() {
            var previousElement = this._elementFocusedBeforeDialogWasOpened; // We need the extra check, because IE can set the `activeElement` to null in some cases.

            if (this._config.restoreFocus && previousElement && typeof previousElement.focus === 'function') {
              var activeElement = this._getActiveElement();

              var element = this._elementRef.nativeElement; // Make sure that focus is still inside the dialog or is on the body (usually because a
              // non-focusable element like the backdrop was clicked) before moving it. It's possible that
              // the consumer moved it themselves before the animation was done, in which case we shouldn't
              // do anything.

              if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
                if (this._focusMonitor) {
                  this._focusMonitor.focusVia(previousElement, this._closeInteractionType);

                  this._closeInteractionType = null;
                } else {
                  previousElement.focus();
                }
              }
            }

            if (this._focusTrap) {
              this._focusTrap.destroy();
            }
          }
          /** Sets up the focus trap. */

        }, {
          key: "_setupFocusTrap",
          value: function _setupFocusTrap() {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          }
          /** Captures the element that was focused before the dialog was opened. */

        }, {
          key: "_capturePreviouslyFocusedElement",
          value: function _capturePreviouslyFocusedElement() {
            if (this._document) {
              this._elementFocusedBeforeDialogWasOpened = this._getActiveElement();
            }
          }
          /** Focuses the dialog container. */

        }, {
          key: "_focusDialogContainer",
          value: function _focusDialogContainer() {
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
              this._elementRef.nativeElement.focus();
            }
          }
          /** Returns whether focus is inside the dialog. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            var element = this._elementRef.nativeElement;

            var activeElement = this._getActiveElement();

            return element === activeElement || element.contains(activeElement);
          }
          /** Gets the currently-focused element on the page. */

        }, {
          key: "_getActiveElement",
          value: function _getActiveElement() {
            var _a; // If the `activeElement` is inside a shadow root, `document.activeElement` will
            // point to the shadow root so we have to descend into it ourselves.


            var activeElement = this._document.activeElement;
            return ((_a = activeElement === null || activeElement === void 0 ? void 0 : activeElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) || activeElement;
          }
        }]);

        return _MatDialogContainerBase;
      }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

      _MatDialogContainerBase.ɵfac = function _MatDialogContainerBase_Factory(t) {
        return new (t || _MatDialogContainerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]));
      };

      _MatDialogContainerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogContainerBase,
        viewQuery: function _MatDialogContainerBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatDialogContainerBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: MatDialogConfig
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
        }];
      };

      _MatDialogContainerBase.propDecorators = {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
            "static": true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogContainerBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }, {
            type: MatDialogConfig
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"]
          }];
        }, {
          _portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
              "static": true
            }]
          }]
        });
      })();
      /**
       * Internal component that wraps user-provided dialog content.
       * Animation is based on https://material.io/guidelines/motion/choreography.html.
       * @docs-private
       */


      var MatDialogContainer = /*#__PURE__*/function (_MatDialogContainerBa) {
        _inherits(MatDialogContainer, _MatDialogContainerBa);

        var _super2 = _createSuper(MatDialogContainer);

        function MatDialogContainer() {
          var _this2;

          _classCallCheck(this, MatDialogContainer);

          _this2 = _super2.apply(this, arguments);
          /** State of the dialog animation. */

          _this2._state = 'enter';
          return _this2;
        }
        /** Callback, invoked whenever an animation on the host completes. */


        _createClass(MatDialogContainer, [{
          key: "_onAnimationDone",
          value: function _onAnimationDone(_ref) {
            var toState = _ref.toState,
                totalTime = _ref.totalTime;

            if (toState === 'enter') {
              this._trapFocus();

              this._animationStateChanged.next({
                state: 'opened',
                totalTime: totalTime
              });
            } else if (toState === 'exit') {
              this._restoreFocus();

              this._animationStateChanged.next({
                state: 'closed',
                totalTime: totalTime
              });
            }
          }
          /** Callback, invoked when an animation on the host starts. */

        }, {
          key: "_onAnimationStart",
          value: function _onAnimationStart(_ref2) {
            var toState = _ref2.toState,
                totalTime = _ref2.totalTime;

            if (toState === 'enter') {
              this._animationStateChanged.next({
                state: 'opening',
                totalTime: totalTime
              });
            } else if (toState === 'exit' || toState === 'void') {
              this._animationStateChanged.next({
                state: 'closing',
                totalTime: totalTime
              });
            }
          }
          /** Starts the dialog exit animation. */

        }, {
          key: "_startExitAnimation",
          value: function _startExitAnimation() {
            this._state = 'exit'; // Mark the container for check so it can react if the
            // view container is using OnPush change detection.

            this._changeDetectorRef.markForCheck();
          }
        }]);

        return MatDialogContainer;
      }(_MatDialogContainerBase);

      MatDialogContainer.ɵfac = function MatDialogContainer_Factory(t) {
        return ɵMatDialogContainer_BaseFactory(t || MatDialogContainer);
      };

      MatDialogContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatDialogContainer,
        selectors: [["mat-dialog-container"]],
        hostAttrs: ["tabindex", "-1", "aria-modal", "true", 1, "mat-dialog-container"],
        hostVars: 6,
        hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@dialogContainer.start", function MatDialogContainer_animation_dialogContainer_start_HostBindingHandler($event) {
              return ctx._onAnimationStart($event);
            })("@dialogContainer.done", function MatDialogContainer_animation_dialogContainer_done_HostBindingHandler($event) {
              return ctx._onAnimationDone($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledBy)("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@dialogContainer", ctx._state);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatDialogContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MatDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
        styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [matDialogAnimations.dialogContainer]
        }
      });

      var ɵMatDialogContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatDialogContainer);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-dialog-container',
            template: "<ng-template cdkPortalOutlet></ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
            animations: [matDialogAnimations.dialogContainer],
            host: {
              'class': 'mat-dialog-container',
              'tabindex': '-1',
              'aria-modal': 'true',
              '[id]': '_id',
              '[attr.role]': '_config.role',
              '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',
              '[attr.aria-label]': '_config.ariaLabel',
              '[attr.aria-describedby]': '_config.ariaDescribedBy || null',
              '[@dialogContainer]': '_state',
              '(@dialogContainer.start)': '_onAnimationStart($event)',
              '(@dialogContainer.done)': '_onAnimationDone($event)'
            },
            styles: [".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): resizing
      // Counter for unique dialog ids.


      var uniqueId = 0;
      /**
       * Reference to a dialog opened via the MatDialog service.
       */

      var MatDialogRef = /*#__PURE__*/function () {
        function MatDialogRef(_overlayRef, _containerInstance) {
          var _this3 = this;

          var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mat-dialog-".concat(uniqueId++);

          _classCallCheck(this, MatDialogRef);

          this._overlayRef = _overlayRef;
          this._containerInstance = _containerInstance;
          this.id = id;
          /** Whether the user is allowed to close the dialog. */

          this.disableClose = this._containerInstance._config.disableClose;
          /** Subject for notifying the user that the dialog has finished opening. */

          this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Subject for notifying the user that the dialog has started closing. */

          this._beforeClosed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Current state of the dialog. */

          this._state = 0
          /* OPEN */
          ; // Pass the id along to the container.

          _containerInstance._id = id; // Emit when opening animation completes

          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'opened';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            _this3._afterOpened.next();

            _this3._afterOpened.complete();
          }); // Dispose overlay when closing animation is complete


          _containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.state === 'closed';
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
            clearTimeout(_this3._closeFallbackTimeout);

            _this3._finishDialogClose();
          });

          _overlayRef.detachments().subscribe(function () {
            _this3._beforeClosed.next(_this3._result);

            _this3._beforeClosed.complete();

            _this3._afterClosed.next(_this3._result);

            _this3._afterClosed.complete();

            _this3.componentInstance = null;

            _this3._overlayRef.dispose();
          });

          _overlayRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !_this3.disableClose && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event);
          })).subscribe(function (event) {
            event.preventDefault();

            _closeDialogVia(_this3, 'keyboard');
          });

          _overlayRef.backdropClick().subscribe(function () {
            if (_this3.disableClose) {
              _this3._containerInstance._recaptureFocus();
            } else {
              _closeDialogVia(_this3, 'mouse');
            }
          });
        }
        /**
         * Close the dialog.
         * @param dialogResult Optional result to return to the dialog opener.
         */


        _createClass(MatDialogRef, [{
          key: "close",
          value: function close(dialogResult) {
            var _this4 = this;

            this._result = dialogResult; // Transition the backdrop in parallel to the dialog.

            this._containerInstance._animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
              return event.state === 'closing';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (event) {
              _this4._beforeClosed.next(dialogResult);

              _this4._beforeClosed.complete();

              _this4._overlayRef.detachBackdrop(); // The logic that disposes of the overlay depends on the exit animation completing, however
              // it isn't guaranteed if the parent view is destroyed while it's running. Add a fallback
              // timeout which will clean everything up if the animation hasn't fired within the specified
              // amount of time plus 100ms. We don't need to run this outside the NgZone, because for the
              // vast majority of cases the timeout will have been cleared before it has the chance to fire.


              _this4._closeFallbackTimeout = setTimeout(function () {
                return _this4._finishDialogClose();
              }, event.totalTime + 100);
            });

            this._state = 1
            /* CLOSING */
            ;

            this._containerInstance._startExitAnimation();
          }
          /**
           * Gets an observable that is notified when the dialog is finished opening.
           */

        }, {
          key: "afterOpened",
          value: function afterOpened() {
            return this._afterOpened;
          }
          /**
           * Gets an observable that is notified when the dialog is finished closing.
           */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed;
          }
          /**
           * Gets an observable that is notified when the dialog has started closing.
           */

        }, {
          key: "beforeClosed",
          value: function beforeClosed() {
            return this._beforeClosed;
          }
          /**
           * Gets an observable that emits when the overlay's backdrop has been clicked.
           */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._overlayRef.backdropClick();
          }
          /**
           * Gets an observable that emits when keydown events are targeted on the overlay.
           */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._overlayRef.keydownEvents();
          }
          /**
           * Updates the dialog's position.
           * @param position New dialog position.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition(position) {
            var strategy = this._getPositionStrategy();

            if (position && (position.left || position.right)) {
              position.left ? strategy.left(position.left) : strategy.right(position.right);
            } else {
              strategy.centerHorizontally();
            }

            if (position && (position.top || position.bottom)) {
              position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
            } else {
              strategy.centerVertically();
            }

            this._overlayRef.updatePosition();

            return this;
          }
          /**
           * Updates the dialog's width and height.
           * @param width New width of the dialog.
           * @param height New height of the dialog.
           */

        }, {
          key: "updateSize",
          value: function updateSize() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            this._overlayRef.updateSize({
              width: width,
              height: height
            });

            this._overlayRef.updatePosition();

            return this;
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            this._overlayRef.addPanelClass(classes);

            return this;
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            this._overlayRef.removePanelClass(classes);

            return this;
          }
          /** Gets the current state of the dialog's lifecycle. */

        }, {
          key: "getState",
          value: function getState() {
            return this._state;
          }
          /**
           * Finishes the dialog close by updating the state of the dialog
           * and disposing the overlay.
           */

        }, {
          key: "_finishDialogClose",
          value: function _finishDialogClose() {
            this._state = 2
            /* CLOSED */
            ;

            this._overlayRef.dispose();
          }
          /** Fetches the position strategy object from the overlay ref. */

        }, {
          key: "_getPositionStrategy",
          value: function _getPositionStrategy() {
            return this._overlayRef.getConfig().positionStrategy;
          }
        }]);

        return MatDialogRef;
      }();
      /**
       * Closes the dialog with the specified interaction type. This is currently not part of
       * `MatDialogRef` as that would conflict with custom dialog ref mocks provided in tests.
       * More details. See: https://github.com/angular/components/pull/9257#issuecomment-651342226.
       */
      // TODO: TODO: Move this back into `MatDialogRef` when we provide an official mock dialog ref.


      function _closeDialogVia(ref, interactionType, result) {
        // Some mock dialog ref instances in tests do not have the `_containerInstance` property.
        // For those, we keep the behavior as is and do not deal with the interaction type.
        if (ref._containerInstance !== undefined) {
          ref._containerInstance._closeInteractionType = interactionType;
        }

        return ref.close(result);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to access the data that was passed in to a dialog. */


      var MAT_DIALOG_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatDialogData');
      /** Injection token that can be used to specify default dialog options. */

      var MAT_DIALOG_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-default-options');
      /** Injection token that determines the scroll handling while the dialog is open. */

      var MAT_DIALOG_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-dialog-scroll-strategy');
      /** @docs-private */

      function MAT_DIALOG_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.block();
        };
      }
      /** @docs-private */


      var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
        provide: MAT_DIALOG_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * Base class for dialog services. The base dialog service allows
       * for arbitrary dialog refs and dialog container components.
       */

      var _MatDialogBase = /*#__PURE__*/function () {
        function _MatDialogBase(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy, _dialogRefConstructor, _dialogContainerType, _dialogDataToken) {
          var _this5 = this;

          _classCallCheck(this, _MatDialogBase);

          this._overlay = _overlay;
          this._injector = _injector;
          this._defaultOptions = _defaultOptions;
          this._parentDialog = _parentDialog;
          this._overlayContainer = _overlayContainer;
          this._dialogRefConstructor = _dialogRefConstructor;
          this._dialogContainerType = _dialogContainerType;
          this._dialogDataToken = _dialogDataToken;
          this._openDialogsAtThisLevel = [];
          this._afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._afterOpenedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          this._ariaHiddenElements = new Map(); // TODO (jelbourn): tighten the typing right-hand side of this expression.

          /**
           * Stream that emits when all open dialog have finished closing.
           * Will emit on subscribe if there are no open dialogs to begin with.
           */

          this.afterAllClosed = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(function () {
            return _this5.openDialogs.length ? _this5._getAfterAllClosed() : _this5._getAfterAllClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /** Keeps track of the currently-open dialogs. */


        _createClass(_MatDialogBase, [{
          key: "openDialogs",
          get: function get() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
          }
          /** Stream that emits when a dialog has been opened. */

        }, {
          key: "afterOpened",
          get: function get() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
          }
        }, {
          key: "_getAfterAllClosed",
          value: function _getAfterAllClosed() {
            var parent = this._parentDialog;
            return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
          }
        }, {
          key: "open",
          value: function open(componentOrTemplateRef, config) {
            var _this6 = this;

            config = _applyConfigDefaults(config, this._defaultOptions || new MatDialogConfig());

            if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Dialog with id \"".concat(config.id, "\" exists already. The dialog id must be unique."));
            }

            var overlayRef = this._createOverlay(config);

            var dialogContainer = this._attachDialogContainer(overlayRef, config);

            var dialogRef = this._attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config); // If this is the first dialog that we're opening, hide all the non-overlay content.


            if (!this.openDialogs.length) {
              this._hideNonDialogContentFromAssistiveTechnology();
            }

            this.openDialogs.push(dialogRef);
            dialogRef.afterClosed().subscribe(function () {
              return _this6._removeOpenDialog(dialogRef);
            });
            this.afterOpened.next(dialogRef); // Notify the dialog container that the content has been attached.

            dialogContainer._initializeWithAttachedContent();

            return dialogRef;
          }
          /**
           * Closes all of the currently-open dialogs.
           */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._closeDialogs(this.openDialogs);
          }
          /**
           * Finds an open dialog by its id.
           * @param id ID to use when looking up the dialog.
           */

        }, {
          key: "getDialogById",
          value: function getDialogById(id) {
            return this.openDialogs.find(function (dialog) {
              return dialog.id === id;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Only close the dialogs at this level on destroy
            // since the parent service may still be active.
            this._closeDialogs(this._openDialogsAtThisLevel);

            this._afterAllClosedAtThisLevel.complete();

            this._afterOpenedAtThisLevel.complete();
          }
          /**
           * Creates the overlay into which the dialog will be loaded.
           * @param config The dialog configuration.
           * @returns A promise resolving to the OverlayRef for the created overlay.
           */

        }, {
          key: "_createOverlay",
          value: function _createOverlay(config) {
            var overlayConfig = this._getOverlayConfig(config);

            return this._overlay.create(overlayConfig);
          }
          /**
           * Creates an overlay config from a dialog config.
           * @param dialogConfig The dialog configuration.
           * @returns The overlay configuration.
           */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig(dialogConfig) {
            var state = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
              positionStrategy: this._overlay.position().global(),
              scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),
              panelClass: dialogConfig.panelClass,
              hasBackdrop: dialogConfig.hasBackdrop,
              direction: dialogConfig.direction,
              minWidth: dialogConfig.minWidth,
              minHeight: dialogConfig.minHeight,
              maxWidth: dialogConfig.maxWidth,
              maxHeight: dialogConfig.maxHeight,
              disposeOnNavigation: dialogConfig.closeOnNavigation
            });

            if (dialogConfig.backdropClass) {
              state.backdropClass = dialogConfig.backdropClass;
            }

            return state;
          }
          /**
           * Attaches a dialog container to a dialog's already-created overlay.
           * @param overlay Reference to the dialog's underlying overlay.
           * @param config The dialog configuration.
           * @returns A promise resolving to a ComponentRef for the attached container.
           */

        }, {
          key: "_attachDialogContainer",
          value: function _attachDialogContainer(overlay, config) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;

            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: [{
                provide: MatDialogConfig,
                useValue: config
              }]
            });

            var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](this._dialogContainerType, config.viewContainerRef, injector, config.componentFactoryResolver);
            var containerRef = overlay.attach(containerPortal);
            return containerRef.instance;
          }
          /**
           * Attaches the user-provided component to the already-created dialog container.
           * @param componentOrTemplateRef The type of component being loaded into the dialog,
           *     or a TemplateRef to instantiate as the content.
           * @param dialogContainer Reference to the wrapping dialog container.
           * @param overlayRef Reference to the overlay in which the dialog resides.
           * @param config The dialog configuration.
           * @returns A promise resolving to the MatDialogRef that should be returned to the user.
           */

        }, {
          key: "_attachDialogContent",
          value: function _attachDialogContent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);

            if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
              dialogContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: config.data,
                dialogRef: dialogRef
              }));
            } else {
              var injector = this._createInjector(config, dialogRef, dialogContainer);

              var contentRef = dialogContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.viewContainerRef, injector));
              dialogRef.componentInstance = contentRef.instance;
            }

            dialogRef.updateSize(config.width, config.height).updatePosition(config.position);
            return dialogRef;
          }
          /**
           * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
           * of a dialog to close itself and, optionally, to return a value.
           * @param config Config object that is used to construct the dialog.
           * @param dialogRef Reference to the dialog.
           * @param dialogContainer Dialog container element that wraps all of the contents.
           * @returns The custom injector that can be used inside the dialog.
           */

        }, {
          key: "_createInjector",
          value: function _createInjector(config, dialogRef, dialogContainer) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector; // The dialog container should be provided as the dialog container and the dialog's
            // content are created out of the same `ViewContainerRef` and as such, are siblings
            // for injector purposes. To allow the hierarchy that is expected, the dialog
            // container is explicitly provided in the injector.

            var providers = [{
              provide: this._dialogContainerType,
              useValue: dialogContainer
            }, {
              provide: this._dialogDataToken,
              useValue: config.data
            }, {
              provide: this._dialogRefConstructor,
              useValue: dialogRef
            }];

            if (config.direction && (!userInjector || !userInjector.get(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], null))) {
              providers.push({
                provide: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
                useValue: {
                  value: config.direction,
                  change: Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()
                }
              });
            }

            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
              parent: userInjector || this._injector,
              providers: providers
            });
          }
          /**
           * Removes a dialog from the array of open dialogs.
           * @param dialogRef Dialog to be removed.
           */

        }, {
          key: "_removeOpenDialog",
          value: function _removeOpenDialog(dialogRef) {
            var index = this.openDialogs.indexOf(dialogRef);

            if (index > -1) {
              this.openDialogs.splice(index, 1); // If all the dialogs were closed, remove/restore the `aria-hidden`
              // to a the siblings and emit to the `afterAllClosed` stream.

              if (!this.openDialogs.length) {
                this._ariaHiddenElements.forEach(function (previousValue, element) {
                  if (previousValue) {
                    element.setAttribute('aria-hidden', previousValue);
                  } else {
                    element.removeAttribute('aria-hidden');
                  }
                });

                this._ariaHiddenElements.clear();

                this._getAfterAllClosed().next();
              }
            }
          }
          /**
           * Hides all of the content that isn't an overlay from assistive technology.
           */

        }, {
          key: "_hideNonDialogContentFromAssistiveTechnology",
          value: function _hideNonDialogContentFromAssistiveTechnology() {
            var overlayContainer = this._overlayContainer.getContainerElement(); // Ensure that the overlay container is attached to the DOM.


            if (overlayContainer.parentElement) {
              var siblings = overlayContainer.parentElement.children;

              for (var i = siblings.length - 1; i > -1; i--) {
                var sibling = siblings[i];

                if (sibling !== overlayContainer && sibling.nodeName !== 'SCRIPT' && sibling.nodeName !== 'STYLE' && !sibling.hasAttribute('aria-live')) {
                  this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));

                  sibling.setAttribute('aria-hidden', 'true');
                }
              }
            }
          }
          /** Closes all of the dialogs in an array. */

        }, {
          key: "_closeDialogs",
          value: function _closeDialogs(dialogs) {
            var i = dialogs.length;

            while (i--) {
              // The `_openDialogs` property isn't updated after close until the rxjs subscription
              // runs on the next microtask, in addition to modifying the array as we're going
              // through it. We loop through all of them and call close without assuming that
              // they'll be removed from the list instantaneously.
              dialogs[i].close();
            }
          }
        }]);

        return _MatDialogBase;
      }();

      _MatDialogBase.ɵfac = function _MatDialogBase_Factory(t) {
        return new (t || _MatDialogBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]));
      };

      _MatDialogBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatDialogBase
      });

      _MatDialogBase.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: undefined
        }, {
          type: undefined
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }, {
          type: undefined
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatDialogBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: undefined
          }, {
            type: undefined
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }, {
            type: undefined
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]
          }];
        }, null);
      })();
      /**
       * Service to open Material Design modal dialogs.
       */


      var MatDialog = /*#__PURE__*/function (_MatDialogBase2) {
        _inherits(MatDialog, _MatDialogBase2);

        var _super3 = _createSuper(MatDialog);

        function MatDialog(overlay, injector,
        /**
         * @deprecated `_location` parameter to be removed.
         * @breaking-change 10.0.0
         */
        location, defaultOptions, scrollStrategy, parentDialog, overlayContainer) {
          _classCallCheck(this, MatDialog);

          return _super3.call(this, overlay, injector, defaultOptions, parentDialog, overlayContainer, scrollStrategy, MatDialogRef, MatDialogContainer, MAT_DIALOG_DATA);
        }

        return MatDialog;
      }(_MatDialogBase);

      MatDialog.ɵfac = function MatDialog_Factory(t) {
        return new (t || MatDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MAT_DIALOG_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MatDialog, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]));
      };

      MatDialog.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MatDialog,
        factory: MatDialog.ɵfac
      });

      MatDialog.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: MatDialogConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_DIALOG_SCROLL_STRATEGY]
          }]
        }, {
          type: MatDialog,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: MatDialogConfig,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_DEFAULT_OPTIONS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_DIALOG_SCROLL_STRATEGY]
            }]
          }, {
            type: MatDialog,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]
          }];
        }, null);
      })();
      /**
       * Applies default options to the dialog config.
       * @param config Config to be modified.
       * @param defaultOptions Default options provided.
       * @returns The new configuration object.
       */


      function _applyConfigDefaults(config, defaultOptions) {
        return Object.assign(Object.assign({}, defaultOptions), config);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter used to generate unique IDs for dialog elements. */


      var dialogElementUid = 0;
      /**
       * Button that will close the current dialog.
       */

      var MatDialogClose = /*#__PURE__*/function () {
        function MatDialogClose( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogClose);

          this.dialogRef = dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          /** Default to "button" to prevents accidental form submits. */

          this.type = 'button';
        }

        _createClass(MatDialogClose, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.dialogRef) {
              // When this directive is included in a dialog via TemplateRef (rather than being
              // in a Component), the DialogRef isn't available via injection because embedded
              // views cannot be given a custom injector. Instead, we look up the DialogRef by
              // ID. This must occur in `onInit`, as the ID binding for the dialog container won't
              // be resolved at constructor time.
              this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var proxiedChange = changes['_matDialogClose'] || changes['_matDialogCloseResult'];

            if (proxiedChange) {
              this.dialogResult = proxiedChange.currentValue;
            }
          }
        }, {
          key: "_onButtonClick",
          value: function _onButtonClick(event) {
            // Determinate the focus origin using the click event, because using the FocusMonitor will
            // result in incorrect origins. Most of the time, close buttons will be auto focused in the
            // dialog, and therefore clicking the button won't result in a focus change. This means that
            // the FocusMonitor won't detect any origin change, and will always output `program`.
            _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? 'keyboard' : 'mouse', this.dialogResult);
          }
        }]);

        return MatDialogClose;
      }();

      MatDialogClose.ɵfac = function MatDialogClose_Factory(t) {
        return new (t || MatDialogClose)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogClose,
        selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
        hostVars: 2,
        hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatDialogClose_click_HostBindingHandler($event) {
              return ctx._onButtonClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("type", ctx.type);
          }
        },
        inputs: {
          type: "type",
          dialogResult: ["mat-dialog-close", "dialogResult"],
          ariaLabel: ["aria-label", "ariaLabel"],
          _matDialogClose: ["matDialogClose", "_matDialogClose"]
        },
        exportAs: ["matDialogClose"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      MatDialogClose.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogClose.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        dialogResult: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mat-dialog-close']
        }],
        _matDialogClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['matDialogClose']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogClose, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-close], [matDialogClose]',
            exportAs: 'matDialogClose',
            host: {
              '(click)': '_onButtonClick($event)',
              '[attr.aria-label]': 'ariaLabel || null',
              '[attr.type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          dialogResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mat-dialog-close']
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          _matDialogClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['matDialogClose']
          }]
        });
      })();
      /**
       * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
       */


      var MatDialogTitle = /*#__PURE__*/function () {
        function MatDialogTitle( // The dialog title directive is always used in combination with a `MatDialogRef`.
        // tslint:disable-next-line: lightweight-tokens
        _dialogRef, _elementRef, _dialog) {
          _classCallCheck(this, MatDialogTitle);

          this._dialogRef = _dialogRef;
          this._elementRef = _elementRef;
          this._dialog = _dialog;
          this.id = "mat-dialog-title-".concat(dialogElementUid++);
        }

        _createClass(MatDialogTitle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (!this._dialogRef) {
              this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
            }

            if (this._dialogRef) {
              Promise.resolve().then(function () {
                var container = _this7._dialogRef._containerInstance;

                if (container && !container._ariaLabelledBy) {
                  container._ariaLabelledBy = _this7.id;
                }
              });
            }
          }
        }]);

        return MatDialogTitle;
      }();

      MatDialogTitle.ɵfac = function MatDialogTitle_Factory(t) {
        return new (t || MatDialogTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialogRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MatDialog));
      };

      MatDialogTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogTitle,
        selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
        hostAttrs: [1, "mat-dialog-title"],
        hostVars: 1,
        hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        exportAs: ["matDialogTitle"]
      });

      MatDialogTitle.ctorParameters = function () {
        return [{
          type: MatDialogRef,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: MatDialog
        }];
      };

      MatDialogTitle.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[mat-dialog-title], [matDialogTitle]',
            exportAs: 'matDialogTitle',
            host: {
              'class': 'mat-dialog-title',
              '[id]': 'id'
            }
          }]
        }], function () {
          return [{
            type: MatDialogRef,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: MatDialog
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * Scrollable content container of a dialog.
       */


      var MatDialogContent = function MatDialogContent() {
        _classCallCheck(this, MatDialogContent);
      };

      MatDialogContent.ɵfac = function MatDialogContent_Factory(t) {
        return new (t || MatDialogContent)();
      };

      MatDialogContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogContent,
        selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
        hostAttrs: [1, "mat-dialog-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]",
            host: {
              'class': 'mat-dialog-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Container for the bottom action buttons in a dialog.
       * Stays fixed to the bottom when scrolling.
       */


      var MatDialogActions = function MatDialogActions() {
        _classCallCheck(this, MatDialogActions);
      };

      MatDialogActions.ɵfac = function MatDialogActions_Factory(t) {
        return new (t || MatDialogActions)();
      };

      MatDialogActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatDialogActions,
        selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
        hostAttrs: [1, "mat-dialog-actions"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]",
            host: {
              'class': 'mat-dialog-actions'
            }
          }]
        }], null, null);
      })();
      /**
       * Finds the closest MatDialogRef to an element by looking at the DOM.
       * @param element Element relative to which to look for a dialog.
       * @param openDialogs References to the currently-open dialogs.
       */


      function getClosestDialog(element, openDialogs) {
        var parent = element.nativeElement.parentElement;

        while (parent && !parent.classList.contains('mat-dialog-container')) {
          parent = parent.parentElement;
        }

        return parent ? openDialogs.find(function (dialog) {
          return dialog.id === parent.id;
        }) : null;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatDialogModule = function MatDialogModule() {
        _classCallCheck(this, MatDialogModule);
      };

      MatDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatDialogModule
      });
      MatDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatDialogModule_Factory(t) {
          return new (t || MatDialogModule)();
        },
        providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatDialogModule, {
          declarations: function declarations() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatDialogModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            exports: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
            declarations: [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent],
            providers: [MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER],
            entryComponents: [MatDialogContainer]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=dialog.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~components-collections-collections-module~components-items-items-module~components-settings-~47eb9289-es5.js.map