import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-polymorphism-game2',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './polymorphism-game2.component.html',
  styleUrls: ['./polymorphism-game2.component.scss']
})
export class PolymorphismGame2Component {
  userAnswers: string[] = ['', '', '', '', ''];
  correctAnswers: string[] = ["Static", "Dynamic", "Function", "late", "Method Overriding"];
  scoreMessage: string = '';
  showScore: boolean = false;
  showSparkles: boolean = false;
  sparkles: Array<{ emoji: string, left: string, top: string }> = [];
  constructor(private router:Router,private cookieService:CookieService){}

  next(){
    this.router.navigate(['/polymorphism-activity-two']);
  }

  checkAnswers() {
    let score = 0;
    this.userAnswers.forEach((answer, index) => {
      if (answer.trim().toLowerCase() === this.correctAnswers[index].toLowerCase()) {
        score++;
      }
    });
    this.scoreMessage = `Score: ${score}/5 - ` + (score === 5 ? "You’re a polymorphism pro! 🎉" : "Keep trying, hero! 💪");
    this.showScore = true;

    if (score === 5) {
      this.showSparkles = true;
      this.createSparkles();
      setTimeout(() => (this.showSparkles = false), 3000);
    }

    //fetch the cookie
    let currentScore = this.cookieService.get('polymorphism') ? parseInt(this.cookieService.get('polymorphism'), 10) : 0; 

    //increment the cookie
    currentScore = currentScore + score;

    //set the cookie again
    this.cookieService.set('polymorphism', currentScore.toString());
    
  }

  createSparkles() {
    this.sparkles = Array.from({ length: 30 }, () => ({
      emoji: Math.random() > 0.5 ? '⭐️' : '👏',
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }));
  }
}
