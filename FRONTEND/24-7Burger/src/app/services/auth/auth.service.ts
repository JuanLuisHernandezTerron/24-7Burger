import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tienda } from 'src/app/models/tienda';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private URL = environment.url;
  constructor(private http:HttpClient) { }

  signIn(tienda :tienda){
    return this.http.post<string>(this.URL+'/adminTienda/loginTienda',tienda);
  }
}
