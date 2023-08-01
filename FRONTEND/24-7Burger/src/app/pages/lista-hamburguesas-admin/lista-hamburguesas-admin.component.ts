import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogHamburguesaComponent } from './../../components/dialogsAlimentos/dialog-hamburguesa/dialog-hamburguesa.component';
import { ProductoService } from 'src/app/services/productos/producto.service';

@Component({
  selector: 'app-lista-hamburguesas-admin',
  templateUrl: './lista-hamburguesas-admin.component.html',
  styleUrls: ['./lista-hamburguesas-admin.component.scss'],
})
export class ListaHamburguesasAdminComponent {
  public isActive = false;
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogHamburguesaComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  public toggleHamburger() {
      this.isActive = !this.isActive;
  }
}