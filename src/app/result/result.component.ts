import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  model: resultViewModel = {
    questionPoints: [],
    finalResult: 0
  };

  testName: string = "";

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.testName = params.get("name")
    })
    this.apiService.getAllQuestions(this.testName).subscribe(
      res => {
        console.log(res.name);
        for(let i = 0; i < res.questionList.length; i++){
          if(res.questionList[i].answer == res.answers[i]){
            this.model.questionPoints.push(1);
            this.model.finalResult++;
          } else {
            this.model.questionPoints.push(0);
          }
        }
      },
      err => {
        alert("Error while getting result!");
      }
    );

    
  }

}

export interface resultViewModel {
  questionPoints: number[];
  finalResult: number;
}
