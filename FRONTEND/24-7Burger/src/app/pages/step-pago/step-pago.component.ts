import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.datosCliente = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required])
    });
    this.direccionForm = this.fb.group({
      direccion: new FormControl('', [Validators.required]),
      cp: new FormControl('', [Validators.required]),
    });
  }

  setStep(index: number) {
    this.step = index;
    
  }

  nextStep() {
    this.step++;
    if (this.datosCliente.valid){
      this.checkeado = true
    }
  }

  prevStep() {
    this.step--;
  }
  finalizarPedido(){
    
  }
}

