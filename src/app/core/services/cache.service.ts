import { CommonRequestService } from './commonRequest.service';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { pageRoute, userInfo } from '@app/shared/types/commonTypes';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  userInfo: { user: userInfo; routes: pageRoute[] } | undefined;
  constructor(private commonRequest: CommonRequestService) {}
}
