import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from '../model/Task';
import {BehaviorSubject} from "rxjs";
import {Priority} from "../model/Priority";

/**
 *@author Alima-T 5/22/2023
 */

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  prioritiesSubject = new BehaviorSubject<Priority[]>(TestData.priorities);


  constructor() {
    // this.fillTasks()//не увидела разницу
  }

  // getCategory(): Category[] {
  //   return TestData.categories;
  // }

  // getTask(): Task[]{
  //   return TestData.tasks;
  // }

  // instead of getTask
  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  // getTaskByCategory(category: Category): Task[]{
  //   const tasks = TestData.tasks.filter(task => task.category === category);
  //  // console.log(tasks);
  //   return tasks;
  // }
// instead of getTaskByCategory
  fillTasksByCategory(category: Category) {
    this.tasksSubject.next(TestData.tasks.filter(task => task.category === category))
  }

}

