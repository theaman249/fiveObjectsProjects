import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes-offline',
  standalone: true,
  imports: [],
  templateUrl: './classes-offline.component.html',
  styleUrls: ['./classes-offline.component.scss']
})
export class ClassesOfflineComponent {

  constructor(private router:Router){}

  goHome(){
    this.router.navigate(['./home']);
  }
}
