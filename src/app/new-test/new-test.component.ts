import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDialog():void {
    let dialogRef = this.dialog.open(DialogQuestionComponent,{

    });

    dialogRef.afterClosed().subscribe(result => {
        this.apiService.addQuestion(result).subscribe(
        res => {
        },
        err => {
          alert("Error while saving question!");
        }
      );
    });
  }
}