import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
            <div>
              <h1> {{ pageTitle }} </h1>
              <pm-products></pm-products>
            </div>
           `
})

  //page title property, one way binding { { } } - template expression
  //we do state management through the class

export class AppComponent {
  pageTitle = 'Product Management';
}
