import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product, ProductService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService = inject(ProductService);
  products: Signal<Product[]> = this.productService.getProducts();

  addNewProduct() {
    const newProduct: Product = {
      id: Math.floor(Math.random() * 1000),
      name: 'New Product',
      price: 10000,
    };
    this.productService.addProduct(newProduct);
  }

  editProduct(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct);
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
  }
}
