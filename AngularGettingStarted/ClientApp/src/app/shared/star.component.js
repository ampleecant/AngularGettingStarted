"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarComponent = void 0;
var core_1 = require("@angular/core");
var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("Rating " + this.rating + " clicked");
    };
    __decorate([
        core_1.Input()
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output()
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: "pm-star",
            styleUrls: ["./star.component.css"],
            templateUrl: "./star.component.html"
        })
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map