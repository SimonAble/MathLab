import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'PerplexEd';
  public leftMeuTriggered: boolean;

  public onLeftMenuToggled(event) {
    console.log(`Left Menu Triggered ${this.leftMeuTriggered}`);
    this.leftMeuTriggered = event;
  }
}


