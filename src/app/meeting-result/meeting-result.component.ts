import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meeting-result',
  templateUrl: './meeting-result.component.html',
  styleUrls: ['./meeting-result.component.css']
})
export class MeetingResultComponent implements OnInit {
  meetingData: any;

  constructor(private meetingService: MeetingService) {}

  ngOnInit() {
    this.meetingData = this.meetingService.getMeetingData();
  }
}
