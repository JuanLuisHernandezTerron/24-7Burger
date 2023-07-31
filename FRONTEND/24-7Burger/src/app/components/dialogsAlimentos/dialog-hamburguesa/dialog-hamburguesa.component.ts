import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-hamburguesa',
  templateUrl: './dialog-hamburguesa.component.html',
  styleUrls: ['./dialog-hamburguesa.component.scss'],
})
export class DialogHamburguesaComponent implements OnInit {
  selectedFile: any = null;
  constructor() {}

  ngOnInit(): void {
  }

  previewIMG(e:any){
    const img = document.getElementById("img-hamburguesa") ;
    this.selectedFile = e.target.files[0] ?? null;

    try{
      const default_file = "./../../../../assets/imagenes/icone-de-nourriture-hamburger-noir.png";
      if (e.target.files[0]) {
        const reader = new FileReader();        
        reader.onload = function (e) {
          document.getElementById('img-hamburguesa')?.setAttribute('src',e.target?.result as string);
        }
        reader.readAsDataURL(e.target.files[0]);
      }else{
        document.getElementById('img-hamburguesa')?.setAttribute('src',default_file);
      }
      
    }catch(e){
      console.log(e);
    }
  }

}
