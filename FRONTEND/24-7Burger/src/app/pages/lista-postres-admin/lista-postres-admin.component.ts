import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBorrarAlimentoComponent } from 'src/app/components/dialogsAlimentos/dialog-borrar-alimento/dialog-borrar-alimento.component';
import { DialogPostreComponent } from 'src/app/components/dialogsAlimentos/dialog-postre/dialog-postre.component';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-lista-postres-admin',
  templateUrl: './lista-postres-admin.component.html',
  styleUrls: ['./lista-postres-admin.component.scss']
})
export class ListaPostresAdminComponent {
  public isActive = false;
  arrPostres: alimento[];
  dialogRef: MatDialogRef<DialogPostreComponent>;
  dialogRefBorrar: MatDialogRef<DialogBorrarAlimentoComponent>;
  constructor(public dialog: MatDialog,private productService: ProductoService) {
    
  } 
  
  ngOnInit(): void {
    this.productService.getProduct$.subscribe(productos=>{
      console.log(productos);
      this.arrPostres = productos.filter(e=>e.tipoAlimento == "Postre");
    })
  }



  public toggleHamburger() {
    this.isActive = !this.isActive;
  }

  anadirProducto(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogRef = this.dialog.open(DialogPostreComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

  borrarProducto(enterAnimationDuration: string, exitAnimationDuration: string, event: Event): void {
    const target = event.target as HTMLElement;
    const idPostre = target.id;
    console.log(idPostre);
    

    this.dialogRefBorrar = this.dialog.open(DialogBorrarAlimentoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    this.dialogRefBorrar.afterClosed().subscribe(data => {
      if(data==true){
        this.productService.eliminarProducto(idPostre).subscribe(data => {
        this.productService.modificarLista(data["alimentos"])
      })
      }
    });
  }
}
