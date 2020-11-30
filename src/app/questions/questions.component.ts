import { Component, OnInit, AfterViewChecked, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from './model/questions';
import { ApiService } from '../shared/api.service';
import { Tests } from './model/tests';
import { ActivatedRoute, Router } from "@angular/router";
import { Answers } from './model/answers';
import { MatDialog } from '@angular/material';
import { DialogAoiComponent } from '../dialog-aoi/dialog-aoi.component';
import { Aoi } from './model/aoi';
import { DatePipe } from '@angular/common';
import { QuestionTime } from './model/questionTime';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [DatePipe]
})
export class QuestionsComponent implements OnInit {

  tests: Tests = {_id: "", name: "", questionList: [], answers: []};
  questions: Questions[] = [];
  testName: string = "";
  answers: String[] = [];
  s: Selection;
  oRange: any;
  oRect: any;
  answer: Answers = {name:"", answeredAnswer:""};
  aoi: Aoi = { testName: "", questionNumber: -1, name: "", left: "", right: "", bottom: "", top: ""};
  pitanje: number = 1;
  questionTime: QuestionTime = {testName: "", startTime: "", endTime: "", questionNumber: -1}
  questionTimePrev: QuestionTime = {testName: "", startTime: "", endTime: "", questionNumber: -1}

  constructor(public datePipe: DatePipe, public dialog: MatDialog, private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  @HostListener('mouseup')
  mouseup() {
    console.log("MOUSE IS UP");
    this.s = window.getSelection();
    this.oRange = this.s.getRangeAt(0); //get the text range
    this.oRect = this.oRange.getBoundingClientRect();
    console.log('Range', this.oRange);
    console.log('Rect', this.oRect);

    //otvori dialog
    //if(this.oRange > 0){
      let dialogRef = this.dialog.open(DialogAoiComponent, {
  
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.aoi.top = this.oRect.top;
        this.aoi.bottom = this.oRect.bottom;
        this.aoi.left = this.oRect.left;
        this.aoi.right = this.oRect.right;
        this.aoi.name = result.name;
        this.aoi.testName = this.testName;
        this.aoi.questionNumber = result.questionNumber;

        this.apiService.addAoi(this.aoi).subscribe(
          res => {
  
          },
          err => {
            alert("Error while adding aoi");
          }
        );
      } else {
        alert("Odustao je");
      }
    });

   //}

  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.testName = params.get("name")
    })
    this.getAllQuestions(this.testName);
  }

  public getAllQuestions(test: string) {
    this.apiService.getAllQuestions(test).subscribe(
      res => {
        console.log(res);
        this.tests = res;
        this.questions = this.tests.questionList;
        /*for(let i = 0; i < this.questions.length; i++){
          this.answers = this.questions[i].questionAnswer.split("\n");
        }*/
      },
      err => {
        alert("Error has occured while fetching questions!");
      }
    );
  }

  public setChoice(choice: string): void {
    this.answer.name = this.testName;
    this.answer.answeredAnswer = choice;
    console.log(this.answer);
    this.apiService.addAnswer(this.answer).subscribe(
      res => {

      },
      err => {
        alert("Error has occured while adding answer!")
      }
    );
  }

  public result(): void {
    this.router.navigate(['/result/' + this.testName])
  }

  public levi() {
    if(this.pitanje == 1) {
      this.pitanje = this.questions.length;
    } else {
      this.pitanje--;
    }
    //BITNO *********************************************************
   // console.log(this.datePipe.transform(Date.now(), 'mediumTime'));

    this.questionTime.questionNumber = this.pitanje;
    this.questionTime.testName = this.testName;
    this.questionTime.startTime = this.datePipe.transform(Date.now(), 'mediumTime');

    this.apiService.addQT(this.questionTime).subscribe(
      res => {
      },
      err => {
        alert("Error while adding new test!");
      }
    );

  }

  public desni() {
    if(this.pitanje == this.questions.length) {
      this.pitanje = 1;
    } else {
      this.pitanje++;
    }

    this.questionTime.questionNumber = this.pitanje;
    this.questionTime.testName = this.testName;
    this.questionTime.startTime = this.datePipe.transform(Date.now(), 'mediumTime');

    this.apiService.addQT(this.questionTime).subscribe(
      res => {
      },
      err => {
        alert("Error while adding new test!");
      }
    );
  }


}
