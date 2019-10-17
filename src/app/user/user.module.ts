import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserfilterComponent } from './userfilter/userfilter.component';


@NgModule({
  declarations: [UserComponent, UserlistComponent, UserfilterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
