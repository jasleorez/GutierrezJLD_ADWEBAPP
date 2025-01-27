import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm_q_1';
  currentDate = new Date('2024-01-26T15:30:45');
  price = 42.424242;
  arrayStream$ = of([1, 2, 3, 4, 5]).pipe(delay(1000));
  transformedData$ = of({ key: 'value', num: 42 }).pipe(
    delay(1500),
    map(data => `Processed: ${data.key}-${data.num}`)
  );
  nestedArrays = {
    data: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    metadata: { type: 'matrix' },
  };
  complexData = {
    id: 1,
    details: {
      name: 'Complex Object',
      properties: {
        color: 'blue',
        size: 'large',
        features: ['a', 'b', 'c'],
      },
    },
  };
  mixedTypes = {
    string: 'text',
    number: 42,
    boolean: true,
    array: [1, 'two', false],
    nested: { key: 'value' },
  };
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  longString = 'Hello World';
  objectArray = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' },
    { id: 4, name: 'Fourth' },
  ];
}



