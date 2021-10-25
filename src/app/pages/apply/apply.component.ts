import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApplicationListService } from './../application-list/application-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
  providers: [ApplicationListService],
})
export class ApplyComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ApplicationListService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      // 类型错误，返回列表
      if (!['0', '1', '2'].includes(params.type)) {
        this.message.error('错误的申请类型！');
        this.router.navigateByUrl('/application-list');
      }
      // 构建表单字段
      this.form = this.fb.group({
        user: [null, Validators.required],
        remark: [null, Validators.required],
      });
      if (params.type === 0) {
        this.form.addControl('time', this.fb.control([null, Validators.required]));
      }
      if (params.type === 0 || params.type === 1) {
        this.form.addControl('lab', this.fb.control([null, Validators.required]));
        this.form.addControl('seat', this.fb.control([null, Validators.required]));
      }
      if (params.type === 2) {
        this.form.addControl('list', this.fb.control([null, Validators.required]));
      }
    });
  }
}
