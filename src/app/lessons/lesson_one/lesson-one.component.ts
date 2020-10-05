import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { ANSWER_STATUS } from "../../../model/ui_model";

const INITIAL_CODE =`function add(a, b) {
  // type your function here
}`;

@Component({
  selector: "lesson-one",
  templateUrl: "./lesson-one.component.html",
  styleUrls: ["./lesson-one.component.scss"]
})
export class LessonOneComponent implements AfterViewInit {
  answerStatus = ANSWER_STATUS.UNSPECIFIED;
  options = {
    theme: "base16-light",
    mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: [
      "CodeMirror-linenumbers",
      "CodeMirror-foldgutter",
      "CodeMirror-lint-markers"
    ],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  content = INITIAL_CODE;

  ngAfterViewInit() {}

  get isCorrect(): boolean {
    return this.answerStatus === ANSWER_STATUS.CORRECT;
  }

  get isWrong(): boolean {
    return this.answerStatus === ANSWER_STATUS.WRONG;
  }

  run() {
    const codeSnippet = this.content + '\n add(1,2);';
    const rst = eval(codeSnippet);
    if (rst === 3) {
      this.answerStatus = ANSWER_STATUS.CORRECT;
    } else {
      this.answerStatus = ANSWER_STATUS.WRONG;
    }
  }

  reset() {
    this.content = INITIAL_CODE;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
