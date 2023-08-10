import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-proceso-pedido',
  templateUrl: './proceso-pedido.component.html',
  styleUrls: ['./proceso-pedido.component.scss']
})
export class ProcesoPedidoComponent {
  constructor(private productService: ProductoService) {
    
  }
  @ViewChild('stepper') stepper:MatStepper;
  ngOnInit() {
    this.productService.getAllProduct();
    this.productService.nextStepper.subscribe(stepperAux =>{
      if(stepperAux){      
          this.stepper.selected.completed = true;
          this.stepper.selected.editable = false;
          this.stepper.next();
      }
    })
  }
  isEditable = false;
  step1=false;
}
