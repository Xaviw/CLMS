import { CommonService } from './../../core/services/common.service';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { PermissionSetupService } from './permission-setup.service';
import { Component, OnInit } from '@angular/core';
import { role, pageRoute, pageFunction } from '@app/shared/types/commonTypes';

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
  // 展开页面触发
  onExpandChange(id: string, checked: boolean, isLeaf: boolean): void {
    if (checked) {
      this.expandSet.add(id);
      if (!this.pageFunctions.get(id) && isLeaf) {
        this.getPageFunctions(id);
        console.log(this.pageFunctions);
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

  // 单击角色
  roleClick(e: NzFormatEmitEvent) {
    console.log(e);
    if (this.activeRole !== e.node) {
      this.activeRole = e.node!;
    } else {
      this.activeRole = undefined;
    }
  }
}
