import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { MeetingResultComponent } from './meeting-result/meeting-result.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-client', pathMatch: 'full' },
  { path: 'create-client', component: CreateClientComponent },
  { path: 'create-meeting', component: CreateMeetingComponent },
  { path: 'meeting-result', component: MeetingResultComponent },
  // ... any other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
