import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollComponent } from './pages/main-view/scroll/scroll.component';
import { ScrollingModule  } from '@angular/cdk/scrolling';
import { AddTaskGroupComponent } from './task-group/add-task-group/add-task-group.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddTaskComponent,
    ScrollComponent,
    AddTaskGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FontAwesomeModule,
    ScrollingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  exports: [ MatFormFieldModule, MatInputModule ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
