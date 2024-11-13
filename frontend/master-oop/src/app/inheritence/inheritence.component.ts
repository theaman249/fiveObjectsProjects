import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-inheritence',
  standalone: true,
  imports: [],
  templateUrl: './inheritence.component.html',
  styleUrls: ['./inheritence.component.scss']
})
export class InheritenceComponent {
  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit(): void {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();
    //load the total points at the start of game.
    let totalPoints = 13;
    this.cookieService.set('totalPoints_inheritance', totalPoints.toString());
  }


  next(){
    this.router.navigate(['/inheritenceActivity1']);
  }

  back(){
    this.router.navigate(['/home']);
  }
}
