import { Injectable } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { environment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL = environment.url;
  private _productHamburguesa: BehaviorSubject<alimento[]>;
  // private productList$!: Observable;
   constructor(private http:HttpClient) { }
  //   this.productList$ = this.getAllProduct();
  //   this._productHamburguesa = new BehaviorSubject<alimento[]>([]);
  //   this.productList$.suscribe((data)=>{
  //     this._productHamburguesa.next(data);
  //   })

  //   this._productHamburguesa.asObservable();

  //   console.log(this._productHamburguesa);
    
  // }
  
  ingresarHamburguesa(productHamburguesa:FormData){
    return this.http.post(this.URL+'/alimentos/newAlimento',productHamburguesa);
  }

  getAllProduct(){
    return this.http.get<any>(this.URL+'/alimentos/getAllAlimento',{});
  }

  
}
