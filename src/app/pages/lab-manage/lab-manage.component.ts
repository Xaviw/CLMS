import { validateForm } from '@shared/utils/utils';
import { FormBuilder, Validators } from '@angular/forms';
import { LabManageService } from './lab-manage.service';
import { Component, OnInit } from '@angular/core';
import { LabInfo } from '@app/shared/types/commonTypes';

@Component({
  selector: 'lab-manage',
  templateUrl: './lab-manage.component.html',
  styleUrls: ['./lab-manage.component.scss'],
  providers: [LabManageService],
})
export class LabManageComponent implements OnInit {
  labList: LabInfo[] = [];
  // 添加机房抽屉
  addLabDrawer = {
    visible: false,
    formGroup: this.fb.group({
      name: [null, [Validators.required]],
      description: [null],
    }),
    cancel() {
      this.formGroup.reset();
      this.visible = false;
    },
    handleOk: () => {
      console.log(this.addLabDrawer.formGroup.getRawValue());
      validateForm(this.addLabDrawer.formGroup.controls);
      if (this.addLabDrawer.formGroup.valid) {
        this.service.addLab(this.addLabDrawer.formGroup.getRawValue()).subscribe((res) => {
          this.getLabList();
        });
      }
    },
  };

  constructor(private service: LabManageService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getLabList();
  }

  // 获取机房列表
  getLabList() {
    this.service.getLabList().subscribe((res) => {
      this.labList = res as LabInfo[];
    });
  }
}
