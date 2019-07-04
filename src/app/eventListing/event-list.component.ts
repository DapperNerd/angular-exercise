import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { Events } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  private events: Events[] = [];
  searchText;

  private eventsObservable: Observable<any>;

  constructor(private dataService: DataService) {
    this.eventsObservable = this.dataService.get_events();

    // this.dataService.get_events().subscribe((res : Events[])=>{
    //   this.events = res;
    // });
  }
}
