import { CommonService } from './../../core/services/common.service';
import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PageSetupService } from './page-setup.service';
import { PageRoute, PageAction } from '@app/shared/types/commonTypes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-page-setup',
  templateUrl: './page-setup.component.html',
  styleUrls: ['./page-setup.component.scss'],
  providers: [PageSetupService],
})
export class PageSetupComponent implements OnInit {
  @ViewChild('pageTree') pageTreeEl!: NzTreeNodeOptions;
  pages: PageRoute[] = []; // 完整页面数据
  pageFunctions: PageAction[] = []; // 页面功能数据
  // 添加页面表单Control
  pageAddForm: FormGroup = this.fb.group({
    parent_page_id: [null],
    title: [null, [Validators.required]],
    link: [null],
    icon: [null],
    show: [true, [Validators.required]],
    key: [null, [Validators.required]],
  });
  // 添加功能表单Control
  functionAddForm: FormGroup = this.fb.group({
    code: [null, [Validators.required]],
    name: [null, [Validators.required]],
    url: [null, [Validators.required]],
  });
  activePage: NzTreeNode | undefined; // 当前选中页面
  isUpdate: Boolean = false;
  topLevelDisabled: BooleanInput = false; // 设为顶层菜单是否可用：已在顶层时true且不可用
  // 设为顶层菜单对应值，true时设置form值为0，false时设置form值为当前选中页面id
  _isTopLevel: Boolean = false;
  get isTopLevel() {
    return this._isTopLevel;
  }
  set isTopLevel(v: Boolean) {
    this._isTopLevel = v;
    if (v) {
      this.pageAddForm.controls.parent_page_id.patchValue('0');
    } else {
      this.pageAddForm.controls.parent_page_id.patchValue(this.activePage?.origin.id);
    }
  }

  // 添加页面抽屉
  addPageDrawer = {
    visible: false, // 是否显示
    // 打开时设置上层页面id
    // 添加
    add: () => {
      this.pageAddForm.reset();
      this.addPageDrawer.visible = true;
      this.isUpdate = false;
      this.pageAddForm.patchValue({
        show: true,
      });
      if (this.activePage) {
        this.pageAddForm.controls.parent_page_id.patchValue(this.activePage?.origin.id);
        this.topLevelDisabled = this.isTopLevel = false;
      } else {
        this.pageAddForm.controls.parent_page_id.patchValue('0');
        this.topLevelDisabled = this.isTopLevel = true;
      }
    },
    // 修改
    update: () => {
      if (this.activePage) {
        this.pageAddForm.reset();
        this.addPageDrawer.visible = true;
        this.isUpdate = true;
        this.pageAddForm.patchValue({
          title: this.activePage.origin.title,
          link: this.activePage.origin?.link,
          icon: this.activePage.origin?.icon,
          show: this.activePage.origin?.show,
          key: this.activePage.origin?.key,
        });
      }
    },
    // 修改页面
    updatePage: () => {
      validateForm(this.pageAddForm.controls);
      if (this.pageAddForm.valid) {
        const param = this.pageAddForm.getRawValue();
        param.id = this.activePage?.origin.id;
        delete param.parent_page_id;
        this.service.modifyPage(param).subscribe((res) => {
          this.addPageDrawer.close();
          this.getAllPages();
        });
      }
    },
    // 删除页面
    deletePage: () => {
      this.service.deletePage(this.activePage!.origin.id).subscribe((res) => {
        this.getAllPages();
      });
    },
    // 添加页面
    addPage: () => {
      validateForm(this.pageAddForm.controls);
      if (this.pageAddForm.valid) {
        const param = this.pageAddForm.getRawValue();
        this.service.addPage(param).subscribe((res) => {
          this.addPageDrawer.close();
          this.getAllPages();
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
    functionId: '', // 当前操作功能
    // 添加
    insert: () => {
      this.isUpdate = false;
      this.functionAddForm.reset();
      this.addFunctionDrawer.visible = true;
    },
    // 修改
    update: (item: PageAction) => {
      this.isUpdate = true;
      this.addFunctionDrawer.functionId = item.id;
      this.functionAddForm.reset();
      this.addFunctionDrawer.visible = true;
      this.functionAddForm.patchValue(item);
    },
    close() {
      this.visible = false;
    },
    // 添加功能
    addFunction: () => {
      validateForm(this.functionAddForm.controls);
      if (this.functionAddForm.valid) {
        const param = this.functionAddForm.getRawValue();
        param.page_id = this.activePage?.origin.id;
        this.service.addFunction(param).subscribe((res) => {
          this.addFunctionDrawer.close();
          this.getPageFunction(this.activePage?.origin.id);
        });
      }
    },
    // 修改功能
    modifyFunction: () => {
      validateForm(this.functionAddForm.controls);
      if (this.functionAddForm.valid) {
        const param = this.functionAddForm.getRawValue();
        param.permission_id = this.addFunctionDrawer.functionId;
        this.service.modifyFunction(param).subscribe((res) => {
          this.addFunctionDrawer.close();
          this.getPageFunction(this.activePage?.origin.id);
        });
      }
    },
    // 删除功能
    deleteFunction: (id: string) => {
      this.service.deleteFunction(id).subscribe((res) => {
        this.getPageFunction(this.activePage?.origin.id);
      });
    },
  };

  constructor(private service: PageSetupService, private fb: FormBuilder, private common: CommonService) {}

  ngOnInit() {
    this.getAllPages();
  }

  // 获取完整菜单
  getAllPages() {
    this.common.getAllPages().subscribe((res) => {
      this.pages = res as PageRoute[];
    });
  }

  // 调整菜单顺序
  adjustPageOrder(e: NzFormatEmitEvent) {
    const nodes = e.dragNode?.parentNode?.children || this.pageTreeEl.getTreeNodes();
    const param = {
      parent_page_id: e.dragNode?.parentNode?.origin.id ?? '0',
      page_id: e.dragNode?.origin.id!,
      sort: (nodes as NzTreeNode[]).findIndex((item) => item.key === e.dragNode?.key) + 1,
    };
    this.service.adjustPage(param).subscribe(
      (res) => {},
      (err) => {
        this.getAllPages();
      },
    );
  }

  // 单击菜单触发
  pageClick(e: NzFormatEmitEvent) {
    if (this.activePage !== e.node) {
      this.activePage = e.node!;
      this.pageAddForm.controls.parent_page_id.patchValue(e.node?.origin.id);
      if (e.node?.origin.link) {
        // 叶子节点=>加载功能
        this.getPageFunction(e.node.origin.id);
      } else if (e.node && !e.node?.origin.link && !e.node?.origin.isLeaf) {
        // 父节点=>展开
        e.node.isExpanded = true;
        this.pageFunctions = [];
      }
    } else {
      this.activePage = undefined;
      this.pageFunctions = [];
    }
  }

  // 获取页面下功能
  getPageFunction(id: string) {
    this.common.getPageFunctions(id).subscribe((res) => {
      this.pageFunctions = res as PageAction[];
    });
  }

  // 取消添加
  cancelAdd() {
    this.pageAddForm.reset();
    this.addPageDrawer.close();
    this.functionAddForm.reset();
    this.addFunctionDrawer.close();
  }
}
