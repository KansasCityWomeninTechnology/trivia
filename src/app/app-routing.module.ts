import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: QuizComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
