import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { StarComponent } from "./star.component";

@NgModule({
  declarations: [
    StarComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
