import { Component, OnInit, Input } from '@angular/core';
import { ConceptModel, ConceptParagraph } from './concept-view-model.component';

@Component({
  selector: 'app-concept-view',
  templateUrl: './concept-view.component.html',
  styleUrls: ['./concept-view.component.css']
})
export class ConceptViewComponent implements OnInit {
  @Input() conceptView: ConceptModel;

  constructor() { }

  ngOnInit() {
    this.generateConceptModel();
  }

  public generateConceptModel() {
  }

}
