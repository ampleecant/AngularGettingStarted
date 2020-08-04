import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  selector: 'pm-products',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
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
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  ngOnInit(): void {
    console.log(`ProductListComponent initialised`);
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
