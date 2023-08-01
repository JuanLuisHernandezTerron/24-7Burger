import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogHamburguesaComponent } from './../../components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { alimento } from 'src/app/models/alimento';

@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss'],
})
export class ListaHamburguesasAdminComponent implements OnInit{
  public isActive = false;
  hamburguesas: alimento[];

  constructor(public dialog: MatDialog,private productService: ProductoService) { 
  }
  
  ngOnInit(): void {
    this.productService.listaProductos.subscribe(productos=>{
      
      this.hamburguesas = productos.filter(e=>e.tipoAlimento == "Hamburguesa");
      console.log(this.hamburguesas);
    })
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