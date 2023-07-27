import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  arrayDatosAux :any[] = [{"Orden":1,"Nombre":"Juan Luis","NPedido":12365478},{"Orden":2,"Nombre":"Oscar","NPedido":12365478},{"Orden":3,"Nombre":"Juan Jose","NPedido":12365478}];
  constructor() { }

  ngOnInit(): void {
    
  }
}
