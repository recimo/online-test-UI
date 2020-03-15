import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DialogQuestionComponent);
  }

}
