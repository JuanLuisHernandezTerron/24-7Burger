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
  private arrayProduct = new BehaviorSubject<alimento[]>([]);
  
  constructor(private http:HttpClient) { 
    this.getAllProduct();
  }
  get getProducts(){
    return this.arrayProduct.asObservable();
  }
  ingresarHamburguesa(productHamburguesa:FormData){
    return this.http.post(this.URL+'/alimentos/newAlimento',productHamburguesa);
  }

  getAllProduct(){
    this.http.get<any>(this.URL+'/alimentos/getAllAlimento',{}).subscribe(data=>{
      this.arrayProduct.next(data);
    });
  }

  
}
