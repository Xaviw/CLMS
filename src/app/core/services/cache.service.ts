import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  public loading: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  constructor() {}
}
