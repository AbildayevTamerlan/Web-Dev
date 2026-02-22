import { Component } from '@angular/core';
import {products} from '../products';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productList = products;
  protected readonly products = products;

  shareToWhatsapp(link: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(url, '_blank');
  }

  shareToTelegram(link: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(url, '_blank');
  }

  changeImage(product: any, newImage: string) {
    product.image = newImage;
  }
}
