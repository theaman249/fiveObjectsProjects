import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-polymorphism-game3',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add CommonModule and FormsModule here
  templateUrl: './polymorphism-game3.component.html',
  styleUrls: ['./polymorphism-game3.component.scss']
})
export class PolymorphismGame3Component {
  constructor(private router:Router, private cookieService:CookieService){}

  next(){
    this.router.navigate(['/polymorphism-activity-three']);
  }
  
  correctAnswers = ["Function Overloading", "Method Overriding", "Method Overriding"];
  userAnswers: string[] = ['', '', ''];
  score = 0;
  showScore = false;
  scoreMessage = '';
  showSparkles = false;
  sparkles: { left: string; top: string; emoji: string; color: string }[] = [];

  checkAnswers() {
    const correctSound = new Audio('correct-sound.mp3');
    const wrongSound = new Audio('wrong-sound.mp3');
    const celebrationSound = new Audio('celebration-sound.mp3');

    this.score = this.userAnswers.reduce((score, answer, index) => {
      if (answer && answer === this.correctAnswers[index]) {
        correctSound.play();
        return score + 1;
      } else {
        wrongSound.play();
        return score;
      }
    }, 0);

    this.showScore = true;
    this.scoreMessage = `Score: ${this.score}/3 - ${this.score === 3 ? "You’re a polymorphism pro! 🎉" : "Keep trying, champ! 💪"}`;

    if (this.score === 3) {
      celebrationSound.play();
      this.createSparkles();
    }


    //fetch the cookie
    let currentScore = this.cookieService.get('polymorphism') ? parseInt(this.cookieService.get('polymorphism'), 10) : 0; 

    //increment the cookie
    currentScore = currentScore + this.score;

    //set the cookie again
    this.cookieService.set('polymorphism', currentScore.toString());
    
  }

  createSparkles() {
    this.sparkles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      emoji: Math.random() > 0.5 ? '⭐️' : '👏',
      color: Math.random() > 0.5 ? 'red' : 'green',
    }));
    this.showSparkles = true;
    setTimeout(() => {
      this.showSparkles = false;
    }, 100000);
  }
}
