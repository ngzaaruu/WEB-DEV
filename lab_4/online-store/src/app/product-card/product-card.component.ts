import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = input.required<Product>();

  currentIndex = signal(0);
  mainImage = computed(() => this.product().images[this.currentIndex()] || this.product().image);

  hasPrev = computed(() => this.currentIndex() > 0);
  hasNext = computed(() => this.currentIndex() < this.product().images.length - 1);

  prev() {
    if (this.hasPrev()) this.currentIndex.update(idx => idx - 1);
  }

  next() {
    if (this.hasNext()) this.currentIndex.update(idx => idx + 1);
  }

  selectImage(index: number) {
    this.currentIndex.set(index);
  }

  shareOnWhatsApp() {
    const text = `Смотри какой товар: ${this.product().name}\n\n${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}

