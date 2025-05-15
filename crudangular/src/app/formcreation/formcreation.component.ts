import { Component } from '@angular/core';
import {  ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formcreation',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl: './formcreation.component.html',
  styleUrl: './formcreation.component.css'
})

// ReactiveFormsModule is a angular's standalone module for form handling and data validation.
export class FormcreationComponent {

  // FormGroup is a collection of multiple FormControl, and FormControl is for each input with intial field as empty by default , then conditions array.
  userForm =  new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(150)])
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    }
  }
}
