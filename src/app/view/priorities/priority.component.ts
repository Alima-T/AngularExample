import {Component, OnInit} from '@angular/core';
import {Priority} from "../../model/Priority";
import {Task} from "../../model/Task";
import {Urgency} from "../../Urgency";
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
  selectedPriority: Priority | undefined;
  selectedTask: Task | undefined;

constructor(private dataHandler: DataHandlerService) {
}

  ngOnInit(): void {
  this.dataHandler.prioritiesSubject.subscribe(priorities=>this.priorities=priorities)
  }

  indicatePriorityByUrgancy (urgency: Urgency){
    switch (urgency) {
      case Urgency.ExtraHigh:
        break;
      case Urgency.High:
        break;
      case Urgency.Medium:
        break;
      case Urgency.Low:
        break;

    }
  }
}
