import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: QuizComponent }
];

export const QuizAppRoutes = RouterModule.forRoot(routes);
