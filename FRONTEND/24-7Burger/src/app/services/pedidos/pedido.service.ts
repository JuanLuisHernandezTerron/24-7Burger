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
  @Output() disparadorStep3 = new EventEmitter();
  @Output() cantidadProducto = new EventEmitter();
  @Output() cantidadBebida = new EventEmitter();
  private _pedidoCarrito$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPedido();
  }
    
  setPedido(pedido:any){
    this._pedidoCarrito$.next(pedido);

  }

  get getPedidoCarrito$():Observable<any[]>{
    return this._pedidoCarrito$.asObservable();
  }
  

  agregarPedido(pedido: pedido){
    return this.http.post<pedido[]>(this.URL + '/pedidoCliente/newPedido', pedido).subscribe(response =>{
      this.arrayPedido.push(pedido);
      this._productPedido$.next(this.arrayPedido);

    });
  }

  get getPedido$():Observable<pedido[]>{
    return this._productPedido$.asObservable();
  }

  getAllPedido(){

  }
}
