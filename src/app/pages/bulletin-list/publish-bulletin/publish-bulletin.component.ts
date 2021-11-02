import { Router } from '@angular/router';
import { BulletinService } from './../bulletin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import E from 'wangeditor';
import Editor from 'wangeditor';

@Component({
  selector: 'app-publish-bulletin',
  templateUrl: './publish-bulletin.component.html',
  styleUrls: ['./publish-bulletin.component.scss'],
  providers: [BulletinService],
})
export class PublishBulletinComponent implements OnInit, AfterViewInit {
  editor!: Editor;
  title?: string;
  constructor(private message: NzMessageService, private service: BulletinService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.editor = new E('#toolbar', '#container');
    this.editor.config.uploadImgServer = '/upload-img';
    this.editor.config.customAlert = (s: string, t: string) => {
      switch (t) {
        case 'success':
          this.message.success(s);
          break;
        case 'info':
          this.message.info(s);
          break;
        case 'warning':
          this.message.warning(s);
          break;
        case 'error':
          this.message.error(s);
          break;
        default:
          this.message.info(s);
          break;
      }
    };
    this.editor.create();
  }

  publish() {
    if (!this.title) {
      this.message.warning('请输入标题');
      return;
    }
    if (!this.editor.txt.text()) {
      this.message.warning('请输入内容');
      return;
    }
    this.service
      .publishBulletin({ title: this.title, content: JSON.stringify(this.editor.txt.getJSON()) })
      .subscribe((res) => {
        this.router.navigateByUrl('/bulletin/' + (res as string));
      });
  }
}
