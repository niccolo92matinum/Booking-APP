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
      this.setActive(result[0])
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
 

}
