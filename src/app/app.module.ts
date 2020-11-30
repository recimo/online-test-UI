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
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { DialogTestComponent } from './dialog-test/dialog-test.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { ResultComponent } from './result/result.component';
import { DialogAoiComponent } from './dialog-aoi/dialog-aoi.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'; 

const appRoutes : Routes = [
  {
    path:'result/:name',
    component:ResultComponent
  },
  {
    path:'tests',
    component:TestsComponent
  },
  {
    path:'tests/:name',
    component:QuestionsComponent
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
    DialogQuestionComponent,
    DialogTestComponent,
    TestQuestionsComponent,
    ResultComponent,
    DialogAoiComponent
  ],
  entryComponents: [DialogQuestionComponent, DialogTestComponent, DialogAoiComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
