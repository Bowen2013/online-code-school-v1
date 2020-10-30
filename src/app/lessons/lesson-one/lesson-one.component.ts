import { Component, EventEmitter, Output } from "@angular/core";
import { CM_VIEWONLY_OPTIONS } from "../../../model/ui_constants";

const LESSON_ONE_INDEX = 1;

@Component({
  selector: "lesson-one",
  templateUrl: "./lesson-one.component.html",
  styleUrls: ["./lesson-one.component.scss"]
})
export class LessonOneComponent {
  @Output() exerciseFinish = new EventEmitter<number>();

  viewOnlyOptions = CM_VIEWONLY_OPTIONS;
  viewOnlyContent1 = `let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
`;

  /** Input for exercise */
  exerciseContent = `function add(a, b) {
  // type your function here
}`;
  solutionContent = `function add(a, b) {
  return a + b;
}`;
  testCases = [[1, 2], [3, 4], [-3, -4]];
  testCasesString = "[1, 2], [3, 4], [-3, -4]";

  onExerciseFinish() {
    // emit value to code school component
    this.exerciseFinish.emit(LESSON_ONE_INDEX);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
