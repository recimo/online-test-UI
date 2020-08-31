import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questions } from './model/questions';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Questions[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllQuestions();
  }

  public getAllQuestions() {
    this.apiService.getAllQuestions().subscribe(
      res => {
        this.questions = res;
      },
      err => {
        alert("Error has occured while fetching questions!")
      }
    );
  }

}
