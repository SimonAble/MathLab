import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class NavigationService {

    leftMenuVisible: boolean = false;

    getLeftMenuVisibility() {
      return this.leftMenuVisible;
    }

    setLeftMenuVisibility(leftMenuVisible) {
      console.log(`Setting left menu visibility to: ${leftMenuVisible}`);
      this.leftMenuVisible = leftMenuVisible;
    }
}
