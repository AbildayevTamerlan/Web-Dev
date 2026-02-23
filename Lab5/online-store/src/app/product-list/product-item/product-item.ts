import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  changeImage(newImage: string) {
    this.product.image = newImage;
  }

  like() {
    this.product.likes++;
  }

  shareToWhatsapp() {
    window.open(`https://wa.me/?text=${encodeURIComponent(this.product.link)}`, '_blank');
  }

  shareToTelegram() {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`, '_blank');
  }
}
