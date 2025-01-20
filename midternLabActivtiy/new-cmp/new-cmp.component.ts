import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  imports: [],
  templateUrl: './new-cmp.component.html',
  styleUrl: './new-cmp.component.css'
})
export class NewCmpComponent {
  todaydate;
  newcomponent = 'Entered in new component!'
  componentproperty;
  constructor(private myservice:MyserviceService){
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}


