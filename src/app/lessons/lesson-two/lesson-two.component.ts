import { Component, EventEmitter, Output } from "@angular/core";
import { CM_VIEWONLY_OPTIONS } from "../../../model/ui_constants";

const LESSON_TWO_INDEX = 2;

@Component({
  selector: "lesson-two",
  templateUrl: "./lesson-two.component.html",
  styleUrls: ["./lesson-two.component.scss"]
})
export class LessonTwoComponent {
  @Output() exerciseFinish = new EventEmitter<number>();

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
  testCases = [[1, 2], [3, 4], [-3, -4]];
  testCasesString = "[1, 2], [3, 4], [-3, -4]";

  onExerciseFinish() {
    // emit value to code school component
    this.exerciseFinish.emit(LESSON_TWO_INDEX);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
