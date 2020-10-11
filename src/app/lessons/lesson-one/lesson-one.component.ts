import { Component } from "@angular/core";
import { ANSWER_STATUS } from "../../../model/ui_model";
import { CM_EXERCISE_OPTIONS, CM_VIEWONLY_OPTIONS } from "../../../model/ui_constants";

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

  /** Input for exercise */
  exerciseContent = `function add(a, b) {
  // type your function here
}`;
  solutionContent = `function add(a, b) {
  return a + b;
}`;
  testCases = [[1,2], [3,4], [-3, -4]];
  testCasesString = '[1, 2], [3, 4], [-3, -4]';


  onExerciseFinish() {
    // emit value to code school component
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
