import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  
  constructor(private builder: FormBuilder, private productService: ProductoService){}
  ngOnInit() {
  }
  
  step1 = this.builder.group({
    metodoEntrega:this.builder.control("",Validators.required)
  })
  metodoEntrega(metodo){
    this.step1.get('metodoEntrega').setValue(metodo)
    
    this.productService.nextStepper.emit(true);
    console.log(this.step1.get("metodoEntrega").value);
  }
}
