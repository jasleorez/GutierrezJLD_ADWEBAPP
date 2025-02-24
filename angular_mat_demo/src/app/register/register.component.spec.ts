import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatChipsModule, // Add MatChipsModule
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Form data variables
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  selectedCountry: string = '';
  selectedTags: string[] = ['Angular', 'TypeScript', 'Web Development']; // Default tags for MatChips
  newTag: string = '';  // For adding new tags
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  countries: string[] = ['USA', 'Canada', 'UK', 'Australia'];

  // Form group for the form fields
  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    country: new FormControl('', [Validators.required]),
    skills: new FormControl(this.selectedTags), // Add form control for selected tags
  });

  constructor(private snackBar: MatSnackBar) {}

  // Add a new tag to the skill list
  addTag() {
    const skill = this.newTag.trim();
    if (skill && !this.formdata.get('skills')?.value.includes(skill)) {
      const currentSkills = this.formdata.get('skills')?.value;
      currentSkills.push(skill);
      this.formdata.get('skills')?.setValue(currentSkills); // Update form control value
      this.newTag = '';  // Clear the input field
    }
  }

  // Remove a tag from the skill list
  removeTag(tag: string) {
    const currentSkills = this.formdata.get('skills')?.value;
    const index = currentSkills.indexOf(tag);
    if (index >= 0) {
      currentSkills.splice(index, 1);
      this.formdata.get('skills')?.setValue(currentSkills); // Update form control value
    }
  }

  // Handle form submission
  onClickSubmit(data: any) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;
    this.selectedCountry = data.country;
    this.selectedTags = data.skills; // Update selected tags with the form value

    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
      this.snackBar.open('Form submitted successfully!', 'Close', {
        duration: 3000,
      });
    } else {
      console.log('Form is not valid!');
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000,
      });
    }
  }
}
