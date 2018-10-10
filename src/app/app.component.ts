import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-app',
  template: `<h1>Bonjour {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }