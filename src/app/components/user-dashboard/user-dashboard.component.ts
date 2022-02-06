import { Component, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {

  userArray:any = [];
  name: string = '';
  connectedTo:any = [];
  LIST_IDS:any = [];
  task:any = [];
  newtask:any;
  taskId:any;
  closeResult: any;
  taskData: any = {};
  dataType:any;
  actionType:any;
  userData:any = {};
  userId: any;
  TaskActionType: any;
  taskUpdateData: any;
  taskUserId:any;
  userDelId: any;

  constructor(public _taskservice:TaskService,private _dialogService:DialogService) {
  }
  
  ngOnInit(): void {
  }

  // Model Open For Add New User
  addUser(refVar:any){
      this.actionType = 'add';
    this._dialogService.open(refVar);
  }

  // User Add And Update
  addUserForm(formvalue:any){
    let data = formvalue.value;
    if(data.actionType == 'add') {
      this.userData.type = 'add';
        let uniqueId = Math.floor(Math.random() * 1000);
        this.connectedTo.push(uniqueId);
        this._taskservice.createUser({ user_id:uniqueId, username:data.username,task:[]});
        this.userArray = this._taskservice.getUser();
        formvalue.reset();
    } else {
      let data = formvalue.value;
      this._taskservice.updateUser(this.userId,data);
      formvalue.reset();
    }
  }

  // Edit User
  editUser(i:number,refVar:TemplateRef<any>){
    let user = this.userArray[i];
    this.actionType = 'edit';
    this.userId = i;
    this.userData.username =  user.username;
    this._dialogService.open(refVar);
  }

  // Model Open For Add New Task
  addTask(user:any,refVar:any){
    this.TaskActionType = 'add';
    this.taskUserId = user;
    this._dialogService.open(refVar);
  }

  // Task Add And Update
  addTaskForm(formvalue:any){
    let data = formvalue.value;
    if(data.TaskActionType == 'add') {
      this.taskData.taskname =  data.taskname;
      this.userData.type = 'add';
        let uniqueId = Math.floor(Math.random() * 1000);
        this.connectedTo.push(uniqueId);
        this._taskservice.addTask({ task_id:uniqueId, name:data.taskname,user_id:this.taskUserId.user_id});
        this.userArray = this._taskservice.getUser();
        formvalue.reset();
    } else {
      let data = formvalue.value;
      this.taskUpdateData.task = data;
      this._taskservice.editTask(this.taskUpdateData);
      formvalue.reset();
    }
  }

  // Edit Task
  editTask(i:number,j:number,refVar:TemplateRef<any>) {
    this.TaskActionType = 'edit';
    let task = this.userArray[i].task[j];
    this.taskData.taskname = task.name;
    this.taskUpdateData = {'i':i,'j':j};
    this._dialogService.open(refVar);
  }

  // Task Drag And Drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // Conformation Model For User Delete
  deleteUserConformationModel(index:number,refVar:TemplateRef<any>){
    this.userDelId = index;
    this._dialogService.open(refVar);
  }

  // Delete User
  deleteUser(){
      this._taskservice.deleteUser(this.userDelId);
  }

  // Delete Cancel
  deleteCancel(){
    return;
  }

  // Delete Task
  deleteTask(i:number,task:any) {
    this._taskservice.deleteTask(i,task);
  }
 
}


