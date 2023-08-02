import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogHamburguesaComponent } from './../../components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { alimento } from 'src/app/models/alimento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss'],
})
export class ListaHamburguesasAdminComponent implements OnInit{
  public isActive = false;
  arraProduct: alimento [];
  constructor(public dialog: MatDialog,private productService: ProductoService) {
    
  } 
  
  ngOnInit(): void {
    this.productService.getProduct$.subscribe((data)=>{
      this.arraProduct = data;
    })
    this.productService.getAllProduct();    
  }

  public toggleHamburger() {
    this.isActive = !this.isActive;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogHamburguesaComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}