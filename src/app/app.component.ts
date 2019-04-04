import { Component } from '@angular/core';
import { Keg } from './models/tap-room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('name', 'brand', 60, 8, 124),
    new Keg('name', 'brand', 40, 8, 124)
  ];

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
