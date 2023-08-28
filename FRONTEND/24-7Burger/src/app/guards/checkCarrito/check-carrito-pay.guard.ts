import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';

@Injectable({
  providedIn: 'root'
})
export class CheckCarritoPayGuard implements CanActivate {

  constructor(private pedidoService: PedidoService, private route:Router) { }
  canActivate(): any {
    this.pedidoService.getPedido$.subscribe(data=>{
      if (data.length > 0) {  
        this.route.navigate(['/pago']);
      } else {
        this.route.navigate(['/']);
      }
    })

  }
}
