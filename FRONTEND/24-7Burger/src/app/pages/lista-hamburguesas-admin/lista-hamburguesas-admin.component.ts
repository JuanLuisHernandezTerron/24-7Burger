import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogHamburguesaComponent } from './../../components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { alimento } from 'src/app/models/alimento';
import { DialogBorrarHamburguesaComponent } from 'src/app/components/dialogsAlimentos/dialog-borrar-hamburguesa/dialog-borrar-hamburguesa.component';

@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss'],
})
export class ListaHamburguesasAdminComponent implements OnInit{
  public isActive = false;
  hamburguesas: alimento[];
  dialogRef: MatDialogRef<DialogHamburguesaComponent>;
  dialogRefBorrar: MatDialogRef<DialogBorrarHamburguesaComponent>;
  
  
  constructor(private dialog: MatDialog,private productService: ProductoService) { 
  }
  
  ngOnInit(): void {
    this.productService.listaProductos.subscribe(productos=>{
      
      this.hamburguesas = productos.filter(e=>e.tipoAlimento == "Hamburguesa");
    })
  }

  public toggleHamburger() {
    this.isActive = !this.isActive;
  }

  anadirProducto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogRef = this.dialog.open(DialogHamburguesaComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

  borrarProducto(enterAnimationDuration: string, exitAnimationDuration: string, event: Event): void {
    const target = event.target as HTMLElement;
    const idBurger = target.id;
    console.log(idBurger);
    

    this.dialogRefBorrar = this.dialog.open(DialogBorrarHamburguesaComponent, {
      width: '20%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    this.dialogRefBorrar.afterClosed().subscribe(data => {
      if(data==true){
        this.productService.eliminarProducto(idBurger).subscribe(data => {
        this.productService.modificarLista(data["alimentos"])
      })
      }
    });
  }
}