# Angular Component Communication Project

## 📌 Task Overview
This project focuses on **Component Communication** in Angular (v17+ using the Standalone API). The goal is to:

1. Use `@Input` to pass a product object from a parent component to a child component for a detailed display.
2. Use `@Output` and `EventEmitter` to allow the child component to notify the parent when a product is added, edited, or deleted.
3. Create a shared service to manage product data and facilitate communication between sibling components.

## 🚀 Implementation Details
### 🔹 **Technologies Used**
- **Angular 17+ (Standalone API)**
- TypeScript
- HTML & CSS

### 🔹 **Project Structure**
```plaintext
src/app/
│── product-list/       # Parent component (lists products)
│── product-detail/     # Child component (shows product details)
│── shared/             # Shared service for data management
│── app.component.ts    # Root component
```

### 🔹 **Features Implemented**
✅ Fetch and display a list of products in `ProductListComponent` (parent).  
✅ Use `@Input` to send selected product details to `ProductDetailComponent` (child).  
✅ Use `@Output` and `EventEmitter` to notify parent when a product is added, updated, or deleted.  
✅ Implement a shared service (`ProductService`) to manage product data.  
✅ Apply styling for a clean UI. 

## 🛠 How to Run
1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
   ```sh
   cd <repo-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm serve
   ```
