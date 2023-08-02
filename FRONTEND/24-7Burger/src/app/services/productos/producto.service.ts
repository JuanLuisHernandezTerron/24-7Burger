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
  private _productHamburguesa: BehaviorSubject<alimento[]> = new BehaviorSubject<alimento[]>([]);

   constructor(private http:HttpClient) {
    this.getAllProduct();
   }
   get listaProductos():Observable<alimento[]> {
    return this._productHamburguesa.asObservable();
  }
  
  ingresarHamburguesa(productHamburguesa:FormData){
    return this.http.post(this.URL+'/alimentos/newAlimento',productHamburguesa);
  }
  ingresarBebida(productBebida:FormData){
    return this.http.post(this.URL+'/alimentos/newAlimento',productBebida);
  }
  eliminarProducto(idBurger:string){
     return this.http.delete(this.URL+'/alimentos/deleteAlimento/'+ idBurger)
  }

  getAllProduct(){
     this.http.get<any>(this.URL+'/alimentos/getAllAlimento',{}).subscribe(responseData => {
      this.modificarLista(responseData)
      });
  }

  modificarLista(alimentos){
    this._productHamburguesa.next(alimentos)
  }


  
}
