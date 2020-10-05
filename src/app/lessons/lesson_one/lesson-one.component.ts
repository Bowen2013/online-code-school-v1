import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ANSWER_STATUS } from "../../../model/ui_model";
import { CM_EXERCISE_OPTIONS, CM_VIEWONLY_OPTIONS } from "../constants";

const INITIAL_EXERCISE_CODE =`function add(a, b) {
  // type your function here
}`;

@Component({
  selector: "lesson-one",
  templateUrl: "./lesson-one.component.html",
  styleUrls: ["./lesson-one.component.scss"]
})
export class LessonOneComponent implements AfterViewInit {
  answerStatus = ANSWER_STATUS.UNSPECIFIED;
  exerciseOptions = CM_EXERCISE_OPTIONS;
  viewOnlyOptions = CM_VIEWONLY_OPTIONS;

  viewOnlyContent = `function add(a, b) {
  // this is a view only code
  // you can not edit it.
}`;

  exerciseContent = INITIAL_EXERCISE_CODE;

  ngAfterViewInit() {}

  get isCorrect(): boolean {
    return this.answerStatus === ANSWER_STATUS.CORRECT;
  }

  get isWrong(): boolean {
    return this.answerStatus === ANSWER_STATUS.WRONG;
  }

  run() {
    const codeSnippet = this.exerciseContent + '\n add(1,2);';
    const rst = eval(codeSnippet);
    if (rst === 3) {
      this.answerStatus = ANSWER_STATUS.CORRECT;
    } else {
      this.answerStatus = ANSWER_STATUS.WRONG;
    }
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
