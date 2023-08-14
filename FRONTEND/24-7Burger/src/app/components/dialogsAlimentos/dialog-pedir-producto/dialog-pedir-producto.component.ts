import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { alimento } from 'src/app/models/alimento';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-dialog-pedir-producto',
  templateUrl: './dialog-pedir-producto.component.html',
  styleUrls: ['./dialog-pedir-producto.component.scss']
})
export class DialogPedirProductoComponent {
  constructor(private fb: FormBuilder, private productService: ProductoService) {
  }

  idProducto: String;
  arrAlimentos: any[];
  
  ngOnInit(): void {
    this.productService.diparadoActualizarProducto.subscribe(data=>{      
      this.productService.getProduct$.subscribe(products => {
        this.arrAlimentos = products.filter(p=> p._id === data.target.id)
      })
    })
  }

  pedirProducto(){

  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      nombre: null,
      precio: null
    });
  }
}
