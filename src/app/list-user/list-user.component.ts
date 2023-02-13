import {Component, NgModule, OnInit} from '@angular/core';
import {UserItemModel} from "../models/user-item.model";
import {UserServiceService} from "../services/users/user-service.service";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit{
  constructor(private userservice:UserServiceService) {
  }
  usersList:UserItemModel[]=[];

  ngOnInit(){
    this.usersList = this.userservice.userListArray;
  }

  deleteUser(id:number){
    this.userservice.removeUserById(id);
    this.usersList = this.userservice.getAlluser();
  }
}
