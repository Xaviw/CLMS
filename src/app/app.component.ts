import { CacheService } from './core/services/cache.service';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="loading" *ngIf="cache.loading | async"></div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(public cache: CacheService) {}

  ngAfterViewInit() {
    console.log('app——afterViewInit');
    console.log(this.cache.checkInInterval);
    this.cache.startCheckInInterval();
  }
}
