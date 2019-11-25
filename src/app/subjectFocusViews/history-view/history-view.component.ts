import { Component, OnInit, Input } from '@angular/core';
import { HistoryViewModel, HistorySection, SectionParagraph } from './history-view-model.component';
@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements OnInit {

  @Input() historyView: HistoryViewModel;

  constructor() { }

  ngOnInit() {
  }

}
