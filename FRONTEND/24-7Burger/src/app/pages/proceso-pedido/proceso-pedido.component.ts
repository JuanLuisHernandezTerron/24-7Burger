import { Component,OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-proceso-pedido',
  templateUrl: './proceso-pedido.component.html',
  styleUrls: ['./proceso-pedido.component.scss'],
  viewProviders: [MatExpansionPanel]

})
export class ProcesoPedidoComponent implements OnInit{
  isEditable = false;
  step1=false;
  showFiller = false;
  constructor (private productService: ProductoService) { }
  @ViewChild('drawer') miInput:MatDrawer;

  ngOnInit(): void {
    this.productService.diparadorCarrito.subscribe(data=>{
      if (data) {
        this.miInput.toggle()
      }
    })
  }
}
