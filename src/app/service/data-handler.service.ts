import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import { Task } from '../model/Task';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new Subject<Task[]>();


  constructor() { }

  getCategory(): Category[]{
    return TestData.categories;
  }


  // getTask(): Task[]{
  //   return TestData.tasks;
  // }

  // instead of getTask
    fillTasks(){
    this.tasksSubject.next(TestData.tasks);
  }

  // getTaskByCategory(category: Category): Task[]{
  //   const tasks = TestData.tasks.filter(task => task.category === category);
  //  // console.log(tasks);
  //   return tasks;
  // }
// instead of getTaskByCategory
  fillTasksByCategory(category: Category){
    this.tasksSubject.next(TestData.tasks.filter(task=>task.category===category))
  }

}

