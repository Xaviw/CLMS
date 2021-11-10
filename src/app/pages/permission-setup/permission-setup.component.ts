import { CommonService } from './../../core/services/common.service';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { PermissionSetupService } from './permission-setup.service';
import { Component, OnInit } from '@angular/core';
import { Role, PageRoute } from '@app/shared/types/commonTypes';

@Component({
  selector: 'app-permission-setup',
  templateUrl: './permission-setup.component.html',
  styleUrls: ['./permission-setup.component.scss'],
  providers: [PermissionSetupService],
})
export class PermissionSetupComponent implements OnInit {
  roles: Role[] = []; // 角色数据
  activeRole: NzTreeNode | undefined; // 当前选中角色
  pages: PageRoute[] = []; // 页面数据
  pageFunctions = new Map(); // 页面功能数据
  expandSet = new Set<string>(); // 已展开页面列表
  // 角色操作对话框
  roleModel = {
    visible: false, // 显示控制
    loading: false, // 确认loading状态控制
    value: '', // 文本框值
    mode: true, // 当前模式，true=>添加，false=>修改
    add: () => {
      this.roleModel.visible = true;
      this.roleModel.mode = true;
    },
    update: () => {
      this.roleModel.visible = true;
      this.roleModel.mode = false;
      this.roleModel.value = this.activeRole?.origin.title!;
    },
    // 添加角色
    addRole: () => {
      this.roleModel.loading = true;
      this.service.addRole(this.roleModel.value).subscribe(
        (res) => {
          this.roleModel.loading = false;
          this.roleModel.visible = false;
          this.getRoles();
          this.roleModel.value = '';
        },
        (err) => {
          this.roleModel.loading = false;
        },
      );
    },
    // 修改角色
    modifyRole: () => {
      this.roleModel.loading = true;
      const param = {
        role_id: this.activeRole!.key,
        role_name: this.roleModel.value,
      };
      this.service.modifyRole(param).subscribe(
        (res) => {
          this.roleModel.loading = false;
          this.roleModel.visible = false;
          this.getRoles();
          this.roleModel.value = '';
        },
        (err) => {
          this.roleModel.loading = false;
        },
      );
    },
    cancel: () => {
      this.roleModel.visible = false;
      this.roleModel.value = '';
    },
  };

  // 展开页面触发
  onExpandChange(id: string, checked: boolean, isLeaf: boolean): void {
    if (checked) {
      this.expandSet.add(id);
      if (!this.pageFunctions.get(id)) {
        this.getPageFunctions(id);
      }
    } else {
      this.expandSet.delete(id);
    }
  }

  constructor(private service: PermissionSetupService, private common: CommonService) {}

  ngOnInit() {
    this.getRoles();
    this.getAllPages();
  }

  // 获取所有角色
  getRoles() {
    this.common.getRoles().subscribe((res) => {
      (res as Role[]).forEach((item: Role) => {
        item.isLeaf = true;
        item.icon = 'user';
        item.pages = [];
        item.actions = [];
      });
      this.roles = res as Role[];
    });
  }

  // 获取完整菜单
  getAllPages() {
    this.common.getAllPages().subscribe((res) => {
      this.pages = res as PageRoute[];
    });
  }

  // 获取页面功能
  getPageFunctions(param: string) {
    this.common.getPageFunctions(param).subscribe((res) => {
      this.pageFunctions.set(param, res);
    });
  }

  // 获取角色菜单权限
  getRolePages(origin: NzTreeNodeOptions) {
    this.service.getRolePages(origin.key).subscribe((res) => {
      origin.pages = res;
    });
  }

  // 获取角色功能权限
  getRolePageActions(origin: NzTreeNodeOptions) {
    this.service.getRolePageFunctions(origin.key).subscribe((res) => {
      origin.actions = res;
    });
  }

  // 单击角色
  roleClick(e: NzFormatEmitEvent) {
    if (this.activeRole !== e.node) {
      this.activeRole = e.node!;
      if (!e.node?.origin.pages.length || !e.node?.origin.actions.length) {
        this.getRolePages(this.activeRole?.origin!);
        this.getRolePageActions(this.activeRole?.origin!);
      }
    } else {
      this.activeRole = undefined;
    }
  }

  // 修改功能权限
  modifyFunctionPermission(e: NzFormatEmitEvent, id: string) {
    if (e) {
      this.service.addFunctionPermission({ role_id: this.activeRole?.key!, permissions_id: id }).subscribe(
        (res) => {},
        (err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(this.activeRole?.origin!);
          this.getRolePageActions(this.activeRole?.origin!);
        },
      );
    } else {
      this.service.cancelFunctionPermission({ role_id: this.activeRole?.key!, permissions_id: id }).subscribe(
        (res) => {},
        (err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(this.activeRole?.origin!);
          this.getRolePageActions(this.activeRole?.origin!);
        },
      );
    }
  }

  // 修改页面权限
  modifyPagePermission(e: NzFormatEmitEvent, id: string) {
    if (e) {
      this.service.addPagePermission({ role_id: this.activeRole?.key!, page_id: id }).subscribe(
        (res) => {},
        (err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(this.activeRole?.origin!);
          this.getRolePageActions(this.activeRole?.origin!);
        },
      );
    } else {
      this.service.cancelPagePermission({ role_id: this.activeRole?.key!, page_id: id }).subscribe(
        (res) => {},
        (err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(this.activeRole?.origin!);
          this.getRolePageActions(this.activeRole?.origin!);
        },
      );
    }
  }

  // 删除角色
  deleteRole() {
    this.service.deleteRole(this.activeRole?.key!).subscribe((res) => {
      this.getRoles();
    });
  }
}
