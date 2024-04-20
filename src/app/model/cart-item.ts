import { Hotel, Room } from './hotel';

// FIX ANGULAR 12+
// utilizzare un interface al posto di una classe per la creazione del tipo.
// In questo modo non è necessario inizializzare le proprietà come richiesto dallo script mode

export interface CartItem {
  hotel: Hotel;
  room: Room;
  creationDate: number;
}
