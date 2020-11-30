import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dialog-aoi',
  templateUrl: './dialog-aoi.component.html',
  styleUrls: ['./dialog-aoi.component.css'], 
  providers: [MatDialogModule]
})
export class DialogAoiComponent implements OnInit {

  temp: number;
  classes: string[] = [];

  model:aoiViewModel = {
    name:'',
    questionNumber: -1
    //top:'',
    //bottom:'',
    //left:'',
    //right:''
  };

  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<DialogAoiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: aoiViewModel) { }

  ngOnInit() {
    this.classes = []
    this.getAllClasses();
  }

  save(): void {
    this.model.questionNumber = this.temp;
    this.dialogRef.close(this.model);
  }

  public getAllClasses() {
    this.apiService.getAllClasses().subscribe(
      res => {
        this.classes = res;
      },
      err => {
        alert("Error has occured while fetching tests!")
      }
    );
  }

}

export interface aoiViewModel {
  name: string;
  questionNumber: number;
  //top: string;
 // bottom: string;
 // left: string;
 // right: string;
}