import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-dialog-question',
  templateUrl: './dialog-question.component.html',
  styleUrls: ['./dialog-question.component.css'],
  providers: [MatDialogModule]
})
export class DialogQuestionComponent implements OnInit {

  model:questionViewModel = {
    questionQuestion:'',
    questionText:'',
    questionAnswer:''
  };

  constructor(
    public dialogRef: MatDialogRef<DialogQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: questionViewModel) {
    }

  ngOnInit() {
  }

  save(): void {
   this.dialogRef.close(this.model);

  }

}


export interface questionViewModel{
  questionQuestion:string;
  questionText:string;
  questionAnswer:string;
}