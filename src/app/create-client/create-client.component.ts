import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Make sure Router is imported from @angular/router
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  
  // Inject the Router into the constructor
  constructor(private router: Router) { }

  onRegister(form: NgForm) {
    if (form.valid) {
      // Perform registration logic here
      
      // Navigate to the meeting creation page
      this.router.navigate(['/create-meeting']); // Use this.router to access the Router instance
    }
  }
}
