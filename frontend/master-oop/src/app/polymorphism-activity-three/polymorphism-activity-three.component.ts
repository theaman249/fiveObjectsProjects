import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-polymorphism-activity-three',
  standalone: true,
  imports: [],
  templateUrl: './polymorphism-activity-three.component.html',
  styleUrls: ['./polymorphism-activity-three.component.scss']
})
export class PolymorphismActivityThreeComponent {

  message:String = 'Rustenburg';

  constructor(private router:Router, private cookieService:CookieService){}

  ngOnInit():void{


    let total = this.cookieService.get('totalPoints_polymorphism') ? parseInt(this.cookieService.get('totalPoints_polymorphism'), 10) : 0;
    let points = this.cookieService.get('polymorphism') ? parseInt(this.cookieService.get('polymorphism'), 10) : 0; 
    
    let percentage = (points/total) * 100 ;

    if(percentage >= 75){
      this.message = "Congratulations! You adapt flawlessly to every situation, writing flexible and scalable code that meets every challenge. Your objects perform brilliantly—keep up the great work!";
    }
    else if(percentage >= 50 &&  percentage < 75){
      this.message = "Well done! Your objects adapt most of the time, but occasionally, they need a little nudge. With some adjustments, you’ll achieve the perfect fit. Keep refining and you’ll master it!";
    }
    else{
      this.message = "Don’t be discouraged—too many forms, too little control can happen to the best. Your objects may seem confused and unpredictable now, but with more guidance and practice, you’ll harness their true potential. Keep going!";
    }

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();


  }

  back(){
    this.router.navigate(['/home']);
  }
}
