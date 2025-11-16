import { Component } from '@angular/core';

@Component({
  selector: 'app-hearder-component',
  imports: [],
  templateUrl: './hearder-component.html',
  styleUrl: './hearder-component.css',
})
export class HearderComponent {
  visible = true;


  invisibleBalance() {
  if(this.visible === true){
    this.visible = false
  } else {
    this.visible = true
  }
}
}
