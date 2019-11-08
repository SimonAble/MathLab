import { Component, OnInit } from '@angular/core';
import { ConceptModel, Concept } from './concept-view-model.component';

@Component({
  selector: 'app-concept-view',
  templateUrl: './concept-view.component.html',
  styleUrls: ['./concept-view.component.css']
})
export class ConceptViewComponent implements OnInit {
  public conceptModel: ConceptModel[] = [];

  constructor() { }

  ngOnInit() {
    this.generateConceptModel();
  }

  public generateConceptModel() {
  }

}
