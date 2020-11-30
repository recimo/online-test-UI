import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.css'],
  providers: [MatDialogModule]
})
export class DialogTestComponent implements OnInit {

  model:testViewModel = {
    name:''
  };

  constructor(public dialogRef: MatDialogRef<DialogTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: testViewModel) { }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close(this.model);
  }

}

export interface testViewModel{
  name:string;
}
