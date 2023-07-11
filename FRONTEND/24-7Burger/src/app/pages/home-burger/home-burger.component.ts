import { Component } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home-burger',
  templateUrl: './home-burger.component.html',
  styleUrls: ['./home-burger.component.scss']
})
export class HomeBurgerComponent {
  ngOnInit() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene as HTMLElement);


  }
}
