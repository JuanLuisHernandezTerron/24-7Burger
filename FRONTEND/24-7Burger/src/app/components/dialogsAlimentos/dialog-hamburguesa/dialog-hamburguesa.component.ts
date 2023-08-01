import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-hamburguesa',
  templateUrl: './dialog-hamburguesa.component.html',
  styleUrls: ['./dialog-hamburguesa.component.scss'],
})
export class DialogHamburguesaComponent implements OnInit {

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.reactiveForm();
  }
  productoForm: FormGroup;
  extras: FormArray;
  selectedFile: any = null;


  ngOnInit(): void {
    
    this.productoForm.addControl('extras', this.extras);
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

  previewIMG(event: any): void {
    var booleanAux = false;
    const input = event.target as HTMLInputElement;
    const default_file = "./../../../../assets/imagenes/icone-de-nourriture-hamburger-noir.png";
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        var url = e.target.result;
        img.onload = () => {
            console.log(img.width);
            console.log(img.height);
          if ((img.width < 200)) {
            document.getElementById('img-hamburguesa')?.setAttribute('src', default_file);
            this.toastr.warning("La imagen no tiene el tamaño adecuado.", "Debe ser mayor a 200px");
          }else if( img.height != img.width){
            this.toastr.warning("La imagen no tiene el tamaño adecuado.", "Debe tener relacion de aspecto 1:1");
          }
           else {
            document.getElementById('img-hamburguesa')?.setAttribute('src', e.target?.result as string);

          }
        };
        img.src = e.target.result as string;

      };
      reader.readAsDataURL(file);
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
function mostrarMensaje() {
   this.toastr.warning("La imagen es demasiado grande.", "Máximo 1000px");
}

