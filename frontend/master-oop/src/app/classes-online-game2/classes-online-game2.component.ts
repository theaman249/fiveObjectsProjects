import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-classes-online-game2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './classes-online-game2.component.html',
  styleUrls: ['./classes-online-game2.component.scss']
})
export class ClassesOnlineGame2Component {
  showNextButton: boolean = false; // New property to control button visibility
  points = 0;

  memo = ['c','o','o','o','o','c','o','o'];
  answers:string [] = [];

  selectedAnswerQuestion1:string = '';
  selectedAnswerQuestion2:string = '';
  selectedAnswerQuestion3:string = '';
  selectedAnswerQuestion4:string = '';
  selectedAnswerQuestion5:string = '';
  selectedAnswerQuestion6:string = '';
  selectedAnswerQuestion7:string = '';
  selectedAnswerQuestion8:string = '';

  mark(){
    this.points = 0;
    
    this.answers.push(this.selectedAnswerQuestion1);
    this.answers.push(this.selectedAnswerQuestion2);
    this.answers.push(this.selectedAnswerQuestion3);
    this.answers.push(this.selectedAnswerQuestion4);
    this.answers.push(this.selectedAnswerQuestion5);
    this.answers.push(this.selectedAnswerQuestion6);
    this.answers.push(this.selectedAnswerQuestion7);
    this.answers.push(this.selectedAnswerQuestion8);

    for(let i = 0;i<this.memo.length;++i){
      if(this.answers[i] === this.memo[i]){
        ++this.points;
      }
    }

    this.showNextButton = true;

    //Reset the answers and points.
    this.answers = [];

    //fetch the cookie
    let currentScore = this.cookieService.get('classes') ? parseInt(this.cookieService.get('classes'), 10) : 0; 

    //increment the cookie
    currentScore = currentScore + this.points;

    //set the cookie again
    this.cookieService.set('classes', currentScore.toString());
  }

  constructor(private router:Router,private cookieService:CookieService){}

  next(){
    this.router.navigate(['/diagrams']);
  }

}
