import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-polymorphism',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism.component.html',
  styleUrls: ['./polymorphism.component.scss']
})
export class PolymorphismComponent {

  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit(): void {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();
    //load the total points at the start of game.
    let totalPoints = 13;
    this.cookieService.set('totalPoints_polymorphism', totalPoints.toString());
  }
  

  next(){
    this.router.navigate(['/polymorphism-game1']);
  }

  back(){
    this.router.navigate(['/home']);
  }
}
