import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form';
  anytext: string = "";
  email: string = "";
  age: number | null = null;
  password: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
