
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserfilterComponent } from './userfilter/userfilter.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'userfilter', component: UserfilterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }