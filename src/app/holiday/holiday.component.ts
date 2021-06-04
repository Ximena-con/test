import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.less'],
})
export class HolidayComponent implements OnInit {
  holidayList: Date[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(11111111111111111111);
  }

  getHolidayList(year: number): void {
    this.holidayList = [];
    for (var month = 0; month < 12; month++) {
      this.holidayList.push(new Date(year, month, 6));
    }
    console.log(222222222222222);
    console.log(this.holidayList);
  }

  January = new Date(2021, 4, 3);
  getColor(date: Date): any | null {
    console.log(moment(date).format('YYYY-MM-DD'));
    // for (const holiday of this.holidayList) {
    //   if (
    //     moment(date).format('YYYY-MM-DD') ===
    //     moment(holiday).format('YYYY-MM-DD')
    //   ) {
    //     return 'true';
    //   }
    // }
  }
}
