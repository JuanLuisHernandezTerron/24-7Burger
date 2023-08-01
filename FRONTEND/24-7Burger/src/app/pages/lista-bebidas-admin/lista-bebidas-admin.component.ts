import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBebidaComponent } from 'src/app/components/dialogsAlimentos/dialog-bebida/dialog-bebida.component';

@Component({
  selector: 'app-lista-bebidas-admin',
  templateUrl: './lista-bebidas-admin.component.html',
  styleUrls: ['./lista-bebidas-admin.component.scss']
})
export class ListaBebidasAdminComponent {
  public isActive = false;
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogBebidaComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  public toggleBebida() {
      this.isActive = !this.isActive;
  }
}
