import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  options: Option[];
  selectedIndex: number | null; 
  feedbackMessage: string;
}

@Component({
  selector: 'app-inhertitance-activity1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inhertitance-activity1.component.html',
  styleUrls: ['./inhertitance-activity1.component.scss']
})
export class InhertitanceActivity1Component {


  TotalMarks:number = 0; //Tally of total marks for activity
  isVisible = false;
  showNextButton: boolean = false; 
  questions: Question[] = [
    {
      text: 'What is inheritance?',
      options: [
        { text: 'A. Inheritance is the process of creating a new class by copying the code from another class.', isCorrect: false },
        { text: 'B. Inheritance is the technique of defining a class in which all the methods are static.', isCorrect: false },
        { text: 'C. Inheritance is a mechanism that allows one class to inherit properties and behaviors from another class.', isCorrect: true },
        { text: 'D. Inheritance refers to the act of defining functions outside of a class but using them inside the class.', isCorrect: false }
      ],
      selectedIndex: null,  // Initialize as null
      feedbackMessage: ''
    },
    {
      text: 'What is the purpose of inheritence?',
      options: [
        { text: 'A. Inheritance is for the purpose of restricting access to the attributes of a class', isCorrect: false },
        { text: 'B. Inheritance is for the purpose of encouraging reusability', isCorrect: true },
        { text: 'C. Inheritance is for the purpose of duplication of classes', isCorrect: false },
        { text: 'D. Inheritance is for the purpose of encouraging coding', isCorrect: false }
      ],
      selectedIndex: null,  // Initialize as null
      feedbackMessage: ''
    },
    {
      text: 'Which is a correct description of Inheritance?',
      options: [
        { text: 'A. Inheritance is a type of software architecture pattern', isCorrect: false },
        { text: 'B. Inheritance is one of the core principles of Abstraction', isCorrect: false },
        { text: 'C. Inheritance is a type of data structure', isCorrect: false },
        { text: 'D. Inheritance is one of the core principles of Object-Oriented Programming (OOP)', isCorrect: true }
      ],
      selectedIndex: null,  
      feedbackMessage: ''
    }
  ];

  selectOption(questionIndex: number, optionIndex: number) {
    const question = this.questions[questionIndex];
    question.selectedIndex = optionIndex;
    question.feedbackMessage = question.options[optionIndex].isCorrect ? 'Correct!' : 'Incorrect.';
    if(question.options[optionIndex].isCorrect){
      this.TotalMarks+=1;
    }
  }

  marks(){
    this.isVisible = true;
    this.showNextButton = true; 
    this.cookieService.set('inheritance', this.TotalMarks.toString());
  }
  
  

  constructor(private router:Router,private cookieService:CookieService){}
  next(){
    this.router.navigate(['/inheritence2']);
  }
  
}
