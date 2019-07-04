import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  get_events() {
    return this.httpClient.get(this.baseUrl + '/events');
  }

  get_event(id) {
    return this.httpClient.get(this.baseUrl + '/events/' + id);
  }
}
