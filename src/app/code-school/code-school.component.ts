import { Component } from "@angular/core";

@Component({
  selector: "app-code-school",
  templateUrl: "./code-school.component.html",
  styleUrls: ["./code-school.component.scss"]
})
export class CodeSchoolComponent {
  /* lesson page user currently at */
  currentLessonIndex = 0;
  /* array record which lesson has user finished (not skipped) */
  finishedLessons = [false, false, false, false, false, false, false];
  /* total number of lesson */
  totalLessonIndex = 6;

  canSkipQuestion = false;

  get isBackButtonDisabled(): boolean {
    return this.currentLessonIndex === 0;
  }

  get isNextButtonDisabled(): boolean {
    return !this.finishedLessons[this.currentLessonIndex];
  }

  /** Return boolean whether user can finish all the lessons */
  get allLessonsFinished(): boolean {
    // as long as user is on last lesson, user should be able to finish it
    if (this.canSkipQuestion) {
      return this.currentLessonIndex === this.totalLessonIndex;
    } else {
      // user is on last lesson and it's finished
      return this.currentLessonIndex === this.totalLessonIndex && this.finishedLessons[this.totalLessonIndex]
    }
  }

  // TODO(bowenpan): remove this after we have a real last lesson
  finishLastLessonDummyButtonClicked() {
    this.finishedLessons[this.totalLessonIndex] = true;
  }

  backButtonClicked() {
    if (this.currentLessonIndex > 0) {
      return this.currentLessonIndex--;
    }
  }

  nextButtonClicked() {
    if (this.currentLessonIndex < this.totalLessonIndex) {
      this.currentLessonIndex++;
    } else {
      // navigate to end page
    }
  }

  finishButtonClicked() {
    alert('showing post survey');
  }

  onExerciseFinish(event: number) {
    this.finishedLessons[event] = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
