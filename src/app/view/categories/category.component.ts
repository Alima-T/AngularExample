import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

/**
 *@author Alima-T 5/22/2023
 */

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
//latest version of TypeScript includes a strict class checking where all the properties should be initialized in the constructor. A workaround is to add the ! as a postfix to the variable name.
  categories: Category[] = [];

  selectedCategory: Category | undefined;

// in the constructor, we add the variable name: Type to the parameters, subsequently, when creating an instance of category.component, a reference and access to an instance of the DataHandlerService class will be embedded in it
  constructor(private dataHandler: DataHandlerService) {
  }

// the method is automatically called when creating an instance of the Category Components component
  ngOnInit() {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  displayTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
