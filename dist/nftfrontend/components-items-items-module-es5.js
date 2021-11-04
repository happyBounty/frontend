(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-items-items-module"], {
    /***/
    "/IoE":
    /*!*******************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.module.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function IoE(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ɵngcc1 = __webpack_require__(
      /*! ./lightbox-overlay.component */
      "YKnz");

      var ɵngcc2 = __webpack_require__(
      /*! ./lightbox.component */
      "SrD1");

      var ɵngcc3 = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");

      var ɵngcc4 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var lightbox_service_1 = __webpack_require__(
      /*! ./lightbox.service */
      "b5fp");

      var lightbox_component_1 = __webpack_require__(
      /*! ./lightbox.component */
      "SrD1");

      var lightbox_config_service_1 = __webpack_require__(
      /*! ./lightbox-config.service */
      "VlMW");

      var lightbox_event_service_1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var lightbox_overlay_component_1 = __webpack_require__(
      /*! ./lightbox-overlay.component */
      "YKnz");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ngx_filesaver_1 = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");

      var http_1 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LightboxModule =
      /** @class */
      function () {
        function LightboxModule() {}

        LightboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({
          type: LightboxModule
        });
        LightboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
          factory: function LightboxModule_Factory(t) {
            return new (t || LightboxModule)();
          },
          providers: [lightbox_service_1.Lightbox, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent, lightbox_event_service_1.LightboxWindowRef],
          imports: [[ngx_filesaver_1.FileSaverModule, http_1.HttpClientModule]]
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LightboxModule, {
            declarations: [ɵngcc1.LightboxOverlayComponent, ɵngcc2.LightboxComponent],
            imports: [ɵngcc3.FileSaverModule, ɵngcc4.HttpClientModule]
          });
        })();
        /*@__PURE__*/


        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxModule, [{
            type: core_1.NgModule,
            args: [{
              declarations: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent],
              providers: [lightbox_service_1.Lightbox, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent, lightbox_event_service_1.LightboxWindowRef],
              entryComponents: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent],
              imports: [ngx_filesaver_1.FileSaverModule, http_1.HttpClientModule]
            }]
          }], function () {
            return [];
          }, null);
        })();

        return LightboxModule;
      }();

      exports.LightboxModule = LightboxModule; //# sourceMappingURL=lightbox.module.js.map

      /***/
    },

    /***/
    "EnSh":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-filesaver/__ivy_ngcc__/fesm2015/ngx-filesaver.js ***!
      \***************************************************************************/

    /*! exports provided: FileSaverDirective, FileSaverModule, FileSaverService */

    /***/
    function EnSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSaverDirective", function () {
        return FileSaverDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSaverModule", function () {
        return FileSaverModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSaverService", function () {
        return FileSaverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FileSaverService = /*#__PURE__*/function () {
        function FileSaverService() {
          _classCallCheck(this, FileSaverService);
        }

        _createClass(FileSaverService, [{
          key: "isFileSaverSupported",
          get: function get() {
            try {
              return !!new Blob();
            } catch (e) {
              return false;
            }
          }
        }, {
          key: "genType",
          value: function genType(fileName) {
            if (!fileName || fileName.lastIndexOf('.') === -1) {
              return 'text/plain';
            }

            var type = fileName.substr(fileName.lastIndexOf('.') + 1);

            switch (type) {
              case 'txt':
                return 'text/plain';

              case 'xml':
              case 'html':
                return "text/".concat(type);

              case 'json':
                return 'octet/stream';

              default:
                return "application/".concat(type);
            }
          }
        }, {
          key: "save",
          value: function save(blob, fileName, filtType, option) {
            if (!blob) {
              throw new Error('Data argument should be a blob instance');
            }

            var file = new Blob([blob], {
              type: filtType || blob.type || this.genType(fileName)
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(file, decodeURI(fileName || 'download'), option);
          }
        }, {
          key: "saveText",
          value: function saveText(txt, fileName, option) {
            var blob = new Blob([txt]);
            this.save(blob, fileName, null, option);
          }
        }]);

        return FileSaverService;
      }();

      FileSaverService.ɵfac = function FileSaverService_Factory(t) {
        return new (t || FileSaverService)();
      };

      FileSaverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FileSaverService,
        factory: function factory(t) {
          return FileSaverService.ɵfac(t);
        },
        providedIn: 'root'
      });
      FileSaverService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function FileSaverService_Factory() {
          return new FileSaverService();
        },
        token: FileSaverService,
        providedIn: "root"
      });

      var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var FileSaverDirective = /*#__PURE__*/function () {
        function FileSaverDirective(el, fss, httpClient) {
          _classCallCheck(this, FileSaverDirective);

          this.el = el;
          this.fss = fss;
          this.httpClient = httpClient;
          this.method = 'GET';
          this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (!fss.isFileSaverSupported) {
            el.nativeElement.classList.add("filesaver__not-support");
          }
        }

        _createClass(FileSaverDirective, [{
          key: "getName",
          value: function getName(res) {
            return decodeURI(this.fileName || res.headers.get('filename') || res.headers.get('x-filename'));
          }
        }, {
          key: "_click",
          value: function _click() {
            var _this2 = this;

            if (!this.fss.isFileSaverSupported) {
              return;
            }

            var req = this.http;

            if (!req) {
              var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
              var query = this.query || {}; // tslint:disable-next-line:forin

              for (var item in query) {
                params.set(item, query[item]);
              }

              req = this.httpClient.request(this.method, this.url, {
                observe: 'response',
                responseType: 'blob',
                headers: this.header,
                params: params
              });
            }

            this.setDisabled(true);
            req.subscribe(function (res) {
              if (res.status !== 200 || res.body.size <= 0) {
                _this2.error.emit(res);

                return;
              }

              _this2.fss.save(res.body, _this2.getName(res), null, _this2.fsOptions);

              _this2.success.emit(res);
            }, function (err) {
              return _this2.error.emit(err);
            }, function () {
              return _this2.setDisabled(false);
            });
          }
        }, {
          key: "setDisabled",
          value: function setDisabled(status) {
            var el = this.el.nativeElement;
            el.disabled = status;
            el.classList[status ? 'add' : 'remove']("filesaver__disabled");
          }
        }]);

        return FileSaverDirective;
      }();

      FileSaverDirective.ɵfac = function FileSaverDirective_Factory(t) {
        return new (t || FileSaverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      FileSaverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FileSaverDirective,
        selectors: [["", "fileSaver", ""]],
        hostBindings: function FileSaverDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileSaverDirective_click_HostBindingHandler() {
              return ctx._click();
            });
          }
        },
        inputs: {
          method: "method",
          http: "http",
          query: "query",
          header: "header",
          url: "url",
          fileName: "fileName",
          fsOptions: "fsOptions"
        },
        outputs: {
          success: "success",
          error: "error"
        },
        exportAs: ["fileSaver"]
      });

      FileSaverDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: FileSaverService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "method", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])], FileSaverDirective.prototype, "http", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "query", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "header", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], FileSaverDirective.prototype, "url", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], FileSaverDirective.prototype, "fileName", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "fsOptions", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "success", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], FileSaverDirective.prototype, "error", void 0);

      __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], FileSaverDirective.prototype, "_click", null);

      FileSaverDirective = __decorate$1([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], FileSaverService, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FileSaverDirective);

      var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FileSaverModule = function FileSaverModule() {
        _classCallCheck(this, FileSaverModule);
      };

      FileSaverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FileSaverModule
      });
      FileSaverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FileSaverModule_Factory(t) {
          return new (t || FileSaverModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSaverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSaverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[fileSaver]',
            exportAs: 'fileSaver'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: FileSaverService
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, {
          method: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          success: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          _click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          http: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileSaverModule, {
          declarations: [FileSaverDirective],
          exports: [FileSaverDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSaverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [FileSaverDirective],
            exports: [FileSaverDirective]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-filesaver.js.map

      /***/

    },

    /***/
    "Iab2":
    /*!*******************************************************!*\
      !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function Iab2(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

      (function (a, b) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = b, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
      })(this, function () {
        "use strict";

        function b(a, b) {
          return "undefined" == typeof b ? b = {
            autoBom: !1
          } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
            type: a.type
          }) : a;
        }

        function c(a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a), d.responseType = "blob", d.onload = function () {
            g(d.response, b, c);
          }, d.onerror = function () {
            console.error("could not download file");
          }, d.send();
        }

        function d(a) {
          var b = new XMLHttpRequest();
          b.open("HEAD", a, !1);

          try {
            b.send();
          } catch (a) {}

          return 200 <= b.status && 299 >= b.status;
        }

        function e(a) {
          try {
            a.dispatchEvent(new MouseEvent("click"));
          } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
          }
        }

        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
            a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
            g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
          var i = f.URL || f.webkitURL,
              j = document.createElement("a");
          g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
            i.revokeObjectURL(j.href);
          }, 4E4), setTimeout(function () {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
          if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function () {
              e(i);
            });
          }
        } : function (b, d, e, g) {
          if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
          var h = "application/octet-stream" === b.type,
              i = /constructor/i.test(f.HTMLElement) || f.safari,
              j = /CriOS\/[\d]+/.test(navigator.userAgent);

          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function () {
              var a = k.result;
              a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
          } else {
            var l = f.URL || f.webkitURL,
                m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function () {
              l.revokeObjectURL(m);
            }, 4E4);
          }
        });
        f.saveAs = g.saveAs = g, true && (module.exports = g);
      }); //# sourceMappingURL=FileSaver.min.js.map

      /***/

    },

    /***/
    "SrD1":
    /*!**********************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function SrD1(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ɵngcc1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var ɵngcc2 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ɵngcc3 = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");

      var ɵngcc4 = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var _c0 = ["outerContainer"];
      var _c1 = ["container"];
      var _c2 = ["leftArrow"];
      var _c3 = ["rightArrow"];
      var _c4 = ["navArrow"];
      var _c5 = ["dataContainer"];
      var _c6 = ["image"];
      var _c7 = ["caption"];
      var _c8 = ["number"];
      var _c9 = ["lb-content", ""];

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ngx_filesaver_1 = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");

      var common_1 = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var http_1 = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var platform_browser_1 = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var lightbox_event_service_1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var LightboxComponent =
      /** @class */
      function () {
        function LightboxComponent(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _http, _fileSaverService, _sanitizer, _documentRef) {
          var _this = this;

          this._elemRef = _elemRef;
          this._rendererRef = _rendererRef;
          this._lightboxEvent = _lightboxEvent;
          this._lightboxElem = _lightboxElem;
          this._lightboxWindowRef = _lightboxWindowRef;
          this._http = _http;
          this._fileSaverService = _fileSaverService;
          this._sanitizer = _sanitizer;
          this._documentRef = _documentRef; // initialize data

          this.options = this.options || {};
          this.album = this.album || [];
          this.currentImageIndex = this.currentImageIndex || 0;
          this._windowRef = this._lightboxWindowRef.nativeWindow; // control the interactive of the directive

          this.ui = {
            // control the appear of the reloader
            // false: image has loaded completely and ready to be shown
            // true: image is still loading
            showReloader: true,
            // control the appear of the nav arrow
            // the arrowNav is the parent of both left and right arrow
            // in some cases, the parent shows but the child does not show
            showLeftArrow: false,
            showRightArrow: false,
            showArrowNav: false,
            // control the appear of the zoom and rotate buttons
            showZoomButton: false,
            showRotateButton: false,
            // control whether to show the
            // page number or not
            showPageNumber: false,
            showCaption: false,
            // control whether to show the download button or not
            showDownloadButton: false,
            classList: 'lightbox animation fadeIn'
          };
          this.content = {
            pageNumber: ''
          };
          this._event = {};
          this._lightboxElem = this._elemRef;
          this._event.subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) {
            return _this._onReceivedEvent(event);
          });
          this.rotate = 0;
        }

        LightboxComponent.prototype.ngOnInit = function () {
          var _this = this;

          this.album.forEach(function (album) {
            if (album.caption) {
              album.caption = _this._sanitizer.sanitize(core_1.SecurityContext.HTML, album.caption);
            }
          });
        };

        LightboxComponent.prototype.ngAfterViewInit = function () {
          // need to init css value here, after the view ready
          // actually these values are always 0
          this._cssValue = {
            containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-top')),
            containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-right')),
            containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-bottom')),
            containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-left')),
            imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, 'border-top-width')),
            imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, 'border-bottom-width')),
            imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, 'border-left-width')),
            imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, 'border-right-width'))
          };

          if (this._validateInputData()) {
            this._prepareComponent();

            this._registerImageLoadingEvent();
          }
        };

        LightboxComponent.prototype.ngOnDestroy = function () {
          if (!this.options.disableKeyboardNav) {
            // unbind keyboard event
            this._disableKeyboardNav();
          }

          this._event.subscription.unsubscribe();
        };

        LightboxComponent.prototype.close = function ($event) {
          $event.stopPropagation();

          if ($event.target.classList.contains('lightbox') || $event.target.classList.contains('lb-loader') || $event.target.classList.contains('lb-close')) {
            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
              data: null
            });
          }
        };

        LightboxComponent.prototype.download = function ($event) {
          var _this = this;

          $event.stopPropagation();
          var url = this.album[this.currentImageIndex].src;
          var parts = url.split('/');
          var fileName = parts[parts.length - 1];

          this._http.get(url, {
            responseType: 'blob'
          }).subscribe(function (res) {
            _this._fileSaverService.save(res, fileName);
          });
        };

        LightboxComponent.prototype.control = function ($event) {
          $event.stopPropagation();
          var height;
          var width;

          if ($event.target.classList.contains('lb-turnLeft')) {
            this.rotate = this.rotate - 90;

            this._rotateContainer();

            this._calcTransformPoint();

            this._documentRef.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
            this._documentRef.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";

            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_LEFT,
              data: null
            });
          } else if ($event.target.classList.contains('lb-turnRight')) {
            this.rotate = this.rotate + 90;

            this._rotateContainer();

            this._calcTransformPoint();

            this._documentRef.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
            this._documentRef.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";

            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_RIGHT,
              data: null
            });
          } else if ($event.target.classList.contains('lb-zoomOut')) {
            height = parseInt(this._documentRef.getElementById('outerContainer').style.height, 10) / 1.5;
            width = parseInt(this._documentRef.getElementById('outerContainer').style.width, 10) / 1.5;
            this._documentRef.getElementById('outerContainer').style.height = height + 'px';
            this._documentRef.getElementById('outerContainer').style.width = width + 'px';
            height = parseInt(this._documentRef.getElementById('image').style.height, 10) / 1.5;
            width = parseInt(this._documentRef.getElementById('image').style.width, 10) / 1.5;
            this._documentRef.getElementById('image').style.height = height + 'px';
            this._documentRef.getElementById('image').style.width = width + 'px';

            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_OUT,
              data: null
            });
          } else if ($event.target.classList.contains('lb-zoomIn')) {
            height = parseInt(this._documentRef.getElementById('outerContainer').style.height, 10) * 1.5;
            width = parseInt(this._documentRef.getElementById('outerContainer').style.width, 10) * 1.5;
            this._documentRef.getElementById('outerContainer').style.height = height + 'px';
            this._documentRef.getElementById('outerContainer').style.width = width + 'px';
            height = parseInt(this._documentRef.getElementById('image').style.height, 10) * 1.5;
            width = parseInt(this._documentRef.getElementById('image').style.width, 10) * 1.5;
            this._documentRef.getElementById('image').style.height = height + 'px';
            this._documentRef.getElementById('image').style.width = width + 'px';

            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_IN,
              data: null
            });
          }
        };

        LightboxComponent.prototype._rotateContainer = function () {
          var temp = this.rotate;

          if (temp < 0) {
            temp *= -1;
          }

          if (temp / 90 % 4 === 1 || temp / 90 % 4 === 3) {
            this._documentRef.getElementById('outerContainer').style.height = this._documentRef.getElementById('image').style.width;
            this._documentRef.getElementById('outerContainer').style.width = this._documentRef.getElementById('image').style.height;
            this._documentRef.getElementById('container').style.height = this._documentRef.getElementById('image').style.width;
            this._documentRef.getElementById('container').style.width = this._documentRef.getElementById('image').style.height;
          } else {
            this._documentRef.getElementById('outerContainer').style.height = this._documentRef.getElementById('image').style.height;
            this._documentRef.getElementById('outerContainer').style.width = this._documentRef.getElementById('image').style.width;
            this._documentRef.getElementById('container').style.height = this._documentRef.getElementById('image').style.width;
            this._documentRef.getElementById('container').style.width = this._documentRef.getElementById('image').style.height;
          }
        };

        LightboxComponent.prototype._resetImage = function () {
          this.rotate = 0;
          this._documentRef.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
          this._documentRef.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";
        };

        LightboxComponent.prototype._calcTransformPoint = function () {
          var height = parseInt(this._documentRef.getElementById('image').style.height, 10);
          var width = parseInt(this._documentRef.getElementById('image').style.width, 10);
          var temp = this.rotate % 360;

          if (temp < 0) {
            temp = 360 + temp;
          }

          if (temp === 90) {
            this._documentRef.getElementById('image').style.transformOrigin = height / 2 + 'px ' + height / 2 + 'px';
          } else if (temp === 180) {
            this._documentRef.getElementById('image').style.transformOrigin = width / 2 + 'px ' + height / 2 + 'px';
          } else if (temp === 270) {
            this._documentRef.getElementById('image').style.transformOrigin = width / 2 + 'px ' + width / 2 + 'px';
          }
        };

        LightboxComponent.prototype.nextImage = function () {
          if (this.album.length === 1) {
            return;
          } else if (this.currentImageIndex === this.album.length - 1) {
            this._changeImage(0);
          } else {
            this._changeImage(this.currentImageIndex + 1);
          }
        };

        LightboxComponent.prototype.prevImage = function () {
          if (this.album.length === 1) {
            return;
          } else if (this.currentImageIndex === 0 && this.album.length > 1) {
            this._changeImage(this.album.length - 1);
          } else {
            this._changeImage(this.currentImageIndex - 1);
          }
        };

        LightboxComponent.prototype._validateInputData = function () {
          if (this.album && this.album instanceof Array && this.album.length > 0) {
            for (var i = 0; i < this.album.length; i++) {
              // check whether each _nside
              // album has src data or not
              if (this.album[i].src) {
                continue;
              }

              throw new Error('One of the album data does not have source data');
            }
          } else {
            throw new Error('No album data or album data is not correct in type');
          } // to prevent data understand as string
          // convert it to number


          if (isNaN(this.currentImageIndex)) {
            throw new Error('Current image index is not a number');
          } else {
            this.currentImageIndex = Number(this.currentImageIndex);
          }

          return true;
        };

        LightboxComponent.prototype._registerImageLoadingEvent = function () {
          var _this = this;

          var preloader = new Image();

          preloader.onload = function () {
            _this._onLoadImageSuccess();
          };

          var src = this.album[this.currentImageIndex].src;
          preloader.src = this._sanitizer.sanitize(core_1.SecurityContext.URL, src);
        };
        /**
         * Fire when the image is loaded
         */


        LightboxComponent.prototype._onLoadImageSuccess = function () {
          if (!this.options.disableKeyboardNav) {
            // unbind keyboard event during transition
            this._disableKeyboardNav();
          }

          var imageHeight;
          var imageWidth;
          var maxImageHeight;
          var maxImageWidth;
          var windowHeight;
          var windowWidth;
          var naturalImageWidth;
          var naturalImageHeight; // set default width and height of image to be its natural

          imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
          imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;

          if (this.options.fitImageInViewPort) {
            windowWidth = this._windowRef.innerWidth;
            windowHeight = this._windowRef.innerHeight;
            maxImageWidth = windowWidth - this._cssValue.containerLeftPadding - this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft - this._cssValue.imageBorderWidthRight - 20;
            maxImageHeight = windowHeight - this._cssValue.containerTopPadding - this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop - this._cssValue.imageBorderWidthBottom - 120;

            if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
              if (naturalImageWidth / maxImageWidth > naturalImageHeight / maxImageHeight) {
                imageWidth = maxImageWidth;
                imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
              } else {
                imageHeight = maxImageHeight;
                imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
              }
            }

            this._rendererRef.setStyle(this._imageElem.nativeElement, 'width', imageWidth + "px");

            this._rendererRef.setStyle(this._imageElem.nativeElement, 'height', imageHeight + "px");
          }

          this._sizeContainer(imageWidth, imageHeight);

          if (this.options.centerVertically) {
            this._centerVertically(imageWidth, imageHeight);
          }
        };

        LightboxComponent.prototype._centerVertically = function (imageWidth, imageHeight) {
          var scrollOffset = this._documentRef.documentElement.scrollTop;
          var windowHeight = this._windowRef.innerHeight;
          var viewOffset = windowHeight / 2 - imageHeight / 2;
          var topDistance = scrollOffset + viewOffset;

          this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', topDistance + "px");
        };

        LightboxComponent.prototype._sizeContainer = function (imageWidth, imageHeight) {
          var _this = this;

          var oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
          var oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
          var newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding + this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
          var newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding + this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom; // make sure that distances are large enough for transitionend event to be fired, at least 5px.

          if (Math.abs(oldWidth - newWidth) + Math.abs(oldHeight - newHeight) > 5) {
            this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'width', newWidth + "px");

            this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'height', newHeight + "px"); // bind resize event to outer container
            // use enableTransition to prevent infinite loader


            if (this.options.enableTransition) {
              this._event.transitions = [];
              ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'].forEach(function (eventName) {
                _this._event.transitions.push(_this._rendererRef.listen(_this._outerContainerElem.nativeElement, eventName, function (event) {
                  if (event.target === event.currentTarget) {
                    _this._postResize(newWidth, newHeight);
                  }
                }));
              });
            } else {
              this._postResize(newWidth, newHeight);
            }
          } else {
            this._postResize(newWidth, newHeight);
          }
        };

        LightboxComponent.prototype._postResize = function (newWidth, newHeight) {
          // unbind resize event
          if (Array.isArray(this._event.transitions)) {
            this._event.transitions.forEach(function (eventHandler) {
              eventHandler();
            });

            this._event.transitions = [];
          }

          this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'width', newWidth + "px");

          this._showImage();
        };

        LightboxComponent.prototype._showImage = function () {
          this.ui.showReloader = false;

          this._updateNav();

          this._updateDetails();

          if (!this.options.disableKeyboardNav) {
            this._enableKeyboardNav();
          }
        };

        LightboxComponent.prototype._prepareComponent = function () {
          var _this = this; // add css3 animation


          this._addCssAnimation(); // position the image according to user's option


          this._positionLightBox(); // update controls visibility on next view generation


          setTimeout(function () {
            _this.ui.showZoomButton = _this.options.showZoom;
            _this.ui.showRotateButton = _this.options.showRotate;
            _this.ui.showDownloadButton = _this.options.showDownloadButton;
          }, 0);
        };

        LightboxComponent.prototype._positionLightBox = function () {
          // @see https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
          var top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) + this.options.positionFromTop;
          var left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;

          if (!this.options.centerVertically) {
            this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', top + "px");
          }

          this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'left', left + "px");

          this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'display', 'block'); // disable scrolling of the page while open


          if (this.options.disableScrolling) {
            this._rendererRef.addClass(this._documentRef.documentElement, 'lb-disable-scrolling');
          }
        };
        /**
         * addCssAnimation add css3 classes for animate lightbox
         */


        LightboxComponent.prototype._addCssAnimation = function () {
          var resizeDuration = this.options.resizeDuration;
          var fadeDuration = this.options.fadeDuration;

          this._rendererRef.setStyle(this._lightboxElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._outerContainerElem.nativeElement, '-webkit-transition-duration', resizeDuration + "s");

          this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'transition-duration', resizeDuration + "s");

          this._rendererRef.setStyle(this._dataContainerElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._imageElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._imageElem.nativeElement, 'animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._captionElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._captionElem.nativeElement, 'animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._numberElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._numberElem.nativeElement, 'animation-duration', fadeDuration + "s");
        };

        LightboxComponent.prototype._end = function () {
          var _this = this;

          this.ui.classList = 'lightbox animation fadeOut';

          if (this.options.disableScrolling) {
            this._rendererRef.removeClass(this._documentRef.documentElement, 'lb-disable-scrolling');
          }

          setTimeout(function () {
            _this.cmpRef.destroy();
          }, this.options.fadeDuration * 1000);
        };

        LightboxComponent.prototype._updateDetails = function () {
          // update the caption
          if (typeof this.album[this.currentImageIndex].caption !== 'undefined' && this.album[this.currentImageIndex].caption !== '') {
            this.ui.showCaption = true;
          } // update the page number if user choose to do so
          // does not perform numbering the page if the
          // array length in album <= 1


          if (this.album.length > 1 && this.options.showImageNumberLabel) {
            this.ui.showPageNumber = true;
            this.content.pageNumber = this._albumLabel();
          }
        };

        LightboxComponent.prototype._albumLabel = function () {
          // due to {this.currentImageIndex} is set from 0 to {this.album.length} - 1
          return this.options.albumLabel.replace(/%1/g, Number(this.currentImageIndex + 1)).replace(/%2/g, this.album.length);
        };

        LightboxComponent.prototype._changeImage = function (newIndex) {
          this._resetImage();

          this.currentImageIndex = newIndex;

          this._hideImage();

          this._registerImageLoadingEvent();

          this._lightboxEvent.broadcastLightboxEvent({
            id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE,
            data: newIndex
          });
        };

        LightboxComponent.prototype._hideImage = function () {
          this.ui.showReloader = true;
          this.ui.showArrowNav = false;
          this.ui.showLeftArrow = false;
          this.ui.showRightArrow = false;
          this.ui.showPageNumber = false;
          this.ui.showCaption = false;
        };

        LightboxComponent.prototype._updateNav = function () {
          var alwaysShowNav = false; // check to see the browser support touch event

          try {
            this._documentRef.createEvent('TouchEvent');

            alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false;
          } catch (e) {// noop
          } // initially show the arrow nav
          // which is the parent of both left and right nav


          this._showArrowNav();

          if (this.album.length > 1) {
            if (this.options.wrapAround) {
              if (alwaysShowNav) {
                // alternatives this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
                this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');

                this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
              } // alternatives this.$lightbox.find('.lb-prev, .lb-next').show();


              this._showLeftArrowNav();

              this._showRightArrowNav();
            } else {
              if (this.currentImageIndex > 0) {
                // alternatives this.$lightbox.find('.lb-prev').show();
                this._showLeftArrowNav();

                if (alwaysShowNav) {
                  // alternatives this.$lightbox.find('.lb-prev').css('opacity', '1');
                  this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
                }
              }

              if (this.currentImageIndex < this.album.length - 1) {
                // alternatives this.$lightbox.find('.lb-next').show();
                this._showRightArrowNav();

                if (alwaysShowNav) {
                  // alternatives this.$lightbox.find('.lb-next').css('opacity', '1');
                  this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
                }
              }
            }
          }
        };

        LightboxComponent.prototype._showLeftArrowNav = function () {
          this.ui.showLeftArrow = true;
        };

        LightboxComponent.prototype._showRightArrowNav = function () {
          this.ui.showRightArrow = true;
        };

        LightboxComponent.prototype._showArrowNav = function () {
          this.ui.showArrowNav = this.album.length !== 1;
        };

        LightboxComponent.prototype._enableKeyboardNav = function () {
          var _this = this;

          this._event.keyup = this._rendererRef.listen('document', 'keyup', function (event) {
            _this._keyboardAction(event);
          });
        };

        LightboxComponent.prototype._disableKeyboardNav = function () {
          if (this._event.keyup) {
            this._event.keyup();
          }
        };

        LightboxComponent.prototype._keyboardAction = function ($event) {
          var KEYCODE_ESC = 27;
          var KEYCODE_LEFTARROW = 37;
          var KEYCODE_RIGHTARROW = 39;
          var keycode = $event.keyCode;
          var key = String.fromCharCode(keycode).toLowerCase();

          if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
              data: null
            });
          } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
            if (this.currentImageIndex !== 0) {
              this._changeImage(this.currentImageIndex - 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
              this._changeImage(this.album.length - 1);
            }
          } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
            if (this.currentImageIndex !== this.album.length - 1) {
              this._changeImage(this.currentImageIndex + 1);
            } else if (this.options.wrapAround && this.album.length > 1) {
              this._changeImage(0);
            }
          }
        };

        LightboxComponent.prototype._getCssStyleValue = function (elem, propertyName) {
          return parseFloat(this._windowRef.getComputedStyle(elem.nativeElement, null).getPropertyValue(propertyName));
        };

        LightboxComponent.prototype._onReceivedEvent = function (event) {
          switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
              this._end();

              break;

            default:
              break;
          }
        };

        __decorate([core_1.Input(), __metadata("design:type", Array)], LightboxComponent.prototype, "album", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Number)], LightboxComponent.prototype, "currentImageIndex", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxComponent.prototype, "options", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxComponent.prototype, "cmpRef", void 0);

        __decorate([core_1.ViewChild('outerContainer', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_outerContainerElem", void 0);

        __decorate([core_1.ViewChild('container', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_containerElem", void 0);

        __decorate([core_1.ViewChild('leftArrow', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_leftArrowElem", void 0);

        __decorate([core_1.ViewChild('rightArrow', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_rightArrowElem", void 0);

        __decorate([core_1.ViewChild('navArrow', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_navArrowElem", void 0);

        __decorate([core_1.ViewChild('dataContainer', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_dataContainerElem", void 0);

        __decorate([core_1.ViewChild('image', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_imageElem", void 0);

        __decorate([core_1.ViewChild('caption', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_captionElem", void 0);

        __decorate([core_1.ViewChild('number', {
          "static": false
        }), __metadata("design:type", core_1.ElementRef)], LightboxComponent.prototype, "_numberElem", void 0);

        LightboxComponent = __decorate([__param(8, core_1.Inject(common_1.DOCUMENT)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, lightbox_event_service_1.LightboxEvent, core_1.ElementRef, lightbox_event_service_1.LightboxWindowRef, http_1.HttpClient, ngx_filesaver_1.FileSaverService, platform_browser_1.DomSanitizer, Object])], LightboxComponent);

        LightboxComponent.ɵfac = function LightboxComponent_Factory(t) {
          return new (t || LightboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxEvent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxWindowRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.FileSaverService), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(common_1.DOCUMENT));
        };

        LightboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: LightboxComponent,
          selectors: [["", "lb-content", ""]],
          viewQuery: function LightboxComponent_Query(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵviewQuery(_c0, true);
              ɵngcc0.ɵɵviewQuery(_c1, true);
              ɵngcc0.ɵɵviewQuery(_c2, true);
              ɵngcc0.ɵɵviewQuery(_c3, true);
              ɵngcc0.ɵɵviewQuery(_c4, true);
              ɵngcc0.ɵɵviewQuery(_c5, true);
              ɵngcc0.ɵɵviewQuery(_c6, true);
              ɵngcc0.ɵɵviewQuery(_c7, true);
              ɵngcc0.ɵɵviewQuery(_c8, true);
            }

            if (rf & 2) {
              var _t;

              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._outerContainerElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._containerElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._leftArrowElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._rightArrowElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._navArrowElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._dataContainerElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._captionElem = _t.first);
              ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._numberElem = _t.first);
            }
          },
          hostVars: 2,
          hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_click_HostBindingHandler($event) {
                return ctx.close($event);
              });
            }

            if (rf & 2) {
              ɵngcc0.ɵɵclassMap(ctx.ui.classList);
            }
          },
          inputs: {
            options: "options",
            album: "album",
            currentImageIndex: "currentImageIndex",
            cmpRef: "cmpRef"
          },
          attrs: _c9,
          decls: 34,
          vars: 14,
          consts: [["id", "outerContainer", 1, "lb-outerContainer", "transition"], ["outerContainer", ""], ["id", "container", 1, "lb-container"], ["container", ""], ["id", "image", 1, "lb-image", "animation", "fadeIn", 3, "src", "hidden"], ["image", ""], [1, "lb-nav", 3, "hidden"], ["navArrow", ""], [1, "lb-prev", 3, "hidden", "click"], ["leftArrow", ""], [1, "lb-next", 3, "hidden", "click"], ["rightArrow", ""], [1, "lb-loader", 3, "hidden", "click"], [1, "lb-cancel"], [1, "lb-dataContainer", 3, "hidden"], ["dataContainer", ""], [1, "lb-data"], [1, "lb-details"], [1, "lb-caption", "animation", "fadeIn", 3, "hidden", "innerHtml"], ["caption", ""], [1, "lb-number", "animation", "fadeIn", 3, "hidden"], ["number", ""], [1, "lb-controlContainer"], [1, "lb-closeContainer"], [1, "lb-close", 3, "click"], [1, "lb-downloadContainer", 3, "hidden"], [1, "lb-download", 3, "click"], [1, "lb-turnContainer", 3, "hidden"], [1, "lb-turnLeft", 3, "click"], [1, "lb-turnRight", 3, "click"], [1, "lb-zoomContainer", 3, "hidden"], [1, "lb-zoomOut", 3, "click"], [1, "lb-zoomIn", 3, "click"]],
          template: function LightboxComponent_Template(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
              ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
              ɵngcc0.ɵɵelement(4, "img", 4, 5);
              ɵngcc0.ɵɵelementStart(6, "div", 6, 7);
              ɵngcc0.ɵɵelementStart(8, "a", 8, 9);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_8_listener() {
                return ctx.prevImage();
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(10, "a", 10, 11);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_10_listener() {
                return ctx.nextImage();
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(12, "div", 12);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_div_click_12_listener($event) {
                return ctx.close($event);
              });
              ɵngcc0.ɵɵelement(13, "a", 13);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(14, "div", 14, 15);
              ɵngcc0.ɵɵelementStart(16, "div", 16);
              ɵngcc0.ɵɵelementStart(17, "div", 17);
              ɵngcc0.ɵɵelement(18, "span", 18, 19);
              ɵngcc0.ɵɵelementStart(20, "span", 20, 21);
              ɵngcc0.ɵɵtext(22);
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(23, "div", 22);
              ɵngcc0.ɵɵelementStart(24, "div", 23);
              ɵngcc0.ɵɵelementStart(25, "a", 24);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_25_listener($event) {
                return ctx.close($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(26, "div", 25);
              ɵngcc0.ɵɵelementStart(27, "a", 26);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_27_listener($event) {
                return ctx.download($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(28, "div", 27);
              ɵngcc0.ɵɵelementStart(29, "a", 28);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_29_listener($event) {
                return ctx.control($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(30, "a", 29);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_30_listener($event) {
                return ctx.control($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(31, "div", 30);
              ɵngcc0.ɵɵelementStart(32, "a", 31);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_32_listener($event) {
                return ctx.control($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementStart(33, "a", 32);
              ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_33_listener($event) {
                return ctx.control($event);
              });
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
              ɵngcc0.ɵɵelementEnd();
            }

            if (rf & 2) {
              ɵngcc0.ɵɵadvance(4);
              ɵngcc0.ɵɵproperty("src", ctx.album[ctx.currentImageIndex].src, ɵngcc0.ɵɵsanitizeUrl)("hidden", ctx.ui.showReloader);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showArrowNav);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showLeftArrow);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRightArrow);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showReloader);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", ctx.ui.showReloader);
              ɵngcc0.ɵɵadvance(4);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showCaption)("innerHtml", ctx.album[ctx.currentImageIndex].caption, ɵngcc0.ɵɵsanitizeHtml);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showPageNumber);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵtextInterpolate(ctx.content.pageNumber);
              ɵngcc0.ɵɵadvance(4);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showDownloadButton);
              ɵngcc0.ɵɵadvance(2);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRotateButton);
              ɵngcc0.ɵɵadvance(3);
              ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showZoomButton);
            }
          },
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxComponent, [{
            type: core_1.Component,
            args: [{
              template: "\n    <div class=\"lb-outerContainer transition\" #outerContainer id=\"outerContainer\">\n      <div class=\"lb-container\" #container id=\"container\">\n        <img class=\"lb-image\"\n             id=\"image\"\n             [src]=\"album[currentImageIndex].src\"\n             class=\"lb-image animation fadeIn\"\n             [hidden]=\"ui.showReloader\"\n             #image>\n        <div class=\"lb-nav\" [hidden]=\"!ui.showArrowNav\" #navArrow>\n          <a class=\"lb-prev\" [hidden]=\"!ui.showLeftArrow\" (click)=\"prevImage()\" #leftArrow></a>\n          <a class=\"lb-next\" [hidden]=\"!ui.showRightArrow\" (click)=\"nextImage()\" #rightArrow></a>\n        </div>\n        <div class=\"lb-loader\" [hidden]=\"!ui.showReloader\" (click)=\"close($event)\">\n          <a class=\"lb-cancel\"></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"lb-dataContainer\" [hidden]=\"ui.showReloader\" #dataContainer>\n      <div class=\"lb-data\">\n        <div class=\"lb-details\">\n          <span class=\"lb-caption animation fadeIn\" [hidden]=\"!ui.showCaption\" [innerHtml]=\"album[currentImageIndex].caption\" #caption>\n          </span>\n          <span class=\"lb-number animation fadeIn\" [hidden]=\"!ui.showPageNumber\" #number>{{ content.pageNumber }}</span>\n        </div>\n        <div class=\"lb-controlContainer\">\n          <div class=\"lb-closeContainer\">\n            <a class=\"lb-close\" (click)=\"close($event)\"></a>\n          </div>\n          <div class=\"lb-downloadContainer\" [hidden]=\"!ui.showDownloadButton\">\n            <a class=\"lb-download\" (click)=\"download($event)\"></a>\n          </div>\n          <div class=\"lb-turnContainer\" [hidden]=\"!ui.showRotateButton\">\n            <a class=\"lb-turnLeft\" (click)=\"control($event)\"></a>\n            <a class=\"lb-turnRight\" (click)=\"control($event)\"></a>\n          </div>\n          <div class=\"lb-zoomContainer\" [hidden]=\"!ui.showZoomButton\">\n            <a class=\"lb-zoomOut\" (click)=\"control($event)\"></a>\n            <a class=\"lb-zoomIn\" (click)=\"control($event)\"></a>\n          </div>\n        </div>\n      </div>\n    </div>",
              selector: '[lb-content]',
              host: {
                '(click)': 'close($event)',
                '[class]': 'ui.classList'
              }
            }]
          }], function () {
            return [{
              type: ɵngcc0.ElementRef
            }, {
              type: ɵngcc0.Renderer2
            }, {
              type: ɵngcc1.LightboxEvent
            }, {
              type: ɵngcc0.ElementRef
            }, {
              type: ɵngcc1.LightboxWindowRef
            }, {
              type: ɵngcc2.HttpClient
            }, {
              type: ɵngcc3.FileSaverService
            }, {
              type: ɵngcc4.DomSanitizer
            }, {
              type: Object,
              decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
              }]
            }];
          }, {
            options: [{
              type: core_1.Input
            }],
            album: [{
              type: core_1.Input
            }],
            currentImageIndex: [{
              type: core_1.Input
            }],
            cmpRef: [{
              type: core_1.Input
            }],
            _outerContainerElem: [{
              type: core_1.ViewChild,
              args: ['outerContainer', {
                "static": false
              }]
            }],
            _containerElem: [{
              type: core_1.ViewChild,
              args: ['container', {
                "static": false
              }]
            }],
            _leftArrowElem: [{
              type: core_1.ViewChild,
              args: ['leftArrow', {
                "static": false
              }]
            }],
            _rightArrowElem: [{
              type: core_1.ViewChild,
              args: ['rightArrow', {
                "static": false
              }]
            }],
            _navArrowElem: [{
              type: core_1.ViewChild,
              args: ['navArrow', {
                "static": false
              }]
            }],
            _dataContainerElem: [{
              type: core_1.ViewChild,
              args: ['dataContainer', {
                "static": false
              }]
            }],
            _imageElem: [{
              type: core_1.ViewChild,
              args: ['image', {
                "static": false
              }]
            }],
            _captionElem: [{
              type: core_1.ViewChild,
              args: ['caption', {
                "static": false
              }]
            }],
            _numberElem: [{
              type: core_1.ViewChild,
              args: ['number', {
                "static": false
              }]
            }]
          });
        })();

        return LightboxComponent;
      }();

      exports.LightboxComponent = LightboxComponent; //# sourceMappingURL=lightbox.component.js.map

      /***/
    },

    /***/
    "TdWn":
    /*!*****************************************************************!*\
      !*** ./src/app/components/items/viewitem/viewitem.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ViewitemComponent */

    /***/
    function TdWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewitemComponent", function () {
        return ViewitemComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-lightbox */
      "m3o8");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var _UI_skeleton_gridskeleton_gridskeleton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../UI/skeleton/gridskeleton/gridskeleton.component */
      "swHO");
      /* harmony import */


      var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../UI/nodata/nodata.component */
      "he+D");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../UI/item/item.component */
      "xyAo");
      /* harmony import */


      var _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../UI/loader/loader.component */
      "poLh");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /*
      Project : Cryptotrades
      FileName :  viewitem.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component which show view item screen for user
      */


      var _c0 = ["reportModal"];
      var _c1 = ["offerModal"];

      function ViewitemComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.mediaBase + "/images/item/thumb/" + ctx_r0.item_thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ViewitemComponent_div_6_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_6_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_div_6_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r35.mediaBase + "/images/item/media/" + ctx_r35.itemInfo.media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ViewitemComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_6_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.isDescCollapsed = !ctx_r36.isDescCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_6_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_6_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewitemComponent_div_6_p_13_Template, 3, 1, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isDescCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isDescCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r1.isDescCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.itemInfo.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showMedia);
        }
      }

      function ViewitemComponent_div_7_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_7_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_div_7_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r41.name);
        }
      }

      function ViewitemComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Properties ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_7_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.isPropertyCollapsed = !ctx_r43.isPropertyCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_7_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_7_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewitemComponent_div_7_div_12_Template, 6, 2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isPropertyCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isPropertyCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r2.isPropertyCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attributes);
        }
      }

      function ViewitemComponent_div_8_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_8_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_div_8_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r48.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r48.value, " of ", item_r48.valueof, "");
        }
      }

      function ViewitemComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Stats ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_8_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.isStatCollapsed = !ctx_r50.isStatCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_8_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_8_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewitemComponent_div_8_div_12_Template, 6, 3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isStatCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isStatCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r3.isStatCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.stats);
        }
      }

      function ViewitemComponent_div_9_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_9_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "width": a0
        };
      };

      function ViewitemComponent_div_9_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r55.name, " (", item_r55.value, "/", item_r55.valueof, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, item_r55.value / item_r55.valueof * 100 + "%"));
        }
      }

      function ViewitemComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Levels ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_9_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.isLevelCollapsed = !ctx_r57.isLevelCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_9_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_9_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewitemComponent_div_9_div_12_Template, 6, 6, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLevelCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isLevelCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r4.isLevelCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.levels);
        }
      }

      function ViewitemComponent_div_10_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_10_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " About Collection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_10_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r61.isCollectionCollapsed = !ctx_r61.isCollectionCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_10_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_10_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_10_Template_div_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.openCollection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r5.isCollectionCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.mediaBase + "/images/collection/logo/" + ctx_r5.itemInfo.collection_id.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.itemInfo.collection_id.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.itemInfo.collection_id.description);
        }
      }

      function ViewitemComponent_div_11_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_div_11_i_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_11_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r66.isDetailCollapsed = !ctx_r66.isDetailCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_11_i_8_Template, 1, 0, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_11_i_9_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contract Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Token");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Blockchain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.isDetailCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isDetailCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx_r6.isDetailCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.blockChainExplorer + "address/" + ctx_r6.itemInfo.collection_id.contract_address, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r6.itemInfo.collection_id.contract_address.substring(0, 4), "...", ctx_r6.itemInfo.collection_id.contract_address.substring(ctx_r6.itemInfo.collection_id.contract_address.length - 4), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.token_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.blockChainName);
        }
      }

      function ViewitemComponent_div_13_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 95);
        }
      }

      function ViewitemComponent_div_13_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 96);
        }
      }

      function ViewitemComponent_div_13_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_13_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.openExternalLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_div_13_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_13_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

            return _r30.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_div_13_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Current Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_13_div_21_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.buyNFT();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r72.itemInfo.price, " ETH");
        }
      }

      function ViewitemComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_13_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r79.likeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewitemComponent_div_13_i_3_Template, 1, 0, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewitemComponent_div_13_i_4_Template, 1, 0, "i", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewitemComponent_div_13_button_5_Template, 2, 0, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewitemComponent_div_13_button_6_Template, 2, 0, "button", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_13_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r81.viewByCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Owned by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewitemComponent_div_13_div_21_Template, 7, 1, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.is_liked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.is_liked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.itemInfo.external_link.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.is_owner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.itemInfo.category_id.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.itemInfo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + ctx_r7.itemInfo.current_owner._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r7.itemInfo.current_owner.first_name, " ", ctx_r7.itemInfo.current_owner.last_name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.itemInfo.view_count, " Views ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.is_owner);
        }
      }

      function ViewitemComponent_i_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_i_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_tr_35_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r82.user_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r82.user_id.first_name, " ", item_r82.user_id.last_name, "");
        }
      }

      function ViewitemComponent_tr_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewitemComponent_tr_35_div_4_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r82.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r82.user_id != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, item_r82.created_date, "LL"));
        }
      }

      function ViewitemComponent_tr_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 104);

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

      function ViewitemComponent_ul_38_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_38_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r87.prevPricePage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_38_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_38_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r89.nextPricePage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewitemComponent_ul_38_li_1_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewitemComponent_ul_38_li_2_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.pagePrice != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.hasNextPricePage);
        }
      }

      function ViewitemComponent_i_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_i_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_tr_62_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r91.sender._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r91.sender.first_name, " ", item_r91.sender.last_name, "");
        }
      }

      function ViewitemComponent_tr_62_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_tr_62_div_9_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r97.deleteMyOffer(item_r91);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_tr_62_div_9_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_tr_62_div_9_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r100.acceptOffer(item_r91);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_tr_62_div_9_div_2_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r103.cancelOffer(item_r91);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_tr_62_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewitemComponent_tr_62_div_9_div_1_Template, 3, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewitemComponent_tr_62_div_9_div_2_Template, 5, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r91.sender._id == ctx_r93.currentUser.user_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r91.receiver._id == ctx_r93.currentUser.user_id);
        }
      }

      function ViewitemComponent_tr_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewitemComponent_tr_62_div_2_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_tr_62_div_9_Template, 3, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r91 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r91.sender != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r91.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, item_r91.created_date, "LL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.currentUser != null);
        }
      }

      function ViewitemComponent_tr_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 104);

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

      function ViewitemComponent_ul_65_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_65_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r108.prevOfferPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_65_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_65_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r110.nextOfferPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewitemComponent_ul_65_li_1_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewitemComponent_ul_65_li_2_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.pageOffer != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.hasNextOfferPage);
        }
      }

      function ViewitemComponent_div_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_div_66_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r112.openOffer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Make Offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_i_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_i_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_tr_96_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r114.from_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r114.from_id.first_name, " ", item_r114.from_id.last_name, "");
        }
      }

      function ViewitemComponent_tr_96_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r114.to_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r114.to_id.first_name, " ", item_r114.to_id.last_name, "");
        }
      }

      function ViewitemComponent_tr_96_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r117.blockChainExplorer + "tx/" + item_r114.transaction_hash, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r114.transaction_hash);
        }
      }

      function ViewitemComponent_tr_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewitemComponent_tr_96_div_6_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_tr_96_div_8_Template, 3, 3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewitemComponent_tr_96_div_10_Template, 3, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r114 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r114.history_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r114.price, " ETH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r114.from_id != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r114.to_id != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r114.transaction_hash != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, item_r114.created_date, "LL"));
        }
      }

      function ViewitemComponent_tr_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 104);

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

      function ViewitemComponent_ul_99_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_99_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r123.prevHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_99_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_ul_99_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

            var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r125.nextHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ViewitemComponent_ul_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewitemComponent_ul_99_li_1_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewitemComponent_ul_99_li_2_Template, 3, 0, "li", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.pageHistory != 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.hasNextHistoryPage);
        }
      }

      function ViewitemComponent_i_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 58);
        }
      }

      function ViewitemComponent_i_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
        }
      }

      function ViewitemComponent_app_gridskeleton_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gridskeleton");
        }
      }

      function ViewitemComponent_app_nodata_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 117);
        }
      }

      function ViewitemComponent_div_115_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function ViewitemComponent_div_115_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r129.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var moreitem_r128 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", moreitem_r128);
        }
      }

      function ViewitemComponent_div_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewitemComponent_div_115_div_1_Template, 2, 1, "div", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.morecollection);
        }
      }

      function ViewitemComponent_div_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View Collection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/collection/detail/" + ctx_r29.itemInfo.collection_id._id);
        }
      }

      function ViewitemComponent_app_loader_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      var ViewitemComponent = /*#__PURE__*/function () {
        function ViewitemComponent(router, route, userService, itemService, _lightbox, snackBar) {
          var _this3 = this;

          _classCallCheck(this, ViewitemComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.itemService = itemService;
          this._lightbox = _lightbox;
          this.snackBar = snackBar;
          this.reportMessage = "";
          this.priceInput = "";
          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].media_path;
          this.blockChainName = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].blockchain;
          this.blockChainExplorer = src_app_constants_config__WEBPACK_IMPORTED_MODULE_1__["config"].blockchain_url;
          this.itemID = '';
          this.item_thumb = '';
          this.token_id = '';
          this.spinner = false;
          this.attributes = [];
          this.stats = [];
          this.levels = [];
          this.isDescCollapsed = false;
          this.isPropertyCollapsed = true;
          this.isStatCollapsed = true;
          this.isLevelCollapsed = true;
          this.isCollectionCollapsed = true;
          this.isDetailCollapsed = true;
          this.isPriceCollapsed = false;
          this.isOfferCollapsed = false;
          this.isHistoryCollapsed = false;
          this.isMoreCollapsed = false;
          this.showMedia = false;
          this.is_liked = false;
          this.is_owner = false;
          this.morecollection = [];
          this.moreloading = true;
          this.is_morecollection_viewall = false;
          this.histories = [];
          this.historyLoading = true;
          this.pageHistory = 1;
          this.totalHistoryDocs = 0;
          this.limitHistory = 10;
          this.hasNextHistoryPage = false;
          this.prices = [];
          this.priceLoading = true;
          this.pagePrice = 1;
          this.totalPriceDocs = 0;
          this.limitPrice = 10;
          this.hasNextPricePage = false;
          this.offers = [];
          this.offerLoading = true;
          this.pageOffer = 1;
          this.totalOfferDocs = 0;
          this.limitOffer = 10;
          this.hasNextOfferPage = false;
          /**
           * This is the function which used to reset all values before load data from api
           */

          this.initFields = function () {
            _this3.moreloading = true;
            _this3.morecollection = [];
            _this3.pageHistory = 1;
            _this3.histories = [];
            _this3.pagePrice = 1;
            _this3.prices = [];
            _this3.pageOffer = 1;
            _this3.offers = [];

            _this3.getItemInfo();

            if (_this3.currentUser != null) {
              _this3.viewItem();
            }
          };
          /**
           * This is the function which used to get item detail from api
           */


          this.getItemInfo = function () {
            _this3.spinner = true;

            _this3.itemService.listItem({
              page: 1,
              type: 'view',
              item_id: _this3.itemID
            }).subscribe(function (result) {
              if (result.status == true) {
                _this3.itemInfo = result.tempArray[0];
                _this3.item_thumb = _this3.itemInfo.thumb;
                _this3.attributes = _this3.itemInfo.attributes;
                _this3.levels = _this3.itemInfo.levels;
                _this3.stats = _this3.itemInfo.stats;

                if (_this3.currentUser != null) {
                  if (_this3.itemInfo.unlock_content_url == 'true' || _this3.itemInfo.current_owner._id == _this3.currentUser.user_id) {
                    _this3.showMedia = true;
                  } else {
                    _this3.showMedia = false;
                  }
                }

                if (_this3.currentUser != null) {
                  console.log("return id ", result.return_id);
                  _this3.is_liked = result.return_id == 0 ? false : true;
                  _this3.is_owner = _this3.currentUser.user_id == _this3.itemInfo.current_owner._id ? true : false;
                }

                if (_this3.itemInfo.status == "active") {
                  _this3.token_id = parseInt(_this3.itemInfo.token_id);
                } else {
                  _this3.token_id = '';
                }

                _this3.getMoreCollection();

                _this3.getHistoryList();

                _this3.getPriceList();

                _this3.getOfferList();
              }

              _this3.spinner = false;
            });
          };
          /**
           * This is the function which used to get collection list by same autor who created the item
           */


          this.getMoreCollection = function () {
            _this3.itemService.moreCollection({
              collection_id: _this3.itemInfo.collection_id._id,
              item_id: _this3.itemInfo._id
            }).subscribe(function (result) {
              if (result.status == true) {
                _this3.morecollection = result.data;
                _this3.is_morecollection_viewall = _this3.morecollection.length > 4 ? true : false;

                if (_this3.morecollection.length > 4) {
                  _this3.morecollection.splice(3, 1);
                }
              }

              _this3.moreloading = false;
            });
          };
          /**
           * This is the output function which used to navigate user to item detail
           */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this3.router.navigate(['/item/view/' + event.item._id]);
            }
          };
          /**
           * This is the function which used to add viewers count in api
           */


          this.viewItem = function () {
            _this3.itemService.addViews({
              item_id: _this3.itemID
            }).subscribe(function (result) {});
          };
          /**
          * This is the function which used to open collection detail
          */


          this.openCollection = function () {
            _this3.router.navigate(["/collection/detail/" + _this3.itemInfo.collection_id._id]);
          };
          /**
           * This is the function which used to show marketplace scree
           */


          this.viewByCategory = function () {
            console.log(_this3.itemInfo.category_id._id);

            _this3.router.navigate(['/marketplace'], {
              queryParams: {
                category_id: _this3.itemInfo.category_id._id
              }
            });
          };
          /**
           * This is the function which used like the item by user
           */


          this.likeAction = function () {
            if (_this3.currentUser == null) {
              _this3.snackBar.open("Please login to continue", "", {
                duration: 2000
              });

              return;
            }

            _this3.is_liked = _this3.is_liked ? false : true;

            _this3.itemService.addLike({
              item_id: _this3.itemID,
              type: _this3.is_liked ? 'increase' : 'decrease'
            }).subscribe(function (result) {});
          };
          /**
           * This is the function which used to open external link
           */


          this.openExternalLink = function () {
            var pattern = /^((http|https|ftp):\/\/)/;
            var url = _this3.itemInfo.external_link;

            if (!pattern.test(url)) {
              url = "http://" + url;
            }

            window.open(url, "_blank");
          };
          /**
           * This is the function which used to send report for item as email to admin
           */


          this.reportAction = function () {
            if (_this3.currentUser == null) {
              _this3.snackBar.open("Please login to continue", "", {
                duration: 2000
              });

              _this3.reportModal.hide();

              return;
            }

            if (_this3.reportMessage.trim().length > 0) {
              _this3.reportModal.hide();

              var message = _this3.reportMessage;
              _this3.reportMessage = "";

              _this3.itemService.addReport({
                message: message,
                item_id: _this3.itemID
              }).subscribe(function (result) {});
            } else {
              _this3.snackBar.open("Report message is required", "", {
                duration: 2000
              });
            }
          };
          /**
           * This is the function which used to retreive activity list by item through api
           */


          this.getHistoryList = function () {
            _this3.historyLoading = true;
            var params = {
              type: "item",
              item_id: _this3.itemID,
              page: _this3.pageHistory
            };

            _this3.itemService.getHistory(params).subscribe(function (result) {
              if (result.status == true) {
                _this3.histories = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this3.hasNextHistoryPage = true;
                } else {
                  _this3.hasNextHistoryPage = false;
                }
              } else {
                _this3.hasNextHistoryPage = false;
              }

              _this3.historyLoading = false;
            });
          };
          /**
           * This is the function which used to retreive activity list by item through api on next page click
           */


          this.nextHistoryPage = function () {
            _this3.pageHistory = _this3.pageHistory + 1;

            _this3.getHistoryList();
          };
          /**
           * This is the function which used to retreive activity list by item through api on previous page click
           */


          this.prevHistoryPage = function () {
            _this3.pageHistory = _this3.pageHistory - 1;

            _this3.getHistoryList();
          };
          /**
           * This is the function which used to retreive price list by item through api
           */


          this.getPriceList = function () {
            _this3.priceLoading = true;
            var params = {
              item_id: _this3.itemID,
              page: _this3.pagePrice
            };

            _this3.itemService.getPrices(params).subscribe(function (result) {
              if (result.status == true) {
                _this3.prices = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this3.hasNextPricePage = true;
                } else {
                  _this3.hasNextPricePage = false;
                }
              } else {
                _this3.hasNextPricePage = false;
              }

              _this3.priceLoading = false;
            });
          };
          /**
           * This is the function which used to retreive price list by item through api on next page click
           */


          this.nextPricePage = function () {
            _this3.pagePrice = _this3.pagePrice + 1;

            _this3.getPriceList();
          };
          /**
           * This is the function which used to retreive price list by item through api on previous page click
           */


          this.prevPricePage = function () {
            _this3.pagePrice = _this3.pagePrice - 1;

            _this3.getPriceList();
          };
          /**
           * This is the function which used to retreive offer list by item through api
           */


          this.getOfferList = function () {
            _this3.offerLoading = true;
            var params = {
              item_id: _this3.itemID,
              type: "item",
              page: _this3.pageOffer
            };

            _this3.itemService.getOffers(params).subscribe(function (result) {
              if (result.status == true) {
                _this3.offers = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this3.hasNextOfferPage = true;
                } else {
                  _this3.hasNextOfferPage = false;
                }
              } else {
                _this3.hasNextOfferPage = false;
              }

              _this3.offerLoading = false;
            });
          };
          /**
           * This is the function which used to retreive offer list by item through api on next page click
           */


          this.nextOfferPage = function () {
            _this3.pageOffer = _this3.pageOffer + 1;

            _this3.getOfferList();
          };
          /**
           * This is the function which used to retreive offer list by item through api on previous page click
           */


          this.prevOfferPage = function () {
            _this3.pageOffer = _this3.pageOffer - 1;

            _this3.getOfferList();
          };
          /**
           * This is the function which used to buy nft item directly
           */


          this.buyNFT = function () {
            if (_this3.currentUser == null) {
              _this3.snackBar.open("Please login to continue", "", {
                duration: 2000
              });

              return;
            }

            _this3.spinner = true;

            _this3.itemService.purchaseItem({
              item_id: _this3.itemID
            }).subscribe(function (result) {
              _this3.spinner = false;

              if (result.status == true) {
                _this3.initFields();
              }

              _this3.snackBar.open(result.message, "", {
                duration: 2000
              });
            });
          };
          /**
           * This is the function which used to open offer
           */


          this.openOffer = function () {
            if (_this3.currentUser == null) {
              _this3.snackBar.open("Please login to continue", "", {
                duration: 2000
              });

              return;
            }

            _this3.offerModal.show();
          };
          /**
           * This is the function which used to add new offer with validation
           */


          this.addOfferAction = function () {
            if (!isNaN(_this3.priceInput)) {
              if (_this3.priceInput > 0) {
                _this3.spinner = true;

                _this3.itemService.addOffer({
                  item_id: _this3.itemID,
                  price: _this3.priceInput
                }).subscribe(function (result) {
                  _this3.offerModal.hide();

                  _this3.spinner = false;

                  if (result.status == true) {
                    _this3.initFields();
                  }

                  _this3.snackBar.open(result.message, "", {
                    duration: 2000
                  });
                });
              } else {
                _this3.snackBar.open("Price should be greater than zero", "", {
                  duration: 2000
                });
              }
            } else {
              _this3.snackBar.open("Price should be numeric", "", {
                duration: 2000
              });
            }
          };
          /**
           * This is the function which used to delete offer from detail page
           */


          this.deleteMyOffer = function (offer) {
            var index = _this3.offers.findIndex(function (offer) {
              return offer.sender._id == _this3.currentUser._id;
            });

            if (index = -1) {
              _this3.offers.splice(index, 1);
            }

            _this3.itemService.removeOffer({
              offer_id: offer._id,
              item_id: _this3.itemID
            }).subscribe(function (result) {});
          };
          /**
           * This is the function which used to cancel offer from detail page
           */


          this.cancelOffer = function (offer) {
            var index = _this3.offers.findIndex(function (offer) {
              return offer.receiver._id == _this3.currentUser._id;
            });

            if (index = -1) {
              _this3.offers.splice(index, 1);
            }

            _this3.itemService.actionOffer({
              offer_id: offer._id,
              item_id: _this3.itemID,
              type: 'cancel'
            }).subscribe(function (result) {});
          };
          /**
           * This is the function which used to accept offer from detail page
           */


          this.acceptOffer = function (offer) {
            _this3.spinner = true;

            _this3.itemService.actionOffer({
              offer_id: offer._id,
              item_id: _this3.itemID,
              type: 'accept'
            }).subscribe(function (result) {
              _this3.spinner = false;

              if (result.status == true) {
                _this3.initFields();
              }

              _this3.snackBar.open(result.message, "", {
                duration: 2000
              });
            });
          };

          this.reportModal = this.offerModal = this.subscription;
          this.currentUser = this.userService.getUser();
        }

        _createClass(ViewitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.subscription = this.route.params.subscribe(function (params) {
              if (params.id) {
                _this4.itemID = params.id;

                _this4.initFields();
              } else {
                _this4.itemID = "";
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * This is the function which used to show image in popup
           */

        }, {
          key: "openImage",
          value: function openImage() {
            this._lightbox.open([{
              src: this.mediaBase + '/images/item/thumb/' + this.itemInfo.thumb,
              caption: '',
              thumb: this.mediaBase + '/images/item/thumb/' + this.itemInfo.thumb
            }], 0);
          }
        }]);

        return ViewitemComponent;
      }();

      ViewitemComponent.ɵfac = function ViewitemComponent_Factory(t) {
        return new (t || ViewitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
      };

      ViewitemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewitemComponent,
        selectors: [["app-viewitem"]],
        viewQuery: function ViewitemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reportModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.offerModal = _t.first);
          }
        },
        decls: 158,
        vars: 37,
        consts: [[1, "appContainer"], [1, "container"], [1, "row"], [1, "col-md-5"], [1, "imgBlock", 3, "click"], [3, "src", 4, "ngIf"], ["class", "descBlock", 4, "ngIf"], ["class", "propertyBlock", 4, "ngIf"], ["class", "statBlock", 4, "ngIf"], ["class", "levelBlock", 4, "ngIf"], ["class", "finalBlock", 4, "ngIf"], [1, "col-md-7"], ["class", "infoBlock", 4, "ngIf"], [1, "priceBlock"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "cil-graph", "titleIcon"], [1, "card-header-actions"], [1, "btn", 3, "click"], ["class", "icon-arrow-down", 4, "ngIf"], ["class", "icon-arrow-up", 4, "ngIf"], [1, "card-body", 3, "collapse"], [1, "table", "table-bordered", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "offerBlock"], [1, "cil-money", "titleIcon"], ["class", "card-footer", 4, "ngIf"], [1, "col-md-12"], [1, "tradeBlock"], [1, "cil-swap-vertical", "titleIcon"], [1, "card-body", "historyBody", 3, "collapse"], [1, "relatedBlock"], [1, "cil-grid", "titleIcon"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["reportModal", "bs-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "type"], ["placeholder", "Message", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["offerModal", "bs-modal"], ["type", "text", "placeholder", "Price", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "src"], [1, "descBlock"], [1, "cil-justify-left", "titleIcon"], [1, "icon-arrow-down"], [1, "icon-arrow-up"], ["target", "_blank", 3, "href"], [1, "propertyBlock"], [1, "cil-list-rich", "titleIcon"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "attributes_list"], [1, "statBlock"], [1, "cil-chart", "titleIcon"], [1, "levelBlock"], [1, "cil-star", "titleIcon"], ["class", "col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [1, "level_progress"], [1, "level_progress_value", 3, "ngStyle"], [1, "cil-factory", "titleIcon"], [1, "collectionDetail", 3, "click"], [1, "collectionDetailLeft"], [1, "collectionDetailRight"], [1, "finalBlock"], [1, "cil-notes", "titleIcon"], [1, "infoItem"], [1, "clear"], [1, "infoBlock"], [1, "infoTools"], [1, "btn", "first", 3, "click"], ["class", "fa fa-heart-o", 4, "ngIf"], ["class", "fa fa-heart likedIcon", 4, "ngIf"], ["class", "btn", 3, "click", 4, "ngIf"], [1, "itemCategory"], ["href", "javascript:void(0)", 3, "click"], [1, "infoBlockMore"], [1, "infoBlockMoreItem"], ["href", "javascript:void", 3, "routerLink"], [1, "icon-eye"], ["class", "InfoPriceBlock", 4, "ngIf"], [1, "fa", "fa-heart-o"], [1, "fa", "fa-heart", "likedIcon"], [1, "cil-external-link"], [1, "cil-flag-alt"], [1, "InfoPriceBlock"], [1, "btn", "btn-primary", 3, "click"], ["href", "javascript:void(0)", 3, "routerLink"], ["colspan", "3"], ["type", "info", "ng-reflect-type", "info"], ["role", "alert", "ng-reflect-ng-class", "", 1, "alert", "alert-info"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "action"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "cil-x"], [1, "cil-check-alt"], ["colspan", "4"], [1, "card-footer"], [1, "btn", "btn-outline-primary", 3, "click"], ["colspan", "5"], ["msg", "There is no data to display here"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [3, "item", "itemEvent"], [1, "btn", "btn-outline-primary", 3, "routerLink"]],
        template: function ViewitemComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_div_click_4_listener() {
              return ctx.openImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewitemComponent_img_5_Template, 1, 1, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewitemComponent_div_6_Template, 14, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewitemComponent_div_7_Template, 13, 4, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewitemComponent_div_8_Template, 13, 4, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewitemComponent_div_9_Template, 13, 4, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewitemComponent_div_10_Template, 19, 6, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewitemComponent_div_11_Template, 30, 8, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewitemComponent_div_13_Template, 22, 11, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Price History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_21_listener() {
              return ctx.isPriceCollapsed = !ctx.isPriceCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewitemComponent_i_22_Template, 1, 0, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewitemComponent_i_23_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewitemComponent_tr_35_Template, 8, 6, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ViewitemComponent_tr_36_Template, 7, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewitemComponent_ul_38_Template, 3, 2, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Offers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_46_listener() {
              return ctx.isOfferCollapsed = !ctx.isOfferCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ViewitemComponent_i_47_Template, 1, 0, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ViewitemComponent_i_48_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ViewitemComponent_tr_62_Template, 10, 7, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ViewitemComponent_tr_63_Template, 7, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ViewitemComponent_ul_65_Template, 3, 2, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ViewitemComponent_div_66_Template, 3, 0, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Trade History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_76_listener() {
              return ctx.isHistoryCollapsed = !ctx.isHistoryCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ViewitemComponent_i_77_Template, 1, 0, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ViewitemComponent_i_78_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "To");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Transaction Hash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ViewitemComponent_tr_96_Template, 14, 9, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ViewitemComponent_tr_97_Template, 7, 0, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ViewitemComponent_ul_99_Template, 3, 2, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " More from this collection ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_109_listener() {
              return ctx.isMoreCollapsed = !ctx.isMoreCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ViewitemComponent_i_110_Template, 1, 0, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ViewitemComponent_i_111_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, ViewitemComponent_app_gridskeleton_113_Template, 1, 0, "app-gridskeleton", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ViewitemComponent_app_nodata_114_Template, 1, 0, "app-nodata", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ViewitemComponent_div_115_Template, 2, 1, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ViewitemComponent_div_116_Template, 3, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38, 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Report Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_124_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

              var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

              return _r30.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "textarea", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewitemComponent_Template_textarea_ngModelChange_131_listener($event) {
              return ctx.reportMessage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_133_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

              var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

              return _r30.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_135_listener() {
              return ctx.reportAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 38, 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Add Offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_144_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

              var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](138);

              return _r31.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewitemComponent_Template_input_ngModelChange_151_listener($event) {
              return ctx.priceInput = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_153_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131);

              var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](138);

              return _r31.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewitemComponent_Template_button_click_155_listener() {
              return ctx.addOfferAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, ViewitemComponent_app_loader_157_Template, 1, 0, "app-loader", 25);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item_thumb != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributes.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stats.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levels.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPriceCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPriceCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isPriceCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.prices);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prices.length == 0 && ctx.priceLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.priceLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOfferCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOfferCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isOfferCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.offers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offers.length == 0 && ctx.offerLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.offerLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo && !ctx.is_owner);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHistoryCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHistoryCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isHistoryCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.histories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.histories.length == 0 && ctx.historyLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.historyLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMoreCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMoreCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isMoreCollapsed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moreloading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moreloading && ctx.morecollection.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moreloading && ctx.morecollection.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemInfo && ctx.is_morecollection_viewall);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reportMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priceInput);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"], _UI_skeleton_gridskeleton_gridskeleton_component__WEBPACK_IMPORTED_MODULE_12__["GridskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_13__["NodataComponent"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_14__["ItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_15__["LoaderComponent"]],
        pipes: [ngx_moment__WEBPACK_IMPORTED_MODULE_16__["DateFormatPipe"]],
        styles: [".appContainer[_ngcontent-%COMP%] {margin:88px 0 0;}\n.imgBlock[_ngcontent-%COMP%] {background-color: #e7e7e7; border: 1px solid #ccc; margin-bottom: 25px;}\n.imgBlock[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%;}\n.card-header[_ngcontent-%COMP%] {line-height: 30px; font-size: 16px; font-weight: 600; padding-right: 10px;}\n.card-footer[_ngcontent-%COMP%] {text-align: center;}\n.card-header[_ngcontent-%COMP%]   i.titleIcon[_ngcontent-%COMP%] { font-size: 18px; position: relative; top: 3px;}\n.descBlock[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .propertyBlock[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .statBlock[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .levelBlock[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin: 0; border-radius: 0; }\n.attributes_list[_ngcontent-%COMP%] {border:1px solid #ccc; background-color: #e7e7e7; padding: 25px 15px; text-align: center; margin: 0 0 15px; position: relative;}\n.attributes_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .attributes_list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {display: block; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}\n.attributes_list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {font-size: 16px; margin: 10px 0 0;}\n.attributes_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {color: #999;}\n.closelist[_ngcontent-%COMP%] {position: absolute; width: 25px; height: 25px; text-align: center; line-height: 25px; background-color: red; right:0; top:0; color: #fff; cursor: pointer;}\n.closelist[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {height: 25px; line-height: 25px;}\n.levelSeparater[_ngcontent-%COMP%] {text-align: center; font-size: 24px; line-height: 30px;}\n.level_progress[_ngcontent-%COMP%] {background-color: #ccc; border-radius: 10px; height: 13px;}\n.level_progress_value[_ngcontent-%COMP%] {background-color: green;  height: 13px; border-radius: 10px;}\n.collectionDetail[_ngcontent-%COMP%] {position: relative; cursor: pointer;}\n.collectionDetailLeft[_ngcontent-%COMP%] {width: 50px; height: 50px; position: absolute; left: 0; top: 0;}\n.collectionDetailLeft[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 50px; height: 50px; -o-object-fit: cover; object-fit: cover;}\n.collectionDetailRight[_ngcontent-%COMP%] {padding-left: 60px;}\n.collectionDetailRight[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .collectionDetailRight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{ margin: 0;}\n.infoItem[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {clear: both}\n.infoItem[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {float: left;}\n.infoItem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {float: right;}\n.infoBlock[_ngcontent-%COMP%] {position: relative;}\n.itemCategory[_ngcontent-%COMP%] {margin:5px 0 0;}\n.infoTools[_ngcontent-%COMP%] {border:1px solid #e7e7e7; position: absolute; right: 0; top: 0;}\n.infoTools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {border-left: 1px solid #e7e7e7;}\n.infoTools[_ngcontent-%COMP%]   button.first[_ngcontent-%COMP%] {border:0 nonel}\n.infoBlock[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {margin: 15px 0 0; text-transform: capitalize;}\n.infoBlockMoreItem[_ngcontent-%COMP%] {float: left; margin-right: 15px;}\n.infoBlockMoreItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {text-transform: capitalize;}\n.infoBlockMore[_ngcontent-%COMP%]   .clear[_ngcontent-%COMP%] {clear: both;}\n.infoBlockMoreItem[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {font-size: 15px; position: relative; top: 2px; display: inline-block; margin-right: 2px;}\n.InfoPriceBlock[_ngcontent-%COMP%] {border:1px solid #e7e7e7; padding: 10px; margin: 15px 0 0;}\n.InfoPriceBlock[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {margin: 0; padding: 0;}\n.InfoPriceBlock[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {margin: 5px 0;}\n.priceBlock[_ngcontent-%COMP%] {margin-top: 15px;}\n.historyBody[_ngcontent-%COMP%] {overflow:hidden; overflow-x: auto; }\n.offerBlock[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {margin-right: 10px; line-height: 13px;}\n.likedIcon[_ngcontent-%COMP%] {color:red}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:103px 0 0;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxlQUFlLENBQUM7QUFDL0IsV0FBVyx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsQ0FBQztBQUNsRixlQUFlLFdBQVcsQ0FBQztBQUMzQixjQUFjLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztBQUN4RixjQUFjLGtCQUFrQixDQUFDO0FBQ2pDLDJCQUEyQixlQUFlLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO0FBQ3pFLDRFQUE0RSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7QUFFekcsa0JBQWtCLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO0FBQ2pKLCtDQUErQyxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUM7QUFDMUosdUJBQXVCLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztBQUN6RCx3QkFBd0IsV0FBVyxDQUFDO0FBQ3BDLFlBQVksa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUM7QUFDdEssY0FBYyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7QUFDOUMsaUJBQWlCLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztBQUN4RSxpQkFBaUIsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO0FBQzNFLHVCQUF1Qix1QkFBdUIsR0FBRyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7QUFFbkYsbUJBQW1CLGtCQUFrQixFQUFFLGVBQWUsQ0FBQztBQUN2RCx1QkFBdUIsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0FBQ3RGLDJCQUEyQixXQUFXLEVBQUUsWUFBWSxFQUFFLG9CQUFpQixFQUFqQixpQkFBaUIsQ0FBQztBQUN4RSx3QkFBd0Isa0JBQWtCLENBQUM7QUFDM0MscURBQXFELFNBQVMsQ0FBQztBQUUvRCxrQkFBa0IsV0FBVztBQUM3QixpQkFBaUIsV0FBVyxDQUFDO0FBQzdCLGdCQUFnQixZQUFZLENBQUM7QUFFN0IsWUFBWSxrQkFBa0IsQ0FBQztBQUMvQixlQUFlLGNBQWMsQ0FBQztBQUM5QixZQUFZLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7QUFDM0UsbUJBQW1CLDhCQUE4QixDQUFDO0FBQ2xELHlCQUF5QixjQUFjO0FBQ3ZDLGVBQWUsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7QUFDNUQsb0JBQW9CLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztBQUNwRCxzQkFBc0IsMEJBQTBCLENBQUM7QUFDakQsdUJBQXVCLFdBQVcsQ0FBQztBQUNuQyxzQkFBc0IsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RyxpQkFBaUIsd0JBQXdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO0FBQzNFLG1CQUFtQixTQUFTLEVBQUUsVUFBVSxDQUFDO0FBQ3pDLG9CQUFvQixhQUFhLENBQUM7QUFDbEMsYUFBYSxnQkFBZ0IsQ0FBQztBQUU5QixjQUFjLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUNqRCw0QkFBNEIsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDbEUsWUFBWSxTQUFTO0FBQ3JCO0lBQ0ksZUFBZSxnQkFBZ0IsQ0FBQztBQUNwQyIsImZpbGUiOiJ2aWV3aXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcENvbnRhaW5lciB7bWFyZ2luOjg4cHggMCAwO31cbi5pbWdCbG9jayB7YmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgbWFyZ2luLWJvdHRvbTogMjVweDt9XG4uaW1nQmxvY2sgaW1nIHt3aWR0aDogMTAwJTt9XG4uY2FyZC1oZWFkZXIge2xpbmUtaGVpZ2h0OiAzMHB4OyBmb250LXNpemU6IDE2cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHBhZGRpbmctcmlnaHQ6IDEwcHg7fVxuLmNhcmQtZm9vdGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmNhcmQtaGVhZGVyIGkudGl0bGVJY29uIHsgZm9udC1zaXplOiAxOHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogM3B4O31cbi5kZXNjQmxvY2sgLmNhcmQsIC5wcm9wZXJ0eUJsb2NrIC5jYXJkLCAuc3RhdEJsb2NrIC5jYXJkLCAubGV2ZWxCbG9jayAuY2FyZHttYXJnaW46IDA7IGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmF0dHJpYnV0ZXNfbGlzdCB7Ym9yZGVyOjFweCBzb2xpZCAjY2NjOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3OyBwYWRkaW5nOiAyNXB4IDE1cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIDAgMTVweDsgcG9zaXRpb246IHJlbGF0aXZlO31cbi5hdHRyaWJ1dGVzX2xpc3QgbGFiZWwsIC5hdHRyaWJ1dGVzX2xpc3Qgc3BhbiB7ZGlzcGxheTogYmxvY2s7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczt9IFxuLmF0dHJpYnV0ZXNfbGlzdCBzcGFuIHtmb250LXNpemU6IDE2cHg7IG1hcmdpbjogMTBweCAwIDA7fVxuLmF0dHJpYnV0ZXNfbGlzdCBsYWJlbCB7Y29sb3I6ICM5OTk7fVxuLmNsb3NlbGlzdCB7cG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjVweDsgaGVpZ2h0OiAyNXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiAyNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IHJpZ2h0OjA7IHRvcDowOyBjb2xvcjogI2ZmZjsgY3Vyc29yOiBwb2ludGVyO31cbi5jbG9zZWxpc3QgaSB7aGVpZ2h0OiAyNXB4OyBsaW5lLWhlaWdodDogMjVweDt9XG4ubGV2ZWxTZXBhcmF0ZXIge3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNHB4OyBsaW5lLWhlaWdodDogMzBweDt9XG4ubGV2ZWxfcHJvZ3Jlc3Mge2JhY2tncm91bmQtY29sb3I6ICNjY2M7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGhlaWdodDogMTNweDt9XG4ubGV2ZWxfcHJvZ3Jlc3NfdmFsdWUge2JhY2tncm91bmQtY29sb3I6IGdyZWVuOyAgaGVpZ2h0OiAxM3B4OyBib3JkZXItcmFkaXVzOiAxMHB4O31cblxuLmNvbGxlY3Rpb25EZXRhaWwge3Bvc2l0aW9uOiByZWxhdGl2ZTsgY3Vyc29yOiBwb2ludGVyO31cbi5jb2xsZWN0aW9uRGV0YWlsTGVmdCB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7fVxuLmNvbGxlY3Rpb25EZXRhaWxMZWZ0IGltZyB7d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgb2JqZWN0LWZpdDogY292ZXI7fVxuLmNvbGxlY3Rpb25EZXRhaWxSaWdodCB7cGFkZGluZy1sZWZ0OiA2MHB4O31cbi5jb2xsZWN0aW9uRGV0YWlsUmlnaHQgaDQsIC5jb2xsZWN0aW9uRGV0YWlsUmlnaHQgcHsgbWFyZ2luOiAwO31cblxuLmluZm9JdGVtIC5jbGVhciB7Y2xlYXI6IGJvdGh9XG4uaW5mb0l0ZW0gbGFiZWwge2Zsb2F0OiBsZWZ0O31cbi5pbmZvSXRlbSBzcGFuIHtmbG9hdDogcmlnaHQ7fVxuXG4uaW5mb0Jsb2NrIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLml0ZW1DYXRlZ29yeSB7bWFyZ2luOjVweCAwIDA7fVxuLmluZm9Ub29scyB7Ym9yZGVyOjFweCBzb2xpZCAjZTdlN2U3OyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDA7fVxuLmluZm9Ub29scyBidXR0b24ge2JvcmRlci1sZWZ0OiAxcHggc29saWQgI2U3ZTdlNzt9XG4uaW5mb1Rvb2xzIGJ1dHRvbi5maXJzdCB7Ym9yZGVyOjAgbm9uZWx9XG4uaW5mb0Jsb2NrIGgyIHttYXJnaW46IDE1cHggMCAwOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTt9XG4uaW5mb0Jsb2NrTW9yZUl0ZW0ge2Zsb2F0OiBsZWZ0OyBtYXJnaW4tcmlnaHQ6IDE1cHg7fVxuLmluZm9CbG9ja01vcmVJdGVtIGEge3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cbi5pbmZvQmxvY2tNb3JlIC5jbGVhciB7Y2xlYXI6IGJvdGg7fVxuLmluZm9CbG9ja01vcmVJdGVtIGkge2ZvbnQtc2l6ZTogMTVweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDJweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tcmlnaHQ6IDJweDt9XG4uSW5mb1ByaWNlQmxvY2sge2JvcmRlcjoxcHggc29saWQgI2U3ZTdlNzsgcGFkZGluZzogMTBweDsgbWFyZ2luOiAxNXB4IDAgMDt9XG4uSW5mb1ByaWNlQmxvY2sgcCB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbi5JbmZvUHJpY2VCbG9jayBoMiB7bWFyZ2luOiA1cHggMDt9XG4ucHJpY2VCbG9jayB7bWFyZ2luLXRvcDogMTVweDt9XG5cbi5oaXN0b3J5Qm9keSB7b3ZlcmZsb3c6aGlkZGVuOyBvdmVyZmxvdy14OiBhdXRvOyB9XG4ub2ZmZXJCbG9jayAuYWN0aW9uIGJ1dHRvbiB7bWFyZ2luLXJpZ2h0OiAxMHB4OyBsaW5lLWhlaWdodDogMTNweDt9XG4ubGlrZWRJY29uIHtjb2xvcjpyZWR9XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYXBwQ29udGFpbmVyIHttYXJnaW46MTAzcHggMCAwO31cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewitemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-viewitem',
            templateUrl: './viewitem.component.html',
            styleUrls: ['./viewitem.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
          }, {
            type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }];
        }, {
          reportModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['reportModal']
          }],
          offerModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['offerModal']
          }]
        });
      })();
      /***/

    },

    /***/
    "VlMW":
    /*!***************************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js ***!
      \***************************************************************************/

    /*! no static exports found */

    /***/
    function VlMW(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LightboxConfig =
      /** @class */
      function () {
        function LightboxConfig() {
          this.fadeDuration = 0.7;
          this.resizeDuration = 0.5;
          this.fitImageInViewPort = true;
          this.positionFromTop = 20;
          this.showImageNumberLabel = false;
          this.alwaysShowNavOnTouchDevices = false;
          this.wrapAround = false;
          this.disableKeyboardNav = false;
          this.disableScrolling = false;
          this.centerVertically = false;
          this.enableTransition = true;
          this.albumLabel = 'Image %1 of %2';
          this.showZoom = false;
          this.showRotate = false;

          this.containerElementResolver = function (documentRef) {
            return documentRef.querySelector('body');
          };
        }

        LightboxConfig = __decorate([__metadata("design:paramtypes", [])], LightboxConfig);

        LightboxConfig.ɵfac = function LightboxConfig_Factory(t) {
          return new (t || LightboxConfig)();
        };

        LightboxConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: LightboxConfig,
          factory: function factory(t) {
            return LightboxConfig.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxConfig, [{
            type: core_1.Injectable
          }], function () {
            return [];
          }, null);
        })();

        return LightboxConfig;
      }();

      exports.LightboxConfig = LightboxConfig; //# sourceMappingURL=lightbox-config.service.js.map

      /***/
    },

    /***/
    "YKnz":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js ***!
      \******************************************************************************/

    /*! no static exports found */

    /***/
    function YKnz(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ɵngcc1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var _c0 = ["lb-overlay", ""];

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var lightbox_event_service_1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var common_1 = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LightboxOverlayComponent =
      /** @class */
      function () {
        function LightboxOverlayComponent(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
          var _this = this;

          this._elemRef = _elemRef;
          this._rendererRef = _rendererRef;
          this._lightboxEvent = _lightboxEvent;
          this._documentRef = _documentRef;
          this.classList = 'lightboxOverlay animation fadeInOverlay';
          this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) {
            return _this._onReceivedEvent(event);
          });
        }

        LightboxOverlayComponent.prototype.close = function () {
          // broadcast to itself and all others subscriber including the components
          this._lightboxEvent.broadcastLightboxEvent({
            id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE,
            data: null
          });
        };

        LightboxOverlayComponent.prototype.ngAfterViewInit = function () {
          var fadeDuration = this.options.fadeDuration;

          this._rendererRef.setStyle(this._elemRef.nativeElement, '-webkit-animation-duration', fadeDuration + "s");

          this._rendererRef.setStyle(this._elemRef.nativeElement, 'animation-duration', fadeDuration + "s");

          this._sizeOverlay();
        };

        LightboxOverlayComponent.prototype.onResize = function () {
          this._sizeOverlay();
        };

        LightboxOverlayComponent.prototype.ngOnDestroy = function () {
          this._subscription.unsubscribe();
        };

        LightboxOverlayComponent.prototype._sizeOverlay = function () {
          var width = this._getOverlayWidth();

          var height = this._getOverlayHeight();

          this._rendererRef.setStyle(this._elemRef.nativeElement, 'width', width + "px");

          this._rendererRef.setStyle(this._elemRef.nativeElement, 'height', height + "px");
        };

        LightboxOverlayComponent.prototype._onReceivedEvent = function (event) {
          switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
              this._end();

              break;

            default:
              break;
          }
        };

        LightboxOverlayComponent.prototype._end = function () {
          var _this = this;

          this.classList = 'lightboxOverlay animation fadeOutOverlay'; // queue self destruction after the animation has finished
          // FIXME: not sure if there is any way better than this

          setTimeout(function () {
            _this.cmpRef.destroy();
          }, this.options.fadeDuration * 1000);
        };

        LightboxOverlayComponent.prototype._getOverlayWidth = function () {
          return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
        };

        LightboxOverlayComponent.prototype._getOverlayHeight = function () {
          return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
        };

        __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxOverlayComponent.prototype, "options", void 0);

        __decorate([core_1.Input(), __metadata("design:type", Object)], LightboxOverlayComponent.prototype, "cmpRef", void 0);

        __decorate([core_1.HostListener('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LightboxOverlayComponent.prototype, "close", null);

        __decorate([core_1.HostListener('window:resize'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LightboxOverlayComponent.prototype, "onResize", null);

        LightboxOverlayComponent = __decorate([__param(3, core_1.Inject(common_1.DOCUMENT)), __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, lightbox_event_service_1.LightboxEvent, Object])], LightboxOverlayComponent);

        LightboxOverlayComponent.ɵfac = function LightboxOverlayComponent_Factory(t) {
          return new (t || LightboxOverlayComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxEvent), ɵngcc0.ɵɵdirectiveInject(common_1.DOCUMENT));
        };

        LightboxOverlayComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
          type: LightboxOverlayComponent,
          selectors: [["", "lb-overlay", ""]],
          hostVars: 2,
          hostBindings: function LightboxOverlayComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              ɵngcc0.ɵɵlistener("click", function LightboxOverlayComponent_click_HostBindingHandler() {
                return ctx.close();
              })("resize", function LightboxOverlayComponent_resize_HostBindingHandler() {
                return ctx.onResize();
              }, false, ɵngcc0.ɵɵresolveWindow);
            }

            if (rf & 2) {
              ɵngcc0.ɵɵclassMap(ctx.classList);
            }
          },
          inputs: {
            options: "options",
            cmpRef: "cmpRef"
          },
          attrs: _c0,
          decls: 0,
          vars: 0,
          template: function LightboxOverlayComponent_Template(rf, ctx) {},
          encapsulation: 2
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxOverlayComponent, [{
            type: core_1.Component,
            args: [{
              selector: '[lb-overlay]',
              template: '',
              host: {
                '[class]': 'classList'
              }
            }]
          }], function () {
            return [{
              type: ɵngcc0.ElementRef
            }, {
              type: ɵngcc0.Renderer2
            }, {
              type: ɵngcc1.LightboxEvent
            }, {
              type: Object,
              decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
              }]
            }];
          }, {
            close: [{
              type: core_1.HostListener,
              args: ['click']
            }],
            onResize: [{
              type: core_1.HostListener,
              args: ['window:resize']
            }],
            options: [{
              type: core_1.Input
            }],
            cmpRef: [{
              type: core_1.Input
            }]
          });
        })();

        return LightboxOverlayComponent;
      }();

      exports.LightboxOverlayComponent = LightboxOverlayComponent; //# sourceMappingURL=lightbox-overlay.component.js.map

      /***/
    },

    /***/
    "aAXh":
    /*!**********************************************************!*\
      !*** ./src/app/components/items/items-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ItemsRoutingModule */

    /***/
    function aAXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsRoutingModule", function () {
        return ItemsRoutingModule;
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


      var src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/guard/user.guard */
      "3owW");
      /* harmony import */


      var _additem_additem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./additem/additem.component */
      "r3M5");
      /* harmony import */


      var _viewitem_viewitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./viewitem/viewitem.component */
      "TdWn");
      /*
      Project : Cryptotrades
      FileName :  items-routing.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the routing module which load item related routes
      */


      var routes = [{
        path: '',
        redirectTo: '/collection/mycollection',
        pathMatch: 'full'
      }, {
        path: 'add/:id',
        component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_3__["AdditemComponent"],
        canActivate: [src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
      }, {
        path: 'edit/:id',
        component: _additem_additem_component__WEBPACK_IMPORTED_MODULE_3__["AdditemComponent"],
        canActivate: [src_app_guard_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
      }, {
        path: 'view/:id',
        component: _viewitem_viewitem_component__WEBPACK_IMPORTED_MODULE_4__["ViewitemComponent"]
      }];

      var ItemsRoutingModule = function ItemsRoutingModule() {
        _classCallCheck(this, ItemsRoutingModule);
      };

      ItemsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ItemsRoutingModule
      });
      ItemsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ItemsRoutingModule_Factory(t) {
          return new (t || ItemsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsRoutingModule, [{
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
    "b5fp":
    /*!********************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function b5fp(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ɵngcc1 = __webpack_require__(
      /*! ./lightbox-config.service */
      "VlMW");

      var ɵngcc2 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var lightbox_component_1 = __webpack_require__(
      /*! ./lightbox.component */
      "SrD1");

      var lightbox_config_service_1 = __webpack_require__(
      /*! ./lightbox-config.service */
      "VlMW");

      var lightbox_event_service_1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      var lightbox_overlay_component_1 = __webpack_require__(
      /*! ./lightbox-overlay.component */
      "YKnz");

      var common_1 = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var Lightbox =
      /** @class */
      function () {
        function Lightbox(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
          this._componentFactoryResolver = _componentFactoryResolver;
          this._injector = _injector;
          this._applicationRef = _applicationRef;
          this._lightboxConfig = _lightboxConfig;
          this._lightboxEvent = _lightboxEvent;
          this._documentRef = _documentRef;
        }

        Lightbox.prototype.open = function (album, curIndex, options) {
          var _this = this;

          if (curIndex === void 0) {
            curIndex = 0;
          }

          if (options === void 0) {
            options = {};
          }

          var overlayComponentRef = this._createComponent(lightbox_overlay_component_1.LightboxOverlayComponent);

          var componentRef = this._createComponent(lightbox_component_1.LightboxComponent);

          var newOptions = {}; // broadcast open event

          this._lightboxEvent.broadcastLightboxEvent({
            id: lightbox_event_service_1.LIGHTBOX_EVENT.OPEN
          });

          Object.assign(newOptions, this._lightboxConfig, options); // attach input to lightbox

          componentRef.instance.album = album;
          componentRef.instance.currentImageIndex = curIndex;
          componentRef.instance.options = newOptions;
          componentRef.instance.cmpRef = componentRef; // attach input to overlay

          overlayComponentRef.instance.options = newOptions;
          overlayComponentRef.instance.cmpRef = overlayComponentRef; // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
          // lightbox can not be opened the second time.
          // Need to timeout so that the OPEN event is set before component is initialized

          setTimeout(function () {
            _this._applicationRef.attachView(overlayComponentRef.hostView);

            _this._applicationRef.attachView(componentRef.hostView);

            overlayComponentRef.onDestroy(function () {
              _this._applicationRef.detachView(overlayComponentRef.hostView);
            });
            componentRef.onDestroy(function () {
              _this._applicationRef.detachView(componentRef.hostView);
            });
            var containerElement = newOptions.containerElementResolver(_this._documentRef);
            containerElement.appendChild(overlayComponentRef.location.nativeElement);
            containerElement.appendChild(componentRef.location.nativeElement);
          });
        };

        Lightbox.prototype.close = function () {
          if (this._lightboxEvent) {
            this._lightboxEvent.broadcastLightboxEvent({
              id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE
            });
          }
        };

        Lightbox.prototype._createComponent = function (ComponentClass) {
          var factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);

          var component = factory.create(this._injector);
          return component;
        };

        Lightbox = __decorate([__param(5, core_1.Inject(common_1.DOCUMENT)), __metadata("design:paramtypes", [core_1.ComponentFactoryResolver, core_1.Injector, core_1.ApplicationRef, lightbox_config_service_1.LightboxConfig, lightbox_event_service_1.LightboxEvent, Object])], Lightbox);

        Lightbox.ɵfac = function Lightbox_Factory(t) {
          return new (t || Lightbox)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc1.LightboxConfig), ɵngcc0.ɵɵinject(ɵngcc2.LightboxEvent), ɵngcc0.ɵɵinject(common_1.DOCUMENT));
        };

        Lightbox.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: Lightbox,
          factory: function factory(t) {
            return Lightbox.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(Lightbox, [{
            type: core_1.Injectable
          }], function () {
            return [{
              type: ɵngcc0.ComponentFactoryResolver
            }, {
              type: ɵngcc0.Injector
            }, {
              type: ɵngcc0.ApplicationRef
            }, {
              type: ɵngcc1.LightboxConfig
            }, {
              type: ɵngcc2.LightboxEvent
            }, {
              type: Object,
              decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
              }]
            }];
          }, null);
        })();

        return Lightbox;
      }();

      exports.Lightbox = Lightbox; //# sourceMappingURL=lightbox.service.js.map

      /***/
    },

    /***/
    "bv9b":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js ***!
      \******************************************************************************/

    /*! exports provided: MAT_PROGRESS_BAR_LOCATION, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBar, MatProgressBarModule */

    /***/
    function bv9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function () {
        return MAT_PROGRESS_BAR_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function () {
        return MAT_PROGRESS_BAR_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBar", function () {
        return MatProgressBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function () {
        return MatProgressBarModule;
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


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatProgressBar.

      /** @docs-private */


      var _c0 = ["primaryValueBar"];

      var MatProgressBarBase = function MatProgressBarBase(_elementRef) {
        _classCallCheck(this, MatProgressBarBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressBarBase, 'primary');
      /**
       * Injection token used to provide the current location to `MatProgressBar`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-bar-location', {
        providedIn: 'root',
        factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** Counter used to generate unique IDs for progress bars. */


      var progressbarId = 0;
      /**
       * `<mat-progress-bar>` component.
       */

      var MatProgressBar = /*#__PURE__*/function (_MatProgressBarMixinB) {
        _inherits(MatProgressBar, _MatProgressBarMixinB);

        var _super = _createSuper(MatProgressBar);

        function MatProgressBar(_elementRef, _ngZone, _animationMode,
        /**
         * @deprecated `location` parameter to be made required.
         * @breaking-change 8.0.0
         */
        location) {
          var _this5;

          _classCallCheck(this, MatProgressBar);

          _this5 = _super.call(this, _elementRef);
          _this5._elementRef = _elementRef;
          _this5._ngZone = _ngZone;
          _this5._animationMode = _animationMode;
          /** Flag that indicates whether NoopAnimations mode is set to true. */

          _this5._isNoopAnimation = false;
          _this5._value = 0;
          _this5._bufferValue = 0;
          /**
           * Event emitted when animation of the primary progress bar completes. This event will not
           * be emitted when animations are disabled, nor will it be emitted for modes with continuous
           * animations (indeterminate and query).
           */

          _this5.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Reference to animation end subscription to be unsubscribed on destroy. */

          _this5._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
          /**
           * Mode of the progress bar.
           *
           * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
           * 'determinate'.
           * Mirrored to mode attribute.
           */

          _this5.mode = 'determinate';
          /** ID of the progress bar. */

          _this5.progressbarId = "mat-progress-bar-".concat(progressbarId++); // We need to prefix the SVG reference with the current path, otherwise they won't work
          // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
          // because named route URLs can contain parentheses (see #12338). Also we don't use since
          // we can't tell the difference between whether
          // the consumer is using the hash location strategy or not, because `Location` normalizes
          // both `/#/foo/bar` and `/foo/bar` to the same thing.

          var path = location ? location.getPathname().split('#')[0] : '';
          _this5._rectangleFillValue = "url('".concat(path, "#").concat(_this5.progressbarId, "')");
          _this5._isNoopAnimation = _animationMode === 'NoopAnimations';
          return _this5;
        }
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */


        _createClass(MatProgressBar, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v) {
            this._value = clamp(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v) || 0);
          }
          /** Buffer value of the progress bar. Defaults to zero. */

        }, {
          key: "bufferValue",
          get: function get() {
            return this._bufferValue;
          },
          set: function set(v) {
            this._bufferValue = clamp(v || 0);
          }
          /** Gets the current transform value for the progress bar's primary indicator. */

        }, {
          key: "_primaryTransform",
          value: function _primaryTransform() {
            // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
            var scale = this.value / 100;
            return {
              transform: "scale3d(".concat(scale, ", 1, 1)")
            };
          }
          /**
           * Gets the current transform value for the progress bar's buffer indicator. Only used if the
           * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
           */

        }, {
          key: "_bufferTransform",
          value: function _bufferTransform() {
            if (this.mode === 'buffer') {
              // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
              var scale = this.bufferValue / 100;
              return {
                transform: "scale3d(".concat(scale, ", 1, 1)")
              };
            }

            return null;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular(function () {
              var element = _this6._primaryValueBar.nativeElement;
              _this6._animationEndSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (e) {
                return e.target === element;
              })).subscribe(function () {
                if (_this6.mode === 'determinate' || _this6.mode === 'buffer') {
                  _this6._ngZone.run(function () {
                    return _this6.animationEnd.next({
                      value: _this6.value
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._animationEndSubscription.unsubscribe();
          }
        }]);

        return MatProgressBar;
      }(_MatProgressBarMixinBase);

      MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
        return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8));
      };

      MatProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressBar,
        selectors: [["mat-progress-bar"]],
        viewQuery: function MatProgressBar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
          }
        },
        hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-progress-bar"],
        hostVars: 4,
        hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          value: "value",
          bufferValue: "bufferValue"
        },
        outputs: {
          animationEnd: "animationEnd"
        },
        exportAs: ["matProgressBar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 4,
        consts: [["aria-hidden", "true"], ["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
        template: function MatProgressBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pattern", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.progressbarId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx._rectangleFillValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatProgressBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_BAR_LOCATION]
          }]
        }];
      };

      MatProgressBar.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bufferValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _primaryValueBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['primaryValueBar']
        }],
        animationEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-bar',
            exportAs: 'matProgressBar',
            host: {
              'role': 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              // set tab index to -1 so screen readers will read the aria-label
              // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
              'tabindex': '-1',
              '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
              '[attr.mode]': 'mode',
              'class': 'mat-progress-bar',
              '[class._mat-animation-noopable]': '_isNoopAnimation'
            },
            inputs: ['color'],
            template: "<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div aria-hidden=\"true\">\n  <svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n    <defs>\n      <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n        <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n      </pattern>\n    </defs>\n    <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n  </svg>\n  <!--\n    The background div is named as such because it appears below the other divs and is not sized based\n    on values.\n  -->\n  <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n  <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n  <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_BAR_LOCATION]
            }]
          }];
        }, {
          animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _primaryValueBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['primaryValueBar']
          }]
        });
      })();
      /** Clamps a value to be between two numbers, by default 0 and 100. */


      function clamp(v) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        return Math.max(min, Math.min(max, v));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressBarModule = function MatProgressBarModule() {
        _classCallCheck(this, MatProgressBarModule);
      };

      MatProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressBarModule
      });
      MatProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressBarModule_Factory(t) {
          return new (t || MatProgressBarModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressBarModule, {
          declarations: function declarations() {
            return [MatProgressBar];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressBar]
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
      //# sourceMappingURL=progress-bar.js.map

      /***/

    },

    /***/
    "m3o8":
    /*!*********************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/index.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function m3o8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var lightbox_service_1 = __webpack_require__(
      /*! ./lightbox.service */
      "b5fp");

      exports.Lightbox = lightbox_service_1.Lightbox;

      var lightbox_config_service_1 = __webpack_require__(
      /*! ./lightbox-config.service */
      "VlMW");

      exports.LightboxConfig = lightbox_config_service_1.LightboxConfig;

      var lightbox_event_service_1 = __webpack_require__(
      /*! ./lightbox-event.service */
      "rhsj");

      exports.LightboxEvent = lightbox_event_service_1.LightboxEvent;
      exports.LIGHTBOX_EVENT = lightbox_event_service_1.LIGHTBOX_EVENT;

      var lightbox_module_1 = __webpack_require__(
      /*! ./lightbox.module */
      "/IoE");

      exports.LightboxModule = lightbox_module_1.LightboxModule; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "oGf6":
    /*!**************************************************!*\
      !*** ./src/app/components/items/items.module.ts ***!
      \**************************************************/

    /*! exports provided: ItemsModule */

    /***/
    function oGf6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemsModule", function () {
        return ItemsModule;
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


      var _items_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./items-routing.module */
      "aAXh");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/UI/nodata/nodata.module */
      "Mhz7");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/UI/loader/loader.module */
      "UfAB");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _additem_additem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./additem/additem.component */
      "r3M5");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _viewitem_viewitem_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./viewitem/viewitem.component */
      "TdWn");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ngx-lightbox */
      "m3o8");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/UI/skeleton/gridskeleton/gridskeleton.module */
      "IgIN");
      /* harmony import */


      var src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/UI/item/item.module */
      "jXLk");
      /*
      Project : Cryptotrades
      FileName :  items.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to load module and component related to items
      */


      var ItemsModule = function ItemsModule() {
        _classCallCheck(this, ItemsModule);
      };

      ItemsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ItemsModule
      });
      ItemsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ItemsModule_Factory(t) {
          return new (t || ItemsModule)();
        },
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _items_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
          relativeTimeThresholdOptions: {
            'm': 59
          }
        }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"].forRoot(), ngx_lightbox__WEBPACK_IMPORTED_MODULE_18__["LightboxModule"], src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_19__["GridskeletonModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_20__["ItemModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemsModule, {
          declarations: [_additem_additem_component__WEBPACK_IMPORTED_MODULE_15__["AdditemComponent"], _viewitem_viewitem_component__WEBPACK_IMPORTED_MODULE_17__["ViewitemComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _items_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_18__["LightboxModule"], src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_19__["GridskeletonModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_20__["ItemModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _items_routing_module__WEBPACK_IMPORTED_MODULE_4__["ItemsRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"].forRoot({
              relativeTimeThresholdOptions: {
                'm': 59
              }
            }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_12__["LoaderModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"].forRoot(), ngx_lightbox__WEBPACK_IMPORTED_MODULE_18__["LightboxModule"], src_app_UI_skeleton_gridskeleton_gridskeleton_module__WEBPACK_IMPORTED_MODULE_19__["GridskeletonModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_20__["ItemModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_9__["NodataModule"]],
            declarations: [_additem_additem_component__WEBPACK_IMPORTED_MODULE_15__["AdditemComponent"], _viewitem_viewitem_component__WEBPACK_IMPORTED_MODULE_17__["ViewitemComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "r3M5":
    /*!***************************************************************!*\
      !*** ./src/app/components/items/additem/additem.component.ts ***!
      \***************************************************************/

    /*! exports provided: AdditemComponent */

    /***/
    function r3M5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdditemComponent", function () {
        return AdditemComponent;
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


      var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-file-upload */
      "7pIB");
      /* harmony import */


      var src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/constants/api */
      "6p9a");
      /* harmony import */


      var src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/constants/config */
      "E+pt");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../UI/loader/loader.component */
      "poLh");
      /*
      Project : Cryptotrades
      FileName :  additem.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component which show add and edit item screen for user
      */


      var _c0 = ["propertyModal"];
      var _c1 = ["levelModal"];
      var _c2 = ["statModal"];

      function AdditemComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r14._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.title);
        }
      }

      function AdditemComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Thumb Selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdditemComponent_div_44_Template_input_change_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.uploadThumb();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r1.thumbuploader);
        }
      }

      function AdditemComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_45_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.deleteThumb();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.mediaBase + "/images/item/thumb/" + ctx_r2.item_thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AdditemComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Media Selected");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdditemComponent_div_52_Template_input_change_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.uploadMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploader", ctx_r3.mediauploader);
        }
      }

      function AdditemComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_53_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.deleteMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.item_media);
        }
      }

      function AdditemComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_54_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.cancelMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.progress);
        }
      }

      function AdditemComponent_div_67_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_67_div_2_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var i_r27 = ctx.index;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r28.propertyItemClose(i_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.name);
        }
      }

      function AdditemComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdditemComponent_div_67_div_2_Template, 8, 2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.attributes);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          "width": a0
        };
      };

      function AdditemComponent_div_80_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_80_div_2_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var i_r32 = ctx.index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r33.levelItemClose(i_r32);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r31.name, " (", item_r31.value, "/", item_r31.valueof, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r31.value / item_r31.valueof * 100 + "%"));
        }
      }

      function AdditemComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdditemComponent_div_80_div_2_Template, 8, 6, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.levels);
        }
      }

      function AdditemComponent_div_93_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_div_93_div_2_Template_div_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var i_r37 = ctx.index;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.statItemClose(i_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r36.value, " of ", item_r36.valueof, "");
        }
      }

      function AdditemComponent_div_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdditemComponent_div_93_div_2_Template, 8, 3, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.stats);
        }
      }

      function AdditemComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.button_title);
        }
      }

      function AdditemComponent_app_loader_195_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      var AdditemComponent = /*#__PURE__*/function () {
        function AdditemComponent(formbuilder, snackBar, userService, itemService, router, route) {
          var _this7 = this;

          _classCallCheck(this, AdditemComponent);

          this.formbuilder = formbuilder;
          this.snackBar = snackBar;
          this.userService = userService;
          this.itemService = itemService;
          this.router = router;
          this.route = route;
          this.propertyModalType = "";
          this.propertyModalName = "";
          this.levelModalValue = "";
          this.levelModalValueOf = "";
          this.levelModalName = "";
          this.statModalValue = "";
          this.statModalValueOf = "";
          this.statModalName = "";
          this.mediaBase = src_app_constants_config__WEBPACK_IMPORTED_MODULE_4__["config"].media_path;
          this.page_title = "Add Your Item";
          this.button_title = "Save";
          this.spinner = false;
          this.collectionID = '';
          this.itemID = '';
          this.thumbname = '';
          this.item_thumb = '';
          this.medianame = '';
          this.item_media = '';
          this.is_media_uploading = false;
          this.progress = 0;
          this.categories = [];
          this.attributes = [];
          this.stats = [];
          this.levels = [];
          /**
           * This is the function which used to retreive category list from api
           */

          this.categoryList = function () {
            _this7.itemService.categoryList().subscribe(function (result) {
              _this7.categories = result.tempArray;
            });
          };
          /**
           * This is the function which used to retreive item detail from api
           */


          this.getItemInfo = function () {
            _this7.spinner = true;

            _this7.itemService.listItem({
              page: 1,
              type: 'view',
              item_id: _this7.itemID
            }).subscribe(function (result) {
              if (result.status == true) {
                _this7.itemInfo = result.tempArray[0];
                _this7.collectionID = _this7.itemInfo.collection_id._id;

                _this7.itemForm.controls.name.setValue(_this7.itemInfo.name);

                _this7.itemForm.controls.category_id.setValue(_this7.itemInfo.category_id._id);

                _this7.itemForm.controls.description.setValue(_this7.itemInfo.description);

                _this7.itemForm.controls.price.setValue(_this7.itemInfo.price);

                _this7.itemForm.controls.external_link.setValue(_this7.itemInfo.external_link);

                _this7.itemForm.controls.thumb.setValue(_this7.itemInfo.thumb);

                _this7.item_thumb = _this7.itemInfo.thumb;

                _this7.itemForm.controls.media.setValue(_this7.itemInfo.media);

                _this7.item_media = _this7.itemInfo.media;
                _this7.attributes = _this7.itemInfo.attributes;
                _this7.levels = _this7.itemInfo.levels;
                _this7.stats = _this7.itemInfo.stats;

                _this7.itemForm.controls.unlock_content_url.setValue(_this7.itemInfo.unlock_content_url);
              }

              _this7.spinner = false;
            });
          };
          /**
           * This is the function which used to update item through api
           */


          this.updateItemApi = function (params) {
            _this7.itemService.updateItem(params).subscribe(function (result) {
              if (result.status == true) {
                _this7.router.navigate(['collection/view/' + result.result.collection_id]);
              }

              _this7.spinner = false;

              _this7.snackBar.open(result.message, "", {
                duration: 2000
              });
            });
          };
          /**
           * This is the function which used to create item through api
           */


          this.itemCreateApi = function (params) {
            _this7.itemService.addItem(params).subscribe(function (result) {
              if (result.status == true) {
                _this7.router.navigate(['collection/view/' + result.result.collection_id]);
              }

              _this7.spinner = false;

              _this7.snackBar.open(result.message, "", {
                duration: 2000
              });
            });
          };
          /**
           * This is the function which initiate thumb upload on image change
           */


          this.uploadThumb = function () {
            _this7.spinner = true;

            _this7.thumbuploader.uploadAll();
          };
          /**
           * This is the function which initiate medai upload on change
           */


          this.uploadMedia = function () {
            _this7.progress = 0;
            _this7.is_media_uploading = true;

            _this7.mediauploader.uploadAll();
          };
          /**
           * This is the function which remove thumb from screen
           */


          this.deleteThumb = function () {
            _this7.item_thumb = "";

            _this7.itemForm.controls.thumb.setValue("");
          };
          /**
           * This is the function which remove media from screen
           */


          this.deleteMedia = function () {
            _this7.item_media = "";

            _this7.itemForm.controls.media.setValue("");
          };
          /**
           * This is the function which used to update property on submit
           */


          this.propertyAction = function () {
            if (_this7.propertyModalName.trim().length > 0 && _this7.propertyModalType.trim().length > 0) {
              _this7.attributes.push({
                type: _this7.propertyModalType,
                name: _this7.propertyModalName
              });

              _this7.propertyModalType = "";
              _this7.propertyModalName = "";

              _this7.propertyModal.hide();
            } else {
              _this7.snackBar.open('Type and Name is required', "", {
                duration: 2000
              });
            }
          };
          /**
           * This is the function which used to close property modal
           */


          this.propertyItemClose = function (index) {
            _this7.attributes.splice(index, 1);
          };
          /**
           * This is the function which used to close level modal
           */


          this.levelItemClose = function (index) {
            _this7.levels.splice(index, 1);
          };
          /**
           * This is the function which used to update level on submit
           */


          this.levelAction = function () {
            if (_this7.levelModalName.trim().length > 0 && _this7.levelModalValue <= _this7.levelModalValueOf) {
              _this7.levels.push({
                name: _this7.levelModalName,
                value: _this7.levelModalValue,
                valueof: _this7.levelModalValueOf
              });

              _this7.levelModalValueOf = "";
              _this7.levelModalValue = "";
              _this7.levelModalName = "";

              _this7.levelModal.hide();
            } else {
              _this7.snackBar.open('Name and Value is invalid', "", {
                duration: 2000
              });
            }
          };
          /**
           * This is the function which used to update stat on submit
           */


          this.statAction = function () {
            if (_this7.statModalName.trim().length > 0 && _this7.statModalValue <= _this7.statModalValueOf) {
              _this7.stats.push({
                name: _this7.statModalName,
                value: _this7.statModalValue,
                valueof: _this7.statModalValueOf
              });

              _this7.statModalValueOf = "";
              _this7.statModalValue = "";
              _this7.statModalName = "";

              _this7.statModal.hide();
            } else {
              _this7.snackBar.open('Name and Value is invalid', "", {
                duration: 2000
              });
            }
          };
          /**
           * This is the function which used to close stat modal
           */


          this.statItemClose = function (index) {
            _this7.stats.splice(index, 1);
          };

          this.levelModal = this.statModal = this.propertyModal = this.subscription;
          this.currentUser = this.userService.getUser();
          var urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
          this.itemForm = formbuilder.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)])],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(1000)])],
            'external_link': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(urlRegex)])],
            'category_id': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'price': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]+(.[0-9]{0,5})?$")])],
            'thumb': [""],
            'media': [""],
            'unlock_content_url': ["true"]
          });
          var that = this;
          this.thumbuploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__["API"].base_url + '/media/itemthumb',
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

          this.thumbuploader.onBuildItemForm = function (fileItem, form) {};

          this.thumbuploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.thumbuploader.onAfterAddingFile = function (file) {
            console.log("file is ", file);
            var ext = file.file.type == "image/png" ? ".png" : ".jpg";
            _this7.thumbname = _this7.currentUser.username + "_" + new Date().getTime() + ext;
            file.file.name = _this7.thumbname;
          };

          this.thumbuploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item);
            console.log('Item');
            _this7.item_thumb = _this7.thumbname;

            _this7.itemForm.controls.thumb.setValue(_this7.item_thumb);

            var that = _this7;
            setTimeout(function () {
              that.spinner = false;
            }, 1000);
          };

          this.thumbuploader.onWhenAddingFileFailed = function (item) {
            var that = _this7;
            setTimeout(function () {
              that.spinner = false;
            }, 1000);

            _this7.snackBar.open("Uploaded file should be JPEG/PNG", "", {
              duration: 2000
            });
          };

          this.mediauploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: src_app_constants_api__WEBPACK_IMPORTED_MODULE_3__["API"].base_url + '/media/itemmedia',
            allowedMimeType: ['image/png', 'image/jpeg', 'video/mp4', 'image/gif', 'image/svg+xml', 'audio/webm', 'video/webm', 'audio/mp3', 'audio/wav', 'audio/ogg', 'video/ogg'],
            autoUpload: false,
            isHTML5: true,
            queueLimit: 1000,
            removeAfterUpload: false,
            maxFileSize: 100 * 1024 * 1024,
            headers: [{
              name: 'X-Requested-With',
              value: 'XMLHttpRequest'
            }]
          });

          this.mediauploader.onBuildItemForm = function (fileItem, form) {};

          this.mediauploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
          };

          this.mediauploader.onAfterAddingFile = function (file) {
            console.log("file is ", file);
            var ext;

            if (file.file.type == "image/png") {
              ext = ".png";
            } else if (file.file.type == "image/jpeg") {
              ext = ".jpg";
            } else if (file.file.type == "video/mp4") {
              ext = ".mp4";
            } else if (file.file.type == "image/gif") {
              ext = ".gif";
            } else if (file.file.type == "image/svg+xml") {
              ext = ".svg";
            } else if (file.file.type == "audio/webm") {
              ext = ".webm";
            } else if (file.file.type == "video/webm") {
              ext = ".webm";
            } else if (file.file.type == "audio/mp3") {
              ext = ".mp3";
            } else if (file.file.type == "audio/wav") {
              ext = ".wav";
            } else if (file.file.type == "audio/ogg") {
              ext = ".ogg";
            } else if (file.file.type == "video/ogg") {
              ext = ".ogg";
            }

            _this7.medianame = _this7.currentUser.username + "_" + new Date().getTime() + ext;
            file.file.name = _this7.medianame;
          };

          this.mediauploader.onCompleteItem = function (item, response, status, headers) {
            console.log(item);
            console.log('Item');
            _this7.is_media_uploading = false;
            _this7.progress = 0;
            _this7.item_media = _this7.medianame;

            _this7.itemForm.controls.media.setValue(_this7.item_media);
          };

          this.mediauploader.onWhenAddingFileFailed = function (item) {
            setTimeout(function () {
              that.is_media_uploading = false;
              that.progress = 0;
            }, 1000);
            that.snackBar.open("Uploaded file error", "", {
              duration: 2000
            });
          };

          this.mediauploader.onProgressItem = function (progress) {
            _this7.progress = progress['progress'];
            console.log(progress['progress']);
          };

          this.categoryList();
        }

        _createClass(AdditemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.subscription = this.route.params.subscribe(function (params) {
              var url = _this8.router.url.split("/");

              console.log(url);

              if (url[2] == 'add') {
                if (params.id) {
                  _this8.collectionID = params.id;
                }
              } else {
                if (params.id) {
                  _this8.itemID = params.id;
                  _this8.page_title = "Update Your Item";
                  _this8.button_title = "Update";

                  _this8.getItemInfo();
                } else {
                  _this8.itemID = "";
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * This is the function which used to create item with validation
           */

        }, {
          key: "onSubmit",
          value: function onSubmit(formData) {
            if (this.itemForm.valid) {
              if (this.item_thumb == '') {
                this.snackBar.open('Item thumb logo is required', "", {
                  duration: 2000
                });
                return;
              }

              if (this.item_media == '') {
                this.snackBar.open('Item Media is required', "", {
                  duration: 2000
                });
                return;
              }

              this.spinner = true;

              if (this.itemID != "") {
                this.updateItemApi({
                  name: formData.value.name,
                  description: formData.value.description,
                  price: formData.value.price,
                  external_link: formData.value.external_link,
                  media: formData.value.media,
                  thumb: formData.value.thumb,
                  stats: this.stats,
                  attributes: this.attributes,
                  levels: this.levels,
                  category_id: formData.value.category_id,
                  collection_id: this.collectionID,
                  unlock_content_url: formData.value.unlock_content_url,
                  item_id: this.itemID
                });
              } else {
                this.itemCreateApi({
                  name: formData.value.name,
                  description: formData.value.description,
                  price: formData.value.price,
                  external_link: formData.value.external_link,
                  media: formData.value.media,
                  thumb: formData.value.thumb,
                  stats: this.stats,
                  attributes: this.attributes,
                  levels: this.levels,
                  category_id: formData.value.category_id,
                  collection_id: this.collectionID,
                  unlock_content_url: formData.value.unlock_content_url
                });
              }
            } else {
              if (this.itemForm.controls.name.invalid) {
                if (this.itemForm.controls.name.errors) {
                  if (this.itemForm.controls.name.errors.required) {
                    this.snackBar.open('Name is required', "", {
                      duration: 2000
                    });
                  } else if (this.itemForm.controls.name.errors.minlength) {
                    this.snackBar.open('Name required minimum 3 characters', "", {
                      duration: 2000
                    });
                  } else if (this.itemForm.controls.name.errors.maxlength) {
                    this.snackBar.open('Name required maximum 255 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.itemForm.controls.description.invalid) {
                if (this.itemForm.controls.description.errors) {
                  if (this.itemForm.controls.description.errors.required) {
                    this.snackBar.open('Description is required', "", {
                      duration: 2000
                    });
                  } else {
                    this.snackBar.open('Description should be between 3 to 1000 characters', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.itemForm.controls.price.invalid) {
                if (this.itemForm.controls.price.errors) {
                  if (this.itemForm.controls.price.errors.required) {
                    this.snackBar.open('Price is required', "", {
                      duration: 2000
                    });
                  } else {
                    this.snackBar.open('Price should be numeric', "", {
                      duration: 2000
                    });
                  }
                }
              } else if (this.itemForm.controls.external_link.invalid) {
                if (this.itemForm.controls.external_link.errors) {
                  if (this.itemForm.controls.external_link.errors.required) {
                    this.snackBar.open('Link is required', "", {
                      duration: 2000
                    });
                  } else {
                    this.snackBar.open('Link format is wrong', "", {
                      duration: 2000
                    });
                  }
                }
              }
            }
          }
          /**
           * This is the function which used to cancel media file at the time of upload
           */

        }, {
          key: "cancelMedia",
          value: function cancelMedia() {
            this.is_media_uploading = true;
            this.progress = 0;
            this.mediauploader.cancelAll();
          }
        }]);

        return AdditemComponent;
      }();

      AdditemComponent.ɵfac = function AdditemComponent_Factory(t) {
        return new (t || AdditemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
      };

      AdditemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdditemComponent,
        selectors: [["app-additem"]],
        viewQuery: function AdditemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.propertyModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.levelModal = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statModal = _t.first);
          }
        },
        decls: 196,
        vars: 21,
        consts: [[1, "appContainer"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "name"], ["type", "text", "placeholder", "Enter Name", "formControlName", "name", "required", "", 1, "form-control"], ["for", "video_type"], ["formControlName", "category_id", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["placeholder", "Enter Description", "formControlName", "description", 1, "form-control"], ["for", "price"], ["type", "text", "placeholder", "Enter Price", "formControlName", "price", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter External Link", "formControlName", "external_link", "required", "", 1, "form-control"], ["for", "email"], [1, "image-help-block"], ["class", "preview_empty_container", 4, "ngIf"], ["class", "image_preview", 4, "ngIf"], ["class", "media_progress_cotainer", 4, "ngIf"], [1, "listContainer"], [1, "listContainerHeader"], [1, "listContainerIcon"], [1, "cil-list-rich"], [1, "listContainerHeaderTitle"], [1, "listContainerHeaderSubTitle"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "cil-plus"], ["class", "listContainerContent", 4, "ngIf"], [1, "cil-star"], [1, "cil-chart"], ["for", "inline-radios", 1, "col-form-label"], [1, "col-form-label"], ["id", "inline-radios", 1, "form-check", "form-check-inline", "mr-1"], ["type", "radio", "formControlName", "unlock_content_url", "id", "inlineRadio1", "value", "true", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], [1, "form-check", "form-check-inline", "mr-1"], ["type", "radio", "formControlName", "unlock_content_url", "id", "inlineRadio2", "value", "false", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], ["class", "row", 4, "ngIf"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["propertyModal", "bs-modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["for", "type"], ["type", "text", "placeholder", "Character", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Male", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["levelModal", "bs-modal"], ["type", "text", "placeholder", "Speed", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-5"], ["type", "number", "placeholder", "5", "min", "0", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], [1, "levelSeparater"], ["type", "number", "placeholder", "100", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["statModal", "bs-modal"], [4, "ngIf"], [3, "value"], [1, "preview_empty_container"], [1, "preview_empty_container_img"], [1, "cil-image"], [1, "uploader_btn_container"], ["mat-menu-item", "", "type", "button", 1, "btn", "btn-primary"], [1, "cil-image-plus"], ["type", "file", "ng2FileSelect", "", "single", "", 3, "uploader", "change"], [1, "image_preview"], [3, "src"], [1, "image_preview_close", 3, "click"], [1, "cil-note-add"], [1, "media_progress_cotainer"], ["mat-menu-item", "", 1, "media_progress_cotainer_close", 3, "click"], [1, "icon-close"], [1, "listContainerContent"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "attributes_list"], [1, "closelist", 3, "click"], [1, "cil-x"], [1, "level_progress"], [1, "level_progress_value", 3, "ngStyle"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "px-4"]],
        template: function AdditemComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdditemComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit(ctx.itemForm);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Category ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdditemComponent_option_22_Template, 2, 2, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "External Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Item Thumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "This image will also be used for navigation. 350 x 350 recommended.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdditemComponent_div_44_Template, 11, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AdditemComponent_div_45_Template, 4, 1, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Item Media");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG. Max size: 100 MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AdditemComponent_div_52_Template, 11, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AdditemComponent_div_53_Template, 7, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AdditemComponent_div_54_Template, 4, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Properties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Textual traits that show up as rectangles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_65_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);

              return _r10.show();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AdditemComponent_div_67_Template, 3, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Levels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Numerical traits that show as a progress bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_78_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](134);

              return _r11.show();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AdditemComponent_div_80_Template, 3, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Numerical traits that just show as numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_91_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](165);

              return _r12.show();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AdditemComponent_div_93_Template, 3, 1, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Show Media For All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "True");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "False");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AdditemComponent_div_108_Template, 4, 1, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47, 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Add Property");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_116_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);

              return _r10.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_123_listener($event) {
              return ctx.propertyModalType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_127_listener($event) {
              return ctx.propertyModalName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_129_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](110);

              return _r10.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_131_listener() {
              return ctx.propertyAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47, 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Add Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_140_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](134);

              return _r11.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "input", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_147_listener($event) {
              return ctx.levelModalName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "input", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_153_listener($event) {
              return ctx.levelModalValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " / ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_158_listener($event) {
              return ctx.levelModalValueOf = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_160_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](134);

              return _r11.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_162_listener() {
              return ctx.levelAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 47, 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h4", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Add Stat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_171_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](165);

              return _r12.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "input", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_178_listener($event) {
              return ctx.statModalName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_184_listener($event) {
              return ctx.statModalValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " / ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "input", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_189_listener($event) {
              return ctx.statModalValueOf = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_191_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

              var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](165);

              return _r12.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_193_listener() {
              return ctx.statAction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, AdditemComponent_app_loader_195_Template, 1, 0, "app-loader", 69);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.page_title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.itemForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item_thumb == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item_thumb != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item_media == "" && !ctx.is_media_uploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item_media != "" && !ctx.is_media_uploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_media_uploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributes.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levels.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stats.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.is_media_uploading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propertyModalType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.propertyModalName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.levelModalName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.levelModalValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.levelModalValueOf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.statModalName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.statModalValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.statModalValueOf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _UI_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"]],
        styles: [".appContainer[_ngcontent-%COMP%] {margin:88px 0 0;}\n.image-help-block[_ngcontent-%COMP%] {font-size: 12px; color: #999;}\n@media (min-width: 992px) {\n    .appContainer[_ngcontent-%COMP%] {margin:103px 0 0;}\n}\n.preview_empty_container[_ngcontent-%COMP%] {border:1px solid #ccc; text-align: center; height: 200px; position: relative; display: flex; justify-content: center; flex: 1; align-items: center; flex-direction: column; background-color: #e7e7e7;}\n.preview_empty_container_img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {font-size: 50px; color: #999;}\n.uploader_btn_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {position: relative;}\n.uploader_btn_container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {margin-right: 5px; position: relative; top: 1px;}\ninput[type=\"file\"][_ngcontent-%COMP%]::before {content:\" \";display:inline-block;width:100%;position:absolute;height:100%;top:0;left:0;cursor:pointer;}\ninput[type=\"file\"][_ngcontent-%COMP%] {opacity: 0; position: absolute; width: 100%; height: 35px; top:0;left:0;}\n.image_preview[_ngcontent-%COMP%] {border:1px solid #ccc; position: relative; height: 200px; background-color: #e7e7e7;}\n.image_preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%; height: 200px; -o-object-fit: cover; object-fit: cover;}\n.image_preview_close[_ngcontent-%COMP%] {background-color: red; border: 0 none; color: #fff; position: absolute; right: 0; top:0; text-transform: uppercase; font-size: 12px;}\n.listContainer[_ngcontent-%COMP%] {border-bottom: 1px solid #e7e7e7;}\n.listContainerHeader[_ngcontent-%COMP%] {position: relative; padding-left: 23px; padding-right: 60px; padding-bottom: 15px;}\n.listContainerHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {margin: 0;}\n.listContainerHeaderSubTitle[_ngcontent-%COMP%] {color: #999;}\n.listContainerIcon[_ngcontent-%COMP%] {position: absolute; left: 0; top:4px;}\n.listContainerHeader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {position: absolute; right: 0; top: 3px;}\n.media_progress_cotainer[_ngcontent-%COMP%] {position: relative; padding-right: 50px; padding-top: 22px; margin: 0 0 30px;}\n.media_progress_cotainer_close[_ngcontent-%COMP%] {position: absolute; right:0; top:0; background: transparent; border: 0 none; width: 50px; height: 50px; padding: 0; margin: 0;}\n.media_progress_cotainer_close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {    margin: 0 !important; padding: 0 !important; width: 50px; height: 50px; font-size: 24px; line-height: 50px; text-align: center;}\n.attributes_list[_ngcontent-%COMP%] {border:1px solid #ccc; background-color: #e7e7e7; padding: 25px 15px; text-align: center; margin: 0 0 15px; position: relative;}\n.attributes_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .attributes_list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {display: block; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}\n.attributes_list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {font-size: 16px; margin: 10px 0 0;}\n.attributes_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {color: #999;}\n.closelist[_ngcontent-%COMP%] {position: absolute; width: 25px; height: 25px; text-align: center; line-height: 25px; background-color: red; right:0; top:0; color: #fff; cursor: pointer;}\n.closelist[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {height: 25px; line-height: 25px;}\n.levelSeparater[_ngcontent-%COMP%] {text-align: center; font-size: 24px; line-height: 30px;}\n.level_progress[_ngcontent-%COMP%] {background-color: #ccc; border-radius: 10px; height: 13px;}\n.level_progress_value[_ngcontent-%COMP%] {background-color: green;  height: 13px; border-radius: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLGVBQWUsQ0FBQztBQUMvQixtQkFBbUIsZUFBZSxFQUFFLFdBQVcsQ0FBQztBQUNoRDtJQUNJLGVBQWUsZ0JBQWdCLENBQUM7QUFDcEM7QUFDQSwwQkFBMEIscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUseUJBQXlCLENBQUM7QUFDaE8sZ0NBQWdDLGVBQWUsRUFBRSxXQUFXLENBQUM7QUFDN0QsZ0NBQWdDLGtCQUFrQixDQUFDO0FBQ25ELGtDQUFrQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUM7QUFDbEYsNEJBQTRCLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO0FBQ2xJLG9CQUFvQixVQUFVLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzVGLGdCQUFnQixxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUseUJBQXlCLENBQUM7QUFDcEcsb0JBQW9CLFdBQVcsRUFBRSxhQUFhLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixDQUFDO0FBQ2xFLHNCQUFzQixxQkFBcUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxDQUFDO0FBQzFKLGdCQUFnQixnQ0FBZ0MsQ0FBQztBQUNqRCxzQkFBc0Isa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUM7QUFDeEcsd0JBQXdCLFNBQVMsQ0FBQztBQUNsQyw4QkFBOEIsV0FBVyxDQUFDO0FBQzFDLG9CQUFvQixrQkFBa0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0FBQ3pELDZCQUE2QixrQkFBa0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0FBRXBFLDBCQUEwQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQztBQUN2RyxnQ0FBZ0Msa0JBQWtCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0FBQzlKLHNDQUFzQyxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztBQUVySyxrQkFBa0IscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7QUFDakosK0NBQStDLGNBQWMsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQztBQUMxSix1QkFBdUIsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0FBQ3pELHdCQUF3QixXQUFXLENBQUM7QUFDcEMsWUFBWSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztBQUN0SyxjQUFjLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztBQUM5QyxpQkFBaUIsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO0FBQ3hFLGlCQUFpQixzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLENBQUM7QUFDM0UsdUJBQXVCLHVCQUF1QixHQUFHLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyIsImZpbGUiOiJhZGRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwQ29udGFpbmVyIHttYXJnaW46ODhweCAwIDA7fVxuLmltYWdlLWhlbHAtYmxvY2sge2ZvbnQtc2l6ZTogMTJweDsgY29sb3I6ICM5OTk7fVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmFwcENvbnRhaW5lciB7bWFyZ2luOjEwM3B4IDAgMDt9XG59XG4ucHJldmlld19lbXB0eV9jb250YWluZXIge2JvcmRlcjoxcHggc29saWQgI2NjYzsgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDIwMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4OiAxOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O31cbi5wcmV2aWV3X2VtcHR5X2NvbnRhaW5lcl9pbWcgaSB7Zm9udC1zaXplOiA1MHB4OyBjb2xvcjogIzk5OTt9XG4udXBsb2FkZXJfYnRuX2NvbnRhaW5lciBidXR0b24ge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4udXBsb2FkZXJfYnRuX2NvbnRhaW5lciBidXR0b24gaSB7bWFyZ2luLXJpZ2h0OiA1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAxcHg7fVxuaW5wdXRbdHlwZT1cImZpbGVcIl06OmJlZm9yZSB7Y29udGVudDpcIiBcIjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjt9XG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7b3BhY2l0eTogMDsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAzNXB4OyB0b3A6MDtsZWZ0OjA7fVxuLmltYWdlX3ByZXZpZXcge2JvcmRlcjoxcHggc29saWQgI2NjYzsgcG9zaXRpb246IHJlbGF0aXZlOyBoZWlnaHQ6IDIwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O31cbi5pbWFnZV9wcmV2aWV3IGltZyB7d2lkdGg6IDEwMCU7IGhlaWdodDogMjAwcHg7IG9iamVjdC1maXQ6IGNvdmVyO31cbi5pbWFnZV9wcmV2aWV3X2Nsb3NlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IGJvcmRlcjogMCBub25lOyBjb2xvcjogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjA7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGZvbnQtc2l6ZTogMTJweDt9XG4ubGlzdENvbnRhaW5lciB7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7fVxuLmxpc3RDb250YWluZXJIZWFkZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1sZWZ0OiAyM3B4OyBwYWRkaW5nLXJpZ2h0OiA2MHB4OyBwYWRkaW5nLWJvdHRvbTogMTVweDt9XG4ubGlzdENvbnRhaW5lckhlYWRlciBwIHttYXJnaW46IDA7fVxuLmxpc3RDb250YWluZXJIZWFkZXJTdWJUaXRsZSB7Y29sb3I6ICM5OTk7fVxuLmxpc3RDb250YWluZXJJY29uIHtwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDo0cHg7fVxuLmxpc3RDb250YWluZXJIZWFkZXIgYnV0dG9uIHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwOyB0b3A6IDNweDt9XG5cbi5tZWRpYV9wcm9ncmVzc19jb3RhaW5lciB7cG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLXJpZ2h0OiA1MHB4OyBwYWRkaW5nLXRvcDogMjJweDsgbWFyZ2luOiAwIDAgMzBweDt9XG4ubWVkaWFfcHJvZ3Jlc3NfY290YWluZXJfY2xvc2Uge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6MDsgdG9wOjA7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IDAgbm9uZTsgd2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDsgcGFkZGluZzogMDsgbWFyZ2luOiAwO30gXG4ubWVkaWFfcHJvZ3Jlc3NfY290YWluZXJfY2xvc2UgaSB7ICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDUwcHg7IHRleHQtYWxpZ246IGNlbnRlcjt9XG5cbi5hdHRyaWJ1dGVzX2xpc3Qge2JvcmRlcjoxcHggc29saWQgI2NjYzsgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzsgcGFkZGluZzogMjVweCAxNXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMCAwIDE1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTt9XG4uYXR0cmlidXRlc19saXN0IGxhYmVsLCAuYXR0cmlidXRlc19saXN0IHNwYW4ge2Rpc3BsYXk6IGJsb2NrOyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7fSBcbi5hdHRyaWJ1dGVzX2xpc3Qgc3BhbiB7Zm9udC1zaXplOiAxNnB4OyBtYXJnaW46IDEwcHggMCAwO31cbi5hdHRyaWJ1dGVzX2xpc3QgbGFiZWwge2NvbG9yOiAjOTk5O31cbi5jbG9zZWxpc3Qge3Bvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDI1cHg7IGhlaWdodDogMjVweDsgdGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogMjVweDsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyByaWdodDowOyB0b3A6MDsgY29sb3I6ICNmZmY7IGN1cnNvcjogcG9pbnRlcjt9XG4uY2xvc2VsaXN0IGkge2hlaWdodDogMjVweDsgbGluZS1oZWlnaHQ6IDI1cHg7fVxuLmxldmVsU2VwYXJhdGVyIHt0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7fVxuLmxldmVsX3Byb2dyZXNzIHtiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyBib3JkZXItcmFkaXVzOiAxMHB4OyBoZWlnaHQ6IDEzcHg7fVxuLmxldmVsX3Byb2dyZXNzX3ZhbHVlIHtiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgIGhlaWdodDogMTNweDsgYm9yZGVyLXJhZGl1czogMTBweDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdditemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-additem',
            templateUrl: './additem.component.html',
            styleUrls: ['./additem.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }];
        }, {
          propertyModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['propertyModal']
          }],
          levelModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['levelModal']
          }],
          statModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['statModal']
          }]
        });
      })();
      /***/

    },

    /***/
    "rhsj":
    /*!**************************************************************************!*\
      !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js ***!
      \**************************************************************************/

    /*! no static exports found */

    /***/
    function rhsj(module, exports, __webpack_require__) {
      "use strict";

      var ɵngcc0 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      exports.LIGHTBOX_EVENT = {
        CHANGE_PAGE: 1,
        CLOSE: 2,
        OPEN: 3,
        ZOOM_IN: 4,
        ZOOM_OUT: 5,
        ROTATE_LEFT: 6,
        ROTATE_RIGHT: 7
      };

      var LightboxEvent =
      /** @class */
      function () {
        function LightboxEvent() {
          this._lightboxEventSource = new rxjs_1.Subject();
          this.lightboxEvent$ = this._lightboxEventSource.asObservable();
        }

        LightboxEvent.prototype.broadcastLightboxEvent = function (event) {
          this._lightboxEventSource.next(event);
        };

        LightboxEvent = __decorate([__metadata("design:paramtypes", [])], LightboxEvent);

        LightboxEvent.ɵfac = function LightboxEvent_Factory(t) {
          return new (t || LightboxEvent)();
        };

        LightboxEvent.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: LightboxEvent,
          factory: function factory(t) {
            return LightboxEvent.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxEvent, [{
            type: core_1.Injectable
          }], function () {
            return [];
          }, null);
        })();

        return LightboxEvent;
      }();

      exports.LightboxEvent = LightboxEvent;

      function getWindow() {
        return window;
      }

      var LightboxWindowRef =
      /** @class */
      function () {
        function LightboxWindowRef() {}

        Object.defineProperty(LightboxWindowRef.prototype, "nativeWindow", {
          get: function get() {
            return getWindow();
          },
          enumerable: true,
          configurable: true
        });

        LightboxWindowRef.ɵfac = function LightboxWindowRef_Factory(t) {
          return new (t || LightboxWindowRef)();
        };

        LightboxWindowRef.ɵprov = ɵngcc0.ɵɵdefineInjectable({
          token: LightboxWindowRef,
          factory: function factory(t) {
            return LightboxWindowRef.ɵfac(t);
          }
        });
        /*@__PURE__*/

        (function () {
          ɵngcc0.ɵsetClassMetadata(LightboxWindowRef, [{
            type: core_1.Injectable
          }], function () {
            return [];
          }, null);
        })();

        return LightboxWindowRef;
      }();

      exports.LightboxWindowRef = LightboxWindowRef; //# sourceMappingURL=lightbox-event.service.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=components-items-items-module-es5.js.map