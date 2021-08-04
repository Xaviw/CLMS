import { Res } from '@app/types/commonTypes';
import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  menus:any;
  constructor(private service: ClientService) {}

  ngOnInit() {
    this.getMenu();
  }
  
  getMenu() {
    this.service.getMenu().subscribe((res:any) => {
      console.log('res: ', res);
      this.menus = res.data;
      console.log('this.menus: ', this.menus);
    })
  }
}
