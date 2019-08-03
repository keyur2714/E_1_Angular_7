import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.mode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productList : Product[] = [];

  constructor(private productService : ProductService,private router:Router) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList():void {
    this.productService.getProductList().subscribe(
      (productList : Product[])=>{
        this.productList = productList;
      }
    )
  }

  add():void{
    this.router.navigate(['addProduct']);
  }

  edit(productId : number):void{
    this.router.navigate(['editProduct',productId]);
  }

  delete(productId : number):void{
    let confirmMsg = confirm("Are you sure want to delete Product?");
    if(confirmMsg){
      this.productService.deleteProductById(productId).subscribe(
        (data)=>{
          alert("Product Deleted successfully...");
          this.getProductList();
        }
      )
    }
    
  }

}
