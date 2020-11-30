import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../questions/model/questions';
import { questionViewModel } from '../dialog-question/dialog-question.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import 'clipboard';
import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-java';
import { testViewModel } from '../dialog-test/dialog-test.component';
import { Tests } from '../tests/model/tests';
import { TestQuestion } from '../tests/model/test-question';
import { Answers } from '../questions/model/answers';
import { Aoi } from '../questions/model/aoi';
import { QuestionTime } from '../questions/model/questionTime';

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private QUESTIONS_URL = "http://localhost:8080/tests/";
  private ADD_QUESTION_URL = "http://localhost:8080/tests/addQuestion";
  private ADD_TEST_URL = "http://localhost:8080/tests";
  private TESTS_URL = "http://localhost:8080/tests/all";
  private ADD_ANSWER = "http://localhost:8080/tests/addAnswer";
  private ADD_AOI = "http://localhost:8080/tests/addAoi";
  private ADD_QT = "http://localhost:8080/tests/addQuestionTimes";
  private GET_ALL_CLASSES = "http://localhost:8080/triplets/all";

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { 

  }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }

  /*getAllQuestions() : Observable<Questions[]>{
    return this.http.get<Questions[]>(this.QUESTIONS_URL);
  }*/
  getAllQuestions(test: string) : Observable<Tests>{
    return this.http.get<Tests>(this.QUESTIONS_URL + test);
  }

  addQuestion(testQuestion: TestQuestion) : Observable<any> {
    return this.http.post(this.ADD_QUESTION_URL, testQuestion);
  }

  getAllTests() : Observable<Tests[]>{
    return this.http.get<Tests[]>(this.TESTS_URL);
  }

  addTest(test: testViewModel) : Observable<any> {
    return this.http.post(this.ADD_TEST_URL, test);
  }

  addAnswer(answer: Answers) : Observable<any> {
    return this.http.post(this.ADD_ANSWER, answer);
  }

  addAoi(aoi: Aoi) : Observable<any> {
    return this.http.post(this.ADD_AOI, aoi);
  }
  
  addQT(qt: QuestionTime) : Observable<any> {
    return this.http.post(this.ADD_QT, qt);
  } 

  getAllClasses() : Observable<any> {
    return this.http.get<any>(this.GET_ALL_CLASSES)
  }
}
