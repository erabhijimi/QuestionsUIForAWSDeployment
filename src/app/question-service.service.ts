import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';
import { Questions } from './questions';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionUrl:string=`${baseUrl}/questions/`;
  str:any;
  selectedSubject:string;
  questionList:Question[];
  constructor(private httpClientModule:HttpClient) { }
  addQuestion(questionForm:any){
    console.log(questionForm);
    this.httpClientModule.post(this.questionUrl,questionForm ).subscribe(data=> this.str);
    return this.str;
  }
  getAllQuestions(){
    this.httpClientModule.get<Questions>(this.questionUrl)
    .subscribe((data)=>{
      console.log("Data came back Old"+data);
      this.questionList = data.questions;
    });
    console.log("Model came back"+this.questionList);
    return this.questionList;
  }
}