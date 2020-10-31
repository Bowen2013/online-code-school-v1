import { Component, EventEmitter, Output } from "@angular/core";
import {
  CM_EXERCISE_OPTIONS,
  CM_VIEWONLY_OPTIONS
} from "../../../model/ui_constants";
import { ANSWER_STATUS } from "../../../model/ui_model";

const LESSON_THREE_INDEX = 3;
const INITIAL_EXERCISE = `



`;

@Component({
  selector: "lesson-three",
  templateUrl: "./lesson-three.component.html",
  styleUrls: ["./lesson-three.component.scss"]
})
export class LessonThreeComponent {
  @Output() exerciseFinish = new EventEmitter<number>();

  myPetVariable = "${myPet}";

  viewOnlyOptions = CM_VIEWONLY_OPTIONS;
  exerciseOptions = CM_EXERCISE_OPTIONS;
  answerStatus = ANSWER_STATUS.UNSPECIFIED;
  errorMessage = "";

  /** View only code mirror */
  viewOnlyContent1 = `function getGreetings() {
  return "Hello world";
}

getGreetings();
`;

  viewOnlyContent2 = `function calculateArea(width, height) {
  return width * height;
}

calculateArea(5, 3); // Output: 15
`;

  viewOnlyContent3 = `function greeting (name = 'stranger') {
  console.log(\`Hello, \${name}!\`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
`;

  /** Input for exercise */
  exerciseContent = INITIAL_EXERCISE;

  solutionContent =
    "const myName = 'hello';const myCity = 'world';console.log(`My name is ${myName}. My favorite city is ${myCity}.`);";

  /** Exercise related logic */
  get isCorrect(): boolean {
    return this.answerStatus === ANSWER_STATUS.CORRECT;
  }

  get isWrong(): boolean {
    return this.answerStatus === ANSWER_STATUS.WRONG;
  }

  submit() {
    this.clearPrevious();
    if (
      this.exerciseContent.indexOf("`") > 0 &&
      this.exerciseContent.indexOf("console.log(") > 0 &&
      this.exerciseContent.indexOf("`My name is ${myName}") > 0 &&
      this.exerciseContent.indexOf("My favorite city is ${myCity}") > 0
    ) {
      this.answerStatus = ANSWER_STATUS.CORRECT;
      this.onExerciseFinish();
    } else {
      this.answerStatus = ANSWER_STATUS.WRONG;
      if (this.exerciseContent.indexOf("`") === -1) {
        this.errorMessage = "Make sure to use ` symbol, not ' or \".";
      } else if (this.exerciseContent.indexOf("console.log(") === -1) {
        this.errorMessage = "Did you forgot using console.log()?";
      } else if (this.exerciseContent.indexOf("${myName}") === -1) {
        this.errorMessage = "Did you use ${myName} in the console.log()?";
      } else if (this.exerciseContent.indexOf("${myCity}") === -1) {
        this.errorMessage = "Did you use ${myCity} in the console.log()?";
      } else {
        this.errorMessage =
          "Make sure the content is My name is NAME. My favorite city is CITY";
      }
    }
  }

  reset() {
    this.clearPrevious();
    this.exerciseContent = INITIAL_EXERCISE;
  }

  clearPrevious() {
    this.answerStatus = ANSWER_STATUS.UNSPECIFIED;
    this.errorMessage = "";
  }

  onExerciseFinish() {
    // emit value to code school component
    this.exerciseFinish.emit(LESSON_THREE_INDEX);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
