import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss']
})
export class ListaHamburguesasAdminComponent {
  public isActive = false;

  public toggleHamburger() {
      this.isActive = !this.isActive;
  }
}
