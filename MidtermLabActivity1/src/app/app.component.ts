import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import { Observable, interval } from 'rxjs'; 
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  } 
  presentDate = new Date(); 

  time$ = interval(1000).pipe(
    map(() => new Date())
  )

  price : number  = 2000; 

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  testArray = [1, 2, 3, 4, 5, 6]

  testObject = {
    name: 'Qarun',
    age: 25,
    food: 'Cheesecake'
  }

  ngOnInit() {
  }

}
