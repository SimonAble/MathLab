import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopicListItems } from '../shared/coreEnum';
import foundationMenu from '../../assets/Foundation_Subjects/foundationMenu.json';
import wholeNumbers from '../../assets/Foundation_Subjects/wholeNumbers.json';
import countingNumbers from '../../assets/Foundation_Subjects/countingNumbers.json';

import { Topic, TopicComponentsModel } from './Topic.model';
import { FoundationMenuItems } from '../menus/left-menu/leftMenuEnum.component';

@Injectable()
export class TopicConstructorService {

    leftMenuVisible: boolean = true;
    topicItems: Topic[];
    topic: TopicComponentsModel;

    getLeftMenuItems(mainTopic) {
      switch(mainTopic) {
        case TopicListItems.Foundations:
          console.log("Left Menu:", foundationMenu);
          return foundationMenu;
        default:
          break;
      }
    }

    getTopic(activeItem) {
      switch(activeItem.ConceptId) {
        case TopicListItems.Foundations:
          this.topic = this.setFoundationSubject(activeItem.ActiveMenuItem)
          return this.topic;
        default:
          break;
      }
    }

    setFoundationSubject(activeItemId) {
      switch(activeItemId) {
        case FoundationMenuItems.wholeNumbers:
            this.topic = null;
            this.topic = new TopicComponentsModel(
              wholeNumbers.ConceptModel, wholeNumbers.HistoryViewModel, wholeNumbers.ApplicationViewModel,
              wholeNumbers.PracticeViewModel
              );
            return this.topic;
        case FoundationMenuItems.countingNumbers:
            this.setTopicModel(countingNumbers);
            this.topic = null;
            this.topic = new TopicComponentsModel(
              countingNumbers.ConceptModel, countingNumbers.HistoryViewModel, countingNumbers.ApplicationViewModel,
              countingNumbers.PracticeViewModel
              );
            return this.topic;
      }
    }

    setTopicModel(topic) {
      this.topic.concept = topic.ConceptModel;
      this.topic.history = topic.HistoryViewModel;
      this.topic.application = topic.ApplicationViewModel;
      this.topic.concept = topic.ConceptModel;

    }
}
