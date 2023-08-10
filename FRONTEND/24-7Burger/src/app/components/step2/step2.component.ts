import { Component } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  constructor(private productService: ProductoService){}
  arrHamburguesas:alimento[];
  ngOnInit() {
    this.productService.getProduct$.subscribe(data =>{
      this.arrHamburguesas = data.filter(item => item.tipoAlimento == "Hamburguesa")
      console.log(this.arrHamburguesas);
    })
  }
}
