import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
selector: 'app-relationships-online',
standalone: true,
imports: [FormsModule, CommonModule], // Added CommonModule to imports
templateUrl: './relationships-online.component.html',
styleUrls: ['./relationships-online.component.scss'],
})
export class RelationshipsOnlineComponent {
correctAnswers: string[] = ['inheritance', 'association', 'aggregation', 'composition', 'dependency', 'association', 'inheritance'];
userAnswers: string[] = ['', '', '', '', '', '', ''];
isCorrect: boolean | null = null;
feedbackMessage: string = '';
correctCount: number = 0;

checkAnswers(): void {

  this.correctCount = this.userAnswers.reduce((count, answer, index) => {
    return count + (answer.toLowerCase().trim() === this.correctAnswers[index] ? 1 : 0);
  }, 0);

  this.isCorrect = this.correctCount === this.correctAnswers.length;
  this.feedbackMessage = this.isCorrect
    ? 'Great job! Your answers are correct.'
    : `You got ${this.correctCount} out of ${this.correctAnswers.length} correct!.`;

  this.cookieService.set('relationships',this.correctCount.toString());
}

  constructor(private router:Router,private cookieService:CookieService){}
  next(){
    this.router.navigate(['/relationships-offline']);
  }


}
