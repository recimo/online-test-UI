import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestsComponent } from './tests/tests.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewTestComponent } from './new-test/new-test.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DialogQuestionComponent } from './dialog-question/dialog-question.component';

const appRoutes : Routes = [
  {
    path:'tests',
    component:TestsComponent
  },
  {
    path:'questions',
    component:QuestionsComponent
  },
  {
    path:'',
    component:TestsComponent,
    pathMatch:'full'
  },
  {
    path:'newtest',
    component:NewTestComponent,
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TestsComponent,
    NotFoundComponent,
    QuestionsComponent,
    NewTestComponent,
    DialogQuestionComponent
  ],
  entryComponents: [DialogQuestionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
