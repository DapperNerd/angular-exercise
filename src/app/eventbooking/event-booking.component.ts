import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent {
  submitted = false;
  eventData;
  Seats: any = ['1', '2', '3', '4', '5', '6'];
  bookingSuccessfull = false;

  constructor(private routerUrl: ActivatedRoute, private dataServie: DataService) {
    const id = this.routerUrl.snapshot.paramMap.get('id');
    this.dataServie.get_event(id).subscribe((res) => {
      this.eventData = res;
    });
  }

  // To make a array for looping
  createRange(n) {
    const items: string[] = [];
    for (let i = 1; i <= n; i++) {
      items.push('attendee' + i);
    }
    return items;
  }

  onSubmit(bookingInfo) {
    this.submitted = true;
    if (!bookingInfo.valid || bookingInfo.value.seatSelected > this.eventData.availableSeats) {
      return;
    }
    console.log(JSON.stringify(bookingInfo.value));
    this.bookingSuccessfull = true;
    this.submitted = false;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(bookingInfo.value));
  }

}
