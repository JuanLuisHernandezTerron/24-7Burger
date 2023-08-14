import { Component } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { DialogPedirProductoComponent } from '../dialogsAlimentos/dialog-pedir-producto/dialog-pedir-producto.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  constructor(private productService: ProductoService,private dialog: MatDialog){}
  arrHamburguesas:alimento[];
  dialogRefBorrar: MatDialogRef<DialogPedirProductoComponent>;

  ngOnInit() {
    this.productService.getProduct$.subscribe(data =>{
      this.arrHamburguesas = data.filter(item => item.tipoAlimento == "Hamburguesa")
      console.log(this.arrHamburguesas);
    })
  }

  pedirProducto(enterAnimationDuration: string, exitAnimationDuration: string, event:Event):void{
      this.dialogRefBorrar = this.dialog.open(DialogPedirProductoComponent, {
        width: '60%',
        enterAnimationDuration,
        exitAnimationDuration,
      });    
      //Envio el evento para que desde el output del service el otro componente pueda recoger el evento enviado desde este propio componente.
      setTimeout(()=>{
        this.productService.diparadoActualizarProducto.emit(event);
      },200);
    }
}
