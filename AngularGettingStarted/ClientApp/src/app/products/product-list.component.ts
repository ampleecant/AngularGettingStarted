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
  errorMessage: string = "";
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
  products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getSeedData();
    this.filteredProducts = this.products

    //this.products retrieved and set inside the retrieve, next happens when we get the data
    /*this.productService.getProductsAsync().subscribe({
      next: products => {
        this.products = products,
        this.filteredProducts = this.products
      },
      error: _error => this.errorMessage = _error
    }); */
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
