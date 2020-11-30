import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ApiService } from '../shared/api.service';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
import { Tests } from './model/tests';
import { DialogQuestionComponent } from '../dialog-question/dialog-question.component';
import { TestQuestion } from './model/test-question';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: Tests[] = [];
  testQuestion: TestQuestion = {name:"", question: {questionAnswer:"", questionQuestion:"", questionText:"", answer:""}};

  constructor(private apiService: ApiService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.getAllTests();
  }

  openDialog():void {
    let dialogRef = this.dialog.open(DialogTestComponent,{

    });

    dialogRef.afterClosed().subscribe(result => {
        this.apiService.addTest(result).subscribe(
        res => {
          location.reload();
        },
        err => {
          alert("Error while adding new test!");
        }
      );
    });
  }

  addQuestion(name:string):void {

    let dialogRef = this.dialog.open(DialogQuestionComponent,{

    });

    dialogRef.afterClosed().subscribe(result => {
        //this.testQuestion.question.answers = result.questionAnswer;
        this.testQuestion.question.questionAnswer = result.questionAnswer;
        this.testQuestion.question.questionQuestion = result.questionQuestion;
        this.testQuestion.question.questionText = result.questionText;
        this.testQuestion.question.answer = result.answer;
        this.testQuestion.name = name;
        this.apiService.addQuestion(this.testQuestion).subscribe(
        res => {
        },
        err => {
          alert("Error while saving question!");
        }
      );
    });
  }

  public getAllTests() {
    this.apiService.getAllTests().subscribe(
      res => {
        this.tests = res;
      },
      err => {
        alert("Error has occured while fetching tests!")
      }
    );
  }

}
