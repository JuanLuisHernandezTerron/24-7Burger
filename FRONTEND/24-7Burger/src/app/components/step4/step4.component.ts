import { Component } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {
  constructor(private productService: ProductoService){}
  arrPostres:alimento[];
  ngOnInit() {
    this.productService.getProduct$.subscribe(data =>{
      this.arrPostres = data.filter(item => item.tipoAlimento == "Postre")
    })
  }
}
