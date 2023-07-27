import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  formGroupLogin !: FormGroup;
  hide = true;
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  constructor (private fb: FormBuilder,private serviceAuth : AuthServiceService) { }
  ngOnInit(): void {
    this.validacionLogin();
  }

  validacionLogin(): void {
    this.formGroupLogin = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      contrasena: new FormControl('',[Validators.required /*Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}")*/])
    })
  }

  sendLogin(){
    let tienda :any = {
      correoElectronico : this.formGroupLogin.get('email')?.value,
      contrasena : this.formGroupLogin.get('contrasena')?.value
    }
    
    this.serviceAuth.signIn(tienda).subscribe((data)=>{
      console.log(data)
    })

  }
}
