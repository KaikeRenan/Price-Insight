import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() auth = new EventEmitter<any>();
  ngOnInit(): void {
    console.log("SSJSJSK")
  }
}
