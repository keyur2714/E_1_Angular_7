import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProductId : number = 0;
  selectedProduct : Product;

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductService,private location: Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramsMap)=>{
        this.selectedProductId = parseInt(paramsMap.get('id'));
        this.productService.getProductById(this.selectedProductId).subscribe(
          (product: Product)=>{
            this.selectedProduct = product;
          }
        )
      }
    )
  }

  back():void{
    this.location.back();
  }
}
