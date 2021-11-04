(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-profile-profile-module"], {
    /***/
    "/OxV":
    /*!*********************************************************************!*\
      !*** ./src/app/components/profile/collected/collected.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CollectedComponent */

    /***/
    function OxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectedComponent", function () {
        return CollectedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../UI/skeleton/itemskeleton/itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../UI/nodata/nodata.component */
      "he+D");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../UI/item/item.component */
      "xyAo");
      /*
      Project : Cryptotrades
      FileName :  collected.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show collected item in user profile
      */


      function CollectedComponent_app_itemskeleton_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
        }
      }

      function CollectedComponent_app_nodata_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 5);
        }
      }

      function CollectedComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function CollectedComponent_div_4_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function CollectedComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectedComponent_div_4_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
        }
      }

      var CollectedComponent = /*#__PURE__*/function () {
        function CollectedComponent(userService, router, itemService) {
          var _this = this;

          _classCallCheck(this, CollectedComponent);

          this.userService = userService;
          this.router = router;
          this.itemService = itemService;
          this.items = [];
          this.page = 1;
          this.isApiLoading = false;
          this.loading = true;
          this.keyword = "";
          this.searchInput = "";
          /**
           * This is the function which used to retrieve collected item list on api
           */

          this.getItemList = function () {
            _this.isApiLoading = true;
            var params = {
              page: _this.page,
              type: 'collected',
              user_id: _this.currentUserID,
              keyword: _this.keyword
            };
            console.log("jeyakumar ", _this.page);

            _this.itemService.listItem(params).subscribe(function (result) {
              _this.isApiLoading = false;
              console.log(result);

              if (result.status == true) {
                if (_this.page == 1) {
                  _this.items = result.tempArray;
                } else {
                  for (var index = 0; index < result.tempArray.length; index++) {
                    var element = result.tempArray[index];

                    _this.items.push(element);
                  }
                }
              }

              _this.loading = false;
            });
          };
          /**
           * This is the function which used to retrieve collected item list on page scroll
           */


          this.onNextPage = function () {
            if (_this.loading == true && _this.isApiLoading == true) {
              return;
            }

            _this.page = _this.page + 1;

            _this.getItemList();
          };
          /**
           * This is the output function which used to navigate user to item detail page
           */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this.router.navigate(['/item/view/' + event.item._id]);
            }
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(CollectedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            this.currentUserID = url.replace('/collected', '').split("/").pop();
            this.items = [];
            this.page = 1;
            this.getItemList();
            console.log("page reached");
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return CollectedComponent;
      }();

      CollectedComponent.ɵfac = function CollectedComponent_Factory(t) {
        return new (t || CollectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]));
      };

      CollectedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CollectedComponent,
        selectors: [["app-collected"]],
        decls: 5,
        vars: 5,
        consts: [["infiniteScroll", "", 1, "collectionMainContainer", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "container"], [4, "ngIf"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["msg", "There is no data to display here"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"]],
        template: function CollectedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function CollectedComponent_Template_div_scrolled_0_listener() {
              return ctx.onNextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CollectedComponent_app_itemskeleton_2_Template, 1, 0, "app-itemskeleton", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollectedComponent_app_nodata_3_Template, 1, 0, "app-nodata", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CollectedComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
          }
        },
        directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__["ItemskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__["NodataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"]],
        styles: [".collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3RlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixlQUFlLENBQUMiLCJmaWxlIjoiY29sbGVjdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbjozMHB4IDAgMDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-collected',
            templateUrl: './collected.component.html',
            styleUrls: ['./collected.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8++I":
    /*!***************************************************************!*\
      !*** ./src/app/components/profile/offers/offers.component.ts ***!
      \***************************************************************/

    /*! exports provided: OffersComponent */

    /***/
    function I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersComponent", function () {
        return OffersComponent;
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
      FileName :  offers.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show offer on item in user profile
      */


      function OffersComponent_tr_24_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + item_r4.sender._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.sender.first_name, " ", item_r4.sender.last_name, "");
        }
      }

      function OffersComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OffersComponent_tr_24_div_5_Template, 3, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/item/view/" + item_r4.item_id._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.mediaBase + "/images/item/thumb/" + item_r4.item_id.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.sender != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, item_r4.created_date, "LL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/item/view/" + item_r4.item_id._id);
        }
      }

      function OffersComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

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

      function OffersComponent_ul_27_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersComponent_ul_27_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.prevHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OffersComponent_ul_27_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersComponent_ul_27_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.nextHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OffersComponent_ul_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OffersComponent_ul_27_li_1_Template, 3, 0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OffersComponent_ul_27_li_2_Template, 3, 0, "li", 23);

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

      function OffersComponent_ul_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var OffersComponent = /*#__PURE__*/function () {
        function OffersComponent(userService, router, itemService) {
          var _this2 = this;

          _classCallCheck(this, OffersComponent);

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
           * This is the function which used to retrieve offer list by user profile
           */

          this.geOfferList = function () {
            _this2.historyLoading = true;
            var params = {
              type: "profile",
              user_id: _this2.currentUserID,
              page: _this2.pageHistory
            };

            _this2.itemService.getOffers(params).subscribe(function (result) {
              if (result.status == true) {
                _this2.histories = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this2.hasNextHistoryPage = true;
                } else {
                  _this2.hasNextHistoryPage = false;
                }
              } else {
                _this2.hasNextHistoryPage = false;
              }

              _this2.historyLoading = false;
            });
          };
          /**
           * This is the function which used to retrieve offer list by user profile on next page click
           */


          this.nextHistoryPage = function () {
            _this2.pageHistory = _this2.pageHistory + 1;

            _this2.geOfferList();
          };
          /**
           * This is the function which used to retrieve offer list by user profile on previous page click
           */


          this.prevHistoryPage = function () {
            _this2.pageHistory = _this2.pageHistory - 1;

            _this2.geOfferList();
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(OffersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            this.currentUserID = url.replace('/offers', '').split("/").pop();
            this.geOfferList();
          }
        }]);

        return OffersComponent;
      }();

      OffersComponent.ɵfac = function OffersComponent_Factory(t) {
        return new (t || OffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]));
      };

      OffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OffersComponent,
        selectors: [["app-offers"]],
        decls: 29,
        vars: 4,
        consts: [[1, "collectionMainContainer"], [1, "row"], [1, "col-md-12"], [1, "tradeBlock"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "cil-money", "titleIcon"], [1, "card-body", "historyBody"], [1, "table", "table-bordered", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "itemDetail", 3, "routerLink"], [3, "src"], [1, "action"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink"], [1, "icon-eye"], ["href", "javascript:void(0)", 3, "routerLink"], ["colspan", "4"], ["type", "info", "ng-reflect-type", "info"], ["role", "alert", "ng-reflect-ng-class", "", 1, "alert", "alert-info"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], ["href", "javascript:void(0)", 1, "page-link"]],
        template: function OffersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Offers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OffersComponent_tr_24_Template, 16, 9, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OffersComponent_tr_25_Template, 7, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OffersComponent_ul_27_Template, 3, 2, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OffersComponent_ul_28_Template, 4, 0, "ul", 12);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

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
        styles: [".historyBody[_ngcontent-%COMP%] {overflow:hidden; overflow-x: auto; }\n.collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n.itemDetail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 50px; height: 50px; cursor: pointer; -o-object-fit: cover; object-fit: cover;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ2pELDBCQUEwQixlQUFlLENBQUM7QUFDMUMsaUJBQWlCLFdBQVcsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG9CQUFpQixFQUFqQixpQkFBaUIsQ0FBQyIsImZpbGUiOiJvZmZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5Qm9keSB7b3ZlcmZsb3c6aGlkZGVuOyBvdmVyZmxvdy14OiBhdXRvOyB9XG4uY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbjozMHB4IDAgMDt9XG4uaXRlbURldGFpbCBpbWcge3dpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IGN1cnNvcjogcG9pbnRlcjsgb2JqZWN0LWZpdDogY292ZXI7fSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-offers',
            templateUrl: './offers.component.html',
            styleUrls: ['./offers.component.css']
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
    "U6jy":
    /*!*****************************************************************!*\
      !*** ./src/app/components/profile/created/created.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CreatedComponent */

    /***/
    function U6jy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatedComponent", function () {
        return CreatedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../UI/skeleton/itemskeleton/itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../UI/nodata/nodata.component */
      "he+D");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../UI/item/item.component */
      "xyAo");
      /*
      Project : Cryptotrades
      FileName :  created.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show created item in user profile
      */


      function CreatedComponent_app_itemskeleton_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
        }
      }

      function CreatedComponent_app_nodata_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 5);
        }
      }

      function CreatedComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function CreatedComponent_div_4_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function CreatedComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatedComponent_div_4_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
        }
      }

      var CreatedComponent = /*#__PURE__*/function () {
        function CreatedComponent(userService, router, itemService) {
          var _this3 = this;

          _classCallCheck(this, CreatedComponent);

          this.userService = userService;
          this.router = router;
          this.itemService = itemService;
          this.items = [];
          this.page = 1;
          this.isApiLoading = false;
          this.loading = true;
          this.keyword = "";
          this.searchInput = "";
          /**
           * This is the function which used to retrieve created list from api
           */

          this.getItemList = function () {
            _this3.isApiLoading = true;
            var params = {
              page: _this3.page,
              type: 'my',
              user_id: _this3.currentUserID,
              keyword: _this3.keyword
            };

            _this3.itemService.listItem(params).subscribe(function (result) {
              _this3.isApiLoading = false;
              console.log(result);

              if (result.status == true) {
                if (_this3.page == 1) {
                  _this3.items = result.tempArray;
                } else {
                  for (var index = 0; index < result.tempArray.length; index++) {
                    var element = result.tempArray[index];

                    _this3.items.push(element);
                  }
                }
              }

              _this3.loading = false;
            });
          };
          /**
           * This is the function which used to retrieve created list on page scroll
           */


          this.onNextPage = function () {
            if (_this3.loading == true && _this3.isApiLoading == true) {
              return;
            }

            _this3.page = _this3.page + 1;

            _this3.getItemList();
          };
          /**
           * This is the output function which used to navigate user to item detail page
           */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this3.router.navigate(['/item/view/' + event.item._id]);
            }
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(CreatedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            this.currentUserID = url.replace('/created', '').split("/").pop();
            this.items = [];
            this.page = 1;
            this.getItemList();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return CreatedComponent;
      }();

      CreatedComponent.ɵfac = function CreatedComponent_Factory(t) {
        return new (t || CreatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]));
      };

      CreatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreatedComponent,
        selectors: [["app-created"]],
        decls: 5,
        vars: 5,
        consts: [["infiniteScroll", "", 1, "collectionMainContainer", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "container"], [4, "ngIf"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["msg", "There is no data to display here"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"]],
        template: function CreatedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function CreatedComponent_Template_div_scrolled_0_listener() {
              return ctx.onNextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreatedComponent_app_itemskeleton_2_Template, 1, 0, "app-itemskeleton", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreatedComponent_app_nodata_3_Template, 1, 0, "app-nodata", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreatedComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
          }
        },
        directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__["ItemskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__["NodataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"]],
        styles: [".collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEIsZUFBZSxDQUFDIiwiZmlsZSI6ImNyZWF0ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsZWN0aW9uTWFpbkNvbnRhaW5lciB7bWFyZ2luOjMwcHggMCAwO30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-created',
            templateUrl: './created.component.html',
            styleUrls: ['./created.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XJ1F":
    /*!*******************************************************************!*\
      !*** ./src/app/components/profile/activity/activity.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ActivityComponent */

    /***/
    function XJ1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
        return ActivityComponent;
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
      FileName :  activity.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show activiy screen in user profile
      */


      function ActivityComponent_tr_26_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

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

      function ActivityComponent_tr_26_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.blockChainExplorer + "tx/" + item_r4.transaction_hash, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.transaction_hash);
        }
      }

      function ActivityComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActivityComponent_tr_26_div_9_Template, 3, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActivityComponent_tr_26_div_11_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "amDateFormat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.transaction_hash != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, item_r4.created_date, "LL"));
        }
      }

      function ActivityComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "alert", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

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

      function ActivityComponent_ul_29_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_ul_29_li_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.prevHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActivityComponent_ul_29_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivityComponent_ul_29_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.nextHistoryPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActivityComponent_ul_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivityComponent_ul_29_li_1_Template, 3, 0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActivityComponent_ul_29_li_2_Template, 3, 0, "li", 21);

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

      function ActivityComponent_ul_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ActivityComponent = /*#__PURE__*/function () {
        function ActivityComponent(userService, router, itemService) {
          var _this4 = this;

          _classCallCheck(this, ActivityComponent);

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
           * This is the function which used to retrieve activity list by user profile from api
           */

          this.getHistoryList = function () {
            _this4.historyLoading = true;
            var params = {
              type: "profile",
              user_id: _this4.currentUserID,
              page: _this4.pageHistory
            };

            _this4.itemService.getHistory(params).subscribe(function (result) {
              if (result.status == true) {
                _this4.histories = result.tempArray;

                if (result.data.totalDocs > result.data.offset + result.tempArray.length) {
                  _this4.hasNextHistoryPage = true;
                } else {
                  _this4.hasNextHistoryPage = false;
                }
              } else {
                _this4.hasNextHistoryPage = false;
              }

              _this4.historyLoading = false;
            });
          };
          /**
           * This is the function which used to retrieve activity list by user profile on next page click
           */


          this.nextHistoryPage = function () {
            _this4.pageHistory = _this4.pageHistory + 1;

            _this4.getHistoryList();
          };
          /**
           * This is the function which used to retrieve activity list by user profile on previous page click
           */


          this.prevHistoryPage = function () {
            _this4.pageHistory = _this4.pageHistory - 1;

            _this4.getHistoryList();
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(ActivityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            this.currentUserID = url.replace('/activity', '').split("/").pop();
            this.getHistoryList();
          }
        }]);

        return ActivityComponent;
      }();

      ActivityComponent.ɵfac = function ActivityComponent_Factory(t) {
        return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]));
      };

      ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ActivityComponent,
        selectors: [["app-activity"]],
        decls: 31,
        vars: 4,
        consts: [[1, "collectionMainContainer"], [1, "row"], [1, "col-md-12"], [1, "tradeBlock"], [1, "animated", "fadeIn"], [1, "card"], [1, "card-header"], [1, "cil-swap-vertical", "titleIcon"], [1, "card-body", "historyBody"], [1, "table", "table-bordered", "table-striped", "table-sm"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "itemDetail", 3, "routerLink"], [3, "src"], ["href", "javascript:void(0)", 3, "routerLink"], ["target", "_blank", 3, "href"], ["colspan", "6"], ["type", "info", "ng-reflect-type", "info"], ["role", "alert", "ng-reflect-ng-class", "", 1, "alert", "alert-info"], [1, "pagination"], ["class", "page-item", 4, "ngIf"], [1, "page-item"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], ["href", "javascript:void(0)", 1, "page-link"]],
        template: function ActivityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Activity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "From");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transaction Hash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Created Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ActivityComponent_tr_26_Template, 15, 10, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ActivityComponent_tr_27_Template, 7, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ActivityComponent_ul_29_Template, 3, 2, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ActivityComponent_ul_30_Template, 4, 0, "ul", 12);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

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
        styles: [".historyBody[_ngcontent-%COMP%] {overflow:hidden; overflow-x: auto; }\n.collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n.itemDetail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 50px; height: 50px; cursor: pointer; -o-object-fit: cover; object-fit: cover;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDakQsMEJBQTBCLGVBQWUsQ0FBQztBQUMxQyxpQkFBaUIsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsb0JBQWlCLEVBQWpCLGlCQUFpQixDQUFDIiwiZmlsZSI6ImFjdGl2aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeUJvZHkge292ZXJmbG93OmhpZGRlbjsgb3ZlcmZsb3cteDogYXV0bzsgfVxuLmNvbGxlY3Rpb25NYWluQ29udGFpbmVyIHttYXJnaW46MzBweCAwIDA7fVxuLml0ZW1EZXRhaWwgaW1nIHt3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4OyBjdXJzb3I6IHBvaW50ZXI7IG9iamVjdC1maXQ6IGNvdmVyO30iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity',
            templateUrl: './activity.component.html',
            styleUrls: ['./activity.component.css']
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
    "lhJh":
    /*!******************************************************!*\
      !*** ./src/app/components/profile/profile.module.ts ***!
      \******************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function lhJh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-routing.module */
      "qWpN");
      /* harmony import */


      var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-moment */
      "QUrN");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var _collected_collected_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collected/collected.component */
      "/OxV");
      /* harmony import */


      var _created_created_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./created/created.component */
      "U6jy");
      /* harmony import */


      var _favorited_favorited_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./favorited/favorited.component */
      "whIE");
      /* harmony import */


      var _activity_activity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./activity/activity.component */
      "XJ1F");
      /* harmony import */


      var _offers_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./offers/offers.component */
      "8++I");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/UI/nodata/nodata.module */
      "Mhz7");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/UI/skeleton/itemskeleton/itemskeleton.module */
      "qzpZ");
      /* harmony import */


      var src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/UI/loader/loader.module */
      "UfAB");
      /* harmony import */


      var src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/UI/item/item.module */
      "jXLk");
      /*
      Project : Cryptotrades
      FileName :  profile.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the module file which used to load component and module realted to user page
      */


      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"].forRoot({
          relativeTimeThresholdOptions: {
            'm': 59
          }
        }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_13__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_15__["ItemskeletonModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_16__["LoaderModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_17__["ItemModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_collected_collected_component__WEBPACK_IMPORTED_MODULE_6__["CollectedComponent"], _created_created_component__WEBPACK_IMPORTED_MODULE_7__["CreatedComponent"], _favorited_favorited_component__WEBPACK_IMPORTED_MODULE_8__["FavoritedComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_9__["ActivityComponent"], _offers_offers_component__WEBPACK_IMPORTED_MODULE_10__["OffersComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_13__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_15__["ItemskeletonModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_16__["LoaderModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_17__["ItemModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"].forRoot({
              relativeTimeThresholdOptions: {
                'm': 59
              }
            }), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"], src_app_UI_nodata_nodata_module__WEBPACK_IMPORTED_MODULE_13__["NodataModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], src_app_UI_skeleton_itemskeleton_itemskeleton_module__WEBPACK_IMPORTED_MODULE_15__["ItemskeletonModule"], src_app_UI_loader_loader_module__WEBPACK_IMPORTED_MODULE_16__["LoaderModule"], src_app_UI_item_item_module__WEBPACK_IMPORTED_MODULE_17__["ItemModule"]],
            declarations: [_collected_collected_component__WEBPACK_IMPORTED_MODULE_6__["CollectedComponent"], _created_created_component__WEBPACK_IMPORTED_MODULE_7__["CreatedComponent"], _favorited_favorited_component__WEBPACK_IMPORTED_MODULE_8__["FavoritedComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_9__["ActivityComponent"], _offers_offers_component__WEBPACK_IMPORTED_MODULE_10__["OffersComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qWpN":
    /*!**************************************************************!*\
      !*** ./src/app/components/profile/profile-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function qWpN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity/activity.component */
      "XJ1F");
      /* harmony import */


      var _collected_collected_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collected/collected.component */
      "/OxV");
      /* harmony import */


      var _created_created_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./created/created.component */
      "U6jy");
      /* harmony import */


      var _favorited_favorited_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorited/favorited.component */
      "whIE");
      /* harmony import */


      var _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./offers/offers.component */
      "8++I");
      /*
      Project : Cryptotrades
      FileName :  profile-routing.module.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the routing module which used to load profile related routes
      */


      var routes = [{
        path: '',
        redirectTo: 'collected',
        pathMatch: 'full'
      }, {
        path: 'collected',
        component: _collected_collected_component__WEBPACK_IMPORTED_MODULE_3__["CollectedComponent"]
      }, {
        path: 'created',
        component: _created_created_component__WEBPACK_IMPORTED_MODULE_4__["CreatedComponent"]
      }, {
        path: 'offers',
        component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_6__["OffersComponent"]
      }, {
        path: 'activity',
        component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__["ActivityComponent"]
      }, {
        path: 'favorited',
        component: _favorited_favorited_component__WEBPACK_IMPORTED_MODULE_5__["FavoritedComponent"]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileRoutingModule_Factory(t) {
          return new (t || ProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
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
    "whIE":
    /*!*********************************************************************!*\
      !*** ./src/app/components/profile/favorited/favorited.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FavoritedComponent */

    /***/
    function whIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritedComponent", function () {
        return FavoritedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user.service */
      "qfBg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/item.service */
      "jcKA");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "dlKe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../UI/skeleton/itemskeleton/itemskeleton.component */
      "nGB/");
      /* harmony import */


      var _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../UI/nodata/nodata.component */
      "he+D");
      /* harmony import */


      var _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../UI/item/item.component */
      "xyAo");
      /*
      Project : Cryptotrades
      FileName :  favorited.component.ts
      Author : LinkWell
      File Created : 21/07/2021
      CopyRights : LinkWell
      Purpose : This is the component file which used to show favorited item in user profile
      */


      function FavoritedComponent_app_itemskeleton_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-itemskeleton");
        }
      }

      function FavoritedComponent_app_nodata_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nodata", 5);
        }
      }

      function FavoritedComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemEvent", function FavoritedComponent_div_4_div_1_Template_app_item_itemEvent_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.itemEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
        }
      }

      function FavoritedComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoritedComponent_div_4_div_1_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
        }
      }

      var FavoritedComponent = /*#__PURE__*/function () {
        function FavoritedComponent(userService, router, itemService) {
          var _this5 = this;

          _classCallCheck(this, FavoritedComponent);

          this.userService = userService;
          this.router = router;
          this.itemService = itemService;
          this.items = [];
          this.page = 1;
          this.isApiLoading = false;
          this.loading = true;
          this.keyword = "";
          this.searchInput = "";
          /**
           * This is the function which used to retrieve favorited list from api
           */

          this.getItemList = function () {
            _this5.isApiLoading = true;
            var params = {
              page: _this5.page,
              user_id: _this5.currentUserID,
              keyword: _this5.keyword
            };

            _this5.itemService.listFavourites(params).subscribe(function (result) {
              _this5.isApiLoading = false;
              console.log(result);

              if (result.status == true) {
                if (_this5.page == 1) {
                  _this5.items = result.tempArray;
                } else {
                  for (var index = 0; index < result.tempArray.length; index++) {
                    var element = result.tempArray[index];

                    _this5.items.push(element);
                  }
                }
              }

              _this5.loading = false;
            });
          };
          /**
           * This is the function which used to retrieve favorited list on page scroll
           */


          this.onNextPage = function () {
            if (_this5.loading == true && _this5.isApiLoading == true) {
              return;
            }

            _this5.page = _this5.page + 1;

            _this5.getItemList();
          };
          /**
          * This is the output function which used to navigate user to item detail page
          */


          this.itemEvent = function (event) {
            if (event.type == "view") {
              _this5.router.navigate(['/item/view/' + event.item._id]);
            }
          };

          this.currentUser = this.userService.getUser();
        }

        _createClass(FavoritedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            this.currentUserID = url.replace('/favorited', '').split("/").pop();
            this.items = [];
            this.page = 1;
            this.getItemList();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return FavoritedComponent;
      }();

      FavoritedComponent.ɵfac = function FavoritedComponent_Factory(t) {
        return new (t || FavoritedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]));
      };

      FavoritedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FavoritedComponent,
        selectors: [["app-favorited"]],
        decls: 5,
        vars: 5,
        consts: [["infiniteScroll", "", 1, "collectionMainContainer", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "container"], [4, "ngIf"], ["msg", "There is no data to display here", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["msg", "There is no data to display here"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "item", "itemEvent"]],
        template: function FavoritedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function FavoritedComponent_Template_div_scrolled_0_listener() {
              return ctx.onNextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoritedComponent_app_itemskeleton_2_Template, 1, 0, "app-itemskeleton", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FavoritedComponent_app_nodata_3_Template, 1, 0, "app-nodata", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoritedComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.items.length > 0);
          }
        },
        directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _UI_skeleton_itemskeleton_itemskeleton_component__WEBPACK_IMPORTED_MODULE_6__["ItemskeletonComponent"], _UI_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_7__["NodataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _UI_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"]],
        styles: [".collectionMainContainer[_ngcontent-%COMP%] {margin:30px 0 0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQixlQUFlLENBQUMiLCJmaWxlIjoiZmF2b3JpdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbk1haW5Db250YWluZXIge21hcmdpbjozMHB4IDAgMDt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-favorited',
            templateUrl: './favorited.component.html',
            styleUrls: ['./favorited.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-profile-profile-module-es5.js.map