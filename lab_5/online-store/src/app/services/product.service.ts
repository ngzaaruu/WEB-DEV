import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [

    // 1. Смартфоны
    { id: 1,  categoryId: 1, name: 'iPhone 16 Pro 128GB Silver',   description: 'Флагман Apple 2025', price: 589990, imageUrl: 'https://resources.cdn-kaspi.kz/medias/sys_master/articles/...', rating: 4.9, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-dual-esim-serebristyi-124338365' },
    { id: 2,  categoryId: 1, name: 'iPhone 16 Pro Max 256GB',      description: 'Максимальная версия',  price: 749990, imageUrl: '...', rating: 4.8, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752' },
    { id: 3,  categoryId: 1, name: 'Samsung Galaxy S25 Ultra',     description: 'Топовый Android',     price: 599990, imageUrl: '...', rating: 4.7, likes: 0, kaspiUrl: '...' /* найди актуальную */ },
    { id: 4,  categoryId: 1, name: 'Xiaomi 14T 12/256GB',          description: 'Отличное соотношение',price: 289990, imageUrl: '...', rating: 4.6, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-14t-12-gb-256-gb-zelenyi-podarok-124290904' },
    { id: 5,  categoryId: 1, name: 'HONOR 200 Pro 12/512GB',       description: 'Камерофон',           price: 349990, imageUrl: '...', rating: 4.7, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/honor-200-pro-12-gb-512-gb-chernyi-120378705' },

    // 2. Ноутбуки
    { id: 6,  categoryId: 2, name: 'MacBook Air 13 2025 M4 16/256',description: 'Лёгкий и мощный',     price: 489990, imageUrl: '...', rating: 4.9, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472' },
    { id: 7,  categoryId: 2, name: 'MacBook Air 15 2025 16/256',    description: 'Большой экран',      price: 559990, imageUrl: '...', rating: 4.8, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-16-gb-ssd-256-gb-macos-mw1l3ru-a-138172227' },
    { id: 8,  categoryId: 2, name: 'ASUS ROG Strix SCAR 18',       description: 'Игровой монстр',      price: 1299990,imageUrl: '...', rating: 4.7, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/asus-rog-strix-scar-18-18-64-gb-ssd-1024-gb-win-11-g835lw-sa115w-90nr0li1-m005r0-137132273' },
    { id: 9,  categoryId: 2, name: 'Xiaomi RedmiBook 15',           description: 'Бюджетный рабочий',   price: 189990, imageUrl: '...', rating: 4.5, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-redmibook-15-15-6-8-gb-ssd-256-gb-win-11-xma2101-bn-jyu4525ru-107677281' },
    { id: 10, categoryId: 2, name: 'Acer Nitro 5 2025 RTX',         description: 'Игровой средний',     price: 459990, imageUrl: '...', rating: 4.6, likes: 0, kaspiUrl: '...' },

    // 3. Наушники (TWS и беспроводные)
    { id: 11, categoryId: 3, name: 'Apple AirPods 4',               description: 'Лучшие от Apple',     price: 68793,  imageUrl: '...', rating: 4.8, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/c/headphones' /* найди точную */ },
    { id: 12, categoryId: 3, name: 'Sony WH-1000XM5',               description: 'Топ шумодав',         price: 189990, imageUrl: '...', rating: 4.9, likes: 0, kaspiUrl: '...' },
    { id: 13, categoryId: 3, name: 'Samsung Galaxy Buds3 Pro',      description: 'Для Samsung',         price: 99990,  imageUrl: '...', rating: 4.7, likes: 0, kaspiUrl: '...' },
    { id: 14, categoryId: 3, name: 'JBL Tune Flex',                 description: 'Хороший звук',        price: 34990,  imageUrl: '...', rating: 4.6, likes: 0, kaspiUrl: '...' },
    { id: 15, categoryId: 3, name: 'Xiaomi Redmi Buds 6',           description: 'Бюджет топ',          price: 14990,  imageUrl: '...', rating: 4.5, likes: 0, kaspiUrl: '...' },

    // 4. Планшеты
    { id: 16, categoryId: 4, name: 'iPad Air 11 2025 M3 8/256',     description: 'Мощный планшет',      price: 329990, imageUrl: '...', rating: 4.9, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-256-gb-fioletovyi-138203241' },
    { id: 17, categoryId: 4, name: 'iPad Air 13 2025 8/128',        description: 'Большой экран',       price: 399990, imageUrl: '...', rating: 4.8, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-air-13-2025-wi-fi-13-djuim-8-gb-128-gb-seryi-138234981' },
    { id: 18, categoryId: 4, name: 'Huawei MatePad 11.5 2025',      description: 'PaperMatte экран',    price: 189990, imageUrl: '...', rating: 4.7, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-seryi-podarok-145939457' },
    { id: 19, categoryId: 4, name: 'Huawei MatePad 12 X 2025',      description: 'Флагман Huawei',      price: 289990, imageUrl: '...', rating: 4.6, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/p/huawei-matepad-12-x-2025-papermatte-12-djuim-12-gb-256-gb-zelenyi-podarok-148354776' },
    { id: 20, categoryId: 4, name: 'iPad A16 11 2025 6/128',        description: 'Бюджетный iPad',      price: 201242, imageUrl: '...', rating: 4.8, likes: 0, kaspiUrl: 'https://kaspi.kz/shop/c/tablets' /* уточни */ }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  // Для лайков (мутируем объект — в реальном проекте лучше immutable или сигналы)
  incrementLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}