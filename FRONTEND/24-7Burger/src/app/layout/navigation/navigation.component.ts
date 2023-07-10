import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private route: ActivatedRoute){

  }
  path:string = '';
  ngOnInit() {
    this.route.url.subscribe(segments => {
       this.path = segments.map(segment => segment.path).join('/');
      console.log(this.path);
    });
  }
  rutaActiva(){
    if(this.path == "" || this.path.includes("admin")){
      return true;
    }else{
      return false;
    }
  }
}
