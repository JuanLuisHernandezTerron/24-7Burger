import { MatStepper } from '@angular/material/stepper';
import { environment } from 'src/enviroments/enviroments';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogOmitirPasoComponent } from 'src/app/components/dialog-omitir-paso/dialog-omitir-paso.component';
import { pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
@Component({
  selector: 'app-proceso-pedido',
  templateUrl: './proceso-pedido.component.html',
  styleUrls: ['./proceso-pedido.component.scss'],
  viewProviders: [MatExpansionPanel]

})
export class ProcesoPedidoComponent implements OnInit {
  isEditable = false;
  step1 = false;
  showFiller = false;
  dialogRefOmitir: MatDialogRef<DialogOmitirPasoComponent>;
  arrPedidos: Array<pedido>;
  pedidoCompleto = {
    datos_pedido: [],
    recogida_envio: '',
    estado_pedido: 'En espera',
    id_tienda: environment.id_tienda
  };

  constructor(private productService: ProductoService, private dialog: MatDialog, private pedidoService: PedidoService) { }

  @ViewChild('drawer') miInput: MatDrawer;
  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {
    this.productService.getAllProduct();
    this.productService.nextStepper.subscribe(stepperAux => {
      if (stepperAux) {
        this.stepper.selected.completed = true;
        this.stepper.selected.editable = true;
        this.stepper.next();
      }
    })

    this.productService.diparadorCarrito.subscribe(data => {
      if (data) {
        this.miInput.toggle()
      }
    })

    this.pedidoService.disparadorStep2.subscribe(data => {
      if (this.pedidoCompleto.datos_pedido?.length == 0) {
        this.pedidoCompleto.datos_pedido.push(data);
      } else {
        var yaIncluido = false;
        this.pedidoCompleto.datos_pedido.forEach(p => {

          if (p.id_alimento === data.id_alimento) {            
            const mismoExtra = p.extras.length === data.extras.length && p.extras.every((extra1) => {
              return data.extras.some((extra2) => {
                return extra1.nombre === extra2.nombre && extra1.precio === extra2.precio;
              });
            });
            if (mismoExtra && p.id_alimento == data.id_alimento) {
              p.cantidad++
              yaIncluido = true;
            }
          }
        })
      }
      if (yaIncluido == false) {
        this.pedidoCompleto.datos_pedido.push(data);
      }
      console.log(this.pedidoCompleto);
    })


    this.pedidoService.disparadorStep1.subscribe(data => {
      this.pedidoCompleto.recogida_envio = data
    })

    /**
     * VER CUANDO NOS SALTAMOS LA INGRESA HAMBURGUESA, INGRESAS UNA BEBIDA Y LUEGO UNA HAMBURGUESA SALTA ERROR 
     */

    this.pedidoService.disparadorStep3.subscribe(data => {
      if (this.pedidoCompleto.datos_pedido?.length == 0) {
        this.pedidoCompleto.datos_pedido.push(data);
      } else {
        var yaIncluido = false;
        this.pedidoCompleto.datos_pedido.forEach(p => {
          if (p.id_alimento === data.id_alimento) {
            p = data
            yaIncluido = true;
          }
          if (p.cantidad === 0) {
            this.pedidoCompleto.datos_pedido = this.pedidoCompleto.datos_pedido.filter(p=> p.id_alimento !== data.id_alimento);
          }
        })
      }

      if (yaIncluido == false) {
        this.pedidoCompleto.datos_pedido.push(data);
      }
    }
    )
  }


  nextStep(producto: string) {
    if (this.pedidoCompleto.datos_pedido.length === 0) {
      this.omitirPaso('200ms', '200ms', producto)
    } else {
      this.stepper.next()
    }
  }
  omitirPaso(enterAnimationDuration: string, exitAnimationDuration: string, tipoAlimento: string): void {

    this.dialogRefOmitir = this.dialog.open(DialogOmitirPasoComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data: tipoAlimento
    })
    this.dialogRefOmitir.afterClosed().subscribe(result => {
      if (result) {
        this.stepper.selected.completed = true;
        this.stepper.selected.editable = true;
        this.stepper.next()
      }
    });
  }

  ordenarPedido() {
    alert("Compra realizada")
  }
}
