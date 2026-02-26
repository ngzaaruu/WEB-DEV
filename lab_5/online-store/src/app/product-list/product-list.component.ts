// src/app/product-list/product-list.component.ts

import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';   // ← обязательно!

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent    
  ],
  template: `
    <div class="list">
      @if (products().length === 0) {
        <p>Нет товаров</p>
      } @else {
        @for (product of products(); track product.id) {
          <app-product-item 
            [product]="product"
            (delete)="deleteProduct.emit($event)" />
        }
      }
    </div>
  `,
  // ...
})
export class ProductListComponent {
  // ...
}