"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var convert_to_spaces_1 = require("../shared/convert-to-spaces");
var product_detail_component_1 = require("./product-detail.component");
var product_detail_guard_1 = require("./product-detail.guard");
var product_list_component_1 = require("./product-list.component");
var star_component_1 = require("../shared/star.component");
var shared_module_1 = require("../shared/shared.module");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                convert_to_spaces_1.ConvertToSpacesPipe,
                product_detail_component_1.ProductDetailComponent,
                product_list_component_1.ProductListComponent,
                star_component_1.StarComponent,
            ],
            //For child used when not app.module.ts
            imports: [
                router_1.RouterModule.forChild([
                    { path: "products", component: product_list_component_1.ProductListComponent },
                    { path: "products/:id", component: product_detail_component_1.ProductDetailComponent, canActivate: [product_detail_guard_1.ProductDetailGuard] }
                ]),
                shared_module_1.SharedModule
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map