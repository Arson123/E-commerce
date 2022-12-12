import { Component, OnInit } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import SwiperCore, { Pagination } from 'swiper';
import Swal from 'sweetalert2';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  productChoose: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
  };
  showProductDetail = false;
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.loadMore();
  }

  onAddToCard(product: Product) {
    this.storeService.addProduct(product);
  }

  toogleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.statusDetail = 'loading';
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.toogleProductDetail();
        this.productChoose = data;
        this.statusDetail = 'success';
      },
      (errorMsg) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: errorMsg,
        });
        this.statusDetail = 'error';
      }
    );
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Arroz',
      images: [
        'https://www.elespectador.com/resizer/znHvSuO0PZv5xkYtgT7IQqmobM4=/arc-anglerfish-arc2-prod-elespectador/public/PS4CQIN2ENBKJM7R5NWL4FCV7M.jpg',
      ],
      price: 500,
      description: 'bla bla bla',
      categoryId: 1,
    };
    this.productService.create(product).subscribe((data) => {
      this.products.unshift(data);
      Swal.fire({
        icon: 'success',
        title: 'Producto Creado',
        text: ''
      })  
    });
  }

  updateProduct() {
    const change: UpdateProductDTO = {
      description:
        'Rice is the seed of the Oryza sativa or Oryza glaberrima plant.',
    };
    const id = this.productChoose.id;
    this.productService.update(id, change).subscribe((data) => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChoose.id
      );
      this.products[productIndex] = data;
      this.productChoose = data;
    });
  }

  deleteProduct() {
    const id = this.productChoose.id;
    this.productService.delete(id).subscribe((data) => {
      const productIndex = this.products.findIndex(
        (item) => item.id === this.productChoose.id
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }

  loadMore() {
    this.productService
      .getProductsByPage(this.limit, this.offset)
      .subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
  }
}
