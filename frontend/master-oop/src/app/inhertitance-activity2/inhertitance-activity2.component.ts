import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
interface ImageType {
  imageUrl: string;
  type: string;
}


@Component({
  selector: 'app-inhertitance-activity2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inhertitance-activity2.component.html',
  styleUrls: ['./inhertitance-activity2.component.scss']
})
export class InhertitanceActivity2Component {
  TotalMarks:number = 0; //Tally of total marks for activity
  isVisible = false;
  showNextButton: boolean = false;
  imageTypes: ImageType[] = [
    { imageUrl: 'assets/multi.png', type: 'Multilevel' },
    { imageUrl: 'assets/hierarchy.png', type: 'Hierarchical' },
    { imageUrl: 'assets/Single.png', type: 'Single' },
    { imageUrl: 'assets/level.png', type: 'Multiple' },
    { imageUrl: 'assets/hybrid.png', type: 'Hybrid' },

  ];

  selectedTypes: { [key: string]: string } = {};
  correctMatches: Set<string> = new Set();

  onSelectType(imageUrl: string, event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Type assertion
    const selectedType = selectElement.value; // Extract value
  
    this.selectedTypes[imageUrl] = selectedType;
  
    // Check for a correct match
    if (this.imageTypes.find(imageType => imageType.imageUrl === imageUrl)?.type === selectedType) {
      this.TotalMarks+=1;
      this.correctMatches.add(imageUrl);
    } else {
      this.correctMatches.delete(imageUrl);
    }
  }
  

  isCorrectMatch(imageUrl: string) {
    if(this.correctMatches.has(imageUrl)){
      
      return true;
    }
    return false;
  }

  marks(){
    this.isVisible = true;
    this.showNextButton = true;
    
    //fetch the cookie
    let currentScore = this.cookieService.get('inheritance') ? parseInt(this.cookieService.get('inheritance'), 10) : 0; 

    //increment the cookie
    currentScore = currentScore + this.TotalMarks;

    //set the cookie again
    this.cookieService.set('inheritance', currentScore.toString());
  }
  
  
  
  constructor(private router:Router,private cookieService:CookieService){}
  next(){
    this.router.navigate(['/inheritence3']);
  }


}
