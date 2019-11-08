import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();

  public leftMenuOpen = true;
  public activeItem = true;
  public sectionComplete = true;

  constructor() { }

  ngOnInit() {
  }

  toggleLeftMenu(event) {

    console.log(`Left Menu Toggled, Left Menu is: ${this.leftMenuOpen}`);
    console.log(event);
    if (this.leftMenuOpen === true) {
      this.leftMenuToggled.emit(event);
      this.leftMenuOpen = false;
    }

    else if (this.leftMenuOpen === false) {
      this.leftMenuToggled.emit(event);
      this.leftMenuOpen = true;
    }
  }

}
