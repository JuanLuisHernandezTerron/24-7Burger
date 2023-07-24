import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SkeletonAdminComponent } from './layout/skeleton-admin/skeleton-admin.component';
import { FooterAdminComponent } from './layout/footer-admin/footer-admin.component';

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
    SkeletonAdminComponent,
    FooterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
