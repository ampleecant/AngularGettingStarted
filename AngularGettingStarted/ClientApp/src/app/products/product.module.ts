import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ConvertToSpacesPipe } from "../shared/convert-to-spaces";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { ProductListComponent } from "./product-list.component";
import { StarComponent } from "../shared/star.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    ProductDetailComponent,
    ProductListComponent,
    StarComponent,
  ],
  //For child used when not app.module.ts
  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { path: "products/:id", component: ProductDetailComponent, canActivate: [ProductDetailGuard] }
    ]),
    SharedModule
  ]
})
export class ProductModule {}
