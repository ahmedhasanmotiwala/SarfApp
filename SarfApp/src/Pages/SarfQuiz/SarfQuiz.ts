import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'quiz',
    styleUrls: ['SarfQuiz.css'], 
    template: `
  <div class="card">
  
    <div  [class]="dynamicClass"  (click)="toggle()"><div style="float:left"><i [class]="icon"></i></div><li><strong>{{question}}</strong></li></div>
    
    <div  class="card-block" [ngClass]="{hide: !opened}">
      <input type="radio" (change)="onSelectionChange(option1,Answer)" [name]="QID" value="1"> {{option1}}<br>
      <input type="radio" (change)="onSelectionChange(option2,Answer)" [name]="QID" value="2"> {{option2}}<br>
      <input type="radio" (change)="onSelectionChange(option3,Answer)" [name]="QID" value="3"> {{option3}}<br>
      <input type="radio" (change)="onSelectionChange(option4,Answer)" [name]="QID" value="4"> {{option4}}<br>
      <div style="float:left"></div>
    </div>
    
  </div>`,
    inputs: ['question', 'Answer', 'QID', 'option1', 'option2', 'option3', 'option4']
})
export class SarfQuiz {
    question; Answer; QID; option1; option2; option3; option4;
    opened: Boolean = false;
    toggle() {
        this.opened = !this.opened;
    }

    dynamicClass = "card-header";
    icon;


    onSelectionChange(option, Ans) {
        if (option == Ans) {
            this.dynamicClass = "card-header LightGreen";
            this.icon = "fa fa-check";
            //this.ScoreText = "Score : " + this.Score;
        }
        else {
            this.dynamicClass = "card-header Red";
            this.icon = "fa fa-close"
        }
    }
}

