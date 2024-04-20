import {Injectable} from '@angular/core';
import {CartItem} from '../../model/cart-item';
import {Hotel, Room} from '../../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  // UPDATED (aggiornato rispetto al video)
  addToCart(hotel: Hotel | undefined, room: Room | undefined) {
    if (hotel && room) {
      this.items = [
        ...this.items,
        {
          hotel: hotel,
          room: room,
          creationDate: Date.now()
        }
      ];
    }
  }

  removeFromCart(cartItem: CartItem) {
    this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate);
  }

  proceed() {
    window.alert(this.items.length);
  }
}