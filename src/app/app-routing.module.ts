import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';


const routes: Routes = [
  { path: '', component: AppComponent },
  /* Till Angular 7 */

  /* {
    path: 'user',
    loadChildren: () => UserModule
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }, */

  /* Lazy loading with dynamic import syntax in Angular 8 */
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }