import { Component, viewChild, ViewEncapsulation, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-class-object-uml',
  standalone: true,
  imports: [],
  templateUrl: './class-object-uml.component.html',
  styleUrls: ['./class-object-uml.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClassObjectUmlComponent {

  constructor(private router:Router,private cookieService:CookieService){}

  ngOnInit(): void {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
    modal.showModal();

    let totalPoints = 13;
    this.cookieService.set('totalPoints_classes', totalPoints.toString());

  }

  next(){
    this.router.navigate(['/classes_online_game1']);
  }

  back(){
    this.router.navigate(['/home']);
  }

}
