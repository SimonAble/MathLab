import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TopicListItems } from '../shared/coreEnum';
import foundationMenu from '../../assets/Foundation_Subjects/foundationMenu.json';
import { leftMenuItems } from '../menus/left-menu/left-menu.model';

@Injectable()
export class TopicConstructorService {

    leftMenuVisible: boolean = true;

    getLeftMenuItems(mainTopic) {
      switch(mainTopic) {
        case TopicListItems.Foundations:
          console.log("Left Menu:", foundationMenu);
          return foundationMenu;
          break;
        default:
          break;
      }
    }

    setLeftMenuVisibility(leftMenuVisible) {
      console.log(`Setting left menu visibility to: ${leftMenuVisible}`);
      this.leftMenuVisible = leftMenuVisible;
    }
}
