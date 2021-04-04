import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Observable } from 'rxjs';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  public questions$: Observable<Question[]>;

  public correctAnswers = 0;
  public currentQuestionIndex = 0;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    this.questions$ = this.triviaService.getTriviaQuestions();
  }

  public onQuestionAnswered(isCorrect: boolean): void {
    this.currentQuestionIndex++;
    if (isCorrect) {
      this.correctAnswers++;
    }
  }

}
