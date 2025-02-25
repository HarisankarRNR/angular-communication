import { Injectable, Signal, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 25000 },
  ]);

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.set([...this.products(), product]);
  }

  updateProduct(updatedProduct: Product) {
    this.products.set(
      this.products().map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  }

  deleteProduct(productId: number) {
    this.products.set(this.products().filter((p) => p.id !== productId));
  }
}
