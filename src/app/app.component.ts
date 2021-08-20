import { CacheService } from './core/services/cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="loading" *ngIf="cache.loading | async"></div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public cache: CacheService) {}
}
