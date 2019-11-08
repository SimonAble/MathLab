import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectSelectionComponent } from './subject-selection/subject-selection.component';
import { SubjectFocusComponent } from './subject-focus/subject-focus.component';

const routes: Routes = [
  {path: '', component: SubjectSelectionComponent},
  {path: 'subjectSelection', component: SubjectSelectionComponent},
  {path: 'subjectFocus', component: SubjectFocusComponent},
  {path: '**', component: SubjectSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
