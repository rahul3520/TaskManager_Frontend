import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {

  userID=""
  taskID=""
  taskTitle=""
  taskCompletionDate=""
  taskCompletionStatus=""

  addTask=()=>
  {
    let taskData:any={
      "userID":this.userID,
      "taskID":this.taskID,
      "taskTitle":this.taskTitle,
      "taskCompletionDate":this.taskCompletionDate,
      "taskCompletionStatus":this.taskCompletionStatus
    }

    console.log(taskData)
  }
}
