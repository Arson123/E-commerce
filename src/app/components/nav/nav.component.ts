import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu = false;
  counter = 0;
  list = false;
  @Output() showList = new EventEmitter<boolean>();

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  showContact(){
    this.showList.emit(!this.list);
    this.list = !this.list;
  }


  onAddToCart(){
    this.showList.emit(!this.showList);
  }

  toogleMenu(){
    this.showMenu = !this.showMenu;
  }

}
