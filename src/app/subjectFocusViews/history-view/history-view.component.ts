import { Component, OnInit } from '@angular/core';
import { HistoryViewModel, HistorySection, SectionParagraph } from './history-view-model.component';
@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {

  //Todo - Get From Subject JSON
  public historyViewModel = new HistoryViewModel(
    [
      new HistorySection(
        'Introduction to Whole Numbers',
        'What are Whole Numbers?',
        'fas fa-lightbulb',
        [
          new SectionParagraph(
            'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires constant attention. If it has been a while since you have studied math, it can be helpful to review <strong class="green">basic topics</strong>. In this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction, multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.'
          ),
          new SectionParagraph(
            'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.',
            'https://s3.amazonaws.com/tinycards/image/048f2fa66ae0142ff35878980685c4b5',
            'Abacus'
          )]),

      new HistorySection(
        'Early Humans',
        'How did early humans keep count?',
        'fas fa-lightbulb',
        [
          new SectionParagraph(
            'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction, multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.'
          ),
          new SectionParagraph(
            'Even though counting is first taught at a young age, mastering mathematics, which is the study of numbers, requires  constant attention. If it has been a while since you have studied math, it can be helpful to review basic topics. In  this chapter, we will focus on numbers used for counting as well as four arithmetic operations—addition, subtraction,  multiplication, and division. We will also discuss some vocabulary that we will use throughout this book.',
            'https://mathandmind.com/update/img/articles/cover_8.jpg',
            'Abacus'
          )]),
    ]
  );

  constructor() { }

  ngOnInit() {
  }

}
