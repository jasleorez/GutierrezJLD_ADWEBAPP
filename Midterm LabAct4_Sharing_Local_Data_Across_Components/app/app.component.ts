import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services-demo'

  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: {
    id: string;
    name: string;
    description: string;
    price: number;
  }[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productsService: ProductsService
  ) { } 
  
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}
  // [
  // {
  //   id: 101,
  //   firstname: 'Joseph',
  //   lastname:'Dizon',
  //   email:'jdizon@hau.edu.ph',
  // },
  // {
  //   id: 102,
  //   firstname: 'James',
  //   lastname: 'Atienza',
  //   email: 'jatienza@hau.edu.ph',
  // },
  // {
  //   id: 103,
  //   firstname: 'John',
  //   lastname: 'Cena',
  //   email:'jcena@hau.edu.ph',
  // },
  // {
  //   id: 104,
  //   firstname: 'Jasper',
  //   lastname: 'Gutierrez',
  //   email: 'jdgutierrez@student.hau.edu.ph',
  // }

  // ];

