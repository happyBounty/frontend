(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/ubuntu/Desktop/Project/Crypto tradesv1.1.1/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1EHG":
    /*!**************************************!*\
      !*** ./src/app/guard/guest.guard.ts ***!
      \**************************************/

    /*! exports provided: GuestGuard */

    /***/
    function EHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuestGuard", function () {
        return GuestGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  guest.guard.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the file used to restrict route for only guest
      */


      var GuestGuard = /*#__PURE__*/function () {
        function GuestGuard(userService, router) {
          _classCallCheck(this, GuestGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(GuestGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var userDetails = this.userService.getUser();

            if (userDetails == null) {
              return true;
            }

            this.router.navigate(['/']);
            return false;
          }
        }]);

        return GuestGuard;
      }();

      GuestGuard.ɵfac = function GuestGuard_Factory(t) {
        return new (t || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      GuestGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GuestGuard,
        factory: GuestGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1U8w":
    /*!***********************************************************!*\
      !*** ./src/app/components/settings/settings.component.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function U8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /*
      Project : Cryptotrades
      FileName :  settings.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show setting layout page with side menu
      */


      function SettingsComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SettingsComponent_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "min-height": a0
        };
      };

      var _c1 = function _c1(a0, a1, a2) {
        return {
          "height": a0,
          "top": a1,
          "width": a2
        };
      };

      var _c2 = function _c2(a0, a1) {
        return {
          "cil-arrow-left": a0,
          "cil-arrow-right": a1
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "active": a0
        };
      };

      var _c4 = function _c4(a0, a1) {
        return {
          "fixedContainer": a0,
          "minimizeContainer": a1
        };
      };

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(router) {
          var _this2 = this;

          _classCallCheck(this, SettingsComponent);

          this.router = router;
          this.topMenuHeight = 0;
          this.innerHeight = 0;
          this.isToggled = false;
          this.type = "wallet";
          /**
           * This is the function which used to minize and maximize setting menu on sidebar
           */

          this.minimizeMenu = function () {
            _this2.isToggled = _this2.isToggled ? false : true;
          };
          /**
           * This is the function which used to logout user from the applciation on menu click
           */


          this.logoutAction = function () {
            localStorage.removeItem("token");
            location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__["config"].base_url;
          };

          this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (event) {
            var url = event.url.split("/").pop();

            if (url != 'general' && url != 'changepassword') {
              _this2.type = "wallet";
            } else {
              _this2.type = url;
            }
          });
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.topMenuHeight = window.innerWidth > 990 ? 73 : 58;
            this.innerHeight = window.innerHeight - this.topMenuHeight;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 27,
        vars: 30,
        consts: [[1, "appContainer"], [1, "app-body", 3, "ngStyle"], [1, "custom-sidebar", "fixed", 3, "ngStyle"], ["appSidebar", ""], [4, "ngIf"], [3, "ngClass", "click"], [3, "ngClass"], ["href", "javascript:void(0);", "routerLink", "/settings/wallet"], [1, "cil-money"], ["href", "javascript:void(0);", "routerLink", "/settings/general"], [1, "cil-settings"], ["href", "javascript:void(0);", "routerLink", "/settings/changepassword"], [1, "cil-lock-locked"], ["href", "javascript:void(0);", 3, "click"], [1, "cil-account-logout"], [1, "main", 3, "ngClass"], [1, "container-fluid"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingsComponent_span_5_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_i_click_6_listener() {
              return ctx.minimizeMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingsComponent_span_11_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SettingsComponent_span_15_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingsComponent_span_19_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_21_listener() {
              return ctx.logoutAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SettingsComponent_span_23_Template, 2, 0, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "main", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.innerHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c1, ctx.innerHeight + "px", ctx.topMenuHeight + "px", ctx.isToggled ? "50px" : "240px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, ctx.isToggled == false, ctx.isToggled == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, ctx.type == "wallet"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c3, ctx.type == "general"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c3, ctx.type == "changepassword"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c4, ctx.isToggled == false, ctx.isToggled == true));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".appContainer[_ngcontent-%COMP%] {margin:58px 0 0;}\n.custom-sidebar[_ngcontent-%COMP%] {border-right: 1px solid #e7e7e7; overflow-x: hidden; overflow-y: auto;}\n.custom-sidebar.fixed[_ngcontent-%COMP%] {position: fixed; left: 0; bottom: 0; top:0;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {position: relative; height: 40px; padding-left: 15px; padding-right: 15px; font-size: 16px; line-height: 40px; text-transform: capitalize; color: #444; margin-top: 10px;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{ display: block;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {position: absolute; right:5px; top:0; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px; cursor: pointer;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {margin: 0; padding: 0;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .custom-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style-type: none;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {position: relative; height: 40px; padding-left: 50px; padding-right: 15px; font-size: 16px; line-height: 40px; text-transform: capitalize; color: #444; border-bottom: 1px solid #e7e7e7; display: block;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {text-decoration: none; background-color: #e7e7e7;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {position: absolute; right:0; left:5px; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px;}\n.fixedContainer[_ngcontent-%COMP%] {padding-left: 240px;}\n.minimizeContainer[_ngcontent-%COMP%] {padding-left: 50px;}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxlQUFlLENBQUM7QUFDL0IsaUJBQWlCLCtCQUErQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0FBQ3ZGLHVCQUF1QixlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDbEUsb0JBQW9CLGtCQUFrQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsMEJBQTBCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO0FBQzdMLHlCQUF5QixjQUFjLENBQUM7QUFDeEMsc0JBQXNCLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO0FBQy9KLG9CQUFvQixTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQzFDLHdDQUF3QyxxQkFBcUIsQ0FBQztBQUM5RCx5QkFBeUIsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsZ0NBQWdDLEVBQUUsY0FBYyxDQUFDO0FBQ2xPLCtEQUErRCxxQkFBcUIsRUFBRSx5QkFBeUIsQ0FBQztBQUNoSCwyQkFBMkIsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztBQUNwSixpQkFBaUIsbUJBQW1CLENBQUM7QUFDckMsb0JBQW9CLGtCQUFrQixDQUFDO0FBQ3ZDO0lBQ0ksZUFBZSxlQUFlLENBQUM7QUFDbkMiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBDb250YWluZXIge21hcmdpbjo1OHB4IDAgMDt9XG4uY3VzdG9tLXNpZGViYXIge2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7IG92ZXJmbG93LXg6IGhpZGRlbjsgb3ZlcmZsb3cteTogYXV0bzt9XG4uY3VzdG9tLXNpZGViYXIuZml4ZWQge3Bvc2l0aW9uOiBmaXhlZDsgbGVmdDogMDsgYm90dG9tOiAwOyB0b3A6MDt9XG4uY3VzdG9tLXNpZGViYXIgaDQge3Bvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiA0MHB4OyBwYWRkaW5nLWxlZnQ6IDE1cHg7IHBhZGRpbmctcmlnaHQ6IDE1cHg7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDQwcHg7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBjb2xvcjogIzQ0NDsgbWFyZ2luLXRvcDogMTBweDt9XG4uY3VzdG9tLXNpZGViYXIgaDQgc3BhbnsgZGlzcGxheTogYmxvY2s7fVxuLmN1c3RvbS1zaWRlYmFyIGg0IGkge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6NXB4OyB0b3A6MDsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDIwcHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmN1c3RvbS1zaWRlYmFyIHVsIHttYXJnaW46IDA7IHBhZGRpbmc6IDA7fVxuLmN1c3RvbS1zaWRlYmFyIHVsLCAuY3VzdG9tLXNpZGViYXIgbGkge2xpc3Qtc3R5bGUtdHlwZTogbm9uZTt9XG4uY3VzdG9tLXNpZGViYXIgdWwgbGkgYSB7cG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDQwcHg7IHBhZGRpbmctbGVmdDogNTBweDsgcGFkZGluZy1yaWdodDogMTVweDsgZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogNDBweDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IGNvbG9yOiAjNDQ0OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZTdlNzsgZGlzcGxheTogYmxvY2s7fVxuLmN1c3RvbS1zaWRlYmFyIHVsIGxpIGE6aG92ZXIsIC5jdXN0b20tc2lkZWJhciB1bCBsaS5hY3RpdmUgYSB7dGV4dC1kZWNvcmF0aW9uOiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O31cbi5jdXN0b20tc2lkZWJhciB1bCBsaSBhIGkge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6MDsgbGVmdDo1cHg7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4OyBsaW5lLWhlaWdodDogNDBweDt9XG4uZml4ZWRDb250YWluZXIge3BhZGRpbmctbGVmdDogMjQwcHg7fVxuLm1pbmltaXplQ29udGFpbmVyIHtwYWRkaW5nLWxlZnQ6IDUwcHg7fVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmFwcENvbnRhaW5lciB7bWFyZ2luOjczcHggMCAwO31cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3owW":
    /*!*************************************!*\
      !*** ./src/app/guard/user.guard.ts ***!
      \*************************************/

    /*! exports provided: UserGuard */

    /***/
    function owW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserGuard", function () {
        return UserGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  user.guard.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the file used to restrict route for only user
      */


      var UserGuard = /*#__PURE__*/function () {
        function UserGuard(userService, router) {
          _classCallCheck(this, UserGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(UserGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var userDetails = this.userService.getUser();
            console.log("user details ", userDetails);

            if (userDetails != null) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return UserGuard;
      }();

      UserGuard.ɵfac = function UserGuard_Factory(t) {
        return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserGuard,
        factory: UserGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4Qwi":
    /*!*******************************************************!*\
      !*** ./src/app/components/forgot/forgot.component.ts ***!
      \*******************************************************/

    /*! exports provided: ForgotComponent */

    /***/
    function Qwi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
        return ForgotComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  forgot.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component which show forgot password screen for user
      */


      var ForgotComponent = /*#__PURE__*/function () {
        function ForgotComponent(formbuilder, snackBar, userService, router) {
          var _this3 = this;

          _classCallCheck(this, ForgotComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.router = router;
          this.button_title = "Submit";
          this.isAPILoading = false;
          /**
           * This is the function which used to send forgot password api request
           */

          this.forgotApi = function (params) {
            _this3.isAPILoading = true;

            _this3.userService.forgotPassword(params).subscribe(function (result) {
              _this3.isAPILoading = false;

              if (result.status == true) {
                _this3.snackBar.open('Request submitted successfully', "", {
                  duration: 2000
                });

                _this3.router.navigate(['/login']);
              } else {
                _this3.button_title = "Submit";

                _this3.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }
            });
          };

          this.forgot = formbuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])]
          });
        }

        _createClass(ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to validate form on submit
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.forgot.valid && this.button_title == "Submit") {
              this.button_title = "Submitting...";
              this.forgotApi({
                email: formData.value.email
              });
            } else {
              if (this.forgot.controls.email.invalid) {
                if (this.forgot.controls.email.errors) {
                  console.log(this.forgot.controls.email.errors);

                  if (this.forgot.controls.email.errors.required) {
                    this.snackBar.open('Email is required', "", {
                      duration: 2000
                    });
                  } else if (this.forgot.controls.email.errors.minlength) {
                    this.snackBar.open('Email required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.forgot.controls.email.errors.pattern) {
                    this.snackBar.open('Invalid Email', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
        }]);

        return ForgotComponent;
      }();

      ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
        return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotComponent,
        selectors: [["app-dashboard"]],
        decls: 24,
        vars: 2,
        consts: [[1, "app-body"], [1, "main", "d-flex", "align-items-center"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "card-group"], [1, "card"], [1, "card-body", "p-3"], [3, "formGroup", "ngSubmit"], [1, "text-muted"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icon-envelope"], ["type", "text", "placeholder", "Enter Email", "formControlName", "email", "autocomplete", "username", "required", "", 1, "form-control"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "col-6", "text-right"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-link", "px-0"]],
        template: function ForgotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit(ctx.forgot);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go to Login?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgot);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './forgot.component.html',
            styleUrls: ['./forgot.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6p9a":
    /*!**********************************!*\
      !*** ./src/app/constants/api.ts ***!
      \**********************************/

    /*! exports provided: API */

    /***/
    function p9a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API", function () {
        return API;
      });
      /*
      Project : Cryptotrades
      FileName :  api.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the file which contain all api constants used in the application
      */


      var API = {
        // base_url: "https://exampleapi.com",
        base_url: "http://localhost:5000/",
        user_login: "/user/login",
        user_register: "/user",
        user_forgot: "/user/forgot",
        user_reset: "/user/reset",
        user_profile: "/user/profile",
        user_update: "/user/update",
        item_check_balance: "/item/checkbalance",
        item_transfer_balance: "/item/sendeth",
        collection_add: "/collection/add",
        collection_update: "/collection/update",
        collection_detail: "/collection/detail",
        collection_delete: "/collection/delete",
        collection_list: "/collection/list",
        category_list: "/category/list",
        item_add: "/item/add",
        item_update: "/item/update",
        item_delete: "/item/delete",
        item_list: "/item/list",
        item_favourite_list: "/item/favouriteslist",
        item_listbycollection: "/item/listbycollection",
        item_publish: "/item/publish",
        item_purchase: "/item/purchase",
        item_views_add: "/item/addviews",
        item_like_add: "/item/addfavourites",
        item_report: "/item/report",
        item_more_collection: "/item/morefromcollection",
        item_history: "/item/history",
        item_prices: "/item/prices",
        item_offers: "/item/offers",
        item_offer_add: "/item/addoffer",
        item_offer_remove: "/item/removeoffer",
        item_offer_action: "/item/actionoffer"
      };
      /***/
    },

    /***/
    "7EJP":
    /*!*********************************!*\
      !*** ./src/app/models/price.ts ***!
      \*********************************/

    /*! exports provided: Price */

    /***/
    function EJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Price", function () {
        return Price;
      });

      var Price = /*#__PURE__*/function () {
        function Price() {
          _classCallCheck(this, Price);
        }

        _createClass(Price, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            return this;
          }
        }]);

        return Price;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/collection.service */
      "MBni");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../UI/skeleton/itemskeleton/itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../UI/item/item.component */
      "xyAo");
      /*
      Project : Cryptotrades
      FileName :  home.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component which show home screen for user
      */


      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function HomeComponent_div_20_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_li_9_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.showItemByCollection(item_r5._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r5._id == ctx_r2.collectionMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
        }
      }

      function HomeComponent_div_20_app_itemskeleton_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
        }
      }

      function HomeComponent_div_20_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function HomeComponent_div_20_div_13_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r10.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r9);
        }
      }

      function HomeComponent_div_20_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_20_div_13_div_1_Template, 2, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.collectionItems);
        }
      }

      function HomeComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Trending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_Template_li_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.showItemByCollection("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_20_li_9_Template, 3, 4, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_20_app_itemskeleton_12_Template, 1, 0, "app-itemskeleton", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_div_20_div_13_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.collectionMenu == ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.collections);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && ctx_r0.collectionItems.length > 0);
        }
      }

      var _c1 = function _c1() {
        return ["/marketplace"];
      };

      var _c2 = function _c2(a0) {
        return {
          category_id: a0
        };
      };

      function HomeComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r14 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, category_r14._id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.mediaBase + "/images/categories/" + category_r14.category_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r14.title);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userService, router, collectionService, itemService) {
          var _this4 = this;

          _classCallCheck(this, HomeComponent);

          this.userService = userService;
          this.router = router;
          this.collectionService = collectionService;
          this.itemService = itemService;
          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
          this.collectionMenu = "";
          this.collections = [];
          this.collectionItems = [];
          this.loading = true;
          this.categories = [];
          /**
           * This is the function which navigate uswer to login and marketplace on button click
           */

          this.openCreate = function () {
            if (_this4.currentUser == null) {
              _this4.router.navigate(["/login"]);
            } else {
              _this4.router.navigate(["/collection/mycollection"]);
            }
          };
          /**
           * This is the function which load item by collection on tab click
           */


          this.getCollection = function () {
            var params = {
              page: 1,
              type: 'item'
            };

            _this4.collectionService.listCollection(params).subscribe(function (result) {
              if (result.status == true) {
                for (var index = 0; index < result.tempArray.length; index++) {
                  var element = result.tempArray[index];

                  _this4.collections.push(element);

                  if (index == 6) {
                    break;
                  }
                }

                _this4.showItemByCollection(_this4.collectionMenu);
              }
            });
          };
          /**
           * This is the function which load item by collection on tab click
           */


          this.showItemByCollection = function (id) {
            _this4.loading = true;
            _this4.collectionMenu = id;
            var params = {};

            if (_this4.collectionMenu == "") {
              params = {
                page: 1,
                type: "recent",
                keyword: ""
              };
            } else {
              params = {
                page: 1,
                type: "collection",
                collection_id: _this4.collectionMenu,
                keyword: ""
              };
            }

            _this4.itemService.listItem(params).subscribe(function (result) {
              console.log(result);

              if (result.status == true) {
                _this4.collectionItems = [];

                for (var index = 0; index < result.tempArray.length; index++) {
                  var element = result.tempArray[index];

                  _this4.collectionItems.push(element);

                  if (index == 5) {
                    break;
                  }
                }
              }

              _this4.loading = false;
            });
          };
          /**
           * This is the output function which used to navigate user to item detail page
           */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this4.router.navigate(['/item/view/' + event.item._id]);
            }
          };
          /**
           * This is the function which used to get category list from api
           */


          this.getCategory = function () {
            _this4.itemService.categoryList().subscribe(function (result) {
              for (var index = 0; index < result.tempArray.length; index++) {
                var element = result.tempArray[index];

                _this4.categories.push(element);

                if (index == 7) {
                  break;
                }
              }
            });
          };

          this.currentUser = this.userService.getUser();
          this.getCollection();
          this.getCategory();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 76,
        vars: 2,
        consts: [[1, "appContainer"], [1, "nft-main"], [1, "nft-banner"], [1, "container-fluid"], [1, "banner_lists"], ["href", "javascript:void(0)", "routerLink", "/marketplace"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/images/banner_images.png"], ["class", "nft-trending", 4, "ngIf"], [1, "nft-sell"], [1, "nft-sell-head"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "nft-sell-blocks"], [1, "nft-sell-image"], ["src", "assets/images/wallet.png"], ["src", "assets/images/collections.png"], ["src", "assets/images/nfts.png"], ["src", "assets/images/sale.png"], [1, "nft-category"], [1, "nft-category-head"], [1, "nft-category-content"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "nft-bottom-block"], [1, "nft-trending"], [1, "nft-trending-head"], [1, "top_tabs"], [3, "ngClass", "click"], ["href", "javascript:void(0)"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "nft-trending_body"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"], [1, "col-md-3"], [1, "item", 3, "routerLink", "queryParams"], [1, "nft-category-listing"], [3, "src"], [1, "nft-category-listing-overlay"], [1, "ntf-category-foot"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Discover, Collect, and sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " extraordinary ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NFTs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu necneque efficitur porta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Explore");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_16_listener() {
              return ctx.openCreate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 14, 6, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Create and Sell your Nfts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ellentesque mollis magna nec tortor mattis rIn quis purus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Setup your Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Create your collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Add your Nfts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "List Them for Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Etiam auctor urna ac nisi feugiat, in tempor massa tempus arcu nec neque efficitur porta ollis magna nec tortor mattis eugiat, in tempoarcu nec neque effici...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Browse By Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ellentesque mollis magna nec tortor mattis rIn quis purus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, HomeComponent_div_72_Template, 9, 7, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Copyright @2021 CryptoTrades All Rights Reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collections.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_7__["ItemskeletonComponent"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".appContainer[_ngcontent-%COMP%] {margin:58px 0 0;}\n.nft-main[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {padding-left: 50px;padding-right: 50px;}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]{background:url('banner.jpg');width:100%;height:700px;background-size:100% 100%;background-repeat:no-repeat}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{height:100%}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]{height: 100%;display: flex;justify-content: center;align-items: center;padding-left: 0}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{width:45%}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{width:55%;text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:10px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:46px;color:#000000; font-weight: 700; line-height: 55px;}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ee294f}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#7a7a7a;margin-bottom:50px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:110px;background:transparent;border:2px solid #ff2c51;font-size:16px;padding:8px 20px;border-radius:43px;display:inline-block;text-align:center;margin-right:20px;color:#ff2b50}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:rgb(255,67,100);background: linear-gradient(90deg, rgba(255,67,100,1) 0%, rgba(255,71,75,1) 50%, rgba(255,74,47,1) 100%);color: #ffffff;text-decoration:none}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]{margin-bottom:30px; margin-top: 30px;}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   .nft-trending-head[_ngcontent-%COMP%]{width: 100%;margin-bottom:20px;display:inline-block;}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   .nft-trending-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;color:#000000}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]{padding:10px;margin:10px 0;background:#fafafa}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:#7a7a7a;padding:6px 15px;margin:10px 5px;background:#ffffff;border-radius:20px;display:inline-block;box-shadow:0 5px 15px -5px #cccccc}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:rgb(255,67,100);background:linear-gradient(90deg, rgba(255,67,100,1) 0%, rgba(255,71,75,1) 50%, rgba(255,74,47,1) 100%);color:#ffffff;text-decoration:none}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:rgb(255,67,100);background:linear-gradient(90deg, rgba(255,67,100,1) 0%, rgba(255,71,75,1) 50%, rgba(255,74,47,1) 100%);color:#ffffff;text-decoration:none}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]{width:100%;background:#fdefed;padding:40px 0 60px 0;display:inline-block}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-head[_ngcontent-%COMP%]{padding:15px 0 35px 0}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{ font-weight: 700;font-size:30px;color:#000000}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#7a7a7a}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]{background:#f3ecfa;padding:15px;border-radius:20px;margin-bottom:30px;display:inline-block; min-height: 300px;}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]:hover{background:#f6f9ef;}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]   .nft-sell-image[_ngcontent-%COMP%]{width:100%;text-align:center;display:inline-block;padding:20px 20px 40px 20px}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight: 600; font-size:18px;color:#000000;text-align:left}\n.nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#7a7a7a;text-align:left;margin-bottom:5px}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]{width:100%;padding:0 0 60px 0;display:inline-block; margin-top: 30px;}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-head[_ngcontent-%COMP%]{padding:0 0 20px 0}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600; font-size:30px;color:#000000}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#7a7a7a}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-listing[_ngcontent-%COMP%]{display: inline-block;height:300px;text-align:center;position:relative;margin:0 2px;width:100%;overflow:hidden;border-radius:20px}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-listing[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px;transition:all 0.2s linear; -o-object-fit: cover; object-fit: cover;}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-listing[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%]{transform:scale(1.1)}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   ul.ntf-category-foot[_ngcontent-%COMP%]{width:100%;padding:15px 15px;margin-bottom:0;padding-left:0;position:absolute;bottom:0}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   ul.ntf-category-foot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align: left; padding:0 15px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   ul.ntf-category-foot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight: 600; font-size:15px;color:#ffffff;margin-bottom:0}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   ul.ntf-category-foot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#ffffff;margin-bottom:0}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {cursor: pointer;}\n.nft-main[_ngcontent-%COMP%]   .nft-bottom-block[_ngcontent-%COMP%]{width:100%;display:inline-block;background:#333333;text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-bottom-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#ffffff;margin-bottom:0;padding:11px}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-listing-overlay[_ngcontent-%COMP%] { position: absolute; background: rgba(0,0,0,0.5); left: 0; right: 0; bottom: 0; top: 0;}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n}\n@media(min-width:1200px)\n{\n.nft-main[_ngcontent-%COMP%]   footer.nft-footer[_ngcontent-%COMP%]   .col-6.col-md[_ngcontent-%COMP%]{padding-left:7%}\n}\n@media(max-width: 1199px)\n{\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:36px}\n.nft-main[_ngcontent-%COMP%]   .nft-details-section[_ngcontent-%COMP%]   ul.details_content_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.detail_content_sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){width:53%}\n.nft-main.map-container[_ngcontent-%COMP%]   .map-container-title[_ngcontent-%COMP%]{padding-top:20px;text-align:center;}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%; }\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-head[_ngcontent-%COMP%] {text-align: center;}\n}\n@media (min-width:992px)\n{\n.nft-main[_ngcontent-%COMP%]   .nft-detail-sub[_ngcontent-%COMP%]   .nft-detail-block[_ngcontent-%COMP%]   .nft-detail-banner[_ngcontent-%COMP%]{height:100%}\n.nft-main[_ngcontent-%COMP%]   .nft-detail-sub[_ngcontent-%COMP%]   .nft-detail-block[_ngcontent-%COMP%]   .nft-detail-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;-o-object-fit:cover;object-fit:cover}\n}\n@media (max-width:991px)\n{\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]{height:600px}\n.nft-main[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}\n.nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]{height:auto}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-content[_ngcontent-%COMP%]   .nft-listing-foot[_ngcontent-%COMP%]   ul.nft-listing-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{width:100%;text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-content[_ngcontent-%COMP%]   .nft-listing-foot[_ngcontent-%COMP%]   ul.nft-listing-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{width:100%;text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-content[_ngcontent-%COMP%]{padding:10px 15px}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:30px}\n.nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   ul.top_tabs[_ngcontent-%COMP%]{text-align:center}\n.nft-main[_ngcontent-%COMP%]   .footer-details[_ngcontent-%COMP%]{width:100%;text-align:center;margin-bottom:20px}\n.nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-listing[_ngcontent-%COMP%] {height: 200px;}\n.appContainer[_ngcontent-%COMP%] {margin: 65px 0 0;}\n\n\n\n.nft-main[_ngcontent-%COMP%]   .nft-details-section[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]{margin-bottom:30px;height:auto}\n}\n@media (max-width: 767px)\n{\n.nft-main[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]:nth-last-child(2), .nft-main[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   li.nav-item[_ngcontent-%COMP%]:last-child{display:block}\n.nft-main[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]{display:inline-block}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}\n.nft-sell[_ngcontent-%COMP%]   .nft-sell-blocks[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}\n.nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .nft-main[_ngcontent-%COMP%]   .nft-banner[_ngcontent-%COMP%]   ul.banner_lists[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{width:100%;padding:20px 0}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-head[_ngcontent-%COMP%]{width:100%}\n.nft-main[_ngcontent-%COMP%]   .nft-listing-main[_ngcontent-%COMP%]   .nft-listing-head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain}\n.nft-main[_ngcontent-%COMP%]   .exclusive_container[_ngcontent-%COMP%]   .hpanel[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .nft-trending[_ngcontent-%COMP%]   .nft-trending-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .nft-sell[_ngcontent-%COMP%]   .nft-sell-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .nft-category[_ngcontent-%COMP%]   .nft-category-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .nft-join[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}\n.nft-main[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{width:100%;text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]{height:auto}\n.nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{width:100%;padding:15px}\n.nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after{display:none}\n.nft-main[_ngcontent-%COMP%]   .nft-resources[_ngcontent-%COMP%]   .nft-resources-banner[_ngcontent-%COMP%]   ul.nft-resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px}\n.nft-main[_ngcontent-%COMP%]   .nft-footer[_ngcontent-%COMP%]   .footer-details[_ngcontent-%COMP%]{text-align:center;margin-bottom:50px}\n\n\n\n.nft-main[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]   .filter_block[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%], .nft-main[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]   .filter_block[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{width:100%;text-align:center;padding-bottom:15px}\n.nft-main[_ngcontent-%COMP%]   .nft-detail-sub[_ngcontent-%COMP%]   .nft-detail-block[_ngcontent-%COMP%]{padding:40px 20px}\n.nft-main[_ngcontent-%COMP%]   .nft-topheader[_ngcontent-%COMP%]{display:none}\n\n\n.nft-collection-details[_ngcontent-%COMP%]   .nft-collection-profile[_ngcontent-%COMP%]   ul.collection-tab-list[_ngcontent-%COMP%]{display:inline-block}\n.nft-collection-details[_ngcontent-%COMP%]   .nft-collection-profile[_ngcontent-%COMP%]   ul.collection-tab-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:49%;}\n.nft-collection-details[_ngcontent-%COMP%]   .nft-collection-profile[_ngcontent-%COMP%]   ul.collection-tab-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){border-right:1px solid #e5e8eb}\n}\n@media(max-width:480px)\n{\n.nft-main[_ngcontent-%COMP%]   .nft-detail-sub[_ngcontent-%COMP%]   .nft-detail-block[_ngcontent-%COMP%]{padding:40px 10px}\n.nft-main[_ngcontent-%COMP%]   .nft-details-section[_ngcontent-%COMP%]   ul.details_content_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.detail_content_sub[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){width:52%}\n.nft-main[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]   .filter_block[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%]   .select_drop[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:100%}\n.nft-main[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]   .filter_block[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%]   .selected_lists[_ngcontent-%COMP%]{margin:10px 5px 10px 5px;display:inline-block}\n.nft-main[_ngcontent-%COMP%]   .nft-details-section[_ngcontent-%COMP%]{padding:0 0 0 0}\n.nft-main[_ngcontent-%COMP%]   .details-block[_ngcontent-%COMP%]   .filter_block[_ngcontent-%COMP%]   .float-left[_ngcontent-%COMP%]   .selected_lists[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:10px 0 10px 0;display:inline-block}\n.nft-main[_ngcontent-%COMP%]   .nft-description-content[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-bottom:15px;display:block}\n.nft-main[_ngcontent-%COMP%]   .nft-banner-right[_ngcontent-%COMP%]   ul.nft-detail-product[_ngcontent-%COMP%]{text-align:center}\n.nft-main[_ngcontent-%COMP%]   .nft-banner-right[_ngcontent-%COMP%]   ul.nft-detail-product[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGVBQWUsQ0FBQztBQUMvQiw0QkFBNEIsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7QUFDbkUsc0JBQXNCLDRCQUFxRCxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsMkJBQTJCO0FBQ3pKLHVDQUF1QyxXQUFXO0FBQ2xELHNDQUFzQyxZQUFZLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLGVBQWU7QUFDNUgseUNBQXlDLG9CQUFvQjtBQUM3RCxxREFBcUQsU0FBUztBQUM5RCxvREFBb0QsU0FBUyxDQUFDLGlCQUFpQjtBQUMvRSw2Q0FBNkMsY0FBYyxDQUFDLGtCQUFrQjtBQUM5RSw0Q0FBNEMsY0FBYyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RyxpREFBaUQsYUFBYTtBQUM5RCwyQ0FBMkMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0I7QUFDMUYsMkNBQTJDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsYUFBYTtBQUNoTyxpREFBaUQsMEJBQTBCLENBQUMsd0dBQXdHLENBQUMsY0FBYyxDQUFDLG9CQUFvQjtBQUV4Tix3QkFBd0Isa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7QUFDN0QsMkNBQTJDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUMvRiw4Q0FBOEMsY0FBYyxDQUFDLGFBQWE7QUFDMUUsb0NBQW9DLFlBQVksQ0FBQyxhQUFhLENBQUMsa0JBQWtCO0FBQ2pGLHVDQUF1QyxvQkFBb0IsQ0FBQztBQUM1RCx5Q0FBeUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsa0NBQWtDO0FBQ3BNLGdEQUFnRCwwQkFBMEIsQ0FBQyx1R0FBdUcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CO0FBQ3JOLCtDQUErQywwQkFBMEIsQ0FBQyx1R0FBdUcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CO0FBRXBOLG9CQUFvQixVQUFVLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsb0JBQW9CO0FBQzVGLG1DQUFtQyxxQkFBcUI7QUFDeEQsdUNBQXVDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxhQUFhO0FBQ3BGLHFDQUFxQyxjQUFjLENBQUMsYUFBYTtBQUNqRSxxQ0FBcUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLGlCQUFpQixDQUFDO0FBQ25KLDJDQUEyQyxrQkFBa0IsQ0FBQztBQUM5RCxxREFBcUQsVUFBVSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLDJCQUEyQjtBQUNsSSx3Q0FBd0MsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQ3RHLHVDQUF1QyxjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUI7QUFFckcsd0JBQXdCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQztBQUM3RiwyQ0FBMkMsa0JBQWtCO0FBQzdELDhDQUE4QyxlQUFlLEVBQUUsY0FBYyxDQUFDLGFBQWE7QUFDM0YsNkNBQTZDLGNBQWMsQ0FBQyxhQUFhO0FBQ3pFLDhDQUE4QyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0FBQy9LLG9EQUFvRCxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFvQywwQkFBMEIsRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLENBQUM7QUFDL0ssMERBQXVGLG9CQUFvQjtBQUMzRyw2Q0FBNkMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsUUFBUTtBQUNuSSxnREFBZ0QsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFO0FBQ2xKLG1EQUFtRCxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWU7QUFDakgsa0RBQWtELGNBQWMsQ0FBQyxhQUFhLENBQUMsZUFBZTtBQUM5RiwrQkFBK0IsZUFBZSxDQUFDO0FBRS9DLDRCQUE0QixVQUFVLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCO0FBQ2hHLDhCQUE4QixjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxZQUFZO0FBRXZGLHdEQUF3RCxrQkFBa0IsRUFBRSwyQkFBMkIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7QUFDOUk7SUFDSSxlQUFlLGVBQWUsQ0FBQztBQUNuQztBQUVBOztBQUVBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBRUE7O0FBRUEsNENBQTRDLGNBQWM7QUFDMUQsZ0dBQWdHLFNBQVM7QUFDekcsNkNBQTZDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBQ2hGLG1EQUFtRCxlQUFlLEVBQUU7QUFDcEUsK0NBQStDLGtCQUFrQixDQUFDO0FBQ2xFO0FBRUE7O0FBRUEsK0RBQStELFdBQVc7QUFDMUUsbUVBQW1FLFdBQVcsQ0FBQyxtQkFBZSxDQUFmLGdCQUFnQjtBQUMvRjtBQUVBOztBQUVBLHNCQUFzQixZQUFZO0FBQ2xDLDJEQUEyRCxjQUFjO0FBQ3pFLDJCQUEyQixXQUFXO0FBQ3RDLHNHQUFzRyxVQUFVLENBQUMsaUJBQWlCO0FBQ2xJLHFHQUFxRyxVQUFVLENBQUMsaUJBQWlCO0FBQ2pJLGlEQUFpRCxpQkFBaUI7QUFDbEUsc0RBQXNELGNBQWM7QUFDcEUsbURBQW1ELGNBQWM7QUFDakUsNENBQTRDLGNBQWM7QUFDMUQsb0NBQW9DLGlCQUFpQjtBQUNyRCwwQkFBMEIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQjtBQUN6RSwrQ0FBK0MsYUFBYSxDQUFDO0FBQzdELGVBQWUsZ0JBQWdCLENBQUM7OztBQUdoQyxHQUFHO0FBQ0gsOENBQThDLGtCQUFrQixDQUFDLFdBQVc7QUFDNUU7QUFFQTs7QUFFQSxxR0FBcUcsYUFBYTtBQUNsSCwyQkFBMkIsaUJBQWlCLENBQUMsa0JBQWtCO0FBQy9ELHNDQUFzQyxvQkFBb0I7QUFDMUQsMkNBQTJDLGlCQUFpQjtBQUM1RCw0Q0FBNEMsY0FBYztBQUMxRCw4QkFBOEIsY0FBYztBQUM1Qyx5R0FBeUcsVUFBVSxDQUFDLGNBQWM7QUFDbEksOENBQThDLFVBQVU7QUFDeEQsa0RBQWtELHFCQUFpQixDQUFqQixrQkFBa0I7QUFDcEUsK1BBQStQLGNBQWM7QUFDN1EsOENBQThDLFVBQVUsQ0FBQyxpQkFBaUI7QUFDMUUscUVBQXFFLFdBQVc7QUFDaEYsdUtBQXVLLFVBQVUsQ0FBQyxZQUFZO0FBQzlMLDBGQUEwRixZQUFZO0FBQ3RHLDRFQUE0RSxrQkFBa0I7QUFDOUYsc0NBQXNDLGlCQUFpQixDQUFDLGtCQUFrQjs7O0FBRzFFLEdBQUc7QUFDSCx1R0FBdUcsVUFBVSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN2Siw0Q0FBNEMsaUJBQWlCO0FBQzdELHlCQUF5QixZQUFZOzs7QUFHckMsdUVBQXVFLG9CQUFvQjtBQUMzRiwwRUFBMEUsU0FBUyxDQUFDO0FBQ3BGLHVGQUF1Riw4QkFBOEI7QUFDckg7QUFFQTs7QUFFQSw0Q0FBNEMsaUJBQWlCO0FBQzdELGdHQUFnRyxTQUFTO0FBQ3pHLDhFQUE4RSxVQUFVO0FBQ3hGLG1FQUFtRSx3QkFBd0IsQ0FBQyxvQkFBb0I7QUFDaEgsK0JBQStCLGVBQWU7QUFDOUMscUVBQXFFLG9CQUFvQixDQUFDLG9CQUFvQjtBQUM5RyxvREFBb0Qsa0JBQWtCLENBQUMsYUFBYTtBQUNwRixrREFBa0QsaUJBQWlCO0FBQ25FLHFEQUFxRCxhQUFhO0FBQ2xFIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBDb250YWluZXIge21hcmdpbjo1OHB4IDAgMDt9XG4ubmZ0LW1haW4gLmNvbnRhaW5lci1mbHVpZCB7cGFkZGluZy1sZWZ0OiA1MHB4O3BhZGRpbmctcmlnaHQ6IDUwcHg7fVxuLm5mdC1tYWluIC5uZnQtYmFubmVye2JhY2tncm91bmQ6dXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLmpwZycpO3dpZHRoOjEwMCU7aGVpZ2h0OjcwMHB4O2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fVxuLm5mdC1tYWluIC5uZnQtYmFubmVyIC5jb250YWluZXItZmx1aWR7aGVpZ2h0OjEwMCV9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3Rze2hlaWdodDogMTAwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cGFkZGluZy1sZWZ0OiAwfVxuLm5mdC1tYWluIC5uZnQtYmFubmVyIHVsLmJhbm5lcl9saXN0cyBsaXtkaXNwbGF5OmlubGluZS1ibG9ja31cbi5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHMgbGk6Zmlyc3QtY2hpbGR7d2lkdGg6NDUlfVxuLm5mdC1tYWluIC5uZnQtYmFubmVyIHVsLmJhbm5lcl9saXN0cyBsaTpsYXN0LWNoaWxke3dpZHRoOjU1JTt0ZXh0LWFsaWduOmNlbnRlcn1cbi5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHMgbGkgaW1ne21heC13aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6MTBweH1cbi5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHMgbGkgaDJ7Zm9udC1zaXplOjQ2cHg7Y29sb3I6IzAwMDAwMDsgZm9udC13ZWlnaHQ6IDcwMDsgbGluZS1oZWlnaHQ6IDU1cHg7fVxuLm5mdC1tYWluIC5uZnQtYmFubmVyIHVsLmJhbm5lcl9saXN0cyBsaSBoMiBzcGFue2NvbG9yOiNlZTI5NGZ9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpIHB7Zm9udC1zaXplOjE2cHg7Y29sb3I6IzdhN2E3YTttYXJnaW4tYm90dG9tOjUwcHh9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpIGF7d2lkdGg6MTEwcHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkICNmZjJjNTE7Zm9udC1zaXplOjE2cHg7cGFkZGluZzo4cHggMjBweDtib3JkZXItcmFkaXVzOjQzcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXJpZ2h0OjIwcHg7Y29sb3I6I2ZmMmI1MH1cbi5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHMgbGkgYTpob3ZlcntiYWNrZ3JvdW5kOnJnYigyNTUsNjcsMTAwKTtiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDY3LDEwMCwxKSAwJSwgcmdiYSgyNTUsNzEsNzUsMSkgNTAlLCByZ2JhKDI1NSw3NCw0NywxKSAxMDAlKTtjb2xvcjogI2ZmZmZmZjt0ZXh0LWRlY29yYXRpb246bm9uZX1cblxuLm5mdC1tYWluIC5uZnQtdHJlbmRpbmd7bWFyZ2luLWJvdHRvbTozMHB4OyBtYXJnaW4tdG9wOiAzMHB4O31cbi5uZnQtbWFpbiAubmZ0LXRyZW5kaW5nIC5uZnQtdHJlbmRpbmctaGVhZHt3aWR0aDogMTAwJTttYXJnaW4tYm90dG9tOjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxuLm5mdC1tYWluIC5uZnQtdHJlbmRpbmcgLm5mdC10cmVuZGluZy1oZWFkIGgye2ZvbnQtc2l6ZTozMHB4O2NvbG9yOiMwMDAwMDB9XG4ubmZ0LW1haW4gLm5mdC10cmVuZGluZyB1bC50b3BfdGFic3twYWRkaW5nOjEwcHg7bWFyZ2luOjEwcHggMDtiYWNrZ3JvdW5kOiNmYWZhZmF9XG4ubmZ0LW1haW4gLm5mdC10cmVuZGluZyB1bC50b3BfdGFicyBsaXtkaXNwbGF5OmlubGluZS1ibG9jazt9XG4ubmZ0LW1haW4gLm5mdC10cmVuZGluZyB1bC50b3BfdGFicyBsaSBhe2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiM3YTdhN2E7cGFkZGluZzo2cHggMTVweDttYXJnaW46MTBweCA1cHg7YmFja2dyb3VuZDojZmZmZmZmO2JvcmRlci1yYWRpdXM6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztib3gtc2hhZG93OjAgNXB4IDE1cHggLTVweCAjY2NjY2NjfVxuLm5mdC1tYWluIC5uZnQtdHJlbmRpbmcgdWwudG9wX3RhYnMgbGkuYWN0aXZlIGF7YmFja2dyb3VuZDpyZ2IoMjU1LDY3LDEwMCk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDY3LDEwMCwxKSAwJSwgcmdiYSgyNTUsNzEsNzUsMSkgNTAlLCByZ2JhKDI1NSw3NCw0NywxKSAxMDAlKTtjb2xvcjojZmZmZmZmO3RleHQtZGVjb3JhdGlvbjpub25lfVxuLm5mdC1tYWluIC5uZnQtdHJlbmRpbmcgdWwudG9wX3RhYnMgbGkgYTpob3ZlcntiYWNrZ3JvdW5kOnJnYigyNTUsNjcsMTAwKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsNjcsMTAwLDEpIDAlLCByZ2JhKDI1NSw3MSw3NSwxKSA1MCUsIHJnYmEoMjU1LDc0LDQ3LDEpIDEwMCUpO2NvbG9yOiNmZmZmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XG5cbi5uZnQtbWFpbiAubmZ0LXNlbGx7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiNmZGVmZWQ7cGFkZGluZzo0MHB4IDAgNjBweCAwO2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxuLm5mdC1tYWluIC5uZnQtc2VsbCAubmZ0LXNlbGwtaGVhZHtwYWRkaW5nOjE1cHggMCAzNXB4IDB9XG4ubmZ0LW1haW4gLm5mdC1zZWxsIC5uZnQtc2VsbC1oZWFkIGgyeyBmb250LXdlaWdodDogNzAwO2ZvbnQtc2l6ZTozMHB4O2NvbG9yOiMwMDAwMDB9XG4ubmZ0LW1haW4gLm5mdC1zZWxsIC5uZnQtc2VsbC1oZWFkIHB7Zm9udC1zaXplOjE2cHg7Y29sb3I6IzdhN2E3YX1cbi5uZnQtbWFpbiAubmZ0LXNlbGwgLm5mdC1zZWxsLWJsb2Nrc3tiYWNrZ3JvdW5kOiNmM2VjZmE7cGFkZGluZzoxNXB4O2JvcmRlci1yYWRpdXM6MjBweDttYXJnaW4tYm90dG9tOjMwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7IG1pbi1oZWlnaHQ6IDMwMHB4O31cbi5uZnQtbWFpbiAubmZ0LXNlbGwgLm5mdC1zZWxsLWJsb2Nrczpob3ZlcntiYWNrZ3JvdW5kOiNmNmY5ZWY7fVxuLm5mdC1tYWluIC5uZnQtc2VsbCAubmZ0LXNlbGwtYmxvY2tzIC5uZnQtc2VsbC1pbWFnZXt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MjBweCAyMHB4IDQwcHggMjBweH1cbi5uZnQtbWFpbiAubmZ0LXNlbGwgLm5mdC1zZWxsLWJsb2NrcyBoNHtmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6MThweDtjb2xvcjojMDAwMDAwO3RleHQtYWxpZ246bGVmdH1cbi5uZnQtbWFpbiAubmZ0LXNlbGwgLm5mdC1zZWxsLWJsb2NrcyBwe2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiM3YTdhN2E7dGV4dC1hbGlnbjpsZWZ0O21hcmdpbi1ib3R0b206NXB4fVxuXG4ubmZ0LW1haW4gLm5mdC1jYXRlZ29yeXt3aWR0aDoxMDAlO3BhZGRpbmc6MCAwIDYwcHggMDtkaXNwbGF5OmlubGluZS1ibG9jazsgbWFyZ2luLXRvcDogMzBweDt9XG4ubmZ0LW1haW4gLm5mdC1jYXRlZ29yeSAubmZ0LWNhdGVnb3J5LWhlYWR7cGFkZGluZzowIDAgMjBweCAwfVxuLm5mdC1tYWluIC5uZnQtY2F0ZWdvcnkgLm5mdC1jYXRlZ29yeS1oZWFkIGgye2ZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjMwcHg7Y29sb3I6IzAwMDAwMH1cbi5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IC5uZnQtY2F0ZWdvcnktaGVhZCBwe2ZvbnQtc2l6ZToxNnB4O2NvbG9yOiM3YTdhN2F9XG4ubmZ0LW1haW4gLm5mdC1jYXRlZ29yeSAubmZ0LWNhdGVnb3J5LWxpc3Rpbmd7ZGlzcGxheTogaW5saW5lLWJsb2NrO2hlaWdodDozMDBweDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MCAycHg7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czoyMHB4fVxuLm5mdC1tYWluIC5uZnQtY2F0ZWdvcnkgLm5mdC1jYXRlZ29yeS1saXN0aW5nID4gaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXJhZGl1czoxMHB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4ycyBsaW5lYXI7dHJhbnNpdGlvbjphbGwgMC4ycyBsaW5lYXI7IG9iamVjdC1maXQ6IGNvdmVyO31cbi5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IC5uZnQtY2F0ZWdvcnktbGlzdGluZzpob3ZlciA+IGltZ3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfVxuLm5mdC1tYWluIC5uZnQtY2F0ZWdvcnkgdWwubnRmLWNhdGVnb3J5LWZvb3R7d2lkdGg6MTAwJTtwYWRkaW5nOjE1cHggMTVweDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjB9XG4ubmZ0LW1haW4gLm5mdC1jYXRlZ29yeSB1bC5udGYtY2F0ZWdvcnktZm9vdCBsaXt0ZXh0LWFsaWduOiBsZWZ0OyBwYWRkaW5nOjAgMTVweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IHVsLm50Zi1jYXRlZ29yeS1mb290IGxpIGg0e2ZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZToxNXB4O2NvbG9yOiNmZmZmZmY7bWFyZ2luLWJvdHRvbTowfVxuLm5mdC1tYWluIC5uZnQtY2F0ZWdvcnkgdWwubnRmLWNhdGVnb3J5LWZvb3QgbGkgcHtmb250LXNpemU6MTNweDtjb2xvcjojZmZmZmZmO21hcmdpbi1ib3R0b206MH1cbi5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IC5pdGVtIHtjdXJzb3I6IHBvaW50ZXI7fVxuXG4ubmZ0LW1haW4gLm5mdC1ib3R0b20tYmxvY2t7d2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztiYWNrZ3JvdW5kOiMzMzMzMzM7dGV4dC1hbGlnbjpjZW50ZXJ9XG4ubmZ0LW1haW4gLm5mdC1ib3R0b20tYmxvY2sgcHtmb250LXNpemU6MTZweDtjb2xvcjojZmZmZmZmO21hcmdpbi1ib3R0b206MDtwYWRkaW5nOjExcHh9XG5cbi5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IC5uZnQtY2F0ZWdvcnktbGlzdGluZy1vdmVybGF5IHsgcG9zaXRpb246IGFic29sdXRlOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IHRvcDogMDt9XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46NzNweCAwIDA7fVxufVxuXG5AbWVkaWEobWluLXdpZHRoOjEyMDBweClcbntcbi5uZnQtbWFpbiBmb290ZXIubmZ0LWZvb3RlciAuY29sLTYuY29sLW1ke3BhZGRpbmctbGVmdDo3JX1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogMTE5OXB4KVxue1xuLm5mdC1tYWluIC5uZnQtYmFubmVyIHVsLmJhbm5lcl9saXN0cyBsaSBoM3tmb250LXNpemU6MzZweH1cbi5uZnQtbWFpbiAubmZ0LWRldGFpbHMtc2VjdGlvbiB1bC5kZXRhaWxzX2NvbnRlbnRfbGlzdCBsaSB1bC5kZXRhaWxfY29udGVudF9zdWIgbGk6bnRoLWNoaWxkKDIpe3dpZHRoOjUzJX1cbi5uZnQtbWFpbi5tYXAtY29udGFpbmVyIC5tYXAtY29udGFpbmVyLXRpdGxle3BhZGRpbmctdG9wOjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7fVxuLm5mdC1tYWluIC5uZnQtbGlzdGluZy1tYWluIC5uZnQtbGlzdGluZy1oZWFkIGltZyB7bWF4LXdpZHRoOiAxMDAlOyB9XG4ubmZ0LW1haW4gLm5mdC1saXN0aW5nLW1haW4gLm5mdC1saXN0aW5nLWhlYWQge3RleHQtYWxpZ246IGNlbnRlcjt9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KVxue1xuLm5mdC1tYWluIC5uZnQtZGV0YWlsLXN1YiAubmZ0LWRldGFpbC1ibG9jayAubmZ0LWRldGFpbC1iYW5uZXJ7aGVpZ2h0OjEwMCV9XG4ubmZ0LW1haW4gLm5mdC1kZXRhaWwtc3ViIC5uZnQtZGV0YWlsLWJsb2NrIC5uZnQtZGV0YWlsLWJhbm5lciBpbWd7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcn1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXG57XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXJ7aGVpZ2h0OjYwMHB4fVxuLm5mdC1tYWluIC5uZnQtcmVzb3VyY2VzLWJhbm5lciB1bC5uZnQtcmVzb3VyY2VzLWxpc3QgbGkgcHtmb250LXNpemU6MTRweH1cbi5uZnQtc2VsbCAubmZ0LXNlbGwtYmxvY2tze2hlaWdodDphdXRvfVxuLm5mdC1tYWluIC5uZnQtbGlzdGluZy1tYWluIC5uZnQtbGlzdGluZy1jb250ZW50IC5uZnQtbGlzdGluZy1mb290IHVsLm5mdC1saXN0aW5nLWxpc3QgbGk6Zmlyc3QtY2hpbGR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn1cbi5uZnQtbWFpbiAubmZ0LWxpc3RpbmctbWFpbiAubmZ0LWxpc3RpbmctY29udGVudCAubmZ0LWxpc3RpbmctZm9vdCB1bC5uZnQtbGlzdGluZy1saXN0IGxpOmxhc3QtY2hpbGR7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn1cbi5uZnQtbWFpbiAubmZ0LWxpc3RpbmctbWFpbiAubmZ0LWxpc3RpbmctY29udGVudHtwYWRkaW5nOjEwcHggMTVweH1cbi5uZnQtbWFpbiAubmZ0LWxpc3RpbmctbWFpbiAubmZ0LWxpc3RpbmctY29udGVudCBoNCBhe2ZvbnQtc2l6ZToxOHB4fVxuLm5mdC1tYWluIC5uZnQtbGlzdGluZy1tYWluIC5uZnQtbGlzdGluZy1jb250ZW50IHB7Zm9udC1zaXplOjE0cHh9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpIGgze2ZvbnQtc2l6ZTozMHB4fVxuLm5mdC1tYWluIC5uZnQtdHJlbmRpbmcgdWwudG9wX3RhYnN7dGV4dC1hbGlnbjpjZW50ZXJ9XG4ubmZ0LW1haW4gLmZvb3Rlci1kZXRhaWxze3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToyMHB4fVxuLm5mdC1tYWluIC5uZnQtY2F0ZWdvcnkgLm5mdC1jYXRlZ29yeS1saXN0aW5nIHtoZWlnaHQ6IDIwMHB4O31cbi5hcHBDb250YWluZXIge21hcmdpbjogNjVweCAwIDA7fVxuXG5cbi8qKi9cbi5uZnQtbWFpbiAubmZ0LWRldGFpbHMtc2VjdGlvbiAuZGV0YWlscy1ibG9ja3ttYXJnaW4tYm90dG9tOjMwcHg7aGVpZ2h0OmF1dG99XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweClcbntcbi5uZnQtbWFpbiB1bC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtOm50aC1sYXN0LWNoaWxkKDIpLC5uZnQtbWFpbiB1bC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtOmxhc3QtY2hpbGR7ZGlzcGxheTpibG9ja31cbi5uZnQtbWFpbiAuY29udGFpbmVyLWZsdWlke3BhZGRpbmctbGVmdDoxNXB4O3BhZGRpbmctcmlnaHQ6MTVweH1cbi5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHN7ZGlzcGxheTppbmxpbmUtYmxvY2t9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpIGF7bWFyZ2luLXJpZ2h0OjEwcHh9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpIGgze2ZvbnQtc2l6ZToyMHB4fVxuLm5mdC1zZWxsIC5uZnQtc2VsbC1ibG9ja3MgaDR7Zm9udC1zaXplOjE0cHh9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXIgdWwuYmFubmVyX2xpc3RzIGxpOmZpcnN0LWNoaWxkLC5uZnQtbWFpbiAubmZ0LWJhbm5lciB1bC5iYW5uZXJfbGlzdHMgbGk6bGFzdC1jaGlsZHt3aWR0aDoxMDAlO3BhZGRpbmc6MjBweCAwfVxuLm5mdC1tYWluIC5uZnQtbGlzdGluZy1tYWluIC5uZnQtbGlzdGluZy1oZWFke3dpZHRoOjEwMCV9XG4ubmZ0LW1haW4gLm5mdC1saXN0aW5nLW1haW4gLm5mdC1saXN0aW5nLWhlYWQgaW1ne29iamVjdC1maXQ6Y29udGFpbn1cbi5uZnQtbWFpbiAuZXhjbHVzaXZlX2NvbnRhaW5lciAuaHBhbmVsIC5mbG9hdC1sZWZ0IGgzLC5uZnQtbWFpbiAubmZ0LXRyZW5kaW5nIC5uZnQtdHJlbmRpbmctaGVhZCBoMywubmZ0LW1haW4gLm5mdC1zZWxsIC5uZnQtc2VsbC1oZWFkIGgzLC5uZnQtbWFpbiAubmZ0LXJlc291cmNlcyAubmZ0LXJlc291cmNlcy1oZWFkIGgzLC5uZnQtbWFpbiAubmZ0LWNhdGVnb3J5IC5uZnQtY2F0ZWdvcnktaGVhZCBoMywubmZ0LW1haW4gLm5mdC1qb2luIGgze2ZvbnQtc2l6ZToyMHB4fVxuLm5mdC1tYWluIC5mbG9hdC1sZWZ0LCAubmZ0LW1haW4gLmZsb2F0LXJpZ2h0e3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9XG4ubmZ0LW1haW4gLm5mdC1yZXNvdXJjZXMgLm5mdC1yZXNvdXJjZXMtYmFubmVyIHVsLm5mdC1yZXNvdXJjZXMtbGlzdHtoZWlnaHQ6YXV0b31cbi5uZnQtbWFpbiAubmZ0LXJlc291cmNlcyAubmZ0LXJlc291cmNlcy1iYW5uZXIgdWwubmZ0LXJlc291cmNlcy1saXN0IGxpOmZpcnN0LWNoaWxkLC5uZnQtbWFpbiAubmZ0LXJlc291cmNlcyAubmZ0LXJlc291cmNlcy1iYW5uZXIgdWwubmZ0LXJlc291cmNlcy1saXN0IGxpOmxhc3QtY2hpbGR7d2lkdGg6MTAwJTtwYWRkaW5nOjE1cHh9XG4ubmZ0LW1haW4gLm5mdC1yZXNvdXJjZXMgLm5mdC1yZXNvdXJjZXMtYmFubmVyIHVsLm5mdC1yZXNvdXJjZXMtbGlzdCBsaTpmaXJzdC1jaGlsZDphZnRlcntkaXNwbGF5Om5vbmV9XG4ubmZ0LW1haW4gLm5mdC1yZXNvdXJjZXMgLm5mdC1yZXNvdXJjZXMtYmFubmVyIHVsLm5mdC1yZXNvdXJjZXMtbGlzdCBsaSBpbWd7Ym9yZGVyLXJhZGl1czoyMHB4fVxuLm5mdC1tYWluIC5uZnQtZm9vdGVyIC5mb290ZXItZGV0YWlsc3t0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjUwcHh9XG5cblxuLyoqL1xuLm5mdC1tYWluIC5kZXRhaWxzLWJsb2NrIC5maWx0ZXJfYmxvY2sgLmZsb2F0LWxlZnQsLm5mdC1tYWluIC5kZXRhaWxzLWJsb2NrIC5maWx0ZXJfYmxvY2sgLmZsb2F0LXJpZ2h0e3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZy1ib3R0b206MTVweH1cbi5uZnQtbWFpbiAubmZ0LWRldGFpbC1zdWIgLm5mdC1kZXRhaWwtYmxvY2t7cGFkZGluZzo0MHB4IDIwcHh9XG4ubmZ0LW1haW4gLm5mdC10b3BoZWFkZXJ7ZGlzcGxheTpub25lfVxuXG5cbi5uZnQtY29sbGVjdGlvbi1kZXRhaWxzIC5uZnQtY29sbGVjdGlvbi1wcm9maWxlIHVsLmNvbGxlY3Rpb24tdGFiLWxpc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9XG4ubmZ0LWNvbGxlY3Rpb24tZGV0YWlscyAubmZ0LWNvbGxlY3Rpb24tcHJvZmlsZSB1bC5jb2xsZWN0aW9uLXRhYi1saXN0IGxpe3dpZHRoOjQ5JTt9XG4ubmZ0LWNvbGxlY3Rpb24tZGV0YWlscyAubmZ0LWNvbGxlY3Rpb24tcHJvZmlsZSB1bC5jb2xsZWN0aW9uLXRhYi1saXN0IGxpOm50aC1jaGlsZCgyKXtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNlNWU4ZWJ9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpXG57XG4ubmZ0LW1haW4gLm5mdC1kZXRhaWwtc3ViIC5uZnQtZGV0YWlsLWJsb2Nre3BhZGRpbmc6NDBweCAxMHB4fVxuLm5mdC1tYWluIC5uZnQtZGV0YWlscy1zZWN0aW9uIHVsLmRldGFpbHNfY29udGVudF9saXN0IGxpIHVsLmRldGFpbF9jb250ZW50X3N1YiBsaTpudGgtY2hpbGQoMil7d2lkdGg6NTIlfVxuLm5mdC1tYWluIC5kZXRhaWxzLWJsb2NrIC5maWx0ZXJfYmxvY2sgLmZsb2F0LWxlZnQgLnNlbGVjdF9kcm9wIC5mb3JtLWNvbnRyb2x7d2lkdGg6MTAwJX1cbi5uZnQtbWFpbiAuZGV0YWlscy1ibG9jayAuZmlsdGVyX2Jsb2NrIC5mbG9hdC1sZWZ0IC5zZWxlY3RlZF9saXN0c3ttYXJnaW46MTBweCA1cHggMTBweCA1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9XG4ubmZ0LW1haW4gLm5mdC1kZXRhaWxzLXNlY3Rpb257cGFkZGluZzowIDAgMCAwfVxuLm5mdC1tYWluIC5kZXRhaWxzLWJsb2NrIC5maWx0ZXJfYmxvY2sgLmZsb2F0LWxlZnQgLnNlbGVjdGVkX2xpc3RzIGF7bWFyZ2luOjEwcHggMCAxMHB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2t9XG4ubmZ0LW1haW4gLm5mdC1kZXNjcmlwdGlvbi1jb250ZW50IC5jdXJyZW50LXByaWNlIGF7bWFyZ2luLWJvdHRvbToxNXB4O2Rpc3BsYXk6YmxvY2t9XG4ubmZ0LW1haW4gLm5mdC1iYW5uZXItcmlnaHQgdWwubmZ0LWRldGFpbC1wcm9kdWN0e3RleHQtYWxpZ246Y2VudGVyfVxuLm5mdC1tYWluIC5uZnQtYmFubmVyLXJpZ2h0IHVsLm5mdC1kZXRhaWwtcHJvZHVjdCBsaXttYXJnaW46MTBweCAwfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__["CollectionService"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DZ0t":
    /*!*********************************************************!*\
      !*** ./src/app/components/profile/profile.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function DZ0t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var src_app_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/constants/api */
      "6p9a");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../UI/loader/loader.component */
      "poLh");
      /*
      Project : Cryptotrades
      FileName :  profile.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to load profile layout in user screen
      */


      var _c0 = ["topContainer"];
      var _c1 = ["profileContainer"];

      function ProfileComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_div_7_Template_input_change_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.uploadCover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r2.cover_uploader);
        }
      }

      function ProfileComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_div_12_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.uploadAvatar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r4.uploader);
        }
      }

      function ProfileComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_13_Template_p_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.copyAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.profile_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.userInfo.public_key.substring(0, 4), "...", ctx_r5.userInfo.public_key.substring(ctx_r5.userInfo.public_key.length - 4), "");
        }
      }

      function ProfileComponent_span_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Collected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favorited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_a_34_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_a_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_a_34_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.profileLink("activity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_a_34_span_2_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.isToggled);
        }
      }

      function ProfileComponent_a_36_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_a_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_a_36_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.profileLink("offers");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_a_36_span_2_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.isToggled);
        }
      }

      function ProfileComponent_app_loader_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "height": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "min-height": a0
        };
      };

      var _c4 = function _c4(a0, a1, a2) {
        return {
          "height": a0,
          "top": a1,
          "width": a2
        };
      };

      var _c5 = function _c5(a0) {
        return {
          "fixed": a0
        };
      };

      var _c6 = function _c6(a0, a1) {
        return {
          "cil-arrow-left": a0,
          "cil-arrow-right": a1
        };
      };

      var _c7 = function _c7(a0) {
        return {
          "active": a0
        };
      };

      var _c8 = function _c8(a0, a1) {
        return {
          "fixedContainer": a0,
          "minimizeContainer": a1
        };
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(userService, router, clipboard, snackBar) {
          var _this5 = this;

          _classCallCheck(this, ProfileComponent);

          this.userService = userService;
          this.router = router;
          this.clipboard = clipboard;
          this.snackBar = snackBar;
          this.isFixedSidebar = false;
          this.isToggled = false;
          this.innerHeight = 0;
          this.topMenuHeight = 0;
          this.topMenuHeightAdjustment = 0;
          this.topHeight = 0;
          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__["config"].media_path;
          this.type = "collected";
          this.currentUserID = "";
          this.ownProfile = false;
          this.userInfo = null;
          this.profile_image = 'nouser.jpg';
          this.profile_cover = 'default.jpg';
          this.profile_name = '';
          this.avatarname = '';
          this.covername = '';
          this.spinner = false;
          /**
           * This is the function which used to get profile information for user
           */

          this.getProfileInfo = function () {
            _this5.userService.viewProfile(_this5.currentUserID).subscribe(function (result) {
              var resulter = result;
              _this5.userInfo = resulter.result;

              _this5.updateProfileInfo();
            });
          };
          /**
           * This is the function which initiate profile image upload on button click
           */


          this.uploadAvatar = function () {
            _this5.spinner = true;

            _this5.uploader.uploadAll();
          };
          /**
           * This is the function which initiate profile cover upload on button click
           */


          this.uploadCover = function () {
            _this5.spinner = true;

            _this5.cover_uploader.uploadAll();
          };
          /**
           * This is the function which parse profile information for display
           */


          this.updateProfileInfo = function () {
            _this5.profile_cover = _this5.userInfo.profile_cover ? _this5.userInfo.profile_cover : 'default.jpg';
            _this5.profile_image = _this5.userInfo.profile_image.length > 0 ? _this5.userInfo.profile_image : 'nouser.jpg';
            _this5.profile_name = _this5.userInfo.first_name + ' ' + _this5.userInfo.last_name;
          };
          /**
           * This is the function which used to copy ethereum address
           */


          this.copyAddress = function () {
            _this5.clipboard.copy(_this5.userInfo.public_key);

            _this5.snackBar.open('Ethereum address copied', "", {
              duration: 2000
            });
          };
          /**
           * This is the function which used to minimize and maximize the profile side bar
           */


          this.minimizeMenu = function () {
            _this5.isToggled = _this5.isToggled ? false : true;
          };
          /**
           * This is the function which used to navigate user to different profile pages
           */


          this.profileLink = function (pageName) {
            _this5.router.navigate(['/profile/' + _this5.currentUserID + '/' + pageName]);

            try {
              _this5.profileContainer.nativeElement.scrollTop = 0;
            } catch (err) {}
          };
          /**
           * This is the function which used to update user profile information through api
           */


          this.updateProfileApi = function (params) {
            _this5.userService.updateApi(params, _this5.currentUser.user_id).subscribe(function (result) {
              _this5.spinner = false;

              _this5.snackBar.open(result.message, "", {
                duration: 2000
              });

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);
                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__["config"].base_url + '/profile/' + _this5.currentUser.user_id;
              }
            });
          };

          this.topContainer = this.profileContainer = this.subscription;
          this.currentUser = this.userService.getUser();
          this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (event) {
            var url = event.url.split("/").pop();

            if (url != 'created' && url != 'activity' && url != 'offers' && url != 'favorited') {
              _this5.type = "collected";
            } else {
              _this5.type = url;
            }

            var user_id = event.url.replace('/' + _this5.type, '').split("/").pop();

            if (_this5.currentUserID != user_id) {
              _this5.currentUserID = user_id;

              if (_this5.currentUser) {
                _this5.ownProfile = _this5.currentUser.user_id == _this5.currentUserID ? true : false;
              } else {
                _this5.ownProfile = false;
              }

              if (!_this5.ownProfile && _this5.type != "created" && _this5.type != "collected" && _this5.type != "favorited") {
                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_3__["config"].base_url;
              }

              _this5.getProfileInfo();
            }
          });
          this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_5__["API"].base_url + '/media/avatar',
            allowedMimeType: ['image/png', 'image/jpeg'],
            autoUpload: false,
            isHTML5: true,
            queueLimit: 1000,
            removeAfterUpload: false,
            headers: [{
              name: 'X-Requested-With',
              value: 'XMLHttpRequest'
            }]
          });

          this.uploader.onBuildItemForm = function (fileItem, form) {};

          this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.uploader.onAfterAddingFile = function (file) {
            console.log("file is ", file);
            var ext = file.file.type == "image/png" ? ".png" : ".jpg";
            _this5.avatarname = _this5.currentUser.username + "_" + new Date().getTime() + ext;
            file.file.name = _this5.avatarname;
          };

          this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item);
            console.log('Item');
            var _this = _this5;
            _this5.profile_image = _this5.avatarname;

            _this5.updateProfileApi({
              profile_image: _this5.profile_image
            });
          };

          this.uploader.onWhenAddingFileFailed = function (item) {
            var that = _this5;
            setTimeout(function () {
              that.spinner = false;
            }, 1000);

            _this5.snackBar.open("Uploaded file should be JPEG/PNG", "", {
              duration: 2000
            });
          };

          this.cover_uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_5__["API"].base_url + '/media/cover',
            allowedMimeType: ['image/png', 'image/jpeg'],
            autoUpload: false,
            isHTML5: true,
            queueLimit: 1000,
            removeAfterUpload: false,
            headers: [{
              name: 'X-Requested-With',
              value: 'XMLHttpRequest'
            }]
          });

          this.cover_uploader.onBuildItemForm = function (fileItem, form) {};

          this.cover_uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.cover_uploader.onAfterAddingFile = function (file) {
            console.log("file is ", file);
            var ext = file.file.type == "image/png" ? ".png" : ".jpg";
            _this5.covername = _this5.currentUser.username + "_" + new Date().getTime() + ext;
            file.file.name = _this5.covername;
          };

          this.cover_uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item);
            console.log('Item');
            var _this = _this5;
            _this5.profile_cover = _this5.covername;

            _this5.updateProfileApi({
              profile_cover: _this5.profile_cover
            });
          };

          this.cover_uploader.onWhenAddingFileFailed = function (item) {
            var that = _this5;
            setTimeout(function () {
              that.spinner = false;
            }, 1000);

            _this5.snackBar.open("Uploaded file should be JPEG/PNG", "", {
              duration: 2000
            });
          };
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.topMenuHeight = window.innerWidth > 990 ? 73 : 58;
            this.innerHeight = window.innerHeight - this.topMenuHeight;
            this.topMenuHeightAdjustment = window.innerWidth > 990 ? 78 : 78;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.topHeight = this.topContainer.nativeElement.clientHeight;
          }
          /**
           * This is the function which handle sticky sidebar
           */

        }, {
          key: "scrollHandler",
          value: function scrollHandler(event) {
            console.log(event.target.scrollTop);
            console.log(this.topHeight);

            if (event.target.scrollTop < this.topHeight + this.topMenuHeightAdjustment) {
              this.isFixedSidebar = false;
            } else {
              this.isFixedSidebar = true;
            }
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        viewQuery: function ProfileComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.topContainer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.profileContainer = _t.first);
          }
        },
        decls: 41,
        vars: 50,
        consts: [[1, "profileContainer", 3, "ngStyle", "scroll"], ["profileContainer", ""], [1, "topContainer"], ["topContainer", ""], [1, "profileHeader"], [1, "profileCover"], [3, "src"], ["class", "editAction", 4, "ngIf"], ["class", "settingsAction", 4, "ngIf"], [1, "profileAvatar"], [1, "profileAvatarInner"], ["class", "avatarAction", 4, "ngIf"], ["class", "profileSubHeader", 4, "ngIf"], [1, "app-body", 3, "ngStyle"], [1, "custom-sidebar", 3, "ngStyle", "ngClass"], ["appSidebar", ""], [4, "ngIf"], [3, "ngClass", "click"], [3, "ngClass"], ["href", "javascript:void(0);", 3, "click"], [1, "cil-basket"], [1, "cil-note-add"], [1, "cil-heart"], ["href", "javascript:void(0);", 3, "click", 4, "ngIf"], [1, "main", 3, "ngClass"], [1, "container-fluid"], [1, "editAction"], [1, "btn", "btn-secondary"], [1, "icon-note"], ["type", "file", "ng2FileSelect", "", "multiple", "", 3, "uploader", "change"], [1, "settingsAction"], ["routerLink", "/settings", 1, "btn", "btn-secondary"], [1, "icon-settings"], [1, "avatarAction"], [1, "icon-pencil"], [1, "profileSubHeader"], [3, "click"], [1, "fa", "fa-copy"], [1, "cil-bar-chart"], [1, "cil-list-rich"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProfileComponent_Template_div_scroll_0_listener($event) {
              return ctx.scrollHandler($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_7_Template, 4, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_8_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_12_Template, 3, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 6, 3, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_span_18_Template, 2, 0, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_19_listener() {
              return ctx.minimizeMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_22_listener() {
              return ctx.profileLink("collected");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_span_24_Template, 2, 0, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_26_listener() {
              return ctx.profileLink("created");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileComponent_span_28_Template, 2, 0, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_30_listener() {
              return ctx.profileLink("favorited");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileComponent_span_32_Template, 2, 0, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileComponent_a_34_Template, 3, 1, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_a_36_Template, 3, 1, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "main", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProfileComponent_app_loader_40_Template, 1, 0, "app-loader", 16);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c2, ctx.innerHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/cover/" + ctx.profile_cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/user/" + ctx.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfo != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c3, ctx.innerHeight + "px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](28, _c4, ctx.innerHeight + "px", ctx.isFixedSidebar ? ctx.topMenuHeight + "px" : "0px", ctx.isToggled ? "50px" : "240px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c5, ctx.isFixedSidebar == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c6, ctx.isToggled == false, ctx.isToggled == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c7, ctx.type == "collected"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c7, ctx.type == "created"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c7, ctx.type == "favorited"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c7, ctx.type == "activity"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c7, ctx.type == "offers"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownProfile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c8, ctx.isFixedSidebar == true && ctx.isToggled == false, ctx.isFixedSidebar == true && ctx.isToggled == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileSelectDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]],
        styles: [".app-body[_ngcontent-%COMP%] {margin: 0;}\n.profileContainer[_ngcontent-%COMP%] {margin:58px 0 0; overflow-y: auto;}\n.profileCover[_ngcontent-%COMP%] {height: 250px; position: relative;}\n.editAction[_ngcontent-%COMP%] {position: absolute; right:15px; top:15px;}\n.settingsAction[_ngcontent-%COMP%] {position: absolute; right:15px; top:265px; z-index: 2;}\n.avatarAction[_ngcontent-%COMP%] {background-color: rgba(0, 0, 0, 0.7); position: absolute; width: 125px; height: 125px; left: 0; top: 0; border-radius: 50%;  text-align: center; color: #c3c3c3; display: none; cursor: pointer; }\n.avatarAction[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {font-size: 24px; line-height: 125px;}\n.profileCover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%; height: 250px; -o-object-fit: cover; object-fit: cover; }\n.profileHeader[_ngcontent-%COMP%] {position: relative; padding-bottom: 75px;}\n.profileAvatar[_ngcontent-%COMP%] {position: absolute; bottom: 15px; left: 0; right: 0; z-index: 1; }\n.profileAvatarInner[_ngcontent-%COMP%] {width: 125px; height: 125px; margin: 0 auto; position: relative;}\n.profileAvatarInner[_ngcontent-%COMP%]:hover   .avatarAction[_ngcontent-%COMP%] {display: block;}\n.profileAvatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 125px; height: 125px;border-radius: 50%;-o-object-fit: cover;object-fit: cover;}\n.profileSubHeader[_ngcontent-%COMP%] {border-bottom:1px solid #e7e7e7}\n.profileSubHeader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {text-transform: capitalize; margin:0; text-align: center;}\n.profileSubHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {text-align: center; font-size: 15px; margin-bottom: 25px; color: #666; cursor: pointer;}\n.profileSubHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {margin-left: 10px; font-size: 20px; }\n.custom-sidebar[_ngcontent-%COMP%] {border-right: 1px solid #e7e7e7; overflow-x: hidden; overflow-y: auto;}\n.custom-sidebar.fixed[_ngcontent-%COMP%] {position: fixed; left: 0; bottom: 0; top:0;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {position: relative; height: 40px; padding-left: 15px; padding-right: 15px; font-size: 16px; line-height: 40px; text-transform: capitalize; color: #444; margin-top: 10px;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{ display: block;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {position: absolute; right:5px; top:0; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px; cursor: pointer;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {margin: 0; padding: 0;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .custom-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style-type: none;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {position: relative; height: 40px; padding-left: 50px; padding-right: 15px; font-size: 16px; line-height: 40px; text-transform: capitalize; color: #444; border-bottom: 1px solid #e7e7e7; display: block;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {text-decoration: none; background-color: #e7e7e7;}\n.custom-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {position: absolute; right:0; left:5px; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px;}\n.fixedContainer[_ngcontent-%COMP%] {padding-left: 240px;}\n.minimizeContainer[_ngcontent-%COMP%] {padding-left: 50px;}\n.topContainer[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]::before {content:\" \";display:inline-block;width:100%;position:absolute !important;height:100%;top:0;left:0;cursor:pointer;}\n.topContainer[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%] {opacity: 0; position: absolute; width: 100%; height: 125px; top:0;left:0;}\n.avatarAction[_ngcontent-%COMP%]   input[type=\"file\"][_ngcontent-%COMP%]  {position: static;}\n@media (min-width: 992px) {\n    .profileContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLFNBQVMsQ0FBQztBQUNyQixtQkFBbUIsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0FBQ3JELGVBQWUsYUFBYSxFQUFFLGtCQUFrQixDQUFDO0FBQ2pELGFBQWEsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztBQUN0RCxpQkFBaUIsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDdkUsZUFBZSxvQ0FBb0MsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEdBQUcsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUU7QUFDaE4saUJBQWlCLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztBQUNyRCxtQkFBbUIsV0FBVyxFQUFFLGFBQWEsRUFBRSxvQkFBaUIsRUFBakIsaUJBQWlCLEVBQUU7QUFDbEUsZ0JBQWdCLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO0FBQ3pELGdCQUFnQixrQkFBa0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDakYscUJBQXFCLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0FBQ3JGLHlDQUF5QyxjQUFjLENBQUM7QUFDeEQscUJBQXFCLFlBQVksRUFBRSxhQUFhLENBQUMsa0JBQWtCLENBQUMsb0JBQWlCLENBQWpCLGlCQUFpQixDQUFDO0FBQ3RGLG1CQUFtQiwrQkFBK0I7QUFDbEQsc0JBQXNCLDBCQUEwQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztBQUMvRSxxQkFBcUIsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUM7QUFDNUcsdUJBQXVCLGlCQUFpQixFQUFFLGVBQWUsRUFBRTtBQUMzRCxpQkFBaUIsK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7QUFDdkYsdUJBQXVCLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNsRSxvQkFBb0Isa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7QUFDN0wseUJBQXlCLGNBQWMsQ0FBQztBQUN4QyxzQkFBc0Isa0JBQWtCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7QUFDL0osb0JBQW9CLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDMUMsd0NBQXdDLHFCQUFxQixDQUFDO0FBQzlELHlCQUF5QixrQkFBa0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLFdBQVcsRUFBRSxnQ0FBZ0MsRUFBRSxjQUFjLENBQUM7QUFDbE8sK0RBQStELHFCQUFxQixFQUFFLHlCQUF5QixDQUFDO0FBQ2hILDJCQUEyQixrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO0FBQ3BKLGlCQUFpQixtQkFBbUIsQ0FBQztBQUNyQyxvQkFBb0Isa0JBQWtCLENBQUM7QUFDdkMsMENBQTBDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQzNKLGtDQUFrQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzNHLG1DQUFtQyxnQkFBZ0IsQ0FBQztBQUNwRDtJQUNJLG1CQUFtQixlQUFlLENBQUM7QUFDdkMiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1ib2R5IHttYXJnaW46IDA7fVxuLnByb2ZpbGVDb250YWluZXIge21hcmdpbjo1OHB4IDAgMDsgb3ZlcmZsb3cteTogYXV0bzt9XG4ucHJvZmlsZUNvdmVyIHtoZWlnaHQ6IDI1MHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmVkaXRBY3Rpb24ge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6MTVweDsgdG9wOjE1cHg7fVxuLnNldHRpbmdzQWN0aW9uIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjE1cHg7IHRvcDoyNjVweDsgei1pbmRleDogMjt9XG4uYXZhdGFyQWN0aW9uIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEyNXB4OyBoZWlnaHQ6IDEyNXB4OyBsZWZ0OiAwOyB0b3A6IDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgIHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6ICNjM2MzYzM7IGRpc3BsYXk6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsgfVxuLmF2YXRhckFjdGlvbiBpIHtmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAxMjVweDt9XG4ucHJvZmlsZUNvdmVyIGltZyB7d2lkdGg6IDEwMCU7IGhlaWdodDogMjUwcHg7IG9iamVjdC1maXQ6IGNvdmVyOyB9XG4ucHJvZmlsZUhlYWRlciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogNzVweDt9XG4ucHJvZmlsZUF2YXRhciB7cG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE1cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB6LWluZGV4OiAxOyB9XG4ucHJvZmlsZUF2YXRhcklubmVyIHt3aWR0aDogMTI1cHg7IGhlaWdodDogMTI1cHg7IG1hcmdpbjogMCBhdXRvOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxuLnByb2ZpbGVBdmF0YXJJbm5lcjpob3ZlciAuYXZhdGFyQWN0aW9uIHtkaXNwbGF5OiBibG9jazt9XG4ucHJvZmlsZUF2YXRhciBpbWcgeyB3aWR0aDogMTI1cHg7IGhlaWdodDogMTI1cHg7Ym9yZGVyLXJhZGl1czogNTAlO29iamVjdC1maXQ6IGNvdmVyO31cbi5wcm9maWxlU3ViSGVhZGVyIHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTdlN2U3fVxuLnByb2ZpbGVTdWJIZWFkZXIgaDIge3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBtYXJnaW46MDsgdGV4dC1hbGlnbjogY2VudGVyO31cbi5wcm9maWxlU3ViSGVhZGVyIHAge3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNXB4OyBtYXJnaW4tYm90dG9tOiAyNXB4OyBjb2xvcjogIzY2NjsgY3Vyc29yOiBwb2ludGVyO31cbi5wcm9maWxlU3ViSGVhZGVyIHAgaSB7bWFyZ2luLWxlZnQ6IDEwcHg7IGZvbnQtc2l6ZTogMjBweDsgfVxuLmN1c3RvbS1zaWRlYmFyIHtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTdlN2U3OyBvdmVyZmxvdy14OiBoaWRkZW47IG92ZXJmbG93LXk6IGF1dG87fVxuLmN1c3RvbS1zaWRlYmFyLmZpeGVkIHtwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6IDA7IGJvdHRvbTogMDsgdG9wOjA7fVxuLmN1c3RvbS1zaWRlYmFyIGg0IHtwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogNDBweDsgcGFkZGluZy1sZWZ0OiAxNXB4OyBwYWRkaW5nLXJpZ2h0OiAxNXB4OyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgY29sb3I6ICM0NDQ7IG1hcmdpbi10b3A6IDEwcHg7fVxuLmN1c3RvbS1zaWRlYmFyIGg0IHNwYW57IGRpc3BsYXk6IGJsb2NrO31cbi5jdXN0b20tc2lkZWJhciBoNCBpIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjVweDsgdG9wOjA7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4OyBsaW5lLWhlaWdodDogNDBweDsgY3Vyc29yOiBwb2ludGVyO31cbi5jdXN0b20tc2lkZWJhciB1bCB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbi5jdXN0b20tc2lkZWJhciB1bCwgLmN1c3RvbS1zaWRlYmFyIGxpIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxuLmN1c3RvbS1zaWRlYmFyIHVsIGxpIGEge3Bvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiA0MHB4OyBwYWRkaW5nLWxlZnQ6IDUwcHg7IHBhZGRpbmctcmlnaHQ6IDE1cHg7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDQwcHg7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBjb2xvcjogIzQ0NDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7IGRpc3BsYXk6IGJsb2NrO31cbi5jdXN0b20tc2lkZWJhciB1bCBsaSBhOmhvdmVyLCAuY3VzdG9tLXNpZGViYXIgdWwgbGkuYWN0aXZlIGEge3RleHQtZGVjb3JhdGlvbjogbm9uZTsgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzt9XG4uY3VzdG9tLXNpZGViYXIgdWwgbGkgYSBpIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjA7IGxlZnQ6NXB4OyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjBweDsgbGluZS1oZWlnaHQ6IDQwcHg7fVxuLmZpeGVkQ29udGFpbmVyIHtwYWRkaW5nLWxlZnQ6IDI0MHB4O31cbi5taW5pbWl6ZUNvbnRhaW5lciB7cGFkZGluZy1sZWZ0OiA1MHB4O31cbi50b3BDb250YWluZXIgaW5wdXRbdHlwZT1cImZpbGVcIl06OmJlZm9yZSB7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aGVpZ2h0OjEwMCU7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO31cbi50b3BDb250YWluZXIgaW5wdXRbdHlwZT1cImZpbGVcIl0ge29wYWNpdHk6IDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTI1cHg7IHRvcDowO2xlZnQ6MDt9XG4uYXZhdGFyQWN0aW9uIGlucHV0W3R5cGU9XCJmaWxlXCJdICB7cG9zaXRpb246IHN0YXRpYzt9XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAucHJvZmlsZUNvbnRhaW5lciB7bWFyZ2luOjczcHggMCAwO31cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }];
        }, {
          topContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['topContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }],
          profileContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['profileContainer', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "E+pt":
    /*!*************************************!*\
      !*** ./src/app/constants/config.ts ***!
      \*************************************/

    /*! exports provided: config */

    /***/
    function EPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });
      /*
      Project : Cryptotrades
      FileName :  config.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the file which contain all global constants used in the application
      */


      var config = {
        site_name: "Cryptotrades",
        media_path: "https://exampleapi.com",
        // base_url: "https://example.com",
        base_url: "http://localhost:5000/",
        google_client_id: '',
        facebook_client_id: '',
        blockchain: "Rinkeby",
        blockchain_url: "https://rinkeby.etherscan.io/"
      };
      /***/
    },

    /***/
    "HLRD":
    /*!************************************!*\
      !*** ./src/app/models/category.ts ***!
      \************************************/

    /*! exports provided: Category */

    /***/
    function HLRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Category = /*#__PURE__*/function () {
        function Category() {
          _classCallCheck(this, Category);
        }

        _createClass(Category, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            return this;
          }
        }]);

        return Category;
      }();
      /***/

    },

    /***/
    "MBni":
    /*!************************************************!*\
      !*** ./src/app/services/collection.service.ts ***!
      \************************************************/

    /*! exports provided: CollectionService */

    /***/
    function MBni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionService", function () {
        return CollectionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/common */
      "zIOW");
      /* harmony import */


      var _constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants/api */
      "6p9a");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /*
      Project : Cryptotrades
      FileName :  collection.service.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the service which used to handle all api calls realted to collection
      */


      var CollectionService = /*#__PURE__*/function () {
        function CollectionService(http) {
          _classCallCheck(this, CollectionService);

          this.http = http;
          this.notifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(CollectionService, [{
          key: "addCollection",
          value: function addCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].collection_add;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "updateCollection",
          value: function updateCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].collection_update;
            return this.http.put(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "viewCollection",
          value: function viewCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].collection_detail + '?';

            if (params.collection_id) {
              url = url + 'collection_id=' + params.collection_id;
            }

            return this.http.get(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeCollectionView(param);
            }));
          }
        }, {
          key: "deleteCollection",
          value: function deleteCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].collection_delete;
            return this.http.request('delete', url, {
              body: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "listCollection",
          value: function listCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].collection_list + "?";

            if (params.page) {
              url = url + "page=" + params.page;
            }

            if (params.keyword) {
              url = url + "&&keyword=" + params.keyword;
            }

            if (params.type) {
              url = url + "&&type=" + params.type;
            }

            return this.http.get(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeCollectionList(param);
            }));
          }
        }]);

        return CollectionService;
      }();

      CollectionService.ɵfac = function CollectionService_Factory(t) {
        return new (t || CollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      CollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CollectionService,
        factory: CollectionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Mhz7":
    /*!********************************************!*\
      !*** ./src/app/UI/nodata/nodata.module.ts ***!
      \********************************************/

    /*! exports provided: NodataModule */

    /***/
    function Mhz7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodataModule", function () {
        return NodataModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nodata_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nodata.component */
      "he+D");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /*
      Project : Cryptotrades
      FileName :  nodata.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to set nodata related component and module
      */


      var NodataModule = function NodataModule() {
        _classCallCheck(this, NodataModule);
      };

      NodataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NodataModule
      });
      NodataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NodataModule_Factory(t) {
          return new (t || NodataModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NodataModule, {
          declarations: [_nodata_component__WEBPACK_IMPORTED_MODULE_2__["NodataComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
          exports: [_nodata_component__WEBPACK_IMPORTED_MODULE_2__["NodataComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodataModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
            exports: [_nodata_component__WEBPACK_IMPORTED_MODULE_2__["NodataComponent"]],
            declarations: [_nodata_component__WEBPACK_IMPORTED_MODULE_2__["NodataComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PoVy":
    /*!*********************************!*\
      !*** ./src/app/models/offer.ts ***!
      \*********************************/

    /*! exports provided: Offer */

    /***/
    function PoVy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Offer", function () {
        return Offer;
      });

      var Offer = /*#__PURE__*/function () {
        function Offer() {
          _classCallCheck(this, Offer);
        }

        _createClass(Offer, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            return this;
          }
        }]);

        return Offer;
      }();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SnTg":
    /*!*****************************************************************!*\
      !*** ./src/app/components/marketplace/marketplace.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MarketplaceComponent */

    /***/
    function SnTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function () {
        return MarketplaceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/collection.service */
      "MBni");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../UI/skeleton/itemskeleton/itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../UI/nodata/nodata.component */
      "he+D");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../UI/item/item.component */
      "xyAo");
      /*
      Project : Cryptotrades
      FileName :  marketplace.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show marketplace screen for user
      */


      function MarketplaceComponent_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
        }
      }

      function MarketplaceComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MarketplaceComponent_div_8_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function MarketplaceComponent_div_8_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var _c1 = function _c1() {
        return ["/marketplace"];
      };

      var _c2 = function _c2() {
        return {
          type: "recent"
        };
      };

      var _c3 = function _c3() {
        return {
          type: "mostviewed"
        };
      };

      var _c4 = function _c4() {
        return {
          type: "mostliked"
        };
      };

      var _c5 = function _c5() {
        return {
          type: "offer"
        };
      };

      function MarketplaceComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sort by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_div_8_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.isOfferCollapsed = !ctx_r12.isOfferCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MarketplaceComponent_div_8_i_7_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketplaceComponent_div_8_i_8_Template, 1, 0, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Most Viewed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Most Liked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "On Auction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isOfferCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isOfferCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r3.isOfferCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r3.type == "sort" && ctx_r3.value == "recent"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r3.type == "sort" && ctx_r3.value == "mostviewed"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r3.type == "sort" && ctx_r3.value == "mostliked"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r3.type == "sort" && ctx_r3.value == "offer"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c5));
        }
      }

      function MarketplaceComponent_div_9_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function MarketplaceComponent_div_9_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
        }
      }

      var _c6 = function _c6() {
        return {
          price: "1"
        };
      };

      var _c7 = function _c7() {
        return {
          price: "10"
        };
      };

      var _c8 = function _c8() {
        return {
          price: "100"
        };
      };

      var _c9 = function _c9() {
        return {
          price: "1000"
        };
      };

      function MarketplaceComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_div_9_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.isPriceCollapsed = !ctx_r16.isPriceCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MarketplaceComponent_div_9_i_7_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketplaceComponent_div_9_i_8_Template, 1, 0, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " < 1 ETH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "< 10 ETH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "< 100 ETH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "< 1000 ETH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isPriceCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isPriceCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r4.isPriceCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r4.type == "price" && ctx_r4.value == "1"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r4.type == "price" && ctx_r4.value == "10"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r4.type == "price" && ctx_r4.value == "100"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx_r4.type == "price" && ctx_r4.value == "1000"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c9));
        }
      }

      function MarketplaceComponent_div_10_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function MarketplaceComponent_div_10_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
        }
      }

      var _c10 = function _c10(a0) {
        return {
          collection_id: a0
        };
      };

      function MarketplaceComponent_div_10_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r21 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c10, item_r21._id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r20.mediaBase + "/images/collection/logo/" + item_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r21.name, " ");
        }
      }

      function MarketplaceComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Collections ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_div_10_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.isCollectionCollapsed = !ctx_r22.isCollectionCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MarketplaceComponent_div_10_i_7_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketplaceComponent_div_10_i_8_Template, 1, 0, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarketplaceComponent_div_10_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.collectionSearchInput = $event;
          })("keyup.enter", function MarketplaceComponent_div_10_Template_input_keyup_enter_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.searchCollectionAction();
          })("ngModelChange", function MarketplaceComponent_div_10_Template_input_ngModelChange_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.searchCollectionAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MarketplaceComponent_div_10_div_16_Template, 5, 7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.collectionSearchInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.collections);
        }
      }

      function MarketplaceComponent_div_11_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
        }
      }

      function MarketplaceComponent_div_11_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
        }
      }

      var _c11 = function _c11(a0) {
        return {
          category_id: a0
        };
      };

      function MarketplaceComponent_div_11_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_div_11_div_12_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var item_r30 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.categoryAction(item_r30);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r30 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c11, item_r30._id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.mediaBase + "/images/categories/" + item_r30.category_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.title, " ");
        }
      }

      function MarketplaceComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Categories ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_div_11_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.isCategoryCollapsed = !ctx_r33.isCategoryCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MarketplaceComponent_div_11_i_7_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketplaceComponent_div_11_i_8_Template, 1, 0, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MarketplaceComponent_div_11_div_12_Template, 5, 7, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isCategoryCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isCategoryCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r6.isCategoryCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.categories);
        }
      }

      function MarketplaceComponent_app_itemskeleton_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
        }
      }

      function MarketplaceComponent_app_nodata_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 48);
        }
      }

      function MarketplaceComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function MarketplaceComponent_div_31_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r36);
        }
      }

      function MarketplaceComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarketplaceComponent_div_31_div_1_Template, 2, 1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.items);
        }
      }

      var _c12 = function _c12(a0, a1) {
        return {
          "minmized": a0,
          "expanded": a1
        };
      };

      var _c13 = function _c13(a0, a1) {
        return {
          "cil-arrow-left": a0,
          "cil-arrow-right": a1
        };
      };

      var _c14 = function _c14(a0) {
        return {
          "minimizeContainer": a0
        };
      };

      var MarketplaceComponent = /*#__PURE__*/function () {
        function MarketplaceComponent(collectionService, itemService, router, route) {
          var _this6 = this;

          _classCallCheck(this, MarketplaceComponent);

          this.collectionService = collectionService;
          this.itemService = itemService;
          this.router = router;
          this.route = route;
          this.isToggled = false;
          this.isOfferCollapsed = false;
          this.isPriceCollapsed = true;
          this.isCollectionCollapsed = true;
          this.isCategoryCollapsed = true;
          this.collectionSearchInput = "";
          this.collectionPage = 1;
          this.collections = [];
          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
          this.categories = [];
          this.searchInput = "";
          this.items = [];
          this.page = 1;
          this.isApiLoading = false;
          this.loading = true;
          this.keyword = "";
          this.type = "sort";
          this.value = "recent";
          this.page_title = "Recent Products";
          /**
           * This is the function which used minimize and maximize sidebar
           */

          this.minimizeMenu = function () {
            _this6.isToggled = _this6.isToggled ? false : true;
          };
          /**
           * This is the function which used search collection on textbox type
           */


          this.searchCollectionAction = function () {
            console.log("search value ", _this6.collectionSearchInput);

            if (_this6.searchRequest) {
              _this6.searchRequest.unsubscribe();
            }

            _this6.collectionPage = 1;
            _this6.searchRequest = _this6.collectionService.listCollection({
              type: "all",
              keyword: _this6.collectionSearchInput,
              page: _this6.collectionPage
            }).subscribe(function (result) {
              if (result.status == true) {
                _this6.collections = result.tempArray;
              }
            });
          };
          /**
           * This is the function which used to retreive category list from api
           */


          this.getCategories = function () {
            _this6.itemService.categoryList().subscribe(function (result) {
              if (result.status == true) {
                _this6.categories = result.tempArray;

                if (_this6.type == "category") {
                  var index = _this6.categories.findIndex(function (category) {
                    return category._id == _this6.value;
                  });

                  if (index != -1) {
                    _this6.page_title = "Search product by category - " + _this6.categories[index].title;
                  }
                }
              }
            });
          };
          /**
           * This is the function which used to retreive item list from api
           */


          this.getItemList = function () {
            _this6.isApiLoading = true;
            var params = {};

            if (_this6.type == "sort") {
              params = {
                page: _this6.page,
                type: _this6.value,
                keyword: _this6.keyword
              };
            } else if (_this6.type == "collection") {
              params = {
                page: _this6.page,
                type: "collection",
                collection_id: _this6.value,
                keyword: _this6.keyword
              };
            } else if (_this6.type == "category") {
              params = {
                page: _this6.page,
                type: "category",
                category_id: _this6.value,
                keyword: _this6.keyword
              };
            } else if (_this6.type == "price") {
              params = {
                page: _this6.page,
                type: "price",
                price_range: _this6.value,
                keyword: _this6.keyword
              };
            }

            _this6.itemService.listItem(params).subscribe(function (result) {
              _this6.isApiLoading = false;
              console.log(result);

              if (result.status == true) {
                if (_this6.page == 1) {
                  _this6.items = result.tempArray;
                } else {
                  for (var index = 0; index < result.tempArray.length; index++) {
                    var element = result.tempArray[index];

                    _this6.items.push(element);
                  }
                }
              }

              _this6.loading = false;
            });
          };
          /**
          * This is the function which used to retreive item list on page scroll
          */


          this.onNextPage = function () {
            if (_this6.loading == true && _this6.isApiLoading == true) {
              return;
            }

            _this6.page = _this6.page + 1;

            _this6.getItemList();
          };
          /**
           * This is the output function which used to navigate user to item detail page
           */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this6.router.navigate(['/item/view/' + event.item._id]);
            }
          };
          /**
           * This is the function triggered when user click search button
           */


          this.searchAction = function () {
            _this6.loading = true;
            _this6.keyword = _this6.searchInput.replace(" ", "+");
            _this6.page = 1;

            _this6.getItemList();
          };
          /**
           * This is the function triggered when user click reset button
           */


          this.resetAction = function () {
            _this6.loading = true;
            _this6.searchInput = "";
            _this6.keyword = "";

            _this6.searchAction();
          };
          /**
           * This is the function triggered when user filter the item by category
           */


          this.categoryAction = function (item) {
            var index = _this6.categories.findIndex(function (category) {
              return category._id == item._id;
            });

            if (index != -1) {
              console.log("je");
              _this6.page_title = "Search product by category - " + _this6.categories[index].title;
            }
          };

          this.searchCollectionAction();
          this.getCategories();
        }

        _createClass(MarketplaceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subscription = this.route.queryParams.subscribe(function (params) {
              console.log("filter", params);
              _this7.loading = true;

              if (params.type) {
                _this7.type = "sort";
                _this7.value = params.type;

                if (params.type == "offer") {
                  _this7.page_title = "Product with offer";
                } else if (params.type == "mostviewed") {
                  _this7.page_title = "Most viewed product";
                } else if (params.type == "mostliked") {
                  _this7.page_title = "Most liked product";
                } else {
                  _this7.page_title = "Recent product";
                }
              }

              if (params.price) {
                _this7.type = "price";
                _this7.value = params.price;
                _this7.page_title = "Products greater than " + _this7.value + " ETH";
              }

              if (params.category_id) {
                _this7.type = "category";
                _this7.value = params.category_id;
              }

              if (params.collection_id) {
                _this7.type = "collection";
                _this7.value = params.collection_id;

                _this7.getCollectionInfo();
              }

              _this7.searchInput = "";
              _this7.items = [];
              _this7.page = 1;
              _this7.keyword = "";

              _this7.getItemList();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          /**
           * This is the function which used to retreive collection info on sorting
           */

        }, {
          key: "getCollectionInfo",
          value: function getCollectionInfo() {
            var _this8 = this;

            this.collectionService.viewCollection({
              collection_id: this.value
            }).subscribe(function (result) {
              _this8.page_title = "Search product by collection - " + result.result.name;
            });
          }
        }]);

        return MarketplaceComponent;
      }();

      MarketplaceComponent.ɵfac = function MarketplaceComponent_Factory(t) {
        return new (t || MarketplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      MarketplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MarketplaceComponent,
        selectors: [["app-marketplace"]],
        decls: 32,
        vars: 24,
        consts: [[1, "appContainer"], [1, "app-body"], [1, "custom-sidebar", "fixed", 3, "ngClass"], ["appSidebar", ""], ["class", "cil-filter leftIcon", 4, "ngIf"], [4, "ngIf"], [1, "rightIcon", 3, "ngClass", "click"], ["class", "offerBlock SortBy", 4, "ngIf"], ["class", "offerBlock PriceFilter", 4, "ngIf"], ["class", "offerBlock", 4, "ngIf"], [1, "main", "fixedContainer", 3, "ngClass"], [1, "container-fluid"], [1, "card-body-filter"], [1, "row"], [1, "col-sm-12"], ["type", "text", "id", "name", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "card-body-filter-action"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-search"], [1, "fa", "fa-refresh"], ["infiniteScroll", "", 1, "collectionMainContainer", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "cil-filter", "leftIcon"], [1, "offerBlock", "SortBy"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "card-header-actions"], [1, "btn", 3, "click"], ["class", "icon-arrow-down", 4, "ngIf"], ["class", "icon-arrow-up", 4, "ngIf"], [1, "card-body", 3, "collapse"], [1, "col-md-6"], [1, "btn", "btn-block", "btn-outline-primary", 3, "ngClass", "routerLink", "queryParams"], [1, "icon-arrow-down"], [1, "icon-arrow-up"], [1, "offerBlock", "PriceFilter"], [1, "offerBlock"], ["type", "text", "id", "name", "placeholder", "Search", "autocomplete", "off", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "col-md-12"], ["class", "collectionItem", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "collectionItem", 3, "routerLink", "queryParams"], [1, "collectionItemLeft"], [3, "src"], [1, "collectionItemRight"], ["class", "collectionItem", 3, "routerLink", "queryParams", "click", 4, "ngFor", "ngForOf"], [1, "collectionItem", 3, "routerLink", "queryParams", "click"], ["msg", "There is no data to display here"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"]],
        template: function MarketplaceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MarketplaceComponent_i_5_Template, 1, 0, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MarketplaceComponent_span_6_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_Template_i_click_7_listener() {
              return ctx.minimizeMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarketplaceComponent_div_8_Template, 23, 31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MarketplaceComponent_div_9_Template, 23, 31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MarketplaceComponent_div_10_Template, 17, 5, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MarketplaceComponent_div_11_Template, 13, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MarketplaceComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.searchInput = $event;
            })("keyup.enter", function MarketplaceComponent_Template_input_keyup_enter_20_listener() {
              return ctx.searchAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_Template_button_click_22_listener() {
              return ctx.searchAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarketplaceComponent_Template_button_click_25_listener() {
              return ctx.resetAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function MarketplaceComponent_Template_div_scrolled_28_listener() {
              return ctx.onNextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MarketplaceComponent_app_itemskeleton_29_Template, 1, 0, "app-itemskeleton", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MarketplaceComponent_app_nodata_30_Template, 1, 0, "app-nodata", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MarketplaceComponent_div_31_Template, 2, 1, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c12, ctx.isToggled, !ctx.isToggled));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c13, ctx.isToggled == false, ctx.isToggled == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isToggled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c14, ctx.isToggled == true));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_9__["ItemskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_10__["NodataComponent"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"]],
        styles: [".appContainer[_ngcontent-%COMP%] {margin:58px 0 0;}\n.custom-sidebar[_ngcontent-%COMP%] {border-right: 1px solid #e7e7e7; overflow-x: hidden; overflow-y: auto;}\n.custom-sidebar.fixed[_ngcontent-%COMP%] {position: fixed; left: 0; bottom: 0; top:65px;}\n.custom-sidebar.minmized[_ngcontent-%COMP%] {width: 50px;}\n.custom-sidebar.expanded[_ngcontent-%COMP%] {width: 240px;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {position: relative; height: 40px; padding-left: 38px; padding-right: 15px; font-size: 16px; line-height: 40px; text-transform: capitalize; color: #444; margin-top: 10px; margin-bottom: 6px;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{ display: block;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i.rightIcon[_ngcontent-%COMP%] {position: absolute; right:5px; top:0; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px; cursor: pointer;}\n.custom-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i.leftIcon[_ngcontent-%COMP%] {position: absolute; left:5px; top:0; width: 40px; height: 40px; text-align: center; font-size: 20px; line-height: 40px; cursor: pointer;}\n.fixedContainer[_ngcontent-%COMP%] {padding-left: 240px; margin-top: 10px;}\n.fixedContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {margin: 15px 0 0;}\n.fixedContainer.minimizeContainer[_ngcontent-%COMP%] {padding-left: 50px;}\n.card[_ngcontent-%COMP%] {border-radius: 0; border-left: 0; border-right: 0; margin-bottom: 0;}\n.card-header[_ngcontent-%COMP%] {line-height: 30px; font-size: 16px; font-weight: 600; padding-right: 10px; background: 0 none;}\n.card-body[_ngcontent-%COMP%] {background: #f6f6f6;}\n.SortBy[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .PriceFilter[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin-bottom: 10px;}\n.collectionItem[_ngcontent-%COMP%] {position: relative; min-height: 30px; margin-top: 10px; cursor: pointer;}\n.collectionItemLeft[_ngcontent-%COMP%] {position: absolute; left: 0; top: 0;}\n.collectionItemLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 30px; height: 30px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; background: #e7e7e7;}\n.collectionItemRight[_ngcontent-%COMP%] {padding-left: 40px; line-height: 30px; }\n.card-body-filter[_ngcontent-%COMP%] {display: flex; flex-direction: row; margin-top: 25px;}\n.card-body-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {flex: 1;}\n.card-body-filter-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin-left: 10px; font-size: 14px; height: 35px;}\n.collectionMainContainer[_ngcontent-%COMP%] {margin-top: 30px;}\n@media (min-width: 992px) {\n    .fixedContainer[_ngcontent-%COMP%] {padding-left: 320px;}\n    .custom-sidebar.expanded[_ngcontent-%COMP%] {width: 320px;}\n    .appContainer[_ngcontent-%COMP%] {margin:73px 0 0;}\n    .custom-sidebar.fixed[_ngcontent-%COMP%] {top:73px;}\n}\n@media (max-width: 992px) {\nmain.main.fixedContainer[_ngcontent-%COMP%] {min-width: 600px;}\nmain.main.fixedContainer.minimizeContainer[_ngcontent-%COMP%] {min-width: 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtldHBsYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxlQUFlLENBQUM7QUFDL0IsaUJBQWlCLCtCQUErQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0FBQ3ZGLHVCQUF1QixlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7QUFDckUsMEJBQTBCLFdBQVcsQ0FBQztBQUN0QywwQkFBMEIsWUFBWSxDQUFDO0FBQ3ZDLG9CQUFvQixrQkFBa0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQztBQUNqTix5QkFBeUIsY0FBYyxDQUFDO0FBQ3hDLGdDQUFnQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztBQUN6SywrQkFBK0Isa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7QUFDdkssaUJBQWlCLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO0FBQ3ZELG9CQUFvQixnQkFBZ0IsQ0FBQztBQUNyQyxtQ0FBbUMsa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0FBQzNFLGNBQWMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDO0FBQzVHLFlBQVksbUJBQW1CLENBQUM7QUFDaEMsMkRBQTJELG1CQUFtQixDQUFDO0FBQy9FLGlCQUFpQixrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7QUFDekYscUJBQXFCLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFDekQseUJBQXlCLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO0FBQy9HLHNCQUFzQixrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUU3RCxtQkFBbUIsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO0FBQ3hFLHdCQUF3QixPQUFPLENBQUM7QUFDaEMsaUNBQWlDLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7QUFDbEYsMEJBQTBCLGdCQUFnQixDQUFDO0FBRTNDO0lBQ0ksaUJBQWlCLG1CQUFtQixDQUFDO0lBQ3JDLDBCQUEwQixZQUFZLENBQUM7SUFDdkMsZUFBZSxlQUFlLENBQUM7SUFDL0IsdUJBQXVCLFFBQVEsQ0FBQztBQUNwQztBQUVBO0FBQ0EsMEJBQTBCLGdCQUFnQixDQUFDO0FBQzNDLDRDQUE0QyxZQUFZLENBQUM7QUFDekQiLCJmaWxlIjoibWFya2V0cGxhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBDb250YWluZXIge21hcmdpbjo1OHB4IDAgMDt9XG4uY3VzdG9tLXNpZGViYXIge2JvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2U3ZTc7IG92ZXJmbG93LXg6IGhpZGRlbjsgb3ZlcmZsb3cteTogYXV0bzt9XG4uY3VzdG9tLXNpZGViYXIuZml4ZWQge3Bvc2l0aW9uOiBmaXhlZDsgbGVmdDogMDsgYm90dG9tOiAwOyB0b3A6NjVweDt9XG4uY3VzdG9tLXNpZGViYXIubWlubWl6ZWQge3dpZHRoOiA1MHB4O31cbi5jdXN0b20tc2lkZWJhci5leHBhbmRlZCB7d2lkdGg6IDI0MHB4O31cbi5jdXN0b20tc2lkZWJhciBoNCB7cG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDQwcHg7IHBhZGRpbmctbGVmdDogMzhweDsgcGFkZGluZy1yaWdodDogMTVweDsgZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogNDBweDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IGNvbG9yOiAjNDQ0OyBtYXJnaW4tdG9wOiAxMHB4OyBtYXJnaW4tYm90dG9tOiA2cHg7fVxuLmN1c3RvbS1zaWRlYmFyIGg0IHNwYW57IGRpc3BsYXk6IGJsb2NrO31cbi5jdXN0b20tc2lkZWJhciBoNCBpLnJpZ2h0SWNvbiB7cG9zaXRpb246IGFic29sdXRlOyByaWdodDo1cHg7IHRvcDowOyB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjBweDsgbGluZS1oZWlnaHQ6IDQwcHg7IGN1cnNvcjogcG9pbnRlcjt9XG4uY3VzdG9tLXNpZGViYXIgaDQgaS5sZWZ0SWNvbiB7cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OjVweDsgdG9wOjA7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4OyBsaW5lLWhlaWdodDogNDBweDsgY3Vyc29yOiBwb2ludGVyO31cbi5maXhlZENvbnRhaW5lciB7cGFkZGluZy1sZWZ0OiAyNDBweDsgbWFyZ2luLXRvcDogMTBweDt9XG4uZml4ZWRDb250YWluZXIgaDIge21hcmdpbjogMTVweCAwIDA7fVxuLmZpeGVkQ29udGFpbmVyLm1pbmltaXplQ29udGFpbmVyIHtwYWRkaW5nLWxlZnQ6IDUwcHg7fVxuLmNhcmQge2JvcmRlci1yYWRpdXM6IDA7IGJvcmRlci1sZWZ0OiAwOyBib3JkZXItcmlnaHQ6IDA7IG1hcmdpbi1ib3R0b206IDA7fVxuLmNhcmQtaGVhZGVyIHtsaW5lLWhlaWdodDogMzBweDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwOyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBiYWNrZ3JvdW5kOiAwIG5vbmU7fVxuLmNhcmQtYm9keSB7YmFja2dyb3VuZDogI2Y2ZjZmNjt9XG4uU29ydEJ5IC5jYXJkLWJvZHkgYnV0dG9uLCAuUHJpY2VGaWx0ZXIgLmNhcmQtYm9keSBidXR0b24ge21hcmdpbi1ib3R0b206IDEwcHg7fVxuLmNvbGxlY3Rpb25JdGVtIHtwb3NpdGlvbjogcmVsYXRpdmU7IG1pbi1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDEwcHg7IGN1cnNvcjogcG9pbnRlcjt9XG4uY29sbGVjdGlvbkl0ZW1MZWZ0IHtwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDt9XG4uY29sbGVjdGlvbkl0ZW1MZWZ0IGltZyB7d2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvYmplY3QtZml0OiBjb3ZlcjsgYmFja2dyb3VuZDogI2U3ZTdlNzt9XG4uY29sbGVjdGlvbkl0ZW1SaWdodCB7cGFkZGluZy1sZWZ0OiA0MHB4OyBsaW5lLWhlaWdodDogMzBweDsgfVxuXG4uY2FyZC1ib2R5LWZpbHRlciB7ZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgbWFyZ2luLXRvcDogMjVweDt9XG4uY2FyZC1ib2R5LWZpbHRlciAucm93IHtmbGV4OiAxO31cbi5jYXJkLWJvZHktZmlsdGVyLWFjdGlvbiBidXR0b24ge21hcmdpbi1sZWZ0OiAxMHB4OyBmb250LXNpemU6IDE0cHg7IGhlaWdodDogMzVweDt9XG4uY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbi10b3A6IDMwcHg7fVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuZml4ZWRDb250YWluZXIge3BhZGRpbmctbGVmdDogMzIwcHg7fVxuICAgIC5jdXN0b20tc2lkZWJhci5leHBhbmRlZCB7d2lkdGg6IDMyMHB4O31cbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46NzNweCAwIDA7fVxuICAgIC5jdXN0b20tc2lkZWJhci5maXhlZCB7dG9wOjczcHg7fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbm1haW4ubWFpbi5maXhlZENvbnRhaW5lciB7bWluLXdpZHRoOiA2MDBweDt9XG5tYWluLm1haW4uZml4ZWRDb250YWluZXIubWluaW1pemVDb250YWluZXIge21pbi13aWR0aDogMDt9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-marketplace',
            templateUrl: './marketplace.component.html',
            styleUrls: ['./marketplace.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./constants/config */
      "E+pt");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /*
      Project : Cryptotrades
      FileName :  app.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the main component which load layout for the application
      */


      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function AppComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.current_page == "login"));
        }
      }

      function AppComponent_li_19_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Favourites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_19_div_4_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.logoutAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + ctx_r2.user.user_id + "/collected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection/mycollection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + ctx_r2.user.user_id + "/favorited");
        }
      }

      function AppComponent_li_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_19_Template_a_click_1_listener() {
            return false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_li_19_div_4_Template, 9, 3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.current_page == "login"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.mediaBase + "/images/user/" + ctx_r1.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.user.first_name, " ", ctx_r1.user.last_name, " ");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(renderer, router, userService) {
          var _this9 = this;

          _classCallCheck(this, AppComponent);

          this.renderer = renderer;
          this.router = router;
          this.userService = userService;
          this.mediaBase = _constants_config__WEBPACK_IMPORTED_MODULE_4__["config"].media_path;
          this.title = 'nftfrontend';
          this.user = null;
          this.profile_image = "";
          this.current_page = '';
          this._isCollapsed = true;
          /**
           * This is the function which used to logout user from the application on menu click
           */

          this.logoutAction = function () {
            localStorage.removeItem("token");
            location.href = _constants_config__WEBPACK_IMPORTED_MODULE_4__["config"].base_url;
          };

          this.user = this.userService.getUser();
          router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (event) {
            if (_this9.user != null) {
              if (_this9.user.status == "reset") {
                _this9.router.navigate(['/reset']);
              }
            }

            var url = event.url.split("/");
            console.log(url);

            if (url[1].includes("?")) {
              var suburl = url[1].split("?");
              _this9.current_page = suburl[0];
            } else {
              _this9.current_page = url[1];
            }
          });
        }

        _createClass(AppComponent, [{
          key: "isCollapsed",
          get: function get() {
            if (this.collapseRef) {
              // temp fix for "overflow: hidden"
              if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
                this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
              }
            }

            return this._isCollapsed;
          },
          set: function set(value) {
            this._isCollapsed = value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.user != null) {
              this.profile_image = this.user.profile_image != '' ? this.user.profile_image : "nouser.jpg";

              if (this.user.status == "reset") {
                this.router.navigate(['/reset']);
              }
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.collapseRef = this.collapse;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.collapse = _t.first);
          }
        },
        decls: 21,
        vars: 14,
        consts: [[1, "topheader"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/images/nft-logo.png"], ["aria-controls", "navbarSupportedContent", "type", "button", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "collapse", "isAnimated"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "ngClass"], ["routerLink", "/", "href", "javascript:void(0)", 1, "nav-link"], ["routerLink", "/marketplace", "href", "javascript:void(0)", 1, "nav-link"], ["routerLink", "/stats", "href", "javascript:void(0)", 1, "nav-link"], ["class", "nav-item", 3, "ngClass", 4, "ngIf"], ["class", "nav-item dropdown", "dropdown", "", 3, "ngClass", 4, "ngIf"], ["routerLink", "/login", "href", "javascript:void(0)", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown", 3, "ngClass"], ["id", "link-dropdown", "href", "", "dropdownToggle", "", "aria-controls", "your-dropdown", 1, "nav-link", "dropdown-toggle", 3, "click"], [1, "profileImage", 3, "src"], ["id", "your-dropdown", "class", "dropdown-menu", "aria-labelledby", "link-dropdown", 4, "dropdownMenu"], ["id", "your-dropdown", "aria-labelledby", "link-dropdown", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "routerLink"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Marketplace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_li_18_Template, 3, 3, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_li_19_Template, 5, 6, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed)("isAnimated", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.current_page == ""));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.current_page == "marketplace"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.current_page == "stats"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user != null);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"]],
        styles: [".topheader[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] {transform: translateY(0);box-shadow:0 5px 20px 5px rgb(138 155 165 / 15%);transition : all 0.3s ease-out; position: fixed; left: 0px; top:0px; right:0px; z-index: 999;}\n.topheader[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .topheader[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .topheader[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .topheader[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {color: #000;}\n.topheader[_ngcontent-%COMP%]   .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {font-size: 16px; font-weight: 600; text-transform: capitalize;}\n.dropdown-menu[_ngcontent-%COMP%] {border:0 none}\n.dropdown-item[_ngcontent-%COMP%] {font-weight: 600; color: #666;}\n.topheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 130px;}\n@media (min-width: 992px) {\n    .topheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {padding: 0rem 1rem;}\n    .topheader[_ngcontent-%COMP%]   .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding:1.5rem 1.5em\n    }\n}\n@media (max-width:992px) {\n.topheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {padding:0 1rem;}\n.topheader[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {padding:0;}\n}\n.profileImage[_ngcontent-%COMP%] {width: 25px; height: 25px; border-radius: 50%; -o-object-fit: cover; object-fit: cover; margin-right: 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0Qix3QkFBd0IsQ0FBQyxnREFBZ0QsQ0FBd0MsOEJBQThCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQztBQUMxTyw4TkFBOE4sV0FBVyxDQUFDO0FBQzFPLGdEQUFnRCxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7QUFDOUcsZ0JBQWdCLGFBQWE7QUFDN0IsZ0JBQWdCLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztBQUM5QyxtQkFBbUIsWUFBWSxDQUFDO0FBQ2hDO0lBQ0ksb0JBQW9CLGtCQUFrQixDQUFDO0lBQ3ZDO1FBQ0k7SUFDSjtBQUNKO0FBRUE7QUFDQSxvQkFBb0IsY0FBYyxDQUFDO0FBQ25DLGtDQUFrQyxTQUFTLENBQUM7QUFDNUM7QUFFQSxlQUFlLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGhlYWRlciwgLmRyb3Bkb3duLW1lbnUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtib3gtc2hhZG93OjAgNXB4IDIwcHggNXB4IHJnYigxMzggMTU1IDE2NSAvIDE1JSk7LXdlYmtpdC10cmFuc2l0aW9uIDogYWxsIDAuM3MgZWFzZS1vdXQ7dHJhbnNpdGlvbiA6IGFsbCAwLjNzIGVhc2Utb3V0OyBwb3NpdGlvbjogZml4ZWQ7IGxlZnQ6IDBweDsgdG9wOjBweDsgcmlnaHQ6MHB4OyB6LWluZGV4OiA5OTk7fVxuLnRvcGhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rLCAudG9waGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluaywgLnRvcGhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5zaG93LCAudG9waGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7Y29sb3I6ICMwMDA7fVxuLnRvcGhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7Zm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNjAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XG4uZHJvcGRvd24tbWVudSB7Ym9yZGVyOjAgbm9uZX1cbi5kcm9wZG93bi1pdGVtIHtmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzY2Njt9XG4udG9waGVhZGVyIGgxIGltZyB7d2lkdGg6IDEzMHB4O31cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC50b3BoZWFkZXIgLm5hdmJhciB7cGFkZGluZzogMHJlbSAxcmVtO31cbiAgICAudG9waGVhZGVyIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgICAgIHBhZGRpbmc6MS41cmVtIDEuNWVtXG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCkge1xuLnRvcGhlYWRlciAubmF2YmFyIHtwYWRkaW5nOjAgMXJlbTt9XG4udG9waGVhZGVyIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7cGFkZGluZzowO31cbn1cblxuLnByb2ZpbGVJbWFnZSB7d2lkdGg6IDI1cHg7IGhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvYmplY3QtZml0OiBjb3ZlcjsgbWFyZ2luLXJpZ2h0OiA1cHg7fSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }];
        }, {
          collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "UfAB":
    /*!********************************************!*\
      !*** ./src/app/UI/loader/loader.module.ts ***!
      \********************************************/

    /*! exports provided: LoaderModule */

    /***/
    function UfAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderModule", function () {
        return LoaderModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loader.component */
      "poLh");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /*
      Project : Cryptotrades
      FileName :  loader.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to set loader related component and module
      */


      var LoaderModule = function LoaderModule() {
        _classCallCheck(this, LoaderModule);
      };

      LoaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LoaderModule
      });
      LoaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LoaderModule_Factory(t) {
          return new (t || LoaderModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoaderModule, {
          declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
          exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
            exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  login.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show login page for user
      */


      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formbuilder, snackBar, userService, router, socialService) {
          var _this10 = this;

          _classCallCheck(this, LoginComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.router = router;
          this.socialService = socialService;
          this.button_title = "Login";
          this.isAPILoading = false;
          /**
           * This is the function which used to send login information with params to api
           */

          this.loginApi = function (params) {
            _this10.isAPILoading = true;

            _this10.userService.loginApi(params).subscribe(function (result) {
              _this10.isAPILoading = false;

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);

                _this10.snackBar.open('Login Successful', "", {
                  duration: 2000
                });

                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
              } else {
                _this10.button_title = "Login";

                _this10.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }
            });
          };

          this.login = formbuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to validate login form on submit
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.login.valid && this.button_title == "Login") {
              this.button_title = "Logging In...";
              this.loginApi({
                username: formData.value.username,
                password: formData.value.password
              });
            } else {
              if (this.login.controls.username.invalid) {
                if (this.login.controls.username.errors) {
                  if (this.login.controls.username.errors.required) {
                    this.snackBar.open('Username is required', "", {
                      duration: 2000
                    });
                  } else if (this.login.controls.username.errors.minlength) {
                    this.snackBar.open('Username required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.login.controls.username.errors.maxlength) {
                    this.snackBar.open('Username required maximum 255 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.login.controls.password.invalid) {
                if (this.login.controls.password.errors) {
                  if (this.login.controls.password.errors.required) {
                    this.snackBar.open('Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.login.controls.password.errors.minlength) {
                    this.snackBar.open('Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
          /**
           * This is the function which used to access google sign on button click
           */

        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            var _this11 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
            this.socialService.authState.subscribe(function (user) {
              _this11.isAPILoading = true;
              var params = {
                'username': user.name,
                'first_name': user.firstName,
                'last_name': user.lastName,
                'email': user.email,
                'photo': user.photoUrl,
                'profile_image': user.id + '.jpg',
                'social_info': JSON.stringify({
                  "id": user.id,
                  "type": "google"
                })
              };

              _this11.userService.register(params).subscribe(function (result) {
                _this11.isAPILoading = false;

                if (result.status == true) {
                  localStorage.setItem('token', result.return_id);

                  _this11.snackBar.open('Login Successful', "", {
                    duration: 2000
                  });

                  location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
                } else {
                  _this11.snackBar.open(result.message, "", {
                    duration: 2000
                  });
                }
              });
            });
          }
          /**
          * This is the function which used to access facebook sign on button click
          */

        }, {
          key: "signInWithFacebook",
          value: function signInWithFacebook() {
            var _this12 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
            this.socialService.authState.subscribe(function (user) {
              _this12.isAPILoading = true;
              var params = {
                'username': user.name,
                'first_name': user.firstName,
                'last_name': user.lastName,
                'email': user.email ? user.email : user.id + '@facebook.com',
                'photo': user.photoUrl,
                'profile_image': user.id + '.jpg',
                'social_info': JSON.stringify({
                  "id": user.id,
                  "type": "facebook"
                })
              };
              console.log(params);

              _this12.userService.register(params).subscribe(function (result) {
                console.log(result);
                _this12.isAPILoading = false;

                if (result.status == true) {
                  localStorage.setItem('token', result.return_id);

                  _this12.snackBar.open('Login Successful', "", {
                    duration: 2000
                  });

                  location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
                } else {
                  _this12.snackBar.open(result.message, "", {
                    duration: 2000
                  });
                }
              });
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-dashboard"]],
        decls: 51,
        vars: 2,
        consts: [[1, "app-body"], [1, "main", "d-flex", "align-items-center"], [1, "container"], [1, "row"], [1, "col-md-8", "mx-auto"], [1, "card-group"], [1, "card"], [1, "card-body", "p-4"], [3, "formGroup", "ngSubmit"], [1, "text-muted"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icon-user"], ["type", "text", "placeholder", "Enter Username", "formControlName", "username", "autocomplete", "username", "required", "", 1, "form-control"], [1, "input-group", "mb-4"], [1, "icon-lock"], ["type", "password", "placeholder", "Enter Password", "formControlName", "password", "autocomplete", "current-password", "required", "", 1, "form-control"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "col-6", "text-right"], ["type", "button", "routerLink", "/forgot", 1, "btn", "btn-link", "px-0"], [1, "card-footer", "p-4"], ["type", "button", 1, "btn", "btn-block", "btn-facebook", 3, "click"], [1, "fa", "fa-facebook"], ["type", "button", 1, "btn", "btn-block", "btn-twitter", 3, "click"], [1, "fa", "fa-google"], [1, "card", "text-white", "bg-primary", "py-5", "d-md-down-none", 2, "width", "44%"], [1, "card-body", "text-center"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-primary", "active", "mt-3"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit(ctx.login);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign In to your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_33_listener() {
              return ctx.signInWithFacebook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() {
              return ctx.signInWithGoogle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Click below button to signup with Cryptotrades. You can signup with facebook and google as well");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Register Now!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.login);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: [".btn-block[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {margin-right: 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ibG9jayBpIHttYXJnaW4tcmlnaHQ6IDVweDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XC3f":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XC3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  register.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show register screen
      */


      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formbuilder, snackBar, userService, socialService) {
          var _this13 = this;

          _classCallCheck(this, RegisterComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.socialService = socialService;
          this.button_title = "Create Account";
          this.isAPILoading = false;
          /**
           * This is the function which used to create account through api
           */

          this.registerApi = function (params) {
            _this13.isAPILoading = true;

            _this13.userService.register(params).subscribe(function (result) {
              _this13.isAPILoading = false;

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);

                _this13.snackBar.open('Register Successful', "", {
                  duration: 2000
                });

                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
              } else {
                _this13.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }

              _this13.button_title = "Create Account";
            });
          };

          this.register = formbuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])],
            'first_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'last_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'confirm_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])]
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to access google sign on button click
           */

        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            var _this14 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
            this.socialService.authState.subscribe(function (user) {
              _this14.isAPILoading = true;
              var params = {
                'username': user.name,
                'first_name': user.firstName,
                'last_name': user.lastName,
                'email': user.email,
                'photo': user.photoUrl,
                'profile_image': user.id + '.jpg',
                'social_info': JSON.stringify({
                  "id": user.id,
                  "type": "google"
                })
              };

              _this14.userService.register(params).subscribe(function (result) {
                _this14.isAPILoading = false;

                if (result.status == true) {
                  localStorage.setItem('token', result.return_id);

                  _this14.snackBar.open('Login Successful', "", {
                    duration: 2000
                  });

                  location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
                } else {
                  _this14.snackBar.open(result.message, "", {
                    duration: 2000
                  });
                }
              });
            });
          }
          /**
            * This is the function which used to access facebook sign on button click
            */

        }, {
          key: "signInWithFacebook",
          value: function signInWithFacebook() {
            var _this15 = this;

            this.socialService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
            this.socialService.authState.subscribe(function (user) {
              _this15.isAPILoading = true;
              var params = {
                'username': user.name,
                'first_name': user.firstName,
                'last_name': user.lastName,
                'email': user.email ? user.email : user.id + '@facebook.com',
                'photo': user.photoUrl,
                'profile_image': user.id + '.jpg',
                'social_info': JSON.stringify({
                  "id": user.id,
                  "type": "facebook"
                })
              };
              console.log(params);

              _this15.userService.register(params).subscribe(function (result) {
                console.log(result);
                _this15.isAPILoading = false;

                if (result.status == true) {
                  localStorage.setItem('token', result.return_id);

                  _this15.snackBar.open('Login Successful', "", {
                    duration: 2000
                  });

                  location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
                } else {
                  _this15.snackBar.open(result.message, "", {
                    duration: 2000
                  });
                }
              });
            });
          }
          /**
           * This is the function which used to create account with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.register.valid && this.button_title == "Create Account") {
              if (formData.value.password != formData.value.confirm_password) {
                this.snackBar.open('Password Mismatch', "", {
                  duration: 2000
                });
                return;
              }

              this.button_title = "Creating Account...";
              this.registerApi({
                username: formData.value.username,
                first_name: formData.value.first_name,
                last_name: formData.value.last_name,
                email: formData.value.email,
                password: formData.value.password
              });
            } else {
              if (this.register.controls.username.invalid) {
                if (this.register.controls.username.errors) {
                  if (this.register.controls.username.errors.required) {
                    this.snackBar.open('Username is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.username.errors.minlength) {
                    this.snackBar.open('Username required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.username.errors.maxlength) {
                    this.snackBar.open('Username required maximum 255 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.register.controls.email.invalid) {
                if (this.register.controls.email.errors) {
                  console.log(this.register.controls.email.errors);

                  if (this.register.controls.email.errors.required) {
                    this.snackBar.open('Email is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.email.errors.minlength) {
                    this.snackBar.open('Email required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.email.errors.pattern) {
                    this.snackBar.open('Invalid Email', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.register.controls.first_name.invalid) {
                if (this.register.controls.first_name.errors) {
                  if (this.register.controls.first_name.errors.required) {
                    this.snackBar.open('First Name is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.first_name.errors.minlength) {
                    this.snackBar.open('First Name required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.first_name.errors.maxlength) {
                    this.snackBar.open('First Name required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.register.controls.last_name.invalid) {
                if (this.register.controls.last_name.errors) {
                  if (this.register.controls.last_name.errors.required) {
                    this.snackBar.open('Last Name is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.last_name.errors.minlength) {
                    this.snackBar.open('Last Name required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.last_name.errors.maxlength) {
                    this.snackBar.open('Last Name required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.register.controls.password.invalid) {
                if (this.register.controls.password.errors) {
                  if (this.register.controls.password.errors.required) {
                    this.snackBar.open('Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.password.errors.minlength) {
                    this.snackBar.open('Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.password.errors.maxlength) {
                    this.snackBar.open('Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.register.controls.confirm_password.invalid) {
                if (this.register.controls.confirm_password.errors) {
                  if (this.register.controls.confirm_password.errors.required) {
                    this.snackBar.open('Confirm Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.confirm_password.errors.minlength) {
                    this.snackBar.open('Confirm Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.register.controls.confirm_password.errors.maxlength) {
                    this.snackBar.open('Confirm Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              }
            } // console.log("Register Component: === ", formData);

          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 63,
        vars: 2,
        consts: [[1, "mainContainer"], [1, "app-body"], [1, "main", "d-flex", "align-items-center"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "card-group"], [1, "card"], [1, "card-body", "p-3"], [3, "formGroup", "ngSubmit"], [1, "text-muted"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icon-user"], ["type", "text", "placeholder", "Enter Username", "formControlName", "username", "autocomplete", "username", "required", "", 1, "form-control"], [1, "icon-envelope"], ["type", "text", "placeholder", "Enter Email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "first_name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "last_name", "required", "", 1, "form-control"], [1, "icon-lock"], ["type", "password", "placeholder", "Enter Password", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Enter Confirm Password", "formControlName", "confirm_password", "required", "", 1, "form-control"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", "px-4"], [1, "col-6", "text-right"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-link", "px-0"], [1, "card-footer", "p-4"], ["type", "button", 1, "btn", "btn-block", "btn-facebook", 3, "click"], [1, "fa", "fa-facebook"], ["type", "button", 1, "btn", "btn-block", "btn-twitter", 3, "click"], [1, "fa", "fa-google"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
              return ctx.onSubmit(ctx.register);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign Up to your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Back to Login?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_54_listener() {
              return ctx.signInWithFacebook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_59_listener() {
              return ctx.signInWithGoogle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Google");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: [".btn-block[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {margin-right: 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ibG9jayBpIHttYXJnaW4tcmlnaHQ6IDVweDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
          }, {
            type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "4r2+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/auth-interceptor */
      "kt8d");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/marketplace/marketplace.component */
      "SnTg");
      /* harmony import */


      var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/stats/stats.component */
      "jyt5");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/forgot/forgot.component */
      "4Qwi");
      /* harmony import */


      var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/reset/reset.component */
      "eMHG");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _constants_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./constants/config */
      "E+pt");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @coreui/angular */
      "ZTs3");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./UI/loader/loader.module */
      "UfAB");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/settings/settings.component */
      "1U8w");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./UI/skeleton/itemskeleton/itemskeleton.module */
      "qzpZ");
      /* harmony import */


      var _UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./UI/nodata/nodata.module */
      "Mhz7");
      /* harmony import */


      var _UI_item_item_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./UI/item/item.module */
      "jXLk");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /*
      Project : Cryptotrades
      FileName :  app.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the main module file which load all component and module to the application
      */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
          multi: true
        }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconSetService"], {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"](_constants_config__WEBPACK_IMPORTED_MODULE_21__["config"].google_client_id)
            }, {
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"](_constants_config__WEBPACK_IMPORTED_MODULE_21__["config"].facebook_client_id)
            }]
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(), _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconSetModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"], _UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_26__["LoaderModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_23__["MomentModule"].forRoot({
          relativeTimeThresholdOptions: {
            'm': 59
          }
        }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"].forRoot(), _UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_29__["ItemskeletonModule"], _UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_30__["NodataModule"], _UI_item_item_module__WEBPACK_IMPORTED_MODULE_31__["ItemModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["InfiniteScrollModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_14__["MarketplaceComponent"], _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_15__["StatsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_18__["ForgotComponent"], _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_19__["ResetComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconSetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"], _UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_26__["LoaderModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_23__["MomentModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"], _UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_29__["ItemskeletonModule"], _UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_30__["NodataModule"], _UI_item_item_module__WEBPACK_IMPORTED_MODULE_31__["ItemModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["InfiniteScrollModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_14__["MarketplaceComponent"], _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_15__["StatsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_18__["ForgotComponent"], _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_19__["ResetComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_27__["SettingsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(), _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconSetModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_24__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_25__["PerfectScrollbarModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_22__["FileUploadModule"], _UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_26__["LoaderModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_23__["MomentModule"].forRoot({
              relativeTimeThresholdOptions: {
                'm': 59
              }
            }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_28__["AlertModule"].forRoot(), _UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_29__["ItemskeletonModule"], _UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_30__["NodataModule"], _UI_item_item_module__WEBPACK_IMPORTED_MODULE_31__["ItemModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_32__["InfiniteScrollModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
              useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
              multi: true
            }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconSetService"], {
              provide: 'SocialAuthServiceConfig',
              useValue: {
                autoLogin: false,
                providers: [{
                  id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID,
                  provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"](_constants_config__WEBPACK_IMPORTED_MODULE_21__["config"].google_client_id)
                }, {
                  id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
                  provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"](_constants_config__WEBPACK_IMPORTED_MODULE_21__["config"].facebook_client_id)
                }]
              }
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "blMB":
    /*!***********************************!*\
      !*** ./src/app/models/history.ts ***!
      \***********************************/

    /*! exports provided: History */

    /***/
    function blMB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "History", function () {
        return History;
      });

      var History = /*#__PURE__*/function () {
        function History() {
          _classCallCheck(this, History);
        }

        _createClass(History, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            return this;
          }
        }]);

        return History;
      }();
      /***/

    },

    /***/
    "eMHG":
    /*!*****************************************************!*\
      !*** ./src/app/components/reset/reset.component.ts ***!
      \*****************************************************/

    /*! exports provided: ResetComponent */

    /***/
    function eMHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
        return ResetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      Project : Cryptotrades
      FileName :  reset.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show reset screen if user request forgot password
      */


      var ResetComponent = /*#__PURE__*/function () {
        function ResetComponent(formbuilder, snackBar, userService, router) {
          var _this16 = this;

          _classCallCheck(this, ResetComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.router = router;
          this.button_title = "Submit";
          this.isAPILoading = false;
          /**
           * This is the function which used to reset password through api
           */

          this.resetApi = function (params) {
            _this16.isAPILoading = true;

            _this16.userService.resetPassword(params).subscribe(function (result) {
              _this16.isAPILoading = false;

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);

                _this16.snackBar.open('Reset password successful', "", {
                  duration: 2000
                });

                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
              } else {
                _this16.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }

              _this16.button_title = "Submit";
            });
          };

          this.resetForm = formbuilder.group({
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'confirm_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])]
          });
        }

        _createClass(ResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to reset password with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.resetForm.valid && this.button_title == "Submit") {
              if (formData.value.password != formData.value.confirm_password) {
                this.snackBar.open('Password Mismatch', "", {
                  duration: 2000
                });
                return;
              }

              this.button_title = "Submitting...";
              this.resetApi({
                newpassword: formData.value.password
              });
            } else {
              if (this.resetForm.controls.password.invalid) {
                if (this.resetForm.controls.password.errors) {
                  if (this.resetForm.controls.password.errors.required) {
                    this.snackBar.open('Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.resetForm.controls.password.errors.minlength) {
                    this.snackBar.open('Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.resetForm.controls.password.errors.maxlength) {
                    this.snackBar.open('Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.resetForm.controls.confirm_password.invalid) {
                if (this.resetForm.controls.confirm_password.errors) {
                  if (this.resetForm.controls.confirm_password.errors.required) {
                    this.snackBar.open('Confirm Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.resetForm.controls.confirm_password.errors.minlength) {
                    this.snackBar.open('Confirm Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.resetForm.controls.confirm_password.errors.maxlength) {
                    this.snackBar.open('Confirm Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
        }]);

        return ResetComponent;
      }();

      ResetComponent.ɵfac = function ResetComponent_Factory(t) {
        return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetComponent,
        selectors: [["app-dashboard"]],
        decls: 26,
        vars: 2,
        consts: [[1, "app-body"], [1, "main", "d-flex", "align-items-center"], [1, "container"], [1, "row"], [1, "col-md-6", "mx-auto"], [1, "card-group"], [1, "card"], [1, "card-body", "p-3"], [3, "formGroup", "ngSubmit"], [1, "text-muted"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "icon-lock"], ["type", "password", "placeholder", "Enter Passowrd", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Enter Confirm Passowrd", "formControlName", "confirm_password", "required", "", 1, "form-control"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", "px-4"]],
        template: function ResetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit(ctx.resetForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './reset.component.html',
            styleUrls: ['./reset.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "he+D":
    /*!***********************************************!*\
      !*** ./src/app/UI/nodata/nodata.component.ts ***!
      \***********************************************/

    /*! exports provided: NodataComponent */

    /***/
    function heD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodataComponent", function () {
        return NodataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*
      Project : Cryptotrades
      FileName :  nodata.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show empty message on screens
      */


      var NodataComponent = /*#__PURE__*/function () {
        function NodataComponent() {
          _classCallCheck(this, NodataComponent);
        }

        _createClass(NodataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NodataComponent;
      }();

      NodataComponent.ɵfac = function NodataComponent_Factory(t) {
        return new (t || NodataComponent)();
      };

      NodataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NodataComponent,
        selectors: [["app-nodata"]],
        inputs: {
          msg: "msg"
        },
        decls: 3,
        vars: 1,
        consts: [["src", "/assets/images/result.png", 1, "nodataimg"], [1, "nodata"]],
        template: function NodataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
          }
        },
        styles: [".nodata[_ngcontent-%COMP%] { font-size: 18px; color: #666; text-align: center; margin:0px 0 50px; font-weight: 600;}\n.nodataimg[_ngcontent-%COMP%] {width: 150px; display: block; margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZUFBZSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztBQUNoRyxZQUFZLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDIiwiZmlsZSI6Im5vZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGF0YSB7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM2NjY7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOjBweCAwIDUwcHg7IGZvbnQtd2VpZ2h0OiA2MDA7fVxuLm5vZGF0YWltZyB7d2lkdGg6IDE1MHB4OyBkaXNwbGF5OiBibG9jazsgbWFyZ2luOiAwIGF1dG87fSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodataComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nodata',
            templateUrl: './nodata.component.html',
            styleUrls: ['./nodata.component.css']
          }]
        }], function () {
          return [];
        }, {
          msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jXLk":
    /*!****************************************!*\
      !*** ./src/app/UI/item/item.module.ts ***!
      \****************************************/

    /*! exports provided: ItemModule */

    /***/
    function jXLk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemModule", function () {
        return ItemModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item.component */
      "xyAo");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /*
      Project : Cryptotrades
      FileName :  item.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to define item related component and module
      */


      var ItemModule = function ItemModule() {
        _classCallCheck(this, ItemModule);
      };

      ItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ItemModule
      });
      ItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ItemModule_Factory(t) {
          return new (t || ItemModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemModule, {
          declarations: [_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]],
          exports: [_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()],
            exports: [_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]],
            declarations: [_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jcKA":
    /*!******************************************!*\
      !*** ./src/app/services/item.service.ts ***!
      \******************************************/

    /*! exports provided: ItemService */

    /***/
    function jcKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemService", function () {
        return ItemService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/common */
      "zIOW");
      /* harmony import */


      var _constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants/api */
      "6p9a");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /*
      Project : Cryptotrades
      FileName :  item.service.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the service which used to handle all api calls realted to item
      */


      var ItemService = /*#__PURE__*/function () {
        function ItemService(http) {
          _classCallCheck(this, ItemService);

          this.http = http;
          this.notifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        }

        _createClass(ItemService, [{
          key: "checkBalance",
          value: function checkBalance() {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_check_balance;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "transferBalance",
          value: function transferBalance(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_transfer_balance;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "categoryList",
          value: function categoryList() {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].category_list;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeCategoryList(param);
            }));
          }
        }, {
          key: "addItem",
          value: function addItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_add;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "updateItem",
          value: function updateItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_update;
            return this.http.put(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_delete;
            return this.http.request('delete', url, {
              body: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "publishItem",
          value: function publishItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_publish;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "purchaseItem",
          value: function purchaseItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_purchase;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "addOffer",
          value: function addOffer(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_offer_add;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "removeOffer",
          value: function removeOffer(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_offer_remove;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "actionOffer",
          value: function actionOffer(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_offer_action;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "listItem",
          value: function listItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_list + '?';

            if (params.page) {
              url = url + "page=" + params.page;
            }

            if (params.type) {
              url = url + "&&type=" + params.type;
            }

            if (params.user_id) {
              url = url + "&&user_id=" + params.user_id;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            if (params.price_range) {
              url = url + "&&price_range=" + params.price_range;
            }

            if (params.category_id) {
              url = url + "&&category_id=" + params.category_id;
            }

            if (params.collection_id) {
              url = url + "&&collection_id=" + params.collection_id;
            }

            if (params.keyword) {
              url = url + "&&keyword=" + params.keyword;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeItemList(param);
            }));
          }
        }, {
          key: "addViews",
          value: function addViews(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_views_add;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "listFavourites",
          value: function listFavourites(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_favourite_list + '?';

            if (params.user_id) {
              url = url + "user_id=" + params.user_id;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeFavouriteList(param);
            }));
          }
        }, {
          key: "listByCollectionItem",
          value: function listByCollectionItem(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_listbycollection + '?';

            if (params.collection_id) {
              url = url + "collection_id=" + params.collection_id;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "moreCollection",
          value: function moreCollection(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_more_collection + '?';

            if (params.collection_id) {
              url = url + "collection_id=" + params.collection_id;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "addLike",
          value: function addLike(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_like_add;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "addReport",
          value: function addReport(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_report;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "getHistory",
          value: function getHistory(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_history + '?';

            if (params.type) {
              url = url + "type=" + params.type;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            if (params.collection_id) {
              url = url + "&&collection_id=" + params.collection_id;
            }

            if (params.user_id) {
              url = url + "&&user_id=" + params.user_id;
            }

            if (params.page) {
              url = url + "&&page=" + params.page;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeHistoryList(param);
            }));
          }
        }, {
          key: "getPrices",
          value: function getPrices(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_prices + '?';

            if (params.page) {
              url = url + "page=" + params.page;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializePriceList(param);
            }));
          }
        }, {
          key: "getOffers",
          value: function getOffers(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].item_offers + '?';

            if (params.page) {
              url = url + "page=" + params.page;
            }

            if (params.type) {
              url = url + "&&type=" + params.type;
            }

            if (params.item_id) {
              url = url + "&&item_id=" + params.item_id;
            }

            if (params.user_id) {
              url = url + "&&user_id=" + params.user_id;
            }

            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeOfferList(param);
            }));
          }
        }]);

        return ItemService;
      }();

      ItemService.ɵfac = function ItemService_Factory(t) {
        return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ItemService,
        factory: ItemService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jyt5":
    /*!*****************************************************!*\
      !*** ./src/app/components/stats/stats.component.ts ***!
      \*****************************************************/

    /*! exports provided: StatsComponent */

    /***/
    function jyt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatsComponent", function () {
        return StatsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /*
      Project : Cryptotrades
      FileName :  stats.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show overall activity in the application
      */


      function StatsComponent_tr_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection/detail/" + item_r4.collection_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.mediaBase + "/images/collection/logo/" + item_r4.collection_id.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function StatsComponent_tr_31_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r4.from_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.from_id.first_name, " ", item_r4.from_id.last_name, "");
        }
      }

      function StatsComponent_tr_31_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r4.to_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.to_id.first_name, " ", item_r4.to_id.last_name, "");
        }
      }

      function StatsComponent_tr_31_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r8.blockChainExplorer + "tx/" + item_r4.transaction_hash, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.transaction_hash);
        }
      }

      function StatsComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatsComponent_tr_31_div_2_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StatsComponent_tr_31_div_11_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StatsComponent_tr_31_div_13_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StatsComponent_tr_31_div_15_Template, 3, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.collection_id != null);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 9, item_r4.created_date, "LL"));
        }
      }

      function StatsComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      }

      function StatsComponent_ul_34_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatsComponent_ul_34_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.prevHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StatsComponent_ul_34_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatsComponent_ul_34_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.nextHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StatsComponent_ul_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsComponent_ul_34_li_1_Template, 3, 0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatsComponent_ul_34_li_2_Template, 3, 0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pageHistory != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.hasNextHistoryPage);
        }
      }

      function StatsComponent_ul_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var StatsComponent = /*#__PURE__*/function () {
        function StatsComponent(userService, router, itemService) {
          var _this17 = this;

          _classCallCheck(this, StatsComponent);

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
           * This is the function which list all transfer history from api
           */

          this.getHistoryList = function () {
            _this17.historyLoading = true;
            var params = {
              type: "all",
              page: _this17.pageHistory
            };

            _this17.itemService.getHistory(params).subscribe(function (result) {
              if (result.status == true) {
                _this17.histories = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this17.hasNextHistoryPage = true;
                } else {
                  _this17.hasNextHistoryPage = false;
                }
              } else {
                _this17.hasNextHistoryPage = false;
              }

              _this17.historyLoading = false;
            });
          };
          /**
           * This is the function which list all transfer history from api on next button click
           */


          this.nextHistoryPage = function () {
            _this17.pageHistory = _this17.pageHistory + 1;

            _this17.getHistoryList();
          };
          /**
           * This is the function which list all transfer history from api on previous button click
           */


          this.prevHistoryPage = function () {
            _this17.pageHistory = _this17.pageHistory - 1;

            _this17.getHistoryList();
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(StatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHistoryList();
          }
        }]);

        return StatsComponent;
      }();

      StatsComponent.ɵfac = function StatsComponent_Factory(t) {
        return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]));
      };

      StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatsComponent,
        selectors: [["app-stats"]],
        decls: 36,
        vars: 4,
        consts: [[1, "collectionMainContainer"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "tradeBlock"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "cil-swap-vertical", "titleIcon"], [1, "card-body", "historyBody"], [1, "table", "table-bordered", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "itemDetail", 3, "routerLink"], [3, "src"], ["href", "javascript:void(0)", 3, "routerLink"], ["target", "_blank", 3, "href"], ["colspan", "8"], ["type", "info", "ng-reflect-type", "info"], ["role", "alert", "ng-reflect-ng-class", "", 1, "alert", "alert-info"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], ["href", "javascript:void(0)", 1, "page-link"]],
        template: function StatsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Activity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Collection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "To");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Transaction Hash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StatsComponent_tr_31_Template, 19, 12, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, StatsComponent_tr_32_Template, 7, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, StatsComponent_ul_34_Template, 3, 2, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, StatsComponent_ul_35_Template, 4, 0, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.histories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.histories.length == 0 && ctx.historyLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.historyLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
        pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_7__["DateFormatPipe"]],
        styles: [".historyBody[_ngcontent-%COMP%] {overflow:hidden; overflow-x: auto; }\n.itemDetail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 50px; height: 50px; cursor: pointer; -o-object-fit: cover; object-fit: cover;}\n.collectionMainContainer[_ngcontent-%COMP%] {margin:128px 0 0;}\n@media (min-width: 992px) {\n    .collectionMainContainer[_ngcontent-%COMP%] {margin:143px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDakQsaUJBQWlCLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG9CQUFpQixFQUFqQixpQkFBaUIsQ0FBQztBQUMvRSwwQkFBMEIsZ0JBQWdCLENBQUM7QUFDM0M7SUFDSSwwQkFBMEIsZ0JBQWdCLENBQUM7QUFDL0MiLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5Qm9keSB7b3ZlcmZsb3c6aGlkZGVuOyBvdmVyZmxvdy14OiBhdXRvOyB9XG4uaXRlbURldGFpbCBpbWcge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IGN1cnNvcjogcG9pbnRlcjsgb2JqZWN0LWZpdDogY292ZXI7fVxuLmNvbGxlY3Rpb25NYWluQ29udGFpbmVyIHttYXJnaW46MTI4cHggMCAwO31cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jb2xsZWN0aW9uTWFpbkNvbnRhaW5lciB7bWFyZ2luOjE0M3B4IDAgMDt9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-stats',
            templateUrl: './stats.component.html',
            styleUrls: ['./stats.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kt8d":
    /*!**********************************************!*\
      !*** ./src/app/services/auth-interceptor.ts ***!
      \**********************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function kt8d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.service */
      "qfBg");
      /*
      Project : Cryptotrades
      FileName :  aut-interceptor.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the httpinterceptor file used to add authorized header with api call if user logged in
      */


      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(user) {
          _classCallCheck(this, AuthInterceptor);

          this.user = user;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.user.getToken();

            if (authToken != '') {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
              });
              return next.handle(authReq);
            } else {
              var _authReq = req.clone();

              return next.handle(_authReq);
            }
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nGB/":
    /*!********************************************************************!*\
      !*** ./src/app/UI/skeleton/itemskeleton/itemskeleton.component.ts ***!
      \********************************************************************/

    /*! exports provided: ItemskeletonComponent */

    /***/
    function nGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemskeletonComponent", function () {
        return ItemskeletonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-skeleton-loader */
      "xJkR");
      /*
      Project : Cryptotrades
      FileName :  itemskeleton.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show item skeleton
      */


      var _c0 = function _c0() {
        return {
          "height": "100%",
          "margin-top.px": 0,
          "margin-bottom.px": 0,
          "width": "100%",
          "background-color": "#c3c3c3",
          "border-radius": 0
        };
      };

      var _c1 = function _c1() {
        return {
          "height.px": 12,
          "margin-top.px": 0,
          "margin-bottom.px": 0,
          "width": "70%",
          "background-color": "#c3c3c3"
        };
      };

      var _c2 = function _c2() {
        return {
          "height.px": 12,
          "margin-top.px": 0,
          "margin-bottom.px": 0,
          "width": "50%",
          "background-color": "#c3c3c3"
        };
      };

      function ItemskeletonComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      }

      var ItemskeletonComponent = /*#__PURE__*/function () {
        function ItemskeletonComponent() {
          _classCallCheck(this, ItemskeletonComponent);

          this.collections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }

        _createClass(ItemskeletonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ItemskeletonComponent;
      }();

      ItemskeletonComponent.ɵfac = function ItemskeletonComponent_Factory(t) {
        return new (t || ItemskeletonComponent)();
      };

      ItemskeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItemskeletonComponent,
        selectors: [["app-itemskeleton"]],
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "collectionItem"], [1, "collectionItemImg"], ["count", "1", 3, "theme"], [1, "collectionItemTitle"], [1, "collectionItemCount"]],
        template: function ItemskeletonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemskeletonComponent_div_1_Template, 8, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collections);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__["NgxSkeletonLoaderComponent"]],
        styles: [".collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; height: 240px;}\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: left; margin: 15px 15px 0;}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: left; margin: 0 15px 15px;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1za2VsZXRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQix3QkFBd0IsRUFBRSxlQUFlLENBQUM7QUFDM0Qsb0JBQW9CLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztBQUN0RCxzQkFBc0IsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFDNUQsc0JBQXNCLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBQzVEO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QztBQUNBO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztBQUN0QyIsImZpbGUiOiJpdGVtc2tlbGV0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWN0aW9uSXRlbSB7Ym9yZGVyOjFweCBzb2xpZCAjZTdlN2U3OyBtYXJnaW46MCAwIDI1cHg7fVxuLmNvbGxlY3Rpb25JdGVtSW1nIHtwb3NpdGlvbjogcmVsYXRpdmU7IGhlaWdodDogMjQwcHg7fVxuLmNvbGxlY3Rpb25JdGVtVGl0bGUge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMTVweCAxNXB4IDA7fVxuLmNvbGxlY3Rpb25JdGVtQ291bnQge3RleHQtYWxpZ246IGxlZnQ7IG1hcmdpbjogMCAxNXB4IDE1cHg7fVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDIwMHB4O31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDE2MHB4O31cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemskeletonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-itemskeleton',
            templateUrl: './itemskeleton.component.html',
            styleUrls: ['./itemskeleton.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "poLh":
    /*!***********************************************!*\
      !*** ./src/app/UI/loader/loader.component.ts ***!
      \***********************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function poLh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /*
      Project : Cryptotrades
      FileName :  loader.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to set loader on screens
      */


      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 5,
        vars: 0,
        consts: [[1, "loaderContainer"], [1, "loaderCell"], [1, "loaderCellInner"], [1, "loaderElement"], ["diameter", "75"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]],
        styles: [".loaderContainer[_ngcontent-%COMP%] {background: rgba(0, 0, 0, 0.7); position: fixed; left:0; right:0; bottom:0; top:0; z-index: 998;}\n[_nghost-%COMP%]     .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {   \n    stroke: #ffffff;\n}\n.loaderCell[_ngcontent-%COMP%] {display: table; width: 100%; height: 100%;}\n.loaderCellInner[_ngcontent-%COMP%] {display: table-cell; vertical-align: middle;}\n.loaderElement[_ngcontent-%COMP%] {width: 75px; margin: 0 auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQiw4QkFBOEIsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQztBQUNsSDtJQUNJLGVBQWU7QUFDbkI7QUFDQSxhQUFhLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO0FBQ3ZELGtCQUFrQixtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQztBQUM5RCxnQkFBZ0IsV0FBVyxFQUFFLGNBQWMsQ0FBQyIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJDb250YWluZXIge2JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTsgcG9zaXRpb246IGZpeGVkOyBsZWZ0OjA7IHJpZ2h0OjA7IGJvdHRvbTowOyB0b3A6MDsgei1pbmRleDogOTk4O31cbjpob3N0IDo6bmctZGVlcCAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHsgICBcbiAgICBzdHJva2U6ICNmZmZmZmY7XG59XG4ubG9hZGVyQ2VsbCB7ZGlzcGxheTogdGFibGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7fVxuLmxvYWRlckNlbGxJbm5lciB7ZGlzcGxheTogdGFibGUtY2VsbDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTt9XG4ubG9hZGVyRWxlbWVudCB7d2lkdGg6IDc1cHg7IG1hcmdpbjogMCBhdXRvO30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qfBg":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function qfBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/common */
      "zIOW");
      /* harmony import */


      var _constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants/api */
      "6p9a");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "Nm8O");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /*
      Project : Cryptotrades
      FileName :  user.service.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the service which used to handle all api calls realted to user
      */


      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.notifier = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          /**
           * This is the function which used to get user jwt token for local storage
           */

          this.getToken = function () {
            var token = localStorage.getItem('token');
            return token == null ? '' : token;
          };
        }
        /**
         * This is the function which used to parse jwt token using helper service
         */


        _createClass(UserService, [{
          key: "getUser",
          value: function getUser() {
            var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
            var token = this.getToken();

            if (token.length > 0) {
              return jwtHelper.decodeToken(token);
            } else {
              return null;
            }
          }
        }, {
          key: "loginApi",
          value: function loginApi(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_login;
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeLoggedIn(param);
            }));
          }
        }, {
          key: "register",
          value: function register(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_register;
            console.log("user service/register function ==== ", url);
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeLoggedIn(param);
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_forgot;
            return this.http.put(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(params) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_reset;
            return this.http.put(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeLoggedIn(param);
            }));
          }
        }, {
          key: "viewProfile",
          value: function viewProfile(user_id) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_profile + '/' + user_id;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserialize(param);
            }));
          }
        }, {
          key: "updateApi",
          value: function updateApi(params, user_id) {
            var url = _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].base_url + _constants_api__WEBPACK_IMPORTED_MODULE_4__["API"].user_update + '/' + user_id;
            return this.http.put(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (param) {
              return new _models_common__WEBPACK_IMPORTED_MODULE_3__["Common"]().deserializeLoggedIn(param);
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qzpZ":
    /*!*****************************************************************!*\
      !*** ./src/app/UI/skeleton/itemskeleton/itemskeleton.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ItemskeletonModule */

    /***/
    function qzpZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemskeletonModule", function () {
        return ItemskeletonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _itemskeleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-skeleton-loader */
      "xJkR");
      /*
      Project : Cryptotrades
      FileName :  itemskeleton.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to load component and module related to item skeleton
      */


      var ItemskeletonModule = function ItemskeletonModule() {
        _classCallCheck(this, ItemskeletonModule);
      };

      ItemskeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ItemskeletonModule
      });
      ItemskeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ItemskeletonModule_Factory(t) {
          return new (t || ItemskeletonModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemskeletonModule, {
          declarations: [_itemskeleton_component__WEBPACK_IMPORTED_MODULE_2__["ItemskeletonComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
          exports: [_itemskeleton_component__WEBPACK_IMPORTED_MODULE_2__["ItemskeletonComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemskeletonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_5__["NgxSkeletonLoaderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"]],
            exports: [_itemskeleton_component__WEBPACK_IMPORTED_MODULE_2__["ItemskeletonComponent"]],
            declarations: [_itemskeleton_component__WEBPACK_IMPORTED_MODULE_2__["ItemskeletonComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "r8SE":
    /*!********************************!*\
      !*** ./src/app/models/item.ts ***!
      \********************************/

    /*! exports provided: Item */

    /***/
    function r8SE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });

      var Item = /*#__PURE__*/function () {
        function Item() {
          _classCallCheck(this, Item);
        }

        _createClass(Item, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.like_count = this.shortNum(this.like_count);
            this.view_count = this.shortNum(this.view_count);
            return this;
          }
        }, {
          key: "shortNum",
          value: function shortNum(value) {
            if (value === null) return null;
            if (value === 0) return "0";
            var fractionSize = 1;
            var abs = Math.abs(value);
            var rounder = Math.pow(10, fractionSize);
            var isNegative = value < 0;
            var key = '';
            var powers = [{
              key: "Q",
              value: Math.pow(10, 15)
            }, {
              key: "T",
              value: Math.pow(10, 12)
            }, {
              key: "B",
              value: Math.pow(10, 9)
            }, {
              key: "M",
              value: Math.pow(10, 6)
            }, {
              key: "k",
              value: 1000
            }];

            for (var i = 0; i < powers.length; i++) {
              var reduced = abs / powers[i].value;
              reduced = Math.round(reduced * rounder) / rounder;

              if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
              }
            }

            return (isNegative ? '-' : '') + abs + key;
          }
        }]);

        return Item;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/forgot/forgot.component */
      "4Qwi");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/marketplace/marketplace.component */
      "SnTg");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/profile/profile.component */
      "DZ0t");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/reset/reset.component */
      "eMHG");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/settings/settings.component */
      "1U8w");
      /* harmony import */


      var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/stats/stats.component */
      "jyt5");
      /* harmony import */


      var _guard_guest_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./guard/guest.guard */
      "1EHG");
      /* harmony import */


      var _guard_user_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./guard/user.guard */
      "3owW");
      /*
      Project : Cryptotrades
      FileName :  app-routing.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the main routing file which load all routes in the application
      */


      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'marketplace',
        component: _components_marketplace_marketplace_component__WEBPACK_IMPORTED_MODULE_5__["MarketplaceComponent"]
      }, {
        path: 'stats',
        component: _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_10__["StatsComponent"]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_guard_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]]
      }, {
        path: 'forgot',
        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"],
        canActivate: [_guard_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        canActivate: [_guard_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        canActivate: [_guard_guest_guard__WEBPACK_IMPORTED_MODULE_11__["GuestGuard"]]
      }, {
        path: 'reset',
        component: _components_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"],
        canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]]
      }, {
        path: 'profile/:id',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-profile-profile-module */
          "components-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./components/profile/profile.module */
          "lhJh")).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'settings',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
        canActivate: [_guard_user_guard__WEBPACK_IMPORTED_MODULE_12__["UserGuard"]],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-settings-settings-module */
          [__webpack_require__.e("default~components-collections-collections-module~components-items-items-module~components-settings-~47eb9289"), __webpack_require__.e("components-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./components/settings/settings.module */
          "02t3")).then(function (m) {
            return m.SettingsModule;
          });
        }
      }, {
        path: 'collection',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-collections-collections-module */
          [__webpack_require__.e("default~components-collections-collections-module~components-items-items-module~components-settings-~47eb9289"), __webpack_require__.e("default~components-collections-collections-module~components-items-items-module"), __webpack_require__.e("components-collections-collections-module")]).then(__webpack_require__.bind(null,
          /*! ./components/collections/collections.module */
          "C2Gl")).then(function (m) {
            return m.CollectionsModule;
          });
        }
      }, {
        path: 'item',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-items-items-module */
          [__webpack_require__.e("default~components-collections-collections-module~components-items-items-module~components-settings-~47eb9289"), __webpack_require__.e("default~components-collections-collections-module~components-items-items-module"), __webpack_require__.e("components-items-items-module")]).then(__webpack_require__.bind(null,
          /*! ./components/items/items.module */
          "oGf6")).then(function (m) {
            return m.ItemsModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xyAo":
    /*!*******************************************!*\
      !*** ./src/app/UI/item/item.component.ts ***!
      \*******************************************/

    /*! exports provided: ItemComponent */

    /***/
    function xyAo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
        return ItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /*
      Project : Cryptotrades
      FileName :  item.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to define item as sub compoonent
      */


      function ItemComponent_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_8_div_3_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r2.editAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_8_div_3_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.deleteAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_div_8_div_3_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.publishAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "more-dropdown");
        }
      }

      function ItemComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemComponent_div_8_div_3_Template, 7, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "morelink-dropdown");
        }
      }

      var ItemComponent = /*#__PURE__*/function () {
        function ItemComponent() {
          var _this18 = this;

          _classCallCheck(this, ItemComponent);

          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
          this.itemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * This is the function which used send notification to parent component for item view
           */

          this.viewAction = function () {
            _this18.itemEvent.emit({
              type: "view",
              item: _this18.item
            });
          };
          /**
           * This is the function which used send notification to parent component for item edit
           */


          this.editAction = function () {
            _this18.itemEvent.emit({
              type: "edit",
              item: _this18.item
            });
          };
          /**
           * This is the function which used send notification to parent component for item delete
           */


          this.deleteAction = function () {
            _this18.itemEvent.emit({
              type: "delete",
              item: _this18.item
            });
          };
          /**
           * This is the function which used send notification to parent component for item publish
           */


          this.publishAction = function () {
            _this18.itemEvent.emit({
              type: "publish",
              item: _this18.item
            });
          };
        }

        _createClass(ItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ItemComponent;
      }();

      ItemComponent.ɵfac = function ItemComponent_Factory(t) {
        return new (t || ItemComponent)();
      };

      ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItemComponent,
        selectors: [["app-item"]],
        inputs: {
          item: "item"
        },
        outputs: {
          itemEvent: "itemEvent"
        },
        decls: 9,
        vars: 4,
        consts: [[1, "collectionItem"], [1, "collectionItemImg", 3, "click"], [1, "collectionItemImgBanner", 3, "src"], [1, "collectionItemContent"], [1, "collectionItemTitle"], [1, "collectionItemCount"], ["class", "moreAction dropdown dropright", "dropdown", "", 4, "ngIf"], ["dropdown", "", 1, "moreAction", "dropdown", "dropright"], ["dropdownToggle", "", "aria-controls", "more-dropdown", 1, "btn", 3, "id"], [1, "icon-options-vertical"], ["class", "dropdown-menu dropdown-menu-right", "aria-labelledby", "morelink-dropdown", 3, "id", 4, "dropdownMenu"], ["aria-labelledby", "morelink-dropdown", 1, "dropdown-menu", "dropdown-menu-right", 3, "id"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"]],
        template: function ItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_div_click_1_listener() {
              return ctx.viewAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemComponent_div_8_Template, 4, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mediaBase + "/images/item/thumb/" + ctx.item.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price ", ctx.item.price, " ETH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.status == "inactive");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownMenuDirective"]],
        styles: [".collectionItem[_ngcontent-%COMP%] {border:1px solid #e7e7e7; margin:0 0 25px; box-shadow: 0 5px 20px 0 #cccccc; border-radius: 7px;}\n.collectionItemImg[_ngcontent-%COMP%] {position: relative; height: 240px; cursor: pointer; border-radius: 7px 7px 0 0; overflow: hidden;}\n.collectionItemImgBanner[_ngcontent-%COMP%] {width: 100%; height: 240px; -o-object-fit: cover; object-fit: cover; background-color: #e7e7e7;}\n.collectionItemContent[_ngcontent-%COMP%] {position: relative; padding: 15px 50px 15px 15px; }\n.collectionItemTitle[_ngcontent-%COMP%] {text-align: left; margin: 0px 35px 0 0px; font-size: 16px; text-transform: capitalize; color: #444; font-weight: 600; white-space: nowrap;text-overflow:ellipsis; overflow: hidden;}\n.collectionItemCount[_ngcontent-%COMP%] {text-align: left; margin: 0 0px 0px; font-size: 14px;}\n.collectionItemContent[_ngcontent-%COMP%]   .moreAction[_ngcontent-%COMP%]{ position: absolute; right: 0; top: 0;}\n@media screen and (max-width: 1200px) {\n    .collectionItemImg[_ngcontent-%COMP%]{height: 200px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 200px;}\n}\n@media screen and (max-width: 992px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 160px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 160px;}\n}\n@media screen and (max-width: 768px) {\n    .collectionItemImg[_ngcontent-%COMP%] {height: 240px;}\n    .collectionItemImgBanner[_ngcontent-%COMP%] {height: 240px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLGdDQUFnQyxFQUFFLGtCQUFrQixDQUFDO0FBQ2pILG9CQUFvQixrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLDBCQUEwQixFQUFFLGdCQUFnQixDQUFDO0FBQ3JILDBCQUEwQixXQUFXLEVBQUUsYUFBYSxFQUFFLG9CQUFpQixFQUFqQixpQkFBaUIsRUFBRSx5QkFBeUIsQ0FBQztBQUNuRyx3QkFBd0Isa0JBQWtCLEVBQUUsNEJBQTRCLEVBQUU7QUFDMUUsc0JBQXNCLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUM7QUFDek0sc0JBQXNCLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztBQUMzRSxvQ0FBb0Msa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUN6RTtJQUNJLG1CQUFtQixhQUFhLENBQUM7SUFDakMsMEJBQTBCLGFBQWEsQ0FBQztBQUM1QztBQUNBO0lBQ0ksb0JBQW9CLGFBQWEsQ0FBQztJQUNsQywwQkFBMEIsYUFBYSxDQUFDO0FBQzVDO0FBRUE7SUFDSSxvQkFBb0IsYUFBYSxDQUFDO0lBQ2xDLDBCQUEwQixhQUFhLENBQUM7QUFDNUMiLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb25JdGVtIHtib3JkZXI6MXB4IHNvbGlkICNlN2U3ZTc7IG1hcmdpbjowIDAgMjVweDsgYm94LXNoYWRvdzogMCA1cHggMjBweCAwICNjY2NjY2M7IGJvcmRlci1yYWRpdXM6IDdweDt9XG4uY29sbGVjdGlvbkl0ZW1JbWcge3Bvc2l0aW9uOiByZWxhdGl2ZTsgaGVpZ2h0OiAyNDBweDsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItcmFkaXVzOiA3cHggN3B4IDAgMDsgb3ZlcmZsb3c6IGhpZGRlbjt9XG4uY29sbGVjdGlvbkl0ZW1JbWdCYW5uZXIge3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDI0MHB4OyBvYmplY3QtZml0OiBjb3ZlcjsgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzt9XG4uY29sbGVjdGlvbkl0ZW1Db250ZW50IHtwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDE1cHggNTBweCAxNXB4IDE1cHg7IH1cbi5jb2xsZWN0aW9uSXRlbVRpdGxlIHt0ZXh0LWFsaWduOiBsZWZ0OyBtYXJnaW46IDBweCAzNXB4IDAgMHB4OyBmb250LXNpemU6IDE2cHg7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBjb2xvcjogIzQ0NDsgZm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzOyBvdmVyZmxvdzogaGlkZGVuO31cbi5jb2xsZWN0aW9uSXRlbUNvdW50IHt0ZXh0LWFsaWduOiBsZWZ0OyBtYXJnaW46IDAgMHB4IDBweDsgZm9udC1zaXplOiAxNHB4O31cbi5jb2xsZWN0aW9uSXRlbUNvbnRlbnQgLm1vcmVBY3Rpb257IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDA7IHRvcDogMDt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29sbGVjdGlvbkl0ZW1JbWd7aGVpZ2h0OiAyMDBweDt9XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nQmFubmVyIHtoZWlnaHQ6IDIwMHB4O31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nIHtoZWlnaHQ6IDE2MHB4O31cbiAgICAuY29sbGVjdGlvbkl0ZW1JbWdCYW5uZXIge2hlaWdodDogMTYwcHg7fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2xsZWN0aW9uSXRlbUltZyB7aGVpZ2h0OiAyNDBweDt9XG4gICAgLmNvbGxlY3Rpb25JdGVtSW1nQmFubmVyIHtoZWlnaHQ6IDI0MHB4O31cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
          }]
        }], function () {
          return [];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "y7Qa":
    /*!**************************************!*\
      !*** ./src/app/models/collection.ts ***!
      \**************************************/

    /*! exports provided: Collection */

    /***/
    function y7Qa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Collection", function () {
        return Collection;
      });

      var Collection = /*#__PURE__*/function () {
        function Collection() {
          _classCallCheck(this, Collection);

          this.royalties = 0;
          this.item_count = 0;
          this.volume_traded = 0;
        }

        _createClass(Collection, [{
          key: "deserialize",
          value: function deserialize(input) {
            Object.assign(this, input);
            this.volume_traded_str = this.shortNum(this.volume_traded);
            this.item_count_str = this.shortNum(this.item_count);
            return this;
          }
        }, {
          key: "shortNum",
          value: function shortNum(value) {
            if (value === null) return null;
            if (value === 0) return "0";
            var fractionSize = 1;
            var abs = Math.abs(value);
            var rounder = Math.pow(10, fractionSize);
            var isNegative = value < 0;
            var key = '';
            var powers = [{
              key: "Q",
              value: Math.pow(10, 15)
            }, {
              key: "T",
              value: Math.pow(10, 12)
            }, {
              key: "B",
              value: Math.pow(10, 9)
            }, {
              key: "M",
              value: Math.pow(10, 6)
            }, {
              key: "k",
              value: 1000
            }];

            for (var i = 0; i < powers.length; i++) {
              var reduced = abs / powers[i].value;
              reduced = Math.round(reduced * rounder) / rounder;

              if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                break;
              }
            }

            return (isNegative ? '-' : '') + abs + key;
          }
        }]);

        return Collection;
      }();
      /***/

    },

    /***/
    "zIOW":
    /*!**********************************!*\
      !*** ./src/app/models/common.ts ***!
      \**********************************/

    /*! exports provided: Common */

    /***/
    function zIOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Common", function () {
        return Common;
      });
      /* harmony import */


      var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./category */
      "HLRD");
      /* harmony import */


      var _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./collection */
      "y7Qa");
      /* harmony import */


      var _history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./history */
      "blMB");
      /* harmony import */


      var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item */
      "r8SE");
      /* harmony import */


      var _offer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./offer */
      "PoVy");
      /* harmony import */


      var _price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./price */
      "7EJP");
      /*
      Project : Cryptotrades
      FileName :  common.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the model class used to parse api common parameters and return response to components
      */


      var Common = /*#__PURE__*/function () {
        function Common() {
          _classCallCheck(this, Common);

          this.tempArray = [];
        }

        _createClass(Common, [{
          key: "deserialize",
          value: function deserialize(input) {
            return Object.assign(this, input);
          }
        }, {
          key: "deserializeLoggedIn",
          value: function deserializeLoggedIn(input) {
            if (input.status == true) {
              this.return_id = input.token;
            }

            return Object.assign(this, input);
          }
        }, {
          key: "deserializeCollectionList",
          value: function deserializeCollectionList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var users = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                users.push(new _collection__WEBPACK_IMPORTED_MODULE_1__["Collection"]().deserialize(element));
              }

              this.tempArray = users;
            }

            return this;
          }
        }, {
          key: "deserializeCategoryList",
          value: function deserializeCategoryList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var category = [];

              for (var index = 0; index < input.data.length; index++) {
                var element = input.data[index];
                category.push(new _category__WEBPACK_IMPORTED_MODULE_0__["Category"]().deserialize(element));
              }

              this.tempArray = category;
            }

            return this;
          }
        }, {
          key: "deserializeCollectionView",
          value: function deserializeCollectionView(input) {
            Object.assign(this, input);
            this.result = new _collection__WEBPACK_IMPORTED_MODULE_1__["Collection"]().deserialize(this.result);
            return this;
          }
        }, {
          key: "deserializeItemList",
          value: function deserializeItemList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var users = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                users.push(new _item__WEBPACK_IMPORTED_MODULE_3__["Item"]().deserialize(element));
              }

              this.tempArray = users;
            }

            return this;
          }
        }, {
          key: "deserializeHistoryList",
          value: function deserializeHistoryList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var users = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                users.push(new _history__WEBPACK_IMPORTED_MODULE_2__["History"]().deserialize(element));
              }

              this.tempArray = users;
            }

            return this;
          }
        }, {
          key: "deserializeOfferList",
          value: function deserializeOfferList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var offers = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                offers.push(new _offer__WEBPACK_IMPORTED_MODULE_4__["Offer"]().deserialize(element));
              }

              this.tempArray = offers;
            }

            return this;
          }
        }, {
          key: "deserializePriceList",
          value: function deserializePriceList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var prices = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                prices.push(new _price__WEBPACK_IMPORTED_MODULE_5__["Price"]().deserialize(element));
              }

              this.tempArray = prices;
            }

            return this;
          }
        }, {
          key: "deserializeFavouriteList",
          value: function deserializeFavouriteList(input) {
            Object.assign(this, input);

            if (input.status == true) {
              var items = [];

              for (var index = 0; index < input.data.docs.length; index++) {
                var element = input.data.docs[index];
                items.push(new _item__WEBPACK_IMPORTED_MODULE_3__["Item"]().deserialize(element.item_id));
              }

              this.tempArray = items;
            }

            return this;
          }
        }]);

        return Common;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map