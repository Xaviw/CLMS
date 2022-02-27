(self["webpackChunkclms"] = self["webpackChunkclms"] || []).push([["common"],{

/***/ 66028:
/*!********************************************************************!*\
  !*** ./src/app/pages/application-list/application-list.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationListService": () => (/* binding */ ApplicationListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 68058);



class ApplicationListService {
    constructor(http, message) {
        this.http = http;
        this.message = message;
    }
    // 获取申请列表
    getApplicationList(param) {
        const url = '/apply/getApplyList';
        return this.http.post(url, param);
    }
    cancelApply(param) {
        const url = '/apply/cancelApply';
        return this.http.post(url, param);
    }
    // 获取申请信息
    getApplicationInfo(param) {
        const url = '/apply/getApplyById';
        return this.http.post(url, param);
    }
    // 申请
    apply(param) {
        const url = '/apply/updateApply';
        return this.http.post(url, param);
    }
    // 审核
    examine(param) {
        const url = '/apply/passApply';
        return this.http.post(url, param);
    }
    // 维修完成
    repairFinish(id) {
        const url = '/apply/repairDone';
        return this.http.post(url, { id });
    }
    // 获取申请历史
    getApplicationHistory(param) {
        const url = '/apply/getLog';
        return this.http.post(url, param);
    }
}
ApplicationListService.ɵfac = function ApplicationListService_Factory(t) { return new (t || ApplicationListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
ApplicationListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationListService, factory: ApplicationListService.ɵfac });


/***/ }),

/***/ 66960:
/*!*********************************************************!*\
  !*** ./src/app/pages/bulletin-list/bulletin.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletinService": () => (/* binding */ BulletinService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);


class BulletinService {
    constructor(http) {
        this.http = http;
    }
    // 获取公告
    getBulletin(param) {
        const url = '/ann/getMessage';
        return this.http.post(url, param);
    }
    // 发布公告
    publishBulletin(param) {
        const url = '/ann/addMessage';
        return this.http.post(url, param);
    }
    // 获取公告详细
    getBulletinDetail(id) {
        const url = `/ann/getMessageById`;
        return this.http.post(url, { id });
    }
    // 删除公告
    deleteBulletin(id) {
        const url = `/ann/deleteMessageById`;
        return this.http.post(url, { id });
    }
}
BulletinService.ɵfac = function BulletinService_Factory(t) { return new (t || BulletinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BulletinService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BulletinService, factory: BulletinService.ɵfac });


/***/ }),

/***/ 74542:
/*!********************************************************!*\
  !*** ./src/app/pages/lab-manage/lab-manage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabManageService": () => (/* binding */ LabManageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ 68058);



class LabManageService {
    constructor(http, message) {
        this.http = http;
        this.message = message;
    }
    // 获取机房基础信息
    getLabInfo(id) {
        const url = '/lab/getLabById';
        return this.http.post(url, { labId: id });
    }
    // 删除机房
    deleteLab(id) {
        const url = '/lab/deleteLab';
        return this.http.post(url, { labId: id });
    }
    // 添加机房
    addLab(param) {
        const url = '/lab/addLab';
        return this.http.post(url, param);
    }
    // 修改机房信息
    setLabInfo(param) {
        const url = '/lab/updateLab';
        return this.http.post(url, param);
    }
    // 删除照片
    deletePicture(param) {
        const url = '/lab/deleteImage';
        return this.http.post(url, param);
    }
    // 上传机房照片
    uploadPicture(param) {
        const url = '/lab/upImageInLabId';
        return this.http.post(url, param);
    }
    // 获取机房座位表
    getSeatingChart(id) {
        const url = '/lab/getLabSeatById';
        return this.http.post(url, { labId: id });
    }
    // 获取某日空闲时段
    getFreeTimeRange(param) {
        const url = '/lab/getLabFreeTimeByTime';
        return this.http.post(url, param);
    }
    // 获取某时间段座位表
    getFreeTimeChart(param) {
        const url = '/lab/getSeat';
        return this.http.post(url, param);
    }
    // 编辑座位表
    editSeatingChart(param) {
        const url = '/lab/editSeat';
        return this.http.post(url, param);
    }
}
LabManageService.ɵfac = function LabManageService_Factory(t) { return new (t || LabManageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__.NzMessageService)); };
LabManageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LabManageService, factory: LabManageService.ɵfac });


/***/ }),

/***/ 48897:
/*!*************************************!*\
  !*** ./src/app/shared/enum/enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabStatus": () => (/* binding */ LabStatus),
/* harmony export */   "ApplicationType": () => (/* binding */ ApplicationType),
/* harmony export */   "ApplicationStatus": () => (/* binding */ ApplicationStatus)
/* harmony export */ });
var LabStatus;
(function (LabStatus) {
    LabStatus[LabStatus["open"] = 0] = "open";
    LabStatus[LabStatus["close"] = 1] = "close";
    LabStatus[LabStatus["repair"] = 2] = "repair";
})(LabStatus || (LabStatus = {}));
// 申请类型
const ApplicationType = [
    { text: '机房申请', value: 0, byDefault: true },
    { text: '采购申请', value: 1, byDefault: true },
    { text: '报修申请', value: 2, byDefault: true },
];
// 申请状态
const ApplicationStatus = [
    { text: '待审核', value: 0, byDefault: true, color: 'gray' },
    { text: '已通过', value: 1, byDefault: true, color: 'blue' },
    { text: '未通过', value: 2, byDefault: true, color: 'gray' },
    { text: '已完成', value: 3, byDefault: true, color: 'green' },
    { text: '未完成', value: 4, byDefault: true, color: 'red' },
    { text: '已取消', value: 5, byDefault: true, color: 'gray' },
];


/***/ })

}]);
//# sourceMappingURL=common.js.map