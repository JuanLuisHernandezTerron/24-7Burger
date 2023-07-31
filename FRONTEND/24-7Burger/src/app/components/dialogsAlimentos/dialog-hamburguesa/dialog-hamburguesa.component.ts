import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-hamburguesa',
  templateUrl: './dialog-hamburguesa.component.html',
  styleUrls: ['./dialog-hamburguesa.component.scss'],
})
export class DialogHamburguesaComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.reactiveForm();
  }
  productoForm: FormGroup;
  extras: FormArray;
  selectedFile: any = null;


  ngOnInit(): void {
    
    this.productoForm.addControl('extras', this.extras);
  }

  anadirExtras() {
    // const tablaExtra = document.getElementById('extras');
    // const divPrincipal = document.createElement('div');
    // divPrincipal.className = "row";
    // const divColInfo = document.createElement('div');
    // ["col-7","d-flex","justify-content-around"].forEach(a=>divColInfo.classList.add(a))
    // const matNombre = document.createElement('mat-form-field');
    // const matLabelNombre = document.createElement('mat-label');
    // const inputNombre = document.createElement('input');
    // inputNombre.setAttribute('type','text');
    // tablaExtra?.appendChild(divPrincipal)
    // divPrincipal.appendChild(divColInfo)
    // divColInfo.appendChild(matNombre);
    // matNombre.appendChild(matLabelNombre);
    // matNombre.appendChild(inputNombre);
  }


  reactiveForm() {
    this.productoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]{1,}$")]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
    });

    this.extras = this.fb.array([]);
  }

  previewIMG(e:any){
    const img = document.getElementById("img-hamburguesa") ;
    this.selectedFile = e.target.files[0] ?? null;

    try{
      const default_file = "./../../../../assets/imagenes/icone-de-nourriture-hamburger-noir.png";
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById('img-hamburguesa')?.setAttribute('src', e.target?.result as string);
        }
        reader.readAsDataURL(e.target.files[0]);
      } else {
        document.getElementById('img-hamburguesa')?.setAttribute('src', default_file);
      }

    } catch (e) {
      console.log(e);
    }
  }

  onAddRow() {
    this.extras.push(this.createItemFormGroup());
  
  }
  
  onRemoveRow(rowIndex:number){
    this.extras.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      nombre: null,
      precio: null
    });
  }

  

}
