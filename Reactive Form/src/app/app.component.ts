import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Ensure this is imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule], // ReactiveFormsModule is included here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  userName: string = '';  
  email: string = '';     
  age: number | null = null; 
  password: string = '';   

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),  
    email: new FormControl(''),           
    age: new FormControl(''),            
    password: new FormControl('')   
  });

  // Method to handle form submission
  onClickSubmit() {
    // No validation checks, just saving the values
    this.userName = this.formdata.value.userName;
    this.email = this.formdata.value.email;
    this.age = this.formdata.value.age;
    this.password = this.formdata.value.password;
  }
}
