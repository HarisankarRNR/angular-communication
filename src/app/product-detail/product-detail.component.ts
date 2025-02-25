import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product-service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Product>();

  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  editProduct() {
    const updatedProduct: Product = { ...this.product, name: 'Updated Product' };
    this.edit.emit(updatedProduct);
  }
}
