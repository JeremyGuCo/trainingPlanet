import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  public question = [
    {
      'idQuestion': 1,
      'question': 'Quelle est ?',
      'wrong': 'qsdfgh',
      'wrong2': 'ghjkl',
      'good': 'sddfg' 
    },
    {
      'idQuestion': 2,
      'question': 'Quelle est ?',
      'wrong': 'qsdfgh',
      'wrong2': 'ghjkl',
      'good': 'sddfg' 
    },
  ]
  ngOnInit(): void {
  }

}
