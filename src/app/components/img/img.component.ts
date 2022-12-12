import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = 'inicial';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  /* counter = 0;
  counterFn: number | undefined; */

  constructor() {}

  /*   ngOnInit(): void {
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
      
    }, 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.counterFn);
  }
 */
  imgEror() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }
}
