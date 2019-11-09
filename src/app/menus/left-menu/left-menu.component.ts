import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { leftMenuItem, leftMenuItems } from './left-menu.model';

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

  public leftMenuItems = new leftMenuItems(
    'Foundations',
    'fas fa-square-root-alt mr-3',
    [
      new leftMenuItem('Whole Numbers', true, false),
      new leftMenuItem('Integers', false, true),
      new leftMenuItem('Negative Numbers', true, false),
      new leftMenuItem('Addition', false, false),
      new leftMenuItem('Subtraction', false, false),
      new leftMenuItem('Multiplication', true, false),
      new leftMenuItem('Division', false, false),
    ]
  );

  constructor() { }

  ngOnInit() {
  }

  toggleLeftMenu(event) {

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
