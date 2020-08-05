"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
//Injection anywhere, Singleton
var ProductService = /** @class */ (function () {
    function ProductService(_httpClient) {
        this._httpClient = _httpClient;
        this._productUrl = "api/products/products.json";
    }
    //getProducts(): Observable<IProduct[]> {
    //  return this._httpClient.get<IProduct[]>(this._productUrl)
    //    .pipe(
    //      tap(data => console.log('All: ' + JSON.stringify(data))),
    //      catchError(this.handleError)
    //    );
    //}
    ProductService.prototype.getSeedData = function () {
        return [
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
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
            },
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2019",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "assets/images/saw.png"
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "assets/images/xbox-controller.png"
            }
        ];
    };
    //Handle error should go in own service.
    ProductService.prototype.handleError = function (errorResponse) {
        var errorMessage = "";
        if (errorResponse.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + errorResponse.error.message;
        }
        else {
            errorMessage = "Server returned code: " + errorResponse.status + ", error message is: " + errorResponse.message;
        }
        console.error(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    ProductService = __decorate([
        core_1.Injectable({ providedIn: "root" })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map