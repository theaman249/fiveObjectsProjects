import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-inheritance-offline',
  standalone: true,
  imports: [],
  templateUrl: './inheritance-offline.component.html',
  styleUrls: ['./inheritance-offline.component.scss']
})
export class InheritanceOfflineComponent {

  message:String = '';

  constructor(private router:Router,private cookieService:CookieService){}
  
  ngOnInit():void{
    let total = this.cookieService.get('totalPoints_inheritance') ? parseInt(this.cookieService.get('totalPoints_inheritance'), 10) : 0;
    let points = this.cookieService.get('inheritance') ? parseInt(this.cookieService.get('inheritance'), 10) : 0; 
    
    let percentage = (points/total) * 100 ;

    if(percentage >= 75){
      this.message = "You have restored every class to its fullest power and healed the Jungle’s inheritance structure. Each animal lineage thrives, and their unique abilities shine like never before. The Apex Predators, Herbivores, Hunters, and Hybrids live in harmony, knowing their powers are balanced and in the hands of the next generation. The jungle lives in perfect balance. You are forever remembered as a true hero";
    }
    else if(percentage >= 50 &&  percentage < 75){
      this.message = "You managed to restore the basic inheritance structures for most classes, allowing animals to regain some of their ancestral powers. But due to a few missed trials, certain unique skills were lost, causing lingering tensions between the Apex Predators and Hunters, who feel that their heritage has been weakened.";
    }
    else{
      this.message = "Despite your efforts, you were unable to restore the inheritance structures. Many powers are now lost to time, leaving animals without the skills that once defined their lineage. The jungle is a shadow of its former self, where animals struggle daily without the inherited powers that made them resilient. Your name will fade from memory as the jungle adapts to a new, harsher way of life. The creatures will survive, but the beauty of their ancient heritage may be gone forever.";
    }

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();

  }

  next(){
    this.router.navigate(['/home']);
  }
}
