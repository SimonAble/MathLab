import { Component, OnInit, Input } from '@angular/core';
import { ApplicationViewModel, ApplicationModel, ApplicationModal, ApplicationParagraph } from './application-view-model.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationModalComponent } from './application-modal/application-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {
  @Input() applicationView: ApplicationViewModel

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log("Logging Application View: ", this.applicationView);
  }

  openDialog(applicationId): void {
    const dialogRef = this.dialog.open(ApplicationModalComponent, {
      width: '800px',
      data: {modalInfo: this.applicationView.applications[applicationId].applicationModal}
    });
  }

}
