import { CartService } from './../../core/service/cart.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel, Room } from '../../model/hotel';

class InfoMail{
  email:string|undefined
  msg:string|undefined
}




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  

 
})
export class SearchComponent {
  text: string = 'Roma';
  hotels: Hotel[] | undefined;
  active:Hotel | undefined; 
  activeImage: string | undefined;
  room: Room | undefined
 


 
  

  constructor(
    private http: HttpClient,
    private cart: CartService){
    this.searchHotels(this.text)
 
  }

  searchHotels(text:string){
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?city=' + text.toLowerCase())
    .subscribe(result => {
      this.setActive(result[0])
      this.hotels = result;
      
    });
  }

  setActive(hotel:Hotel){
    
    this.active = hotel
    this.activeImage = hotel.images[0]
    console.log(hotel)
  }
  setActiveImage(img:string){
    this.activeImage = img
  }

  sendEmail(value: InfoMail){

window.alert(`Mail inviata da: ${value.email}. Messaggio: ${value.msg}`)
  }

  addToCart(room:Room, active:Hotel|undefined){
this.cart.addToCart(active, room)
  }
 

}
