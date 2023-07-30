import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeBurgerComponent } from './pages/home-burger/home-burger.component';
import { SkeletonAdminComponent } from './layout/skeleton-admin/skeleton-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { SeleccionTipoProductosAdminComponent } from './pages/seleccion-tipo-productos-admin/seleccion-tipo-productos-admin.component';
import { ListaHamburguesasAdminComponent } from './pages/lista-hamburguesas-admin/lista-hamburguesas-admin.component';
import { ListaBebidasAdminComponent } from './pages/lista-bebidas-admin/lista-bebidas-admin.component';
import { ListaPostresAdminComponent } from './pages/lista-postres-admin/lista-postres-admin.component';
import { PedidosComponent } from './pages/pedidos-admin/pedidos.component';
import { GuardsAdminGuard } from './guards/guard-logged/guards-admin.guard';
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
    {path: '', component: LoginAdminComponent},
  ]
},
{
  path: 'admin/dashboard',
  component:SkeletonAdminComponent,
  pathMatch:'prefix',
  canActivate: [GuardsAdminGuard],
  children:[
    {path: '', component: DashboardAdminComponent},
    {path: 'dashboard/productos', component: SeleccionTipoProductosAdminComponent},
    {path: 'dashboard/productos/hamburguesas', component: ListaHamburguesasAdminComponent},
    {path: 'dashboard/productos/bebidas', component: ListaBebidasAdminComponent},
    {path: 'dashboard/productos/postres', component: ListaPostresAdminComponent},
    {path: 'dashboard/pedidos', component: PedidosComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
