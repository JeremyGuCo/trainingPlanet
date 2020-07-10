import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
