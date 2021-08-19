import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor(private commonService: CommonService) {}
}
