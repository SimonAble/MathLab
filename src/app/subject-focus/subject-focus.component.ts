import { Component, OnInit } from '@angular/core';
import { SubjectTypeCode } from './subjectEnum';

@Component({
  selector: 'app-subject-focus',
  templateUrl: './subject-focus.component.html',
  styleUrls: ['./subject-focus.component.css']
})
export class SubjectFocusComponent implements OnInit {

  public conceptSelected = false;
  public historySelected = false;
  public applicationSelected = false;
  public practiceSelected = false;


  constructor() { }

  ngOnInit() {
    this.conceptSelected = true;
  }

  selectionTypeChange(subjectSelectionType) {
    switch (subjectSelectionType) {
      case SubjectTypeCode.concept:
        this.conceptSelected = true;
        this.historySelected = false;
        this.applicationSelected = false;
        this.practiceSelected = false;
        break;
      case SubjectTypeCode.history:
        this.conceptSelected = false;
        this.historySelected = true;
        this.applicationSelected = false;
        this.practiceSelected = false;
        break;
      case SubjectTypeCode.application:
        this.conceptSelected = false;
        this.historySelected = false;
        this.applicationSelected = true;
        this.practiceSelected = false;
        break;
      case SubjectTypeCode.practice:
        this.conceptSelected = false;
        this.historySelected = false;
        this.applicationSelected = false;
        this.practiceSelected = true;
        break;
      default:
        break;
    }
  }

  cycleLeft() {
    if (this.conceptSelected) {
      this.conceptSelected = false;
      this.practiceSelected = true;
      console.log(this.practiceSelected);
    }
    if (this.historySelected) {
      this.historySelected = false;
      this.conceptSelected = true;
    }
    if (this.applicationSelected) {
      this.applicationSelected = false;
      this.historySelected = true;
    }
    if (this.practiceSelected) {
      this.practiceSelected = false;
      this.applicationSelected = true;
    }
  }

  cycleRight() {
    if (this.conceptSelected) {
      this.conceptSelected = false;
      this.historySelected = true;
    }
    if (this.historySelected) {
      this.historySelected = false;
      this.applicationSelected = true;
    }
    if (this.applicationSelected) {
      this.applicationSelected = false;
      this.practiceSelected = true;
    }
    if (this.practiceSelected) {
      this.practiceSelected = false;
      this.conceptSelected = true;
    }
  }
}
