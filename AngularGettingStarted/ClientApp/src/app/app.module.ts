import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";
import { WelcomeComponent } from "./home/welcome.component";

//First component loaded, new components need to be added here.
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    NavMenuComponent,
    WelcomeComponent
  ],
  //For root used when app.module.ts
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: 'welcome', pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
