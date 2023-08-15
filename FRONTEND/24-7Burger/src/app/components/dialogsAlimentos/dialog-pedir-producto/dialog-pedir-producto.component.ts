import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/productos/producto.service';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';

@Component({
  selector: 'app-dialog-pedir-producto',
  templateUrl: './dialog-pedir-producto.component.html',
  styleUrls: ['./dialog-pedir-producto.component.scss']
})
export class DialogPedirProductoComponent {
  constructor(private fb: FormBuilder, private productService: ProductoService, private pedidoService: PedidoService) {
  }

  idProducto: String;
  arrAlimentos: any[];
  pedido={
    id_alimento:'' || undefined,
    cantidad:1,
    extras:[]
  };
  
  ngOnInit(): void {
    this.productService.diparadoActualizarProducto.subscribe(data=>{      
      this.productService.getProduct$.subscribe(products => {
        this.arrAlimentos = products.filter(p=> p._id === data.target.id)
        this.idProducto = this.arrAlimentos[0]._id;        
      })
    })
  }

  pushExtras(event:any,nombreExtra:String,precioExtra:Number){
    if (event.checked) {
      this.pedido.extras.push({nombre:nombreExtra,precio:precioExtra})
    }else{
      this.pedido.extras = this.pedido.extras.filter(p => p.nombre !== nombreExtra);
    }
  }
  
  pedirProducto(){
    this.pedido.id_alimento = this.idProducto;
    this.pedidoService.disparadorStep2.emit(this.pedido);
  }
}
