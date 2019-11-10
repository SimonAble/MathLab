import { ConceptModel } from '../subjectFocusViews/concept-view/concept-view-model.component';
import { HistoryViewModel } from '../subjectFocusViews/history-view/history-view-model.component';
import { ApplicationViewModel } from '../subjectFocusViews/application-view/application-view-model.component';
import { PracticeViewModel } from '../subjectFocusViews/practice-view/practice-view-model.component';
import { DiscussionViewModel } from '../subjectFocusViews/discussion-view/discussion-view-model.component';
import { ResourcesViewModel } from '../subjectFocusViews/resources-view/resources-view-model.component';

export class SubjectFocusModel {
  conceptView: ConceptModel;
  historyView: HistoryViewModel;
  applicationView: ApplicationViewModel;
  practiceView: PracticeViewModel;
  discussionView: DiscussionViewModel;
  resourcesView: ResourcesViewModel;

  constructor(conceptView: ConceptModel, historyView: HistoryViewModel, applicationView: ApplicationViewModel, practiceView: PracticeViewModel, discussionView: DiscussionViewModel, resourcesView: ResourcesViewModel) {
    this.conceptView = conceptView;
    this.historyView = historyView;
    this.applicationView = applicationView;
    this.practiceView = practiceView;
    this.discussionView = discussionView;
    this.resourcesView = resourcesView;
  }
}
