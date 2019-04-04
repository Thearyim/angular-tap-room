import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from '../models/tap-room.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  kegs: Keg[] = [
    new Keg('name', 'brand', 60, 8, 124),
    new Keg('name', 'brand', 40, 8, 124)
  ];

  priceColor(currentKeg){
    if (currentKeg.price > 60){
      return "bg-danger";
    }
    else {
      return "bg-warning";
    }
  }

}
