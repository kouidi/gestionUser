import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {ListUserComponent} from "./list-user/list-user.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";

const appRouter = [
  {path : '',component: AcceuilComponent},
  {path: 'getUserByid/:id',component:FormUserComponent },
  {path : "listUser",component:ListUserComponent},
  {path : "addUser",component:FormUserComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter),
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
