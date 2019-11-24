import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-view',
  templateUrl: './practice-view.component.html',
  styleUrls: ['./practice-view.component.css']
})
export class PracticeViewComponent implements OnInit {

  public hasQuestionView: boolean = true;
  public hasQuestionText: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
