import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IndexService } from '../index.service';

interface comment {
  id: string;
  parentId: string;
  parentName: string;
  account: string;
  name: string;
  avatar: string;
  content: string;
  createTime: string;
  comments?: number;
  children?: comment[];
  expand?: boolean;
  loading?: boolean;
}

interface comments {
  total: number;
  data: comment[];
}

@Component({
  selector: 'ac-area',
  templateUrl: './ac-area.component.html',
  styleUrls: ['./ac-area.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class AcAreaComponent implements OnInit {
  @ViewChild('textArea') textArea: ElementRef | undefined;
  // 数据
  commentsData: comment[] = [];
  // 总数
  total: number = 0;
  // 列表参数
  param = {
    pageIndex: 1,
    pageSize: 10,
  };
  // 记录回复对应留言
  reply: comment | undefined;

  constructor(private service: IndexService) {}

  ngOnInit() {
    this.getComments();
  }

  // 获取评论列表
  getComments() {
    this.service.getComments(this.param).subscribe((res) => {
      this.commentsData = (res as comments).data;
      this.total = (res as comments).total;
    });
  }

  // 获取评论回复
  getReply(comment: comment) {
    if (comment?.expand) {
      comment.expand = false;
    } else if (comment?.children?.length) {
      comment.expand = true;
    } else if (!comment?.children?.length) {
      comment.loading = true;
      this.service.getReply(comment.id).subscribe((res) => {
        comment.expand = true;
        comment.loading = false;
        comment.children = res as comment[];
      });
    }
  }

  // 点击回复
  clickToReply(item: comment) {
    this.reply = item;
    this.textArea?.nativeElement.focus();
  }

  // 回复框失去焦点
  textAreaBlur() {
    this.reply = undefined;
  }

  // 发布留言
  // TODO
  postMessage() {}

  // 发布回复
  // TODO
  postReply() {}
}
