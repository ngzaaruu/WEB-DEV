// src/app/app.component.ts

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';   // ← обязательно!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent     // ← здесь добавь
  ],
  template: `
    <!-- ... твой шаблон с <app-product-list> ... -->
  `,
  // ...
})
export class AppComponent {
  // ...
}