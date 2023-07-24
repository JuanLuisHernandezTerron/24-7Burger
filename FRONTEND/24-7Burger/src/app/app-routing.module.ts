import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeBurgerComponent } from './pages/home-burger/home-burger.component';
import { SkeletonAdminComponent } from './layout/skeleton-admin/skeleton-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

const routes: Routes = [{
  path: '',
  component:SkeletonComponent,
  pathMatch:'prefix',
  children:[
    {path: '', component: HomeBurgerComponent}
  ]
 },
 {
   path: 'admin',
   component:SkeletonAdminComponent,
   pathMatch:'prefix',
   children:[
     {path: '', component: LoginAdminComponent}
   ]
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
