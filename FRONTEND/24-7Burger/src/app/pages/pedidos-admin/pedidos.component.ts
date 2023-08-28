import { Component,OnInit } from '@angular/core';
import { pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  constructor(private pedidoService:PedidoService) { }
  arrayPedido: pedido[];
  arrayPedidoEnProceso: pedido[];

  ngOnInit(): void {
    this.pedidoService.getPedidoAdmin$.subscribe(data=>{
      this.arrayPedido = data;      
    })
    this.arrayPedidoEnProceso = this.arrayPedido.filter(x=>x.estado_pedido === 'En proceso');
    this.arrayPedido = this.arrayPedido.filter(x=>x.estado_pedido === 'En espera');  
  }
}
