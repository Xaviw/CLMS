import { CommonService } from './../../core/services/common.service';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { PermissionSetupService } from './permission-setup.service';
import { Component, OnInit } from '@angular/core';
import { role, pageRoute } from '@app/shared/types/commonTypes';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-permission-setup',
  templateUrl: './permission-setup.component.html',
  styleUrls: ['./permission-setup.component.scss'],
  providers: [PermissionSetupService],
})
export class PermissionSetupComponent implements OnInit {
  roles: role[] = []; // 角色数据
  activeRole: NzTreeNode | undefined; // 当前选中角色
  pages: pageRoute[] = []; // 页面数据
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
      this.service
        .addRole(this.roleModel.value)
        .pipe(
          tap((err) => {
            this.roleModel.loading = false;
          }),
        )
        .subscribe((res) => {
          this.roleModel.loading = false;
          this.getRoles();
        });
    },
    // 修改角色
    modifyRole: () => {
      this.roleModel.loading = true;
      this.service
        .modifyRole(this.roleModel.value)
        .pipe(
          tap((err) => {
            this.roleModel.loading = false;
          }),
        )
        .subscribe((res) => {
          this.roleModel.loading = false;
          this.getRoles();
        });
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
      if (!this.pageFunctions.get(id) && isLeaf) {
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
    this.service.getRoles().subscribe((res) => {
      (res as role[]).forEach((item: role) => {
        item.isLeaf = true;
        item.icon = 'user';
        item.pages = [];
        item.functions = [];
      });
      this.roles = res as role[];
    });
  }

  // 获取完整菜单
  getAllPages() {
    this.common.getAllPages().subscribe((res) => {
      this.pages = res as pageRoute[];
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
      console.log('origin: ', origin);
    });
  }

  // 获取角色功能权限
  getRolePageFunctions(origin: NzTreeNodeOptions) {
    this.service.getRolePages(origin.key).subscribe((res) => {
      origin.functions = res;
      console.log('origin: ', origin);
    });
  }

  // 单击角色
  roleClick(e: NzFormatEmitEvent) {
    console.log('e: ', e);
    if (this.activeRole !== e.node) {
      this.activeRole = e.node!;
      if (!e.node?.origin.pages.length || !e.node?.origin.functions.length) {
        this.getRolePages(this.activeRole?.origin!);
        this.getRolePageFunctions(this.activeRole?.origin!);
      }
    } else {
      this.activeRole = undefined;
    }
  }

  // 修改功能权限
  modifyFunctionPermission(e: NzFormatEmitEvent, id: string) {
    this.service
      .setFunctionPermission({ roleId: this.activeRole?.key!, functionId: id })
      .pipe(
        tap((err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(this.activeRole?.origin!);
          this.getRolePageFunctions(this.activeRole?.origin!);
        }),
      )
      .subscribe();
  }

  // 修改页面权限
  modifyPagePermission(e: NzFormatEmitEvent, id: string) {
    this.service
      .setPagePermission({ roleId: this.activeRole?.key!, pageId: id })
      .pipe(
        tap((err) => {
          // 修改出错，重新请求已有权限
          this.getRolePages(e.node?.origin!);
          this.getRolePageFunctions(e.node?.origin!);
        }),
      )
      .subscribe();
  }

  // 删除角色
  deleteRole() {
    this.service.deleteRole(this.activeRole?.key!).subscribe((res) => {
      this.getRoles();
    });
  }
}
