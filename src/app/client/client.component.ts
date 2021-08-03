import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  constructor(private service: ClientService) {}

  ngOnInit() { }
  
  test() {
    this.service.test().subscribe(res => {
      console.log('res', res);
    })
  }
}
