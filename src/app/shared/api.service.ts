import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../questions/model/questions';
import { questionViewModel } from '../dialog-question/dialog-question.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private QUESTIONS_URL = "http://localhost:8080/questions/all";
  private ADD_QUESTION_URL = "http://localhost:8080/questions";

  constructor(private http: HttpClient) { 

  }

  getAllQuestions() : Observable<Questions[]>{
    return this.http.get<Questions[]>(this.QUESTIONS_URL);
  }

  addQuestion(question: questionViewModel) : Observable<any> {
    return this.http.post(this.ADD_QUESTION_URL, question);
  }
  
}
