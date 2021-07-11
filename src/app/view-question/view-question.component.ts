import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service.service';
import { Question } from '../question';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  topic:string;
  importance:string;
  questionList:Question[];
  displayedColumns: string[] = ['technologyStack','subject',"topic","questionName", 'importance' ];
  constructor(private questionService:QuestionService) { 
    this.questionList = this.questionService.getAllQuestions();
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submited')
  }

}
