import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('te escucho hijo' + img);
  }

  viewContact(list: boolean){
    this.showImg = list;
  }
  
  toogleImg(){
    this.showImg = !this.showImg;
  }
}
