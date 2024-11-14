import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-relationships',
  standalone: true,
  imports: [],
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})

export class RelationshipsComponent {

  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit():void{
    let totalPoints = 7;
    this.cookieService.set('totalPoints_relationships', totalPoints.toString());

    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();
  }

  next(){
    this.router.navigate(['relationships-page-two']);
  }

  back(){
    this.router.navigate(['/home']);
  }


}


