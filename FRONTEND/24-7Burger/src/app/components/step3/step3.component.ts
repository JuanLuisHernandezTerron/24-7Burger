import { Component } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  constructor(private productService: ProductoService){}
  arrBebidas:alimento[];
  ngOnInit() {
    this.productService.getProduct$.subscribe(data =>{
      this.arrBebidas = data.filter(item => item.tipoAlimento == "Bebida")
      console.log(this.arrBebidas);
    })
  }
}
