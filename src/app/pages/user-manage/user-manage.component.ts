import { UserModifyDrawerComponent } from '@shared/components/user-modify-drawer/user-modify-drawer.component';
import { UserManageService } from './user-manage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { user, role } from '@app/shared/types/commonTypes';
import { CommonService } from '@app/core/services/common.service';

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
  listOfData: user[] = [];
  setOfCheckedId = new Set<string>(); // 已选中集合
  param: any;
  // 权限Modal
  roleModal = {
    roles: <role[]>[],
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
    this.param.pageIndex = this.pageIndex;
    this.param.pageSize = this.pageSize;
    this.service.queryUser(this.param).subscribe((res: any) => {
      this.listOfData = res.data as any[];
      if (isFirst) this.total = res.total;
    });
  }

  // 获取所有角色
  getRoles() {
    this.commonService.getRoles().subscribe((res) => {
      this.roleModal.roles = res as role[];
    });
  }

  // 接收参数
  getConditions(param: any) {
    this.param = param;
    this.setOfCheckedId.clear();
    this.queryUser(true);
  }

  // 添加/删除选中
  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    console.log(this.setOfCheckedId.keys());
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
}
