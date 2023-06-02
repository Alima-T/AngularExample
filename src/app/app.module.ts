import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryComponent} from './view/categories/category.component';
import {TaskComponent} from './view/tasks/task.component';
import { PriorityComponent } from './view/priorities/priority.component';

/**
 *@author Alima-T 4/23/2023
 */

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TaskComponent,
    PriorityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
