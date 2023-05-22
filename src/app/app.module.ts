import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './view/category/category.component';
import { TaskComponent } from './view/tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
