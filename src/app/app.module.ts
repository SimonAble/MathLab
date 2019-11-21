//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

//Menus
import { TopMenuComponent } from './menus/top-menu/top-menu.component';
import { FooterComponent } from './menus/footer/footer.component';
import { LeftMenuComponent } from './menus/left-menu/left-menu.component';
import { RightMenuComponent } from './menus/right-menu/right-menu.component';

//Subject Views
import { SubjectSelectionComponent } from './subject-selection/subject-selection.component';
import { SubjectFocusComponent } from './subject-focus/subject-focus.component';
import { ConceptViewComponent } from './subjectFocusViews/concept-view/concept-view.component';
import { HistoryViewComponent } from './subjectFocusViews/history-view/history-view.component';
import { ApplicationViewComponent } from './subjectFocusViews/application-view/application-view.component';
import { PracticeViewComponent } from './subjectFocusViews/practice-view/practice-view.component';
import { ResourcesViewComponent } from './subjectFocusViews/resources-view/resources-view.component';
import { DiscussionViewComponent } from './subjectFocusViews/discussion-view/discussion-view.component';
import { ApplicationModalComponent } from './subjectFocusViews/application-view/application-modal/application-modal.component';
import { DisabledSubjectComponent } from './subjectFocusViews/disabled-subject/disabled-subject.component';

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
    PracticeViewComponent,
    ResourcesViewComponent,
    DiscussionViewComponent,
    ApplicationModalComponent,
    DisabledSubjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    ApplicationModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
