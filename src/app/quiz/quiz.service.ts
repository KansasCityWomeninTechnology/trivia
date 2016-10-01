import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  constructor(private http: Http) { }

  getQuestions() {
    //return this.http.get('http://cocktail-trivia-api.herokuapp.com/api/sample')
    return this.http.get('http://localhost:8080/api/sample')
      .map((res: Response) => res.json());
  }

}
