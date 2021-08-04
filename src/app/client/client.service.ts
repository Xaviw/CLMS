import { Res } from '@app/types/commonTypes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  
  getMenu() {
    const url = '/menu';
    return this.http.post(url, {})
  }

}
