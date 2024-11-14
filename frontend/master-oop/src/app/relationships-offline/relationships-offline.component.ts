import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-relationships-offline',
  standalone: true,
  imports: [],
  templateUrl: './relationships-offline.component.html',
  styleUrls: ['./relationships-offline.component.scss']
})
export class RelationshipsOfflineComponent {

  message:String = '';

  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit():void{
    let total = this.cookieService.get('totalPoints_relationships') ? parseInt(this.cookieService.get('totalPoints_relationships'), 10) : 0;
    let points = this.cookieService.get('relationships') ? parseInt(this.cookieService.get('relationships'), 10) : 0; 
    
    let percentage = (points/total) * 100 ;

    if(percentage >= 75){
      this.message = "Congratulations🎊!! You’ve mastered Friendships, waiting for some advices like ouweee! You were able to navigate through the friendships drama like a pro, you are a star, Well done!";
    }
    else if(percentage >= 50 &&  percentage < 75){
      this.message = "You’ve made progress, but some friendships still confuse you bestie. Keep going, and soon you'll have it all figured out!";
    }
    else{
      this.message = "The friendships can be messy, but relax bestie!! You’re just tangled in confusion—there’s still hope if you keep at it!";
    }

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();
  }

  


  next(){
    this.router.navigate(['/relationships-page-three']);
  }
}
