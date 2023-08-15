import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, observeOn } from 'rxjs';
import { pedido } from 'src/app/models/pedido';;

@Injectable({
  providedIn: 'root'
})
export class PedidoService implements OnInit{
  private URL = environment.url;
  arrayPedido: pedido[] = [];  
  private _productPedido$: BehaviorSubject<pedido[]> = new BehaviorSubject([]);

  @Output() disparadorStep1 = new EventEmitter();
  @Output() disparadorStep2 = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPedido();
  }
    
  agregarPedido(pedido: pedido){
    this.arrayPedido.push(pedido);
    this._productPedido$.next(this.arrayPedido);
  }

  get getProduct$():Observable<pedido[]>{
    return this._productPedido$.asObservable();
  }

  getAllPedido(){

  }
}
