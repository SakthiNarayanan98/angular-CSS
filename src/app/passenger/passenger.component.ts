import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { PassengerService } from "./passenger.service";

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent  implements OnInit{
  @Output() totalPassengersChange = new EventEmitter<number>();
  @Output() closePassenger  = new EventEmitter<boolean>();

  adults$ = this.passengerService.adults$;
  children$ = this.passengerService.children$

  constructor(public passengerService: PassengerService) {}

  showDialog: boolean = true;

  adults: number = 0;
  children: number = 0;
  list!: number;
  
 

  ngOnInit(): void {

  }
  logPassenger() {

    const list = this.passengerService.adultsSubject.value + this.passengerService.childrenSubject.value
    console.log(list);
    
    // Log or emit the data as needed
    console.log(`Total Adults: ${this.passengerService.adultsSubject.value}, Total Children: ${this.passengerService.childrenSubject.value}`);

    this.showDialog = false;
  }
}










