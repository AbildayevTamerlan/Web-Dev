import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products, categories } from './products';
import { Product } from './product.model';
import { ProductList } from './product-list/product-list';
import { ProductItem } from './product-list/product-item/product-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList, ProductItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  allProducts: Product[] = products;
  allCategories = categories;
  favorites: Product[] = [];
  selectedCategoryId: number | null = null;

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return this.allProducts;
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  handleRemove(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  toggleFavorite(productId: number) {
    const product = this.allProducts.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.allProducts.filter(p => p.isFavorite);
  }
}
