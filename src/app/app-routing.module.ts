import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {path:'tasks', component: TaskListComponent},
  {path:'create-task', component: CreateTaskComponent},
  {path:'',redirectTo:'tasks',pathMatch:'full' },
  {path:'update-task/:id', component: UpdateTaskComponent},
  {path:'task-details/:id', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
