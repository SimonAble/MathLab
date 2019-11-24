import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-subject-selection',
  templateUrl: './subject-selection.component.html',
  styleUrls: ['./subject-selection.component.css']
})
export class SubjectSelectionComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) {
    this.navigationService.setLeftMenuVisibility(false);
   }

  ngOnInit() {
  }
}
