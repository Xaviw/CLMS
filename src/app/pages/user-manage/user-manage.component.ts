import { UploadDrawerComponent } from './../../shared/components/upload-drawer/upload-drawer.component';
import { Router } from '@angular/router';
import { UserModifyDrawerComponent } from '@shared/components/user-modify-drawer/user-modify-drawer.component';
import { UserManageService } from './user-manage.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { User, Role, FilterType } from '@app/shared/types/commonTypes';
import { CommonService } from '@app/core/services/common.service';
import { CacheService } from '@app/core/services/cache.service';

@Component({
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
  providers: [UserManageService],
})
export class UserManageComponent implements OnInit {
  @Input() checkMode = false;
  @Input() defaultChecked?: string[];
  @ViewChild('userModifyDrawer') userDrawerEl!: UserModifyDrawerComponent;
  @ViewChild('uploadDrawerEl') uploadDrawerEl!: UploadDrawerComponent;
  pageIndex = 1;
  pageSize = 20;
  total = 0;
  checked = false; // 全选状态
  loading = false;
  indeterminate = false; // 半选状态
  listOfData: User[] = [];
  setOfCheckedId = new Set<string>(); // 已选中集合
  param: any;
  type!: number;
  isAdd: boolean = true;
  oldValue: any;
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
    setRole: () => {
      const param = {
        roles: this.roleModal.value as unknown as string[],
        user_ids: Array.from(this.setOfCheckedId),
      };
      this.service.setUserRole(param).subscribe((res) => {
        this.roleModal.cancel();
        this.getUser();
      });
    },
  };

  constructor(
    private service: UserManageService,
    private commonService: CommonService,
    public cache: CacheService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getRoles();
    this.type = this.router.url === '/teacher-manage' ? 1 : 0;
    setTimeout(() => {
      if (this.defaultChecked?.length) {
        for (const item of this.defaultChecked) {
          if (!this.setOfCheckedId.has(item)) {
            this.setOfCheckedId.add(item);
          }
        }
      }
    });
  }

  // 添加用户
  addUser() {
    this.isAdd = true;
    this.userDrawerEl.addOpen();
  }
  // 修改用户
  modifyUser(data: any) {
    this.oldValue = {
      account: data.account,
      name: data.name,
      grade: data.grade,
      college: data.college_id,
      major: data?.major_id,
      class: data?.class_id,
      role: data.role.map((item: FilterType) => item.id),
    };
    this.isAdd = false;
    this.userDrawerEl.formGroup.reset();
    this.userDrawerEl.open();
  }

  // 查询用户
  queryUser(isFirst = false) {
    if (this.param) {
      this.service
        .queryUser({ ...this.param, pageIndex: this.pageIndex, pageSize: this.pageSize, type: this.type })
        .subscribe((res: any) => {
          this.listOfData = res.data as any[];
          if (isFirst) {
            this.total = res.total;
          }
        });
    }
  }

  // 搜索用户
  searchUser(isFirst = false) {
    this.service
      .searchUser({ ...this.param, pageIndex: this.pageIndex, pageSize: this.pageSize, type: this.type })
      .subscribe((res: any) => {
        this.listOfData = res.data as any[];
        if (isFirst) {
          this.total = res.total;
        }
      });
  }

  // 换页/页尺寸
  getUser() {
    if (this.param?.keyword) {
      this.searchUser();
    } else {
      this.queryUser();
    }
  }

  // 获取所有角色
  getRoles() {
    this.commonService.getRoles().subscribe((res) => {
      this.roleModal.roles = res as Role[];
    });
  }

  // 接收参数
  getConditions(param: any) {
    if (!this.checkMode) {
      this.setOfCheckedId.clear();
    }
    this.pageIndex = 1;
    if (['grade', 'college', 'major', 'class'].includes(param.code)) {
      this.param = {
        major: param.data.major.id,
        grade: param.data.grade.id,
        college: param.data.college.id,
        class: param.data.class.id,
      };
      this.queryUser(true);
    } else if (param.code === 'chargeClass') {
      this.param = {
        class: param.data.chargeClass.id,
      };
      this.queryUser(true);
    } else if (param.code === 'userSearch') {
      this.param = {
        keyword: param.data.userSearch.trim(),
      };
      this.searchUser(true);
    }
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
    let param = Array.from(this.setOfCheckedId);
    this.service.makeOffLine(param).subscribe((res) => {
      this.getUser();
    });
  }
  // 重置密码
  resetPWD() {
    let param = Array.from(this.setOfCheckedId);
    this.service.resetDefaultPassword(param).subscribe();
  }
  // 删除用户
  deleteUser() {
    let param = Array.from(this.setOfCheckedId);
    this.service.deleteUsers(param).subscribe((res) => {
      this.setOfCheckedId.clear();
      this.checked = false;
      this.getUser();
    });
  }

  // 导出用户
  output() {
    this.commonService.download('/user/exportUser', this.param);
  }
}
