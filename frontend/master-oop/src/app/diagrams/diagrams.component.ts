import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagrams',
  standalone: true,
  imports: [],
  templateUrl: './diagrams.component.html',
  styleUrl: './diagrams.component.scss'
})
export class DiagramsComponent {

  constructor(private router:Router){}

  next(){
    this.router.navigate(['/classes_offline']);
  }
}
