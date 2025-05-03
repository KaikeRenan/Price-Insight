import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @Output() auth = new EventEmitter<any>();
  ngOnInit(): void {
      console.log("SSJSJSK")
  }
}
