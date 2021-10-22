import { CommonService } from '@app/core/services/common.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, Input, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'upload-drawer',
  templateUrl: './upload-drawer.component.html',
  styleUrls: ['./upload-drawer.component.scss'],
})
export class UploadDrawerComponent implements OnInit {
  visible = false;
  text = '';
  loading = false;

  @Input() title = '导入用户';
  @Input() width = '300px';
  @Input() url!: string;
  @Input() templateUrl?: string;
  @Input() errorUrl!: string;
  @Input() nzShowUploadList = false;
  @Input() nzAccept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

  constructor(private message: NzMessageService, private common: CommonService) {}

  ngOnInit() {}

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  handleChange(info: NzUploadChangeParam) {
    if (info.file.status !== 'uploading') {
      this.loading = true;
    }
    if (info.file.status === 'done') {
      this.loading = false;
      this.text = `成功${info.file.response.success}人，失败${info.file.response.failed}人`;
    } else if (info.file.status === 'error') {
      this.loading = false;
      this.text = '';
      this.message.error('上传失败，请尝试重新上传！');
    }
  }

  downloadTemplate() {
    this.common.download(this.templateUrl!);
  }
  downloadErrorList() {
    this.common.download(this.errorUrl);
  }
}
