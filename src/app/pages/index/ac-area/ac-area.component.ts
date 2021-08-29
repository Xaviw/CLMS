import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'ac-area',
  templateUrl: './ac-area.component.html',
  styleUrls: ['./ac-area.component.scss', '../index.component.scss'],
  providers: [IndexService],
})
export class AcAreaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
