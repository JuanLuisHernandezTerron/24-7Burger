import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Parallax from 'parallax-js'
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private route: ActivatedRoute, private authService: AuthService){

  }
  isLoggedIn = false;

  ngOnInit() {
    this.authService.isLogged.subscribe(res=>{
      this.isLoggedIn = res;
    })
  }

  logout(){
    this.authService.logout();
  }
}
