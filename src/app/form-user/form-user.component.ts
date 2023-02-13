import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {UserItemModel} from "../models/user-item.model";
import {UserServiceService} from "../services/users/user-service.service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})

export class FormUserComponent {


  constructor(private route:ActivatedRoute,private router:Router,private userService:UserServiceService) {
  }
      one_user : UserItemModel ={
      id:0,
      age:0,
      genre:"homme",
      nom:"",
      prenom:""
     };
  is_update=false;
  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      if(data.get("id")!=null){
        this.one_user = this.userService.getUserById(parseInt(<string>data.get("id")));
        this.is_update=true;
      }
    })
  }

  adduser():void{
    this.userService.addUser(this.one_user);
  }

  updateUser():void{
    this.userService.updateUser(this.one_user);
  }
}
