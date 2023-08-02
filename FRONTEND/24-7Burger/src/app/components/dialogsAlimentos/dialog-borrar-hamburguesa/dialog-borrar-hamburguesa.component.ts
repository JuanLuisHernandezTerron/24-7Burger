import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-borrar-hamburguesa',
  templateUrl: './dialog-borrar-hamburguesa.component.html',
  styleUrls: ['./dialog-borrar-hamburguesa.component.scss']
})
export class DialogBorrarHamburguesaComponent {
  constructor(private dialogRef: MatDialogRef<DialogBorrarHamburguesaComponent>){}

  resultado = Boolean(false)
  
  confirmDelete() {
    this.resultado = true
    this.dialogRef.close(this.resultado);
  }
}
