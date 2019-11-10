import { Component, OnInit } from '@angular/core';
import { ConceptModel, ConceptParagraph } from './concept-view-model.component';

@Component({
  selector: 'app-concept-view',
  templateUrl: './concept-view.component.html',
  styleUrls: ['./concept-view.component.css']
})
export class ConceptViewComponent implements OnInit {
  public conceptModel: ConceptModel = new ConceptModel(
    'Whole Numbers',
    '1, 2, 3, 4, 5, ...',
    [
      new ConceptParagraph('Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.')
    ]

  )

  constructor() { }

  ngOnInit() {
    this.generateConceptModel();
  }

  public generateConceptModel() {
  }

}
