import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogHamburguesaComponent } from './../../components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { alimento } from 'src/app/models/alimento';
import { DialogBorrarAlimentoComponent } from 'src/app/components/dialogsAlimentos/dialog-borrar-alimento/dialog-borrar-alimento.component';


@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss'],
})
export class ListaHamburguesasAdminComponent implements OnInit{
  public isActive = false;
  arrhamburguesas: alimento[];
  dialogRef: MatDialogRef<DialogHamburguesaComponent>;
  dialogRefBorrar: MatDialogRef<DialogBorrarAlimentoComponent>;
  constructor(public dialog: MatDialog,private productService: ProductoService) {
    
  } 
  
  ngOnInit(): void {
    this.productService.getProduct$.subscribe(productos=>{
      console.log(productos);
      this.arrhamburguesas = productos.filter(e=>e.tipoAlimento == "Hamburguesa");
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
    

    this.dialogRefBorrar = this.dialog.open(DialogBorrarAlimentoComponent, {
      width: 'auto',
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