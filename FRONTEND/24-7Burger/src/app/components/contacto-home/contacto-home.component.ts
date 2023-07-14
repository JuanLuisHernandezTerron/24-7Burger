import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto-home',
  templateUrl: './contacto-home.component.html',
  styleUrls: ['./contacto-home.component.scss']
})
export class ContactoHomeComponent implements OnInit{
  formularioContacto !:FormGroup;
  constructor ( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validacionFormulario();
  }

  validacionFormulario():void{
    this.formularioContacto = this.fb.group({
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      telefono: new FormControl('',[Validators.required, Validators.maxLength(9)]),
      asunto: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
    })
  }

  sendFormulario(){
    alert('Funciao')
  }
}
