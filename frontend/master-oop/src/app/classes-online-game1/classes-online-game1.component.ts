import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-classes-online-game1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './classes-online-game1.component.html',
  styleUrls: ['./classes-online-game1.component.scss']
})
export class ClassesOnlineGame1Component {

  showNextButton: boolean = false; // New property to control button visibility

  memo = ['blueprint','true_2','false_3','characteristics','behaviour','a_6_1','a_7_3','true_8'];
  answers:string [] = [];
  points = 0;

  constructor(private router:Router,private cookieService:CookieService){}

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

    //Reset the answers
    this.answers = [];

    this.cookieService.set('classes', this.points.toString());
  }

  next(){
    this.router.navigate(['/objects']); 
  }
}
