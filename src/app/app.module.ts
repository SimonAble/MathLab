import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './menus/top-menu/top-menu.component';
import { FooterComponent } from './menus/footer/footer.component';
import { SubjectSelectionComponent } from './subject-selection/subject-selection.component';
import { LeftMenuComponent } from './menus/left-menu/left-menu.component';
import { RightMenuComponent } from './menus/right-menu/right-menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SubjectFocusComponent } from './subject-focus/subject-focus.component';
import { ConceptViewComponent } from './subjectFocusViews/concept-view/concept-view.component';
import { HistoryViewComponent } from './subjectFocusViews/history-view/history-view.component';
import { ApplicationViewComponent } from './subjectFocusViews/application-view/application-view.component';
import { PracticeViewComponent } from './subjectFocusViews/practice-view/practice-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    SubjectSelectionComponent,
    LeftMenuComponent,
    RightMenuComponent,
    SubjectFocusComponent,
    ConceptViewComponent,
    HistoryViewComponent,
    ApplicationViewComponent,
    PracticeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
