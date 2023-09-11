import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  task: Task[];

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks(){
    this.taskService.getTaskList().subscribe(data => {
      this.task = data;
    });
  }

  taskDetails(id: number){
    this.router.navigate(['task-details', id]);
  }

  updateTask(id: number){
    this.router.navigate(['update-task', id]);
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe( data => {
      console.log(data);
      this.getTasks();
    })
  }
}
