import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Subjects } from './subject-selection.model';
import { SubjectSelectionService } from './subject-selection.service';

@Component({
  selector: 'app-subject-selection',
  templateUrl: './subject-selection.component.html',
  styleUrls: ['./subject-selection.component.css']
})
export class SubjectSelectionComponent implements OnInit {

  public subjects: Subjects;

  constructor(
    public subjectSelectionService: SubjectSelectionService
  ) {}

  ngOnInit() {
    this.subjects = this.subjectSelectionService.getSubjectSelection();
    console.log("Logging subjects", this.subjects);
  }
}
