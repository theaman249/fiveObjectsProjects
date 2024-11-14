import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CdkDrag, CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Define the allowed keys as a union type
type PlaceholderKey = 'accessModifier' | 'balanceField' | 'nameField' | 'getter' | 'setter';

@Component({
  selector: 'app-online-activity',
  standalone: true,
  imports: [DragDropModule, CommonModule, FormsModule],
  templateUrl: './online-activity.component.html',
  styleUrls: ['./online-activity.component.scss']
})
export class OnlineActivityComponent {
  
  // Define the initial code structure with blanks represented as empty strings
  codeStructure = [
    { line: '_____ class Account {', answer: 'public', userAnswer: '' },
    { line: 'private _____ name;', answer: 'String', userAnswer: '' },
    { line: '_____ getName() {', answer: 'public', userAnswer: '' },
    { line: '  return name;', answer: '', userAnswer: '' },
    { line: '_____ setName(String name) {', answer: 'public', userAnswer: '' },
    { line: '  this.name = name;', answer: '', userAnswer: '' },
    { line: '}', answer: '}', userAnswer: '' },
  ];

  feedbackMessage = 'Fill in the blanks with the correct code pieces to complete the encapsulation example!';

  // Function to check if the student's answer is correct
  checkAnswers(): void {
    let correctCount = 0;
    this.codeStructure.forEach(line => {
      if (line.userAnswer.trim().toLowerCase() === line.answer.toLowerCase()) {
        correctCount++;
      }
    });

    if (correctCount === this.codeStructure.length) {
      this.feedbackMessage = 'Great job! You’ve completed the activity!';
    } else {
      this.feedbackMessage = 'Some answers are incorrect. Try again!';
    }
  }

  // Function to reset the activity
  resetActivity(): void {
    this.codeStructure.forEach(line => line.userAnswer = '');
    this.feedbackMessage = 'Fill in the blanks with the correct code pieces to complete the encapsulation example!';
  }

}
