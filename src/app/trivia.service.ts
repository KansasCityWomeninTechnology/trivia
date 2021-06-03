import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  public getTriviaQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('https://cnc-trivia-api.herokuapp.com/sampleQuestions');
  }
}
