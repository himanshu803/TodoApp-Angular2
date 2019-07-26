
export class TaskDetail {
 public task: string;
 public priority: string;
 public status: string;
 public assignedTo: string;

 constructor(task: string, priority: string, status: string, assignedTo: string) {
   this.task = task;
   this.priority = priority;
   this.status = status;
   this.assignedTo = assignedTo;
 }
}
