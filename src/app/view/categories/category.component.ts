import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
//latest version of TypeScript includes a strict class checking where all the properties should be initialized in the constructor. A workaround is to add the ! as a postfix to the variable name.
  categories: Category[]=[];

// in the constructor, we add the variable name: Type to the parameters, subsequently, when creating an instance of category.component, a reference and access to an instance of the DataHandlerService class will be embedded in it
  constructor(private dataHandler: DataHandlerService) {
  }
// the method is automatically called when creating an instance of the Category Components component
  ngOnInit() {
    this.categories = this.dataHandler.getCategory();
    //displaying all categories in the browser developer tools
    // console.log(this.categories)
    // Injection of categories in html
  }

  displayTasksByCategory(category: Category) {
    this.dataHandler.getTaskByCategory(category);

  }
}
