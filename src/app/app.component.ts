import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-CSS';
  totalPassengers: number = 0;
  closeDialog: boolean = false;

  onTotalPassengersChange(totalPassengers: number) {
    this.totalPassengers = totalPassengers;
  }

  onClosePassenger(closeDialog: boolean) {
    this.closeDialog = closeDialog;
  }

}


// div.box#box*4
