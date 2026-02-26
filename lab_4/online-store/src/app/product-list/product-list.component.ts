import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <h1>Каталог товаров с Kaspi.kz</h1>
    
    <div class="product-grid">
      @for (product of products; track product.id) {
        <app-product-card [product]="product" />
      } @empty {
        <p>Товары загружаются...</p>
      }
    </div>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin: 2rem 0 1.5rem;
      color: #1a1a1a;
      font-size: 2.2rem;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.8rem;
      padding: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    
    @media (max-width: 768px) {
      .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      }
    }
    
    @media (max-width: 480px) {
      .product-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 16 128GB Зеленый',
      description: 'Мощный новый iPhone 16 с отличной камерой, чипом A18 и длительным временем работы. Одна из самых популярных моделей 2025–2026 годов.',
      price: 438437,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S25 Ultra 12/256GB Серый',
      description: 'Флагман 2026 года с камерой 200 МП, поддержкой S Pen и мощным процессором Snapdragon. Один из самых ожидаемых смартфонов года.',
      price: 589000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc8/20118457.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pc8/20118459.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p99/pcb/20118463.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/pcc/20118467.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/'
    },
    {
      id: 3,
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники с активным шумоподавлением, адаптивным аудио, пространственным звуком и отличным качеством.',
      price: 109990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Лёгкий, стильный и производительный ноутбук с Retina-дисплеем и чипом M1. Отличный выбор для работы и учёбы.',
      price: 439689,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        
        
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/'
    },
    {
      id: 5,
      name: 'Пылесос ZAMAN PRO X8 синий, бирюзовый',
      description: 'Компактный, мощный и стильный беспроводной пылесос с хорошей автономностью и низким уровнем шума.',
      price: 59999,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p6d/34792506.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p6d/34792506.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p6e/34792507.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p6f/34792508.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/zaman-pro-x8-sinii-birjuzovyi-131610194/'
    },
    {
      id: 6,
      name: 'Xerox Phaser 3020BI белый',
      description: 'Компактный монохромный лазерный принтер для дома и небольшого офиса. Поддержка Wi-Fi и быстрая печать.',
      price: 69990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/hfa/63757710163998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/hfb/63757710295070.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/'
    },
    {
      id: 7,
      name: 'Пульт ДУ HYAOU RM-L1162',
      description: 'Универсальный пульт HUAYU RM-L1162 с качественной сборкой и поддержкой большинства современных телевизоров.',
      price: 1290,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/h11/64411382480926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h79/h11/64411382480926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h12/64411382611998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h13/64411382743070.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hyaou-rm-l1162-103582436/'
    },
    {
      id: 8,
      name: 'Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный',
      description: 'Мощный планшет с OLED-дисплеем, чипом M4 и поддержкой Apple Pencil Pro. Идеален для творчества и работы.',
      price: 512474,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb4/h76/86106948370462.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h77/86106948501534.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/'
    },
    {
      id: 9,
      name: 'Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Стильные смарт-часы с датчиками здоровья, отслеживанием активности и поддержкой звонков. Компактная версия 40 мм.',
      price: 139990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p9c/5542336.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p9d/5542337.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/'
    },
    {
      id: 10,
      name: 'Яндекс Станция Лайт YNDX-00025 фиолетовый',
      description: 'Компактная умная колонка с голосовым помощником Алиса, яркой подсветкой и хорошим звуком для небольшой комнаты.',
      price: 55000,
      rating: 1.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9g/hfd/64362954850334.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9h/hfe/64362954981406.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/'
    }
  ];
}