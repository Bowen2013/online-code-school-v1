import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CodeSchoolComponent } from "./code-school/code-school.component";
import { ExerciseCodemirrorComponent } from "./exercise-codemirror/exercise-codemirror.component";
import { LessonOneComponent } from "./lessons/lesson-one/lesson-one.component";
import { LessonTemplateComponent } from "./lessons/lesson-template/lesson-template.component";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    CodemirrorModule,
    RouterModule.forRoot([{ path: "", component: CodeSchoolComponent }])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CodeSchoolComponent,
    LessonOneComponent,
    LessonTemplateComponent,
    ExerciseCodemirrorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
