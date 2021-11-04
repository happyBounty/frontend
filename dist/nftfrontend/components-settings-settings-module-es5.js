(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-settings-settings-module"], {
    /***/
    "/OAK":
    /*!****************************************************************!*\
      !*** ./src/app/components/settings/settings-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: SettingsRoutingModule */

    /***/
    function OAK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function () {
        return SettingsRoutingModule;
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


      var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./changepassword/changepassword.component */
      "SIRa");
      /* harmony import */


      var _general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./general/general.component */
      "M/+h");
      /* harmony import */


      var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wallet/wallet.component */
      "rRxn");
      /*
      Project : Cryptotrades
      FileName :  settings-routing.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the routing module which used to load routes for setting module
      */


      var routes = [{
        path: '',
        redirectTo: 'wallet',
        pathMatch: 'full'
      }, {
        path: 'wallet',
        component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_4__["WalletComponent"]
      }, {
        path: 'general',
        component: _general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"]
      }, {
        path: 'changepassword',
        component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_2__["ChangepasswordComponent"]
      }];

      var SettingsRoutingModule = function SettingsRoutingModule() {
        _classCallCheck(this, SettingsRoutingModule);
      };

      SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingsRoutingModule
      });
      SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingsRoutingModule_Factory(t) {
          return new (t || SettingsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "02t3":
    /*!********************************************************!*\
      !*** ./src/app/components/settings/settings.module.ts ***!
      \********************************************************/

    /*! exports provided: SettingsModule */

    /***/
    function t3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsModule", function () {
        return SettingsModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./settings-routing.module */
      "/OAK");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./wallet/wallet.component */
      "rRxn");
      /* harmony import */


      var _general_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./general/general.component */
      "M/+h");
      /* harmony import */


      var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./changepassword/changepassword.component */
      "SIRa");
      /* harmony import */


      var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./transfer/transfer.component */
      "ssfm");
      /*
      Project : Cryptotrades
      FileName :  settings.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module which load component and module for setting
      */


      var SettingsModule = function SettingsModule() {
        _classCallCheck(this, SettingsModule);
      };

      SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingsModule
      });
      SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingsModule_Factory(t) {
          return new (t || SettingsModule)();
        },
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
          relativeTimeThresholdOptions: {
            'm': 59
          }
        }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, {
          declarations: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__["WalletComponent"], _general_general_component__WEBPACK_IMPORTED_MODULE_9__["GeneralComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_10__["ChangepasswordComponent"], _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_11__["TransferComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
              relativeTimeThresholdOptions: {
                'm': 59
              }
            }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"]],
            declarations: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_8__["WalletComponent"], _general_general_component__WEBPACK_IMPORTED_MODULE_9__["GeneralComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_10__["ChangepasswordComponent"], _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_11__["TransferComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "M/+h":
    /*!******************************************************************!*\
      !*** ./src/app/components/settings/general/general.component.ts ***!
      \******************************************************************/

    /*! exports provided: GeneralComponent */

    /***/
    function MH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralComponent", function () {
        return GeneralComponent;
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /*
      Project : Cryptotrades
      FileName :  general.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show edit profile screen for user
      */


      var GeneralComponent = /*#__PURE__*/function () {
        function GeneralComponent(formbuilder, snackBar, userService) {
          var _this = this;

          _classCallCheck(this, GeneralComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.button_title = "Save";
          this.isAPILoading = false;
          /**
           * This is the function which used to get profile information of logged in user
           */

          this.getProfileInfo = function () {
            _this.userService.viewProfile(_this.currentUser.user_id).subscribe(function (result) {
              var resulter = result;
              _this.userInfo = resulter.result;

              _this.generalForm.controls.username.setValue(_this.userInfo.username);

              _this.generalForm.controls.email.setValue(_this.userInfo.email);

              _this.generalForm.controls.first_name.setValue(_this.userInfo.first_name);

              _this.generalForm.controls.last_name.setValue(_this.userInfo.last_name);
            });
          };
          /**
           * This is the function which used update profile information through api
           */


          this.updateApi = function (params) {
            _this.isAPILoading = true;

            _this.userService.updateApi(params, _this.currentUser.user_id).subscribe(function (result) {
              _this.isAPILoading = false;

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);

                _this.snackBar.open('General settings updated successfully', "", {
                  duration: 2000
                });

                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
              } else {
                _this.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }

              _this.button_title = "Save";
            });
          };

          this.currentUser = this.userService.getUser();
          this.generalForm = formbuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])],
            'first_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'last_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])]
          });
          this.getProfileInfo();
        }

        _createClass(GeneralComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used update profile information with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.generalForm.valid && this.button_title == "Save") {
              this.button_title = "Saving...";
              this.updateApi({
                username: formData.value.username,
                first_name: formData.value.first_name,
                last_name: formData.value.last_name,
                email: formData.value.email
              });
            } else {
              if (this.generalForm.controls.username.invalid) {
                if (this.generalForm.controls.username.errors) {
                  if (this.generalForm.controls.username.errors.required) {
                    this.snackBar.open('Username is required', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.username.errors.minlength) {
                    this.snackBar.open('Username required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.username.errors.maxlength) {
                    this.snackBar.open('Username required maximum 255 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.generalForm.controls.email.invalid) {
                if (this.generalForm.controls.email.errors) {
                  console.log(this.generalForm.controls.email.errors);

                  if (this.generalForm.controls.email.errors.required) {
                    this.snackBar.open('Email is required', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.email.errors.minlength) {
                    this.snackBar.open('Email required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.email.errors.pattern) {
                    this.snackBar.open('Invalid Email', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.generalForm.controls.first_name.invalid) {
                if (this.generalForm.controls.first_name.errors) {
                  if (this.generalForm.controls.first_name.errors.required) {
                    this.snackBar.open('First Name is required', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.first_name.errors.minlength) {
                    this.snackBar.open('First Name required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.first_name.errors.maxlength) {
                    this.snackBar.open('First Name required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.generalForm.controls.last_name.invalid) {
                if (this.generalForm.controls.last_name.errors) {
                  if (this.generalForm.controls.last_name.errors.required) {
                    this.snackBar.open('Last Name is required', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.last_name.errors.minlength) {
                    this.snackBar.open('Last Name required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.generalForm.controls.last_name.errors.maxlength) {
                    this.snackBar.open('Last Name required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
        }]);

        return GeneralComponent;
      }();

      GeneralComponent.ɵfac = function GeneralComponent_Factory(t) {
        return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralComponent,
        selectors: [["app-general"]],
        decls: 34,
        vars: 2,
        consts: [[1, "pagecontainer"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "col-sm-6"], [1, "form-group"], ["for", "username"], ["type", "text", "placeholder", "Enter User Name", "formControlName", "username", "required", "", 1, "form-control"], ["for", "email"], ["type", "text", "placeholder", "Enter User Name", "formControlName", "email", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter First Name", "formControlName", "first_name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Last Name", "formControlName", "last_name", "required", "", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "px-4"]],
        template: function GeneralComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " General Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GeneralComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit(ctx.generalForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.generalForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: [".pagecontainer[_ngcontent-%COMP%] {margin-top: 30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsZ0JBQWdCLENBQUMiLCJmaWxlIjoiZ2VuZXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Vjb250YWluZXIge21hcmdpbi10b3A6IDMwcHg7fSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-general',
            templateUrl: './general.component.html',
            styleUrls: ['./general.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SIRa":
    /*!********************************************************************************!*\
      !*** ./src/app/components/settings/changepassword/changepassword.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ChangepasswordComponent */

    /***/
    function SIRa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function () {
        return ChangepasswordComponent;
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /*
      Project : Cryptotrades
      FileName :  changepassword.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show change password screen for user
      */


      var ChangepasswordComponent = /*#__PURE__*/function () {
        function ChangepasswordComponent(formbuilder, snackBar, userService) {
          var _this2 = this;

          _classCallCheck(this, ChangepasswordComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.button_title = "Save";
          this.isAPILoading = false;
          /**
           * This is the function which used to get profile information of logged in user
           */

          this.getProfileInfo = function () {
            _this2.userService.viewProfile(_this2.currentUser.user_id).subscribe(function (result) {
              var resulter = result;
              _this2.userInfo = resulter.result;
            });
          };
          /**
           * This is the function which used to change password through api
           */


          this.updateApi = function (params) {
            _this2.isAPILoading = true;

            _this2.userService.updateApi(params, _this2.currentUser.user_id).subscribe(function (result) {
              _this2.isAPILoading = false;

              if (result.status == true) {
                localStorage.setItem('token', result.return_id);

                _this2.snackBar.open('Password updated successfully', "", {
                  duration: 2000
                });

                location.href = src_app_constants_config__WEBPACK_IMPORTED_MODULE_2__["config"].base_url;
              } else {
                _this2.snackBar.open(result.message, "", {
                  duration: 2000
                });
              }

              _this2.button_title = "Save";
            });
          };

          this.currentUser = this.userService.getUser();
          this.passwordForm = formbuilder.group({
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])],
            'confirm_password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)])]
          });
          this.getProfileInfo();
        }

        _createClass(ChangepasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to change password with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.passwordForm.valid && this.button_title == "Save") {
              if (formData.value.password != formData.value.confirm_password) {
                this.snackBar.open('Password Mismatch', "", {
                  duration: 2000
                });
                return;
              }

              this.button_title = "Saving...";
              this.updateApi({
                password: formData.value.password
              });
            } else {
              if (this.passwordForm.controls.password.invalid) {
                if (this.passwordForm.controls.password.errors) {
                  if (this.passwordForm.controls.password.errors.required) {
                    this.snackBar.open('Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.passwordForm.controls.password.errors.minlength) {
                    this.snackBar.open('Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.passwordForm.controls.password.errors.maxlength) {
                    this.snackBar.open('Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.passwordForm.controls.confirm_password.invalid) {
                if (this.passwordForm.controls.confirm_password.errors) {
                  if (this.passwordForm.controls.confirm_password.errors.required) {
                    this.snackBar.open('Confirm Password is required', "", {
                      duration: 2000
                    });
                  } else if (this.passwordForm.controls.confirm_password.errors.minlength) {
                    this.snackBar.open('Confirm Password required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.passwordForm.controls.confirm_password.errors.maxlength) {
                    this.snackBar.open('Confirm Password required maximum 32 characters', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
        }]);

        return ChangepasswordComponent;
      }();

      ChangepasswordComponent.ɵfac = function ChangepasswordComponent_Factory(t) {
        return new (t || ChangepasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      ChangepasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangepasswordComponent,
        selectors: [["app-changepassword"]],
        decls: 23,
        vars: 2,
        consts: [[1, "pagecontainer"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "col-sm-6"], [1, "form-group"], ["for", "password"], ["type", "text", "placeholder", "Enter Password", "formControlName", "password", "required", "", 1, "form-control"], ["for", "confirm_password"], ["type", "text", "placeholder", "Enter Confirm Password", "formControlName", "confirm_password", "required", "", 1, "form-control"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "px-4"]],
        template: function ChangepasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangepasswordComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit(ctx.passwordForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        styles: [".pagecontainer[_ngcontent-%COMP%] {margin-top: 30px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGdCQUFnQixDQUFDIiwiZmlsZSI6ImNoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZWNvbnRhaW5lciB7bWFyZ2luLXRvcDogMzBweDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangepasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-changepassword',
            templateUrl: './changepassword.component.html',
            styleUrls: ['./changepassword.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rRxn":
    /*!****************************************************************!*\
      !*** ./src/app/components/settings/wallet/wallet.component.ts ***!
      \****************************************************************/

    /*! exports provided: WalletComponent */

    /***/
    function rRxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletComponent", function () {
        return WalletComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../transfer/transfer.component */
      "ssfm");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /*
      Project : Cryptotrades
      FileName :  wallet.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show user ethereum address and copy option
      */


      var WalletComponent = /*#__PURE__*/function () {
        function WalletComponent(userService, clipboard, snackBar, itemService, dialog) {
          var _this3 = this;

          _classCallCheck(this, WalletComponent);

          this.userService = userService;
          this.clipboard = clipboard;
          this.snackBar = snackBar;
          this.itemService = itemService;
          this.dialog = dialog;
          this.walletInput = "";
          this.walletAmount = 0;
          /**
           * This is the function which used to get profile information of logged in user
           */

          this.getProfileInfo = function () {
            _this3.userService.viewProfile(_this3.currentUser.user_id).subscribe(function (result) {
              var resulter = result;
              _this3.userInfo = resulter.result;
              console.log(_this3.userInfo);
              _this3.walletInput = _this3.userInfo.public_key;
            });
          };
          /**
           * This is the function which used to get balance from user ethereum wallet
           */


          this.userBalance = function () {
            _this3.itemService.checkBalance().subscribe(function (result) {
              if (result.status == true) {
                _this3.walletAmount = result.return_id.toFixed(2);
              }
            });
          };
          /**
           * This is the function which open transfer component for withdrawal
           */


          this.tranferAction = function () {
            var dialogRef = _this3.dialog.open(_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_1__["TransferComponent"]);

            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                if (result.type == "reload") {
                  _this3.userBalance();
                }
              }
            });
          };
          /**
           * This is the function which used to compy ethereum address in clipboard
           */


          this.copyAddress = function () {
            _this3.clipboard.copy(_this3.userInfo.public_key);

            _this3.snackBar.open('Ethereum address copied', "", {
              duration: 2000
            });
          };

          this.currentUser = this.userService.getUser();
          this.getProfileInfo();
          this.userBalance();
        }

        _createClass(WalletComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WalletComponent;
      }();

      WalletComponent.ɵfac = function WalletComponent_Factory(t) {
        return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WalletComponent,
        selectors: [["app-wallet"]],
        decls: 23,
        vars: 2,
        consts: [[1, "pagecontainer"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-12"], [1, ""], ["for", "name"], [1, "form-group", "row"], [1, "input-group"], ["type", "text", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 3, "click"], [1, "input-group-text"], [1, "fa", "fa-copy"], [1, "col-6"], ["type", "submit", 1, "btn", "btn-primary", "px-4", 3, "click"]],
        template: function WalletComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Wallet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.walletInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_div_click_16_listener() {
              return ctx.copyAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_21_listener() {
              return ctx.tranferAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transfer");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your Wallet Balance : ", ctx.walletAmount, " ETH");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.walletInput);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
        styles: [".pagecontainer[_ngcontent-%COMP%] {margin-top: 30px;}\n.input-group-append[_ngcontent-%COMP%] {cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixnQkFBZ0IsQ0FBQztBQUNqQyxxQkFBcUIsZUFBZSxDQUFDIiwiZmlsZSI6IndhbGxldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Vjb250YWluZXIge21hcmdpbi10b3A6IDMwcHg7fVxuLmlucHV0LWdyb3VwLWFwcGVuZCB7Y3Vyc29yOiBwb2ludGVyO30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wallet',
            templateUrl: './wallet.component.html',
            styleUrls: ['./wallet.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ssfm":
    /*!********************************************************************!*\
      !*** ./src/app/components/settings/transfer/transfer.component.ts ***!
      \********************************************************************/

    /*! exports provided: TransferComponent */

    /***/
    function ssfm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransferComponent", function () {
        return TransferComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /*
      Project : Cryptotrades
      FileName :  transfer.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show withdrawal screen for user
      */


      var TransferComponent = /*#__PURE__*/function () {
        function TransferComponent(formbuilder, dialogRef, data, snackBar, itemService) {
          var _this4 = this;

          _classCallCheck(this, TransferComponent);

          this.formbuilder = formbuilder;
          this.dialogRef = dialogRef;
          this.data = data;
          this.snackBar = snackBar;
          this.itemService = itemService;
          this.button_title = "Transfer";
          /**
           * This is the function which used to send ethereum outside through api
           */

          this.transferApi = function (params) {
            _this4.itemService.transferBalance(params).subscribe(function (result) {
              if (result.status == true) {
                _this4.dialogRef.close({
                  type: 'reload'
                });
              }

              _this4.snackBar.open(result.message, "", {
                duration: 2000
              });

              _this4.button_title = "Transfer";
            });
          };
          /**
           * This is the function which used to close transfer dialog
           */


          this.closePop = function () {
            _this4.dialogRef.close();
          };

          this.transferForm = formbuilder.group({
            'eth_address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            'amount': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(.[0-9]{0,5})?$")])]
          });
        }

        _createClass(TransferComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This is the function which used to send ethereum outside with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.transferForm.valid && this.button_title == "Transfer") {
              this.button_title = "Transferring";
              this.transferApi({
                eth_address: formData.value.eth_address,
                amount: formData.value.amount
              });
            } else {
              if (this.transferForm.controls.eth_address.invalid) {
                if (this.transferForm.controls.eth_address.errors) {
                  if (this.transferForm.controls.eth_address.errors.required) {
                    this.snackBar.open('Ethereum address is required', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.transferForm.controls.amount.invalid) {
                if (this.transferForm.controls.amount.errors) {
                  if (this.transferForm.controls.amount.errors.required) {
                    this.snackBar.open('Ethereum value is required', "", {
                      duration: 2000
                    });
                  } else {
                    this.snackBar.open('Ethereum value should be numeric', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
        }]);

        return TransferComponent;
      }();

      TransferComponent.ɵfac = function TransferComponent_Factory(t) {
        return new (t || TransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]));
      };

      TransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TransferComponent,
        selectors: [["app-transfer"]],
        decls: 19,
        vars: 2,
        consts: [[1, "userForm"], [1, "userFormInner"], [1, "pop_close", 3, "click"], [1, "cil-x"], [1, "formContainer"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "eth_address"], ["type", "text", "placeholder", "Enter Ethereum Address", "formControlName", "eth_address", 1, "form-control"], ["for", "amount"], ["type", "text", "placeholder", "Enter Ethereum Value", "formControlName", "amount", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
        template: function TransferComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Transfer ETH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferComponent_Template_div_click_4_listener() {
              return ctx.closePop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransferComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit(ctx.transferForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ethereum Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ETH Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transferForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.button_title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".userForm[_ngcontent-%COMP%] {position: relative;}\n.pop_close[_ngcontent-%COMP%] {position: absolute; right:0; top:5px; cursor: pointer; font-size: 20px;}\n@media screen and (min-width: 992px) {\n    .userForm[_ngcontent-%COMP%] {width:450px;}\n}\n@media screen and (max-width: 992px) {\n    .userForm[_ngcontent-%COMP%] {width: 400px;}\n}\n@media screen and (max-width: 768px) {\n\n    .userForm[_ngcontent-%COMP%] {width: 300px;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxrQkFBa0IsQ0FBQztBQUM5QixZQUFZLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztBQUNuRjtJQUNJLFdBQVcsV0FBVyxDQUFDO0FBQzNCO0FBQ0E7SUFDSSxXQUFXLFlBQVksQ0FBQztBQUM1QjtBQUNBOztJQUVJLFdBQVcsWUFBWSxDQUFDO0FBQzVCIiwiZmlsZSI6InRyYW5zZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckZvcm0ge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4ucG9wX2Nsb3NlIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjA7IHRvcDo1cHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAyMHB4O31cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLnVzZXJGb3JtIHt3aWR0aDo0NTBweDt9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC51c2VyRm9ybSB7d2lkdGg6IDQwMHB4O31cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAudXNlckZvcm0ge3dpZHRoOiAzMDBweDt9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-transfer',
            templateUrl: './transfer.component.html',
            styleUrls: ['./transfer.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-settings-settings-module-es5.js.map