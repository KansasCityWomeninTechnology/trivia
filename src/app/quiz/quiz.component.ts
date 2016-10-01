import { Component, OnInit } from '@angular/core';

import { Question, Answer } from './question.model';

import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})

export class QuizComponent implements OnInit {
  correctAnswers: number;
  currentQuestionIndex: number;
  questions: Question[];
  quizIsOver: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    //this.questions = this.quizService.getQuestions();
    this.quizIsOver = false;

    this.quizService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  onSelect(answer: Answer){
    if(answer.status === 'correct') {
      this.correctAnswers ++;
      console.log('answer correct');
    }
    else {
      console.log('answer wrong');
    }
    this.currentQuestionIndex ++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.quizIsOver = true;
    }
    //this.selectedHero = hero;
  }

}
