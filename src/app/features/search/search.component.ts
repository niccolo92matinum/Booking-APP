import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  text = 'Roma';
  hotels: Hotel[] | undefined;
  active:Hotel | undefined; 
  activeImage: string | undefined;

  constructor(private http: HttpClient){
    this.searchHotels(this.text)
  }

  searchHotels(text:string){
    this.text = text;
    this.http.get<Hotel[]>('http://localhost:3000/hotels?city=' + text.toLowerCase())
    .subscribe(result => {
      
      this.hotels = result;
      this.active = result[0]
      this.activeImage = result[0].images[0]
    });
  }

  setActive(hotel:Hotel){
    console.log({hotel})
    this.active = hotel
    this.activeImage = hotel.images[0]
  }
  setActiveImage(img:string){
    this.activeImage = img
  }
 

}
