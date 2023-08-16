import { Component } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { DialogPedirProductoComponent } from '../dialogsAlimentos/dialog-pedir-producto/dialog-pedir-producto.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {
  constructor(private productService: ProductoService,private dialog: MatDialog,private pedidoService: PedidoService){}
  arrPostres:alimento[];
  dialogRefAnadir: MatDialogRef<DialogPedirProductoComponent>;

  ngOnInit() {
    this.productService.getProduct$.subscribe(data =>{
      this.arrPostres = data.filter(item => item.tipoAlimento == "Postre")
    })
  }

  
  pedirProducto(enterAnimationDuration: string, exitAnimationDuration: string, event:Event):void{
    let evento = event.currentTarget as Element
      this.dialogRefAnadir = this.dialog.open(DialogPedirProductoComponent, {
        width: '60%',
        enterAnimationDuration,
        exitAnimationDuration,
        data : evento.id
      });    

      this.dialogRefAnadir.afterClosed().subscribe(result => {
        this.pedidoService.disparadorStep2.emit(result);
      });

    }
}
