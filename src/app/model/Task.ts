import {Priority} from "./Priority";
import {Category} from "./Category";

/**
 *@author Alima-T 4/24/2023
 */

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  category?: Category;
  date?: Date;

//? - optional field
  constructor(id: number, title: string, status: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = status;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}

//TODO - reserved word, do not use for classes or variables.
