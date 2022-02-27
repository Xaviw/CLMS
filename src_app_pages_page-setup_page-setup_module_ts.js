(self["webpackChunkclms"] = self["webpackChunkclms"] || []).push([["src_app_pages_page-setup_page-setup_module_ts"],{

/***/ 9766:
/*!**********************************************************!*\
  !*** ./src/app/pages/page-setup/page-setup.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSetupComponent": () => (/* binding */ PageSetupComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/utils */ 54750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _page_setup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-setup.service */ 96293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/common.service */ 50690);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 17850);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var _shared_directives_empty_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/empty.directive */ 19816);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tree */ 19628);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 83721);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 66795);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ 75887);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/switch */ 48453);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);























const _c0 = ["pageTree"];
function PageSetupComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " \u62D6\u52A8\u8282\u70B9\u8C03\u6574\u9875\u9762\u987A\u5E8F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u9875\u9762\u5C42\u7EA7\u8BF7\u52FF\u8D85\u8FC7\u56DB\u7EA7 ");
} }
function PageSetupComponent_nz_table_25_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_nz_table_25_tr_13_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.addFunctionDrawer.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u4FEE\u6539");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function PageSetupComponent_nz_table_25_tr_13_Template_button_nzOnConfirm_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const item_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.addFunctionDrawer.deleteFunction(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " \u5220\u9664 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.url);
} }
function PageSetupComponent_nz_table_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u540D\u79F0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u94FE\u63A5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u64CD\u4F5C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PageSetupComponent_nz_table_25_tr_13_Template, 12, 3, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", ctx_r3.pageFunctions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r6.data);
} }
function PageSetupComponent_div_27_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_27_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.addPageDrawer.addPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u6DFB\u52A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PageSetupComponent_div_27_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_27_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.addPageDrawer.updatePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u4FEE\u6539");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PageSetupComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PageSetupComponent_div_27_Template_label_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.isTopLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u8BBE\u4E3A\u9876\u5C42\u83DC\u5355 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-form-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-control", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "nz-switch", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u9875\u9762\u540D\u79F0\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-control", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u9875\u9762\u8DEF\u5F84\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nz-form-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "key\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-form-control", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u9875\u9762\u56FE\u6807\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "nz-button-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PageSetupComponent_div_27_button_38_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, PageSetupComponent_div_27_button_39_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_27_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.cancelAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u53D6\u6D88");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r4.isUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u5F53\u524D\u4E0A\u5C42\u83DC\u5355\uFF1A", (tmp_1_0 = ctx_r4.activePage == null ? null : ctx_r4.activePage.title) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "--", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.isTopLevel)("nzDisabled", ctx_r4.topLevelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.pageAddForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.pageAddForm.controls.icon.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isUpdate);
} }
function PageSetupComponent_div_29_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_29_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.addFunctionDrawer.addFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u6DFB\u52A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PageSetupComponent_div_29_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_29_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.addFunctionDrawer.modifyFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u4FEE\u6539");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PageSetupComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-form-label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u529F\u80FD\u6807\u8BC6\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-form-control", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-form-label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u529F\u80FD\u63CF\u8FF0\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-form-control", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u529F\u80FD\u94FE\u63A5\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-control", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-button-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PageSetupComponent_div_29_button_21_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, PageSetupComponent_div_29_button_22_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_div_29_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.cancelAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u53D6\u6D88");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r5.functionAddForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.isUpdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isUpdate);
} }
const _c1 = function () { return { padding: 0 }; };
class PageSetupComponent {
    constructor(service, fb, common) {
        this.service = service;
        this.fb = fb;
        this.common = common;
        this.pages = []; // 完整页面数据
        this.pageFunctions = []; // 页面功能数据
        // 添加页面表单Control
        this.pageAddForm = this.fb.group({
            parent_page_id: [null],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            link: [null],
            icon: [null],
            show: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            key: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        // 添加功能表单Control
        this.functionAddForm = this.fb.group({
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            url: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.isUpdate = false;
        this.topLevelDisabled = false; // 设为顶层菜单是否可用：已在顶层时true且不可用
        // 设为顶层菜单对应值，true时设置form值为0，false时设置form值为当前选中页面id
        this._isTopLevel = false;
        // 添加页面抽屉
        this.addPageDrawer = {
            visible: false,
            // 打开时设置上层页面id
            // 添加
            add: () => {
                var _a;
                this.pageAddForm.reset();
                this.addPageDrawer.visible = true;
                this.isUpdate = false;
                this.pageAddForm.patchValue({
                    show: true,
                });
                if (this.activePage) {
                    this.pageAddForm.controls.parent_page_id.patchValue((_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id);
                    this.topLevelDisabled = this.isTopLevel = false;
                }
                else {
                    this.pageAddForm.controls.parent_page_id.patchValue('0');
                    this.topLevelDisabled = this.isTopLevel = true;
                }
            },
            // 修改
            update: () => {
                var _a, _b, _c, _d;
                if (this.activePage) {
                    this.pageAddForm.reset();
                    this.addPageDrawer.visible = true;
                    this.isUpdate = true;
                    this.pageAddForm.patchValue({
                        title: this.activePage.origin.title,
                        link: (_a = this.activePage.origin) === null || _a === void 0 ? void 0 : _a.link,
                        icon: (_b = this.activePage.origin) === null || _b === void 0 ? void 0 : _b.icon,
                        show: (_c = this.activePage.origin) === null || _c === void 0 ? void 0 : _c.show,
                        key: (_d = this.activePage.origin) === null || _d === void 0 ? void 0 : _d.key,
                    });
                }
            },
            // 修改页面
            updatePage: () => {
                var _a;
                (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.validateForm)(this.pageAddForm.controls);
                if (this.pageAddForm.valid) {
                    const param = this.pageAddForm.getRawValue();
                    param.id = (_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id;
                    delete param.parent_page_id;
                    this.service.modifyPage(param).subscribe((res) => {
                        this.addPageDrawer.close();
                        this.getAllPages();
                    });
                }
            },
            // 删除页面
            deletePage: () => {
                this.service.deletePage(this.activePage.origin.id).subscribe((res) => {
                    this.getAllPages();
                });
            },
            // 添加页面
            addPage: () => {
                (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.validateForm)(this.pageAddForm.controls);
                if (this.pageAddForm.valid) {
                    const param = this.pageAddForm.getRawValue();
                    this.service.addPage(param).subscribe((res) => {
                        this.addPageDrawer.close();
                        this.getAllPages();
                    });
                }
            },
            close() {
                this.visible = false;
            },
        };
        // 添加功能抽屉
        this.addFunctionDrawer = {
            visible: false,
            functionId: '',
            // 添加
            insert: () => {
                this.isUpdate = false;
                this.functionAddForm.reset();
                this.addFunctionDrawer.visible = true;
            },
            // 修改
            update: (item) => {
                this.isUpdate = true;
                this.addFunctionDrawer.functionId = item.id;
                this.functionAddForm.reset();
                this.addFunctionDrawer.visible = true;
                this.functionAddForm.patchValue(item);
            },
            close() {
                this.visible = false;
            },
            // 添加功能
            addFunction: () => {
                var _a;
                (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.validateForm)(this.functionAddForm.controls);
                if (this.functionAddForm.valid) {
                    const param = this.functionAddForm.getRawValue();
                    param.page_id = (_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id;
                    this.service.addFunction(param).subscribe((res) => {
                        var _a;
                        this.addFunctionDrawer.close();
                        this.getPageFunction((_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id);
                    });
                }
            },
            // 修改功能
            modifyFunction: () => {
                (0,_shared_utils_utils__WEBPACK_IMPORTED_MODULE_0__.validateForm)(this.functionAddForm.controls);
                if (this.functionAddForm.valid) {
                    const param = this.functionAddForm.getRawValue();
                    param.permission_id = this.addFunctionDrawer.functionId;
                    this.service.modifyFunction(param).subscribe((res) => {
                        var _a;
                        this.addFunctionDrawer.close();
                        this.getPageFunction((_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id);
                    });
                }
            },
            // 删除功能
            deleteFunction: (id) => {
                this.service.deleteFunction(id).subscribe((res) => {
                    var _a;
                    this.getPageFunction((_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id);
                });
            },
        };
    }
    get isTopLevel() {
        return this._isTopLevel;
    }
    set isTopLevel(v) {
        var _a;
        this._isTopLevel = v;
        if (v) {
            this.pageAddForm.controls.parent_page_id.patchValue('0');
        }
        else {
            this.pageAddForm.controls.parent_page_id.patchValue((_a = this.activePage) === null || _a === void 0 ? void 0 : _a.origin.id);
        }
    }
    ngOnInit() {
        this.getAllPages();
    }
    // 获取完整菜单
    getAllPages() {
        this.common.getAllPages().subscribe((res) => {
            this.pages = res;
        });
    }
    // 调整菜单顺序
    adjustPageOrder(e) {
        var _a, _b, _c, _d, _e, _f;
        const nodes = ((_b = (_a = e.dragNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.children) || this.pageTreeEl.getTreeNodes();
        const param = {
            parent_page_id: (_e = (_d = (_c = e.dragNode) === null || _c === void 0 ? void 0 : _c.parentNode) === null || _d === void 0 ? void 0 : _d.origin.id) !== null && _e !== void 0 ? _e : '0',
            page_id: (_f = e.dragNode) === null || _f === void 0 ? void 0 : _f.origin.id,
            sort: nodes.findIndex((item) => { var _a; return item.key === ((_a = e.dragNode) === null || _a === void 0 ? void 0 : _a.key); }) + 1,
        };
        this.service.adjustPage(param).subscribe((res) => { }, (err) => {
            this.getAllPages();
        });
    }
    // 单击菜单触发
    pageClick(e) {
        var _a, _b, _c, _d;
        if (this.activePage !== e.node) {
            this.activePage = e.node;
            this.pageAddForm.controls.parent_page_id.patchValue((_a = e.node) === null || _a === void 0 ? void 0 : _a.origin.id);
            if ((_b = e.node) === null || _b === void 0 ? void 0 : _b.origin.link) {
                // 叶子节点=>加载功能
                this.getPageFunction(e.node.origin.id);
            }
            else if (e.node && !((_c = e.node) === null || _c === void 0 ? void 0 : _c.origin.link) && !((_d = e.node) === null || _d === void 0 ? void 0 : _d.origin.isLeaf)) {
                // 父节点=>展开
                e.node.isExpanded = true;
                this.pageFunctions = [];
            }
        }
        else {
            this.activePage = undefined;
            this.pageFunctions = [];
        }
    }
    // 获取页面下功能
    getPageFunction(id) {
        this.common.getPageFunctions(id).subscribe((res) => {
            this.pageFunctions = res;
        });
    }
    // 取消添加
    cancelAdd() {
        this.pageAddForm.reset();
        this.addPageDrawer.close();
        this.functionAddForm.reset();
        this.addFunctionDrawer.close();
    }
}
PageSetupComponent.ɵfac = function PageSetupComponent_Factory(t) { return new (t || PageSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_page_setup_service__WEBPACK_IMPORTED_MODULE_1__.PageSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService)); };
PageSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PageSetupComponent, selectors: [["app-page-setup"]], viewQuery: function PageSetupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.pageTreeEl = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_page_setup_service__WEBPACK_IMPORTED_MODULE_1__.PageSetupService])], decls: 30, vars: 18, consts: [[1, "layout"], [1, "container"], [1, "left"], ["nz-row", "", "nzJustify", "space-between", "nzAlign", "middle", 1, "handle", "padding-x"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmTitle", "\u786E\u8BA4\u5220\u9664\u6240\u9009\u5C42\u7EA7\u4E0B\u6240\u6709\u9875\u9762?", "nzPopconfirmPlacement", "bottom", 3, "disabled", "nzOnConfirm"], ["nz-button", "", 3, "disabled", "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "twotone", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle"], ["titleTemplate", ""], [1, "tree", "padding"], ["empty", "", "emptyInfo", "\u8FD8\u6CA1\u6709\u9875\u9762...", 1, "view_scroll", 3, "emptyData"], ["nzDraggable", "", "nzBlockNode", "", "nzShowIcon", "", 3, "nzData", "nzOnDrop", "nzClick"], ["pageTree", ""], [1, "right"], ["nz-row", "", "nzAlign", "middle", "nzJustify", "end", 1, "header", "padding-x"], ["nz-button", "", "nzType", "primary", 3, "hidden", "click"], ["empty", "", "emptyInfo", "\u8BF7\u5148\u9009\u62E9\u5BF9\u5E94\u9875\u9762", 1, "view_scroll", "padding", 3, "emptyData"], ["nzShowPagination", "false", 3, "nzData", 4, "ngIf"], ["nzWidth", "300px", "nzPlacement", "right", 3, "nzClosable", "nzVisible", "nzBodyStyle", "nzTitle", "nzOnClose"], ["class", "layout", 4, "nzDrawerContent"], ["nzShowPagination", "false", 3, "nzData"], ["pageFunctionTable", ""], ["nzAlign", "center"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-button", "", "nzType", "link", "nz-popconfirm", "", "nzPopconfirmTitle", "\u786E\u8BA4\u5220\u9664\u8BE5\u529F\u80FD?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm"], [1, "view_scroll", "padding"], [3, "hidden"], [2, "margin-bottom", "24px"], ["nz-checkbox", "", 2, "margin-bottom", "24px", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], ["nzFor", "show", "nzRequired", ""], ["nzErrorTip", "\u9875\u9762\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"], ["formControlName", "show", "id", "show"], ["nzFor", "title", "nzRequired", ""], ["nz-input", "", "formControlName", "title", "id", "title", "placeholder", "\u8BF7\u8F93\u5165\u9875\u9762\u540D\u79F0"], ["nzFor", "link"], ["nz-input", "", "formControlName", "link", "id", "link", "placeholder", "\u8BF7\u8F93\u5165\u9875\u9762\u8DEF\u5F84"], ["nzFor", "key", "nzRequired", ""], ["nzErrorTip", "key\u4E0D\u80FD\u4E3A\u7A7A\uFF01"], ["nz-input", "", "formControlName", "key", "id", "key", "placeholder", "\u8BF7\u8F93\u5165key"], ["nzFor", "icon"], ["nz-row", "", "nzAlign", "middle"], ["nz-input", "", "formControlName", "icon", "id", "icon", "nz-col", "", "nzSpan", "20", "placeholder", "\u8BF7\u8F93\u5165\u56FE\u6807\u540D\u79F0"], ["nz-icon", "", "nz-col", "", "nzSpan", "4", 3, "nzType"], ["nz-row", "", "nzAlign", "middle", "nzJustify", "end", 1, "footer", "padding-x"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], ["nz-button", "", 3, "click"], ["nzFor", "code", "nzRequired", ""], ["nzErrorTip", "\u529F\u80FD\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"], ["nz-input", "", "formControlName", "code", "id", "code", "placeholder", "\u8BF7\u8F93\u5165\u529F\u80FD\u6807\u8BC6"], ["nzFor", "name", "nzRequired", ""], ["nzErrorTip", "\u529F\u80FD\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"], ["nz-input", "", "formControlName", "name", "id", "name", "placeholder", "\u8BF7\u8F93\u5165\u529F\u80FD\u63CF\u8FF0"], ["nzFor", "url", "nzRequired", ""], ["nzErrorTip", "\u529F\u80FD\u94FE\u63A5\u4E0D\u80FD\u4E3A\u7A7A\uFF01"], ["nz-input", "", "formControlName", "url", "id", "url", "placeholder", "\u8BF7\u8F93\u5165\u529F\u80FD\u94FE\u63A5"]], template: function PageSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-button-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_Template_button_click_5_listener() { return ctx.addPageDrawer.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u6DFB\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnConfirm", function PageSetupComponent_Template_button_nzOnConfirm_7_listener() { return ctx.addPageDrawer.deletePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u5220\u9664 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_Template_button_click_9_listener() { return ctx.addPageDrawer.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PageSetupComponent_ng_template_12_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-tree", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnDrop", function PageSetupComponent_Template_nz_tree_nzOnDrop_16_listener($event) { return ctx.adjustPageOrder($event); })("nzClick", function PageSetupComponent_Template_nz_tree_nzClick_16_listener($event) { return ctx.pageClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PageSetupComponent_Template_button_click_21_listener() { return ctx.addFunctionDrawer.insert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " \u6DFB\u52A0\u529F\u80FD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, PageSetupComponent_nz_table_25_Template, 14, 2, "nz-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-drawer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnClose", function PageSetupComponent_Template_nz_drawer_nzOnClose_26_listener() { return ctx.addPageDrawer.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PageSetupComponent_div_27_Template, 42, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "nz-drawer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnClose", function PageSetupComponent_Template_nz_drawer_nzOnClose_28_listener() { return ctx.addFunctionDrawer.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PageSetupComponent_div_29_Template, 25, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.activePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.activePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("emptyData", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzData", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !(ctx.activePage == null ? null : ctx.activePage.origin == null ? null : ctx.activePage.origin.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("emptyData", ctx.activePage == null ? null : ctx.activePage.origin == null ? null : ctx.activePage.origin.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activePage == null ? null : ctx.activePage.origin == null ? null : ctx.activePage.origin.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.addPageDrawer.visible)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c1))("nzTitle", ctx.isUpdate ? "\u4FEE\u6539\u9875\u9762" : "\u6DFB\u52A0\u9875\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.addFunctionDrawer.visible)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c1))("nzTitle", ctx.isUpdate ? "\u4FEE\u6539\u529F\u80FD" : "\u6DFB\u52A0\u529F\u80FD");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_10__.NzPopconfirmDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__.NzTooltipDirective, _shared_directives_empty_directive__WEBPACK_IMPORTED_MODULE_3__.EmptyDirective, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_13__.NzTreeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_15__.NzDrawerContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__.NzCheckboxComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormControlComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_19__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1442:
/*!*******************************************************!*\
  !*** ./src/app/pages/page-setup/page-setup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSetupModule": () => (/* binding */ PageSetupModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _page_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-setup.component */ 9766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const route = [{ path: '', component: _page_setup_component__WEBPACK_IMPORTED_MODULE_1__.PageSetupComponent }];
class PageSetupModule {
}
PageSetupModule.ɵfac = function PageSetupModule_Factory(t) { return new (t || PageSetupModule)(); };
PageSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PageSetupModule });
PageSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(route)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PageSetupModule, { declarations: [_page_setup_component__WEBPACK_IMPORTED_MODULE_1__.PageSetupComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 96293:
/*!********************************************************!*\
  !*** ./src/app/pages/page-setup/page-setup.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSetupService": () => (/* binding */ PageSetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 68058);



class PageSetupService {
    constructor(http, message) {
        this.http = http;
        this.message = message;
    }
    // 添加页面
    addPage(param) {
        const url = '/page/addPage';
        return this.http.post(url, param);
    }
    // 删除页面
    deletePage(param) {
        const url = '/page/deletePage';
        return this.http.post(url, { page_id: param });
    }
    // 修改页面
    modifyPage(param) {
        const url = '/page/updatePage';
        return this.http.post(url, param);
    }
    // 调整页面顺序
    adjustPage(param) {
        const url = '/page/adjustPage';
        return this.http.post(url, param);
    }
    // 添加功能
    addFunction(param) {
        const url = '/page/addPermissions';
        return this.http.post(url, param);
    }
    // 修改功能
    modifyFunction(param) {
        const url = '/page/updatePermissions';
        return this.http.post(url, param);
    }
    // 删除功能
    deleteFunction(id) {
        const url = '/page/deletePermissions';
        return this.http.post(url, { feature_id: id });
    }
}
PageSetupService.ɵfac = function PageSetupService_Factory(t) { return new (t || PageSetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
PageSetupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageSetupService, factory: PageSetupService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_page-setup_page-setup_module_ts.js.map