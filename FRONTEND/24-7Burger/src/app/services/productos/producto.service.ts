import { Injectable } from '@angular/core';
import { alimento } from 'src/app/models/alimento';
import { environment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }
  private URL = environment.url;

  ingresarHamburguesa(productHamburguesa:FormData){
    return this.http.post(this.URL+'/alimentos/newAlimento',productHamburguesa);
  }
}
