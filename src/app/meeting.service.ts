import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetingData: any = {};

  constructor() { }

  setMeetingData(data: any) {
    this.meetingData = data;
  }

  getMeetingData() {
    return this.meetingData;
  }
}
