import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-polymorphism-game1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polymorphism-game1.component.html',
  styleUrls: ['./polymorphism-game1.component.scss']
})
export class PolymorphismGame1Component {
  score: number | null = null;
  showSparkles = false;
  correctAnswers = ["True", "False", "True", "False", "True"];

  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit():void{
  }

  next(){
    this.router.navigate(['/polymorphism-activity-one']);
  }

  checkAnswers() {
    let score = 0;

    this.correctAnswers.forEach((answer, index) => {
      const userAnswer = (document.querySelector(`input[name="q${index + 1}"]:checked`) as HTMLInputElement)?.value;
      if (userAnswer === answer) {
        score++;
      }
    });

    this.cookieService.set('polymorphism', score.toString());

    this.score = score;
    if (score === this.correctAnswers.length) {
      this.showSparkles = true;
      this.createSparkles();

      setTimeout(() => {
        this.showSparkles = false;
        const sparkleContainer = document.getElementById('sparkles');
        if (sparkleContainer) sparkleContainer.innerHTML = ''; // Clear sparkles after the animation
      }, 5000);
    }
    
  }

  createSparkles() {
    const sparkleContainer = document.getElementById('sparkles') as HTMLElement;
    if (sparkleContainer) sparkleContainer.innerHTML = '';
    
    const emojis = ["⭐️", "👏"];
    for (let i = 0; i < 100; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      sparkle.style.color = i % 2 === 0 ? 'gold' : 'orange';
      sparkle.style.animationDelay = `${Math.random() * 1.5}s`;
      sparkleContainer.appendChild(sparkle);
    }
  }
}
