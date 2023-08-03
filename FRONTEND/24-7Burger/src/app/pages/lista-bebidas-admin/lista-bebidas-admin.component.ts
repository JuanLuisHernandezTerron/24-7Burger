import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBebidaComponent } from 'src/app/components/dialogsAlimentos/dialog-bebida/dialog-bebida.component';
import { DialogBorrarAlimentoComponent } from 'src/app/components/dialogsAlimentos/dialog-borrar-alimento/dialog-borrar-alimento.component';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-lista-bebidas-admin',
  templateUrl: './lista-bebidas-admin.component.html',
  styleUrls: ['./lista-bebidas-admin.component.scss']
})
export class ListaBebidasAdminComponent {
  public isActive = false;
  dialogRef: MatDialogRef<DialogBebidaComponent>;
  dialogRefBorrar: MatDialogRef<DialogBorrarAlimentoComponent>;
  arrBebida: alimento[];
  constructor(public dialog: MatDialog, private productService: ProductoService) { }

  ngOnInit(): void {
    this.productService.getProduct$.subscribe(productos=>{
      console.log(productos);
      this.arrBebida = productos.filter(e=>e.tipoAlimento == "Bebida");
    })
  }

  anadirProducto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogRef = this.dialog.open(DialogBebidaComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  public toggleBebida() {
      this.isActive = !this.isActive;
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
