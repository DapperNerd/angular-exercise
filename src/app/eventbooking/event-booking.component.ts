import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent {
  registerForm: FormGroup;
  submitted = false;
  eventData;
  Seats: any = ['1', '2', '3', '4', '5', '6'];
  memberFormValues: any = {};
  bookingSuccessfull = false;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private routerUrl: ActivatedRoute, private dataServie: DataService, private router: Router) {
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
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(bookingInfo.value));
  }

}
