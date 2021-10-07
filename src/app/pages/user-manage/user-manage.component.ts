import { UserModifyDrawerComponent } from '@shared/components/user-modify-drawer/user-modify-drawer.component';
import { UserManageService } from './user-manage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User, Role } from '@app/shared/types/commonTypes';
import { CommonService } from '@app/core/services/common.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
  providers: [UserManageService],
})
export class UserManageComponent implements OnInit {
  @ViewChild('userModifyDrawer') userDrawerEl!: UserModifyDrawerComponent;
  pageIndex = 1;
  pageSize = 20;
  total = 0;
  checked = false; // 全选状态
  loading = false;
  indeterminate = false; // 半选状态
  listOfData: User[] = [];
  setOfCheckedId = new Set<string>(); // 已选中集合
  param: any;
  // 权限Modal
  roleModal = {
    roles: <Role[]>[],
    value: null,
    visible: false,
    loading: false,
    open: () => {
      this.roleModal.visible = true;
    },
    cancel: () => {
      this.roleModal.visible = false;
    },
    setRole: () => {},
  };

  constructor(private service: UserManageService, private commonService: CommonService) {}

  ngOnInit() {
    this.getRoles();
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
    } else if (info.file.status === 'error') {
    }
  }

  // 添加用户
  addUser() {
    this.userDrawerEl.formGroup.reset();
    this.userDrawerEl.open();
  }
  // 修改用户
  modifyUser(data: any) {
    this.userDrawerEl.formGroup.reset();
    this.userDrawerEl.formGroup.patchValue(data);
    this.userDrawerEl.open();
  }

  // 查询用户
  queryUser(isFirst = false) {
    this.service.queryUser(this.param).subscribe((res: any) => {
      this.listOfData = res.data as any[];
      if (isFirst) this.total = res.total;
    });
  }

  // 获取所有角色
  getRoles() {
    this.commonService.getRoles().subscribe((res) => {
      this.roleModal.roles = res as Role[];
    });
  }

  // 接收参数
  getConditions(param: any) {
    this.setOfCheckedId.clear();
    this.param = {
      count: this.pageIndex,
      offset: this.pageSize,
    };
    if (['grade', 'college', 'major', 'class'].includes(param.code)) {
      this.param = {
        ...this.param,
        profession_id: param.data.major.id,
        year: param.data.grade.id,
        college_id: param.data.college.id,
        class_id: param.data.class.id,
      };
      this.queryUser(true);
    } else if (param.code === 'chargeClass') {
      this.param = {
        ...this.param,
        class_id: param.data.chargeClass.id,
      };
    } else if (param.code === 'userSearch') {
      this.param = {
        ...this.param,
        keyword: param.data.userSearch.value,
      };
    }
    // this.queryUser(true);
  }

  // 添加/删除选中
  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  // 刷新全/半选状态
  refreshCheckedStatus(): void {
    this.checked = this.listOfData.every(({ account }) => this.setOfCheckedId.has(account));
    this.indeterminate = this.listOfData.some(({ account }) => this.setOfCheckedId.has(account)) && !this.checked;
  }

  // 选中时更新集合刷新全半选状态
  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  // 全选单页
  onAllChecked(checked: boolean): void {
    this.listOfData.forEach(({ account }) => this.updateCheckedSet(account, checked));
    this.refreshCheckedStatus();
  }

  // 强制下线
  logout() {
    let param = this.setOfCheckedId.keys();
  }
  // 重置密码
  resetPWD() {
    let param = this.setOfCheckedId.keys();
  }
  // 删除用户
  deleteUser() {
    let param = this.setOfCheckedId.keys();
  }

  downloadTemplate() {
    this.service.downloadTemplate().subscribe((res: any) => {
      if (res) {
        // 获取文件名
        let fileName = res.headers.get('content-disposition').split('=')[1];
        // 获取数据类型
        let type = res.headers.get('content-type').split(';')[0];
        let blob = new Blob([res.body], { type: type });
        const a = document.createElement('a');
        // 创建URL
        const blobUrl = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.href = blobUrl;
        document.body.appendChild(a);
        // 下载文件
        a.click();
        // 释放内存
        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      } else {
        console.log('error', res);
      }
    });
  }
}
