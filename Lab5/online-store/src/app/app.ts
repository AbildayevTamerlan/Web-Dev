import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products, categories } from './products';
import { Product } from './product.model';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  allProducts: Product[] = products;
  allCategories = categories;
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
}
