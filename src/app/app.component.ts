import { CartService } from './core/service/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'bookingAngular';

  constructor(
    public cart:CartService){
 
  }
}
