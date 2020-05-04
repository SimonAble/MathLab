import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SubjectTypeCode } from './subjectEnum';
import { SubjectTabModel, SubjectTabs } from './subjectTab.model';
import { NavigationService } from '../shared/navigation.service';
import { TopicComponentsModel } from './topics.model';
import { leftMenuItems, leftMenuItem } from '../menus/left-menu/left-menu.model';
import { ConceptModel, ConceptParagraph } from '../subjectFocusViews/concept-view/concept-view-model.component';
import { HistoryViewModel, HistorySection, SectionParagraph } from '../subjectFocusViews/history-view/history-view-model.component';
import { ApplicationModel, ApplicationViewModel, ApplicationModal, ApplicationParagraph } from '../subjectFocusViews/application-view/application-view-model.component';
import { PracticeViewModel } from '../subjectFocusViews/practice-view/practice-view-model.component';
import { TopicConstructorService } from './topic-constructor.service';
import { TopicListItems } from '../shared/coreEnum';
import { FoundationMenuItems, CoreConcepts } from '../menus/left-menu/leftMenuEnum.component';

@Component({
  selector: 'app-subject-focus',
  templateUrl: './subject-focus.component.html',
  styleUrls: ['./subject-focus.component.css']
})
export class SubjectFocusComponent implements OnInit {
  @Output() leftMenuToggled = new EventEmitter<boolean>();
  leftMenuVisible = true;

  public leftMenuItems: leftMenuItems;
  public conceptView: ConceptModel;
  public historyView: HistoryViewModel;
  public applicationView: ApplicationViewModel;
  public practiceView: PracticeViewModel;
  public subjectCodes: SubjectTypeCode;

  public selectedTab: number;

  public subjectTabs = new SubjectTabs(
    [
      new SubjectTabModel(0, false, false, 'Concept', 'far fa-lightbulb', 'firstTab', 5, 1),
      new SubjectTabModel(1, false, false, 'History', 'fas fa-hourglass-half', 'tab', 0, 2),
      new SubjectTabModel(2, false, false, 'Applications', 'fas fa-calculator', 'tab', 1, 3),
      new SubjectTabModel(3, true, false, 'Practice', 'far fa-edit', 'tab', 2, 4),
      new SubjectTabModel(4, false, true, 'Discussion', 'far fa-comments', 'tab', 3, 5),
      new SubjectTabModel(5, false, true, 'Resources', 'fas fa-book', 'lastTab', 4, 0)
    ]
  );

  constructor(
    private topicConstructorService: TopicConstructorService
  ) {}

  ngOnInit() {
    this.getActiveTab();
    this.getLeftMenuItems();
  }

  getLeftMenuItems() {
    this.leftMenuItems = this.topicConstructorService.getLeftMenuItems(TopicListItems.Foundations);
    this.getTopicItems();
  }

  getTopicItems() {
    let topic: TopicComponentsModel = this.topicConstructorService.getTopic(
      {
        "ConceptId" : TopicListItems.Foundations,
        "ActiveMenuItem" : this.leftMenuItems.leftmenuitems[0].itemOrder
      });
    this.setTopicItems(topic);
  }

  setTopicItems(topic) {
    this.conceptView = topic.concept;
    this.historyView = topic.history;
    this.applicationView = topic.application;
    this.practiceView = topic.practice;
  }

  changeActiveMenuItem(activeItem) {
    console.log("Active Item: ", activeItem.ActiveMenuItem);
    switch(activeItem.ConceptId) {
      case CoreConcepts.Foundations:
        let topic: TopicComponentsModel = this.topicConstructorService.getTopic(activeItem);
        console.log("Returning with Topic: ", topic);
        this.setTopicItems(topic);
        break;
    }
  }

  toggleLeftMenu() {
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

  //Cycling left and right on subject tabs
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
