import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskArray: any = [];
  taskData: any = [];

  constructor() {}

  // create user
  createUser(data: any) {
    this.taskArray.push(data);
  }

  // get Data
  getUser() {
    return this.taskArray;
  }

  // Add Task
  addTask(task: any) {
    this.taskData = [];
    this.taskArray.map((element: any, index: number) => {
      if (element.user_id === task.user_id) {
        this.taskArray[index].task.push(task);
      }
    })
  }

  // edit user
  editUser(i: number) {
    this.taskArray[i];
  }

  // update user
  updateUser(i: number, data: any) {
    this.taskArray[i].username = data.username;
  }

  // delete user
  deleteUser(index: number) {
    this.taskArray.splice(index, 1);
  }

  // edit task
  editTask(data: any) {
    this.taskArray[data.i].task[data.j].name = data.task.taskname;
  }

  // delete task
  deleteTask(i: number, task: any) {
    this.taskArray[i].task.splice(this.taskArray[i].task.indexOf(task), 1);
  }

}
