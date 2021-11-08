import { BulletinInfo } from '@app/shared/types/commonTypes';
import { BulletinService } from './../bulletin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import E from 'wangeditor';
import Editor from 'wangeditor';
import { NodeListType } from 'wangeditor/dist/text/getChildrenJSON';
import { CacheService } from '@app/core/services/cache.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss'],
  providers: [BulletinService],
})
export class BulletinComponent implements OnInit, AfterViewInit {
  detailInfo: BulletinInfo = {} as BulletinInfo;
  editor!: Editor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: BulletinService,
    private router: Router,
    public cache: CacheService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      this.getBulletinDetail(res.id);
    });
  }

  ngAfterViewInit() {}

  // 获取公告详细
  getBulletinDetail(id: string) {
    this.service.getBulletinDetail(id).subscribe((res) => {
      this.detailInfo = res as BulletinInfo;
      if ((res as BulletinInfo).content) {
        this.editor = new E('#toolbar', '#container');
        this.editor.create();
        this.editor.disable();
        this.editor.txt.setJSON((res as BulletinInfo).content as unknown as NodeListType);
      }
    });
  }

  // 删除公告
  deleteBulletin() {
    this.service.deleteBulletin(this.detailInfo.id).subscribe((res) => {
      this.router.navigate(['/bulletin', 'list']);
    });
  }
}
