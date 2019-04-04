import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/tap-room.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() sendTask = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, pints: number) {
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent, pints);
    this.sendTask.emit(newKeg);
  }
}
