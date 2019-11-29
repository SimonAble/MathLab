import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { leftMenuItem, leftMenuItems } from './left-menu.model';
import { NavigationService } from '../../shared/navigation.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();
  @Output() activeMenuItem = new EventEmitter();
  @Input() leftMenuItems: leftMenuItems;

  public leftMenuOpen = true;
  public activeItem: number;
  public sectionComplete = true;

  constructor(private router: Router) { }

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

    console.log("active menu item: ", this.leftMenuItems.leftmenuitems[this.activeItem].itemOrder);
    this.activeMenuItem.emit({
      "ConceptId" : this.leftMenuItems.conceptId,
      "ActiveMenuItem" : this.leftMenuItems.leftmenuitems[this.activeItem].itemOrder
    });
  }

  toggleLeftMenu() {
    this.leftMenuToggled.emit(true);
  }

  navItemClicked(itemOrder) {
    this.changeActiveMenuItem(itemOrder);
  }

  changeActiveMenuItem(itemOrder) {
    const itemClicked = this.leftMenuItems.leftmenuitems[itemOrder];

    for (let i = 0; i < this.leftMenuItems.leftmenuitems.length; i++) {
      let cycledItem = this.leftMenuItems.leftmenuitems[i];
      if (cycledItem.itemActive) {
        cycledItem.itemActive = false;
      }
    }

    itemClicked.itemActive = true;

    this.getActiveItem();
  }

  backToSubjectSelection() {
    this.router.navigateByUrl('/subjectSelection');
  }

}
