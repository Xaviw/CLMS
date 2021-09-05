import { tap } from 'rxjs/operators';
import { CommonService } from './../../core/services/common.service';
import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PageSetupService } from './page-setup.service';
import { pageRoute, pageFunction } from '@app/shared/types/commonTypes';
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
  pages: pageRoute[] = []; // 完整页面数据
  pageFunctions: pageFunction[] = []; // 页面功能数据
  // 添加页面表单Control
  pageAddForm: FormGroup = this.fb.group({
    parent_page_id: [null],
    title: [null, [Validators.required]],
    link: [null, [Validators.required]],
    icon: [null],
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
      this.pageAddForm.controls.parent_page_id.patchValue(this.activePage?.key);
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
      if (this.activePage) {
        this.pageAddForm.controls.parent_page_id.patchValue(this.activePage?.key);
        this.topLevelDisabled = this.isTopLevel = false;
      } else {
        this.pageAddForm.controls.parent_page_id.patchValue('0');
        this.topLevelDisabled = this.isTopLevel = true;
      }
    },
    // 修改
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
    // 修改页面
    updatePage: () => {
      validateForm(this.pageAddForm.controls);
      if (this.pageAddForm.valid) {
        const param = this.pageAddForm.getRawValue();
        this.service.modifyPage(param).subscribe((res) => {
          this.getAllPages();
        });
      }
    },
    // 删除页面
    deletePage: () => {
      this.service.deletePage(this.activePage!.key).subscribe((res) => {
        this.getAllPages();
      });
    },
    // 添加页面
    addPage: () => {
      validateForm(this.pageAddForm.controls);
      if (this.pageAddForm.valid) {
        const param = this.pageAddForm.getRawValue();
        this.service.addPage(param).subscribe((res) => {
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
      this.functionAddForm.reset();
      this.addFunctionDrawer.visible = true;
    },
    // 修改
    update: (item: pageFunction) => {
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
        param.page_id = this.activePage?.key;
        this.service.addFunction(param).subscribe((res) => {
          this.getPageFunction(this.activePage?.key!);
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
          this.getPageFunction(this.activePage?.key!);
        });
      }
    },
    // 删除功能
    deleteFunction: (id: string) => {
      this.service.deleteFunction(id).subscribe((res) => {
        this.getPageFunction(this.activePage?.key!);
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
      this.pages = res as pageRoute[];
    });
  }

  // 调整菜单顺序
  adjustPageOrder(e: NzFormatEmitEvent) {
    const nodes = e.dragNode?.parentNode?.children || this.pageTreeEl.getTreeNodes();
    const param = {
      parent_page_id: e.dragNode?.parentNode?.key ?? '0',
      page_id: e.dragNode?.key!,
      sort: (nodes as NzTreeNode[]).findIndex((item) => item.key === e.dragNode?.key) + 1,
    };
    this.service
      .adjustPage(param)
      .pipe(
        tap((err) => {
          // this.getAllPages();
        }),
      )
      .subscribe();
  }

  // 单击菜单触发
  pageClick(e: NzFormatEmitEvent) {
    if (this.activePage !== e.node) {
      this.activePage = e.node!;
      this.pageAddForm.controls.parent_page_id.patchValue(e.keys?.[0]);
      if (e.node?.origin.isLeaf) {
        // 叶子节点=>加载功能
        this.getPageFunction(e.node.key);
      } else if (e.node) {
        // 父节点=>展开
        e.node.isExpanded = !e.node.isExpanded;
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
      this.pageFunctions = res as pageFunction[];
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
