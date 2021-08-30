import { CommonService } from './../../core/services/common.service';
import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PageSetupService } from './page-setup.service';
import { pageRoute, pageFunction } from '@app/shared/types/commonTypes';
import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/tree';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-page-setup',
  templateUrl: './page-setup.component.html',
  styleUrls: ['./page-setup.component.scss'],
  providers: [PageSetupService],
})
export class PageSetupComponent implements OnInit {
  pages: pageRoute[] = []; // 完整页面数据
  pageFunctions: pageFunction[] = []; // 页面功能数据
  // 添加页面表单Control
  pageAddForm: FormGroup = this.fb.group({
    parentPage: [null],
    title: [null, [Validators.required]],
    link: [null, [Validators.required]],
    icon: [null],
  });
  // 添加功能表单Control
  functionAddForm: FormGroup = this.fb.group({
    title: [null, [Validators.required]],
    link: [null, [Validators.required]],
    icon: [null],
  });
  activePage: NzTreeNode | undefined; // 当前选中页面
  isUpdate: Boolean = false;
  topLevelDisabled: BooleanInput = false; // 设为顶层菜单是否可用：已在顶层时true且不可用
  // 设为顶层菜单对应值，true时设置form值为-1，false时设置form值为当前选中页面id
  _isTopLevel: Boolean = false;
  get isTopLevel() {
    return this._isTopLevel;
  }
  set isTopLevel(v: Boolean) {
    this._isTopLevel = v;
    if (v) {
      this.pageAddForm.controls.parentPage.patchValue('-1');
    } else {
      this.pageAddForm.controls.parentPage.patchValue(this.activePage?.key);
    }
  }

  // 添加页面抽屉
  addPageDrawer = {
    visible: false, // 是否显示
    // 打开时设置上层页面id
    add: () => {
      this.addPageDrawer.visible = true;
      this.isUpdate = false;
      if (this.activePage) {
        this.pageAddForm.controls.parentPage.patchValue(this.activePage?.key);
        this.topLevelDisabled = this.isTopLevel = false;
      } else {
        this.pageAddForm.controls.parentPage.patchValue('-1');
        this.topLevelDisabled = this.isTopLevel = true;
      }
    },
    update: () => {
      if (this.activePage) {
        this.addPageDrawer.visible = true;
        this.isUpdate = true;
        this.pageAddForm.patchValue({
          title: this.activePage.origin.title,
          link: this.activePage.origin?.link,
          icon: this.activePage.origin?.icon,
        });
      }
    },
    close() {
      this.visible = false;
    },
  };

  // 添加功能抽屉
  addFunctionDrawer = {
    visible: false, // 是否显示
    // 打开时设置上层页面id
    open: () => {
      this.addFunctionDrawer.visible = true;
    },
    close() {
      this.visible = false;
    },
  };

  constructor(private service: PageSetupService, private fb: FormBuilder, private common: CommonService) {}

  ngOnInit() {
    this.getAllPages();
  }

  // 获取完整菜单
  getAllPages() {
    this.common.getAllPages().subscribe((res) => {
      this.pages = res as pageRoute[];
    });
  }

  // 调整菜单顺序
  adjustPageOrder(e: NzFormatEmitEvent) {}

  // 单击菜单触发
  pageClick(e: NzFormatEmitEvent) {
    if (this.activePage !== e.node) {
      this.activePage = e.node!;
      this.pageAddForm.controls.parentPage.patchValue(e.keys?.[0]);
    } else {
      this.activePage = undefined;
    }
    if (e.node?.origin.isLeaf) {
      // 叶子节点=>加载功能
      this.common.getPageFunctions(e.node.key).subscribe((res) => {
        this.pageFunctions = res as pageFunction[];
      });
    } else if (e.node) {
      // 父节点=>展开
      e.node.isExpanded = !e.node.isExpanded;
    }
  }

  // 添加页面
  addPage() {
    validateForm(this.pageAddForm.controls);
  }

  // 取消添加
  cancelAdd() {
    this.pageAddForm.reset();
    this.addPageDrawer.close();
  }

  // 删除页面
  deletePage() {}

  // 修改页面
  updatePage() {}

  // 删除功能
  deleteFunction() {}
}
