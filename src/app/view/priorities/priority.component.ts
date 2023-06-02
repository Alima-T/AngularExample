import {Component, OnInit} from '@angular/core';
import {Priority} from "../../model/Priority";
import {DataHandlerService} from "../../service/data-handler.service";

/**
 *@author Alima-T 6/02/2023
 */

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit{

  priorities: Priority[]=[];

constructor(private dataHandler: DataHandlerService) {
}

  ngOnInit(): void {
  this.dataHandler.prioritiesSubject.subscribe(priorities=>this.priorities=priorities)
  }

  indicatePriorityByUrgancy (priority: Priority){

  }
}
