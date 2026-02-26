import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product().imageUrl" [alt]="product().name" />
      
      <div class="info">
        <h3>{{ product().name }}</h3>
        <p>{{ product().description }}</p>
        <div class="price-rating">
          <strong>{{ product().price | number }} ₸</strong>
          <span>★ {{ product().rating }}</span>
        </div>
        
        <div class="likes">
          <button (click)="like()" class="like-btn">❤ {{ product().likes }}</button>
        </div>
      </div>
      
      <div class="actions">
        <button (click)="share()">Поделиться</button>
        <button class="delete-btn" (click)="delete.emit(product().id)">Удалить</button>
      </div>
    </div>
  `,
  styles: [`
    .card { 
      border: 1px solid #ddd; border-radius: 12px; overflow: hidden; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: white;
    }
    img { width: 100%; height: 220px; object-fit: contain; background: #f8f9fa; }
    .info { padding: 1rem; }
    h3 { margin: 0 0 0.5rem; font-size: 1.2rem; }
    p { color: #555; font-size: 0.95rem; margin: 0 0 1rem; }
    .price-rating { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 1rem; }
    .actions { display: flex; gap: 0.5rem; padding: 0 1rem 1rem; }
    button { padding: 0.6rem 1rem; border-radius: 6px; cursor: pointer; }
    .like-btn { background: #ffebee; border: 1px solid #ffcdd2; color: #e91e63; }
    .like-btn:hover { background: #ffcdd2; }
    .delete-btn { background: #ffebee; color: #d32f2f; border: 1px solid #ef9a9a; margin-left: auto; }
    button.share { background: #e0f7fa; border: 1px solid #b2ebf2; }
  `]
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  constructor(private productService: ProductService) {}

  like() {
    this.productService.incrementLikes(this.product().id);
    // Чтобы UI обновился — можно использовать сигналы в продукте, но для простоты
    // мутируем напрямую (не идеально, но работает)
    this.product().likes++;
  }

  share() {
    const text = `Смотри какой товар: ${this.product().name} за ${this.product().price} ₸`;
    const url = encodeURIComponent(this.product().kaspiUrl);
    const waUrl = `https://wa.me/?text=${text} ${url}`;
    window.open(waUrl, '_blank');
  }
}