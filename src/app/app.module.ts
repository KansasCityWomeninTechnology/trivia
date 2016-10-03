import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';
import {QuizAppRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    QuizAppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
