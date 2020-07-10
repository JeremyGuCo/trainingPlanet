import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question
  public i = 0;
  public showTransition = false;
  public userScore = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion() {
    if (this.i < 4)
      this.i = this.i + 1;
    else {
      this.showTransition = true;
    }
  }

  score(param: number) {
    this.userScore = this.userScore + param;
  }

}
