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
  public activeItem: number;
  public sectionComplete = true;

  public leftMenuItems = new leftMenuItems(
    'Foundations',
    'fas fa-square-root-alt mr-3',
    [
      new leftMenuItem(0, 'Whole Numbers', true, false),
      new leftMenuItem(1, 'Integers', false, true),
      new leftMenuItem(2, 'Negative Numbers', true, false),
      new leftMenuItem(3, 'Addition', false, false),
      new leftMenuItem(4, 'Subtraction', false, false),
      new leftMenuItem(5, 'Multiplication', true, false),
      new leftMenuItem(6, 'Division', false, false),
    ]
  );

  constructor() { }

  ngOnInit() {
    this.getActiveItem();
  }

  getActiveItem() {
    for (let i = 0; i < this.leftMenuItems.leftmenuitems.length; i++) {
      const cycledItem = this.leftMenuItems.leftmenuitems[i];
      if (cycledItem.itemActive) {
        this.activeItem = cycledItem.itemOrder;
      }
    }
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

  navItemClicked(itemOrder) {
    this.changeActiveMenuItem(itemOrder);
    //Todo: Dynamically load Subject Focus Data Based on Active Menu Item
    // this.loadMenuItemData();
  }

  changeActiveMenuItem(itemOrder) {
    console.log('Changing Active Menu Item');
    const itemClicked = this.leftMenuItems.leftmenuitems[itemOrder];
    console.log(`Item Clicked: ${itemClicked.itemText}`);

    for (let i = 0; i < this.leftMenuItems.leftmenuitems.length; i++) {

      let cycledItem = this.leftMenuItems.leftmenuitems[i];

      if (cycledItem.itemActive) {
        cycledItem.itemActive = false;
      }
    }

    itemClicked.itemActive = true;
  }

  backToSubjectSelection() {

  }

}
