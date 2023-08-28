import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/productos/producto.service';


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
  precioFinal: number = 0;
  constructor(private fb: FormBuilder, private productService: ProductoService) { }

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
    this.productService.getPedido$.subscribe(data => {
      this.pedido = data
    })
    console.log(this.pedido);
    this.actualizarPrecio()
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
}

