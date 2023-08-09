import { Component } from '@angular/core';


@Component({
  selector: 'app-proceso-pedido',
  templateUrl: './proceso-pedido.component.html',
  styleUrls: ['./proceso-pedido.component.scss']
})
export class ProcesoPedidoComponent {
  isEditable = false;
  step1=false;
}
