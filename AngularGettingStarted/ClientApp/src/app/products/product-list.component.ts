import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

//Product Service is transient via providers
@Component({
  //providers: [ProductService],
  selector: 'pm-products',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  private _productService;

  filteredProducts: IProduct[];
  imageMargin: number = 2;
  imageWidth: number = 50;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  pageTitle: string = 'Items Product List';
  showImage: boolean = false;

  //products normally call API
  products: IProduct[];

  //DI dont through the Constructor
  //Private not necessary
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getproducts();
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    //ES2015 for each product
    //indexof found add to filtered list
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  //Toggle true false
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
