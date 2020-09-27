import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ANSWER_STATUS } from "../../../assets/ui_model";

@Component({
  selector: "lesson-one",
  templateUrl: "./lesson-one.component.html",
  styleUrls: ["./lesson-one.component.css"]
})
export class LessonOneComponent implements AfterViewInit{
  answerStatus = ANSWER_STATUS.UNSPECIFIED;

  ngAfterViewInit() {

  }

  get isCorrect(): boolean {
    return this.answerStatus === ANSWER_STATUS.CORRECT;
  }

  get isWrong(): boolean {
    return this.answerStatus === ANSWER_STATUS.WRONG;
  }

  run() {

  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
