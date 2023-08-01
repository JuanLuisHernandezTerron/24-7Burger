import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HomeBurgerComponent } from './pages/home-burger/home-burger.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { CarneRecomendacionComponent } from './components/carne-recomendacion/carne-recomendacion.component';
import { ContactoHomeComponent } from './components/contacto-home/contacto-home.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { SeleccionTipoProductosAdminComponent } from './pages/seleccion-tipo-productos-admin/seleccion-tipo-productos-admin.component';
import { ListaHamburguesasAdminComponent } from './pages/lista-hamburguesas-admin/lista-hamburguesas-admin.component';
import { ListaBebidasAdminComponent } from './pages/lista-bebidas-admin/lista-bebidas-admin.component';
import { ListaPostresAdminComponent } from './pages/lista-postres-admin/lista-postres-admin.component';
import { PedidosComponent } from './pages/pedidos-admin/pedidos.component';
import { DialogHamburguesaComponent } from './components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ToastrModule } from 'ngx-toastr';
import {MatDividerModule} from '@angular/material/divider';
import { DialogBebidaComponent } from './components/dialogsAlimentos/dialog-bebida/dialog-bebida.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SkeletonComponent,
    NavigationComponent,
    HomeBurgerComponent,
    BannerHomeComponent,
    SobreNosotrosComponent,
    CarneRecomendacionComponent,
    ContactoHomeComponent,
    DashboardAdminComponent,
    LoginAdminComponent,
    SeleccionTipoProductosAdminComponent,
    ListaHamburguesasAdminComponent,
    ListaBebidasAdminComponent,
    ListaPostresAdminComponent,
    PedidosComponent,
    DialogHamburguesaComponent,
    DialogBebidaComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    ToastrModule.forRoot(),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
