import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
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
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),  
    email: new FormControl('', [Validators.required, Validators.email]),           
    age: new FormControl('', [Validators.required, Validators.min(18)]),            
    password: new FormControl('', [Validators.required, Validators.minLength(6)])   
  });

  // Method to handle form submission
  onClickSubmit() {
    if (this.formdata.valid) {
      this.userName = this.formdata.value.userName;
      this.email = this.formdata.value.email;
      this.age = this.formdata.value.age;
      this.password = this.formdata.value.password;
    } else {
      this.formdata.markAllAsTouched();
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.formdata.get(controlName);
    if (!control) return '';

    const errors = control.errors;
    if (errors?.['required']) {
      return `${controlName} is required`;
    }
    if (errors?.['minlength']) {
      return `${controlName} should be at least ${errors['minlength'].requiredLength} characters long`;
    }
    if (errors?.['email']) {
      return `Enter a valid email address`;
    }
    if (errors?.['min']) {
      return `${controlName} must be at least 18`;
    }
    return '';
  }
}
