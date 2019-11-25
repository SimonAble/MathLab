import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { leftMenuItem, leftMenuItems } from './left-menu.model';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();
  @Input() leftMenuItems: leftMenuItems;

  public leftMenuOpen = true;
  public activeItem: number;
  public sectionComplete = true;

  constructor() { }

  ngOnInit() {
    this.getActiveItem();
  }

  getActiveItem() {
    for (let i = 0; i < this.leftMenuItems.leftmenuitems.length; i++) {
      const cycledItem = this.leftMenuItems.leftmenuitems[i];
      console.log(cycledItem);
      if (cycledItem.itemActive) {
        this.activeItem = cycledItem.itemOrder;
      }
    }
  }

  toggleLeftMenu() {
    this.leftMenuToggled.emit(true);
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
