import { leftMenuItems } from '../menus/left-menu/left-menu.model';
import { ApplicationViewModel } from '../subjectFocusViews/application-view/application-view-model.component';
import { ConceptModel } from '../subjectFocusViews/concept-view/concept-view-model.component';
import { HistoryViewModel } from '../subjectFocusViews/history-view/history-view-model.component';
import { PracticeViewModel } from '../subjectFocusViews/practice-view/practice-view-model.component';

export class Topic {
  topicModel: TopicComponentsModel;

  constructor(topicModel: TopicComponentsModel) {
    this.topicModel = topicModel;
  }
}

export class TopicComponentsModel {
  concept: ConceptModel;
  history: HistoryViewModel;
  application: ApplicationViewModel;
  practice: PracticeViewModel;
  discussion: any;
  resources: any;

  constructor(concept: ConceptModel, history: HistoryViewModel, application: ApplicationViewModel, practice: PracticeViewModel, discussion?: any, resources?: any ) {
    this.concept = concept;
    this.history = history;
    this.application = application;
    this.practice = practice;
    this.discussion = discussion;
    this.resources = resources;
  }
}
