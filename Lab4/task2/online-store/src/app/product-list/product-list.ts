import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productList = products;
  searchText: string = '';


  get filteredProducts() {
    return this.productList.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

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
