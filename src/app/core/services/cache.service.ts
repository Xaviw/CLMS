import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface pageRoutes {
  link?: string;
  text: string;
  icon?: string;
  function?: string[];
  children?: pageRoutes[];
}

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  _routes: pageRoutes[] | undefined;
  set routes(data: pageRoutes[] | undefined) {
    if (data) {
      this._routes = data;
    }
  }
  get routes() {
    return this._routes;
  }
  constructor() {}
}
