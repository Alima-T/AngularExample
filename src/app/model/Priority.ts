/**
 *@author Alima-T 4/24/2023
 */
export class Priority {
  id: number;
  title: string;
  color: string;
  urgency: string;


  constructor(id: number, title: string, color: string, urgency: string) {
    this.id = id;
    this.title = title;
    this.color = color;
    this.urgency = urgency;
  }
}
