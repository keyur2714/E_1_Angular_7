import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  
})
export class ProductListComponent implements OnInit {

  productList : Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,private router : Router ,private productService : ProductService) { }

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

  addProduct():void {
    this.router.navigate(['/productEntry']);
  }
}
