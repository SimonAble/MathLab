import { Component, OnInit } from '@angular/core';
import { SubjectTypeCode } from './subjectEnum';
import { SubjectTabModel, SubjectTabs } from './subjectTab.model';

@Component({
  selector: 'app-subject-focus',
  templateUrl: './subject-focus.component.html',
  styleUrls: ['./subject-focus.component.css']
})
export class SubjectFocusComponent implements OnInit {

  public selectedTab: number;

  public subjectTabs = new SubjectTabs(
    [
      new SubjectTabModel(0, true, 'Concept', 'far fa-lightbulb', 'firstTab', 5, 1),
      new SubjectTabModel(1, false, 'History', 'fas fa-hourglass-half', 'tab', 0, 2),
      new SubjectTabModel(2, false, 'Application', 'fas fa-calculator', 'tab', 1, 3),
      new SubjectTabModel(3, false, 'Practice', 'far fa-edit', 'tab', 2, 4),
      new SubjectTabModel(4, false, 'Discussion', 'far fa-comments', 'tab', 3, 5),
      new SubjectTabModel(5, false, 'Resources', 'fas fa-book', 'lastTab', 4, 0)
    ]
  );

  constructor() { }

  ngOnInit() {
    this.getActiveTab();
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
