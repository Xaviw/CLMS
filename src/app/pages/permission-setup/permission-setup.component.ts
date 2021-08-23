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
  pages: pageRoute[] = [];
  pageFunctions: pageFunction[] = [];
  expandSet = new Set<string>();
  onExpandChange(id: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
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
