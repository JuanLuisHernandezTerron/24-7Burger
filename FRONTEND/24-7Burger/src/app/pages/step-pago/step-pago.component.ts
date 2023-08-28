import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';


@Component({
  selector: 'app-step-pago',
  templateUrl: './step-pago.component.html',
  styleUrls: ['./step-pago.component.scss']
})
export class StepPagoComponent {
  step = 0;
  checkeado = false;
  datosCliente: FormGroup;
  direccionForm: FormGroup;
  pedido: any;
  pedidoFinal:pedido[];
  precioFinal: number = 0;
  constructor(private fb: FormBuilder, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.datosCliente = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required])
    });
    this.direccionForm = this.fb.group({
      direccion: new FormControl('', [Validators.required]),
      cp: new FormControl('', [Validators.required]),
    });
    this.pedidoService.getPedidoCarrito$.subscribe(data => {
      this.pedido = data
    })
    console.log(this.pedido);
    this.actualizarPrecio()
    this.pedidoService.getPedido$.subscribe(data => {
      this.pedidoFinal = data
    })
    console.log(this.pedidoFinal);


  }

  setStep(index: number) {
    this.step = index;

  }

  nextStep() {
    this.step++;
    if (this.datosCliente.valid) {
      this.checkeado = true
    }
  }

  prevStep() {
    this.step--;
  }
  finalizarPedido() {
    console.log(this.pedidoFinal[0].datos_pedido);
    // this.pedidoFinal[0].datos_cliente.nombre = this.datosCliente.get('nombre')?.value
    // this.pedidoFinal[0].datos_cliente.telefono = this.datosCliente.get('phone')?.value
    // this.pedidoFinal[0].datos_cliente.dni = this.datosCliente.get('dni')?.value
    // this.pedidoFinal[0].datos_cliente.direccion = this.direccionForm.get('direccion')?.value
    this.pedidoService.agregarPedido(this.pedidoFinal)
    
  }

  actualizarPrecio() {
    this.precioFinal = 0;
    this.pedido.forEach(producto => {

      
      this.precioFinal += producto.datosPedido.cantidad as number * producto.datosProducto.precio as number;
      if (producto?.datosPedido?.extras) {
        producto?.datosPedido?.extras.forEach(e => {
          this.precioFinal += e.precio as number;
        });
      }
    }
    )
    console.log(this.precioFinal);
  }
  calcularPrecio(precio:number, cantidad:number){
    return precio*cantidad
  }
}

