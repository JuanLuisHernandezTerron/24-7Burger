import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/productos/producto.service';
@Component({
  selector: 'app-dialog-hamburguesa',
  templateUrl: './dialog-hamburguesa.component.html',
  styleUrls: ['./dialog-hamburguesa.component.scss'],
})
export class DialogHamburguesaComponent implements OnInit {

  constructor(private fb: FormBuilder,private serviceProduct:ProductoService) {
    this.reactiveForm();
  }
  productoForm: FormGroup;
  extras: FormArray;
  selectedFile: any = null;
  imageneProducto:string;

  ngOnInit(): void {
    this.productoForm.addControl('extras', this.extras);        
  }

  reactiveForm() {
    this.productoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      alergenos: new FormControl('', [Validators.required]),
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

  ingresarHamburguesa(){    
    let formDataProducto = new FormData();
    formDataProducto.append('nombre',this.productoForm.get('nombre')?.value);
    formDataProducto.append('precio',this.productoForm.get('precio')?.value);
    formDataProducto.append('descripcion',this.productoForm.get('descripcion')?.value);
    formDataProducto.append('alergenos',this.productoForm.get('alergenos')?.value);
    formDataProducto.append('tipoAlimento','Hamburguesa');
    formDataProducto.append('imagen',this.imageneProducto);
    formDataProducto.append('extras',JSON.stringify(this.productoForm.get('extras')?.value)); 
    this.serviceProduct.ingresarHamburguesa(formDataProducto).subscribe((data)=>{
      console.log(data);
    })
   }

  onAddRow() {
    this.extras.push(this.createItemFormGroup());
  }
  
  onRemoveRow(rowIndex:number){
    this.extras.removeAt(rowIndex);
  }

  imagenesChange(event){
    for (let index = 0; index < event.target.files.length; index++) {
      this.imageneProducto = event.target.files[index];
    }
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      nombre: null,
      precio: null
    });
  }
}
