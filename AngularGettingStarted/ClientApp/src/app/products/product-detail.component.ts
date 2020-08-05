import { OnInit, Component } from "@angular/core";
import { IProduct } from "./iproduct";

@Component({
  selector: "pm-product-detail",
  styleUrls: ["./product-detail.component.html"],
  templateUrl: "./product-detail.component.css",
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
