import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-classes-offline',
  standalone: true,
  imports: [],
  templateUrl: './classes-offline.component.html',
  styleUrls: ['./classes-offline.component.scss']
})
export class ClassesOfflineComponent {

  message:String = '';

  constructor(private router:Router, private cookieService:CookieService){}

  ngOnInit():void{
    let total = this.cookieService.get('totalPoints_classes') ? parseInt(this.cookieService.get('totalPoints_classes'), 10) : 0;
    let points = this.cookieService.get('classes') ? parseInt(this.cookieService.get('classes'), 10) : 0; 
    
    let percentage = (points/total) * 100 ;

    if(percentage >= 75){
      this.message = "You successfully created the perfect body for AGI, and he is helping humanity move towards greener future";
    }
    else if(percentage >= 50 &&  percentage < 75){
      this.message = "AGI has a body, but it is too restrictive and limiting in terms of movement and capability. He ends up working at an Amazon warehouse";
    }
    else{
      this.message = "AGI didn't get his body, so he blames humanity for this and goes on to destroy the internet";
    }

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();
  }

  goHome(){
    this.router.navigate(['./home']);
  }
}
