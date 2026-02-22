import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { products } from './products';
import { CommonModule } from '@angular/common';
import {ProductList} from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
