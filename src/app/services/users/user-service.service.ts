import { Injectable } from '@angular/core';
import {UserItemModel} from "../../models/user-item.model";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userListArray:UserItemModel[]=[];
  constructor() {
    this.userListArray.push(new UserItemModel("kouidi", "hatim", 50, 'homme'))
    this.userListArray.push(new UserItemModel("hinidi", "karim", 50, 'homme'))
    this.userListArray.push(new UserItemModel("bakkali", "kawtar", 50, 'femme'))
  }

  public getAlluser():UserItemModel[]{
    return this.userListArray;
  }
  public addUser(user : UserItemModel){
    this.userListArray.push(new UserItemModel(user.nom, user.prenom, user.age, user.genre));
  }
  public updateUser(user : UserItemModel){
    let u: UserItemModel = this.getUserById(user.id);
    this.removeUserById(u.id);
    this.addUser(user);
  }



  public getUserById(id:number):UserItemModel{
    return this.userListArray.find((obj) => {
      return obj.id === id;
    }) as UserItemModel;
  }

  public removeUserById(id:number):void{
    let u: UserItemModel = this.getUserById(id);
    const index = this.userListArray.indexOf(u,0);
    if(index!==-1){
      this.userListArray.splice(index,1);
    };
  }



}
