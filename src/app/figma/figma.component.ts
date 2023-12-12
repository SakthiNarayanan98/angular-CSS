import { Component, Input } from '@angular/core';
import { PassengerService } from "../passenger/passenger.service";

@Component({
  selector: 'app-figma',
  templateUrl: './figma.component.html',
  styleUrls: ['./figma.component.css']
})
export class FigmaComponent {

  constructor(public passengerService: PassengerService) {}


  @Input() totalPassengers: number = 0
  @Input() closeDialog: boolean = false;
  showPassenger: boolean = false;

  
  togglePassenger() {
    debugger
    this.showPassenger = !this.showPassenger;
  }

  closePassenger() {
    this.showPassenger = false;
  }

  getPassengerCount() {
    const adultsCount = this.passengerService.getAdultsCount();
    const childrenCount = this.passengerService.getChildrenCount();
    return `Adults: ${adultsCount}, Children: ${childrenCount}`;
  }

  getTotalCount() {
    return this.passengerService.getTotalCount();
  }
  disable() {
    debugger
    this.getPassengerCount.length == 0 ;
  }

}
