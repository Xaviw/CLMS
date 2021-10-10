import { ActivatedRoute, Router } from '@angular/router';
import { UserModifyDrawerComponent } from '@shared/components/user-modify-drawer/user-modify-drawer.component';
import { UserManageService } from './user-manage.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User, Role, FilterType } from '@app/shared/types/commonTypes';
import { CommonService } from '@app/core/services/common.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'user-manage',
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
  type!: number;
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
      console.log(this.roleModal.value);
    },
  };
  // 导入用户抽屉
  importDrawer = {
    visible: false,
    message: '成功20，失败2',
    open: () => {
      this.importDrawer.visible = true;
    },
    close: () => {
      this.importDrawer.visible = false;
    },
    handleChange: (info: NzUploadChangeParam) => {
      if (info.file.status !== 'uploading') {
      }
      if (info.file.status === 'done') {
      } else if (info.file.status === 'error') {
      }
    },
  };

  constructor(
    private service: UserManageService,
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getRoles();
    this.type = this.router.url === '/teacher-manage' ? 1 : 0;
  }

  // 添加用户
  addUser() {
    this.userDrawerEl.formGroup.reset();
    this.userDrawerEl.open();
  }
  // 修改用户
  modifyUser(data: any) {
    const param = {
      ...data,
      role: data.role.map((item: FilterType) => item.id),
    };
    this.userDrawerEl.formGroup.reset();
    this.userDrawerEl.formGroup.patchValue(param);
    this.userDrawerEl.open();
  }

  // 查询用户
  queryUser(isFirst = false) {
    this.service
      .queryUser({ ...this.param, pageIndex: this.pageIndex, pageSize: this.pageSize, type: this.type })
      .subscribe((res: any) => {
        this.listOfData = res.data as any[];
        if (isFirst) {
          this.total = res.total;
        }
      });
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
    this.setOfCheckedId.clear();
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
        keyword: param.data.userSearch.value,
      };
    }
    this.searchUser(true);
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

  // 导出用户
  output() {
    this.service.output(this.param).subscribe();
  }
}
