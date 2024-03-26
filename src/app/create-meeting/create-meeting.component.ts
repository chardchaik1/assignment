import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrl: './create-meeting.component.css'
})
export class CreateMeetingComponent {

  constructor(
    private router: Router,
    private meetingService: MeetingService
  ) {}

  onCreateMeeting(form: NgForm) {
    if (form.valid) {
      this.meetingService.setMeetingData(form.value);
      this.router.navigate(['/meeting-result']);
    }
  }
}
