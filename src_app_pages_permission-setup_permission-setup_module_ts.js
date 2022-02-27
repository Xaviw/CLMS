(self["webpackChunkclms"] = self["webpackChunkclms"] || []).push([["src_app_pages_permission-setup_permission-setup_module_ts"],{

/***/ 48019:
/*!**********************************************************************!*\
  !*** ./src/app/pages/permission-setup/permission-setup.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionSetupComponent": () => (/* binding */ PermissionSetupComponent)
/* harmony export */ });
/* harmony import */ var _permission_setup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission-setup.service */ 81338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/common.service */ 50690);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 16704);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 14453);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 84514);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 29374);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 17850);
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tree */ 19628);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ 66795);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 26214);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 60945);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 52079);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 47420);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 57674);


















function PermissionSetupComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function PermissionSetupComponent_ng_template_27_ng_container_0_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "label", 25);
} }
function PermissionSetupComponent_ng_template_27_ng_container_0_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionSetupComponent_ng_template_27_ng_container_0_label_8_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.modifyPagePermission($event, page_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.activeRole == null ? null : ctx_r9.activeRole.origin == null ? null : ctx_r9.activeRole.origin.pages.includes(page_r7.key));
} }
function PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "label", 25);
} }
function PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_label_6_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r19.modifyFunctionPermission($event, item_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r18.activeRole.origin == null ? null : ctx_r18.activeRole.origin.actions.includes(item_r16.code));
} }
const _c0 = function (a0) { return { "padding-left.px": a0 }; };
function PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_label_5_Template, 1, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_label_6_Template, 1, 1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, page_r7.level - 1 ? (page_r7.level - 1) * 50 + 60 : 76));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r16.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r10.activeRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.activeRole);
} }
function PermissionSetupComponent_ng_template_27_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function PermissionSetupComponent_ng_template_27_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzExpandChange", function PermissionSetupComponent_ng_template_27_ng_container_0_Template_td_nzExpandChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const page_r7 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.onExpandChange(page_r7.id, $event, page_r7.isLeaf); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PermissionSetupComponent_ng_template_27_ng_container_0_label_7_Template, 1, 0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PermissionSetupComponent_ng_template_27_ng_container_0_label_8_Template, 1, 1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PermissionSetupComponent_ng_template_27_ng_container_0_tr_13_Template, 7, 6, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PermissionSetupComponent_ng_template_27_ng_container_0_ng_container_16_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, page_r7.level - 1 ? (page_r7.level - 1) * 50 : false))("nzExpand", ctx_r6.expandSet.has(page_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](page_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r6.activeRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.activeRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzExpand", ctx_r6.expandSet.has(page_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.pageFunctions.get(page_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, page_r7.children));
} }
function PermissionSetupComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PermissionSetupComponent_ng_template_27_ng_container_0_Template, 17, 13, "ng-container", 19);
} if (rf & 2) {
    const pages_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", pages_r5);
} }
function PermissionSetupComponent_input_30_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionSetupComponent_input_30_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.roleModel.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.roleModel.value);
} }
class PermissionSetupComponent {
    constructor(service, common) {
        this.service = service;
        this.common = common;
        this.roles = []; // 角色数据
        this.pages = []; // 页面数据
        this.pageFunctions = new Map(); // 页面功能数据
        this.expandSet = new Set(); // 已展开页面列表
        // 角色操作对话框
        this.roleModel = {
            visible: false,
            loading: false,
            value: '',
            mode: true,
            add: () => {
                this.roleModel.visible = true;
                this.roleModel.mode = true;
            },
            update: () => {
                var _a;
                this.roleModel.visible = true;
                this.roleModel.mode = false;
                this.roleModel.value = (_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.origin.title;
            },
            // 添加角色
            addRole: () => {
                this.roleModel.loading = true;
                this.service.addRole(this.roleModel.value).subscribe((res) => {
                    this.roleModel.loading = false;
                    this.roleModel.visible = false;
                    this.getRoles();
                    this.roleModel.value = '';
                }, (err) => {
                    this.roleModel.loading = false;
                });
            },
            // 修改角色
            modifyRole: () => {
                this.roleModel.loading = true;
                const param = {
                    role_id: this.activeRole.key,
                    role_name: this.roleModel.value,
                };
                this.service.modifyRole(param).subscribe((res) => {
                    this.roleModel.loading = false;
                    this.roleModel.visible = false;
                    this.getRoles();
                    this.roleModel.value = '';
                }, (err) => {
                    this.roleModel.loading = false;
                });
            },
            cancel: () => {
                this.roleModel.visible = false;
                this.roleModel.value = '';
            },
        };
    }
    // 展开页面触发
    onExpandChange(id, checked, isLeaf) {
        if (checked) {
            this.expandSet.add(id);
            if (!this.pageFunctions.get(id)) {
                this.getPageFunctions(id);
            }
        }
        else {
            this.expandSet.delete(id);
        }
    }
    ngOnInit() {
        this.getRoles();
        this.getAllPages();
    }
    // 获取所有角色
    getRoles() {
        this.common.getRoles().subscribe((res) => {
            res.forEach((item) => {
                item.isLeaf = true;
                item.icon = 'user';
                item.pages = [];
                item.actions = [];
            });
            this.roles = res;
        });
    }
    // 获取完整菜单
    getAllPages() {
        this.common.getAllPages().subscribe((res) => {
            this.pages = res;
        });
    }
    // 获取页面功能
    getPageFunctions(param) {
        this.common.getPageFunctions(param).subscribe((res) => {
            this.pageFunctions.set(param, res);
        });
    }
    // 获取角色菜单权限
    getRolePages(origin) {
        this.service.getRolePages(origin.key).subscribe((res) => {
            origin.pages = res;
        });
    }
    // 获取角色功能权限
    getRolePageActions(origin) {
        this.service.getRolePageFunctions(origin.key).subscribe((res) => {
            origin.actions = res;
        });
    }
    // 单击角色
    roleClick(e) {
        var _a, _b, _c, _d;
        if (this.activeRole !== e.node) {
            this.activeRole = e.node;
            if (!((_a = e.node) === null || _a === void 0 ? void 0 : _a.origin.pages.length) || !((_b = e.node) === null || _b === void 0 ? void 0 : _b.origin.actions.length)) {
                this.getRolePages((_c = this.activeRole) === null || _c === void 0 ? void 0 : _c.origin);
                this.getRolePageActions((_d = this.activeRole) === null || _d === void 0 ? void 0 : _d.origin);
            }
        }
        else {
            this.activeRole = undefined;
        }
    }
    // 修改功能权限
    modifyFunctionPermission(e, id) {
        var _a, _b;
        if (e) {
            this.service.addFunctionPermission({ role_id: (_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.key, permissions_id: id }).subscribe((res) => { }, (err) => {
                var _a, _b;
                // 修改出错，重新请求已有权限
                this.getRolePages((_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.origin);
                this.getRolePageActions((_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.origin);
            });
        }
        else {
            this.service.cancelFunctionPermission({ role_id: (_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.key, permissions_id: id }).subscribe((res) => { }, (err) => {
                var _a, _b;
                // 修改出错，重新请求已有权限
                this.getRolePages((_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.origin);
                this.getRolePageActions((_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.origin);
            });
        }
    }
    // 修改页面权限
    modifyPagePermission(e, id) {
        var _a, _b;
        if (e) {
            this.service.addPagePermission({ role_id: (_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.key, page_id: id }).subscribe((res) => { }, (err) => {
                var _a, _b;
                // 修改出错，重新请求已有权限
                this.getRolePages((_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.origin);
                this.getRolePageActions((_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.origin);
            });
        }
        else {
            this.service.cancelPagePermission({ role_id: (_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.key, page_id: id }).subscribe((res) => { }, (err) => {
                var _a, _b;
                // 修改出错，重新请求已有权限
                this.getRolePages((_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.origin);
                this.getRolePageActions((_b = this.activeRole) === null || _b === void 0 ? void 0 : _b.origin);
            });
        }
    }
    // 删除角色
    deleteRole() {
        var _a;
        this.service.deleteRole((_a = this.activeRole) === null || _a === void 0 ? void 0 : _a.key).subscribe((res) => {
            this.getRoles();
        });
    }
}
PermissionSetupComponent.ɵfac = function PermissionSetupComponent_Factory(t) { return new (t || PermissionSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_permission_setup_service__WEBPACK_IMPORTED_MODULE_0__.PermissionSetupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
PermissionSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PermissionSetupComponent, selectors: [["app-permission-setup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_permission_setup_service__WEBPACK_IMPORTED_MODULE_0__.PermissionSetupService])], decls: 31, vars: 11, consts: [[1, "layout"], [1, "container"], [1, "left"], ["nz-row", "", "nzAlign", "middle", 1, "handle", "padding-x"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-button", "", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", "nz-popconfirm", "", "nzPopconfirmTitle", "\u786E\u8BA4\u5220\u9664\u8BE5\u89D2\u8272?", "nzPopconfirmPlacement", "bottom", 3, "disabled", "nzOnConfirm"], [1, "tree"], [1, "view_scroll", "padding"], ["nzShowIcon", "", "nzBlockNode", "", 3, "nzData", "nzClick"], [1, "right"], [1, "view_scroll", 2, "padding", "20px 40px"], ["nzTableLayout", "fixed", "nzShowPagination", "false", 3, "nzData"], ["nzTable", ""], ["nzWidth", "60px"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pageTpl", ""], [3, "nzVisible", "nzTitle", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u5B57", 3, "ngModel", "ngModelChange", 4, "nzModalContent"], [4, "ngFor", "ngForOf"], [3, "ngStyle", "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "snippets", "nzTheme", "outline"], ["nz-checkbox", "", "nzDisabled", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "\u8BF7\u5148\u9009\u62E9\u89D2\u8272\uFF01", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "nzExpand"], ["nz-checkbox", "", "nzDisabled", "", "nz-tooltip", "", "nzTooltipPlacement", "left", "nzTooltipTitle", "\u8BF7\u5148\u9009\u62E9\u89D2\u8272\uFF01"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], [2, "width", "auto", 3, "ngStyle"], ["nz-icon", "", "nzType", "bulb", "nzTheme", "outline"], [2, "width", "60px"], ["nz-input", "", "placeholder", "\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u5B57", 3, "ngModel", "ngModelChange"]], template: function PermissionSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-button-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionSetupComponent_Template_button_click_5_listener() { return ctx.roleModel.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u6DFB\u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionSetupComponent_Template_button_click_7_listener() { return ctx.roleModel.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u4FEE\u6539");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PermissionSetupComponent_Template_button_nzOnConfirm_9_listener() { return ctx.deleteRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u5220\u9664 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-tree", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzClick", function PermissionSetupComponent_Template_nz_tree_nzClick_13_listener($event) { return ctx.roleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-table", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u6743\u9650");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PermissionSetupComponent_ng_container_26_Template, 1, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PermissionSetupComponent_ng_template_27_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nz-modal", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function PermissionSetupComponent_Template_nz_modal_nzVisibleChange_29_listener($event) { return ctx.roleModel.visible = $event; })("nzOnCancel", function PermissionSetupComponent_Template_nz_modal_nzOnCancel_29_listener() { return ctx.roleModel.cancel(); })("nzOnOk", function PermissionSetupComponent_Template_nz_modal_nzOnOk_29_listener() { return ctx.roleModel.mode ? ctx.roleModel.addRole() : ctx.roleModel.modifyRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PermissionSetupComponent_input_30_Template, 1, 1, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.activeRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.activeRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx.pages));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.roleModel.visible)("nzTitle", ctx.roleModel.mode ? "\u6DFB\u52A0\u89D2\u8272" : "\u4FEE\u6539\u89D2\u8272")("nzOkLoading", ctx.roleModel.loading);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonGroupComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__.NzPopconfirmDirective, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_8__.NzTreeComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTdAddOnComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTrExpandDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableFixedRowComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__.NzCheckboxComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor], styles: ["[_nghost-%COMP%]     .ant-table-expanded-row > td {\n  padding: 0;\n}\n[_nghost-%COMP%]     tr > td:nth-of-type(1) {\n  width: 60px;\n}\n[_nghost-%COMP%]     tr > td:nth-of-type(3) {\n  width: 60px;\n}\n[_nghost-%COMP%]     td > table > tbody > tr:nth-of-type(2n-1) {\n  background-color: #fff;\n}\ni[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb24tc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FBQUo7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUdJO0VBQ0UsV0FBQTtBQUROO0FBS0k7RUFDRSxzQkFBQTtBQUhOO0FBUUE7RUFDRSxpQkFBQTtBQUxGIiwiZmlsZSI6InBlcm1pc3Npb24tc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5hbnQtdGFibGUtZXhwYW5kZWQtcm93ID4gdGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgdHIgPiB0ZCB7XHJcbiAgICAmOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRkID4gdGFibGUgPiB0Ym9keSA+IHRyIHtcclxuICAgICY6bnRoLW9mLXR5cGUoMm4tMSkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 26118:
/*!*******************************************************************!*\
  !*** ./src/app/pages/permission-setup/permission-setup.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionSetupModule": () => (/* binding */ PermissionSetupModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _permission_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-setup.component */ 48019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





const route = [{ path: '', component: _permission_setup_component__WEBPACK_IMPORTED_MODULE_1__.PermissionSetupComponent }];
class PermissionSetupModule {
}
PermissionSetupModule.ɵfac = function PermissionSetupModule_Factory(t) { return new (t || PermissionSetupModule)(); };
PermissionSetupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PermissionSetupModule });
PermissionSetupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(route)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PermissionSetupModule, { declarations: [_permission_setup_component__WEBPACK_IMPORTED_MODULE_1__.PermissionSetupComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_permission-setup_permission-setup_module_ts.js.map