import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{

  id : number;
  task : Task;
  constructor(private route:ActivatedRoute, private taskService:TaskService){}
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.task = new Task();
      this.taskService.getTaskById(this.id).subscribe(data=>{
        this.task = data;
      });

  }
}
