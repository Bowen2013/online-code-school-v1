import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ANSWER_STATUS } from "../../../model/ui_model";
import { CM_EXERCISE_OPTIONS, CM_VIEWONLY_OPTIONS } from "../constants";

const INITIAL_EXERCISE_CODE =`function add(a, b) {
  // type your function here
}`;
const CORRECT_EXERCISE_CODE = `function add(a, b) {
  return a + b;
}`;

@Component({
  selector: "lesson-one",
  templateUrl: "./lesson-one.component.html",
  styleUrls: ["./lesson-one.component.scss"]
})
export class LessonOneComponent {
  answerStatus = ANSWER_STATUS.UNSPECIFIED;
  exerciseOptions = CM_EXERCISE_OPTIONS;
  viewOnlyOptions = CM_VIEWONLY_OPTIONS;

  viewOnlyContent = `function add(a, b) {
  // this is a view only code
  // you can not edit it.
}`;

  exerciseContent = INITIAL_EXERCISE_CODE;
  actualAnswers = '';
  correctAnswers = '';
  testCases = [[1,2], [3,4], [-3, -4]];
  testCasesString = '[1, 2], [3, 4], [-3, -4]';


  get isCorrect(): boolean {
    return this.answerStatus === ANSWER_STATUS.CORRECT;
  }

  get isWrong(): boolean {
    return this.answerStatus === ANSWER_STATUS.WRONG;
  }

  run() {
    this.clearPrevious();
    let isWrong = false;
    for(let i = 0; i < this.testCases.length; i++) {
      const arg = this.testCases[i];
      const correctAns = this.getResultFromFunctionString(CORRECT_EXERCISE_CODE, arg);
      const actualAns = this.getResultFromFunctionString(this.exerciseContent, arg);
      this.correctAnswers += `${correctAns}${i === this.testCases.length - 1 ? '' : ', '}`;
      this.actualAnswers += `${actualAns}${i === this.testCases.length - 1 ? '' : ', '}`;
      if (correctAns !== actualAns) {
        isWrong = true;
      }
    }
    this.answerStatus = isWrong ? ANSWER_STATUS.WRONG : ANSWER_STATUS.CORRECT;
  }

  clearPrevious() {
    this.answerStatus = ANSWER_STATUS.UNSPECIFIED;
    this.actualAnswers = '';
    this.correctAnswers = '';
  }

  getResultFromFunctionString(fnString, args) {
    const wrapper = s => `{return ${fnString}}`;
    const func = new Function(wrapper(fnString));
    return func.call(null).apply(null, args);
  }

  reset() {
    this.exerciseContent = INITIAL_EXERCISE_CODE;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
