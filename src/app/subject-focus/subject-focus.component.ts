import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SubjectTypeCode } from './subjectEnum';
import { SubjectTabModel, SubjectTabs } from './subjectTab.model';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-subject-focus',
  templateUrl: './subject-focus.component.html',
  styleUrls: ['./subject-focus.component.css']
})
export class SubjectFocusComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();
  leftMenuVisible = true;

  public selectedTab: number;

  public subjectTabs = new SubjectTabs(
    [
      new SubjectTabModel(0, false, false, 'Concept', 'far fa-lightbulb', 'firstTab', 5, 1),
      new SubjectTabModel(1, false, false, 'History', 'fas fa-hourglass-half', 'tab', 0, 2),
      new SubjectTabModel(2, false, false, 'Application', 'fas fa-calculator', 'tab', 1, 3),
      new SubjectTabModel(3, true, false, 'Practice', 'far fa-edit', 'tab', 2, 4),
      new SubjectTabModel(4, false, true, 'Discussion', 'far fa-comments', 'tab', 3, 5),
      new SubjectTabModel(5, false, true, 'Resources', 'fas fa-book', 'lastTab', 4, 0)
    ]
  );

  constructor(
    private navigationService: NavigationService
  ) {
    this.navigationService.setLeftMenuVisibility(false);
  }

  ngOnInit() {
    this.getActiveTab();
  }

  toggleLeftMenu() {
    console.log(`Toggling Left Menu: ${this.leftMenuVisible}`);
    if(this.leftMenuVisible == true) {
      this.leftMenuVisible = false;
    }
    else if (this.leftMenuVisible == false){
      this.leftMenuVisible = true;
    }
  }

  getActiveTab() {
    for (let i = 0; i < this.subjectTabs.subjectTabs.length; i++) {
      if (this.subjectTabs.subjectTabs[i].isSelected) {
        this.selectedTab = this.subjectTabs.subjectTabs[i].selectionOrder;
      }
    }
  }

  selectionTypeChange(subjectSelectionType: number) {
    console.log(`Subject Selected ${this.subjectTabs.subjectTabs[subjectSelectionType].tabText}`);
    for (let i = 0; i < this.subjectTabs.subjectTabs.length; i++) {
      if (this.subjectTabs.subjectTabs[i].selectionOrder === subjectSelectionType) {
        this.selectedTab = this.subjectTabs.subjectTabs[i].selectionOrder;
        this.subjectTabs.subjectTabs[i].isSelected = true;
      }
      else {
        this.subjectTabs.subjectTabs[i].isSelected = false;
      }
    }
  }

  cycleLeft(subjectSelectionType: number) {
    const currentTab = this.subjectTabs.subjectTabs[subjectSelectionType];
    currentTab.isSelected = false;

    const leftTab = this.subjectTabs.subjectTabs[currentTab.tabBeforeOrder];
    leftTab.isSelected = true;

    this.selectedTab = leftTab.selectionOrder;
  }

  cycleRight(subjectSelectionType: number) {
    console.log("right clicked");
    const currentTab = this.subjectTabs.subjectTabs[subjectSelectionType];
    currentTab.isSelected = false;

    const rightTab = this.subjectTabs.subjectTabs[currentTab.tabAfterOrder];
    rightTab.isSelected = true;

    this.selectedTab = rightTab.selectionOrder;
  }
}
